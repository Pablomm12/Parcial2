import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasListComponent } from './recetas-list/recetas-list.component';
import { RecetasDetailComponent } from './recetas-detail/recetas-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RecetasListComponent],
  declarations: [RecetasListComponent,RecetasDetailComponent]
})
export class RecetasModule { }
