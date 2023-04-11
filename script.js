function myFunction ()  {
    var hamBar = document.getElementById("myLinks");
    if (hamBar.style.display === "flex") {
        hamBar.style.display = 'none';
    }
    else {
        hamBar.style.display = 'flex';
    }
}