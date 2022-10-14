import { genera } from './../../models/genera';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  value: string;
  
  generas! : Array<genera>;
  post : post = {};
  
  Genera: genera= {};

  constructor(private http: HttpClient) {
    this.value = "";
    
   }

  ngOnInit(): void {
    this.getAllGeneras();

    
  }
  onSubmit(): void {
   
    for(let genera of this.generas) {
      
      if (genera.genera === this.value){
        this.post.genera = genera;
        
        break;
      }
    }
    
   this.http.post<any>("http://localhost:8080/post/add", this.post).subscribe(data => {console.log(data)});

  }
  getAllGeneras(): any{
    return this.http.get<any>("http://localhost:8080/genera/all").subscribe(genera => {
     this.generas = genera;
    });

  } 
  getGeneraByName(name: string){
    this.Genera.genera = name;
    this.http.request<genera>("GET","http://localhost:8080/genera",{body: this.Genera}).subscribe(genera => {
      this.post.genera = genera;

  });

  
  
}
}
