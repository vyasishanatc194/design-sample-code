$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})


$(function() {
  $('#class_type').change(function(){
    $('.colors').hide();
    $('#' + $(this).val()).show();
  }); 

  $('#Payment_type').change(function(){
    $('.colors2').hide();
    $('#' + $(this).val()).show();
  });

  $('#billing_type').change(function(){
    $('.colors3').hide();
    $('#' + $(this).val()).show();
  });

  $('#Payment_type').change(function(){
    if($(this).val() == 'invoiced_account'){ 
        $( ".invoicedaccount" ).addClass( "facility-show" );
        $( ".parentpaid" ).removeClass( "facility-show" );
        $( "#halt_date" ).hide();
    }
    else if($(this).val() == 'parent_paid')
    {
        $( ".invoicedaccount" ).removeClass( "facility-show" );
        $( ".parentpaid" ).addClass( "facility-show" );
        $( "#halt_date" ).show();
    }
    else
    {
      $( ".parentpaid" ).removeClass( "facility-show" );
      $( "#halt_date" ).show(); 
    }
  });

  $(document).ready(function(){
    $(".linkround-blk").click(function(){
     
      $("#"+$(this).attr("data-id")).addClass("click-change-icon");
    });
  });


});
/*
jQuery(document).ready(function(){
  jQuery('.scrollbar-macosx').scrollbar();
});
*/						
/* Ends of park class */

  
$(document).ready(function () {
  autoPlayYouTubeModal();
});

function autoPlayYouTubeModal() {
      var trigger = $('.videoModalTriger');
  trigger.click(function () {
      var theModal = $(this).data("target");
      var videoSRC = $(this).attr("data-videoModal");
      var videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal).on('hidden.bs.modal', function (e) {
          $(theModal + ' iframe').attr('src', '');
      });
  });
};

$(document).ready(function(){  
  $(".sidebar-mobile-main-toggle").click(function(){
    //$('#navbar-mobile').hide();
    $('.nav-mobile').addClass('collapsed');
    $('.navbar-collapse.collapse').removeClass('in');
    
  });
});

$(document).ready(function () {
  $('#passcheckbox1').change(function () {
    $('.pass-none').fadeToggle();
  });
});
/*
$(document).ready(function() {
  $("#txtEditor").Editor();
});
*/



/*
$(document).ready(function(){
  $("#navbar-mobile").click(function(){
    $(".sidebar-mobile-main .sidebar-div").hide();    
    $(".navbar-top").removeClass('sidebar-mobile-main');
  });
  $(".sidebar-mobile-main-toggle").click(function(){
    $("#navbar-mobile").hide();
  });

});
*/
/*
(function() {  
  var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

  $trigger   = $('.trigger').first();
  $points    = $('.progress-points').first();
  $point_arr = $('.progress-point');
  $progress  = $('.progress').first();

  val     = +$points.data('current') - 1;
  max     = $point_arr.length - 1;
  tracker = active = 0;

  function activate(index) {
    if (index !== active) {
      active = index;
      var $_active = $point_arr.eq(active)
      
      $point_arr
        .removeClass('completed active')
        .slice(0, active).addClass('completed')
      
      $_active.addClass('active');
      
      return $progress.css('width', (index / max * 100) + "%");
    }
  };

  $points.on('click', 'li', function(event) {
    var _index;
    _index  = $point_arr.index(this);
    tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;
    
    return activate(_index);
  });

  $trigger.on('click', function() {
    return activate(tracker++ % 2 === 0 ? 0 : val);
  });

  setTimeout((function() {
    return activate(val);
  }), 1000);

}).call(this);*/