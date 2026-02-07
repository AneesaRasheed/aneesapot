const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

const navbar = document.getElementById('navbar');

const sticky = navbar.offsetTop;

const myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = () => myFunction();

// creating first card item i.e grid project

const projects = [
  {
    
   imageMobile: './images/messageapp.png',
    // imageDesktop: './images/messageapp.png',
   
     
  },
  {
    // closeButton: 'images/modal-close-button.svg',
    // name: 'Coincript Market',
    // description: 'LastJourneyHelper <br>v2 case study',
    imageMobile: './images/landingpage.png',

   
  },
  {
   
    imageMobile: './images/frenchapp.jpg',
  },
  {
    
    imageMobile: 'images/beforeafter.png',
  
    
  },
  {
     imageMobile: 'images/branding.png',
   
  },
  {
   
    imageMobile: 'images/linkhedinbackground.png',
     },
];

const sectionElement = document.getElementById('projects-container');
sectionElement.className = 'container-recent';

for (let i = 0; i < projects.length; i += 1) {
  const gridProject = document.createElement('div');
  gridProject.className = 'grid-project';
  sectionElement.appendChild(gridProject);
}

// Array.from(sectionElement.children).forEach((child, index) => {
//   child.innerHTML = `
//     <div class="project-image" style="background-image: url(${projects[index].imageMobile});"></div>
 
// `;
// });

Array.from(sectionElement.children).forEach((child, index) => {
  child.innerHTML = `
    <div class="project-image">
      <img src="${projects[index].imageMobile}" 
           alt="Project Image">
    </div>
  `;
});



// form validation
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const error = document.querySelector('#error-msg');

// local storage
const userName = document.querySelector('#full-name');
const userMsg = document.querySelector('#text-area');

function dataStorage() {
  const visitor = {
    Name: userName.value,
    Email: email.value,
    Message: userMsg.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

userName.addEventListener('focusout', dataStorage);
email.addEventListener('focusout', dataStorage);
userMsg.addEventListener('focusout', dataStorage);

const userDataObject = JSON.parse(localStorage.getItem('visitor'));

if (userDataObject) {
  userName.value = userDataObject.Name;
  email.value = userDataObject.Email;
  userMsg.value = userDataObject.Message;
}
error.style.visibility = 'hidden';

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    error.style.visibility = 'visible';
    error.innerHTML = 'Email must be lowercase letters!';

    setTimeout(() => {
      error.style.visibility = 'hidden';
    }, 4000);
  } else {
    error.style.visibility = 'hidden';
  }
});
 /*========= read more read less =========*/
const readMoreBtns = document.querySelectorAll(".read-more");

readMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const readMoreId = this.getAttribute("data-readmore-id");
    const moreText = document.querySelector(
      `.more-text[data-readmore-id="${readMoreId}"]`
    );
    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {
      this.textContent = "Read More";
    } else {
      this.textContent = "Read Less";
    }
  });
});
