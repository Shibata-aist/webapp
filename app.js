$("#webapp").click(function(){
    const inputTodo = $("input").val();
    $("#weblist").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});