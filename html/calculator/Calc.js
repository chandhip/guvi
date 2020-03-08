let ip = document.getElementById('t1');
class Calculator{
    constructor(){
        this.a=0;
        this.b=0;
        this.isAdd = false;
        this.isSub = false;
        this.isMul = false;
        this.isDiv = false;
    }
    add(){
        this.a = parseInt(ip.value);
        ip.value=0;
        this.isAdd=true;
        this.isSub = false;
        this.isMul = false;
        this.isDiv = false;
    }
    sub(){
        this.a = parseInt(ip.value);
        ip.value=0
        this.isSub = true;
        this.isAdd = false;
        this.isMul = false;
        this.isDiv = false;
    }
    mul(){
        this.a = parseInt(ip.value);
        ip.value = 0;
        this.isMul = true;
        this.isSub = false;
        this.isAdd = false;
        this.isDiv = false;
    }
    div(){
        this.a = parseInt(ip.value);
        ip.value = 0;
        this.isDiv = true;
        this.isSub = false;
        this.isMul = false;
        this.isAdd= false;
    }
    enter(){
        this.b = parseInt(ip.value);
        if(this.isAdd)
            ip.value = this.a+this.b;
        if(this.isSub)
            ip.value = this.a-this.b;
        if(this.isMul)
            ip.value = this.a*this.b;
        if(this.isDiv)
            ip.value = this.a/this.b;
    }
}
let cal = new Calculator();
document.getElementById('add').addEventListener("click" , ()=>cal.add());
document.getElementById('sub').addEventListener("click", ()=>cal.sub());
document.getElementById('mul').addEventListener("click", ()=>cal.mul());
document.getElementById('div').addEventListener("click", ()=>cal.div());
document.getElementById('enter').addEventListener("click", ()=>cal.enter());
