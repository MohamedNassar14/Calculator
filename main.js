const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const themeSwitch = document.getElementById('theme-switch');

//Get data-key from button to display 
buttons.forEach((button)=> 
{
    button.addEventListener('click', (e)=> 
    {
        let value = e.target.getAttribute('data-key');
        display.value += value;
    })
})
//Equality to evaluate the operation
equal.addEventListener('click', ()=> 
{
    (display.value === '')? display.value = '' : display.value = eval(display.value);
})
//Clear the calculator
clear.addEventListener('click', ()=> 
{
    display.value = '';
})
//Backspace to delete the recent entry value
backspace.addEventListener('click', ()=> 
{
    display.value = display.value.toString().slice(0, -1);
})
//Switch the theme
themeSwitch.addEventListener('click', ()=>
{
    document.body.classList.toggle('light-mode');
})


