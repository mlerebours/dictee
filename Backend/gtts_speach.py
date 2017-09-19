from gtts import gTTS
import os, random
import os

tts = gTTS(text='Good morning', lang='fr')
tts.save("good.wav")
os.system("good.wav")
