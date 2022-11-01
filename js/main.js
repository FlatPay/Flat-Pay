
jQuery(document).ready(function( ){

 new WOW().init();


 
    $('.dropright button').on("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
  
      if (!$(this).next('div').hasClass('show')) {
        $(this).next('div').addClass('show');
      } else {
        $(this).next('div').removeClass('show');
      }
  
    });
  

  });

// A function For Password Check
const passwordCheck = (pass1, pass2) => {
  if(pass1 == pass2) return true
  else return false
}

let userPassword = 12345;

// All The Login Functionality Goes Here
if(window.location.pathname.includes("login")) {
// Login Form
  const loginBtn = document.querySelector(".login-btn");
  const loginDetails = document.querySelectorAll(".login-form .form-group input");
  let loginInfos = {};

  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
  
    // stores all the input values in an object
    loginDetails.forEach((input) => {
      loginInfos[input.id] = input.value;
    })

    // A check to see if all the login details are correctly filled
    if(loginInfos.email && loginInfos.pwd && loginInfos.reg_num) {
      // user details a sent to a dummy endpoints and if successful
      // it will redirect the user to the homepage after login.
      // in the final product the user details will be sent to the backend for use
      // to retrieve user details and displayed on the homepage
      if(passwordCheck(loginInfos.pwd, userPassword)) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(loginInfos),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        if(response.ok) {
          const res_json = await response.json();
          console.log(res_json)
          setTimeout(() => {
            alert("Yay...you're logged in...")
            window.location.href = "index.html";
          }, 1000);
        }
        else {
          console.log(response);
        }
      }
      else {
        alert("Wrong password entered, please enter 12345 as the password")
      }
    }
    else {
      alert("Please fill in all the required details")
    }
  })
}
// All Signup Functionality Goes Here
else if(window.location.pathname.includes("signup")) {
  const signupBtn = document.querySelector(".signup-btn");
  const signupDetails = document.querySelectorAll(".signup-form .form-group input");
  let signupInfos = {};

  signupBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // stores all the input values in an object
    signupDetails.forEach((input) => {
      signupInfos[input.id] = input.value;
    })

    // A check to see if all the sign up details are correctly filled
    if(signupInfos.name && signupInfos.email && passwordCheck(signupInfos.pwd, signupInfos.confirm_pwd)
      && signupInfos.reg_num && signupInfos.school && signupInfos.department) {
      // user details a sent to a dummy endpoints and if successful
      // it will redirect the user to the homepage after sign up.
      // in the final product the user details will be sent to the backend for use
      // to store user details and the login page will be displayed for the user to login
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(signupInfos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      if(response.ok) {
        const res_json = await response.json();
        console.log(res_json)
        setTimeout(() => {
          alert("Yay...you've signed up successfully...")
          window.location.href = "login.html";
        }, 1000);
      }
      else {
        console.log(response);
      }
    }
    else {
      alert("Please fill in all the required details")
    }
  })
}