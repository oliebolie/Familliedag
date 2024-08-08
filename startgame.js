

document.getElementById('startgame').addEventListener('click', function(){
    setCookie("Startingtime", new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), 1)
    setCookie("NextLocation", "51.58096516472835-4.784654191057734", 1)
    

})

