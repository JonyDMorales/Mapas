export class Marcador {

    public latitud :number;
    public longitud :number;
    public titulo :string = 'Sin título';
    public descripcion = 'Sin descripción';

    constructor(  lat :number,  lng :number ) { 
        this.latitud = lat;
        this.longitud = lng;
    }
}