export class PeliculasComponentModel{

   // titulo : string;
   // director : string;
   // categoria : Categoria;

// constructor( titulo:string, director:string, categoria:Categoria){
    //   this.titulo = titulo;
    //  this.director = director;        
    //  this.categoria = categoria;
//  }

    constructor(public titulo:string, public director:string, public categoria:Categoria){
    }
}

type Categoria = "Comedia" | "Terror" | "Historica";

