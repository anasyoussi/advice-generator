
const button = document.querySelector('.card__btn--btn');
const adviceText = document.querySelector('.card__advice__text');
const adv_id = document.querySelector('.card__id__number');

button.addEventListener('click', function(e){
    e.preventDefault();
     
    const advice = fetch('https://api.adviceslip.com/advice')
    .then( advice => {
        return advice.json();
    })
    .then( advice => { 
        adviceText.innerText = advice.slip.advice;
        adv_id.innerText = "Advice #"+advice.slip.id; 
    })
    .catch( err => {
        console.log(err);
    }) ;
})

