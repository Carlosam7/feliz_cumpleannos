const titulo = document.querySelector('.reproductor h2');
const artista = document.querySelector('.reproductor p');
const cancion = document.querySelector('.reproductor audio');

const iconoControls = document.querySelector('.play img');

const progreso = document.getElementById('progreso');
const btnAnterior = document.querySelector('.controles button.atras');
const btnSiguiente = document.querySelector('.controles button.adelante');
const btnPlay = document.querySelector('.reproductor button.play');

const canciones = [
    {
        titulo: 'Tanti Auguri a te',
        artista: '---',
        src: '../../music/Tanti Auguri Buon Compleanno.mp3'
    },
    {
        titulo: 'Apocalypse',
        artista: 'Cigarettes After Sex',
        src: '../../music/Apocalypse - Cigarettes After Sex.mp3'
    },
    {
        titulo: 'Circles',
        artista: 'Post Malone',
        src: '../../music/Post Malone - Circles.mp3'
    },
    {
        titulo: 'Falling in Love',
        artista: 'Cigarettes After Sex',
        src: '../../music/Cigarettes After Sex - Falling In Love.mp3'
    },
    {
        titulo: 'Guy For That',
        artista: 'Post Malone',
        src: '../../music/Post Malone - Guy For That (Lyric Video) ft. Luke Combs.mp3'
    },
    {
        titulo: 'Cry',
        artista: 'Cigarettes After Sex',
        src: '../../music/Cry - Cigarettes After Sex.mp3'
    },
    {
        titulo: 'Rockstar',
        artista: 'Post Malone',
        src: '../../music/Post Malone - rockstar.mp3'
    },
    {
        titulo: 'K.',
        artista: 'Cigarettes After Sex',
        src: '../../music/K. - Cigarettes After Sex.mp3'
    },
    {
        titulo: 'I Had Some Help',
        artista: 'Post Malone - ft. Morgan Wallen',
        src: '../../music/Post Malone ft. Morgan Wallen - I Had Some Help (Official Lyric Video).mp3'
    },
    {
        titulo: 'Sunsetz',
        artista: 'Cigarettes After Sex',
        src: '../../music/Sunsetz - Cigarettes After Sex.mp3'
    },
    {
        titulo: 'Sunflower',
        artista: 'Post Malone & Swae Lee',
        src: '../../music/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse) (Official Video).mp3'
    },
];

let cancionActual = 0;
function cargarCancion() {
    const cancionSeleccionada = canciones[cancionActual];
    titulo.textContent = cancionSeleccionada.titulo;
    artista.textContent = cancionSeleccionada.artista;
    cancion.src = cancionSeleccionada.src;
    cancion.addEventListener('loadeddata', function(){});
};


btnAnterior.addEventListener('click', anteriorCancion);
    
function anteriorCancion() {   
    if (cancionActual > 0) {
        cancionActual--;
        cargarCancion(); // Cargar la canción anterior
        playCancion();
    }else {
        cancionActual = canciones.length - 1; // Volver al final de la lista
        cargarCancion(); // Cargar la última canción
        playCancion();
    }
};

btnSiguiente.addEventListener('click', siguienteCancion);
    
function siguienteCancion() {
    if (cancionActual < canciones.length - 1) {
        cancionActual++;
        cargarCancion(); // Cargar la siguiente canción
        playCancion();
    }else{
        cancionActual = 0; // Volver al inicio de la lista
        cargarCancion(); // Cargar la primera canción
        playCancion();
    }
};

btnPlay.addEventListener('click', playCancion) 

function playCancion() {
    if (cancion.paused) {
        cancion.play();
        // cambiar el icono de play a pause
        iconoControls.src = 'https://img.icons8.com/ios-glyphs/30/pause--v1.png';
    } else {
        cancion.pause();
        iconoControls.src = 'https://img.icons8.com/sf-black-filled/64/play.png';
    }
};

cancion.addEventListener('loadedmetadata', function() {
    progreso.max = cancion.duration; // Establecer el máximo del progreso al tiempo total de la canción
});

cancion.addEventListener('timeupdate', function() {
    if (cancion.ended) {
        siguienteCancion();
    }
    progreso.value = cancion.currentTime; // Actualizar el valor del progreso al tiempo actual de la canción
});

progreso.addEventListener('input', function() {
    cancion.currentTime = progreso.value;
});

cargarCancion();