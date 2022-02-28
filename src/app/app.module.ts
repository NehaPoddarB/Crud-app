import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreteRecipeComponent } from './Components/crete-recipe/crete-recipe.component';
import { HomeComponent } from './Components/home/home.component';
import { RecipyListComponent } from './Components/recipy-list/recipy-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import {MatChipsModule} from '@angular/material/chips';
 import {ReactiveFormsModule } from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';
import { ReadModeComponent } from './Components/read-mode/read-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    CreteRecipeComponent,
    HomeComponent,
    RecipyListComponent,
    ReadModeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
