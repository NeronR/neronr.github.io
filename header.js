$(document).ready(function () 
{
    $(".tab-content").hide();
    var hash = $.trim( window.location.hash);
    if (hash == "#abilities" || hash == "#pricing" || hash == "#support" || hash == "#beta")
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
    /*CLICKS*/
    $("#lower-header a").click(function()
    {
        if($(this).hasClass("active"))
            return false;
        $("#lower-header a").removeClass("active");
        $(this).addClass("active");
        var currentTab = $(this).attr("href");
        $(".tab-content").stop(false, true).slideUp(500);
        $(currentTab).stop(false, true).slideDown(500);
        document.location.hash = currentTab;
        $('html, body').scrollTop(0);
        return false;
    });
    $("#up-button").click(function()
    {
        $('html, body').scrollTop(0);  
        return false;      
    });
    $(".navigation-button").click(function()
    {
        var hash = $(this).attr("href");
        $('#lower-header a[href$="'+hash+'"]').trigger('click');
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