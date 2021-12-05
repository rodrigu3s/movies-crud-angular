import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Filme } from "src/app/shared/models/filme.model";

@Injectable({
  providedIn: 'root'
})

export class FilmesService {
  constructor(private http: HttpClient){

  }

  getFilmes(): Observable<Filme[]>{
    return this.http.get<Filme[]>(environment.apiUrl + '/movies?_sort=id&_order=desc');
  };

  postFilme(filme: Filme): Observable<Filme>{
    return this.http.post<Filme>(environment.apiUrl+'/movies', filme);
  };

  deleteFilme(id: number): Observable<any>{
   return this.http.delete(environment.apiUrl+ '/movies/' + id )
  }

  getByIdFilme(id: number): Observable<Filme>{
    return this.http.get<Filme>(environment.apiUrl+'/movies/'+id)
  }

  putFilme(id: number, filme: Filme): Observable<Filme>{
    return this.http.put<Filme>(environment.apiUrl +'/movies/'+id, filme)
  }
}
