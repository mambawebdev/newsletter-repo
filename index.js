'use strict';

const emailInput = document.querySelector(".container .left-side input");
const submitBtn = document.querySelector(".container .left-side button");
const errText = document.querySelector(".container .left-side .parag-cntr .error");
const modalBox = document.querySelector(".modal-success");
const subscibeCntr = document.querySelector(".container");
const dismissBtn = document.querySelector(".modal-success .modal-cntr .modal-btn");
const emphasisText = document.querySelector(".modal-success .modal-cntr .modal-desc .emphasis");

dismissBtn.addEventListener("click", dismiss)
submitBtn.addEventListener("click", validate);

function dismiss(e){
    e.preventDefault();
    subscibeCntr.style.transform = "scale(1)";
    modalBox.style.opacity = "0";  
    emailInput.value = "";  
};


function validate(e){
    e.preventDefault(); 
    if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
        errText.style.opacity = "100%";
        emailInput.style.backgroundColor = "var(--Dark-Slate-Grey)"
        emailInput.style.border = "3px solid var(--Pink)";
        emailInput.style.color = "var(--White)";
    }else{
        subscibeCntr.style.transform = "scale(0)";
        modalBox.style.opacity = "100%";
        emphasisText.textContent = `${emailInput.value}.`
        emailInput.value = "";  
    }

    setTimeout(() => {
        errText.style.opacity = "0";
        emailInput.style.border = "1px solid var(--Dark-Slate-Grey)"
        emailInput.style.backgroundColor = "var(--White)"
        emailInput.value = ""; 
    }, 2500);

    setTimeout(() => {
        emailInput.style.color = "var(--Black)"; 
    }, 2500);
};