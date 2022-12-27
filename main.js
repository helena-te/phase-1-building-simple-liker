// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//eventlistener invokes mimicServerCall()
//fetch()
//then()

const allHearts = document.querySelectorAll(".like-glyph");

function callback(event) {
  const heartIcon = event.target;
  mimicServerCall()
    .then((serverMessage) =>
      {alert(serverMessage)
      heartIcon.innerText = FULL_HEART[heartIcon.innerText];
    })  
    .catch((error) => {
      alert("Something went wrong")
      console.log(error)
    });
}

for (const heart of allHearts) {
  heart.addEventListener("click", callback);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
