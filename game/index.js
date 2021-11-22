document.addEventListener('keydown', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
    console.log(key);

    if(key == "a")
    {
     $("#obj1").css("left","2px");
    }
});

