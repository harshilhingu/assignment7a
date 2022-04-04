$(function () {   

    $.fn.customPhotoViewer = function () {
        var selectedObjects = this;
        return {
            show: function () {
                return $('#photo-viewer');
            }
        };
    }

});

$(function () {
    $('.thumbnail-anchor').click(function (e) {
        e.preventDefault();
        var href = e.target.parentNode.href;
        var hrefvalue = href.split('/');
        var photoframe = hrefvalue[hrefvalue.length - 1];
        $(".photo-box").find("img").remove();
        $(".photo-box").append("<img id='spinner'  src='img/load.gif' style='width: 800px!important; height: 450px!important; border: 1px solid black' alt=''>")
        setTimeout(function () {
            $("#spinner").remove();
            $(".photo-box").append('<img src="' + 'img/' + photoframe + '">');
            $("a.photo-box").attr('href', 'img/' + photoframe);
            $('a.photo-box').removeClass('is-loading');
        }, 2000)

    });
});