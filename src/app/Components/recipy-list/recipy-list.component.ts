import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-recipy-list',
  templateUrl: './recipy-list.component.html',
  styleUrls: ['./recipy-list.component.css']
})
export class RecipyListComponent implements OnInit {

  constructor(private api:ApiService) { }
  DisplayRecipe:any[]=[];
  Images:String[]=[];


  ngOnInit(): void {

  this.getAllRecipe();
  this.Images=this.api.getAllImg()

  }

  getAllRecipe(){
    this.api.getRecipe()
    .subscribe({
     next:(res)=>{
     this.DisplayRecipe=res;
     },
     error:()=>{
       alert("error while adding Recipe")
     }
   })
   }

   
  
}
