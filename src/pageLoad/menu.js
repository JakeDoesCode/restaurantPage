const content = document.getElementById('content');

function createDiv(parent, id) {
  const newDiv = document.createElement('div');
  newDiv.id = id;
  parent.appendChild(newDiv);
}

function menuPage() {
  createDiv(content, 'menu');
  const menu = document.getElementById('menu');
  menu.classList.add('inactive');
  const arr = [
    'Menu', [`Red Wine - Because we aren't heathens.`, 
    `Spaghetti - Made by my mother.`, 
    `Chicken Parmigiana - Not Italian, but our most popular dish because of your kids.`,
    `Hawaiian Pizza - Ham and Pinapple, like the good Lord intended.`],
    
 ];
 const prepareUL = (root, arr) => {
    let ul = document.createElement('ul');
    let li;
    root.appendChild(ul);
    arr.forEach(function(item) {
       if (Array.isArray(item)) {
          prepareUL(li, item);
          return;
       };
       li = document.createElement('li');
       li.appendChild(document.createTextNode(item));
       ul.appendChild(li);
    });
 }
 const div = document.getElementById('menu');
 prepareUL(div, arr);

}
export default menuPage;