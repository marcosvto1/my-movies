import { Component, OnInit } from '@angular/core';
import { Movie } from './../../shared/movie.model';
import { MovieService } from './../../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  newMovieTitle = '';
  movies: Movie[] = [];
  loading = true;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  createMovie() {
    if (!this.newMovieTitle) { return; }
    const movie = Movie.fromJson({title: this.newMovieTitle});
    this.movieService.create(movie).subscribe(
      (movie) => {
        this.movies.unshift(movie);
        this.newMovieTitle = '';
      },
      (error) => {
        console.log(error);
        alert('Ocorreu um erro!');
      }
    );
  }

  loadMovies() {
    this.movieService.getAll().subscribe(
      (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      (error) => {}
    );
  }

}
