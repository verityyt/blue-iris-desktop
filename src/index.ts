const { app, BrowserWindow } = require("electron")

function createWindow() {

    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: false,
            allowRunningInsecureContent: true,
            contextIsolation: false
        },
        icon: "assets/favicon.ico"
    })

    window.setMenuBarVisibility(false)
    window.maximize()
    window.loadURL("http://192.168.155.17:81/ui3.htm")

}

app.whenReady().then(createWindow)
