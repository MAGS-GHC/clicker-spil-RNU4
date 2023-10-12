var money = 0;
var cmoney = 1;
var autoclick_lvl = 0;
var autoclick_dmg = 0;





function click_cookie(){
    console.log(money)
    document.getElementById("money").innerText = "money : " + (++money);
}

function auto_buy(){
    if (money>=(autoclick_lvl*autoclick_lvl+50)){
        money-=(autoclick_lvl*autoclick_lvl+50)
        autoclick_lvl++;
        document.getElementById("levelup").innerText = "Level up : "+(autoclick_lvl*autoclick_lvl+50)+"$";
    }
}


var intid = window.setInterval(function(){
    if (autoclick_lvl>0){
        money+=autoclick_lvl;
        document.getElementById("money").innerText = "money : " + money;
    }

  }, 100);


  var intid2 = window.setInterval(function(){
    if (money>cmoney*cmoney*cmoney){

        document.getElementById("achievements").innerHTML += "<p> Wow you have earned more then "+cmoney*cmoney*cmoney+" cookies</p>";
        cmoney++;
    }

  }, 100);