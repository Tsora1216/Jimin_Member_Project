from bs4 import BeautifulSoup
import requests

# URLを指定
url = "https://www.jimin.jp/member/minister/"

# クラス名を指定
class_name = 'btn-member is-l mr-ss'

# ページを取得
response = requests.get(url)
print(response)

# ページを解析
soup = BeautifulSoup(response.content, 'html.parser')

# クラス名が一致する要素を取得
elements = soup.find_all(class_=class_name)


# 要素内のテキストと画像URLを取得
for element in elements:
    text = element.get_text()
    image_url = element.find('img')['src']
    print(text)
    print(image_url)