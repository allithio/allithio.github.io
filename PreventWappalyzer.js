// flushFile = document.removeChild("script");
// flushFile.setAttribute("src", chrome.extension.getURL('js/inject.js'));
// document.body.appendChild(flushFile);

//Loads flush.js into the DOM tree, overwriting all functions and variables of main.js in browser memory to null

document.body.remove('content.js');
document.body.remove('inject.js');
document.body.remove(chrome.extension.getURL('js/inject.js'));
document.setAttribute.remove(chrome.extension.getURL('js/inject.js'))
//  script.setAttribute('src', chrome.extension.getURL('js/inject.js')