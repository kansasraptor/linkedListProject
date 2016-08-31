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

// $inputSection.on('keyup', 'input', function() {
//   if ($titleInput.val() === '' || $urlInput.val() === '') {
//     $addButton.prop('disabled', true)
//   } else {
//     $addButton.prop('disabled', false)
// }});

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
  var bookmark = $('<figure class="bookmark"><h3 class="bookmarkTitle">' + titleInputValue + '</h3><p class="bookmarkURL">' + urlInputValue + '</p><input type="checkbox" class="bookmarkReadCheckbox">Read</input><button type="button" class="removeBookmarkButton">Remove</button></figure>');
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

$bookmarkCollection.on('change', '.bookmarkReadCheckbox', function() {
  if ($(this).is(':checked')){
        $(this).parent().addClass('read')
        } else {
        $(this).parent().removeClass('read')
        }
  updateReadStatusCount();
});

$('main').on('click','.removeBookmarkButton', function() {
  $(this).parent().remove();
  updateReadStatusCount();
});
