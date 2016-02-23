// Get whatever's been clicked on
function getTarget(e) {
  return e.target;
}

function removeItem(e) {
  var target;
  var itemParent;
  target = getTarget(e);
  itemParent = target.parentNode;
  itemParent.removeChild(target);
}

// Set up event listeners for shopping list
var list = document.getElementsByClassName('shoppingList')[0];
list.addEventListener('click', function(e) {
  removeItem(e);
}, false);


// Event listener for textbox upon load
var usernameBox = document.getElementById('username');

window.addEventListener('load', textboxFocus, false);

function textboxFocus() {
  usernameBox.focus();
}

// Check length of username and password

var usernameFeedback = document.getElementsByClassName('feedback')[0];
var passwordFeedback = usernameFeedback.nextSibling;

// Event listeners for username and password

usernameBox.addEventListener('focus', tipUsername, false);
usernameBox.addEventListener('blur', checkUsername, false);

function tipUsername() {
  usernameFeedback.textContent = 'Username must be at least 5 characters long';
}

function checkUsername() {
  var username = usernameBox.value;
  if (username.length < 5) {
    usernameFeedback.textContent = 'Not long enough yet!'
  } else {
    usernameFeedback.innerHTML = ''
  }
}
