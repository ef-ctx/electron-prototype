/*jshint esnext:true */
/*globals __dirname: true */

(function() {
    'use strict';

    const electron = require('electron');
    const ipcMain = require('electron').ipcMain;
    const app = electron.app; // Module to control application life.
    const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    var mainWindow = null,
        session = null;

    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform != 'darwin') {
            app.quit();
        }
    });

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.on('ready', function() {

        // Create the browser window.
        mainWindow = new BrowserWindow({
            width: 1024,
            height: 768
        });

        session = mainWindow.webContents.session;

        // and load the index.html of the app.
        mainWindow.loadURL('http://accounts.dev.ctx.ef.com');

        // Open the DevTools.
        //mainWindow.webContents.openDevTools();

        // Emitted when the window is closed.
        mainWindow.on('closed', function() {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
        });
    });

    /**
     * Commuynication between app and main.js
     *
     * in the app we can send messages in the next way:
     *
     * var ipcRenderer = require('electron').ipcRenderer;
     * var value = ipcRenderer.sendSync('getWebSocket', <url>,<protocols>);
     * console.log('value'); ---> 'test'
     *
     * note only basic types can pass from one to the other as they are different platforms
     **/

    ipcMain.on('getWebSocket', function(event, url, protocols) {
        console.log('url', url);
        console.log('protocols', protocols);
        event.returnValue = 'test';
    });


}());
