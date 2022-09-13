import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DetailsComponent } from './details/details.component';

//Módulos
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]  
})
export class PagesModule { }
