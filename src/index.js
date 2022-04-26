import './style.css';
import loadPage from './pageLoad/pageframe';
import loadHome from './pageLoad/homePage';
import aboutPage from './pageLoad/aboutPage';
import menuPage from './pageLoad/menu';
// import { javascript } from 'webpack';
// import { javascript } from 'webpack';



// const menu = document.getElementById('menu');
loadPage();
loadHome();
aboutPage();
menuPage();
const home = document.getElementById('home');
const about = document.getElementById('about');
const menu = document.getElementById('menu')
const homeBtn = document.getElementById('tabHome');

homeBtn.addEventListener('click', (e) => {
    home.classList.remove('inactive');
    menu.classList.add('inactive');
    about.classList.add('inactive')
})

const aboutBtn = document.getElementById('tabAbout');
aboutBtn.addEventListener('click', (e) => {
    home.classList.add('inactive');
    menu.classList.add('inactive');
    about.classList.remove('inactive');

});

const menuBtn = document.getElementById('tabMenu');
menuBtn.addEventListener('click', () => {
    home.classList.add('inactive');
    about.classList.add('inactive');
    menu.classList.remove('inactive');
});



