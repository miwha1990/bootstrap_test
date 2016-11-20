(function ($){
  $(function(){

    document.addEventListener('mousedown', function (e) {
        if (hasClass(e.target, 'popover_cancel')) {
          $('.popover').each(function(){
              $(this.previousSibling).popover('hide');
          });

        } else if (hasClass(e.target, 'popover_save')) {
          $('.popover_save').on('mouseup', function(e){
            var data_for_save = $(this).parent().parent().find('.form-control').val();
            $(this).parent().parent().parent().parent().find('.inner_data').text(data_for_save);
            $('.popover').each(function(){
              $(this.previousSibling).popover('hide');
            });
          })
        }
    }, false);
    function hasClass(elem, className) {
        return elem.className.split(' ').indexOf(className) > -1;
    }

    $('[data-toggle="popover"]').popover({
        placement: function (context, source) {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            var position = $(source).position();
            if (width < 568) {
                return "bottom";
            }

            if (width > 568) {
                return "right";
            }
        },
        html:true,
        content:function(e){
          var data = $(this).parent().find('.inner_data').text();
          var data_inner = '<p><input type="text" class="form-control" data-val="'+data+'" value="'+data+'"></p>';
          var pop_buttons = '<p><button class="btn popover_save">SAVE</button><button class="btn popover_cancel">CANCEL</button></p>';
          return data_inner + pop_buttons;
        },
    });

    $('html').on('mouseup', function(e) {
        if(!$(e.target).closest('.popover').length) {
            $('.popover').each(function(){
                $(this.previousSibling).popover('hide');
            });
        }
    });

   })
}) (jQuery)