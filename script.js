function print(){
    for(var i=0;i <arguments.length; i++){
        console.log(arguments[i]+" ");
    }
}

window.onload = function(){
    
    var count = 3;

    // random number
    var randomNumberButton = document.getElementById("generate-random-number");
    randomNumberButton.addEventListener("click",function(){
        var randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
        document.getElementById("random-number-input").value = randomNumber;
        document.getElementById("random-number-submit").value = "";
        hideNotify();
    })

    // entering the number 
    var btnClass = document.getElementsByClassName("button");
    for(var i=0; i<btnClass.length; i++){
        btnClass[i].addEventListener("click",function(){
            var txt = this.innerText;
            
            if(txt>="0" && txt<="9"){
                document.getElementById("random-number-submit").value += txt;
            }
            else if(txt == "<"){
                var newNumber = document.getElementById("random-number-submit").value.slice(0, -1);
                document.getElementById("random-number-submit").value = newNumber;
            }
            else if(txt == "C"){
                document.getElementById("random-number-submit").value = "";
            }
            else{
                
            }
            print(document.getElementById("random-number-submit").value);
            hideNotify();
        })
    }

    // submit Button
    var submitButton = document.getElementById("id-submit");
    submitButton.addEventListener("click",function(){
        hideNotify() // clear notify before
        count--; //"count" declared on top
        var originalValue = document.getElementById("random-number-input").value;
        var submitValue = document.getElementById("random-number-submit").value;
        
        if(originalValue =="" || submitValue==""){
            notify("empty")
        }
        else if( submitValue == originalValue){
            notify("right");
            count=3;
        }else{
            notify("wrong")
        }
        // handling times of trying , "count" declared on top
        
        if(count>=0){
            document.getElementById("id-left").innerText = count+" try left";
        }
        
    })

    // display notify 
    function notify(id){
        var id = document.getElementById(id);
        id.style.display = "block";
    }

    // hide notify
    function hideNotify(){
        var notify = document.querySelectorAll(".notify-section .notify");
        notify.forEach( (item) => { item.style.display = "none"; } )
    }
}
