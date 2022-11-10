import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class PostApi{
    baseEndpoint = 'posts'
    constructor(private http:HttpClient){
    }
     getAllPost(){
        return this.http.get(this.baseEndpoint)
     }
}