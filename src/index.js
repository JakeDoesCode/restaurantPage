console.log('working');
import './style.css';
function createDiv(parent, id) {
  const newDiv = document.createElement('div');
  newDiv.id = id;
  parent.appendChild(newDiv);
}

function pageShell() {
  const content = document.getElementById('content');
  createDiv(content, 'header');
  createDiv(content, 'title');
  createDiv(content, 'info');
  createDiv(content, 'hours');
  createDiv(content, 'loc');
}

function createHeader() {
  const header = document.getElementById('header');
  createDiv(header, 'tab1');
  const tab1 = document.getElementById('tab1');
  tab1.textContent = 'Home';
  tab1.classList.add('tabs');
  createDiv(header, 'tab2');
  const tab2 = document.getElementById('tab2');
  tab2.classList.add('tabs');
  tab2.textContent = 'About';
  createDiv(header, 'tab3');
  const tab3 = document.getElementById('tab3');
  tab3.classList.add('tabs');
  tab3.textContent = 'Contact';
}

function createTitle() {
  const title = document.getElementById('title');
  title.classList.add('box');
  let titleText = document.createElement('h1');
  const image = document.createElement('img');
  image.src = '/cigar.png';
  image.height = '100';
  image.width = '100';
  title.appendChild(titleText);
  titleText.innerHTML = `Vito's`;
  titleText.appendChild(image);
}

function createInfo() {
  const info = document.getElementById('info');
  info.classList.add('box');
  const infoText = document.createElement('p');
  info.appendChild(infoText);
  // Find way to add line breaks
  infoText.textContent = `Vito's is a totally legitimate/legal restaurant and wine bar.
  Absolutely no illegal activity happens here.
  Completely unaffiliated with any local criminal organization.`;
  const signVito = document.createElement('h2');
  signVito.textContent = '-Vito';
  infoText.appendChild(signVito);
}

function createHours() {
  const hours = document.getElementById('hours');
  hours.classList.add('box');
  const hoursTop = document.createElement('h2');
  hours.appendChild(hoursTop);
}

pageShell();
createHeader();
createTitle();
createInfo();
createHours();
// content container>header>3tabs
// title box
// info box
// hours
// loc box

/* <div id="content">
<div id="header">
  <div id="tab1" class="tabs">Home</div>
  <div id="tab2" class="tabs">Menu</div>
  <div id="tab3" class="tabs">Contact</div>
</div>
    <div id="title" class="box">
      <h1><img src="/cigar.png" alt="cigar" height="100px" width="100px"> Vito's <img src="/cigar.png" alt="cigar" height="100px" width="100px"> </h1>
    </div>
    <div id="info" class="box">
      <p>
          Vito's is a totally legitimate/legal restaurant and wine bar.
          <br />Absolutely no illegal activity happens here. <br />
          Completely unaffiliated with any local criminal organization.
          <h2>-Vito</h2>
      </p></div>
      <div id="hours" class="box">
          <h2>Hours</h2>
          <p>Monday: 11am-10pm</p>
          <p>Tuesday: 11am-10pm</p>
          <p>Wenesday: 11am-10pm</p>
          <p>Thursday: 11am-10pm</p>
          <p>Friday: 11am-11pm</p>
          <p>Saturday: 11am-11pm</p>
          <p>Sunday: Closed</p>
      </div>
      <div id="loc" class="box">
          <h2>Location</h2>
          <p>123 Omerta Dr., City, State</p>
    </div> */
