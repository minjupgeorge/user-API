const root = document.getElementById('root');
const element = document.getElementById("user-input");
element.addEventListener("click", myFunction);

function cleardata(){
while (root.lastChild) {
    root.removeChild(root.lastChild);
  }
}
function myFunction() {
    cleardata();
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(response.status === 200)
        {
            return response.json();
        }
      })
    .then(data =>appendData(data))
    .catch(err =>console.log('error: ' + err));
}
    function appendData(data) 
        {
            console.log("appenddata",data)
            //const newol1 = document.createElement("ol")
         //for (var i = 0; i < data.length; i++)
         //{
      /*  const newol = document.createElement("ul")
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
         
               // newol1.append(newol);
        
        root.append(newol)
    }
    */

    data.forEach((user) =>{
        displayUser(user);
    })
}
function displayUser(user)
{
		const container = document.createElement('div');
		container.classList.add('user');
		const hEl = document.createElement('h2');
		hEl.innerHTML = `${user.id}: ${user.name}`;
		const pEl = document.createElement('p');
		pEl.innerHTML = `Username:${user.username}<br>Email: ${user.email}<br>Phone: ${user.phone}
        <br>Company: ${user.company.name}<br>Website: <a href="url">${user.website}</a><br>City: ${user.address.city}<br>Zipcode: ${user.address.zipcode}`;
		container.append(hEl, pEl);
		root.append(container);} 
   
 const element_ID = document.getElementById("input-id");
 element_ID.addEventListener("click", checkid);
 function checkid ()
 {  cleardata();
    const user_id = document.getElementById('number-input').value;
    if (user_id == "" ) {
        alert("Please enter something");
      } else if(isNaN(user_id)) {
        alert("Please enter a valid User ID");
      } else {
       const user= getUser(user_id);
//console.log("userid to display",user);    
  //     appendData(user);
      }
 }
    function getUser (user_id)
    { console.log("userid",user_id);
        fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        .then( res => 
        {
            // CHECK res STATUS
            if ( res.status === 200)
            {
                return res.json();
            }
            else
            {
                return false;
            }
            
        })
        .then(data => displayUser(data))
        .catch( err =>  console.error(err)); 
       // console.log("userinsidegetuserid",user);
        //return user;
    }
