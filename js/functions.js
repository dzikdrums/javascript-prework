function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printResult(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}

function printMatchCount(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('matchCount').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function clearResults(){
	document.getElementById('result').innerHTML = '';
}

function clearMatchCount(){
	document.getElementById('matchCount').innerHTML = '';
}
