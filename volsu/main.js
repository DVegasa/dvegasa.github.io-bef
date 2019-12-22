function copy(str){
  let tmp   = document.createElement('INPUT'), // Создаём новый текстовой input
      focus = document.activeElement; // Получаем ссылку на элемент в фокусе (чтобы не терять фокус)

  tmp.value = str; // Временному input вставляем текст для копирования

  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
  focus.focus();
  alert('Скопировано.');
}



function request(a,b,c){
  if(!c){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'test.php?l='+a+'&id='+b, false);
xhr.send();
$("#"+a).html(xhr.responseText);
}else{
  $("#"+a).html(b);
}
}
$(document).ready(function() {
var a=0;
var b='';
$("#1").change(function(){
  if($(this).val() == 0) return false;
a=2;
window.institut = $(this).val();
request(2,window.institut);
request(3,'<option>Выберите группу</option>',true);
request(4,'<option>Выберите семестр</option>',true);
request(5,'<option>Выберите зачетную книгу</option>',true);
});

$("#2").change(function(){
    if($(this).val() == 0) return false;
a=3;
b=$(this).val()+"&institut="+window.institut;
request(3,b);
request(4,'<option>Выберите семестр</option>',true);
request(5,'<option>Выберите зачетную книгу</option>',true);
});

$("#3").change(function(){
    if($(this).val() == 0) return false;
a=4;
b=$(this).val();
request(4,b);
request(5,'<option>Выберите зачетную книгу</option>',true);
});

$("#4").change(function(){
    if($(this).val() == 0) return false;
a=5;
b=$(this).val();
request(5,b);
});
$("#5").change(function(){
    if($(this).val() == 0) return false;
b=$(this).val();
request("tab",b);

});
});
