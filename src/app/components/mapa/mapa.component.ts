import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditarComponent } from './editar.component';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styles: [ ]
})
export class MapaComponent implements OnInit {
    
    marcadores : Marcador[] = [];
    latitud :number = 24.0787522/*19.4283854*/;
    longitud :number = -103.5518159;
    styles: any[] = [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    ]

    constructor(public snackBar: MatSnackBar,public dialog: MatDialog) { 
        if(localStorage.getItem('marcadores')){
            this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
        }
    }
    
    ngOnInit() {
    }

    public agregarMarcador( evento ){
        const coordenadas: { lat :number, lng :number } = evento.coords;
        const nueva = new Marcador(coordenadas.lat, coordenadas.lng);
        this.marcadores.push(nueva);
        this.guardar();
        this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 4000 });
    }
    
    public guardar(){
        localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
    }

    public editar( marcador :Marcador ){
        let dialogRef = this.dialog.open( EditarComponent, {
            width: '250px',
            data: { titulo: marcador.titulo, descripcion: marcador.descripcion }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if(!result){
                return;
            }
            marcador.titulo = result.titulo;
            marcador.descripcion = result.descripcion;
            this.guardar();
            this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 4000 });
        });
    }

    public borrar( index :number ){
        this.marcadores.splice(index, 1);
        this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 4000 });
    }
}
