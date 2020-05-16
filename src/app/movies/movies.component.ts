import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

export interface Movie {
  title:string;
  duration:number;
  description?:string;
  genero:string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title:string = "Lista de Peliculas";

  movie:Movie = {
    title: '',
    duration: 0,
    genero: '',
    description: ''
  }

  allMovies:Array<Movie> = []

  movies:Movie[] = []

  searchText:string = "trix";
  

  constructor(private movieService:MovieService) {
    console.log('Se construye la clase...');
  }

  ngOnInit(): void {

    // this.movieService.getMovies((data) => {
    //   this.movies = data;
    //   this.allMovies = this.movies.slice();
    //   console.log('Ya traje los datos');
    // });

    this.movieService.getMoviesFromAPI()
      .then((data) => {
        this.movies = data;
        this.allMovies = this.movies.slice();
        console.log('Ya traje los datos');
      })
      .catch(err => {
        console.error('No se pudo conectar con el API');
      });

    console.log('Ya pedi los datos....');
  }

  onSearch() {
    this.movies = this.allMovies.filter(m => {
      return m.title.toLowerCase().includes(this.searchText);
    })
  }

  triggerSearchOnEnter(key) {
    console.log('Tecla: ', key);
    if(key === 'Enter') {
      this.onSearch();
    }
  }


}
