import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreteRecipeComponent } from '../crete-recipe/crete-recipe.component';

@Component({
  selector: 'app-read-mode',
  templateUrl: './read-mode.component.html',
  styleUrls: ['./read-mode.component.css'],
})
export class ReadModeComponent implements OnInit {
  DisplayRecipe: any;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        let pid: any = param.get('id');
        this.getData(pid);
      },
    });
  }

  getData(pid:any){
    this.api.getRecipeById(pid).subscribe({
      next: (res) => {
        this.DisplayRecipe = res;
        console.log(this.DisplayRecipe.value);
      },
    });
  }

  editRecipe() {
    this.dialog.open(CreteRecipeComponent, {
      width: '60%',
      data: this.DisplayRecipe,
  })//.afterClosed().subscribe(val=>{
  //       if(val==='update')
  //      {
  //       this.api.getRecipe()
  //      }
  //   })
  }

  deleteRecipe(id: number) {
    this.api.deleteRecipe(id).subscribe({
      next: () => {
        alert('Recipe Deleted Successfully!');
      },
      error: () => {
        alert('Unable to Delete Recipe');
      },
    });
  }
}
