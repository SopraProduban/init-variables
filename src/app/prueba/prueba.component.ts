import { Component, OnInit, Input } from '@angular/core';
import { PeliculasComponentModel } from "../peliculas-component-model";
import { ServicioPruebaService } from "../servers/servicio-prueba.service";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
  providers: [ServicioPruebaService]
})


export class PruebaComponent implements OnInit {

  //importamos variable del appcomponent
  @Input() titulo : string;
  @Input() variable: string;
 
 


  //Se recomineda declarar las variables a undefinded, no a null
  variable_null: number = null; 
  variable_undefined : number = undefined;
  titulo_ ;

  peliculas:PeliculasComponentModel[];

  peliculasServicio: Array<PeliculasComponentModel>;

  //CONSTRUCTOR
  //inyeccion de dependencias
  //inizializacion simple de variables

  constructor(private servicioPrueba:ServicioPruebaService){
    console.log("constructor");
    this.peliculas = [
      new PeliculasComponentModel("Pelicula1","director1","Comedia"),
      new PeliculasComponentModel("Pelicula2","director2","Terror"),
      new PeliculasComponentModel("Pelicula3","director3","Historica")
    ];
   }
   
   

  //NGONINIT
  //realizamos inicializaciones complejas-> tipo obtener datos por medio de un servicio
  //obtener valores de las propiedades del tipo Input
  ngOnInit(){
    this.peliculasServicio = this.servicioPrueba.crearPeliculas();
    this.titulo_ = "este es el titulo -> " + this.titulo;
  }

}
 