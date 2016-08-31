var $titleInput = $('#titleInput');
var $urlInput = $('#urlInput');
var $addButton = $('#addButton');
var $errorPrompt = $('#errorPrompt');
var $totalBookmarksButton = $('#totalBookmarksButton');
var $readBookmarksButton = $('#readBookmarksButton');
var $unreadBookmarksButton = $('#unreadBookmarksButton');
var $clearReadBookmarksButton = $('#clearReadBookmarksButton');
var $bookmarkCollection = $('#bookmarkCollection');
var $bookmarkReadCheckbox = $('.bookmarkReadCheckbox')

$addButton.on('click', function() {
  var titleInputValue = $titleInput.val();
  var urlInputValue = $urlInput.val();
  var bookmark = $('<figure class="bookmark"><h3 class="bookmarkTitle">' + titleInputValue + '</h3><p class="bookmarkURL">' + urlInputValue + '</p><input type="checkbox" class="bookmarkReadCheckbox">Read</input><button type="button" class="removeBookmarkButton">Remove</button></figure>');
  $bookmarkCollection.prepend(bookmark);
  $bookmarkReadCheckbox = $('.bookmarkReadCheckbox');
})

// investigate event delegation
$bookmarkReadCheckbox.on('click', function() {
// $bookmarkReadCheckbox.change( function() {
  console.log('ping')
  // if(this.checked) {
  //   this.parent().addClass('read')
  // } else {
  //   this.parent().removeClass('read')
  // }
});
