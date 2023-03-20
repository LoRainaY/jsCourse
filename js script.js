/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        this.count = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (this.count === "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }

    },

    toggleVisibleMyDB() {
        switch (this.privat) {
            case true:
                this.privat = false;
                break;
            case false:
                this.privat = true;
                break;
            default:
                console.log("error value privat");
        }

    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const nameOfFilm = prompt('Один из последних просмотренных фильмов', ""),
                rateOfFilm = +prompt('На сколько оцените его?', "");

            if (nameOfFilm != null && rateOfFilm != null && nameOfFilm !== '' && rateOfFilm !== '' && nameOfFilm.length < 50) {

                this.movies[nameOfFilm] = rateOfFilm;
                console.log("done")
                this.showMyDB(this["privat"]);

            } else {

                console.log("error")
                i--;

            }
        }
    },
    detectPersonalLevel() {
        if (this["count"] < 10) {
            alert("Просмотрено довольно мало фильмов")
        } else if (this["count"] <= 30) {
            alert("Вы классический зретель")
        } else if (this["count"] > 30) {
            alert("Вы киноман")
        } else {
            alert("Произошла ошибка")
        }
        this.writeYourGenres();
    },

    writeYourGenres() {

        const writeGenres = prompt(`Ваши любимые жанры (через запятую)`);
        if (writeGenres === null || writeGenres === "") {
            console.log("genre is empty")
        } else {
            this.genres = writeGenres.split(', ');
            this.genres.sort();
        }

        this.genres.forEach((indexedDB, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${indexedDB}`);

        });
    },

    showMyDB(arr) {
        if (!arr) {
            console.log(JSON.stringify(this));
        }
    }


}
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();

console.log(`Final ${JSON.stringify(personalMovieDB)}`);
