
/* Author: Anders Brownworth @anders94

  This code is copyrighted by Bandwidth.com. Use without writen permission is prohibited.
  Contact me on Twitter @anders94

 */
var  interval ;

function init() {
    c2d.drawImage(background0, 0, 0);
    setTimeout("loadImages( )", 1e3);
    console.log("STEP1");
}
function loadImages() {
    c2d.drawImage(background0, 0, 0);
    c2d.drawImage(background2, 630, 390);
    //c2d.drawImage(background3, 630, 390);
    c2d.drawImage(background4, 630, 390);
    for (i = 0; i < 12; i++) c2d.drawImage(barberPoleA[i], 630, 390);
    c2d.drawImage(background1, 0, 0), page = 1
    console.log("STEP2");
}
function relMouseCoords(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = this;
    do b += f.offsetLeft, c += f.offsetTop;
    while (f = f.offsetParent);
    return d = a.pageX - b, e = a.pageY - c, {
        x: d,
        y: e
    }
}
function canvasClick(a) {
	console.log("STEP3");
    var b = c.relMouseCoords(a);

	page == 1 ? b.x > 215 && b.x < 415 && b.y > 105 && b.y < 285 && startTests() : page == 4 && b.x > 255 && b.x < 383 && b.y > 332 && b.y < 389 && startTests();
 
}
function startTests() {
	console.log("STEP4");
    page = 2;
    step = 1;
    uploadResult = 0;
    downloadResult = 0;
    biUploadResult = 0;
    biDownloadResult = 0;
    draw();
    
    startDownload();
    //clearInzterval(interval);
    //interval = setInterval("draw( )", renderSpeed);
    //setTimeout("startDownload( )", 500);
    //interval = setInterval("DemoDownload( )", 500);
    //setTimeout("DemoResult()", 9000);
}

function startDownload()
{
	rawModule = "download";
	console.log(rawModule);
	module = rawModule.charAt(0).toUpperCase() + rawModule.slice(1);
    speed.module('download').start();
}

function Page1DownloadResult()
{
	drawText(116, 208, prettySpeed(downloadResult));
	setTimeout("startUpload( )", 500);
}


function Page1UploadResult()
{
	drawText(520, 208, prettySpeed(uploadResult));
}

function startUpload()
{
	rawModule = "upload";
	console.log(rawModule);
	module = rawModule.charAt(0).toUpperCase() + rawModule.slice(1);
	speed.module('upload').start();	
}

function showResults() {
	page = 4;
    c2d.drawImage(background4, 0, 0);
    drawText(214, 177, prettySpeed(downloadResult));
    drawText(384, 177, prettySpeed(uploadResult));
    report();
}

