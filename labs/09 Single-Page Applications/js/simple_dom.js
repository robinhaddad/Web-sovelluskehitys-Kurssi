//console.log('page loaded');

console.log(document);


	// get a DOM object representing a form field.
	document.querySelector('#userForm input[type="text"]').onkeypress = function (){
		let name = document.querySelector('#userForm input[type="text"]').value;
		document.querySelector('#summary h1').innerHTML = name;
	}

	document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	let email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p1').innerHTML = email;
	}

	document.querySelector('#userForm input[type="password"]').onkeypress = function (){
	let data = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary p2').innerHTML = data;
}
