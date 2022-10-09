let getName = prompt("Lütfen adınızı girin.")           //kullanıcıdan adını alır ve değişkene atar
let selectName = document.querySelector("#myName")      //ID'si myName olan ilk öğeyi seçer
selectName.innerHTML = `${getName}`  

function showTime(){
    const today = new Date(); 
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);

    document.getElementById(`myClock`).innerHTML =  h + ":" + m + ":" + s;
    setTimeout(showTime, 1000); 
} 

    function checkTime(i) {

        if (i<10){"0" + i };
        return i; 


    }
    showTime()
    
    








