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
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onClick = function(){
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML=list;
};