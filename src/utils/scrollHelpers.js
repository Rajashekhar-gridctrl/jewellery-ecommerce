// export function disableBodyScroll() {
//   const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//   document.body.classList.add('overflow-hidden');
//   document.body.style.paddingRight = `${scrollbarWidth}px`;
// }

// export function enableBodyScroll() {
//   document.body.classList.remove('overflow-hidden');
//   document.body.style.paddingRight = '0';
// }


let scrollPosition = 0;

export function disableBodyScroll() {
  scrollPosition = window.scrollY;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

export function enableBodyScroll() {
  document.body.style.overflow = 'auto';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.paddingRight = '0';

  window.scrollTo(0, scrollPosition);
}