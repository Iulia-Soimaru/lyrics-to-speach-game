// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function(){
  document.body.innerHTML += '<div id="fb-root"></div>';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '#{window.location.protocol}//connect.facebook.net/en_US/all.js');
  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log('User\'s name is ' + xhr.responseText);
      }
      else {
          console.log('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();
}, false);

// jQuery ->
//   $('body').prepend('<div id="fb-root"></div>')

//   $.ajax
//     url: "#{window.location.protocol}//connect.facebook.net/en_US/all.js"
//     dataType: 'script'
//     cache: true


window.fbAsyncInit = ->
  FB.init(appId: 'YOUR-APP-ID', cookie: true)

  $('#sign_in').click (e) ->
    e.preventDefault()
    FB.login (response) ->
      window.location = '/auth/facebook/callback' if response.authResponse

  $('#sign_out').click (e) ->
    FB.getLoginStatus (response) ->
      FB.logout() if response.authResponse
    true