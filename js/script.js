document.addEventListener("DOMContentLoaded", function(){
    var amount = document.querySelector(".loan__cash--amount");
    var duration = document.querySelector(".loan__cash--duration");
    var installment = document.querySelector(".loan__cash--installment");
    var amountRange = document.querySelector(".range-top");
    var durationRange = document.querySelector(".range-bottom");

    amountRange.min = 100;
    amountRange.max = 20000;
    amountRange.value = 10000;

    durationRange.min = 1;
    durationRange.max = 48;
    durationRange.value = 24;

    amountRange.addEventListener("change", function(){
        var amountValue = amountRange.value;
        amount.innerText = amountRange.value;
        installment.innerText = Math.ceil((amountRange.value/durationRange.value)*1.2) + " zł";
    });
    
    durationRange.addEventListener("change", function(){
        var months = durationRange.value;
        var text = "";
        if (months >= 12 && months < 24){
            months -= 12;
            text += "1 rok " + (months > 0 ? months + " miesiące" : "");
        }else if (months>=24){
            var years = Math.floor(months/12);
            months -= years*12;
            text += years + " lata " + (months > 0 ? months + " miesiące" : "");
        }else{
            text += months + " miesiące";
        }
        duration.innerText = text;
        installment.innerText = Math.ceil((amountRange.value/durationRange.value)*1.2) + " zł";
    });
});
