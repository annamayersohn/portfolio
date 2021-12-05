
function menu() {
    var x=document.querySelector("#nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


$(document).ready(function(){
    $(".source").hover(function(){
        $(".source").scrollTop(0);
        }, function(){
        $(".source").scrollTop(0);
    });
});

$(document).ready(function(){
    $(".source").focus(function(){
        $(".source").scrollTop(0);
        }, function(){
        $(".source").scrollTop(0);
    });
});


var mw = document.querySelector(".modal-word");

if (mw) {
    mw.addEventListener("click", function() {
        document.querySelector(".modal-container").style.display = "block"
    });
    
    document.querySelector(".close").addEventListener("click", function() {
        document.querySelector(".modal-container").style.display = "none"
    });
}
