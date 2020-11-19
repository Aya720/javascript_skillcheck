function post (){
  //フォームの投稿ボタンを押す＝投稿ボタンをdocument.getElementByIdでIdから要素を取得
  const submit = document.getElementById("submit_btn");
  //投稿したら＝クリックしたら
  submit.addEventListener("click", (e) => {
    //new FormData(フォームの要素);の形で使用。引数にフォームの要素を渡すことで、そのフォームに入力された値を取得できる
    const formData = new FormData(document.getElementById("new_article"));
    //Ajexを使えるようにする
    const XHR = new XMLHttpRequest();
    //XHRで、(HTTPメソッド/パス/非同期通信)を指定する。道筋を指定。
    XHR.open("POST", "/articles", true);
    //XHRで、受け取る際のデータ形式を指定する
    XHR.responseType = "json";
    //XHRで、フォームの型および入力された内容を送る
    XHR.send(formData);
    //XHRで、レスポンスを受信できた時に起動するイベントハンドラー。＝イベントに対して処理を施すことができるもの。＝受信内容を処理するもの
    XHR.onload = () => {
      //エラー表示設定 XHR.statusTextにXHR.statusに対するエラーが出ますよ、っていう書き方
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        //エラーが表示されたら、それ以降は処理を行う必要がないのでreturn null;を記述することによって今のイベントから抜け出す
        return null;          
      }
      //XHR.responseでレスポンスされてきたJSONにアクセス　し、コントローラーで代入された値を持つ要素を指定することで、JSONデータを取得できる　
      const item = XHR.response.article;
      //HTMLを代入するための位置を指定するために取得しているid
      const contentsArea = document.getElementById("contents_area");
      //入力欄を最終的に空にするために、form入力欄のidを変数に代入し、使えるようにしておく
      const articleText = document.getElementById("article_text");
      //js上でブラウザに表示している部分
      const HTML = `
          <div class="article">
            ${ item.text }
          </div>`;
      //afterbegin=内部の最初の子要素の前に挿入に代入したHTMLを入れる
      contentsArea.insertAdjacentHTML("afterbegin", HTML);
      //入力のフォームの値を空に戻します
      articleText.value = "";
    };
    //"click"した時に、まだ送ってないけど、これから送ろうとしている諸々(e)の中で重複する表示はキャンセルしますよ。(e)はイベントハンドラで、railsに送られて処理される要素が詰まっている箇所。
    e.preventDefault();
  });

}

window.addEventListener('load',post)