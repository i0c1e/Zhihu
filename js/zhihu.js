//var oNav=document.getElementById('nav-slider');
//var aTitle=oNav.getElementsByTagName('a');
var oSignIn=document.getElementById('view-signin');
var oSignUp=document.getElementById('view-signup');
var oBtnIn=document.getElementById('signin-button');
var oBtnUp=document.getElementById('signup-button');
var oSlideBar=document.getElementById('nav-slider-bar');
var oQRC=getByClass('QRCard');
var oQRB=getByClass("QRButton");
var oQRBT=getByClass('QRButtonText');
var status=0;

//alert(oQRB.length);
oBtnIn.onclick=function(){
	oSignUp.style.display= 'none';
	oSignIn.style.display='block'
	oBtnUp.className='';
	oBtnIn.className='active';
	oSlideBar.style.left="4em";
}
oBtnUp.onclick=function(){
	oSignUp.style.display='block';
	oSignIn.style.display='none';
	oBtnIn.className='';
	oBtnUp.className='active';
	oSlideBar.style.left="0";
}
oQRB[0].onclick=function(){
	oQRC[0].style.display='block';
}
for (var i = oQRB.length - 1; i >= 0; i--) {
	oQRB[i].index=i;
	oQRB[i].onclick=function(){
		if (status==0) {
			oQRC[this.index].style.display='block';
			oQRBT[this.index].innerHTML="关闭二维码";
			status=1;
		}
		else{
			oQRC[this.index].style.display='none';
			oQRBT[this.index].innerHTML="下载知乎APP";
			status=0;
		}
		
	}
}
function getByClass(iClass) {
	var aLi=document.getElementsByTagName('*');
	var arr=[];
	for (var i = aLi.length - 1; i >= 0; i--) {
		if (aLi[i].className==iClass) {
			arr.push(aLi[i])
			}
	}
	return arr;
}