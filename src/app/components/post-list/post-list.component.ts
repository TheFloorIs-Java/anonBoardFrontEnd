import { HttpClient } from '@angular/common/http';
import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit { 




  displayedColumns: string[] = ["postName"];
  dataSource!: MatTableDataSource<any>;
  generaId!: number;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http : HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(data => {
      this.generaId = data['id'];
    });

    
  }
  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
     this.http.get<any>(`http://localhost:8080/post/${this.generaId}`).subscribe(post => {
      this.dataSource = new MatTableDataSource(post);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  goToPost(row: any){
    this.router.navigate(['/post'],{queryParams: {id: row.post_id}});
  }
}




  





