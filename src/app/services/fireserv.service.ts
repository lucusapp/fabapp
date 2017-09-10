import { Injectable } from '@angular/core';
import {Http, Headers}  from "@angular/http";
import {Alias} from "../interface/alias.interface";

@Injectable()
export class FireservService {

  partnersUrl = "https://lucusapp-37dfb.firebaseio.com/lucusapp.json";


  constructor( private http:Http) { }

  nuevoPartner (alias:Alias){
    let body = JSON.stringify (alias);
    let headers = new Headers({
  'Content-Type':'application/json'
});
return this.http.post (this.partnersUrl, body, {headers:headers})
  .map(res=>{
    console.log();
    return res.json()
  });
  }
}
