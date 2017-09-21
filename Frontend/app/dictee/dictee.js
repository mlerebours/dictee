(function () {

    'use strict';

    var app = angular.module('myApp.dictee', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dictee', {
            templateUrl: 'dictee/dictee.html',
            controller: 'DicteeCtrl'
        });
    }]);

    app.controller('DicteeCtrl', function(){
        this.question = question;
        this.points = 0;
        this.total = 0;
        this.finished = false;

        this.restart = function() {
            this.total = 0;
            this.points = 0;
            this.nextWord();
            this.finished = false;
        };

        this.checkAnswer = function() {
            if (this.question.answer === '') {
                this.readWord();
                return;
            }

            //this.question.answer = this.question.word.toUpperCase() + " " + this.question.answer.toUpperCase();
            this.question.correct = this.question.word.toUpperCase() === this.question.answer.toUpperCase();

            this.total += 1;
            this.finished = this.total === 10;

            if (this.question.correct) {
                this.points += 1;
                if(!this.finished)
                    this.nextWord();
            }
            else {
                if(!this.finished)
                    this.readWord();
            }

        };

        this.readWord = function() {
            var audio = new Audio('audio/words/' + this.question.sound);
            audio.play();
        };

        this.nextWord = function() {
            var word = words[Math.floor(Math.random()*words.length)];
            this.question.answer = '';
            this.question.word = word;
            this.question.sound = word + ".mp3";
            this.readWord();
        };

        this.nextWord();
    });

    var question = {
        word: 'dire',
        sound: 'dire.mp3',
        answer: '',
        correct: false
    };

    var words = [
        'poire',
        'oiseau',
        'voiture',
        'poisson',
        'balançoire',
        'voisine',
        'étoile',
        'soir',
        'voici',
        'voilà',
        'bois',
        'roi',
        'moelle',
        'il voit',
        'noix',
        'noyau',
        'joyeux',
        'royaume',
        'wapiti',
        'boîte',
        'aquarium',
        'douane',
        'zouave',
        'poêle'
    ]

})();