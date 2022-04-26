function createDiv(parent, id) {
  const newDiv = document.createElement('div');
  newDiv.id = id;
  parent.appendChild(newDiv);
}

function pageShell() {
  const content = document.getElementById('content');

  createDiv(content, 'header');
  createDiv(content, 'title');
  createDiv(content, 'home');
  const home = document.getElementById('home');
  createDiv(home, 'info');
  createDiv(home, 'hours');
  createDiv(home, 'loc');
}

function createHeader() {
  const header = document.getElementById('header');
  createDiv(header, 'tabHome');
  const tab1 = document.getElementById('tabHome');
  tab1.textContent = 'Home';
  tab1.classList.add('tabs');
  createDiv(header, 'tabAbout');
  const tab2 = document.getElementById('tabAbout');
  tab2.classList.add('tabs');
  tab2.textContent = 'About';
  createDiv(header, 'tabMenu');
  const tab3 = document.getElementById('tabMenu');
  tab3.classList.add('tabs');
  tab3.textContent = 'Menu';
}

function createTitle() {
  const title = document.getElementById('title');
  let titleText = document.createElement('h1');
  const image = document.createElement('img');
  image.src = '/cigar.png';
  image.height = '100';
  image.width = '100';
  title.appendChild(titleText);
  titleText.innerHTML = `Vito's`;
  titleText.appendChild(image);
}
function loadPage() {
  pageShell();
  createHeader();
  createTitle();
}

export default loadPage;
