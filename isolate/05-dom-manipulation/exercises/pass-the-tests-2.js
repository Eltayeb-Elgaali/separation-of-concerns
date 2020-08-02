'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <p>frog</p>
  <li>salamander</li>
  <li>fish</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---

ulEl.removeChild(ulEl.children[3]);
const child1 = ulEl.children[1];
const liEl = document.createElement('li');
liEl.innerHTML = 'frog';
ulEl.replaceChild(liEl, child1);

const child0 = ulEl.children[0];
child0.innerHTML = 'toad';



// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

console.assert(ulEl.childElementCount === 3,
  'Test: .childElementCount should be 3');

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actualNodeName = ulEl.children[i].nodeName;
  console.assert(actualNodeName === 'LI',
    `Test: child ${i} .nodeName`);

  const actualInnerHTML = ulEl.children[i].innerHTML;
  const expectedInnerHTML = expectedInnerHTMLs[i];
  console.assert(actualInnerHTML === expectedInnerHTML,
    `Test: child ${i} .innerHTML`);
}
