var hide = document.getElementById("dldopt");
var hideDownloadWindows = document.getElementById("windows");
var hideDownloadUnixBase = document.getElementById("unix");
var hidden = document.getElementById("textArea");
var hiddenbtn = document.getElementById("showopt")
function goReg() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	var show = document.getElementById("showopt");
	d1.innerHTML = '<p>' + c1 + '</p>';
	String(d1)
    hide.style.display = "inline-block";
	show.style.display = "inline-block";
	hide.style.backgroundColor = "#4caf50";
	hide.style.color = "black";
	show.style.color = "black";
	show.style.backgroundColor = "#4caf50";
}
function goLarge() {
    var c1 = document.getElementById('txt_py').value;
	var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	var show = document.getElementById("showopt");
	d1.innerHTML = '<h2>' + c1 + '</h2>';
	String(d1);
	hide.style.display = "inline-block";
	show.style.display = "inline-block";
	hide.style.backgroundColor = "#4caf50";
	hide.style.color = "black";
	show.style.color = "black";
	show.style.backgroundColor = "#4caf50";
}
function goFancy() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	var show = document.getElementById("showopt");
	var byebye = document.getElementById("output");
	d1.innerHTML = '<p style="font-family: cursive, sans-serif">' + c1 + '</p>';
	String(d1);
	hide.style.display = "none";
	hide.style.backgroundColor = "blue";
	hide.style.color = "blue";
	hide.style.cursor = "context-menu";
	show.style.display = "none";
	show.style.color = "blue";
	show.style.backgroundColor = "blue";
	show.style.cursor = "context-menu";
	byebye.style.display = "none";
  	if (hide.style.display === "block") {
    	hide.style.display = "none";
  	} else {
    hide.style.display = "block";
  	}
  	show.style.display = "none";
  	if (d1.style.dispaly === "block") {
	  d1.style.display = "none";
  	} else {
	  d1.style.display = "block";
  	}
}

function goLargeFancy() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	d1.innerHTML = '<h2 style="font-family: cursive, sans-serif">' + c1 + '</h2>';
	String(d1);
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
  hidden.style.display = "none";
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
	  setTimeout(webredirect, 7000);
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
	  os = 'Windows';
	  hideDownloadUnixBase.style.display = "none";
	  hideDownloadWindows.style.display = "inline-block";
	} else if (/Android/.test(userAgent)) {
	  os = 'Android';
	  setTimeout(webredirect, 7000);
	} else if (!os && /Linux/.test(platform)) {
	  os = 'Linux';
	}
  
	return os;
}
function webredirect() {
	window.location.href = "sorry.html";
	window.location.replace("sorry.html");
}
function continuetopage() {
	window.location.href = "home.html";
	window.location.replace("home.html");
}