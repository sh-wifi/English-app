//==================================================
// 定数・変数の定義
//==================================================
// 問題と答えのデータ（配列オブジェクト形式）
const quizzes = [
  {
    question: "私の兄は毎日犬の散歩をします。",
    answer: "My brother walks his dog every day."
  },
  {
    question: "彼女はその時、図書館で本を読んでいました。",
    answer: "She was reading a book in the library at that time."
  },
  {
    question: "このケーキはなんて美味しいのでしょう！",
    answer: "How delicious this cake is!"
  },
  {
    question: "彼はサッカーをするために公園へ行きました。",
    answer: "He went to the park to play soccer."
  }
];

// 現在の問題番号を管理する変数
let currentQuizIndex = 0;

// HTMLの要素を取得
const questionTextElement = document.getElementById('question-text');
const userAnswerElement = document.getElementById('user-answer');
const checkButtonElement = document.getElementById('check-button');
const resultAreaElement = document.getElementById('result-area');
const resultMessageElement = document.getElementById('result-message');
const modelAnswerElement = document.getElementById('model-answer');
const nextButtonElement = document.getElementById('next-button');


//==================================================
// 関数の定義
//==================================================
/**
 * クイズを表示する関数
 */
const showQuiz = () => {
  // 問題文を表示
  questionTextElement.textContent = quizzes[currentQuizIndex].question;
  // 結果エリアを隠す
  resultAreaElement.classList.add('hidden');
  // 回答入力欄を空にする
  userAnswerElement.value = "";
}


//==================================================
// イベント処理
//==================================================
// 「こたえあわせ」ボタンが押されたときの処理
checkButtonElement.addEventListener('click', () => {
  resultMessageElement.classList.remove('correct', 'incorrect');
  const userAnswer = userAnswerElement.value;
  
  if (userAnswer === quizzes[currentQuizIndex].answer) {
    resultMessageElement.textContent = "正解！🎉";
    resultMessageElement.classList.add('correct');
  } else {
    resultMessageElement.textContent = "ざんねん！";
    resultMessageElement.classList.add('incorrect');
  }

  modelAnswerElement.textContent = quizzes[currentQuizIndex].answer;
  resultAreaElement.classList.remove('hidden');
});

// 「次の問題へ」ボタンが押されたときの処理
nextButtonElement.addEventListener('click', () => {
  // 次の問題へ進む
  currentQuizIndex++;

  // まだ次の問題があるかチェック
  if (currentQuizIndex < quizzes.length) {
    // あれば次の問題を表示
    showQuiz();
  } else {
    // なければ終了メッセージを表示
    questionTextElement.textContent = "クイズ終了です。お疲れ様でした！";
    checkButtonElement.style.display = 'none'; // こたえあわせボタンを非表示
    userAnswerElement.style.display = 'none'; // 入力欄を非表示
    resultAreaElement.classList.add('hidden'); // 結果エリアを隠す
  }
});


//==================================================
// 画面読み込み時の処理
//==================================================
// 最初のクイズを表示
showQuiz();