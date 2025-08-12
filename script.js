// 問題と答えのデータを定義（まずは1問だけ）
const quiz = {
  question: "私の兄は毎日犬の散歩をします。",
  answer: "My brother walks his dog every day."
};

// HTMLの要素を取得
const questionTextElement = document.getElementById('question-text');
const userAnswerElement = document.getElementById('user-answer');
const checkButtonElement = document.getElementById('check-button');

// 画面に問題文を表示する
questionTextElement.textContent = quiz.question;

// 「こたえあわせ」ボタンが押されたときの処理を定義
checkButtonElement.addEventListener('click', () => {
  // 入力された内容を取得
  const userAnswer = userAnswerElement.value;
  
  // コンソールに答えを出力して、動作を確認する
  console.log('ユーザーの入力:', userAnswer);
});