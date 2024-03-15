function res1(){
    ch=document.getElementById("c").value;
    d=document.getElementById("d").value;
    nb=document.getElementById("nb").value;
    document.getElementById("r").value=ch.substr(d,nb);
}
function res2(){
    ch=document.getElementById("c").value;
    ch1=document.getElementById("ch1").value;
    ch2=document.getElementById("ch2").value;
    document.getElementById("re").value=ch.replace(ch1,ch2);
}
function res3(){
    ch=document.getElementById("c").value;
    sch=document.getElementById("sch").value;
    pos=document.getElementById("pos").value;
    document.getElementById("res").value=ch.lastIndexOf(sch,pos);
}
function res4(){
    ch=document.getElementById("c").value;
    document.getElementById("resu").value=ch.length;
}
function res5(){
    ch=document.getElementById("c").value;
    document.getElementById("resul").value=String(ch);
}
function res6(){
    ch=document.getElementById("c").value;
    document.getElementById("result").value=Number(ch);
}
function res7(){
    ch=document.getElementById("c").value;
    document.getElementById("resulta").value=parseInt(ch);
}
function res8(){
    ch=document.getElementById("c").value;
    document.getElementById("resultas").value=parseFloat(ch);
}
function res9(){
    ch=document.getElementById("c").value;
    c1=document.getElementById("c1").value;
    document.getElementById("resultas1").value=ch.charAt(c1);
}
function res10(){
    ch=document.getElementById("c").value;
    sch=document.getElementById("sch").value;
    debut=document.getElementById("debut").value;
    document.getElementById("resultas2").value=ch.indexOf(sch,debut);
}
function res11(){
    ch1=document.getElementById("ch11").value;
    ch2=document.getElementById("ch22").value;
    document.getElementById("resultas3").value=ch1+ch2;
}
function res12(){
    ch=document.getElementById("c").value;
    document.getElementById("resultas4").value=ch.toUpperCase();
}
function res13(){
    ch=document.getElementById("c").value;
    document.getElementById("resultas5").value=ch.toLowerCase();
}
function res14(){
    ch=document.getElementById("c").value;
    document.getElementById("resultas6").value=ch.trim();
}