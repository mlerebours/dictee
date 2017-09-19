(function () {

    'use strict';

    var app = angular.module('myApp.dictee2', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dictee2', {
            templateUrl: 'dictee2/dictee.html',
            controller: 'DicteeCtrl'
        });
    }]);

    app.controller('DicteeCtrl', function(){
        this.question = question;
        this.points = 0;
        this.total = 0;

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
        'il dit',
        'ils vont',
        'hier',
        'ici',
        'une image',
        'imiter',
        'une idée',
        'un immeuble',
        'six',
        'huit',
        'dix',
        'midi',
        'petit',
        'petite',
        'gris',
        'grise',
        'dimanche',
        'un animal',
        'la dictée',
        'rire',
        'des frites',
        'un citron',
        'un livre',
        'la ville',
        'le village',
        'une fille',
        'dire',
        'la police',
        'vite',
        'une tartine',
        'crier',
        'une guitare',
        'écrire',
        'habiter',
        'souligner',
        'sourire',
        'lire',
        'la fatigue',
        'riche',
        'une biche',
        'une bille',
        'le biberon',
        'un papillon',
        'la cuisine',
        'une cerise',
        'l\'ordinateur',
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
        'un ami',
        'qui',
        'je dis',
        'il dit',
        'un tapis',
        'le lit',
        'la vie',
        'un nid',
        'joli',
        'un radis',
        'ici',
        'un pyjama',
        'il y a',
        'un type',
        'le gymnase',
        'la gymnastique',
        'un paysage',
        'le rythme',
        'une bicyclette',
        'la dynamite',
        'un tricycle',
        'un cygne',
        'Dylan',
        'le pays',
        'Anthony',
        'le roi',
        'un pantin',
        'elle fait',
        'la peine',
        'un rayon'
    ]

})();