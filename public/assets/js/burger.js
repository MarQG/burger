$('document').ready(function(){
    $(".burger-buttons").on("click", function(){
        var id = $(this).data("burger-id");

        $.ajax( "api/burgers/" + id ,{
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(function(){
            location.reload();
        });
    });

    $("#new-burger-form").form({
            fields: {
                newBurger: {
                identifier: 'newBurger',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a burger'
                    }]
                }
            },onSuccess:function(e){
                e.preventDefault();
                $.ajax("api/burgers", {
                    type: "POST",
                    data: {
                        "name": $("#new-burger-name").val().trim()
                    }
                }).then(function(){
                    location.reload();
                });
            }
        });
});