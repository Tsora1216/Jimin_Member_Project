// クラス名を指定
const className = "btn-member is-s mr-ss";

// クラス名が一致する要素を取得
const elements = document.getElementsByClassName(className);

// CSV形式で出力する文字列を初期化
let output = "Name, Image URL\n";

// 要素内のテキストと画像URLを取得
for (let i = 0; i < elements.length; i++) {
  const name = elements[i].textContent.trim();
  const imageUrl = elements[i].getElementsByTagName("img")[0].getAttribute("src").trim();
  output += `${name}, ${imageUrl}\n`;
}

// CSV形式で出力する文字列をコンソールに出力
console.log(output);
