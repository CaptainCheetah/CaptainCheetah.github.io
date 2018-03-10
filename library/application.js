const LIBRARY = {};
LIBRARY.cloudantconfig = {
  account: '2a65f301-9b7d-4107-8edf-50c8e4747c00-bluemix'
};

// authentication cookie check
LIBRARY.isAuth = function(){

}

// cloudant sign in (get cookie)
LIBRARY.signin = function(u,p){
  
  console.log(u);
  console.log(typeof u);
  console.log(typeof u === 'String');
  consle.log(p);
  console.log(typeof p);
  console.log(typeof p === 'String');
  
  let username = ((u && typeof u === 'String') ? u : false);
  let password = ((p && typeof p === 'String') ? p : false);

  if (username && password) {
    let xhrArgs = {
      async: 'true',
      crossDomain: 'true',
      type: 'POST',
      url: `https://${LIBRARY.cloudantconfig.account}.cloudant.com/_session`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
      },
      data: {
        name: username,
        password: password
      },
      done: () => {
        console.log('success');
      },
      fail: () => {
        console.log('error');
      },
      always: () => {
        console.log('complete');
      }
    };
    
    let auth = $.ajax(xhrArgs);
  } else {
   console.log('Credentials not provided'); 
  }
}

// cloudant sign out (delete cookie)
LIBRARY.signout = function(){

}


$(document).ready(() => {
  console.log('Classroom library loaded');
});
