import csv
import random
from flask import Flask, render_template, request

app = Flask(__name__)

# CSVファイルからデータを読み込む
with open('output.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    data = list(reader)[1:]  # 1行目はヘッダーなので除外する

# ランダムに人物を選択する
selected_person = random.choice(data)
correct_answer = selected_person[0]

# Flaskアプリのルートを定義する
@app.route('/')
def index():
    return render_template('index.html', person=selected_person)

# フォームが送信された時の処理を定義する
@app.route('/', methods=['POST'])
def check_answer():
    user_answer = request.form['name'].strip()
    if user_answer == correct_answer:
        feedback = "正解！"
    else:
        feedback = "不正解。正解は" + correct_answer + "です。"
    return render_template('feedback.html', feedback=feedback)

if __name__ == '__main__':
    app.run(debug=True)
