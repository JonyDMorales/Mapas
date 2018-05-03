import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { EditarComponent } from './components/mapa/editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    entryComponents:[
        EditarComponent
    ],
    declarations: [
        AppComponent,
        MapaComponent,
        EditarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDdbv9LLR2SMpO-7d_FkbVN9XhPRsEnQSg'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
