from subprocess import call
from gtts import gTTS
import os
from pygame import mixer # Load the required library




blabla = input('Type IN: ')
tts = gTTS(text=blabla, lang='en')
tts.save("test.mp3")

mixer.init()
mixer.music.load('test.mp3')
mixer.music.play()

#call("test.mp3")