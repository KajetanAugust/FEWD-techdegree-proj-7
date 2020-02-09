
const closingButton = document.querySelector('.x-button');
const alertDiv = document.querySelector('.alert');


const bellIcon = document.querySelector('.bell-icon');
const notifDropdown = document.querySelector('#notification-dropdown');
const notifChild = document.querySelectorAll('#notification-dropdown div');
const notifP = document.querySelectorAll('#notification-dropdown div p');
const notifX = document.querySelectorAll('.x-button-notif');
const bellBadge = document.querySelector('.badge');
const notXLength = notifX.length;
let notifCount = 0;

// FORM SELECTORS

const formName = document.querySelector('.contact-form input');
const formText = document.querySelector('.contact-form textarea');
const formButton = document.querySelector('.contact-form button');
const formDiv = document.querySelector('.contact-form');
const formOverlay = document.querySelector('.overlay');
const formOverlayButton = document.querySelector('.overlay button');

//SETTING LOCAL STORAGE VALUE

const settingsNotifSwitch = document.querySelector('.notif-switch');
const settingsPublicSwitch = document.querySelector('.public-switch');
const settingsTimeZone = document.querySelector('.settings-buttons select');

closingButton.addEventListener('click', () =>{
    alertDiv.style.display = 'none';
})

bellIcon.addEventListener('click', () =>{
    notifDropdown.style.display = 'flex';
    notifDropdown.className = "visible";
    for(let i=0; i<notifChild.length; i++){
        notifChild[i].classList.add("visible");
        notifP[i].classList.add("visible");
        notifX[i].classList.add("visible");
    }
})


for(let i=0; i<3; i++) {
    notifX[i].addEventListener('click', (e) =>{
        e.target.parentNode.style.display = 'none';
        notifCount++;
        if(notifCount === notifX.length){
            bellBadge.style.display = 'none';
        }
    })
}

    document.addEventListener('click', (e) =>{
        const clicked = e.target.className;
        if(clicked.includes('visible') != true){
            notifDropdown.className = 'hidden';
            notifDropdown.style.display = 'none';
            
            for(let i=0; i<notifChild.length; i++){
                notifChild[i].classList.remove("visible");
                notifP[i].classList.remove("visible");
                notifX[i].classList.remove("visible");
            }
        }
    })

    //EVENT LISTENER FOR FORM VALIDATION

    formButton.addEventListener('click', (e) => {
        if(formName.value.length === 0 || formText.value.length === 0){
            e.preventDefault()
            if(formName.value.length === 0){
                formName.setAttribute('placeholder', 'Please fill this field!')
                formName.classList.add('fail')
                formName.style.backgroundColor = 'rgba(249, 124, 124, 0.5)'
            }
            if(formText.value.length === 0){
                formText.setAttribute('placeholder', 'Please fill this field!')
                formText.classList.add('fail')
                formText.style.backgroundColor = 'rgba(249, 124, 124, 0.5)'
            }
        }else {
            sessionStorage.setItem('message', 'sent');
        }
    })

    //CONFIRMATION DISPLAY

    let formValidation = sessionStorage.getItem('message')
    if(formValidation === 'sent') {
        formOverlay.style.display = 'flex';
        formDiv.style.display = 'none';
    }

    //CONFIRMATION CLOSING

    formOverlayButton.addEventListener('click', () => {
        formOverlay.style.display = 'none';
        formDiv.style.display = 'flex';
        sessionStorage.setItem('message','notSend');
    })
    

    //SETTINGS SAVING

    