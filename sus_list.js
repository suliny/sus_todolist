$(function() {
  var $addButton = $('#newItemButton');
  var $addItemField = $('#addItemField');
  var $newItemForm = $('#newItemForm')
  var $textInput = $('input:text');
  var $list = $('ul');


  var handleCheckboxClick = function(){
    var $checkboxObject = $(this);
    var $liObject = $(this).parent().parent().parent();
    if($checkboxObject.is(':checked')){
      $liObject.removeClass('active_item').addClass('completed_item');
      $liObject.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 200, 'swing', function() {
        var temp = $liObject.text();
        $liObject.remove();
        $('ul#completedList').prepend('<li class="completed_item"><label class="suCheckbox"><div class="suCheckbox-checkboxContainer"><input type="checkbox" class="suCheckbox-checkbox" checked><div class="suCheckbox-checkmark"></div></div><span class="suCheckbox-label">' + temp + '</span></label></li>');
      });
    } else {
      $liObject.removeClass('completed_item').addClass('active_item');
      $liObject.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 200, 'swing', function() {
        var temp = $liObject.text();
        $liObject.remove();
        //Add to the bottom of the to-do list

        $('ul#activeList').append('<li class="active_item"><label class="suCheckbox"><div class="suCheckbox-checkboxContainer"><input type="checkbox" class="suCheckbox-checkbox"><div class="suCheckbox-checkmark"></div></div><span class="suCheckbox-label">' + temp + '</span></label></li>');

      });
    }
  }

  $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newToDo = $textInput.val();
    // Add new element
    $('ul#activeList').append('<li class="active_item"><label class="suCheckbox"><div class="suCheckbox-checkboxContainer"><input type="checkbox" class="suCheckbox-checkbox"><div class="suCheckbox-checkmark"></div></div><span class="suCheckbox-label">' + newToDo + '</span></label></li>');
    $textInput.val('');
  });

  $list.on('click', '.suCheckbox-checkbox', handleCheckboxClick);

});
