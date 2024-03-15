function f1(){
    d=document.getElementById("newdate").value=new Date()
    a=document.getElementById("year").value=d.getFullYear()
    b=document.getElementById("month").value=d.getMonth()
    c=document.getElementById("date").value=d.getDate()
    h=("0"+c)
    k=h.substr(-2)
    f=("0"+(b+1))
    m=f.substr(-2)
    document.getElementById("forme").value=k+"/"+m+"/"+a

}
function f2(){
    d=new Date()
    document.getElementById ("inner1" ).innerHTML=d
    d.setDate(3)
    d.setMonth(11)
    d.setFullYear(2015)
    document.getElementById ("inner2" ).innerHTML=d
}

function f3(){
    x=document.getElementById ( "myselect").value
    document.getElementById ("deno" ).innerHTML=(x+"  "+"is gay")
}
