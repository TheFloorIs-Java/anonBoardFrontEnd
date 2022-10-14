import { reply } from './../models/reply';
import { post } from './../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { genera } from '../models/genera';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseURL: string = "http://localhost:8080/";


  constructor(private http: HttpClient) {
    
   }

  getAllGeneras(): any{
    return this.http.get<any>("http://localhost:8080/genera/all");
  } 
  saveGenera(genera: genera){
    return this.http.post<genera>("http://localhost:8080/genera/save",genera);
  }
  getAllPosts(): any{
    return this.http.get<any>("http://localhost:8080/post/all");
  }
  savePost(post: post){
    return this.http.post<post>("http://localhost:8080/post/add",post); 
  }
  getAllReply(post_id: number): any{
    return this.http.get<any>(`http://localhost:8080/reply/${post_id}`);
  }
  saveReply(reply: reply){
    return this.http.post<reply>("http://localhost:8080/reply/add",reply);
  }

}
