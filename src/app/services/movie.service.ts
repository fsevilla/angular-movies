import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from './../movies/movies.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Movie[] = [
    {
      title: 'El Padrino',
      duration: 200,
      genero: ''
    },
    {
      title: 'Matrix',
      duration: 200,
      genero: ''
    },
    {
      title: 'El Resplandor',
      duration: 200,
      genero: ''
    },
    {
      title: 'El señor de los anillos',
      duration: 600000,
      genero: ''
    }
  ]

  constructor(private httpClient:HttpClient) { }

  getMovies(callback) {
    
    setTimeout(() => {
      callback(this.movies)
    }, 3000);
  }

  getMoviesAsPromise():Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.movies);
      }, 3000);
    });
  }

  getMoviesFromAPI():Promise<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums').toPromise();
  }

  getMovieById(id:number) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums/'+id).toPromise();
  }
}
