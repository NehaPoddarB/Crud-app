import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreteRecipeComponent } from './Components/crete-recipe/crete-recipe.component';
import { ApiService } from './Services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog:MatDialog, private api:ApiService) {}
  title = 'RecipeRepo';


  list=["Total","Create", "Update", "Delete"]


  openDialog() {
    this.dialog.open(CreteRecipeComponent, {
    width:'60%'
     })//.afterClosed().subscribe(val=>{
    //  if(val==='save')
    //  {
    //   this.api.getRecipe()
    //   }
  //  })
  }

}
