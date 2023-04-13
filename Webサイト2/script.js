// 問題画面の要素を取得
const quizScreen = document.getElementById('quiz-screen');
const quizImage = document.getElementById('quiz-image');
const answerInput = document.getElementById('answer-input');
const answerButton = document.getElementById('answer-button');

// 結果画面の要素を取得
const resultScreen = document.getElementById('result-screen');
const feedback = document.getElementById('feedback');
const correctAnswer = document.getElementById('correct-answer');
const nextButton = document.getElementById('next-button');

// Start画面の要素を取得
const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');

// CSVファイルのURL
const csvUrl = 'output.csv';

// CSVファイルを取得して解析する
const fetchCsv = async (url) => {
  const response = await fetch(url);
  const data = await response.text();
  const lines = data.split('\n').map(line => line.split(','));
  return lines;
};

// CSVファイルからランダムに問題を選択する
const selectRandomQuestion = async () => {
  const csvData = await fetchCsv(csvUrl);
  const randomIndex = Math.floor(Math.random() * csvData.length);
  const [name, imageUrl] = csvData[randomIndex];
  return { name, imageUrl };
};

// 問題画面に問題を表示する
const showQuestion = async () => {
  const { name, imageUrl } = await selectRandomQuestion();
  quizImage.src = imageUrl;
  answerInput.value = '';
  quizScreen.style.display = 'block';
  resultScreen.style.display = 'none';
};

// ユーザーが回答を送信したら、正解かどうかを判定する
const checkAnswer = () => {
  const answer = answerInput.value.trim().toLowerCase();
  const name = quizImage.alt.trim().toLowerCase();

  if (answer === name) {
    feedback.textContent = '正解！';
    correctAnswer.style.display = 'none';
  } else {
    feedback.textContent = '不正解';
    correctAnswer.textContent = `正解：${name}`;
    correctAnswer.style.display = 'block';
  }

  quizScreen.style.display = 'none';
  resultScreen.style.display = 'block';
};

// 「次の問題へ」ボタンがクリックされたら、新しい問題を表示する
const nextQuestion = () => {
  showQuestion();
};

// スタートボタンがクリックされたら、最初の問題を表示する
startButton.addEventListener('click', showQuestion);

// 回答ボタンがクリックされたら、正解かどうかを判定する
answerButton.addEventListener('click', checkAnswer);

// 「次の問題へ」ボタンがクリックされたら、新しい問題を表示する
nextButton.addEventListener('click', nextQuestion);
