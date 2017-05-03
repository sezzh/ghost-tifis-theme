const SiteComponent = require('../src/js/site-component')
const $ = require('jquery')

test('Should test nav functionality', () => {
  // DOM mock
  document.body.innerHTML =
  `
  <header
    class="sezzh-header  sezzh-header--fixed"
    data-sezzh-comp="header">
    <div class="sezzh-logo__wrapper">
      <a href="#" class="sezzh-logo">
        <img
          src=""
          alt="sezzh's logo"
          class="sezzh-logo__img"
          data-sezzh-comp="logo-menu">
      </a>
    </div>
  </header>
  <nav
    class="
      sezzh-nav
      sezzh-nav--fixed
      u--m-header
      sezzh-nav--closed"
    data-sezzh-comp="nav">
  </nav>
  `

  // nav states
  var openState =
    'sezzh-nav sezzh-nav--fixed u--m-header'
  var closeState =
    'sezzh-nav sezzh-nav--fixed u--m-header sezzh-nav--closed'

  // header states
  var headerOpenState = 'sezzh-header sezzh-header--fixed sezzh-header--solid'
  var headerCloseState = 'sezzh-header sezzh-header--fixed'

  // UI triggers
  var $btn = $('[data-sezzh-comp="logo-menu"]')

  var siteComponent = new SiteComponent()

  $btn.click()

  expect(
    siteComponent.nav._mainComponent[0].classList['value']
  ).toBe(openState)

  expect(
    siteComponent.header._mainComponent[0].classList['value']
  ).toBe(headerOpenState)

  $btn.click()

  expect(
    siteComponent.nav._mainComponent[0].classList['value']
  ).toBe(closeState)

  expect(
    siteComponent.header._mainComponent[0].classList['value']
  ).toBe(headerCloseState)
})
