
/*********************************************************************
Copyright (C) 2009 WEB DESIGN LAB (http://www.webdlab.com/)
Licensed under the MIT License:
http://www.opensource.org/licenses/mit-license.php
*********************************************************************/

/*------------------------------------------------------------------*/

$(function(){
$('.accordion dd').eq(0).show();

$('.accordion dt').click(function() {

$('.accordion dd').animate({width:'hide'},500);
$(this).next().animate({width:'toggle'},500);

});
});
