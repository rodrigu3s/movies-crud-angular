
import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmeConsultComponent } from './filme-consult/filme-consult.component';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { NgModule } from "@angular/core";
import { FilmeFormComponent } from './filme-fom/filme-form.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilmeListComponent,
    FilmeFormComponent,
    FilmeConsultComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap:[]
})

export class FilmesModule{

}
