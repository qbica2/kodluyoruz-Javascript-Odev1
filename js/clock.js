
function time() {

    var date = new Date() ;
    var saat = date.getHours() ;
    var dakika = date.getMinutes();
    var saniye = date.getSeconds();
    var gun = date.getDay();
    
    if (gun==0){
        gun="Pazar" ;
    }
    else if (gun ==1) {
        gun ="Pazartesi" ;
    }
    else if (gun==2) {
        gun = "Salı" ;
    }
    else if (gun==3) {
        gun = "Çarşamba" ;
    }
    else if (gun==4) {
        gun = "Perşembe" ;
    }
    else if (gun==5) {
        gun = "Cuma" ;
    }
    else if (gun==6) {
        gun = "Cumartesi" ;
    }
    
    saat = saat <10 ? "0"+saat : saat ;
    dakika = dakika<10 ? "0"+dakika : dakika ;
    saniye = saniye<10 ? "0"+saniye : saniye ;

    let x = document.querySelector("#myClock")
    x.innerHTML = `${saat}:${dakika}:${saniye} ${gun}`
}
setInterval(time,1000);

// kullanıcıdan adını alalım ( bu kısmı bilerek aşağıya aldım. yukarıda olduğu zaman saat sayfa yüklendikten bir saniye sonra geliyordu)
let username =prompt("Adınız nedir? ")

let c =document.querySelector("#myName")
c.innerHTML= `${username[0].toUpperCase()}${username.slice(1)}`
