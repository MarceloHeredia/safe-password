//@author: www.github.com/marceloheredia
const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 750,
        icon: 'img/door-key.png',
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
    win.removeMenu()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
