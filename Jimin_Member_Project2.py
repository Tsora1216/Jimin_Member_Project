from bs4 import BeautifulSoup
import requests

url = "https://www.jimin.jp/member/minister/"
class_name = "btn-member-data"

response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

elements = soup.find_all(class_=class_name)

print("要素数:", len(elements))
