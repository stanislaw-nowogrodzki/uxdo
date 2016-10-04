function showPopup(event)
{
    event.preventDefault();
    document.getElementById("popup").style.display = "block";
}

function hidePopup(event)
{
    event.preventDefault();
    document.getElementById("popup").style.display = "none";
    document.getElementById("message").innerHTML = '';
    document.getElementById("popup-email").removeAttribute("style");
}