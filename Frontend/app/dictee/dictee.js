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

        this.restart = function() {
            this.total = 0;
            this.points = 0;
        };

        this.checkAnswer = function() {
            if (this.question.answer === '') {
                this.readWord();
                return;
            }

            //this.question.answer = this.question.word.toUpperCase() + " " + this.question.answer.toUpperCase();
            this.question.correct = this.question.word.toUpperCase() === this.question.answer.toUpperCase();
            if (this.question.correct) {
                this.points += 1;
                this.nextWord();
            }
            else {
                this.readWord();
            }

            this.total += 1;
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
        'des frites',
        'petit',
        'fille',
        'police',
        'maïs',
        'biberon',
        'cerise',
        'gymnastique',
        'île',
        'dîner',
        'il y a',
        'tartine',
        'tapis',
        'souris',
        'cygne',
        'pyjama',
        'stylo',
        'image',
        'gris',
        'petite',
        'grise'
    ]

})();