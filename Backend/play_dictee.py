from gtts import gTTS
import os, random
import os
import pygame
import codecs


def convert_words_to_mp3():
    with codecs.open('words.txt', "r", "utf-8") as f:
        lines = f.read().splitlines()
        for word in lines:
            tts = gTTS(text=word, lang='fr')
            tts.save("new_words/" + word + ".mp3")


def play_sound(file_name):
    pygame.mixer.init()
    pygame.mixer.music.load(file_name)
    pygame.mixer.music.play()

    while pygame.mixer.music.get_busy():
        continue


def say_and_ask(file):
    play_sound("mp3\\" + file)
    return input('Ecris le mot que tu entends: ')


def play_game():
    file = random.choice(os.listdir("mp3\\"))
    word = file[:-4]
    reponse = say_and_ask(file)
    while reponse == "":
        reponse = say_and_ask(file)

    if reponse.lower() == word.lower():
        print("BRAVO !!")
        return 1
    else:
        print("FAUX, la bonne réponse était: " + word)
        return 0


def play_twenty():
    score = 0
    loop = 0
    for loop in range(1, 21):
        score += play_game()
        print("Score: " + str(score) + "/" + str(loop))

    print("Resultat: " + str(score) + "/" + str(loop))

convert_words_to_mp3()
play_twenty()
