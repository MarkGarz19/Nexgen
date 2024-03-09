import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { NotasComponent } from "./components/notas/notas.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        NotasComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [NotasComponent]
})
export class AppModule { }