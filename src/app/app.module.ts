import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadroComponent } from './cuadro/cuadro.component';
import { TableroComponent } from './tablero/tablero.component';


@NgModule({
  declarations: [
    AppComponent,
    CuadroComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
