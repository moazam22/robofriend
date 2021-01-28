
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	} from './constants.js';

export const setSearchField = (text) =>({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})


export const requestRobots = (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING})
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}



//Multiple Promisess
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts'
]
Promise.all(urls.map(url=>{
  return fetch(url).then(resp=>resp.json())
})).then(array=>{
  console.log(array[0]);
  console.log(array[1]);
}).catch(()=>{
  console.log('Oopss.. Something went wrong');
})


//Async Await in ES8 alternative of Promise

async function fetchUsers()
{
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}
fetchUsers();


// ES9 


let animals= {
	lion: 15,
	tiger: 21,
	dog: 13,
	fox: 11
}
let {lion,...rest} = animals;
console.log(rest);

//rest will have tiger,dog and fox/


//Same with an array


let array = ['Apple','Oranges','Mangoes','Water Mellon'];
const print = (a,b,c,d)=>{
  console.log (a);
  console.log (b);
  console.log (c);
  console.log (d);
}
print(...array);


 





