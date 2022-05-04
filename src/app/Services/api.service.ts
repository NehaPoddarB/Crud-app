import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  postRecipe(data:any){
    return this.http.post<any>("http://localhost:3000/CreateList/",data);
  }

  getRecipe(){
    return this.http.get<any>("http://localhost:3000/CreateList/");
  }

  getRecipeById(id:number){
    return this.http.get<any>("http://localhost:3000/CreateList/"+id);
  }

  putRecipe(data:any , id:number){
    return this.http.put<any>("http://localhost:3000/CreateList/"+id,data)
  }

  deleteRecipe(id:number){
    return this.http.delete<any>("http://localhost:3000/CreateList/"+id);
  }

 
}


