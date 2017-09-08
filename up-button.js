$(document).ready(function () 
{
    $("#up-button").click(function()
    {
        $('html, body').scrollTop(0);  
        return false;      
    });
});