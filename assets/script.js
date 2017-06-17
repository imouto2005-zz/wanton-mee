	var incoming = document.getElementById('incoming');	
	var resolved = document.getElementById('resolved');
	var form = document.getElementById('form');

function showResolved() {
    incoming.style.display = 'none';
    resolved.style.display = 'block';
    form.style.display = 'none';
}

function showIncoming() {
    resolved.style.display = 'none';
    incoming.style.display = 'block';
    form.style.display = 'none';
}

function showForm() {
    resolved.style.display = 'none';
    incoming.style.display = 'none';
    form.style.display = 'block';
}