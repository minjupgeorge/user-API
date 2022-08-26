import { USERINPUT_ID } from "../../data/constants.js";
import {clearData,getuserid,displayUser } from "../components/component.js";


export const getallusers = () => {
    clearData();
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			}
		})
		.then(data =>{
            data.forEach(user =>{
            displayUser(user);})
        })
        .catch(err =>console.log('error: ' + err));
}

export const checkuserid = () => {
 {  clearData();
    const USERINPUT_ID = document.getElementById('number-input').value;
        if (USERINPUT_ID == "" )
      {
        alertmessage("Please enter something");
      } else if(isNaN(USERINPUT_ID))
      {
        alert("Please enter a valid User ID");
      }
        else if((USERINPUT_ID<=0)||(USERINPUT_ID>=11))
     {
        alert("Please enter an id between 1 and 10");
     }
       else
     {
       const user= getuserid(USERINPUT_ID);   
     }
    }
}
