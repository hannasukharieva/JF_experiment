const basketButton = document.querySelector('.product__basket-button')
const outOfStockModal = document.querySelector('.out-of-stock-modal')
const outOfStockModalContent = document.querySelector('.modal-content')
const backDrop = document.querySelector('.out-of-stock-modal__backdrop')
const outOfStockCloseIcon = document.querySelector('.modal-content__close-icon')
const submitButton = document.querySelector('.form__button')

const closeModal = (event) => {
  const isInsideContent = outOfStockModalContent.contains(event.target);

  if (!isInsideContent || event.target === submitButton || event.target === outOfStockCloseIcon) {
    outOfStockModal.classList.add('out-of-stock-modal--fadeout')
  
    setTimeout(() => {
      outOfStockModal.classList.remove('out-of-stock-modal--fadeout')
      outOfStockModal.classList.remove('out-of-stock-modal--open')
    }, 400)
  }
}

basketButton.addEventListener('click', () => {
  outOfStockModal.classList.add('out-of-stock-modal--open')
})

outOfStockCloseIcon.addEventListener('click', closeModal)
backDrop.addEventListener('click', closeModal)
submitButton.addEventListener('click', closeModal)
