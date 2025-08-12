// 問題と答えのデータを定義（まずは1問だけ）
const quiz = {
  question: "私の兄は毎日犬の散歩をします。",
  answer: "My brother walks his dog every day."
};

// HTMLの要素を取得
const questionTextElement = document.getElementById('question-text');
const userAnswerElement = document.getElementById('user-answer');
const checkButtonElement = document.getElementById('check-button');
const resultAreaElement = document.getElementById('result-area');
const resultMessageElement = document.getElementById('result-message');
const modelAnswerElement = document.getElementById('model-answer');

// 画面に問題文を表示する
questionTextElement.textContent = quiz.question;

// 「こたえあわせ」ボタンが押されたときの処理を定義
checkButtonElement.addEventListener('click', () => {
  // 以前のクラスを削除
  resultMessageElement.classList.remove('correct', 'incorrect');

  const userAnswer = userAnswerElement.value;
  
  // 正解・不正解を判定する
  if (userAnswer === quiz.answer) {
    resultMessageElement.textContent = "正解！🎉";
    resultMessageElement.classList.add('correct'); // 正解クラスを追加
  } else {
    resultMessageElement.textContent = "ざんねん！";
    resultMessageElement.classList.add('incorrect'); // 不正解クラスを追加
  }

  modelAnswerElement.textContent = quiz.answer;
  resultAreaElement.classList.remove('hidden');
});