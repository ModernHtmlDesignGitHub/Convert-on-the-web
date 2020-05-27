var hide = document.getElementById("output");
function goReg() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
	var show = document.getElementById("showopt");
    d1.innerHTML = '<p>' + c1 + '</p>';
    hide.style.display = "inline-block";
	show.style.display = "inline-block";
}
function goLarge() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var show = document.getElementById("showopt");
    d1.innerHTML = '<h2>' + c1 + '</h2>';
	hide.style.display = "inline-block";
	show.style.display = "inline-block";
}
function goFancy() {
    var c1 = document.getElementById('txt_py').value;
    var d1 = document.getElementById('textArea');
	var hide = document.getElementById("dldopt");
    d1.innerHTML = '<p style="font-family: cursive, sans-serif">' + c1 + '</p>';
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
function saveTextAsFile(textToWrite, fileNameToSaveAs)
    {
    	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    	var downloadLink = document.createElement("a");
    	downloadLink.download = fileNameToSaveAs;
    	downloadLink.innerHTML = "Download File";
    	if (window.webkitURL != null)
    	{
    		// Chrome allows the link to be clicked
    		// without actually adding it to the DOM.
    		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    	}
    	else
    	{
    		// Firefox requires the link to be added to the DOM
    		// before it can be clicked.
    		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    		downloadLink.onclick = destroyClickedElement;
    		downloadLink.style.display = "none";
    		document.body.appendChild(downloadLink);
    	}
    
    	downloadLink.click();
    }
function hideItem() {
  var hide = document.getElementById("output");
  if (hide.style.display === "block") {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }
}
function downloadApp() {
	var userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		scriptdownload = null;
	if (macosPlatforms.indexOf(platform) !== -1) {
	  scriptdownload = 'Download for macOS';
	  document.getElementById("windows").hidden = true;
	  alert("This has not been tested. Please contect modernhtmldesign@outlook.com if you experience any problems.");
	} else if (iosPlatforms.indexOf(platform) !== -1) {
	  scriptdownload = 'No iOS app yet!';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
	  scriptdownload = 'Download for Windows (Vista, 7, 8.x, 10)';
	  document.getElementById("unix").hidden = true;
	} else if (/Android/.test(userAgent)) {
	  scriptdownload = 'No Android app yet!';
	} else if (!os && /Linux/.test(platform)) {
	  scriptdownload = 'Download for Linux';
	  document.getElementById("windows").hidden = true;
	  alert("This has been tested in Ubuntu. Please contect modernhtmldesign@outlook.com if you experience any problems.");
	}
	return scriptdownload;
  }
  var returnDownload = downloadApp();
  function appType() {
    document.getElementById("downloadText").innerHTML = scriptdownload;
    }
    