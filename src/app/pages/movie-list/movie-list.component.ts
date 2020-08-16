import { Component, OnInit } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  obs: string;
  rating: number;
  toWatchNext: boolean;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [
    {
      id: 1,
      title: 'Bastardos Inglório',
      obs: 'La la la lal lal al la la, allsal',
      rating: 5,
      toWatchNext: false
    },
    {
      id: 2,
      title: 'As trança da vovo careca',
      obs: 'as trança da vovo careca',
      rating: 1,
      toWatchNext: true
    },
    {
      id: 3,
      title: 'Vampiro',
      obs: 'as trança da vovo careca',
      rating: 1,
      toWatchNext: false
    },
    {
      id: 4,
      title: 'Vampiro 1',
      obs: 'as trança da vovo careca',
      rating: 1,
      toWatchNext: true
    },
    {
      id: 5,
      title: 'Vampiro 2',
      obs: 'as trança da vovo careca',
      rating: 1,
      toWatchNext: true
    },
    {
      id: 6,
      title: 'Vampiro 3',
      obs: 'as trança da vovo careca as trança da vovo careca as trança da vovo careca as trança da vovo careca as trança da vovo careca',
      rating: 1,
      toWatchNext: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
