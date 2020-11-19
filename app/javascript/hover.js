function hover() {
  //何をまとめている引き出しを丸ごと持ってくるのか。クラスを指定する時、.をつけて指定
  const articles = document.querySelectorAll(".article");
  //ひとつひとつに処理を与えたいからforEach内で処理を行うように環境を整える
  articles.forEach((article) => {
    //マウスオーバーさせる
    article.addEventListener('mouseover', () => {
      //setAttributeでその要素にcssを適用。属性と値各””で記述。
      article.setAttribute("style", "background-color:#F1940B;");
      });
    article.addEventListener('mouseout' ,() => {
      article.removeAttribute("style", "background-color:#F1940B;");
    });
  });
}

setInterval(hover, 1000);