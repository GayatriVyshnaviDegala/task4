

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section,.card,.timeline-item").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="all .8s ease";

observer.observe(item);

});