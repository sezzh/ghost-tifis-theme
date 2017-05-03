import HeaderComponent from '../header-component'
import NavComponent from '../nav-component'

class SiteComponent {
  constructor () {
    this.header = new HeaderComponent(this)
    this.nav = new NavComponent(this)
  }

  events (event) {
    if (event.target.getAttribute('data-sezzh-comp') === 'logo-menu') {
      this.nav.handleOpening()
      this.header.paintHeader()
    }
  }
}

module.exports = () => {
  return new SiteComponent()
}
