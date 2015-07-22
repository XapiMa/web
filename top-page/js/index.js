
$(document).ready(function(){


    brSize();

    $('#mov1').css('background-color', 'rgba(226, 250, 255, 0.7)');
    $('#tube-button-mute').css('background-color', 'rgba(226, 250, 255, 0.7)');
//    $('#news-get').empty();




});
//w960 h740




function brSize(){
    var w = $(window).width();
    var h = $(window).height();

    if (w < 950) {  //モバイル表示
        //Youtube操作ボタンを消して、モバイル表記を表示
        alert('スマホサイトを表示しています。')
        $('#tube-button').empty().append('<p>mobile向けサイトを表示しています。<br/>パソコンで表示している場合は画面を拡大して更新してください。</p>');
        
        $('#logo').empty().append('<object id="svg-logo" data="svg/logo3.svg" type="image/svg+xml"></object>')
        $('#section-top').remove();
        $('nav').after('<div id="mobile"></div>').empty();
        $('#mobile').append('<div id="mobile-gallery"></div><div id="mobile-member"></div><div id="mobile-about"></div><div id="mobile-news"></div>');
        $('#section-news').empty();
        $('#section-gallery').prependTo('#mobile-gallery');
        $('#section-about').prependTo('#mobile-about');
        $('#section-member').prependTo('#mobile-member');


    } else{                                         //パソコン表示にする
        var options = {videoId : '-u-b5bedF1I'};
        $('#wrapper').tubular(options);
    }
}






$(function(){
    $('#mov2-btn').click(function(){
        var options = {videoId : 'sr1V7BPeG-w'};
        $('#wrapper').tubular(options);
        $('#mov2').css('background-color', 'rgba(226, 250, 255, 0.7)');
        $('#mov1').css('background-color', 'rgba(226, 250, 255, 0.2)');
    });
    $('#mov1-btn').click(function(){
        var options = {videoId : '-u-b5bedF1I'};
        $('#wrapper').tubular(options);
        $('#mov1').css('background-color', 'rgba(226, 250, 255, 0.7)');
        $('#mov2').css('background-color', 'rgba(226, 250, 255, 0.2)');
    });
});