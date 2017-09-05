$(document).ready(function(){
    $(".dropdown-header").click(function()
    {
        $(this).children(".dropdown-arrow").toggleClass("dropdown-arrow-rotate");
        if($(this).children(".dropdown-arrow").hasClass("dropdown-arrow-rotate"))
            $(this).siblings(".dropdown-content").stop(false, true).slideDown(300);
        else
            $(this).siblings(".dropdown-content").stop(false, true).slideUp(300);
        return false;
    });  
});