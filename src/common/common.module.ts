import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [],
    exports: [HeaderComponent, FooterComponent]
})
export class CommonModule { }
