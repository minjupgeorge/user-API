const root = document.getElementById('root');
const element = document.getElementById("user-input");
element.addEventListener("click", myFunction);

function myFunction() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    
    function appendData(data) 
    {
        const newol = document.createElement("ol")
        for (var i = 0; i < data.length; i++) {
        const newLi= document.createElement("li");
        newLi.innerText =  data[i].name;
         
        newol.appendChild(newLi)
         }
        
        
        root.append(newol);
    }
}

