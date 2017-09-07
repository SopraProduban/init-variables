import { Injectable } from '@angular/core';
import { PeliculasComponentModel } from "../peliculas-component-model";

@Injectable()
export class ServicioPruebaService {

  peliculas:PeliculasComponentModel[];
  
  constructor() { }

  public crearPeliculas(){
    return this.peliculas = [
        new PeliculasComponentModel("Pelicula1Servicio","director1","Comedia"),
        new PeliculasComponentModel("Pelicula2Servicio","director2","Terror"),
        new PeliculasComponentModel("Pelicula3Servicio","director3","Historica")
      ];
  }
}
