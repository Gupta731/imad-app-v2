//counter code
var button = document.getElementById('counter');

button.onClick = function(){
    var request = new XMLHttpRequest();
    request.onreadystateChange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //Take some action
            if(requst.status===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        
    };
   //make a request
   request.open('GET',"http://cloud.imad.hasura-app.io/counter", true);
   request.send(null);
};