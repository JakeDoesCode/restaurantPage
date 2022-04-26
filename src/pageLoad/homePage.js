// import { ContextReplacementPlugin } from "webpack";

function createInfo() {
  const info = document.getElementById('info');
  info.classList.add('box');
  const infoText = document.createElement('p');
  info.appendChild(infoText);
  // Find way to add line breaks
  infoText.textContent = `Vito's is a totally legitimate Italian restaurant and wine bar.`;
  const infoText2 = document.createElement('p');
  infoText2.textContent =
    'Absolutely no illegal activity happens here. Unaffiliated with any criminal enterprise.';
  infoText.appendChild(infoText2);
  const signVito = document.createElement('h2');
  signVito.textContent = '-Vito';
  infoText.appendChild(signVito);
}

function createHours() {
  const hours = document.getElementById('hours');
  hours.classList.add('box');
  const hoursTop = document.createElement('h2');
  hoursTop.textContent = 'Hours';
  hours.appendChild(hoursTop);
  const monday = document.createElement('p');
  hours.appendChild(monday);
  monday.textContent = `Monday: 11am-10pm`;
  const tuesday = document.createElement('p');
  hours.appendChild(tuesday);
  tuesday.textContent = `Tuesday: 11am-10pm`;
  const wen = document.createElement('p');
  hours.appendChild(wen);
  wen.textContent = `Wenesday: 11am-10pm`;
  const thurs = document.createElement('p');
  hours.appendChild(thurs);
  thurs.textContent = `Thursday: 11am-10pm`;
  const fri = document.createElement('p');
  hours.appendChild(fri);
  fri.textContent = `Friday: 11am-12am`;
  const sat = document.createElement('p');
  hours.appendChild(sat);
  sat.textContent = `Saturday: 11am-12am`;
  const sun = document.createElement('p');
  hours.appendChild(sun);
  sun.textContent = `Sunday: 11am-10pm`;
}

function createLoc() {
  const loc = document.getElementById('loc');
  loc.classList.add('box');
  const locHeader = document.createElement('h2');
  locHeader.textContent = 'Location';
  loc.appendChild(locHeader);
  const address = document.createElement('p');
  address.textContent = '123 Omerta Dr., City, State';
  loc.appendChild(address);
}

function loadHome() {
  createInfo();
  createHours();
  createLoc();
}

export default loadHome;
