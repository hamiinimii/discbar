'use strict'

//レンダープロセス用のipcモジュールをインポート
const {ipcRenderer} = require('electron');

// onload = function(){
//   let unreadCount = document.getElementById('quote').innerHTML;
//   // let unreadCount = document.getElementsByTagName('link').innerHTML;
//   ipcRenderer.sendToHost('retrieved', unreadCount);
// }
window.addEventListener('click', function(){
  let iconChange = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
  ipcRenderer.send('retrieved', iconChange);
});


// window.addEventListener('click',function(){ //クリックを契機に起動
//  ipcRenderer.send('clicked');
// });

// onload = function(){
//   let iconChange = document.getElementsByTagName('link').innerHTML
// }
