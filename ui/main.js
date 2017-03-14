    
    // counter
    var button = document.getElementById('counter');
    
    button.onclick = function(){
        //Create request to the counter endpoint
        var request = new XMLHttpRequest();
        
        //Capture Response and Store it a variable
        request.onreadystatechange = function(){
            if(request.readyState === XMLHttpRequest.DONE){
                //take some action
                if(request.status === 200){
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
            }
            //not done yet
        };
        //make request
         request.open('GET', 'http://http://developerrsam.imad.hasura-app.io/counter', true);
         request.send(null);
         
       
    };
    
    //Submit name
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var submit =  document.getElementById('submit_btn');
    submit.onclick =  function(){
        var names = {"name1", "name2", "name3"};
        var list = "";
        for(var i=0;i<names.length;i++){
            list += '<li>' + names[i]+'</li>';
            
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
    };