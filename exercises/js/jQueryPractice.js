/*Select All 'div's And Give Them A Purple Background*/
$("div").css("background", "purple");

/*Select The 'div's With Class 'highlight' And Make Them 200px Wide*/
$(".hightlight").css("width", "200px");

/*Select The 'div' Width The Id 'third' And Give It An Orange Color*/
$("#third").css("border", "2px dotted orange");

/*Bonus: Select The First 'div' Only And Change It's Font Color To Pink*/
$("div:nth-child(2)").css("background", "SaddleBrown");
/*Another Way For The Bonus*/
$("div:first-of-type").css("color", "BlanchedAlmond");