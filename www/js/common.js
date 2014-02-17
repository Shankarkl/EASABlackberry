// JScript source code
var pageData = ["splscreen"];
var currentPage, prevPage, userName, passowrd, HomeID, RoadID, MedicalID, legalID, TravelID = '';
var Pagename = ''; localStorage.count = 0;
/*******************************************************************************
* FUNCTION TO CALL ANY WEB SERVICE //live link http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx
******************************************************************************/
CallWebService = function (url, inputData, method, contentType, callback) {
$(window).scrollTop(0);
document.getElementById('loaddingimg').style.top = '0';
document.getElementById('loaddingimg').style.display = "block";
try {var xhr;
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
xhr = new XMLHttpRequest();
} else {// code for IE6, IE5bacl
xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {
document.getElementById('loaddingimg').style.display = "none";
callback(this.responseText);
}
if (xhr.readyState == 4 && (xhr.status == 404 || xhr.status == 403 || xhr.status == 500 || xhr.status == 504)) {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
}
};
xhr.onerror = function (e) {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
};
xhr.open(method, url);
xhr.setRequestHeader("Content-Type", contentType);
xhr.timeout = 120000;
xhr.ontimeout = function (e) {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
//$('#txtLoginUserName,#txtLoginPassword').val('');
}
if (inputData !== '') {
if (window.navigator.onLine == true) {
xhr.send(inputData);
} else {
alert('No network connection,Please check your network connectivity!');
document.getElementById('loaddingimg').style.display = "none";
}
} else {
if (window.navigator.onLine == true) {
xhr.send(null);
} else {
alert('No network connection,Please check your network connectivity!');
document.getElementById('loaddingimg').style.display = "none";
}
}
} catch (ex) {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
}
}
function checkremember() {
try {
$("#hmimg,#mdimg,#rdimg,#lgimg,#tlimg").hide();
try {
if (window.localStorage.getItem("loginID") == 'null' || window.localStorage.getItem("loginID") == null || window.localStorage.getItem("loginID") == undefined || window.localStorage.getItem("loginID") == 0) {
prevPage = currentPage;
$.mobile.changePage('#log', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'log';
pageData.push(currentPage);
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26,.header27,.header28").empty();
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
window.localStorage.setItem("randgosessionid", "null");
localStorage.gettravel = 0;
localStorage.getlegal = 0;
localStorage.getroad = 0;
localStorage.getmedical = 0;
localStorage.gethome = 0;
} else {
Pagename = 'indexservice';
$("#NOproductDiv").hide();
$("#divhm,#divmm,#divrd,#divle,#divtr").hide();
$("#hme,#medical,#roadas,#legalas,#travelas").hide(); //color img
$(".trheight5").hide();
inputData = '<?xml version="1.0" encoding="utf-8"?>';
inputData = inputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">';
inputData = inputData + '<soap:Body>';
inputData = inputData + '<EAAppConfig  xmlns="http://tempuri.org/" />';
inputData = inputData + '</soap:Body>';
inputData = inputData + '</soap:Envelope>';
CallWebService('http://dsg.star-knowledge.com/service.asmx', inputData, 'POST', 'text/xml', checkAppLogin);
}
} catch (ex) {
}
init();
} catch (ex) {
}
}
function gotoWallet() {
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
if (checkLogin()) {
prevPage = currentPage;
$.mobile.changePage('#indexwallet', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexwallet';
pageData.push(currentPage);
}
}
/*** DEC 6th ASHA ******/
function gotoBenifit() {
// alert("bbbbbb");
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();
if (checkLogin()) {
prevPage = currentPage;
$.mobile.changePage('#indexbenefit', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexbenefit';
pageData.push(currentPage);
document.getElementById('benefitbackbtn').style.display = "none";
var randgoInputData = ''; randgoInputData = '<?xml version="1.0" encoding="utf-8"?>'; randgoInputData = randgoInputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; randgoInputData = randgoInputData + '<soap:Body>'; randgoInputData = randgoInputData + '<Login xmlns="http://tempuri.org/">'; randgoInputData = randgoInputData + '<lUserName>ws@europassistance</lUserName>'; randgoInputData = randgoInputData + '<lPassword>e@s@ws</lPassword>'; randgoInputData = randgoInputData + '</Login>'; randgoInputData = randgoInputData + '</soap:Body>'; randgoInputData = randgoInputData + '</soap:Envelope>'; CallWebService('http://www.randgo.com/3rdpartyservices/Service.asmx', randgoInputData, 'POST', 'text/xml', RandoLoginCallBackNew);
}
}
function RandoLoginCallBackNew(responseData) {
try {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
var xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("status")[0] != null && xmlDoc.getElementsByTagName("status")[0].textContent !== "") {
window.localStorage.setItem("randgosessionid", xmlDoc.getElementsByTagName("sessionid")[0].textContent);
GetDisplayCategories();
}
}
else {
alert('No Data Found');
return false;
}
} catch (exp) {
//alert('RandoLoginCallBackNew' + exp);
}
}

function gotoProfile() {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();
if (checkLogin()) {
prevPage = currentPage;
$('#txtname,#txtsname,#txtemail,#txtcellno,#txtid,#txtnewpin,#txtconpin,#txtusername').val('');
$.mobile.changePage('#indexprofile', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexprofile';
pageData.push(currentPage);
GetProfileDetails();
}
}
function gotoHelp() {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();
if (checkLogin()) {
prevPage = currentPage;
$.mobile.changePage('#indexhelp', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexhelp';
pageData.push(currentPage);
var num = 0;
DisplayHelpDetails(num);
document.getElementById('helpbackbtn').style.display = "none";
}
}
/*****************************************************************************************************
* PURPOSE :DisplayHelpDetails(indexhelp)
* AUTHOR : KAVYA
* CREATED DATE : Jan 18 2014
******************************************************************************************************/
function DisplayHelpDetails(qtnvalue) {
var helpInputData = ''; helpInputData = '<?xml version="1.0" encoding="utf-8"?>'; helpInputData = helpInputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; helpInputData = helpInputData + '<soap:Body>'; helpInputData = helpInputData + '<GetFAQs xmlns="http://tempuri.org/">'; helpInputData = helpInputData + '<FAQID> ' + qtnvalue + ' </FAQID>'; helpInputData = helpInputData + '</GetFAQs>'; helpInputData = helpInputData + '</soap:Body>'; helpInputData = helpInputData + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=GetFAQs', helpInputData, 'POST', 'text/xml', DisplayHelpDetailsCallback);
//local id http://192.168.2.112:8079/EuropeAssistStaticDataWS.asmx?op=GetFAQs http://117.247.177.228:8079/EuropeAssistStaticDataWS.asmx?op=GetFAQs
}
function DisplayHelpDetailsCallback(responseData) {
try {
var responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
var xmlDoc = parser.parseFromString(responseData, "text/xml");
document.getElementById('helpbackbtn').style.display = "block";
var gettblhelp = document.getElementById('FAQtbl');
gettblhelp.innerHTML = "";
if (xmlDoc.getElementsByTagName("FAQs") != null && xmlDoc.getElementsByTagName("FAQs").length > 0) {
var faqlist = xmlDoc.getElementsByTagName("FAQs");
for (var i = 0; i < faqlist.length; i++) {
var rowcount = gettblhelp.rows.length;
var row = gettblhelp.insertRow(rowcount);
var question = replacespecilChar(xmlDoc.getElementsByTagName("FAQName")[i].textContent);
row.setAttribute('id', 'row' + xmlDoc.getElementsByTagName("FAQID")[i].textContent);
var cell = row.insertCell(0);
/*** question ***/
var divques = document.createElement("div");
var lblhelp = document.createElement("label");
lblhelp.innerHTML = question;
divques.appendChild(lblhelp);
cell.appendChild(divques);
divques.setAttribute('class', 'textstyle3new');
/*** img ***/
var divimg = document.createElement("div");
var img = document.createElement("img");
img.src = 'public/images/EAslicing/rightsymbolarrow.png';
divimg.appendChild(img);
cell.appendChild(divimg);
divimg.setAttribute('class', 'regcol1new');
cell.setAttribute('class', 'qtnnew');
row.onclick = function () {
$(window).scrollTop(0);
var FAQhelpID = this.id;
FAQhelpID = FAQhelpID.replace('row', '');
$("#tblquestionans tr").remove();
prevPage = currentPage;
$.mobile.changePage('#qtnanswers', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'qtnanswers';
pageData.push(currentPage); document.getElementById('qtnansbackbtn').style.display = "none";
DisplayQuestionAnswers(FAQhelpID);
}
}
}
}
} catch (exp) {
//alert("exp fay:::::::::::" + exp)
}
}
/*****************************************************************************************************
* PURPOSE :DisplayQuestionAnswers(helpID)
* AUTHOR : KAVYA
* CREATED DATE : Jan 18 2014
******************************************************************************************************/
function DisplayQuestionAnswers(FAQhelpID) {
var helpInputData = ''; helpInputData = '<?xml version="1.0" encoding="utf-8"?>'; helpInputData = helpInputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; helpInputData = helpInputData + '<soap:Body>'; helpInputData = helpInputData + '<GetFAQs xmlns="http://tempuri.org/">'; helpInputData = helpInputData + '<FAQID>' + FAQhelpID + '</FAQID>'; helpInputData = helpInputData + '</GetFAQs>'; helpInputData = helpInputData + '</soap:Body>'; helpInputData = helpInputData + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=GetFAQs', helpInputData, 'POST', 'text/xml', DisplayQuestionAnswersCallback);
}
function DisplayQuestionAnswersCallback(responseData) {
try {
var responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
var xmlDoc = parser.parseFromString(responseData, "text/xml");
document.getElementById('qtnansbackbtn').style.display = "block";
var gettblquestionans = document.getElementById('tblquestionans');
gettblquestionans.innerHTML = "";
if (xmlDoc.getElementsByTagName("FAQs") != null && xmlDoc.getElementsByTagName("FAQs").length > 0) {
var faqlist = xmlDoc.getElementsByTagName("FAQs");
for (var i = 0; i < faqlist.length; i++) {
var rowcount = gettblquestionans.rows.length;
var row = gettblquestionans.insertRow(rowcount);
var cell1 = row.insertCell(0);
cell1.setAttribute('width', '100%');
var lblquestion = document.createElement("label");
var Cmque = replacespecilChar(xmlDoc.getElementsByTagName("FAQName")[i].textContent);
lblquestion.innerHTML = Cmque;
lblquestion.setAttribute('class', 'textstyle3 qtnbot');
cell1.appendChild(lblquestion);
rowcount = gettblquestionans.rows.length;
var row2 = gettblquestionans.insertRow(rowcount);
var cell2 = row2.insertCell(0);
cell2.setAttribute('width', '100%');
var lblans = document.createElement("label");
var lblansremovebreak = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
lblans.innerHTML = lblansremovebreak;
lblans.setAttribute('class', 'qtncontent');
cell2.appendChild(lblans);
$("a").removeAttr('href');
}
}
}
} catch (exp) {
}
}
function replacespecilChar(dataVal) { dataVal = dataVal.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'"); return dataVal; }
function gotoBalance() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header12").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#yourbalance', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'yourbalance';
pageData.push(currentPage);
}
}
/*********************Topup**************/
function gotoAddremove() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header2").append(clonedDiv);
prevPage = currentPage; $('#txtcvv,#txtcardholder,#txtcardamt,#txtcardamt').val('');
$.mobile.changePage('#addremove', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'addremove';
pageData.push(currentPage);
}
}
function gotoEft() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header6").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#eftdetails', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'eftdetails';
pageData.push(currentPage);
}
}
function gotoTopupin() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header24").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#topupinstore', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'topupinstore';
pageData.push(currentPage);
}
}
/***************trdts**************************/
function gotoBills() {
var paybill = document.getElementById('txtpay').value; var amount = document.getElementById('txtamt').value; if (paybill == "") { alert("Please enter pay bill number"); return false } if (amount == "") { alert("Please enter amount"); return false } return true;
} /*************************payUse**************************/
function gotoPaystore() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header17").append(clonedDiv);
prevPage = currentPage;
document.getElementById('txtdate').value = '';
$.mobile.changePage('#payinstore', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'payinstore';
pageData.push(currentPage);
}
}
/*******BuyPrepaid**********/
function gotoAirtimePage() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header3").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#airtime', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'airtime';
pageData.push(currentPage);
//AirtimeList();
}
}
function gotoElecPage() {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header7").append(clonedDiv);
prevPage = currentPage; $('#txtMeterNumber,#txtElectricityAmt').val('');
if (checkLogin()) {
$.mobile.changePage('#electricity', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'electricity';
pageData.push(currentPage);
}
}
function gotoBillsPage() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header4").append(clonedDiv);
prevPage = currentPage; $('#txtBillNumber,#txtBillAmount').val('');
$.mobile.changePage('#bills', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'bills';
pageData.push(currentPage);
}
}
/***** Wallet list page navigation ******/
function gotoPayFriend() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header18").append(clonedDiv);
prevPage = currentPage; $('#txtfrnd,#txtfrnd').val('');
$.mobile.changePage('#payafriend', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'payafriend';
pageData.push(currentPage);
}
}
function gotoBuyPrepaid() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header5").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#buyprepaid', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'buyprepaid';
pageData.push(currentPage);
}
}
function gotoPayStore() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header19").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#payuse', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'payuse';
pageData.push(currentPage);
}
}
function gotoTopUp() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header23").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#topup', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'topup';
pageData.push(currentPage);
}
}
function gotoSlocator() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header20").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#storelocator', {
transition: "none",
reverse: true,
changeHash: false
});
//provincestorelocator();
currentPage = 'storelocator';
pageData.push(currentPage);
}
}
function gotoMyCoupons() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header13").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#mycoupons', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'mycoupons';
pageData.push(currentPage);
//MyCouponsList();
}
}
/************TH history***********************/
function gotoTHistory() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header10").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#transactionhistory', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'transactionhistory';
pageData.push(currentPage);
//Airtimedenomlist();
}
}
/************my coupons***********************/
function gotopick() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header15").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#picknpay', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'picknpay';
pageData.push(currentPage);
}
}
/***********************coupons************************/
function gotocoupons() {
if (checkLogin()) {
var code = document.getElementById('txtcode').value;
var date = document.getElementById('txtdate').value;
if (code == "") {
alert("Please enter Code");
return false;
}
if (date == "") {
alert("Please enter date");
return false;
}
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header11").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#transactionsuccessful', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'transactionsuccessful';
pageData.push(currentPage);
}
}
/*****************************picknpay***************************/
function gotopnp() {
if (checkLogin()) {
prevPage = currentPage;
document.getElementById('Text1').value = '';
document.getElementById('Date1').value = '';
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header14").append(clonedDiv);
$.mobile.changePage('#coupons', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'coupons';
pageData.push(currentPage);
}
}
function gotowcd() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header16").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#productdtls', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'productdtls';
pageData.push(currentPage);
}
}
/**********************/
function submitData() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header21").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#storesinyrarea', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'storesinyrarea';
pageData.push(currentPage);
}
}
/***added 21/10/13 *****/
function gotoVodacom() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header8").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#vodacom', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'vodacom';
pageData.push(currentPage);
//Airtimedenomlist();
}
}
function gotoairtimevoucher() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header25").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#avldenom', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'avldenom';
pageData.push(currentPage);
//Airtimedenomlist();
}
}
function gotoavldenom() {
if (checkLogin()) {
prevPage = currentPage;
$.mobile.changePage('#avldenom', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'avldenom';
pageData.push(currentPage);
//Airtimedenomlist();
}
}
function gototransactiondetails() {
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header9").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#trdtls', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'trdtls';
pageData.push(currentPage);
//Airtimedenomlist();
}
}
function goToMainIndex() {
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
}
function goBacknext() {
if (currentPage == 'log' || currentPage == 'RegFstPage') {
$(window).scrollTop(0);
pageData.pop();
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
} else if (currentPage == 'indexwallet' || currentPage == 'indexprofile' || currentPage == 'indexhelp' || currentPage == 'indexbenefit' || currentPage == 'clickformoreinfo') {
$(window).scrollTop(0);
pageData.pop();
$.mobile.changePage('#indexservice', {
transition: "none",
reverse: false,
changeHash: false
});
} else if (currentPage == 'goeat') {
$(window).scrollTop(0);
pageData.pop();
currentPage = pageData[pageData.length - 1];
$.mobile.changePage('#merchantnames', {
transition: "none",
reverse: true,
changeHash: false
});
} else if (currentPage == 'qtnanswers') {
$(window).scrollTop(0);
pageData.pop();
currentPage = pageData[pageData.length - 1];
$.mobile.changePage('#indexhelp', {
transition: "none",
reverse: true,
changeHash: false
});
} else if (currentPage == 'merchantnames') {
$(window).scrollTop(0);
pageData.pop();
currentPage = pageData[pageData.length - 1];
$.mobile.changePage('#indexbenefit', {
transition: "none",
reverse: false,
changeHash: false
});
} else {
$(window).scrollTop(0);
pageData.pop();
currentPage = pageData[pageData.length - 1];
$.mobile.changePage('#' + currentPage, {
transition: "none",
reverse: true,
changeHash: false
});
}
}
function goBack() {
$(window).scrollTop(0);
$('#txtLoginUserName,#txtLoginPassword,#txtusernameregfirst,#txtpwregfirst,#txtconfirmpwregfirst,#txtmerchantsearch').val('');
pageData.pop();
currentPage = pageData[pageData.length - 1];
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
var getheader = '';
if (currentPage == 'yourbalance') { getheader = "header12" } else if (currentPage == 'payafriend') { getheader = "header18" } else if (currentPage == 'buyprepaid') { getheader = "header5" } else if (currentPage == 'payuse') { getheader = "header19" } else if (currentPage == 'topup') { getheader = "header23" } else if (currentPage == 'storelocator') { getheader = "header20" } else if (currentPage == 'mycoupons') { getheader = "header13" } else if (currentPage == 'transactionhistory') { getheader = "header10" } else if (currentPage == 'addremove') { getheader = "header2" } else if (currentPage == 'airtime') { getheader = "header3" } else if (currentPage == 'bills') { getheader = "header4" } else if (currentPage == 'eftdetails') { getheader = "header6" } else if (currentPage == 'electricity') { getheader = "header7" } else if (currentPage == 'vodacom') { getheader = "header8" } else if (currentPage == 'trdtls') { getheader = "header9" } else if (currentPage == 'transactionsuccessful') { getheader = "header11" } else if (currentPage == 'coupons') { getheader = "header14" } else if (currentPage == 'picknpay') { getheader = "header15" } else if (currentPage == 'productdtls') { getheader = "header16" } else if (currentPage == 'payinstore') { getheader = "header17" } else if (currentPage == 'storesinyrarea') { getheader = "header21" } else if (currentPage == 'storedetails') { getheader = "header22" } else if (currentPage == 'topupinstore') { getheader = "header24" } else if (currentPage == 'avldenom') { getheader = "header25" } else if (currentPage == 'trdts') { getheader = "header26" } else if (currentPage == 'transactionsuccessful') { getheader = "header11" }
else {$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
} $("." + getheader).append(clonedDiv);
$.mobile.changePage('#' + currentPage, {
transition: "none",
reverse: true,
changeHash: false
});
}
function payfrnd() {
var peernumber = document.getElementById('txtfrnd').value; var amount = document.getElementById('txtfriendAmount').value; var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; var pattern = /^\d{10}$/; if (peernumber == "") { alert("Please enter friend cell number"); return false } if (!peernumber.match((pattern) || !peernumber.match(phoneno))) { alert("Please enter 10 digit number"); return false } if (amount == "") { alert("Please enter amount"); return false }
openpopupPayfriend();
}
var opts = {
lines: 13, // The number of lines to draw
length: 12, // The length of each line
width: 4, // The line thickness
radius: 12, // The radius of the inner circle
corners: 1, // Corner roundness (0..1)
rotate: 0, // The rotation offset
direction: 1, // 1: clockwise, -1: counterclockwise
color: '#fff', // #rgb or #rrggbb
speed: 0.8, // Rounds per second
trail: 67, // Afterglow percentage
shadow: false, // Whether to render a shadow
hwaccel: false, // Whether to use hardware acceleration
className: 'spinner', // The CSS class to assign to the spinner
zIndex: 2e9, // The z-index (defaults to 2000000000)
top: 'auto', // Top position relative to parent in px
left: 'auto' // Left position relative to parent in px
};
function PayElectricityBills() {
var met = document.getElementById('txtMeterNumber').value;
var amount = document.getElementById('txtElectricityAmt').value;
if (met == "") {
alert("Please enter meter number");
return false;
}
if (amount == "") {
alert("Please enter amount");
return false;
}
openpopupEcity();
}
function PayBills() {
var bill = document.getElementById('txtBillNumber').value;
var amount = document.getElementById('txtBillAmount').value;
if (bill == "") {
alert("Please enter account number");
return false;
}
if (amount == "") {
alert("Please enter amount");
return false;
}
if (checkLogin()) {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header26").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#trdts', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'trdts';
pageData.push(currentPage);
}
}
function PayCardBills() {
var card = document.getElementById('txtcardnumber').value; var amount = document.getElementById('txtcardamt').value; var cardholder = document.getElementById('txtcardholder').value; var expirydate = document.getElementById('txtexpiry').value; var cvv = document.getElementById('txtcvv').value; var dateformat = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/; var expiry = new Date(document.getElementById('txtexpiry').value); var currentdate = Date.now(); var cardnameexp = /^[A-Za-z ']*$/; if (card == "") { alert("Please enter card number"); return false } if (amount == "") { alert("Please enter amount"); return false } else if (is_valid = !/^[0-9]+$/.test(amount)) { alert("Please enter valid amount"); return false } if (cardholder == "") { alert("Please enter cardholder name"); return false } if (!cardholder.match(cardnameexp)) { alert("Please enter valid cardholder name"); return false } if (expirydate == "") { alert("Please enter expiry date"); return false } if (!expirydate.match(dateformat)) { alert("Invalid date format"); return false } if (expiry < currentdate) { alert("Exipry date should not be less than today's date"); return false } if (cvv == "") { alert("Please enter CVV"); return false }
openpopupAddRemove();
}
/*****************added21/10/2013**************************/
function payinstore() {
var met = document.getElementById('txtcode').value; var amount = document.getElementById('txtdate').value; if (met == "") { alert("Please enter code"); return false } if (amount == "") { alert("Please enter date"); return false }
openpopupPayStore();
}
/*******check checklogin *********/
function checkLogin() {
if (localStorage.randgosessionid == undefined || localStorage.randgosessionid == null || localStorage.randgosessionid == 'null' || localStorage.randgosessionid == '' || localStorage.randgosessionid == 0) {
document.getElementById('chkremember').src = "public/images/checkbox.png";
$('#txtLoginUserName,#txtLoginPassword').val('');
prevPage = currentPage;
$.mobile.changePage('#log', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'log';
pageData.push(currentPage);
window.localStorage.setItem("randgosessionid", "null");
return true;
} else {
return true;
}
}
function Transactions() {
var airvalue = document.getElementById('txtair').value; var servicefee = document.getElementById('txtfee').value; var total = document.getElementById('txttotal').value; airvalue = airvalue.replace('R', ''); servicefee = servicefee.replace('R', ''); total = total.replace('R', ''); if (airvalue == "") { alert("Please enter airtime Value"); return false } if (servicefee == "") { alert("Please enter serviceFee"); return false } if (total == "") { alert("Please enter total"); return false }
openpopupTdtls();
}
function GetMoreInfo(pageType) {
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
document.getElementById('divhomeassist').style.display = 'none';
document.getElementById('divmediassist').style.display = 'none';
document.getElementById('divroadassist').style.display = 'none';
document.getElementById('legaldiv').style.display = 'none';
document.getElementById('traveldiv').style.display = 'none';
if (checkLogin()) {
prevPage = currentPage;
$.mobile.changePage('#clickformoreinfo', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'clickformoreinfo';
pageData.push(currentPage);
if (pageType == "Home") {
document.getElementById('homeheader').innerHTML = 'HOME ASSISTANCE';
document.getElementById('divhomeassist').style.display = 'block';
} else if (pageType == "Medical") {
document.getElementById('homeheader').innerHTML = 'MEDICAL ASSISTANCE';
document.getElementById('divmediassist').style.display = 'block';
} else if (pageType == "Road") {
document.getElementById('homeheader').innerHTML = 'ROAD ASSISTANCE';
document.getElementById('divroadassist').style.display = 'block';
} else if (pageType == "Legal") {
document.getElementById('homeheader').innerHTML = 'LEGAL ASSISTANCE';
document.getElementById('legaldiv').style.display = 'block';
} else if (pageType == "Travel") {
document.getElementById('homeheader').innerHTML = 'TRAVEL ASSISTANCE';
document.getElementById('traveldiv').style.display = 'block';
}
}
$("a").removeAttr('href');
}
function isLoggedIn() {
if (localStorage.wisessionid != null && localStorage.wisessionid != undefined && window.localStorage.getItem("randgosessionid") != undefined || window.localStorage.getItem("randgosessionid") != null) {
prevPage = currentPage;
$.mobile.changePage('#indexservice', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexservice';
pageData.push(currentPage);
}
}
/************************************profile*******************************/
function validation() {
 var Name = document.getElementById('txtusername').value; var FName = document.getElementById('txtname').value; var SurName = document.getElementById('txtsname').value; var EmailID = document.getElementById('txtemail').value; var CellNumber = document.getElementById('txtcellno').value; if (CellNumber.charAt(3) == 0) { CellNumberResult = CellNumber.replace(CellNumber.charAt(3), '') } else { CellNumberResult = CellNumber } var IdNumber = document.getElementById('txtid').value; var pinnew = document.getElementById('txtnewpin').value; var pinconfirm = document.getElementById('txtconpin').value; var policyno = document.getElementById('txtRegPolicyNumber').value; var unameexp = /^[A-Za-z ']*$/; var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; var checkbox1 = document.getElementById('chk'); var pattern = /^\d{11}$/; var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; var idexp = /^(\d{13})$/; var num = /^(\(?\+?[0-9]*\)?)*$/g; var pwd = /^\d{5}$/; var checnum = /^\d+$/; if (Name == "") { alert("Please enter the User Name!"); return false } else if (!Name.match(unameexp)) { alert("Please enter valid User Name!"); return false } else if (FName == "") { alert("Please enter the First Name!"); return false } else if (!FName.match(unameexp)) { alert("Please enter valid First Name!"); return false } else if (SurName == "") { alert("Please enter the Surname!"); return false } else if (!SurName.match(unameexp)) { alert("Please enter valid Surname!"); return false } else if (EmailID == "") { alert("Please enter the Email id!"); return false } else if (EmailID.indexOf("@", 0) < 0) { alert("Please enter valid Email id!"); return false } else if (EmailID.indexOf(".", 0) < 0) { alert("Please enter a valid Email id!"); return false } else if (CellNumberResult == "+27") { alert("Please enter a valid Cellphone number!"); return false } else if (!CellNumberResult.match(num)) { alert("Please enter a valid Cellphone number!"); return false } else if (CellNumberResult.length < '12') { alert("Please enter a valid Cellphone number!"); return false } else if (CellNumberResult.length > '12') { alert("Please enter a valid Cellphone number!"); return false } else if (IdNumber == "") { alert("Please enter the Id number!"); return false } else if (!IdNumber.match(idexp)) { alert("Please enter 13 digit Id number!"); return false } else { CellNumberResult = CellNumberResult.slice(1); if (pinnew == '') { document.getElementById('txtnewpin').value = 'gohome'; Profileupdate(document.getElementById('userid').value, FName, SurName, Name, document.getElementById('oldpin').value, IdNumber, EmailID, CellNumberResult) } else { if (pinnew.length < 5) { alert("Password must contain at least five characters!", " Info "); return false } if (pinconfirm == "") { alert("Please enter the confirm password!", " Info "); return false } if (pinnew != pinconfirm) { alert("Passwords typed do not match, please re-enter your passwords!", "Info "); return false } var confirmpw = confirm("Are you sure you want to change your password!", "Info "); if (confirmpw == true) { Profileupdate(document.getElementById('userid').value, FName, SurName, Name, pinnew, IdNumber, EmailID, CellNumberResult) } else { prevPage = currentPage; $.mobile.changePage('#indexprofile', { transition: "none", reverse: false, changeHash: false }); currentPage = 'indexprofile'; pageData.push(currentPage) } } }
}
function GetProfileDetails() {
var profileinputdata = ''; profileinputdata = '<?xml version="1.0" encoding="utf-8"?>'; profileinputdata = profileinputdata + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; profileinputdata = profileinputdata + ' <soap:Body>'; profileinputdata = profileinputdata + '<GetProfileDetails xmlns="http://tempuri.org/">'; profileinputdata = profileinputdata + '<username>' + localStorage.username + '</username>'; profileinputdata = profileinputdata + '</GetProfileDetails>'; profileinputdata = profileinputdata + '</soap:Body>'; profileinputdata = profileinputdata + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=GetProfileDetails', profileinputdata, 'POST', 'text/xml', GetProfileDetailsCallBack);
}
function GetProfileDetailsCallBack(responseData) {
try {
// alert(responseData);
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("ProfileData") != null && xmlDoc.getElementsByTagName("ProfileData").length > 0) {
document.getElementById('txtusername').value = xmlDoc.getElementsByTagName("UserName")[0].textContent;
document.getElementById('txtname').value = xmlDoc.getElementsByTagName("FirstName")[0].textContent;
document.getElementById('txtsname').value = xmlDoc.getElementsByTagName("LastName")[0].textContent;
document.getElementById('txtid').value = xmlDoc.getElementsByTagName("IDNumber")[0].textContent;
document.getElementById('txtcellno').value = '+' + xmlDoc.getElementsByTagName("CellNumber")[0].textContent;
document.getElementById('txtemail').value = xmlDoc.getElementsByTagName("EMAILID")[0].textContent;
document.getElementById('oldpin').value = xmlDoc.getElementsByTagName("Password")[0].textContent;
document.getElementById('userid').value = xmlDoc.getElementsByTagName("UserId")[0].textContent;
}
else {
alert('The System is temporarily unavailable, please try again later.');
}
}
}
catch (exp) {
}
}
/********************************Change password*****************************/
function Profileupdate(Userid, Fname, Sname, Uname, Password, IDNum, EmailID, celnum) {
var changepinInputdata = ""; changepinInputdata = '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; changepinInputdata = changepinInputdata + '<soap:Body>'; changepinInputdata = changepinInputdata + '<UpdateUserdetails xmlns="http://tempuri.org/">'; changepinInputdata = changepinInputdata + '<UserId>' + Userid + '</UserId>'; changepinInputdata = changepinInputdata + '<FirstName>' + Fname + '</FirstName>'; changepinInputdata = changepinInputdata + '<LastName>' + Sname + '</LastName>'; changepinInputdata = changepinInputdata + '<UserName>' + Uname + '</UserName>'; changepinInputdata = changepinInputdata + '<Password>' + Password + '</Password>'; changepinInputdata = changepinInputdata + '<IDNumber>' + IDNum + '</IDNumber>'; changepinInputdata = changepinInputdata + '<EMAILID>' + EmailID + '</EMAILID>'; changepinInputdata = changepinInputdata + '<CellNumber>' + celnum + '</CellNumber>'; changepinInputdata = changepinInputdata + '</UpdateUserdetails>'; changepinInputdata = changepinInputdata + '</soap:Body>'; changepinInputdata = changepinInputdata + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=UpdateUserdetails', changepinInputdata, 'POST', 'text/xml', ProfileupdateCallback);
}
function ProfileupdateCallback(responseData) {
try {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
var xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("UpdateUserdetailsResult")[0].textContent == 0) {
alert("Your password has not changed.");
return false;
}
else {
if (document.getElementById('txtnewpin').value == 'gohome') {
alert("Profile updated successfully!");
document.getElementById('txtnewpin').value = '';
gotoService();
return false;
} else {
alert("Your password changed successfully!");
localStorage.randgosessionid = null;
localStorage.loginID = null;
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: false,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
}
}
}
}
catch (exp) {
}
}
/*******************************Accept Terms and Conditions**********/
function gototerms() {
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26,.header27,.header28").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> </tr> </table> ';
$(".header28").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#terms', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'terms';
pageData.push(currentPage);
}
/* ****** ASHA DEC 3/12/2013 ******* */
function EALoginValidation() {
try {
var curimgsrc = document.getElementById('chkremember').src;
if (document.getElementById('txtLoginUserName').value == "") {
alert("Please enter the Username!");
return false;
}
else if (document.getElementById('txtLoginPassword').value == "") {
alert("Please enter Password!");
return false;
}
try {
if (curimgsrc.indexOf('checkbox.png') == 23) {
window.localStorage.setItem("loginID", 0);
} else {
window.localStorage.setItem("loginID", 1);
}
} catch (exp) {
    
//alert('checkr' + exp);
}
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26,.header27,.header28").empty();
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
MYLogintoAllServices(document.getElementById('txtLoginUserName').value, document.getElementById('txtLoginPassword').value);
} catch (ex) {
}
}
function MYLogintoAllServices(username, password) {
var eaLoginInputData = ""; eaLoginInputData = '<?xml version="1.0" encoding="utf-8"?>'; eaLoginInputData = eaLoginInputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; eaLoginInputData = eaLoginInputData + '<soap:Body>'; eaLoginInputData = eaLoginInputData + '<MobileUserLogin xmlns="http://tempuri.org/">'; eaLoginInputData = eaLoginInputData + '<Username>' + username + '</Username>'; eaLoginInputData = eaLoginInputData + '<Password>' + password + '</Password>'; eaLoginInputData = eaLoginInputData + '</MobileUserLogin>'; eaLoginInputData = eaLoginInputData + '</soap:Body>'; eaLoginInputData = eaLoginInputData + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=MobileUserLogin', eaLoginInputData, 'POST', 'text/xml', MYLogintoAllServicesCallBack);
}
function MYLogintoAllServicesCallBack(responseData) {
try {
$("#divhm,#divmm,#divrd,#divle,#divtr").hide();
$("#hme,#medical,#roadas,#legalas,#travelas").hide(); //color img
$(".trheight5").hide();
$("#NOproductDiv").hide();
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("MESSAGE")[0].childNodes[0] == undefined) {
localStorage.guid = xmlDoc.getElementsByTagName("mobileUserGuid")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("mobileUserGuid")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("mobileUserGuid")[0].childNodes[0].nodeValue;
localStorage.username = xmlDoc.getElementsByTagName("UserName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("UserName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("UserName")[0].childNodes[0].nodeValue;
localStorage.firstname = xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0].nodeValue;
localStorage.SurName = xmlDoc.getElementsByTagName("LastName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("LastName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("LastName")[0].childNodes[0].nodeValue;
localStorage.EmailID = xmlDoc.getElementsByTagName("EMAILID")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("EMAILID")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("EMAILID")[0].childNodes[0].nodeValue;
localStorage.CellNumber = xmlDoc.getElementsByTagName("CellNumber")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("CellNumber")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("CellNumber")[0].childNodes[0].nodeValue;
var nodval = xmlDoc.getElementsByTagName("SchemaUrlTable");
var desc1 = '';
for (var i = 0; i < nodval.length; i++) {
if (i == 0) {
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('divhomeassist').innerHTML = desc1; // live link
localStorage.imgUrlHome = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 1) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('divmediassist').innerHTML = desc1;
localStorage.imgUrlMedical = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 2) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('divroadassist').innerHTML = desc1;
localStorage.imgUrlRoad = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 3) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('legaldiv').innerHTML = desc1;
localStorage.imgUrlLegal = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 4) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('traveldiv').innerHTML = desc1;
localStorage.imgUrlTravel = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
}
}
if (xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.gethome = 0;
}
else {
localStorage.gethome = 1;
HomeID = xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue;
var productid = xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue;
var productname = " Home Assistance ";
$("#hme,#assisth").show();
document.getElementById("hmimg").src = localStorage.imgUrlHome;
document.getElementById("hmimg1").src = localStorage.imgUrlHome;
$("#hmimg").show();
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divhm').className = "panelcollapsed";
$("#divhm").show(); //whole div red
}
if (xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.getmedical = 0;
}
else {
MedicalID = xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue;
localStorage.getmedical = 2;
var productid = xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue;
var productname = " Medical Assistance ";
$("#medical,#medtb").show();
$("#mdimg").show();
document.getElementById("mdimg").src = localStorage.imgUrlMedical;
document.getElementById("mdimg1").src = localStorage.imgUrlMedical;
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divmm').className = "panelcollapsed";
$("#divmm").show();
}
if (xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.getroad = 0;
}
else {
RoadID = xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue;
localStorage.getroad = 3;
var productid = xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue;
var productname = " Roadside Assistance ";
$("#roadas,#rdtb").show();
$("#rdimg").show();
document.getElementById("rdimg").src = localStorage.imgUrlRoad;
document.getElementById("rdimg1").src = localStorage.imgUrlRoad;
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divrd').className = "panelcollapsed";
$("#divrd").show();
}
if (xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.getlegal = 0;
}
else {
legalID = xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue;
localStorage.getlegal = 4;
var productid = xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue;
var productname = " Legal Assistance";
$("#legalas,#letb").show();
$("#lgimg").show();
document.getElementById("lgimg").src = localStorage.imgUrlLegal;
document.getElementById("lgimg1").src = localStorage.imgUrlLegal;
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divle').className = "panelcollapsed";
$("#divle").show();
}
if (xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.gettravel = 0;
}
else {
TravelID = xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue;
localStorage.gettravel = 5;
var productid = xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue;
var productname = "Travel Assistance";
$("#travelas,#trtb").show();
document.getElementById("tlimg").src = localStorage.imgUrlTravel;
document.getElementById("tlimg1").src = localStorage.imgUrlTravel;
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divtr').className = "panelcollapsed";
$("#divtr").show();
$("#tlimg").show();
} $(".trheight5").show();
prevPage = currentPage;
$.mobile.changePage('#indexservice', {
    transition: "none",
    reverse: true,
    changeHash: false
});
currentPage = 'indexservice';
pageData.push(currentPage);
} //if
else {
if (xmlDoc.getElementsByTagName("MESSAGE")[0].childNodes[0].nodeValue == 'NO MOBILEUSERGUID') {
localStorage.guid = '';
localStorage.gettravel = 0;
localStorage.getlegal = 0;
localStorage.getroad = 0;
localStorage.getmedical = 0;
localStorage.gethome = 0;
localStorage.username = xmlDoc.getElementsByTagName("UserName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("UserName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("UserName")[0].childNodes[0].nodeValue;
$("#divhm,#divmm,#divrd,#divle,#divtr").hide();
$("#hme,#medical,#roadas,#legalas,#travelas").hide(); //color img
$(".trheight5").hide();
localStorage.username = xmlDoc.getElementsByTagName("UserName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("UserName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("UserName")[0].childNodes[0].nodeValue;
localStorage.firstname = xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("FirstName")[0].childNodes[0].nodeValue;
localStorage.SurName = xmlDoc.getElementsByTagName("LastName")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("LastName")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("LastName")[0].childNodes[0].nodeValue;
localStorage.EmailID = xmlDoc.getElementsByTagName("EMAILID")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("EMAILID")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("EMAILID")[0].childNodes[0].nodeValue;
localStorage.CellNumber = xmlDoc.getElementsByTagName("CellNumber")[0].childNodes[0] == undefined || xmlDoc.getElementsByTagName("CellNumber")[0].childNodes[0] == 'null' ? '' : xmlDoc.getElementsByTagName("CellNumber")[0].childNodes[0].nodeValue;
prevPage = currentPage;
$.mobile.changePage('#indexservice', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexservice';
pageData.push(currentPage);
$("#NOproductDiv").show();
} else {
alert(xmlDoc.getElementsByTagName("MESSAGE")[0].childNodes[0].nodeValue);
return false;
}
}
}
}
catch (exp) {
}
}
/***********DEC9th ************/
function gotoService() {
document.getElementById("hmimg").src = ""; document.getElementById("hmimg1").src = ""; document.getElementById("mdimg").src = ""; document.getElementById("mdimg1").src = ""; document.getElementById("rdimg").src = ""; document.getElementById("rdimg1").src = ""; document.getElementById("lgimg").src = ""; document.getElementById("lgimg1").src = ""; document.getElementById("tlimg").src = ""; document.getElementById("tlimg1").src = "";
prevPage = currentPage;
$.mobile.changePage('#indexservice', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexservice';
pageData.push(currentPage);
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26,.header27,.header28").empty();
$("#tbldisplaycategories tr,#tbldisplaycategoriesbycid tr,#tbldisplaymerchantdeals tr,#FAQtbl tr,#tblquestionans tr").remove();-
$("#divhm,#divmm,#divrd,#divle,#divtr").hide();
$("#hme,#medical,#roadas,#legalas,#travelas").hide(); //color img
$(".trheight5").hide();
$("#NOproductDiv").hide();
var ProductInputData = ""; ProductInputData = '<?xml version="1.0" encoding="utf-8"?>'; ProductInputData = ProductInputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; ProductInputData = ProductInputData + '<soap:Body>'; ProductInputData = ProductInputData + '<GetUserProducts xmlns="http://tempuri.org/">'; ProductInputData = ProductInputData + '<mobileuserguid>' + localStorage.guid + '</mobileuserguid>'; ProductInputData = ProductInputData + '</GetUserProducts>'; ProductInputData = ProductInputData + '</soap:Body>'; ProductInputData = ProductInputData + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=GetUserProducts', ProductInputData, 'POST', 'text/xml', UserproductServicesCallBack);
}
/*****************************************************************************************************
* PURPOSE :USER product lis callback(Services indexervice.html)
* AUTHOR : kavya
* CREATED DATE : 21 JAN 2013
******************************************************************************************************/
function UserproductServicesCallBack(responseData) {
try {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("MESSAGE")[0].childNodes[0] == undefined) {
var nodval = xmlDoc.getElementsByTagName("SchemaUrlTable");
var desc1 = '';
for (i = 0; i < nodval.length; i++) {
if (i == 0) {
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('divhomeassist').innerHTML = desc1;
localStorage.imgUrlHome = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 1) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('divmediassist').innerHTML = desc1;
localStorage.imgUrlMedical = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 2) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('divroadassist').innerHTML = desc1;
localStorage.imgUrlRoad = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 3) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('legaldiv').innerHTML = desc1;
localStorage.imgUrlLegal = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
} else if (i == 4) {
desc1 = '';
desc1 = replacespecilChar(xmlDoc.getElementsByTagName("Description")[i].textContent);
document.getElementById('traveldiv').innerHTML = desc1;
localStorage.imgUrlTravel = 'http://118.139.160.226/EASACMS2/Uploadimages/' + xmlDoc.getElementsByTagName("Filename")[i].textContent;
}
}
if (xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.gethome = 0;
}
else {
localStorage.gethome = 1;
HomeID = xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue;
var productid = xmlDoc.getElementsByTagName("HomeAssistance")[0].childNodes[0].nodeValue;
var productname = " Home Assistance ";
$("#hme,#assisth").show();
document.getElementById("hmimg").src = localStorage.imgUrlHome;
$("#hmimg").show();
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divhm').className = "panelcollapsed";
$("#divhm").show(); //whole div red
}
if (xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.getmedical = 0;
}
else {
MedicalID = xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue;
localStorage.getmedical = 2;
var productid = xmlDoc.getElementsByTagName("MedicalAssistance")[0].childNodes[0].nodeValue;
var productname = " Medical Assistance ";
$("#medical,#medtb").show();
document.getElementById("mdimg").src = localStorage.imgUrlMedical;
$("#mdimg").show();
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divmm').className = "panelcollapsed";
$("#divmm").show();
}
if (xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.getroad = 0;
}
else {
RoadID = xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue;
localStorage.getroad = 3;
var productid = xmlDoc.getElementsByTagName("RoadAssistance")[0].childNodes[0].nodeValue;
var productname = " Roadside Assistance ";
$("#roadas,#rdtb").show();
document.getElementById("rdimg").src = localStorage.imgUrlRoad;
$("#rdimg").show();
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divrd').className = "panelcollapsed";
$("#divrd").show();
}
if (xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.getlegal = 0;
}
else {
legalID = xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue;
localStorage.getlegal = 4;
var productid = xmlDoc.getElementsByTagName("LegalAssistance")[0].childNodes[0].nodeValue;
var productname = " Legal Assistance";
$("#legalas,#letb").show();
document.getElementById("lgimg").src = localStorage.imgUrlLegal;
$("#lgimg").show();
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divle').className = "panelcollapsed";
$("#divle").show();
}
if (xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue == 'null' || xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue == null) {
localStorage.gettravel = 0;
}
else {
TravelID = xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue;
localStorage.gettravel = 5;
var productid = xmlDoc.getElementsByTagName("travelAssistance")[0].childNodes[0].nodeValue;
var productname = "Travel Assistance";
$("#travelas,#trtb").show();
document.getElementById("tlimg").src = localStorage.imgUrlTravel;
$("#tlimg").show();
$("#homeseperator").removeClass("middlecontent3");
document.getElementById('divtr').className = "panelcollapsed";
$("#divtr").show();
} $(".trheight5").show();
if (localStorage.gethome == 0 && localStorage.getmedical == 0 && localStorage.getroad == 0 && localStorage.getlegal == 0 && localStorage.gettravel == 0) {
$("#NOproductDiv").show();
}
try {
} catch (ex) {
alert('The System is temporarily unavailable, please try again later.');
//   alert(ex + '::: gose');
}
} //if
else {
if (xmlDoc.getElementsByTagName("MESSAGE")[0].childNodes[0].nodeValue == 'NO MOBILEUSERGUID') {
localStorage.gettravel = 0;
localStorage.getlegal = 0;
localStorage.getroad = 0;
localStorage.getmedical = 0;
localStorage.gethome = 0;
$("#NOproductDiv").show();
try {
} catch (ex) {
}
} else {
return false;
}
}
}
}
catch (exp) {
//alert('gotoSe');
}
}

