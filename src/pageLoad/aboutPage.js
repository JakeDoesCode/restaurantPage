const content = document.getElementById('content');

function createDiv(parent, id) {
  const newDiv = document.createElement('div');
  newDiv.id = id;
  parent.appendChild(newDiv);
}

function aboutPage() {
  createDiv(content, 'about');
  const aboutContent = document.getElementById('about');
  aboutContent.textContent =
    "Don't ask questions. Vito's staff did not see anything, and are simple young hardworking Italian folk.";
}

export default aboutPage;
