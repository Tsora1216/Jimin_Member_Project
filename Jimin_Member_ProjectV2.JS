// クラス名を指定
const className = "btn-member is-s mr-ss";

// クラス名が一致する要素を取得
const elements = document.getElementsByClassName(className);

// 要素内のテキストと画像URLを取得
let csvContent = "data:text/csv;charset=utf-8,";
for (let i = 0; i < elements.length; i++) {
  const text = elements[i].textContent;
  const imageUrl = elements[i].getElementsByTagName("img")[0].getAttribute("src");
  csvContent += `"${text}","${imageUrl}"\n`;
}

// CSVファイルをダウンロード
const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "output.csv");
document.body.appendChild(link);
link.click();
