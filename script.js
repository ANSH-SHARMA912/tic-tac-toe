var turn0 = true;
var button=document.querySelectorAll(".box");
const winPatterns = [
    [0, 1, 2],
    [0,3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
     [3, 4, 5],
    [6, 7, 8],
    ];

var stop=false;
var winstatement=document.querySelector(".winner");

    button.forEach((box) => 
        {
        box.addEventListener("click",()=>{
            
            if(box.innerText=="")
                {
                    if(turn0)
                    {
                        box.innerText="x";
                        turn0=false;
            
                    }
                    else
                    {
                        box.innerText="o";
                        turn0=true;
                    }
                }
                checkwin();
                if(stop)
                {
                    for(var box1 of button)
                    {
                        box1.disabled=true;
                    }
                }
                checkdraw();

        })
    });
    

    const checkwin=()=>{
        for(var pattern of winPatterns)
        {
            if(button[pattern[0]].innerText==button[pattern[1]].innerText && button[pattern[2]].innerText==button[pattern[1]].innerText&&button[pattern[0]].innerText!=""&&button[pattern[1]].innerText!=""&&button[pattern[2]].innerText!="")
            {
                winstatement.innerText="winner is "+button[pattern[0]].innerText;
                stop=true;
            }
        }

    }

    var reset=document.querySelector(".reset");
    reset.addEventListener("click",()=>{
        for(var but of button)
        {
            but.innerText="";
            
            but.disabled=false;
        }
        winstatement.innerText="";
        stop=false;
    })
var f=0;
    const checkdraw=()=>{
        for(var draw of button)
            {
                if(draw.innerText!=""){
                    f=f+1;
                }
            }
            if(f==9)
            {
                winstatement.innerText="draw";
            }
    }