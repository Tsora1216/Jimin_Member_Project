// CSVファイルを読み込む関数
function loadCSV(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "output.csv");
    xhr.onload = function () {
      callback(xhr.responseText);
    };
    xhr.send();
  }
  
  // CSVファイルを解析して配列にする関数
  function parseCSV(csvText) {
    const lines = csvText.trim().split("\n");
    const headers = lines.shift().split(",");
    const data = lines.map((line) => {
      const values = line.split(",");
      const row = {};
      headers.forEach((header, i) => {
        row[header.trim()] = values[i].trim();
      });
      return row;
    });
    return data;
  }
  
  // 問題を表示する関数
  function showQuestion(data) {
    // ランダムに1行選ぶ
    const index = Math.floor(Math.random() * data.length);
    const row = data[index];
  
    // 人名を取得する
    const name = row["Name"];
  
    // 問題を表示する
    const answer = prompt(`次の人物の名前は何でしょうか？\n\n${row["Image URL"]}`);
    
    // 回答が正解かどうかを判定する
    if (answer === name) {
      alert("正解！");
      showQuestion(data); // 次の問題へ進む
    } else {
      alert(`不正解！正解は${name}でした。`);
      showQuestion(data); // 再度同じ問題を出題する
    }
  }
  
  // メイン処理
  loadCSV((csvText) => {
    const data = parseCSV(csvText);
    showQuestion(data);
  });
  