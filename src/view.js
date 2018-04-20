'use strict'

//レンダープロセス用のipcモジュールをインポート
const {ipcRenderer} = require('electron');

window.addEventListener('click',function(){ //クリックを契機に起動
 ipcRenderer.send('clicked');
});

// document.getElementsByTagName('link')[2].addEventListener('change',function(){
//   ipcRenderer.send('clicked');
// })

// ipcRenderer.on('iconChange', function(){
//   // let iconChange = document.getElementByClassName('content');
//   // ipcRenderer.sendToHost('iconChange',content.innerText);
//     console.log('achieved');
// })
//ipcRenderer.sendToHost('result',document.body.innerText);
