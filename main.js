const ham = document.querySelector('.ham');
const gnb = document.querySelector('.gnb');
ham.addEventListener('click', () => {
  gnb.classList.toggle('on');
  console.log('ok');
});
