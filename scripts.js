var $titleInput = $('#titleInput');
var $urlInput = $('#urlInput');
var $addButton = $('#addButton');
var $errorPrompt = $('#errorPrompt');
var $totalBookmarksButton = $('#totalBookmarksButton');
var $readBookmarksButton = $('#readBookmarksButton');
var $unreadBookmarksButton = $('#unreadBookmarksButton');
var $clearReadBookmarksButton = $('#clearReadBookmarksButton');
var $bookmarkCollection = $('#bookmarkCollection');
var $bookmarkReadCheckbox = $('.bookmarkReadCheckbox');
var $removeBookmarkButton = $('.removeBookmarkButton');

$addButton.on('click', function() {
  var titleInputValue = $titleInput.val();
  var urlInputValue = $urlInput.val();
  var bookmark = $('<figure class="bookmark"><h3 class="bookmarkTitle">' + titleInputValue + '</h3><p class="bookmarkURL">' + urlInputValue + '</p><input type="checkbox" class="bookmarkReadCheckbox">Read</input><button type="button" class="removeBookmarkButton">Remove</button></figure>');
  $bookmarkCollection.prepend(bookmark);
  $bookmarkReadCheckbox = $('.bookmarkReadCheckbox');
})

$('main').find('figure').on('change', $bookmarkReadCheckbox, function() {
  if ($(this).find('.bookmarkReadCheckbox').is(':checked')){
        $(this).addClass('read')
        } else {
        $(this).removeClass('read')
        }
});

// $('figure').on('click', $removeBookmarkButton, function() {
//   console.log('ping')
//   $(this).remove()
// });

$('main').find('.removeBookmarkButton').on('click', function() {
  console.log('ping')
  $(this).parent().remove()
});