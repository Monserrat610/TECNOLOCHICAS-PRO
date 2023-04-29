let app = document.getElementById('typewriter');
let typewriter = new Typewriter( app,{
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "Para la mayor parte de la historia, “Anónimo” era una mujer" <br> -Virginia Woolf' )
.pauseFor(200)
.deletChars(10)
.start();