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

        function makeRequest () {
                $.get('https://desolate-peak-93885.herokuapp.com/api/update_orders', function(data) {
                    var parsed = JSON.parse(data)
                    $('#tbody').empty()
                    // console.log(parsed.fatty['toppings'])
                    Object.keys(parsed).forEach(function(key) {
                        var tr = "<tr><td>" + key + "</td><td>" 
                                    + parsed[key]['contact'] + "</td><td>" 
                                    + parsed[key]['time'] + "</td><td>"
                                    + parsed[key]['order_details'] + "</td><td>" 
                                    + parsed[key]['toppings'] + "</td><td>"
                                    + parsed[key]['size'] + "</td><td>"
                                    + parsed[key]['price'] + "</td><td>"
                                    + parsed[key]['quantity'] + "</td><td>"
                                    + '$' + (parseInt(parsed[key]['price'].replace('$','')) * parseInt(parsed[key]['quantity'])) + '</td></tr>'
                        console.log(tr)
                        $('#tbody').append(tr)
                    });
            })
        }
        
        setInterval(makeRequest, 3000)

    });
     