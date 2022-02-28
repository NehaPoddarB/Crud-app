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

  getAllImg():string[]
  {
    return[
      '/assets/g-3.jpg',
      '/assets/g-4.jpg'
      // '/assets/g-5.jpg',
      // '/assets/g-6.jpg',
      // '/assets/g-7.jpg',
      // '/assets/g-8.jpg',
      // '/assets/g-9.jpg',
      // '/assets/g-10.jpg',
      // '/assets/g-11.jpg',
      // '/assets/g-12.jpg',
      // '/assets/g-13.jpg',
      // '/assets/g-14.jpg'

    ];
  }
}


