let clickCount=false;
const arrtocheck=[];
const arrfortemp=[];
let countNumberOfClick=0;
let idCheck='nothing';
let verifybuttonstatus=false;
let resetbuttonstatus=false;

let addToDiv=document.getElementById("div1");



function check(val)
{
    let temp=document.getElementById(val);
   
    
    if(clickCount===false && countNumberOfClick===0)
    {
        arrfortemp.push(temp);
        clickCount=true;
        arrtocheck.push(temp.src);
        temp.style.opacity="0.5";
        idCheck=temp;
        countNumberOfClick++;

        if(resetbuttonstatus===false)
        {
            const resetButton=document.createElement("button");
            resetButton.innerHTML="reset";
            resetButton.setAttribute("type","button");
            resetButton.addEventListener("click",reset);
            resetButton.setAttribute("id","reset");
            addToDiv.appendChild(resetButton);
            resetbuttonstatus=true;
        }
        
        
    }
    else
    {
        if(idCheck!==temp && countNumberOfClick<=1)
        {
            arrfortemp.push(temp);
            arrtocheck.push(temp.src);
            temp.style.opacity="0.5";
            countNumberOfClick++;
            
            if(verifybuttonstatus===false)
            {
                const verifyButton=document.createElement("button");
                verifyButton.innerHTML="Verify";
                verifyButton.setAttribute("type","button");
                verifyButton.addEventListener("click",verify);
                verifyButton.setAttribute("id","btn");
                addToDiv.appendChild(verifyButton);
                verifybuttonstatus=true;
            }
        }

    }
    
    
}

function verify()
{
   
    if(arrtocheck.length>=2)
    {
        let firstSelection=arrtocheck.pop();
        let secondSelection=arrtocheck.pop();

        const msg=document.createElement("p");
        msg.setAttribute("id","para");
       

        if(firstSelection===secondSelection)
        {
            msg.innerText="You are a human. Congratulations!";
            addToDiv.appendChild(msg);

        }
        else
        {
            msg.innerText="We can't verify you as a human. You selected the non-identical tiles."
            addToDiv.appendChild(msg);
        }

         
        const tobedel=document.getElementById("btn");
        tobedel.parentNode.removeChild(tobedel);
    }
}

function humanVerification()
{
    let arr=["1","2","3","4","5"];

    let arr2=[];
    
    let i=1;
    
    do
    {
       const randompic=Math.floor(Math.random()*arr.length);
       let r=arr[randompic];

       if(r!=-1)
       {
           const elem=document.getElementById(r);
           arr2.push(elem.src);
           
           arr[randompic]=-1;
           i=i+1;
       }

    }while(i<6)



    for(let j=1;j<6;j++)
    {
        
        const element1=document.getElementById(j);
        element1.src=arr2[j-1];
        
    }
    
   

    const arrlen=["1","2","3","4","5"];
    
    const random=Math.floor(Math.random()*arrlen.length);
    const elem=document.getElementById(arrlen[random]);
    const selected=document.getElementById("6");
    selected.src=elem.src;

    selected.className=elem.className;


}


function reset()
{

    const firstTemp=arrfortemp.pop();
    const secondTemp=arrfortemp.pop();

    clickCount=false;
    countNumberOfClick=0;
    idCheck='nothing';

    firstTemp.style.opacity="1";
    secondTemp.style.opacity="1";
    if(verifybuttonstatus===true)
    {
        verifybuttonstatus=false;
        

        const tobedel2=document.getElementById("para");
        tobedel2.parentNode.removeChild(tobedel2);


    }
    
    while(arrtocheck.length>0 )
    {
        arrtocheck.pop();
        
    }

   humanVerification();
    
    
}