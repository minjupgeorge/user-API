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
            const newol1 = document.createElement("ol")
         for (var i = 0; i < data.length; i++)
         {
        const newol = document.createElement("ul")
        for (var i = 0; i < data.length; i++)
         {
        const newLi= document.createElement("li");
        newLi.innerText =  data[i].name;
        const newLi1= document.createElement("li");
        newLi1.innerText =  data[i].phone;
        const newLi2= document.createElement("li");
        newLi2.innerText =  data[i].email;
        const newLi3= document.createElement("li");
        newLi3.innerText =  data[i].address.city;
        newol.append(newLi,newLi1,newLi2,newLi3) ;  
       }
         
                newol1.append(newol);
        }
        root.append(newol1)
    }
    }


