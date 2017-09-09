$(document).ready(function () 
{
    $(".tab-content").hide();
    var hash = $.trim( window.location.hash);
    if ($(hash).length)
    {
        $("#lower-header a").removeClass("active");
        $('#lower-header a[href$="'+hash+'"]').addClass("active");
        $(".tab-content").hide();
        $(hash).show();
    }
    else
    {         
        $(".tab-content:first").show();
        $("#lower-header a:first").addClass("active");
    }
    $(".hidden-until-ready").show();
    /*RESIZE*/
    $(window).resize(function() {
        if($(window).width() > 500)
            $("#lower-header").show();
    });
    /*CLICKS*/
    function showSection(hash){
        $("#lower-header a").removeClass("active");
        $('#lower-header a[href$="'+hash+'"]').addClass("active");
        $(".tab-content").stop(false, true).slideUp(500);
        $(hash).stop(false, true).slideDown(500);
        document.location.hash = hash;
        $('html, body').scrollTop(0);
        return false;
    }
    $("#lower-header a").click(function()
    {
        if($(this).hasClass("active") == false)
            showSection($(this).attr("href"));
        return false;
    });
    $(".navigation-button").click(function()
    {
        var hash = $(this).attr("href");
        showSection(hash);
        return false;
    });
    $("#nav-toggle").click(function()
    {
        $(this).toggleClass("active");
        if($(this).hasClass("active"))
            $("#lower-header").stop(false, true).slideDown(300).css({'display': "flex"});
        else
            $("#lower-header").stop(false, true).slideUp(300);
        return false;
    });
});