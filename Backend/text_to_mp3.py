from gtts import gTTS
import codecs


def convert_words_to_mp3():
    with codecs.open('words.txt', "r", "utf-8") as f:
        lines = f.read().splitlines()
        for word in lines:
            tts = gTTS(text=word, lang='fr')
            tts.save("new_words/" + word + ".mp3")


convert_words_to_mp3()
