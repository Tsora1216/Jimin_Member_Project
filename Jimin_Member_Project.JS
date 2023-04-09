// クラス名を指定
const className = "btn-member is-s mr-ss";

// クラス名が一致する要素を取得
const elements = document.getElementsByClassName(className);

// 要素内のテキストと画像URLを取得
for (let i = 0; i < elements.length; i++) {
  const text = elements[i].textContent;
  const imageUrl = elements[i].getElementsByTagName("img")[0].getAttribute("src");
  console.log(text);
  console.log(imageUrl);
}
console.log(elements.length);