/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "0");
console.log(numberOfFilms);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
let nameOfFilm1;
do {
    nameOfFilm1 = prompt('Один из последних просмотренных фильмов', "");

} while (nameOfFilm1 === "" || nameOfFilm1.length > 50 || nameOfFilm1 === false)
if (personalMovieDB["count"] < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB["count"] <= 30) {
    alert("Вы классический зретель")
} else if (personalMovieDB["count"] > 30) {
    alert("Вы киноман")
} else {
    alert("Произошла ошибка")

}


const rateOfFilm1 = +prompt('На сколько оцените его?', "0");


console.log(rateOfFilm1);
personalMovieDB.movies[nameOfFilm1] = rateOfFilm1;


console.log(personalMovieDB);