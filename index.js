let lightbulb = document.getElementById('lightbulb');
let title = document.getElementById('title');
let darkmode = false;
let themes = {
    // name: ['bg', 'scheme1', 'scheme2', 'scheme3']
    light: ['white', 'black', 'gray', 'rgba(0, 0, 0, 0.2)'],
    dark: ['black', 'white', 'gray', 'rgba(255, 255, 255, 0.2)'],
}

lightbulb.addEventListener('click', () => { clicked(); });

function clicked() {
    if(darkmode) {
        title.innerHTML = 'LIGTHMODE';
        document.documentElement.style.setProperty('--bg', themes.light[0]);
        document.documentElement.style.setProperty('--scheme1', themes.light[1]);
        document.documentElement.style.setProperty('--scheme2', themes.light[2]);
        document.documentElement.style.setProperty('--scheme3', themes.light[3]);
    }
    if(!darkmode) {
        title.innerHTML = 'DARKMODE';
        document.documentElement.style.setProperty('--bg', themes.dark[0]);
        document.documentElement.style.setProperty('--scheme1', themes.dark[1]);
        document.documentElement.style.setProperty('--scheme2', themes.dark[2]);
        document.documentElement.style.setProperty('--scheme3', themes.dark[3]);
    }
    darkmode = !darkmode;
}
