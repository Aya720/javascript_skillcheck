function count(){
  //入力される箇所のidは"article_text"
  const articleText = document.getElementById("article_text");
  //ここに文字を入れると、※この動作のイベントは"keyup"
  articleText.addEventListener("keyup" , () => {
    //(取得した)要素.valueで入力された文字列を取得できる  後ろに.lengthをつけることで文字数のカウントが結果として出力される
    const countVal = articleText.value.length;
    const charNum = document.getElementById("char_num");
    charNum.innerHTML = `${countVal}文字`
  });
}

window.addEventListener('load', count);