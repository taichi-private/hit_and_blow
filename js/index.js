const input = document.querySelector('.js-input');
const submit = document.querySelector('.js-submit');
const submitClear = document.querySelector('.js-submit-clear');
const result = document.querySelector('.js-result');
const resultHit = document.querySelector('.js-result-hit');
const resultBlow = document.querySelector('.js-result-blow');
let flag = false; // 一回判定済みかどうかのフラグ

const answer = "aabb"; // 回答をセット
const answerStrings = answer.split(''); // 文字列を1文字ずつ分割

function clearResult() {
	const resultText = document.querySelectorAll('.js-result-text');
	if (resultText) {
		for (let i = 0; i < resultText.length; i++) {
      resultText[i].innerHTML = "";
    }
  }
}

function clearInput() {
	input.value = "";
}

submitClear.addEventListener('click', () => {
  clearInput();
  clearResult();
});
submit.addEventListener('click', () => {
  const strings = input.value.split(''); // 文字列を1文字ずつ分割
  let hitCount = 0;
  let blowCount = 0;
  
  if (flag) {
    clearResult();
  }

  strings.filter((item, i) => { 
    if (strings.includes(answerStrings[i])) {
      blowCount++;
    }
  });
  
  strings.filter((item, i) => { 
    if (item === answerStrings[i]) {
      hitCount++;
    }
  });
  
  const setResultText = `<span class="js-result-text">${input.value}</span>`;
  const setResultHitText = `<span class="js-result-text">${hitCount}</span>`;
  const setResultBlowText = `<span class="js-result-text">${blowCount}</span>`;

	result.insertAdjacentHTML("afterend",  setResultText);
	resultHit.insertAdjacentHTML("afterend", setResultHitText);
  resultBlow.insertAdjacentHTML("afterend", setResultBlowText);
  
  clearInput();
  flag = true;
});
