/** help */
function log(message) {
  console.log(`> ${message}`);
}

/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** cards events */
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
})

function dragstart() {
  // this = card
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

  this.classList.add('is-dragging');
}

function drag() {
  log('> CARD: draging')
}

function dragend() {
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));

  this.classList.remove('is-dragging');
}

/** drop zone */
dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
})

function dragenter() {
  log('DROPZONE: drag enter')
}

function dragover() {
  // this = dropzone
  this.classList.add('over');

  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged);
}


function dragleave() {
  this.classList.remove('over');
}


function drop() {
  this.classList.remove('over');
}

