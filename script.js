// 現在の問題番号を管理する変数
let quizzes = [];
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
// メイン処理（非同期）
//==================================================
/**
 * 非同期でクイズデータを取得し、アプリを初期化する
 */
const main = async () => {
  try {
    // quiz.jsonからデータを取得
    const response = await fetch('quiz.json');
    quizzes = await response.json();

    // クイズの配列をシャッフル
    shuffleArray(quizzes); 
    // 最初のクイズを表示
    showQuiz();
  } catch (error) {
    console.error('クイズデータの読み込みに失敗しました:', error);
    questionTextElement.textContent = "クイズの読み込みに失敗しました。";
  }
};

// メイン処理を実行
main();

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

/**
 * 配列をシャッフルする関数
 * @param {Array} array シャッフルしたい配列
 * @returns {Array} シャッフルされた配列
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
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

shuffleArray(quizzes); 
showQuiz();