function emailValidation() {

  const contactLine = document.getElementsByTagName('tr')[2]; // <tr> を取得
  let email = document.getElementById("email"); // emailを取得
  let emailConfirm = document.getElementById("email_confirm"); // email_confirmを取得
  // イベント
  emailConfirm.addEventListener("keyup", function() { // Eメール（確認）欄でキーアップされたら

    // エラーメッセージがあれば、出力しない（メッセージは１つのみとする）
    const confirm = document.getElementsByClassName("errorMessage");
    const contactContent = document.getElementsByTagName('tr')[3]; // <tr> を取得
    const contactParent = contactContent.parentNode; // <tr>から、その親要素を取得

    if (email.value !== emailConfirm.value) { // 合致しなかったら

      // Eメール（確認）欄の背景色調整用のクラス名を付与
      emailConfirm.classList.add("email_confirm_adjust");
      // emailConfirm.classList.toggle("email_confirm_adjust");
      
      if (confirm.length === 0) { // 且つ、エラーメッセージが出力していない場合、エラーメッセージを出力する

        // 以下エラーメッセージを生成
        const element = document.createElement("p"); // <p>タグ生成
        const message = document.createTextNode("Eメールが一致しません"); // メッセージ生成
        element.appendChild(message); // メッセージを<p>タグに詰める
        element.classList.add("errorMessage"); // クラス名を付ける
  
        // 親要素を経由しないと.appnedChild()やinsertBefoe()が発動しない？？
        contactParent.insertBefore(element, contactContent); // <tr>3番目と4番目の間に<p>タグを出力  

      } 
    } else { // 合致したら

      // エラーメッセージを取得
      const message = contactParent.getElementsByClassName("errorMessage");
      console.log(message[0]);
      // エラーメッセージを削除（配列で取得するため対象を指定）
      message[0].remove();
      // CSS調整用：Eメール（確認）欄の色指定を削除
      emailConfirm.classList.remove("email_confirm_adjust");
    }
  });
};

window.onload = emailValidation;