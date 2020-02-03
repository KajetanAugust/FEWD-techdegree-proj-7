
const closingButton = document.querySelector('.x-button');
const alertDiv = document.querySelector('.alert');


const bellIcon = document.querySelector('.bell-icon');
const notifDropdown = document.querySelector('.notification-dropdown');
const notifX = document.querySelectorAll('.x-button-notif');
const bellBadge = document.querySelector('.badge');
const notXLength = notifX.length;
let notifCount = 0;

console.log(bellBadge);

closingButton.addEventListener('click', () =>{
    alertDiv.style.display = 'none';
})

bellIcon.addEventListener('click', () =>{
    notifDropdown.style.display = 'flex';
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

// document.addEventListener('click', (e) =>{
//     const notifAttribute = notifDropdown.getAttribute('style');
//     if(notifAttribute === '' && e.target === bellIcon) {
//         notifDropdown.style.display = 'flex';
//     } else if(notifAttribute === 'display: flex;' && e.target != notifDropdown){
//         notifDropdown.style.display = 'none';
//     }
// })


