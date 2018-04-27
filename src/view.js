'use strict'

//レンダープロセス用のipcモジュールをインポート
const {ipcRenderer} = require('electron');
window.onload = function(){
  var icon = document.getElementById('quote');
};

window.addEventListener('click', function(){
  // let iconName = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
  let iconName = document.getElementById('quote').innerHTML;
  alert(icon);
  ipcRenderer.send('retrieved', iconName);
});

//MutationObserverによる監視
// let icon = document.querySelector("link[rel='icon']");

// const observer = new MutationObserver((MutationRecords) => {
//   let iconName = MutationRecords.target;
//   alert(icon.getElementById('quote').innerHTML);
//   ipcRenderer.send('retrieved', iconName);
// });
//
// const config = {childList :true, attributes:true, characterData: true};
// observer.observe(icon, config);
