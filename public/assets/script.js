    var incoming = document.getElementById('incoming'); 
    var resolved = document.getElementById('resolved');
    var menu = document.getElementById('menu');
    var analytics = document.getElementById('analytics');
    var orders = document.getElementById('orders');

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

    function showAnalytics() {
        orders.style.display = 'none';
        analytics.style.display = 'block'
    }

    function showOrders() {
        analytics.style.display = 'none';
        orders.style.display = 'block';
    }

    $(document).ready(function() {
        $('select').material_select();
      });
     