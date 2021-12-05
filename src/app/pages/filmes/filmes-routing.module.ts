import { FilmeListComponent } from './filme-list/filme-list.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmeFormComponent } from './filme-fom/filme-form.component';
import { FilmeConsultComponent } from './filme-consult/filme-consult.component';

const routes: Routes = [
  {
    path: 'listar',
    component: FilmeListComponent
  },
  {
    path: 'adicionar',
    component: FilmeFormComponent
  },
  {
    path: 'editar/:idFilme',
    component: FilmeFormComponent
  },
  {
    path: 'consultar/:idFilme',
    component: FilmeConsultComponent
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
