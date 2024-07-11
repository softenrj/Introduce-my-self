let text=document.querySelector(".title-text p");
let blinker=document.querySelector(".txt_eff span")
let a=["programmer.","developer.. "];
window.onload=()=>{
    function text_forword(i,j){
        if(j<a[i].length){
            blinker.classList.remove("blink");
            text.innerHTML+=a[i][j];
            setTimeout(()=>{
                text_forword(i,j+1);
            },100);
        }
        else{
            blinker.classList.add("blink");
            setTimeout(()=>{
                text_backword(i,j);
            },2000);
        } 
    }
    function text_backword(i,j){
        if(j>0){
            blinker.classList.remove("blink");
            text.innerHTML=text.innerHTML.slice(0,-1);
            setTimeout(()=>{
                text_backword(i,j-1);
            },100);
        }
        else{
            blinker.classList.add("blink");
            i=-(i-1);
            setTimeout(()=>{
                text_forword(i,0);
            },1000);
        }
    }
    text_forword(0,0);
};
