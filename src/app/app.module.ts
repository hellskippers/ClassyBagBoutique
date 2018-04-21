import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CommonModule } from '../common/common.module';
import { ClassyHomeComponent } from './classy-home/classy-home.component';
import { ClassyBrandComponent } from './classy-brand/classy-brand.component';

const routes: Routes = [
  { path: '', component: ClassyHomeComponent },
  { path: 'brand', component: ClassyBrandComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ClassyHomeComponent,
    ClassyBrandComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
