import HeaderComponent from '../header-component'
import NavComponent from '../nav-component'

/**
 * A main component which handles each component of the UI.
 */
class SiteComponent {
  /**
   * Class constructor
   */
  constructor () {
    this.header = new HeaderComponent(this)
    this.nav = new NavComponent(this)
  }

  /**
   * Handles methods when a button of any of its children is clicked.
   * @param {object} event The event produced by the browser when the button
   *     is clicked.
   */
  events (event) {
    if (event.target.getAttribute('data-sezzh-comp') === 'logo-menu') {
      this.header.rotateMenu()
      this.nav.handleOpening()
      this.header.paintHeader()
      this.header.paintNetIcons()
    }
  }
}

module.exports = () => {
  return new SiteComponent()
}
