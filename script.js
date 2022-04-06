const search = document.querySelector('.search');
const btnSearch = document.querySelector('.btn-search');
const btnClose = document.querySelector('.btn-close');
const input = document.querySelector('.input');

btnSearch.addEventListener('click', () => {
  if (search.classList.contains('active') && input.value) {
    parent.open(`https://duckduckgo.com/?q=${input.value}`);
  } else {
    search.classList.add('active');
    input.focus();
  }
});

btnClose.addEventListener('click', () => {
  search.classList.remove('active');
});

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    btnSearch.click();
  }
});
