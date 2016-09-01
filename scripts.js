var $titleInput = $('#titleInput');
var $urlInput = $('#urlInput');
var $addButton = $('#addButton');
var $inputSection = $('#inputSection');
var $errorPrompt = $('#errorPrompt');
var $totalBookmarksButton = $('#totalBookmarksButton');
var $readBookmarksButton = $('#readBookmarksButton');
var $unreadBookmarksButton = $('#unreadBookmarksButton');
var $clearReadBookmarksButton = $('#clearReadBookmarksButton');
var $bookmarkCollection = $('#bookmarkCollection');
var $bookmarkReadCheckbox = $('.bookmarkReadCheckbox');
var $removeBookmarkButton = $('.removeBookmarkButton');

function clearErrors() {
  $errorPrompt.text('')
};

function clearInputFields() {
  $titleInput.val('');
  $urlInput.val('');
};


$inputSection.on('keyup', 'input', function() {
  if ($titleInput.val() && $urlInput.val() ) {
    $addButton.prop('disabled', false)
}});


function updateReadStatusCount() {
  $readBookmarksButton.text('Read(' + $('.read').length + ')');
  $totalBookmarksButton.text('All(' + $('.bookmark').length + ')');
  $unreadBookmarksButton.text('Unread(' + ($('.bookmark').length-$('.read').length) + ')');
};

//this function probably needs to be broken up
$addButton.on('click', function() {
  var titleInputValue = $titleInput.val();
  var urlInputValue = $urlInput.val();
  var bookmark = $('<figure class="bookmark unread"><h3 class="bookmarkTitle">' + titleInputValue + '</h3><p class="bookmarkURL">' + urlInputValue + '</p><div class="checkboxContainer"><input type="checkbox" class="bookmarkReadCheckbox">Read</input><button type="button" class="removeBookmarkButton">Remove</button></figure></div>');
  if(titleInputValue === "" || urlInputValue === "") {
    $errorPrompt.text('*Please fill in a bookmar title and url')
  } else {
  $bookmarkCollection.prepend(bookmark);
  $bookmarkReadCheckbox = $('.bookmarkReadCheckbox');
  clearErrors();
  clearInputFields();
  $addButton.prop('disabled', true);
  updateReadStatusCount();
}})

$totalBookmarksButton.on('click', function() {
  $('.bookmark').css({'display' : 'inline-block'})
});

$readBookmarksButton.on('click', function() {
  $('.bookmark').css({'display' : 'none'})
  $('.read').css({'display' : 'inline-block'})
});

$unreadBookmarksButton.on('click', function() {
  $('.bookmark').css({'display' : 'none'})
  $('.unread').css({'display' : 'inline-block'})
});


$clearReadBookmarksButton.on('click', function() {
  $('.read').remove();
  updateReadStatusCount();
});

$bookmarkCollection.on('change', '.bookmarkReadCheckbox', function() {
  if ($(this).is(':checked')){
        $(this).parent().addClass('read')
        $(this).parent().removeClass('unread')
        } else {
        $(this).parent().removeClass('read')
        $(this).parent().addClass('unread')
        }
  updateReadStatusCount();
});

$('main').on('click','.removeBookmarkButton', function() {
  $(this).parent().remove();
  updateReadStatusCount();
});
