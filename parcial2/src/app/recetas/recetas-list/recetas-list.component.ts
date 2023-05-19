import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';
import { RecetasDetailComponent } from '../recetas-detail/recetas-detail.component';

@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.css']
})
export class RecetasListComponent implements OnInit {


  recetas: Array<Receta> = [];


  constructor(private recetaService: RecetaService) { }
  selectedReceta!:Receta;
  selected = false;

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }
  onSelected(receta: Receta): void {
    this.selected = true;
    this.selectedReceta = receta;
  }

  ngOnInit() {
    this.getRecetas();
  }

}
