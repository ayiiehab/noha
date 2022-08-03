
$('#main-nav a').click(function(e){

  let hrefA = $(e.target).attr('href');

  let TopA = $(hrefA).offset().top;

  $('html,body').animate( {scrollTop:TopA } ,1000);


})