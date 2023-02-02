// let checkbox = document.querySelector('#checkbox');
// let signup = document.querySelector('#signup');

// checkbox.onclick = ()=>{
//     signup.removeAttribute("disabled");

   
// }

var checker = document.getElementById('checkbox');
 var sendbtn = document.getElementById('signup');
 // when unchecked or checked, run the function
 checker.onchange = function(){
if(this.checked){
    sendbtn.disabled = false;
} else {
    sendbtn.disabled = true;
}

}


let disable = ()=>{
    sendbtn.setAttribute("disabled");
}


// form data code 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyGRw_O2RRqUpqXTB3cBTrUwTnpzic22VP96SNJ8cgsmed-EmDMF5UsUmMS7i4cY7LOSA/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              sendbtn.disabled = true;
              sendbtn.innerText = "submiting";
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })