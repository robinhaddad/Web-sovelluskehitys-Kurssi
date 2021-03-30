
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

for (var i=0; i < books.length; i++) {
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.innerHTML = books[i].title;
	td.id = '' + i;
	tr.appendChild(td);
	if(i==0){
		var th = document.createElement('th');
		th.innerHTML = "Name";
		table.appendChild(th);
	}
	table.appendChild(tr);
	var td = document.createElement('td');
	td.innerHTML = books[i].year;
	tr.appendChild(td);
	document.body.appendChild(table);
}

let div = document.createElement('table');
div.style.position = "absolute";
div.style.top = "30px";
div.style.left = "300px";
div.style.fontSize = "20px";


for(let i=0; i<5; i++){
	document.getElementById('' + i).addEventListener('click', function () {
		div.innerHTML = books[i].title;
		document.body.appendChild(div);
	});
}


