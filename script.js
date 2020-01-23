let counter = document.querySelector('.counter');
const addCount= document.querySelector('#addbtn');
const lowerCount = document.querySelector('#lowerbtn');

let count  =   0;

addCount.addEventListener('click', increment);
lowerCount.addEventListener('click',decrement);

function increment(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
    counter.style.color = 'green';
    }
    else if(counter.innerHTML === '0'){
    counter.style.color = 'white';
    }
counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});


}
function  decrement(){
    count--;
    counter.innerHTML  = count;
    if(counter.innerHTML < '0'){
        counter.style.color = 'red';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});

}
