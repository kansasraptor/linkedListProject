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
}})

$('main').on('change', '.bookmarkReadCheckbox', function() {
  if ($(this).is(':checked')){
        $(this).parent().addClass('read')
        } else {
        $(this).parent().removeClass('read')
        }
});

$('main').on('click','.removeBookmarkButton', function() {
  $(this).parent().remove()
});

//on keyup in either input field, check if either is != to "", if true enable, else disable
$inputSection.on('keyup', 'input', function() {
  if ($titleInput.val() != '' || $urlInput.val() != '') {
    $addButton.prop('disabled', false)
  } else {
    $addButton.prop('disabled', true)
}});
