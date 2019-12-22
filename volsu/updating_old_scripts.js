function back(id_el){
$( '#list_'+id_el+' #ajax_page').detach();
$( '#list_'+id_el+" .card__img").fadeIn(500);
$('#list_'+id_el+' .card__body').fadeIn(1000);
$('#list_'+id_el+' .card__title').fadeIn(1000);
$('#list_'+id_el+' .card__text').fadeIn(1000);
setTimeout(function () {
  $('#list_'+id_el).attr('onClick',"hrefer('"+id_el+"')");
}, 100);
/*var list_view = $('#new_but');
list_view.html('Еще материалы<i class="icon icon-arr icon-first"></i>');*/
}
function setLocation(curLoc){
    try {
      history.pushState(null, null, curLoc);
      return;
    } catch(e) {}
    location.hash = '#' + curLoc;
}

function open_pagin(){
  $( '#but_more').fadeOut(300);
  $( '#pagin_list').fadeIn(800);
  $(".pagination__item a").addClass(function(){
$(this)[0].href=$(this)[0].href+"&open_p=1";
})
}

function hrefer(link){
ajax_pool_my(link);
$('#list_'+link).attr('onClick','');
}
function ajax_pool_my(id_el){
  var div_el = $('#list_'+id_el);
    $('#list_'+id_el+'  .card__body').css('display','none');
  $('#list_'+id_el+'  .card__title').css('display','none');
  $('#list_'+id_el+'  .card__text').css('display','none');

  //$('.main__news-wrapper').css('display','none');
  div_el.append('<div id="ajax_page"></div>');
  var url_photo='';
  var daten = Ajax_load(id_el+'','news_menu');
  var parser_json =JSON.parse(daten);
 div_el.children( "#ajax_page" ).css('display','none');
 if(parser_json.photo!=null){
   url_photo='<div class="card__img"><img class="img" src="'+parser_json.photo+'" alt="" title=""></div>';
 }
 if(parser_json.text==""){
   parser_json.text="Текст отсутствует";
 }
div_el.children( "#ajax_page" ).fadeIn(100 , function(){
    div_el.children( "#ajax_page" ).addClass('card card_hor"');
    div_el.children( "#ajax_page" ).html('<div class="right_pos_btn"><button class="btn btn_secondary btn_more"'+
    ' onClick="back(\''+id_el+'\');'+'"><a id="new_but" class="link-default"'+
    '">Скрыть запись<i class='+
    '"icon icon-arr icon-second"></i></a></button></div>'+url_photo+'<div class="card__body" style="padding-top: 0;margin-top: 25px;"><h4 class="card__title">'+parser_json.preview+'</h4>'+'<p class="card__text">'+parser_json.text+
    "</p></div></div>");
}).css("display","contents");

}




(function(){


/*
//////////////////////////ДОБАВЛЯЕМ ССЫЛКАМ ТЕГ//////////////////////////
*/
$(".main__content a").addClass(function(index){
  if(this.getAttribute('class')==null||(this.getAttribute('class')!='link'&&this.getAttribute('class')=='card card_hor link-default')){
    $( this ).attr('title', 'Перейти по ссылке');

    return 'link-default';
  }
})


$('a').addClass(function(){
var a = this.href.split('.');
var posl = a.length - 1;
if(a[posl] == 'doc'||a[posl] == 'docx'||a[posl] == 'tif'||a[posl] == 'TIF'){
$(this).attr('title','Скачать файл');
}
if(a[posl] == 'pdf'){
$(this).attr('title','Открыть pdf документ');
$(this).attr('target','_blank');
}
if(a[posl] == 'jpg'||a[posl] == 'jpeg'){
$(this).attr('title','Открыть картинку');
$(this).attr('target','_blank');
}
return false;
})
if(location.pathname!="/"&&!location.pathname.search( /^index.php/i )=="-1")
alert(1);

}())
