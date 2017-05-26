$(function()
        {
          
// Слайдер


(function($){
    $.fn.MySlider = function(interval) {
        var slides;
        var cnt;
        var amount;
        var i;

        function run() {
            // hiding previous image and showing next
            $(slides[i]).fadeOut(1000);
            i++;
            if (i >= amount) i = 0;
            $(slides[i]).fadeIn(1000);

            // updating counter
            cnt.text(i+1+' / '+amount);

            // loop
            setTimeout(run, interval);
        }

        slides = $('#my_slider').children();
        cnt = $('#counter');
        amount = slides.length;
        i=0;

        // updating counter
        cnt.text(i+1+' / '+amount);

        setTimeout(run, interval);
    };
})(jQuery);

// custom initialization
jQuery(window).load(function() {
    $('.smart_gallery').MySlider(3000);
});


//Таймер обратного отсчета


function updater(h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2017, 5, 29);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

updater(
 document.getElementById("hours"), document.getElementById("minutes"),
 document.getElementById("seconds")); 

// Слайдер-1


  $('.myBanner').slick({
       infinite: true,
       arrows: true,
       prevArrow: $('#buttonLeftB'),
	   nextArrow: $('#buttonRightB'),
       slidesToShow: 3,
       slidesToScroll: 1


     });

  // Слайдер-2

   $('#myProducts-1').slick({
       infinite: true,
       arrows: true,
       prevArrow: $('#buttonSlider-1 .button-1'),
	   nextArrow: $('#buttonSlider-1 .button-2'),
       slidesToShow: 5,
       slidesToScroll: 1
     });

   //Слайдер-3

   $('#myProducts-2').slick({
       infinite: true,
       arrows: true,
       prevArrow: $('#buttonSlider-2 .button-1'),
	   nextArrow: $('#buttonSlider-2 .button-2'),
       slidesToShow: 5,
       slidesToScroll: 1
     });

   //Слайдер-4

   $('#myProducts-3').slick({
       infinite: true,
       arrows: true,
       prevArrow: $('#buttonSlider-3 .button-1'),
	   nextArrow: $('#buttonSlider-3 .button-2'),
       slidesToShow: 5,
       slidesToScroll: 1
     });





        });