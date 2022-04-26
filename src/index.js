import './style.css';
import loadPage from './pageLoad/pageframe';
import loadHome from './pageLoad/homePage';
import aboutPage from './pageLoad/aboutPage';
// import { javascript } from 'webpack';

const inactive = document.getElementsByClassName('inactive');
function hideInactive() {
  for (let i = 0; i < inactive.length; i++) {
    inactive[i].style.display = 'none';
  }
}

loadPage();
loadHome();

//assign class "active" for current open tab and inactive the other 2 tabs which will remain with display none.
// on click. active class will be assigned to the "home" "menu" "about" div respectively

const homeBtn = document.getElementById('tabHome');
homeBtn.addEventListener('click', (e) => {});

const aboutBtn = document.getElementById('tabAbout');
aboutBtn.addEventListener('click', (e) => {});

const menuBtn = document.getElementById('tabMenu');
menuBtn.addEventListener('click', (e) => {});
