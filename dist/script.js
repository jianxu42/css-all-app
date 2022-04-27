
// With the Tauri global script, enabled when `tauri.conf.json > build > withGlobalTauri` is set to true:
const invoke = window.__TAURI__.invoke
// Invoke the command
invoke('my_custom_command')

const win = window.__TAURI__.window

// // alternatively, load a remote URL:
// const webview = new win.WebviewWindow('theUniqueLabel', {
//     url: 'https://github.com/tauri-apps/tauri'
// })

// webview.once('tauri://created', function () {
//     // webview window successfully created
// })

document
    .getElementById('onesupport')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://onesupport.crm.dynamics.com/'));
document
    .getElementById('unify')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://unify.services.dynamics.com/'));
document
    .getElementById('worldtimebuddy')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://www.worldtimebuddy.com/'));
document
    .getElementById('azuredataexplorer')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://dataexplorer.azure.com/'));
document
    .getElementById('azuresupportcenter')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://azuresupportcenter.msftcloudes.com/'));
document
    .getElementById('azuresupportcentercn')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://azuresupportcenter.chinacloudapi.cn/'));
document
    .getElementById('crmglobal')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://crmglobal.corp.microsoft.com/'));
document
    .getElementById('sspm')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://sspm.microsoft.com/'));
document
    .getElementById('cmat')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://cmat.azure.com/'));
    document
    .getElementById('textce')
    .addEventListener('click', () => window.__TAURI__.shell.open('https://textce.com/'));
// window.__TAURI__.shell.open('https://tauri.io')

