'use strict'

//レンダープロセス用のipcモジュールをインポート
const {ipcRenderer} = require('electron');

window.addEventListener('click', function(){
  let iconName = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
  ipcRenderer.send('retrieved', iconName);
});

// let iconName = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
// const handler = {
//   set(target,value){
//     ipcRenderer.send('retrieved', value);
//   },
// };
// let p = new Proxy(iconName, handler);

// onload = function(){
//   let unreadCount = document.getElementById('quote').innerHTML;
//   // let unreadCount = document.getElementsByTagName('link').innerHTML;
//   ipcRenderer.sendToHost('retrieved', unreadCount);
// }
