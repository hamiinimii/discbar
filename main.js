//厳格モード。曖昧な表現や変数宣言を怠るとエラーになるので、常につけるべき、おまじない。
'use strict';

//nodeの書き方。requireは、括弧内のものを読み込み、宣言したオブジェクトに格納する。
//ここでは「electron」というnodeのモジュールを読み込む。
//読み込みはモジュールだけじゃなく、括弧内に「'./hoge.txt'」などを書けばそのファイルを読み込むことができる。
//const {app, BrowserWindow} = require('electron');
//const Tray = require('tray');


const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const Tray = electron.Tray


//オブジェクトが勝手に破棄されないように、空オブジェクトのグローバル変数を宣言します。
let win
let barIcon

let createWindow = function() {
  // Windowのサイズを決めて、オブジェクト生成する。
  win = new BrowserWindow({
    'width': 800,
    'height': 600
  })

  // 同じ階層にいるindex.htmlを読み込む
  win.loadURL(`file://${__dirname}/index.html`)

  // Chromium のDevTools有効にする。
  //win.webContents.openDevTools()

  // 表示したWindowを閉じたときの処理
  win.on('closed', () => {
    // オブジェクトを初期化する
    win = null
  })
}

// Electronの初期化が完了し、ブラウザウインドウの作成準備が完了したときに呼び出される。
app.on('ready', createWindow)

//ステータスバー等の通知エリアでのアイコンを作成
app.on('ready',() => {
  barIcon = new Tray(__dirname +'/images/icon.png');
  let contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio'}
  ])
  barIcon.setToolTip('This is my application.')
  barIcon.setContextMenu(contextMenu)
})

// 全てのウィンドウが閉じられた時の処理
app.on('window-all-closed', () => {
  // macOS(darwin)の場合、全てのウィンドウが閉じても メニューバーが生きている。
  // それ以外のOSは閉じる処理をする。macOSを考慮しなければ、このif文は不要で、app.quit()のみ記載すればいい。
  //if (process.platform !== 'darwin') {
  app.quit()
  //}
})

/*
app.on('activate', () => {
  // macOSのドックアイコンをクリックした際にウィンドウを再生成する。
  // macOSを考慮しなければ、このapp.onの関数自体不要。
  if (win === null) {
    createWindow()
  }
})
*/
