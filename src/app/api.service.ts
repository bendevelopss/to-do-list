import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  baseUrl = 'http://192.168.0.178:3000';
  constructor(public http : Http) { }

  getPost(){
    return this.http.get(this.baseUrl+'/posts').map((res) => res.json());
  }

  addPost(args){
    // let header = new HttpHeaders({
    //   'Content-Type' : 'application/json'
    // })
    return this.http.post(this.baseUrl+'/posts', args).map((res) => res.json());
  }
  // getComment(){

  // }
}
