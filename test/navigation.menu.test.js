const $ = require('jquery')
const SiteComponent = require('../src/js/site-component')

test('Should test nav functionality', () => {
  // DOM mock
  document.body.innerHTML =
  `
  <header
    class="sezzh-header  sezzh-header--fixed"
    data-sezzh-comp="header">
    <div class="sezzh-logo__wrapper">
    <a href="#" class="sezzh-logo">
      <i
        class="logo-sezzh sezzh-logo__img"
        data-sezzh-comp="logo-menu">
      </i>
    </a>
    </div>
    <div class="sezzh-header__net-wrapper">
    <section
      class="sezzh-networking  u--opacity--off"
      data-sezzh-comp="networking">
      <ul class="sezzh-networking__list">
        <li class="sezzh-networking__list__item">
          <a href="mailto:sezzhltd@gmail.com">
            <i
              class="icon-envelope-o sezzh-networking-icon"
              data-sezzh-comp="net-icon">
            </i>
          </a>
        </li>
        <li class="sezzh-networking__list__item">
          <a href="https://gitlab.com/sezzh">
            <i
              class="icon-gitlab  sezzh-networking-icon"
              data-sezzh-comp="net-icon">
            </i>
          </a>
        </li>
        <li class="sezzh-networking__list__item">
          <a href="https://github.com/sezzh">
            <i
              class="icon-github-alt  sezzh-networking-icon"
              data-sezzh-comp="net-icon">
            </i>
          </a>
        </li>
        <li class="sezzh-networking__list__item">
          <a href="https://www.linkedin.com/in/sezzh/">
            <i
              class="icon-linkedin  sezzh-networking-icon"
              data-sezzh-comp="net-icon">
            </i>
          </a>
        </li>
        <li class="sezzh-networking__list__item">
          <a href="https://www.instagram.com/sezzh/">
            <i
              class="icon-instagram  sezzh-networking-icon"
              data-sezzh-comp="net-icon">
            </i>
          </a>
        </li>
        <li class="sezzh-networking__list__item">
          <a href="https://twitter.com/Sezzh">
            <i
              class="icon-twitter  sezzh-networking-icon"
              data-sezzh-comp="net-icon">
            </i>
          </a>
        </li>
      </ul>
    </section>
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

  // icon states
  var iconColorStateOn =
    'icon-envelope-o sezzh-networking-icon u--font-primary-dark-color'
  var iconColorStateOff = 'icon-envelope-o sezzh-networking-icon'

  // btn rotate effect
  var btnRotateOn = 'logo-sezzh sezzh-logo__img u--a-rotate-logo'
  var btnRotateOff = 'logo-sezzh sezzh-logo__img'

  // UI triggers
  var $btn = $('[data-sezzh-comp="logo-menu"]')
  var $netIcons = $('[data-sezzh-comp="net-icon"]')

  var siteComponent = new SiteComponent()

  $btn.click()

  expect(
    siteComponent.nav._mainComponent[0].classList['value']
  ).toBe(openState)

  expect(
    siteComponent.header._mainComponent[0].classList['value']
  ).toBe(headerOpenState)

  expect(
    $netIcons[0].classList['value']
  ).toBe(iconColorStateOn)

  expect(
    $btn[0].classList['value']
  ).toBe(btnRotateOn)

  $btn.click()

  expect(
    siteComponent.nav._mainComponent[0].classList['value']
  ).toBe(closeState)

  expect(
    siteComponent.header._mainComponent[0].classList['value']
  ).toBe(headerCloseState)

  expect(
    $netIcons[0].classList['value']
  ).toBe(iconColorStateOff)

  expect(
    $btn[0].classList['value']
  ).toBe(btnRotateOff)
})
