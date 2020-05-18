"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false   
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const rateLastFilm1 = prompt('На сколько оцените его?', '');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const rateLastFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm1] = rateLastFilm1;
personalMovieDB.movies[lastFilm2] = rateLastFilm2;

console.log(personalMovieDB);