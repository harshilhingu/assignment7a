$(function () {   

    $.fn.photoViewer = function () {
        var selectedObjects = this;
        return {
            show: function () {
                return $('#photo-viewer');
            }
        };
    }


    $('#photo-viewer').photoViewer().show().on('click', 'photo-box', function (e) {
        e.preventDefault();
        console.log("test", this);
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto',
            border: '1px solid black',
        });

        var modal = new Modal();
        modal.open({
            content: $content,
            width: 800,
            height: 450
        });
    });


});

$(function () {
    $('.thumbnail-anchor active').click(function (e) {
        e.preventDefault();
        var href = e.target.parentNode.href;
        var hrefvalue = href.split('/')
        var photoframe = hrefvalue[hrefvalue.length - 1]
        $(".photo-box").find("img").remove();
        $(".photo-box").append("<img id='spinner'  src='img/load.gif' style='width: 800px!important; height: 450px!important; border: 1px solid black' alt=''>")
        setTimeout(function () {
            $("#spinner").remove();
            $(".photo-box").append('<img src="' + `img/${photo-box}` + '">');
            $("a.photo-box").attr('href', `img/${photo-box}`);
        }, 2000)

    });


});