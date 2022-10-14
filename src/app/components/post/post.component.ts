import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: post = {}as post;
  postId!: number;

  constructor(private http: HttpClient, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(data => {
      this.postId = data['id'];
    });
   }

  ngOnInit(): void {
    this.getPost(this.postId);
  }
  onSubmit(): void {}
  getPost(postid : number){
    this.http.get<post>(`http://localhost:8080/post/id/${postid}`).subscribe(data => {this.post = data});
  }

}
