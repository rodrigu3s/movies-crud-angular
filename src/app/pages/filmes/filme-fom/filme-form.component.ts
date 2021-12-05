import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FilmesService } from "src/app/core/services/filmes.service";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.scss']
})
export class FilmeFormComponent implements OnInit {

  form: FormGroup;

  constructor(private filmeService: FilmesService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute){
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      year: [null],
      type: [null],
      imdbID: ['', Validators.required],
      poster: [null]
    })
  }

  voltar(){
    this.router.navigate(['..', 'filmes', 'listar' ])
  }

  submit(){
    if(this.form.value.id){
      this.filmeService.putFilme(this.form.value.id, this.form.value).subscribe(() =>{
        this.toastr.success('Filme cadastrado com sucesso!');
        this.router.navigate(['..', 'filmes', 'listar' ])//navigate => recebe um array de rotas
      }, (error)=>{
        this.toastr.error('Error!');
      })
    }else{
      this.filmeService.postFilme(this.form.value).subscribe(() =>{
        this.toastr.success('Filme cadastrado com sucesso!');
        this.router.navigate(['..', 'filmes', 'listar' ])//navigate => recebe um array de rotas
      }, (error)=>{
        this.toastr.error('Error!');
      })
    }

  }

  ngOnInit(){
    const idFilme = this.activatedRoute.snapshot.params.idFilme
    if(idFilme){
      this.filmeService.getByIdFilme(idFilme).subscribe((data) => {
        //patchValue => função que recebe objeto, serve p/ editar os valores do this.formBuilder.group
        this.form.patchValue({
            id: data.id,
            title: data.title,
            year: data.year,
            type: data.type,
            imdbID: data.imdbID,
            poster: data.poster
        })
      })
    }

  }

}
