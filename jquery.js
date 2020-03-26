$(function() {
    var socket = io.connect();
    var $form = $('#messForm');
    var $name = $('#name');
    var $textarea = $('#message');
    var $all_messages = $('#all_mess');


    $form.submit(function(event) {
        event.preventDefault();
        socket.emit('send mess', {mess: $textarea.val(), name: $name.val()});
        $textarea.val('');
    });

    socket.on('add mess', function (data) {
        $all_messages.append('<div><b>  '+data.name + ':  </b>' + data.mess + '</div>');
    });
});