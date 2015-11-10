google.load("search", "1");

function findImagesOnGoogle(options) {
  options.container.empty();
  options.container.append($("<p>").text("Searching..."));

  var imageSearch = new google.search.ImageSearch();
  imageSearch.setSearchCompleteCallback(this, searchCompleteCallback(imageSearch, options), null);
  imageSearch.setResultSetSize(8);
  imageSearch.execute(options.keywords);
}

function searchCompleteCallback(search, options) {
  return function(arg) {
    google.search.Search.getBranding('google-branding');
    options.container.empty();
    for (var i = 0; i < search.results.length; i++) {
      var result = search.results[i];
      var img = $("<img>");
      img.attr('src', result.tbUrl);
      img.data('url', result.url);
      options.container.append(img);
    }
  }
}

function saveParametersToHash() {
  $('input, select').change(function() {
    var hash = {};
    hash.caption = $("#caption-text").val();
    hash.size = $('#caption-size').val();
    hash.left = $('#caption-left').val();
    hash.top = $('#caption-top').val();
    hash.width = $('#caption-width').val();
    hash.colour = $('#caption-colour').val();
    hash.align = $('#caption-align').val();
    hash.url = $('#workspace img').attr("src");
    hash.keyword = $('#search-term').val();
    window.location.hash = escape(JSON.stringify(hash));
    updateTweetButton();
  });
}

function loadParametersFromHash() {
  try {
    var hash = JSON.parse(unescape(window.location.hash).replace('#', ''));
    $('#caption-text').val(hash.caption);
    $('#caption-size').val(hash.size);
    $('#caption-left').val(hash.left);
    $('#caption-top').val(hash.top);
    $('#caption-width').val(hash.width);
    $('#caption-colour').val(hash.colour);
    $('#caption-align').val(hash.align);
    $('input, select').trigger('change');
    $('#workspace').append($('<img>').attr("src", hash.url));
    $('#search-term').val(hash.keyword);
  } catch (err) {}
}

function updateTweetButton() {
  if (typeof twttr == 'undefined') {
    return;
  }
  $('#twitter').empty();
  var a = $('<a>')
            // .attr("data-url", window.location.href)
            .attr("href", "https://twitter.com/share")
            .addClass("twitter-share-button")
            .attr("data-text", "I built Motivational Posters page @makersacademy today!")
            .append($("Tweet"));
  a.appendTo('#twitter');
  twttr.widgets.load();
}

$(function() {
  loadParametersFromHash();
  saveParametersToHash();
  $('#caption-text').trigger("input");
})

https://motivational-posters-silvabox.c9.io/#%7B%22caption%22%3A%22Does%20this%20blow%20the%20Twitter%20character%20limit%3F%22%2C%22size%22%3A%2232%22%2C%22left%22%3A%2210%22%2C%22top%22%3A%2210%22%2C%22width%22%3A%22400%22%2C%22colour%22%3A%22yellow%22%2C%22align%22%3A%22left%22%2C%22url%22%3A%22http%3A//th06.deviantart.net/fs71/PRE/f/2012/192/3/d/fire_breathing_dragon_by_sandara-d56vmyu.jpg%22%2C%22keyword%22%3A%22dragon%22%7D
