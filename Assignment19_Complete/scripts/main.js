$(document).ready(function () {

    //List Titlesy
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.get(appendUrl, function (response) {
        console.log(response);
        var ul = $('#append');

        for (var i = 0; i < response.length; i++) {
            var post = response[i];
            var li = ' <li>Index: ' + (i + 1) + ' Title: ' + post.title + '</li>';
            ul.append(li);
        }
    });


    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    $.get(prependUrl, function (response) {
        var ul = $('#prepend');

        for (var i = 0; i < response.length; i++) {
            var post = response[i];
            var li = ' <li>Index: ' + (i + 1) + ' Title: ' + post.title + '</li>';
            ul.prepend(li);
        }
    });


});