const container = document.querySelector('#container');

const boxes = document.createElement('boxes');
boxes.classList.add('content');
boxes.textContent = "test";

container.appendChild(boxes);