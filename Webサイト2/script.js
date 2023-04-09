// CSVファイルの読み込み
fetch('output.csv')
  .then(response => response.text())
  .then(text => {
    const csv = text.split('\n').slice(0, -1);
    const data = csv.map(line => {
      const [name, image] = line.split(',');
      return { name, image };
    });

    // Start画面のスタートボタンを押したら、問題画面に遷移する処理
    const startButton = document.getElementById('start-button');
    const quizScreen = document.getElementById('quiz-screen');
    startButton.addEventListener('click', () => {
      quizScreen.style.display = 'block';
      startButton.parentNode.style.display = 'none';

      // ランダムに人物を選択して、問題画面に表示する処理
      const index = Math.floor(Math.random() * data.length);
      const quizImage = document.getElementById('quiz-image');
      quizImage.src = data[index].image;
      const correctAnswer = data[index].name;
      
      // 回答ボタンを押したら、正解か不正解かを判定し、結果画面に遷移する処理
      const answerButton = document.getElementById('answer-button');
      const answerInput = document.getElementById('answer-input');
      answerButton.addEventListener('click', () => {
        const answer = answerInput.value;
        const feedback = document.getElementById('feedback');
        const correctAnswerDiv = document.getElementById('correct-answer');
        if (answer === correctAnswer) {
          feedback.textContent = '正解';
          correctAnswerDiv.style.display = 'none';
        } else {
          feedback.textContent = '不正解';
          correctAnswerDiv.style.display = 'block';
          correctAnswerDiv.textContent = `正解：${correctAnswer}`;
        }
        quizScreen.style.display = 'none';
        resultScreen.style.display = 'block';
      });

      // 次の問題へボタンを押したら、新しい問題を表示する処理
      const nextButton = document.getElementById('next-button');
      const resultScreen = document.getElementById('result-screen');
      nextButton.addEventListener('click', () => {
        resultScreen.style.display = 'none';
        startButton.parentNode.style.display = 'none';
        quizScreen.style.display = 'block';
        const index = Math.floor(Math.random() * data.length);
        quizImage.src = data[index].image;
        correctAnswer = data[index].name;
        answerInput.value = '';
      });
    });
  });