/*****************************************************************************************************
* PURPOSE :CreatePleaseCallMeRequestNew(Services indexervice.html)
* AUTHOR : Asha
* CREATED DATE : 03 DEC 2013
******************************************************************************************************/
function CreatePleaseCallMeRequestNew(type) {
var productiID = ''; if (type == 'home' && localStorage.count == 0) { productiID = ''; productiID = HomeID; localStorage.count = 1; var europInputData = ""; europInputData = '<?xml version="1.0" encoding="utf-8"?>'; europInputData = europInputData + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="https://api.europassistance.co.za/">'; europInputData = europInputData + '<soapenv:Header/>'; europInputData = europInputData + '<soapenv:Body>'; europInputData = europInputData + '<api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '<api:mobileUserGuid>' + localStorage.guid + '</api:mobileUserGuid>'; europInputData = europInputData + '<api:validateOnly>false</api:validateOnly>'; europInputData = europInputData + '<api:testOnly>true</api:testOnly>'; europInputData = europInputData + '<api:mobileProductGuid>' + productiID + '</api:mobileProductGuid>'; europInputData = europInputData + '<api:latitude>0</api:latitude>'; europInputData = europInputData + '<api:longitude>0</api:longitude>'; europInputData = europInputData + '</api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '</soapenv:Body>'; europInputData = europInputData + '</soapenv:Envelope>'; CallWebService('https://api.europassistance.co.za/services/MobileServices.asmx', europInputData, 'POST', 'text/xml', CreatePleaseCallMeRequestCallbackNew) } else if (type == 'Medical' && localStorage.count == 0) { productiID = ''; productiID = MedicalID; localStorage.count = 1; var europInputData = ""; europInputData = '<?xml version="1.0" encoding="utf-8"?>'; europInputData = europInputData + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="https://api.europassistance.co.za/">'; europInputData = europInputData + '<soapenv:Header/>'; europInputData = europInputData + '<soapenv:Body>'; europInputData = europInputData + '<api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '<api:mobileUserGuid>' + localStorage.guid + '</api:mobileUserGuid>'; europInputData = europInputData + '<api:validateOnly>false</api:validateOnly>'; europInputData = europInputData + '<api:testOnly>true</api:testOnly>'; europInputData = europInputData + '<api:mobileProductGuid>' + productiID + '</api:mobileProductGuid>'; europInputData = europInputData + '<api:latitude>0</api:latitude>'; europInputData = europInputData + '<api:longitude>0</api:longitude>'; europInputData = europInputData + '</api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '</soapenv:Body>'; europInputData = europInputData + '</soapenv:Envelope>'; CallWebService('https://api.europassistance.co.za/services/MobileServices.asmx', europInputData, 'POST', 'text/xml', CreatePleaseCallMeRequestCallbackNew) } else if (type == 'road' && localStorage.count == 0) { productiID = ''; productiID = RoadID; localStorage.count = 1; var europInputData = ""; europInputData = '<?xml version="1.0" encoding="utf-8"?>'; europInputData = europInputData + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="https://api.europassistance.co.za/">'; europInputData = europInputData + '<soapenv:Header/>'; europInputData = europInputData + '<soapenv:Body>'; europInputData = europInputData + '<api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '<api:mobileUserGuid>' + localStorage.guid + '</api:mobileUserGuid>'; europInputData = europInputData + '<api:validateOnly>false</api:validateOnly>'; europInputData = europInputData + '<api:testOnly>true</api:testOnly>'; europInputData = europInputData + '<api:mobileProductGuid>' + productiID + '</api:mobileProductGuid>'; europInputData = europInputData + '<api:latitude>0</api:latitude>'; europInputData = europInputData + '<api:longitude>0</api:longitude>'; europInputData = europInputData + '</api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '</soapenv:Body>'; europInputData = europInputData + '</soapenv:Envelope>'; CallWebService('https://api.europassistance.co.za/services/MobileServices.asmx', europInputData, 'POST', 'text/xml', CreatePleaseCallMeRequestCallbackNew) } else if (type == 'legal' && localStorage.count == 0) { productiID = ''; productiID = legalID; localStorage.count = 1; var europInputData = ""; europInputData = '<?xml version="1.0" encoding="utf-8"?>'; europInputData = europInputData + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="https://api.europassistance.co.za/">'; europInputData = europInputData + '<soapenv:Header/>'; europInputData = europInputData + '<soapenv:Body>'; europInputData = europInputData + '<api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '<api:mobileUserGuid>' + localStorage.guid + '</api:mobileUserGuid>'; europInputData = europInputData + '<api:validateOnly>false</api:validateOnly>'; europInputData = europInputData + '<api:testOnly>true</api:testOnly>'; europInputData = europInputData + '<api:mobileProductGuid>' + productiID + '</api:mobileProductGuid>'; europInputData = europInputData + '<api:latitude>0</api:latitude>'; europInputData = europInputData + '<api:longitude>0</api:longitude>'; europInputData = europInputData + '</api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '</soapenv:Body>'; europInputData = europInputData + '</soapenv:Envelope>'; CallWebService('https://api.europassistance.co.za/services/MobileServices.asmx', europInputData, 'POST', 'text/xml', CreatePleaseCallMeRequestCallbackNew) } else if (type == 'travel' && localStorage.count == 0) { productiID = ''; productiID = TravelID; localStorage.count = 1; var europInputData = ""; europInputData = '<?xml version="1.0" encoding="utf-8"?>'; europInputData = europInputData + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="https://api.europassistance.co.za/">'; europInputData = europInputData + '<soapenv:Header/>'; europInputData = europInputData + '<soapenv:Body>'; europInputData = europInputData + '<api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '<api:mobileUserGuid>' + localStorage.guid + '</api:mobileUserGuid>'; europInputData = europInputData + '<api:validateOnly>false</api:validateOnly>'; europInputData = europInputData + '<api:testOnly>true</api:testOnly>'; europInputData = europInputData + '<api:mobileProductGuid>' + productiID + '</api:mobileProductGuid>'; europInputData = europInputData + '<api:latitude>0</api:latitude>'; europInputData = europInputData + '<api:longitude>0</api:longitude>'; europInputData = europInputData + '</api:CreatePleaseCallMeRequest>'; europInputData = europInputData + '</soapenv:Body>'; europInputData = europInputData + '</soapenv:Envelope>'; CallWebService('https://api.europassistance.co.za/services/MobileServices.asmx', europInputData, 'POST', 'text/xml', CreatePleaseCallMeRequestCallbackNew) } else { productiID = '735c8b67-37c4-4f72-af94-105a26e22d2c' }
}
function CreatePleaseCallMeRequestCallbackNew(responseData) {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
xmlDoc = parser.parseFromString(responseData, "text/xml");
xmlDoc.getElementsByTagName("ErrorCode")[0].childNodes[0].nodeValue;
if (xmlDoc.getElementsByTagName("ErrorCode")[0].childNodes[0].nodeValue != 0) {
alert(xmlDoc.getElementsByTagName("ErrorMessage")[0].childNodes[0].nodeValue);
} else {
alert('Thank you for contacting us, we will call you soon.');
}
}
}
/****top logo img click ****/
function gohome() {
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
}
/*****************************************************************************************************
* PURPOSE :Registration
* AUTHOR : Asha
* CREATED DATE : 14 DEC 2013
******************************************************************************************************/
function UserRegistration() {
try {
prevPage = currentPage;
var Name = document.getElementById('txtRegName').value; var SurName = document.getElementById('txtRegSurName').value; var EmailID = document.getElementById('txtRegEmail').value; var CellNumber = document.getElementById('txtRegCell').value; if (CellNumber.charAt(3) == 0) { CellNumberResult = CellNumber.replace(CellNumber.charAt(3), '') } else { CellNumberResult = CellNumber } var IdNumber = document.getElementById('txtRegIDNo').value; var policyno = document.getElementById('txtRegPolicyNumber').value; var unameexp = /^[A-Za-z ']*$/; var curimgsource = document.getElementById('chkAcceptTerms').src; var idexp = /^(\d{13})$/; var pwd = /^\d{5}$/; var num = /^(\(?\+?[0-9]*\)?)*$/g;
if (Name == "") { alert("Please enter the First Name!"); return false } else if (!Name.match(unameexp)) { alert("Please enter valid First Name!"); return false } else if (SurName == "") { alert("Please enter the Surname!"); return false } else if (!SurName.match(unameexp)) { alert("Please enter valid Surname!"); return false } else if (EmailID == "") { alert("Please enter the Email id!"); return false } else if (EmailID.indexOf("@", 0) < 0) { alert("Please enter valid Email id!"); return false } else if (EmailID.indexOf(".", 0) < 0) { alert("Please enter a valid Email id!"); return false } else if (CellNumberResult == "+27") { alert("Please enter a valid Cellphone number!"); return false; } else if (!CellNumberResult.match(num)) { alert("Please enter a valid Cellphone number!"); return false; } else if (CellNumberResult.length < '12') { alert("Please enter a valid Cellphone number!"); return false; } else if (CellNumberResult.length > '12') { alert("Please enter a valid Cellphone number!"); return false; } else if (IdNumber == "") { alert("Please enter the Id number!"); return false } else if (!IdNumber.match(idexp)) { alert("Please enter 13 digit Id number!"); return false } else if (policyno == "") { alert("Please enter the Policy number!"); return false } else if (policyno.length < 8) { alert("Policy number must contain at least 8 numbers!") } else if (curimgsource.indexOf('checkbox.png') == 23) { alert("Please Accept Terms and Conditions!") }
else {
CellNumberResult = CellNumberResult.slice(1);
RegisterUserNew(Name, SurName, userName, CellNumber, passowrd, IdNumber, EmailID, policyno);
}} catch (ex) {}}
function RegisterUserNew(Name, SurName, userName, CellNumber, passowrd, IdNumber, EmailID, policyno) {
try {
var registeruserdata = ""; registeruserdata = '<?xml version="1.0" encoding="utf-8"?>'; registeruserdata = registeruserdata + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; registeruserdata = registeruserdata + '<soap:Body>'; registeruserdata = registeruserdata + '<MobileUserRegister xmlns="http://tempuri.org/">'; registeruserdata = registeruserdata + '<Name>' + Name + '</Name>'; registeruserdata = registeruserdata + '<Surname>' + SurName + '</Surname>'; registeruserdata = registeruserdata + '<username>' + userName + '</username>'; registeruserdata = registeruserdata + '<CellNumber>' + CellNumber + '</CellNumber>'; registeruserdata = registeruserdata + '<Password>' + passowrd + '</Password>'; registeruserdata = registeruserdata + '<IdNumber>' + IdNumber + '</IdNumber>'; registeruserdata = registeruserdata + '<EmailID>' + EmailID + '</EmailID>'; registeruserdata = registeruserdata + '<policyno>' + policyno + '</policyno>'; registeruserdata = registeruserdata + '</MobileUserRegister>'; registeruserdata = registeruserdata + '</soap:Body>'; registeruserdata = registeruserdata + '</soap:Envelope>'; CallWebService('http://118.139.160.226/Europewebservice/EuropeAssistStaticDataWS.asmx?op=MobileUserRegister', registeruserdata, 'POST', 'text/xml', RegisterUserCallback);
} catch (exp) { }
}
/*function added +27for celnuber*/
$("#txtRegCell,#txtfpcellno,#txtcellno").keypress(function (ev) {
var value = "+27";
var tval = this.value;
var c = ev.charCode || ev.keyCode;
this.selectionStart = this.selectionEnd = this.value.length;
if (tval.length == value.length && c == 8) {
ev.preventDefault();
}
this.value = value + tval.substring(value.length);
});
function RegisterUserCallback(responseData) {
try {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
var xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("MobileUserRegisterResult")[0] != null && xmlDoc.getElementsByTagName("MobileUserRegisterResult")[0] != "" && xmlDoc.getElementsByTagName("MobileUserRegisterResult")[0] != undefined) {
if (xmlDoc.getElementsByTagName("ErrorCode")[0].childNodes[0].nodeValue == '-1') {
alert(xmlDoc.getElementsByTagName("ErrorMessage")[0].childNodes[0].nodeValue);
return false;
} else if (xmlDoc.getElementsByTagName("ErrorCode")[0].childNodes[0].nodeValue == '0' || xmlDoc.getElementsByTagName("ErrorCode")[0].childNodes[0].nodeValue == 0) {
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
alert('Registration successfull, Thank you for registering.');
return false;
} else {
alert(xmlDoc.getElementsByTagName("ErrorMessage")[0].childNodes[0].nodeValue);
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
alert('Register is successful. You can login to the application, but you have no access to Europe Assist services');
}
} else {
alert("Register Failed.");
return false;
}}} catch (exp) {}}
function oncheck() {
var curimgsrc = document.getElementById('chkAcceptTerms').src;
if (curimgsrc.indexOf('checkbox.png') == 23) {
document.getElementById('chkAcceptTerms').src = "public/images/EAslicing/acceptedbutton.png";
} else {
document.getElementById('chkAcceptTerms').src = "public/images/checkbox.png";
}
}
/*********logcheck*********************/
function logcheck() {
var curimgsrc = document.getElementById('chkremember').src;
if (curimgsrc.indexOf('checkbox.png') == 23) {
document.getElementById('chkremember').src = "public/images/EAslicing/acceptedbutton.png";
} else {
document.getElementById('chkremember').src = "public/images/checkbox.png";
}
}
/*******Second time click clear all fields in page & navigate ****/
function gotoRegister() {
try {
var regfirstuname = document.getElementById('txtusernameregfirst').value; var regfirstpw = document.getElementById('txtpwregfirst').value; var regfirstconfirmpw = document.getElementById('txtconfirmpwregfirst').value; var unameexp = /^[A-Za-z ']*$/; if (regfirstuname == "") { alert("Please enter the Username!"); return false } else if (!regfirstuname.match(unameexp)) { alert("Please enter valid Username!"); return false } if (regfirstpw == "") { alert("Please enter the Password!"); return false } if (regfirstpw.length < 5) { alert("Password must contain at least five characters!"); return false } if (regfirstconfirmpw == "") { alert("Please enter Confirm Password!"); return false } if (regfirstconfirmpw != regfirstpw) { alert("Passwords typed do not match, please re-enter your passwords!"); return false }
userName = regfirstuname;
passowrd = regfirstpw;
prevPage = currentPage; $('#txtRegName,#txtRegSurName,#txtRegEmail,#txtRegIDNo,#txtRegPolicyNumber').val('');
document.getElementById('txtRegCell').value = "+27";
document.getElementById('chkAcceptTerms').src = "public/images/checkbox.png";
$.mobile.changePage('#reg', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'reg';
pageData.push(currentPage);
} catch (ex) {}}
/*****************************************************************************************************
* PURPOSE :ForgotPassword
* AUTHOR : Asha
* CREATED DATE : 14 DEC 2013
******************************************************************************************************/
function ForgotPasswordValidation() {
var num = /^(\(?\+?[0-9]*\)?)*$/g; FCellNumber = document.getElementById('txtfpcellno').value; if (FCellNumber.charAt(3) == 0) { cellRemoveFirstZero = FCellNumber.replace(FCellNumber.charAt(3), '') } else { cellRemoveFirstZero = FCellNumber } if (document.getElementById('txtfpcellno').value == "+27") { alert("Please enter Cell number!") } else if (!cellRemoveFirstZero.match(num)) { alert("Please enter a valid Cellphone number!") } else if (cellRemoveFirstZero.length < '12') { alert("Please enter a valid Cellphone number!") } else if (cellRemoveFirstZero.length > '12') { alert("Please enter a valid Cellphone number!") } else { cellRemoveFirstZero = cellRemoveFirstZero.slice(1); ForgotPasswordService(cellRemoveFirstZero) }
}
function ForgotPasswordService(fpcellno) {
    var forgotpwdata = ""; forgotpwdata = '<?xml version="1.0" encoding="utf-8"?>'; forgotpwdata = forgotpwdata + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; forgotpwdata = forgotpwdata + '<soap:Body>'; forgotpwdata = forgotpwdata + '<ForgotPassword xmlns="http://tempuri.org/">'; forgotpwdata = forgotpwdata + '<cellnumber>' + fpcellno + '</cellnumber>'; forgotpwdata = forgotpwdata + '</ForgotPassword>'; forgotpwdata = forgotpwdata + '</soap:Body>'; forgotpwdata = forgotpwdata + '</soap:Envelope>'; CallWebService('http://197.96.19.188/EASAwebservice/EuropeAssistStaticDataWS.asmx', forgotpwdata, 'POST', 'text/xml', ForgotPasswordServiceCallback);
}
function ForgotPasswordServiceCallback(responseData) {
try {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
var parser = new DOMParser();
if (responseData !== "") {
var xmlDoc = parser.parseFromString(responseData, "text/xml");
if (xmlDoc.getElementsByTagName("ForgotPasswordResult")[0].textContent == 0) {
alert("Please enter a valid Cellphone number!"); 
return false;
}
else {
alert("Thank you,We have sent your password to your registered EmailAddress");
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
}
}
}
catch (exp) {
}
}
/*******Second time click clear all fields in page & navigate ****/
function gotoForgotPassword() {
$('#txtfpcellno').val('+27');
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26,.header27,.header28").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> </tr> </table> ';
$(".header27").append(clonedDiv);
prevPage = currentPage;
$.mobile.changePage('#ForgotPassword', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'ForgotPassword';
pageData.push(currentPage);
}
function openpopupPayfriend() { document.getElementById("view-loading").style.display = "block"; document.getElementById("rusure").innerHTML = "You are about to pay R " + document.getElementById("txtfriendAmount").value; +" to " + document.getElementById("txtfrnd").value + " Are you sure you wish to proceed?<br>" } function yesplease() {
document.getElementById("view-loading").style.display = "none"; $(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
var clonedDiv = '<table style="width:102%;height:100%;" cellspacing="0" cellpadding="0"> <tr> <td class="headerbckrndimg headerwt"> <div style="width:100%"><img src="public/images/EAslicing/innerlogo.png" class="europimght" /></div> </td> <td class="headeroi"style="vertical-align:top"><div class="headerbckrndimgg" onclick="gotoService()" > <img src="public/images/EAslicing/servicesgrey.png" alt="" class="headerimgstyle" /> <div class="serfnt">Services </div> </div> <div class="profileclass" onclick="gotoWallet()" > <img src="public/images/EAslicing/walletwhite.png" alt="" class="headerimgstyle" /> <div class="walser">Wallet</div> </div> <div class="headerbckrndimgg" onclick="gotoBenifit()" > <img src="public/images/EAslicing/benifitsgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Benefits</div> </div> <div class="headerbckrndimgg" onclick="gotoProfile()"> <img src="public/images/EAslicing/profilegray.png" alt="" class="headerimgstyle" /> <div class="serfnt">Profile</div> </div> <div class="headerbckrndimgg" onclick="gotoHelp()" > <img src="public/images/EAslicing/helpgray.png" alt="" class="headerimgstyle" /> <div class="serfnt">FAQs</div> </div> </td> </tr> ';
$(".header11").append(clonedDiv); $.mobile.changePage("#transactionsuccessful", { transition: "none", reverse: true, changeHash: false });
}; function nothankshide() { document.getElementById("view-loading").style.display = "none" }
function openpopupEcity() { document.getElementById("div-viewelec").style.display = "block"; var e = document.getElementById("txtMeterNumber").value; var t = document.getElementById("txtElectricityAmt").value; document.getElementById("rusureEcity").innerHTML = "You are about to pay electricity bill. Are you sure you wish to proceed?<br>" } function yespleaseEcity() { document.getElementById("div-viewelec").style.display = "none"; $.mobile.changePage("#transactionsuccessful", { transition: "none", reverse: true, changeHash: false }) } function nothankshidepcity() { document.getElementById("div-viewelec").style.display = "none" }
function openpopupPayStore() { document.getElementById("div-view").style.display = "block"; document.getElementById("rusurePstore").innerHTML = "You are about to pay electricity bill. Are you sure you wish to proceed?<br>" } function yespleasepaystore() { document.getElementById("div-view").style.display = "none" } function nothankpaystore() { document.getElementById("div-view").style.display = "none" }
function openpopupTdtls() { document.getElementById("div-viewtr").style.display = "block"; var e = document.getElementById("txtair").value; var t = document.getElementById("txtfee").value; var n = document.getElementById("txttotal").value; document.getElementById("rusureTdtls").innerHTML = "You are about to purchare airtime. Are you sure you wish to proceed?" } function yespleasetrdtls() { document.getElementById("div-viewtr").style.display = "none" } function nothankshideTdtls() { document.getElementById("div-viewtr").style.display = "none" }
function openpopupAddRemove() { document.getElementById("divpopupAddRemove").style.display = "block"; var e = document.getElementById("txtcardnumber").value; var t = document.getElementById("txtcardamt").value; var n = document.getElementById("txtcardholder").value; var r = document.getElementById("txtexpiry").value; var i = document.getElementById("txtcvv").value; document.getElementById("rusureAddRemove").innerHTML = "You are about to add a card. Are you sure you wish to proceed?" } function yespleaseAddRemove() { document.getElementById("divpopupAddRemove").style.display = "none" } function nothankshideAddRemove() { document.getElementById("divpopupAddRemove").style.display = "none" }
$(function () {
$("#txtexpiry").datepicker({
buttonImage:
'public/images/calenderstyle.png',
constrainInput: false,
buttonImageOnly: true,
showOn: 'button'
});
});
$(function () {$("#txtdate,#Date1").datepicker();});
window.onorientationchange = function () {
var orientation = window.orientation;
$('body').css('height', '100%');
try {
if (screen.height == 800 || screen.height == '800') {
document.getElementById('splshimg').src = "res/screen/blackberry/225225.jpg";
$('.footerDiv').height(480);
setTimeout(function () {
checkremember();
}, 5000);
} else {
document.getElementById('splshimg').src = "res/screen/225225.jpg";
$('.footerDiv').height(35);
setTimeout(function () {
checkremember();
}, 5000);
}
} catch (ex) {
}
}
function gotoFstpage(pagename) {
Pagename = pagename; $('#txtusernameregfirst,#txtpwregfirst,#txtconfirmpwregfirst,#txtLoginUserName,#txtLoginPassword,#txtfpcellno').val('');
var inputData = ''; inputData = '<?xml version="1.0" encoding="utf-8"?>'; inputData = inputData + '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'; inputData = inputData + '<soap:Body>'; inputData = inputData + '<EAAppConfig  xmlns="http://tempuri.org/" />'; inputData = inputData + '</soap:Body>'; inputData = inputData + '</soap:Envelope>'; CallWebService('http://dsg.star-knowledge.com/service.asmx', inputData, 'POST', 'text/xml', checkAppLogin);
}
function checkAppLogin(responseData) {
responseData = responseData.replace(/&gt;/gi, '>');
responseData = responseData.replace(/&lt;/gi, '<');
try {
if (responseData != '' && responseData != null) {
var parser = new DOMParser();
var doc = parser.parseFromString(responseData, "text/xml");
if (doc.getElementsByTagName('EAAppConfigResult')[0].textContent != null && doc.getElementsByTagName('EAAppConfigResult')[0].textContent != undefined) {
if (doc.getElementsByTagName('EAAppConfigResult')[0].textContent == 1) {
if (Pagename == 'reg') {
prevPage = currentPage;
$.mobile.changePage('#RegFstPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'RegFstPage';
pageData.push(currentPage);
} else if (Pagename == 'login') {
prevPage = currentPage;
$.mobile.changePage('#log', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'log';
pageData.push(currentPage);
} else {
gotoService();
}
} else {
if (window.localStorage.getItem("loginID") == 1) {
prevPage = currentPage;
$.mobile.changePage('#indexPage', {
transition: "none",
reverse: true,
changeHash: false
});
currentPage = 'indexPage';
pageData.push(currentPage);
$(".header2,.header3,.header4,.header5,.header6,.header7,.header8,.header9,.header10,.header11,.header12,.header13,.header14,.header15,.header16,.header17,.header18,.header19,.header20,.header21,.header22,.header23,.header24,.header25,.header26").empty();
$("#tbldisplaycategories tr").remove();
$("#tbldisplaycategoriesbycid tr").remove();
$("#tbldisplaymerchantdeals tr").remove();
$("#FAQtbl tr").remove();
$("#tblquestionans tr").remove();
$('#homeheader,#divhomeassist,#divmediassist,#divroadassist,#legaldiv,#traveldiv').val('');
window.localStorage.setItem("randgosessionid", "null");
window.localStorage.setItem("loginID", 0);
localStorage.gettravel = 0;
localStorage.getlegal = 0;
localStorage.getroad = 0;
localStorage.getmedical = 0;
localStorage.gethome = 0;
} else {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
}
}
} else {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
}
} else {
alert("The System is temporarily unavailable, please try again later.");
document.getElementById('loaddingimg').style.display = "none";
}
} catch (ex) {
}
}
