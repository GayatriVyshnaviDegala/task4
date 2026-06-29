
const counters=[

{id:"speed",target:88},

{id:"seoScore",target:95},

{id:"accessibility",target:92},

{id:"best",target:97}

];

counters.forEach(counter=>{

const element=document.getElementById(counter.id);

let start=0;

const interval=setInterval(()=>{

start++;

element.innerHTML=start+"%";

if(start>=counter.target){

clearInterval(interval);

}

},20);

});