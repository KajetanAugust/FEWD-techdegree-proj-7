
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