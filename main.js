// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", ()=>{



  let hearts= document.querySelectorAll("span.like-glyph")

  hearts.forEach(hearts=> hearts.addEventListener("click", likeCallback));
  
  function likeCallback(hearts){  
    console.log(hearts.target)
    mimicServerCall()
   .then(()=>{
    if(hearts.target.innerText === EMPTY_HEART){
      hearts.target.classList.add('activated-heart')
      hearts.target.innerText = FULL_HEART
    }
    else{
      hearts.target.classList.remove('activated-heart')
      hearts.target.innerText = EMPTY_HEART
    }
   })
   .catch(()=>{
      let errorModal= document.getElementById("modal")
      console.log(errorModal)
      errorModal.classList.remove("hidden")

      setTimeout(()=>{errorModal.className="hidden"}, 3000)
    })
  }
  
})


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
