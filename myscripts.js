function fatty() {
    var mytextbox = document.getElementById("mytextbox");

var textValue = mytextbox.value;
var message;

        if(textValue == ''){
            message = "YO! type sumtin mein!";
        }else{
            message = textValue;
        }

    alert(message);
    console.log("ya ooooooo");
    
}

