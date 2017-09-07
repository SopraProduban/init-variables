export class PeliculasComponentModel{

    titulo : string;
    director : string;
    categoria : Categoria;

    constructor(titulo:string, director:string,  categoria:Categoria){
        this.titulo = titulo;
        this.director = director;        
        this.categoria = categoria;
    }
}

type Categoria = "Comedia" | "Terror" | "Historica";

