$(document).ready(function() {

var descriptions = ['את השאילה הראשונה חפשו במקום הכי קר בבית',
                    'השאילה השנייה נמצאת מתחת לכובע של מקסים בן 4',
                    'השאילה השלישית היא מתחת לדבר הכי רועש בבית',
                    'את התשובה הרביעים תמצאו בעיגול הגדול שהכל בו הפוך',
                    'הכתובת לתשובה החמישית נמצא בתוך הענק הירוק שמלווה את המשפחה של מקסים בטיולים',
                    'התשובה השישית כתובה על הדף במקום הכי חם בבית. תוכלו לקרוא אותה?',
                    'במקום עם רוח חמה וחזקה תמצאו משהו שיעזור לכם לגלות את התשובה השבעית',
                    'בספר הצביעה בסגנון מיינקראפט מילה אחת חסרה. מהיא?',
                    'את הדבר הזה אבא הביא לאמא בתור מתנה לפניי 7 שנה. מקסים ודניס כבשו את זה מזמן'];
var answers = ['Max Ye',
               '2005',
               'Avatar',
               '152',
               'Balfour',
               'MAXIM',
               'box',
               'pacman',
               '11'];

var level = 0;
$( ".question p.description" ).html(descriptions[level]);
$( ".question h2" ).html('רמה '+(level+1));
$( ".right_answer h2" ).html('רמה '+(level));
$( ".find" ).css('background-image','url("../img/level_'+(level)+'.png")');




$('.intro .goto_collection').click(function() {
  $('section').removeClass('hide').addClass('hide');
  $('.collection').removeClass('hide');
});

$('.collection .button').click(function() {
  $('section').removeClass('hide').addClass('hide');
  $('.question').removeClass('hide');
});

  $( ".question form" ).submit(function( event ) {
    $('section').removeClass('hide').addClass('hide');
    if ( $( "input.question_value" ).val() === answers[level] ) {
      if(level < 9){
        level=level+1;
      }
      $( ".question p.description" ).html(descriptions[level]);
      $( ".question h2" ).html('level '+(level+1));
      $( ".right_answer h2" ).html('רמה '+(level));
      $( ".find" ).css('background-image','url("img/level_'+(level)+'.png")');


      $( ".items li" ).each(function( index ) {
        $(this).removeClass('innactive').removeClass('active');
        if(index < level) {
          $(this).addClass('active');
        } else {
          $(this).addClass('innactive');
        }

      });

      $('.right_answer').removeClass('hide');
      $('.right_answer .button').click(function() {
        $('section').removeClass('hide').addClass('hide');
        $('.find').removeClass('hide');
      });
      $('.find .level_up').click(function() {
        $('section').removeClass('hide').addClass('hide');
        $( "input.question_value" ).val('');
        if(level < 9){
          $('.collection').removeClass('hide');
        } else {
          $('.final').removeClass('hide');
        }
      });
    } else {
      $('.wrong_answer').removeClass('hide');
      $('.wrong_answer .button').click(function() {
        $('section').removeClass('hide').addClass('hide');
        $('.question').removeClass('hide');
      });
    }
    event.preventDefault();

  });
});
