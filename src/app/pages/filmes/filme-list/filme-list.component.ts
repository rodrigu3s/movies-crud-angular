import { FilmesService } from './../../../core/services/filmes.service';
import { Component, OnInit } from "@angular/core";
import { Filme } from 'src/app/shared/models/filme.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit{

  filmes: Filme[] = []

  page = 1

  constructor( private filmesService: FilmesService,
    private toastr: ToastrService,
  ){

  }
  ngOnInit(): void {
    this.listarFilmes()
  }


  listarFilmes(){
    this.filmesService.getFilmes().subscribe(data => {
      this.filmes = data
    })
  }

  onPageChange(page: number){
    this.page = page;
    console.log(this.page);
  }

  deleteFilme(id: number){
    if(id){
      this.filmesService.deleteFilme(id).subscribe(()=>{
      this.toastr.success('Filme deletado com sucesso!');
      this.listarFilmes()
      }, (error)=> {
        this.toastr.error('Error!');
      })
    }
  }



}
