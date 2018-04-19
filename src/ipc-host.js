var webview = document.getElementById('wv');

// ipcメッセージのイベントがwebviewにある
webview.addEventListener('ipc-message', function(event) {
 switch(event.channel){
   case "iconChange":
    console.log(event.arg[0]);  // content.innerTextが出力される
     });
     break;
 }
});

// webviewのロード完了イベント。onloadみたいな感じ。
webview.addEventListener("did-finish-load", function(){
  webview.send("iconChange");
});
