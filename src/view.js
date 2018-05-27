'use strict'

//レンダープロセス用のipcモジュールをインポート
const {ipcRenderer} = require('electron');

window.onload = function(){

  // // let icon = document.getElementById('quote');
  //
  // let icon = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
  //
  // const observer = new MutationObserver((MutationRecords) => {
  // let iconName = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
  // alert('777');
  // ipcRenderer.send('retrieved', iconName);
  // });
  //
  // const config = {childList :true, attributes:true, characterData: true};
  // observer.observe(icon, config);
};

window.addEventListener('click', function(){
  // let iconName = document.querySelector("link[rel='icon']").getAttribute('href').slice(70,73);
  // // let iconName = document.getElementById('quote').innerHTML;
  // // ipcRenderer.send('retrieved', iconName);
  // console.log(iconName);
});
