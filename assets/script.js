	var incoming = document.getElementById('incoming');	
	var resolved = document.getElementById('resolved');
	var menu = document.getElementById('menu');

function showResolved() {
    incoming.style.display = 'none';
    resolved.style.display = 'block';
    menu.style.display = 'none';
}

function showIncoming() {
    resolved.style.display = 'none';
    incoming.style.display = 'block';
    menu.style.display = 'none';
}

function showForm() {
    resolved.style.display = 'none';
    incoming.style.display = 'none';
    menu.style.display = 'block';
}