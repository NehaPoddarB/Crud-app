import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-crete-recipe',
  templateUrl: './crete-recipe.component.html',
  styleUrls: ['./crete-recipe.component.css'],
})

export class CreteRecipeComponent implements OnInit {
  CreateList!: FormGroup;
  ActionBtn="Save";
  Title="Create New Recipe!";

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dilogRef: MatDialogRef<any>,
   
  ) {}

  ngOnInit(): void {
    this.CreateList = this.formBuilder.group({
      racipeName: ['', Validators.required],
      prepationTime: ['', Validators.required],
      ingredients: ['' ,Validators.required],
      instructions: ['', Validators.required],
    });
   
    if(this.editData){
      this.Title="Update the Recipe"
      this.ActionBtn="Update"
      this.CreateList.controls['racipeName'].setValue(this.editData.racipeName)
      this.CreateList.controls['prepationTime'].setValue(this.editData.prepationTime)
      this.CreateList.controls['ingredients'].setValue(this.editData.ingredients)
      this.CreateList.controls['instructions'].setValue(this.editData.instructions)
    }


  }
 
  addRecipe() {
    if(!this.editData){
      if (this.CreateList.valid) {
        this.api.postRecipe(this.CreateList.value).subscribe({
          next: (res) => {
            alert('Recipe added Successfully!');
            this.CreateList.reset();
            this.dilogRef.close('save');
          },
          error: () => {
            alert('error while geting Recipelist');
          },
        });
      }
    }else{
      this.updateRecipe();
    }
  }


  updateRecipe(){
    this.api.putRecipe(this.CreateList.value,this.editData.id)
    .subscribe({
      next:()=>{
       alert("Recipe Updated Successfully!");
       this.CreateList.reset();
       this.dilogRef.close('update');
      },
      error:()=>
      {
        alert("Unable to update Recipe!")
      }
    })

  }  
}
