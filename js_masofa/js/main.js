let elForm = document.querySelector(".form")
let elInput = document.querySelector(".form-input")
let elButton = document.querySelector(".form-btn")
let elPiyoda = document.querySelector(".js-strong__piyoda")
let elVelosiped = document.querySelector(".js-strong__velosiped")
let elMashina = document.querySelector(".js-strong__mashina")
let elSamalyot = document.querySelector(".js-strong__samalyot")

let tezlikpiyoda = 3.6
let tezlikvelosiped = 20.1
let tezlikmashina = 70
let tezliksamalyot = 800


elForm.addEventListener( "submit", function(evt){
evt.preventDefault();
let inputValue = +elInput.value;
let piyoda = inputValue / tezlikpiyoda;
let velosiped = inputValue / tezlikvelosiped;
let mashina = inputValue / tezlikmashina;
let samalyot = inputValue / tezliksamalyot;

let piyodaMinut = ((piyoda%1)*60).toFixed(0)
let velosipedMinut = ((velosiped%1)*60).toFixed(0)
let mashinaMinut = ((mashina%1)*60).toFixed(0)
let samalyotMinut = ((samalyot%1)*60).toFixed(0)

elPiyoda.textContent=`${(piyoda).toFixed(0)}  soat ${piyodaMinut} daqiqa`
elVelosiped.textContent=`${(velosiped).toFixed(0)}  soat ${velosipedMinut} daqiqa`
elMashina.textContent=`${(mashina).toFixed(0)}  soat ${mashinaMinut} daqiqa`
elSamalyot.textContent=`${(samalyot).toFixed(0)}  soat ${samalyotMinut} daqiqa`




})



