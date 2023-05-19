import { Component, Input ,OnInit } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-recetas-detail',
  templateUrl: './recetas-detail.component.html',
  styleUrls: ['./recetas-detail.component.css']
})
export class RecetasDetailComponent implements OnInit {
  
  @Input() recetaDetail!: Receta;

  constructor() { }

  ngOnInit() {
  }

}
