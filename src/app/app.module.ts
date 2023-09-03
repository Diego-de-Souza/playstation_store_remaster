import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DescricaoComponent} from '../app/pages/descricao/descricao.component';
import {HomeComponent} from '../app/pages/home/home.component';

import {CardComponent} from '../app/components/card/card.component';
import {CardLabelComponent} from '../app/components/card/card-label/card-label.component';
import {CardPricingComponent} from '../app/components/card/card-pricing/card-pricing.component';
import {MenuBarComponent} from '../app/components/menu-bar/menu-bar.component';

import {HttpClientModule} from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardDescriptionPrincipalComponent } from './components/card-description/card-description-principal/card-description-principal.component';
import { CardDescriptionAboutComponent } from './components/card-description/card-description-about/card-description-about.component';
import { CardDescriptionInformationComponent } from './components/card-description/card-description-information/card-description-information.component';


@NgModule({
  declarations: [
    AppComponent,
    DescricaoComponent,
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,
    MenuBarComponent,
    CardDescriptionComponent,
    FooterComponent,
    CardDescriptionPrincipalComponent,
    CardDescriptionAboutComponent,
    CardDescriptionInformationComponent,

  ],exports:[
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
