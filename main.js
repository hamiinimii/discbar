//厳格モード
'use strict';

//nodeの書き方。requireは、括弧内のものを読み込み、宣言したオブジェクトに格納する。
//ここでは「electron」というnodeのモジュールを読み込む。
//読み込みはモジュールだけじゃなく、括弧内に「'./hoge.txt'」などを書けばそのファイルを読み込むことができる。

const electron = require('electron')
const {app,BrowserWindow,dialog,ipcMain,Menu,Tray} = electron;

// const app = electron.app
// const BrowserWindow = electron.BrowserWindow
// const Menu = electron.Menu
// const Tray = electron.Tray
// const ipcMain = electron.ipcMain

//オブジェクトが勝手に破棄されないように、空オブジェクトのグローバル変数を宣言します。
let win
let settingsWin
let appIcon

//Menuのテンプレートを作り、呼び出す。
let menuTemplate =[{
  label: 'MyApp' , //第一項はアプリ名になる
  submenu: [
    {label: 'About', accelerator: 'CmdOrCtrl+Shift+A', click:
    function(){showAboutDialog();}},
    {type: 'separator'},
    {label: 'Settings', accelerator: 'CmdOrCtrl+,', click:
    function(){showSettingsWindow();}},
    {type: 'separator'},
    {label: 'Quit', accelerator: 'CmdOrCtrl+Q', click:
    function(){app.quit(); }}
  ]
}];
let menu = Menu.buildFromTemplate(menuTemplate);

//functions
let createWindow =()=> {
  Menu.setApplicationMenu(menu); //Menuを生成する。
  win = new BrowserWindow({'width': 800,'height': 600})   // Windowのサイズを決めて、オブジェクト生成する。
  win.loadURL(`file://${__dirname}/src/index.html`) // index.htmlを読み込む
  win.webContents.openDevTools() // Chromium のDevToolsを有効にする。

  win.on('closed', () => {win = null}) // 表示したWindowを閉じたときの初期化処理
}

let showAboutDialog =()=>{
  dialog.showMessageBox({
    type: 'info',
    buttons: ['OK'],
    message: 'About This App',
    detail: 'This app was created by hamiinimii'
  })
}

let showSettingsWindow =()=> {
  settingsWin = new BrowserWindow({'width': 800,'height': 600});
  settingsWin.loadURL(`file://${__dirname}/src/settings.html`);
  settingsWin.webContents.openDevTools();
  settingsWin.show();
  settingsWin.on('closed', () => {settingsWin = null});
}


// Electronの初期化が完了し、ブラウザウインドウの作成準備が完了したときに呼び出される。
app.on('ready', createWindow)

// ステータスバー等の通知エリアでのアイコンを作成
app.on('ready',() => {
  appIcon = new Tray(__dirname +'/images/icon.png');
  let contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio'}
  ])
  appIcon.setToolTip('This is my application.')
  appIcon.setContextMenu(contextMenu)
})

// 全てのウィンドウが閉じられた時の処理
app.on('window-all-closed', () => {
  // macOS(darwin)の場合、全てのウィンドウが閉じてもappを生かすことができる。
  //if (process.platform !== 'darwin') {
  app.quit()
  //}
})

/*
app.on('activate', () => {
  // macOS：ドックアイコンをクリックした際にウィンドウを再生成する。（ウィンドウなしでappが生きている場合）
  if (win === null) {
    createWindow()
  }
})
*/
