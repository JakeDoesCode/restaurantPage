const content = document.getElementById('content');

function createDiv(parent, id) {
  const newDiv = document.createElement('div');
  newDiv.id = id;
  parent.appendChild(newDiv);
}

function aboutPage() {
  createDiv(content, 'about');
  const aboutContent = document.getElementById('about');
  aboutContent.classList.add('inactive');
  aboutContent.textContent =
    "Don't ask so many questions.";
    const text = document.createElement('p');
    text.textContent = "We are simply Italian businessmen. We make spaghetti.";
    const lineTwo = document.createElement('p');
    lineTwo.textContent = "We don't know nothing."
    aboutContent.appendChild(text);
    aboutContent.appendChild(lineTwo)

}

export default aboutPage;
