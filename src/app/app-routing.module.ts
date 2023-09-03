import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {DescricaoComponent} from './pages/descricao/descricao.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'descricao',
    title: 'Descricao Jogos',
    component: DescricaoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
