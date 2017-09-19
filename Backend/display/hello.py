import sys
from PyQt5 import QtGui


def window():
    app = QtGui.QGuiApplication(sys.argv)
    w = QtGui.Widget()
    b = QtGui.QLabel(w)
    b.setText("Hello World!")
    w.setGeometry(100, 100, 200, 50)
    b.move(50, 20)
    w.setWindowTitle("PyQt")
    w.show()
    sys.exit(app.exec_())


if __name__ == '__main__':
    window()
