//<![CDATA[
$(document).ready(function(){

var getlink = $("#getlink"),
gotolink = $("#gotolink"),
timer = $('#timer');
var version = sessionStorage.getItem('id')

if (version != null){
timer.pietimer({
timerSeconds: 16,
color: '#3f51b5',
fill: false,
showPercentage: true,
callback: function() {
getlink.prop('disabled',false);						
getlink.removeClass('hidden');
gotolink.removeClass('hidden');
timer.addClass('hidden');
}
});	
   
setTimeout(function(){
 document.getElementById('ad-top').classList.remove('hidden');

});
setTimeout(function(){
 document.getElementById('pop-button').classList.remove('hidden');
}, 17000);
setTimeout(function(){
 document.getElementById('ad-below').classList.remove('hidden');
});
}


function gotolinkcountdown(){
var countDown = 18;
gotolink.removeClass('hidden');
var x = setInterval(function() {

var distance = countDown -= 1;

gotolink.html('<span class="glyphicon glyphicon-time"></span> Please Wait...');

if (distance < 0) {
clearInterval(x);
gotolink.prop('disabled',false);
gotolink.html('<span class="glyphicon glyphicon-ok-sign"></span> Go to Link');
}
}, 1000);
}				

var queryString = window.location.search;
var Urlparams =  new URLSearchParams(queryString);
var link = Urlparams.get('token');
var buss = sessionStorage.getItem('id')
	

gotolink.on("click",function(){
var fucklink = fastlink + buss;
window.location.replace(fucklink);
sessionStorage.removeItem('id');
});					

fuckAdBlock.on(true, function() {
$("#adbs").html("Adblock Detected");
$("#adb").removeClass('hidden');
}).on(false, function() {
});

})


//]]> 
