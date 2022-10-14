import { genera } from './../../models/genera';
import { ApiService } from './../../services/api.service';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-genera-list',
  templateUrl: './genera-list.component.html',
  styleUrls: ['./genera-list.component.scss']
})
export class GeneraListComponent implements OnInit{
  displayedColumns: string[] = ["genera"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient, private router: Router) {
    
  }
  ngOnInit(): void {
   this.getAllGeneras(); 
  }
 
  getAllGeneras(): any{
    return this.http.get<any>("http://localhost:8080/genera/all").subscribe(genera => {
      this.dataSource = new MatTableDataSource(genera);
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
    this.router.navigate(['/post-list'],{queryParams: {id: row.genera_id}});
  }
}




  


