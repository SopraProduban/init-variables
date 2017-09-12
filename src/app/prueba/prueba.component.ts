import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PeliculasComponentModel } from "../peliculas-component-model";
import { ServicioPruebaService } from "../servers/servicio-prueba.service";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
  providers: [ServicioPruebaService]
})


export class PruebaComponent implements OnInit, OnChanges {

  //importamos variable del appcomponent
  @Input() titulo : string;
  @Input() variable: string;
 
  //Se recomineda declarar las variables a undefinded, no a null
  variable_null: number = null; 
  variable_undefined : number = undefined;
  tituloOnInit;
  tituloConstructor;

  contador_constructor:number ;
  contador_oninit:number;

  peliculas:PeliculasComponentModel[];
  peliculasServicio: Array<PeliculasComponentModel>;
  peliculasServicioConstructor : PeliculasComponentModel[];

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
    this.tituloConstructor = "titulo en el constructor -> " + this.titulo;
    this.peliculasServicioConstructor = this.servicioPrueba.crearPeliculas();
   }

   
   ngOnChanges(changes : SimpleChanges){
      console.log("ngOnchanges");
      console.log(changes);
   }


  //NGONINIT
  //realizamos inicializaciones complejas-> tipo obtener datos por medio de un servicio
  //obtener valores de las propiedades del tipo Input
  ngOnInit(){
    console.log("ngOnInit");
    this.peliculasServicio = this.servicioPrueba.crearPeliculas();
    this.tituloOnInit = "titulo en el ngOnInit -> " + this.titulo;
    //console.log(typeof this.tituloOnInit);
    //var result = this.errorsOnThree(3);
    //var result2 = this.errorsOnThreeClass(3);

    
    // try {
    //   var result = this.errorsOnThreeClass(3);
    // }catch (err) {
    //   if ((err instanceof ApplicationError)) {
    //   throw err;
    // }
    //   console.log('Error caught, no action taken');
    // }
  }

   errorsOnThree(input: number) {
      if (input === 3) {
        throw new Error('Three is not allowed');
      }
      return input;
    }

    errorsOnThreeClass(input: number) {
      if (input === 3) {
        throw new ApplicationError('Three is not allowed');
      }
      return input;
    }
}
 
class ApplicationError implements Error {
  public name = 'ApplicationError';

  constructor(public message: string) {
  }

  toString() {
    return this.name + ': ' + this.message;
  }
}