
export const clearData = () => {
    const root = document.getElementById('root')
    while (root.lastChild) {
        root.removeChild(root.lastChild);
      }
    }

export const  getuserid = (user_id) =>
{  
    clearData()
    console.log("userid",user_id);
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
   
};

export const displayUser= (user) =>
{
		const container = document.createElement('div');
		container.classList.add('user');
		const hEl = document.createElement('h2');
		hEl.innerHTML = `${user.id}: ${user.name}`;
		const pEl = document.createElement('p');
		pEl.innerHTML = `Username:${user.username}<br>Email: ${user.email}<br>Phone: ${user.phone}
        <br>Company: ${user.company.name}<br>Website: <a href="url">${user.website}</a><br>City: ${user.address.city}<br>Zipcode: ${user.address.zipcode}`;
		container.append(hEl, pEl);
		root.append(container);
} 