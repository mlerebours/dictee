import random

import os
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/words')
def get_words():
    mp3_list = os.listdir("mp3\\")
    return jsonify({'mp3': mp3_list})


@app.route('/word/next')
def get_word_next():
    file = random.choice(os.listdir("mp3\\"))
    word = file[:-4]
    return word


@app.route('/next')
def get_next():
    file = random.choice(os.listdir("mp3\\"))
    word = file[:-4]
    return jsonify({'file': file, 'word': word})


if __name__ == '__main__':
    app.run()
