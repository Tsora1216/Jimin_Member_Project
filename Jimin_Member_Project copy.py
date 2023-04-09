import requests
from bs4 import BeautifulSoup

# URLを指定
url = "https://www.jimin.jp/member/minister/"

# リクエストを送信
r = requests.get(url)

# レスポンスをパース
soup = BeautifulSoup(r.content, "html.parser")

# クラス名を指定
className = "is-member-name"

# クラス名が一致する要素を取得
elements = soup.find_all(class_=className)

# 要素内のテキストと写真のURLを取得
for element in elements:
    text = element.get_text()
    photo = element.find_previous_sibling("p").find("img")["src"]
    print(text, photo)

print(len(elements))
