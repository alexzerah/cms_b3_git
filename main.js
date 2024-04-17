document.querySelector('h1').addEventListener('mouseover', () => {
  document.querySelector('body').style.backgroundColor = 'green';
});

document.querySelector('h1').addEventListener('mouseleave', () => {
  document.querySelector('body').style.backgroundColor = 'white';
});
