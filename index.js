var hide = document.getElementById("dldopt");
var hideDownloadWindows = document.getElementById("windows");
var hideDownloadUnixBase = document.getElementById("unix");
function goReg() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	var show = document.getElementById("showopt");
	d1.innerHTML = '<p>' + c1 + '</p>';
	String(d1)
    hide.style.display = "inline-block";
	show.style.display = "inline-block";
}
function goLarge() {
    var c1 = document.getElementById('txt_py').value;
	var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt")
	var show = document.getElementById("showopt");
	d1.innerHTML = '<h2>' + c1 + '</h2>';
	String(d1)
	hide.style.display = "inline-block";
	show.style.display = "inline-block";
}
function goFancy() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	d1.innerHTML = '<p style="font-family: cursive, sans-serif">' + c1 + '</p>';
	String(d1)
	hide.style.display = "none";
	hide.style.backgroundColor = "blue";
	hide.style.color = "blue";
	hide.style.cursor = "context-menu";
	show.style.display = "none";
	show.style.color = "blue";
	show.style.backgroundColor = "blue";
	show.style.cursor = "context-menu";
  if (hide.style.display === "block") {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }
}
function goLargeFancy() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	d1.innerHTML = '<h2 style="font-family: cursive, sans-serif">' + c1 + '</h2>';
	String(d1)
	hide.style.display = "none";
	hide.style.backgroundColor = "blue";
	hide.style.color = "blue";
	hide.style.cursor = "context-menu";
	show.style.display = "none";
	show.style.backgroundColor = "blue";
	show.style.color = "blue";
	show.style.cursor = "context-menu";
  if (hide.style.display === "block") {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }
}
function saveTextAsFile() {
		var textToWrite = document.getElementById('textArea').value;
		var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
		var fileNameToSaveAs = "convert.html";
	  
		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null) {
		  // Chrome allows the link to be clicked without actually adding it to the DOM.
		  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		} else {
		  // Firefox requires the link to be added to the DOM before it can be clicked.
		  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		  downloadLink.onclick = destroyClickedElement;
		  downloadLink.style.display = "none";
		  document.body.appendChild(downloadLink);
		}
	  
		downloadLink.click();
	  }
	  
	  var button = document.getElementById('save');
	  button.addEventListener('click', saveTextAsFile);
	  
	  function destroyClickedElement(event) {
		// remove the link from the DOM
		document.body.removeChild(event.target);
	  }


function hideItem() {
  var hide = document.getElementById("output");
  if (hide.style.display === "block") {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }
}
function downloadCorrectApp() {
//window.location.href = "sorry.html";
//window.location.replace("sorry.html");
	var userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;
	var hideDownloadUnixBase = document.getElementById("unix");
	var hideDownloadWindows = document.getElementById("windows");
  
	if (macosPlatforms.indexOf(platform) !== -1) {
	  os = 'Mac OS';
	  hideDownloadWindows.style.display = "none";
	  hideDownloadUnixBase.style.display = "inline-block";
	} else if (iosPlatforms.indexOf(platform) !== -1) {
	  os = 'iOS';
	  window.location.href = "sorry.html";
	  window.location.replace("sorry.html");
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
	  os = 'Windows';
	  hideDownloadUnixBase.style.display = "none";
	  hideDownloadWindows.style.display = "inline-block";
	} else if (/Android/.test(userAgent)) {
	  os = 'Android';
	  window.location.href = "sorry.html";
	  window.location.replace("sorry.html");
	} else if (!os && /Linux/.test(platform)) {
	  os = 'Linux';
	}
  
	return os;
}