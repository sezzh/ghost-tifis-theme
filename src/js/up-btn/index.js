import $ from 'jquery'

/**
 * Initializes and controls the behavior of the up button.
 */
function upBtn () {
  let timeAnimation = 400
  let selector = $('[data-sezzh-comp="up-btn"]')
  window.addEventListener('scroll', (event) => {
    selector.addClass('sezzh-up-btn--visible')
    if (window.scrollY === 0) {
      selector.removeClass('sezzh-up-btn--visible')
    }
  })
  selector.on('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    $('body').animate({ scrollTop: 0 }, timeAnimation)
  })
}

module.exports = upBtn
