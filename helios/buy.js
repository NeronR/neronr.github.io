$(document).ready(function () 
{
    $("#pay-methods #bank").hide();
    $(".tab-content").hide();
    var hash = $.trim( window.location.hash);
    $("#pay-link").attr("href", $(hash).attr("href"));
    $(hash).show();
    $(".hidden-until-ready").show();
    $("input[type=radio][name=pay-type").change(function(){
        $("#pay-methods .method").stop(false, true).slideUp(300);
        $("#pay-methods #" + this.value).stop(false, true).slideDown(300);
        return false;
    });
    $("#service-name").val(hash);
});