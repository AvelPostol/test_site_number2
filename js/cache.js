/*function slow(x) {
   console.log(`called with ${x}`);
   return x;
}
function cachingDecorator(func) {
   let cache = new Map();

   return function(x){
      if (cache.has(x)) {
         return cache.get(x);
      }
      let result = func.call(this, x);
      cache.set(x, result);
      return result;
   };
}
slow = cachingDecorator(slow);
console.log(slow(1));  
console.log("Again: " + slow(1));

console.log(slow(2));
console.log("Again: " + slow(2));*/
/*function ibg(){
   $.each($('.ibg'), function(index, val){
      if($(this).find('img').length>0){
         $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg();
 */
$(window).resize(function(event){
   adaptive_function();
});
function adaptive_header(w) {
   var headerMenu=$('.header-menu');
   /*var headerLang=$('.bussines');
   if(w.matches){
      if(!headerLang.hasClass('done')){
         headerLang.addClass('done').appendTo(headerMenu);
   
      }
   }else{
      if(headerLang.hasClass('done')){
         headerLang.removeClass('done').prependTo($('.header-top'));
      }
   }*/
   if(w.matches){
      if(!$('.header-top-lang__item').hasClass('done')){
         $('.header-top-lang__item').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.header-top-lang__item'), function(index, val) {
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.header-top-lang__right'));
            }
         
      });
   }
}
function adaptive_function() {
   var w=window.matchMedia('(max-width: 992px)');
   adaptive_header(w);
}
   adaptive_function();
   
   $('.header-menu__icon').click(function(event) {
      $(this).toggleClass('active');
      $('.header-menu').toggleClass('active');
      /*if($(this).hasClass('active')){
         /*$('body').data('scroll',$(window).scrollTop());*/
      /*}
         $('body').toggleClass('lock');
      if(!$(this).hasClass('active')){
         $('body,html').scrollTop(parseInt($('bode').data('scroll')));
      }*/
   });
   $('.news').click(function(event) {
      if(!($('.press-relize-metka').hasClass('hidden'))){
         $('.press-relize-metka').toggleClass('hidden');
      }
      if($('.news-metka').hasClass('hidden')){
         $('.news-metka').removeClass('hidden');
      }
      if(!($('.news').hasClass('pointer'))){
         $('.news').toggleClass('pointer');
      }
      if($('.press-relize').hasClass('pointer')){
         $('.press-relize').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }
   });
   $('.press-relize').click(function(event) {
      if(!($('.news-metka').hasClass('hidden'))){
         $('.news-metka').toggleClass('hidden');
      }
      if($('.press-relize-metka').hasClass('hidden')){
         $('.press-relize-metka').removeClass('hidden');
      }
      if(!($('.press-relize').hasClass('pointer'))){
         $('.press-relize').toggleClass('pointer');
      }
      if($('.news').hasClass('pointer')){
         $('.news').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }

   });
   $('.all').click(function(event) {
      if($('.press-relize-metka').hasClass('hidden')){
         $('.press-relize-metka').removeClass('hidden');
      }
      if($('.news-metka').hasClass('hidden')){
         $('.news-metka').removeClass('hidden');
      }
      if($('.news').hasClass('pointer')){
         $('.news').removeClass('pointer');
      }
      if($('.press-relize').hasClass('pointer')){
         $('.press-relize').removeClass('pointer');
      }
      if(!($('.all').hasClass('pointer'))){
         $('.all').toggleClass('pointer');
      }
   });