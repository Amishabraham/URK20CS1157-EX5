function q1(){
    const sentence=document.getElementById("t1").value;
    const words=sentence.split(" ");
    let sLen=words[0].length, lLen=words[0].length;
    let sIndex=0, lIndex=0;
    words.forEach((word,index)=>{
        if(word.length<sLen){
            sLen=word.length;
            sIndex=index
        }
        if(word.length>lLen){
            lLen=word.length;
            lIndex=index
        }
    })
    document.getElementById("result1").innerHTML="Longest Word: "+words[lIndex]+"<br><br>"+" Shortest Word: "+words[sIndex];
}

function q2(){
    const h=parseFloat(document.getElementById("t2").value);
    const w=parseFloat(document.getElementById("t3").value);    
    const bmi=(w)/(h*h);        
    if(bmi<18)
        document.getElementById("result2").innerHTML="You are Underweight!";
    else if(bmi>=18 && bmi<=25)
        document.getElementById("result2").innerHTML="You are Normal!";
    else if(bmi>25 && bmi<=30)
        document.getElementById("result2").innerHTML="You are Overweight!";
    else if(bmi>30)
        document.getElementById("result2").innerHTML="Sorry, you are Obese!";
}

function q3() {   
    var r = parseInt(document.getElementById("rows").value);
    var c = parseInt(document.getElementById("cols").value);
    var l = ["https://images.hindustantimes.com/img/2021/06/02/1600x900/9a156550-c367-11eb-9d53-2d5cae187b44_1622619423185.jpg", "https://images.hindustantimes.com/img/2021/06/02/1600x900/9a156550-c367-11eb-9d53-2d5cae187b44_1622619423185.jpg"];
    var garden = document.getElementById("garden");
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            var fruit = Math.floor(Math.random() * 2);
            var img = '<img src=' + l[fruit] + ' width = "150px" height ="150px"></img>';
            garden.innerHTML += img;
        }
        garden.innerHTML += "<br>";
    }
}


function q4(){
    const from= document.getElementById("from").value;
    const to= document.getElementById("to").value;
    let value=parseFloat(document.getElementById("value").value);
    if(from=="INR" && to=="USD"){
        value=value*0.013;
    }
    else if(from=="USD" && to=="INR"){
        value=value*79.71;
    }
    else
        value="Choose Properly!"
    if(value=="Choose Properly!")
        document.getElementById("convertedValue").innerHTML=value;
    else
        document.getElementById("convertedValue").innerHTML="Equivalent "+to+" value is "+value.toFixed(2);
}

let headCount=0,tailCount=0;
function q5(){
    const idx=Math.floor(Math.random() * 2);
    const img=["https://i.postimg.cc/wv58jZNW/Head.png","https://i.postimg.cc/05f1RgPj/Tail.png"]    
    if(idx==0)
        headCount+=1;
    else
        tailCount+=1;
    document.getElementById("coin").innerHTML="<img src="+img[idx]+"height=150 width=150"+">"
    document.getElementById("count").innerHTML="Head Count: "+headCount+"<br>"+"Tail Count: "+tailCount;
}

function q6(){
    const cakeType=document.getElementById("cake").value;
    const tip=parseInt(document.getElementById("tip").value);
    const tax=9;
    let tipCost,taxCost,totalCost;
    if(cakeType=="Small"){
        cakeCost=100;
        taxCost=(cakeCost*(tax/100));
        tipCost=parseFloat(((cakeCost+taxCost)*(tip/100)).toFixed(2));
        totalCost=cakeCost+taxCost+tipCost;
    }
    else if(cakeType=="Medium"){
        cakeCost=200;
        taxCost=(cakeCost*(tax/100));
        tipCost=parseFloat(((cakeCost+taxCost)*(tip/100)).toFixed(2));
        totalCost=cakeCost+taxCost+tipCost;

    }
    else if(cakeType=="Large"){
        cakeCost=400;
        taxCost=(cakeCost*(tax/100));
        tipCost=parseFloat(((cakeCost+taxCost)*(tip/100)).toFixed(2));
        totalCost=cakeCost+taxCost+tipCost;
    }

    document.getElementById("cost").innerHTML="Cake Cost: "+cakeCost+"<br>"+"Tax Cost: "+taxCost+"<br>"+"Tip Cost: "+tipCost+"<br><br>"+"Total Cost: "+totalCost;
}