function draw(speed) {
	speed = typeof speed !== 'undefined' ? speed : 0;
	
	console.log("STEP5");
	c2d.drawImage(background2, 0, 0);

	scaledSpeed = Math.log(speed / 2)
	drawNeedle(320, 172, Math.PI * 1.75 - scaledSpeed / 2);
	c2d.drawImage(barberPoleA[11 - frame], 199, 347);
	c2d.drawImage(overlay2, 0, 0);
	drawText(320, 242, prettySpeed(speed));
	
	if( rawModule == "download" )
	{
		c2d.drawImage(barberPoleA[11 - frame], 199, 347);
	} else {
		c2d.drawImage(barberPoleA[frame], 199, 347);
	}
	frame ++ ;
	frame > 11 && (frame = 0);
	
	
	if( downloadResult > 0)
	{
		drawText(116, 208, prettySpeed(downloadResult));
	}

}
function drawNeedle(a, b, c) {
    c2d.beginPath(), c2d.moveTo(a, b), c2d.lineTo(Math.sin(c) * 120 + a, Math.cos(c) * 120 + b), c2d.lineWidth = 5, c2d.lineCap = "round", c2d.strokeStyle = "rgba( 20, 230, 20, 1 )", c2d.stroke()
}
function drawText(a, b, c) {
    c2d.font = "bold 16px Helvetica", c2d.textAlign = "center", c2d.fillStyle = "rgba( 20, 200, 20, 1 )", c2d.fillText(c, a, b)
}
function prettySpeed(a) {
    return a >= 1024e3 ? parseFloat(a / 1024e3).toFixed(1) + " G/s" : a >= 1024 ? parseFloat(a / 1024).toFixed(1) + " M/s" : a > 0 ? parseFloat(a).toFixed(1) + " K/s" : "0.0"
}
function report() {
	a = "downloadResult =" + downloadResult + "&uploadResult = " + uploadResult;
    var b = new XMLHttpRequest;
    b.onreadystatechange = function () {
        b.readyState != 4 || b.status != 200
    }, b.open("GET", "/results?o=" + BrowserDetect.OS + "&b=" + BrowserDetect.browser + "&v=" + BrowserDetect.version + "&" + a, !0), b.send()
}
var c, c2d, page = 0,
    step = 1,
    frame = 0,
    renderSpeed = 500,
    fileId = 3,
    uploadResult = 0,
    downloadResult = 0,
    biUploadResult = 0,
    biDownloadResult = 0,
    downloadSpeed = 0,
    downloadProgress = 0,
    downloadProgressInterval, downloadSize = 0,
    downloadTime = 0,
    uploadSpeed = 0,
    uploadProgress = 0,
    uploadProgressInterval, uploadSize = 0,
    uploadTime = 0,
    background0 = new Image;
	background0.src = "images/background0.png";
	var background1 = new Image;
	background1.src = "images/background1.png";
	var background2 = new Image;
	background2.src = "images/background2.png";
	//var background3 = new Image;
	//background3.src = "images/background3.png";
	var background4 = new Image;
	background4.src = "images/background4.png";
	var overlay2 = new Image;
	overlay2.src = "images/overlay2.png";
	//var overlay3 = new Image;
	//overlay3.src = "images/overlay3.png";
	var barberPoleA = new Array;
	barberPoleA[0] = new Image, barberPoleA[0].src = "images/barberPoleA00.png", barberPoleA[1] = new Image, barberPoleA[1].src = "images/barberPoleA01.png", barberPoleA[2] = new Image, barberPoleA[2].src = "images/barberPoleA02.png", barberPoleA[3] = new Image, barberPoleA[3].src = "images/barberPoleA03.png", barberPoleA[4] = new Image, barberPoleA[4].src = "images/barberPoleA04.png", barberPoleA[5] = new Image, barberPoleA[5].src = "images/barberPoleA05.png", barberPoleA[6] = new Image, barberPoleA[6].src = "images/barberPoleA06.png", barberPoleA[7] = new Image, barberPoleA[7].src = "images/barberPoleA07.png", barberPoleA[8] = new Image, barberPoleA[8].src = "images/barberPoleA08.png", barberPoleA[9] = new Image, barberPoleA[9].src = "images/barberPoleA09.png", barberPoleA[10] = new Image, barberPoleA[10].src = "images/barberPoleA10.png", barberPoleA[11] = new Image, barberPoleA[11].src = "images/barberPoleA11.png";
	
	$(document).ready(function () {
		c = document.getElementById("c"), c.addEventListener("click", canvasClick, !1), c2d = c.getContext("2d"), c2d.drawImage(background0, 0, 0)
	}), HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
	var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "unknown", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "unknown", this.OS = this.searchString(this.dataOS) || "unknown"
		},
		searchString: function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = a[b].string,
					d = a[b].prop;
				this.versionSearchString = a[b].versionSearch || a[b].identity;
				if (c) {
					if (c.indexOf(a[b].subString) != -1) return a[b].identity
				} else if (d) return a[b].identity
			}
		},
		searchVersion: function (a) {
			var b = a.indexOf(this.versionSearchString);
			if (b == -1) return;
			return parseFloat(a.substring(b + this.versionSearchString.length + 1))
		},
		dataBrowser: [{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}],
		dataOS: [{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "iPhone/iPod"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}]
	};
	BrowserDetect.init();

var speed;
var rawModule;
var module;

