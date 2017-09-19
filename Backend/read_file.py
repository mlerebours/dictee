import codecs

with codecs.open('words.txt', "r", "utf-8") as f:
    lines = f.read().splitlines()
    for word in lines:
        print(word)
