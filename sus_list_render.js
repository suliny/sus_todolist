$(function() {
  var $addButton = $('#newItemButton');
  var $addItemField = $('#addItemField');
  var $newItemForm = $('#newItemForm')
  var $textInput = $('input:text');
  var $main = $('#taskBody');

  var toDoApp = {
    activeList: ['Item 1', 'Item 2', 'Item 3'],
    completedList: ['Completed thing 1', 'Completed thing 2'],
  };


  function renderListItem(stateOfList, label) {
    var output = '';
    var className = '';
    var checkedOrNot = '';

    //If it's an active item
    if (stateOfList === "activeList") {
      className = "active_item";

    //If it's a completed item
    } else if (stateOfList === "completedList") {
      className = "completed_item";
      checkedOrNot = ' checked';
    }
    output += '<li class="' + className + '"><label class="suCheckbox"><div class="suCheckbox-checkboxContainer"><input type="checkbox" class="suCheckbox-checkbox"' + checkedOrNot + '><div class="suCheckbox-checkmark"></div></div><span class="suCheckbox-label">' + label + '</span></label></li>';
    return output;
  };

  function renderList(prop, listElements) {
    var output = '';

    // Handle listName
    if (prop === 'activeList') {
      output += '<p>Get them done soon..!</p>';
    } else if (prop === 'completedList') {
      output += '<p>Good job with these!</p>';
    };
    //Add ListName
    output += '<ul id="' + prop + '">';

    //Loop over the items
    for (i = 0; i < listElements.length; i++) {
      output += renderListItem(prop, listElements[i]);
    };

    // Closing tag for the list
    output += '</ul>';
    return output;
  }

  function render(app) {
    var output = '';

    // Figure out how to loop over an object
    for (var prop in toDoApp) {
      //Pass the item into the render list
      var listElements = toDoApp[prop];
      output += renderList(prop, listElements);
    }
    //Append everything to main
    $main.append(output);
  }

  render(toDoApp);
  console.log("OMG");
  // Javascript event handlers variables and functions
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
