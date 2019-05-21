import poker from './poker.js';

main();

function main() {
  const app = poker();
  app.onEstimate(routeTo);

  document.querySelector('button.back')
    .addEventListener('click', makeEstimate.bind(null, app, null));

  document.querySelectorAll('.estimate button').forEach(button => {
    button.addEventListener('click', makeEstimate.bind(null, app))
  });
}

function makeEstimate(app, e) {
  if (e) {
    app.estimate(parseInt(e.target.textContent, 10));
  } else {
    app.estimate(null);
  }
}

function routeTo(estimate) {
  if (estimate !== null) {
    showSizing(estimate)
  } else {
    showEstimates()
  }
}

function showSizing(size) {
  const sizingView = document.querySelector('.sizing');
  sizingView.classList.remove('hide');
  sizingView.querySelector('.size').textContent = size;
  document.querySelector('.estimate').classList.add('hide');
}

function showEstimates() {
  const sizingView = document.querySelector('.sizing');
  sizingView.classList.add('hide');
  document.querySelector('.estimate').classList.remove('hide');
}
