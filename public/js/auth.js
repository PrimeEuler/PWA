(function() {
  'use strict';
//#region google auth
var id_token  = localStorage.getItem('id_token');
var id        = localStorage.getItem('id');
var name      = localStorage.getItem('name');
var email     = localStorage.getItem('email');
var avatar    = localStorage.getItem('avatar');
//#region host fingerprint

/**
 * convert imgURL to dataURL.
 *
 * @param {url} string imageURL.
  * @param {callback} function returns dataURL.
 */
function dataURLFromImageUrl(url, callback ) {
    var img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        //callback(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
        callback(dataURL)
    };

    img.src = url;
}

//figerprint device
var fingerprint = function(){
  navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    var host = devices[0].deviceId
        email = localStorage.getItem('email')||""
    document.getElementById("commonName").value ="";
    document.getElementById("subjectAltName_dns").value = "";
    if(devices[0].deviceId===""){
      host = email.split("@")[0]
    }
    if(host==="")return
    console.log("fingerprint: " + host)
    document.getElementById("commonName").value = host + ".local";
    document.getElementById("subjectAltName_dns").value = host + ".local";
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
  });
}
fingerprint();

//#region DOM online status
var ping = function(){
  fetch('ping.js')
  .then(function(){
    // hide offline cached notification
     document.getElementById("cache").style.display = "none";
  })
  .catch(function(e){
     console.log(e)
     //display cached credentials if offline
     id_token  = localStorage.getItem('id_token');
     id        = localStorage.getItem('id');
     name      = localStorage.getItem('name');
     email     = localStorage.getItem('email');
     avatar    = localStorage.getItem('avatar');

     document.getElementById("cache").style.display = "block";
     document.getElementById("email").innerHTML = localStorage.getItem('email') || ""
     document.getElementById("name").innerHTML = localStorage.getItem('name') || "guest"
     document.getElementById("subjectAltName_email").value = localStorage.getItem('email') || ""
     document.getElementById("avatar").src = avatar? avatar : "/icon/default.svg";
  });

};
setInterval(ping, 5000);
ping();


var auth2; // The Sign-In object.
var googleUser; // The current user.
/**
 * Calls startAuth after Sign in V2 finishes setting up.
 */
var appStart = function() {
  //renderButton();
  gapi.load('auth2', initSigninV2);
};
/**
 * Initializes Signin v2 and sets up listeners.
 */
var initSigninV2 = function() {
  auth2 = gapi.auth2.init({
      client_id: '385947295567-kfek6l00fv0651v6m8j1j2fg169isgav.apps.googleusercontent.com',
      scope: 'email profile'
  });
  // Listen for sign-in state changes.
  auth2.isSignedIn.listen(signinChanged);
  // Listen for changes to current user.
  auth2.currentUser.listen(userChanged);
  // Sign in the user if they are currently signed in.
  if (auth2.isSignedIn.get() == true) {
    auth2.signIn();
  }
  // Start with the current live values.
  refreshValues();
};
/**
 * Listener method for sign-out live value.
 *
 * @param {boolean} val the updated signed out state.
 */
var signinChanged = function (val) {
  console.log('Signin state changed to ', val);
  //document.getElementById('signed-in-cell').innerText = val;
};
/**
 * Listener method for when the user changes.
 *
 * @param {GoogleUser} user the updated user.
 */
var userChanged = function (user) {
  console.log('User now: ', user);
  googleUser = user;
  updateGoogleUser();
  //document.getElementById('curr-user-cell').innerText = JSON.stringify(user, undefined, 2);
};
/**
 * Updates the properties in the Google User table using the current user.
 */
var updateGoogleUser = function () {
  //store user credentials if signed in
  if (googleUser && auth2.isSignedIn.get() == true) {
    //credentials
    id_token = googleUser.getAuthResponse().id_token;
    id       = googleUser.getBasicProfile().getId();
    email    = googleUser.getBasicProfile().getEmail();
    name     = googleUser.getBasicProfile().getName();
    avatar   = googleUser.getBasicProfile().getImageUrl();
    //cache credentials and avatar for offline use
    localStorage.setItem('id_token', id_token )
    localStorage.setItem('id', id )
    localStorage.setItem('email', email )
    localStorage.setItem('name', name )
    //avatar url to dataURL for offline use
    dataURLFromImageUrl(
      avatar,
      function(dataURL){
        avatar = dataURL;
        localStorage.setItem('avatar', avatar );
        document.getElementById("avatar").src = avatar? avatar : "/icon/default.svg";
       }
    )
    //update dom
    document.getElementById("email").innerHTML = email;
    document.getElementById("name").innerHTML = name;
    document.getElementById("subjectAltName_email").value = email;

    fingerprint()
    console.log('Logged in as: ' + name );
  } else {
    localStorage.clear();
    document.getElementById("email").innerHTML = "";
    document.getElementById("name").innerHTML = "guest";
    document.getElementById("subjectAltName_email").value = "";
    document.getElementById("avatar").src = "/icon/default.svg"
    fingerprint();
  }
};
/**
 * Retrieves the current user and signed in states from the GoogleAuth
 * object.
 */
var refreshValues = function() {
  if (auth2){
    console.log('Refreshing values...');

    googleUser = auth2.currentUser.get();

    //document.getElementById('curr-user-cell').innerText = JSON.stringify(googleUser, undefined, 2);
    //document.getElementById('signed-in-cell').innerText = auth2.isSignedIn.get();

    updateGoogleUser();
  }
}

/**
 * GoogleAuth sign in / out.
 */
var signInOut = function(){
  
  console.log(auth2.isSignedIn.get())
  if (auth2.isSignedIn.get() == true) {
    auth2.signOut();
    localStorage.clear();
    //localSession.clear();
  }else{
    auth2.signIn();
  }
}
//window.auth2 = auth2;
window.signInOut = signInOut;
window.appStart = appStart;
window.id_token  = id_token
window.id        = id
window.name      = name
window.email     = email
window.avatar    = avatar
})();
