'use strict'

//レンダープロセス用のipcモジュールをインポート
const {ipcRenderer} = require('electron');

// window.addEventListener('click', function(){
//   // let iconName = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
//   let iconName = document.getElementById('quote').innerHTML;
//   ipcRenderer.send('retrieved', iconName);
// });

//MutationObserverによる監視
// let icon = document.querySelector("link[rel='icon']");
let icon = document.getElementById('quote');

const observer = new MutationObserver((MutationRecords) => {
  let iconName = MutationRecords.target;
  alert('iconName');
  ipcRenderer.send('retrieved', iconName);
});

const config = {childList :true, characterData: true};
observer.observe(icon, config);
