import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
    
    forma :FormGroup;

    constructor(public _formBuilder :FormBuilder,
                public dialogRef: MatDialogRef<EditarComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) { 
        
        this.forma = this._formBuilder.group({
            'titulo': data.titulo,
            'descripcion': data.descripcion
        });
    }
    
    ngOnInit() {
    }

    public guardar(){
        this.dialogRef.close(this.forma.value);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
