import { Filme } from './../../../shared/models/filme.model';
import { Component } from '@angular/core';
import { FilmesService } from 'src/app/core/services/filmes.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-filme-consult',
  templateUrl: './filme-consult.component.html',
  styleUrls: ['./filme-consult.component.scss']
})
export class FilmeConsultComponent {

  filme: Filme;

  constructor( private filmesService: FilmesService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  voltar(){
    this.router.navigate(['..', 'filmes', 'listar' ])
  }

  consultFilme(){
    const idFilme = this.activatedRoute.snapshot.params.idFilme
    this.filmesService.getByIdFilme(idFilme).subscribe((data)=>{
      this.filme = data;
    })
  }

  ngOnInit(){
    this.consultFilme();
  }

}
