
$(function(){
  $('.how-to-item').on("click", function(){
    var $answer = $(this).find('.answer')
    if ($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });
  $('.f-item').on('click', function(){
    var id = $(this).attr('how-to-garbage');
    var position = $(id).offset().top();
  });

  $('.f-item').on('click', function(){
    var id = $(this).attr('question');
    var position = $(id).offset().top();
  });
  $('.f-item').on('click', function(){
    var id = $(this).attr('bring-in');
    var position = $(id).offset().top();
  });
  $('.f-item').on('click', function(){
    var id = $(this).attr('appliance');
    var position = $(id).offset().top();
  });
  $('.f-item').on('click', function(){
    var id = $(this).attr('contact');
    var position = $(id).offset().top();
  });

  $('#nav').click(function(){
    $('html,body').scrollTop(0);
  });
});

  
