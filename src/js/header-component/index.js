import $ from 'jquery'
import CONFIG_APP from '../config.js'

/**
 * Class which controls the Header tag behavior.
 * @param {dadComponent} obj The Class which will controls the behavior
 *    Of this component.
 */
export default class HeaderComponent {
  /**
   * @constructor
   * @param {dadComponent} obj The class which will control the behavior of
   *    this component.
   */
  constructor (dadComponent) {
    this.paintClass = 'u--font-primary-dark-color'
    this.rotateClass = 'u--a-rotate-logo'
    this._mainComponent = $('[data-sezzh-comp="header"]')
    this._logoComponent = $('[data-sezzh-comp="logo-menu"]')
    this._networkingIcons = $('[data-sezzh-comp="net-icon"]')
    this._logoComponent.on('click', this.handleClick.bind(this))
    this._dadComponent = dadComponent
  }

  /**
   * Method which resolves the Click event of menu button.
   * @param {event} obj The event produced by the browser when the logo menu
   *    is clicked.
   */
  handleClick (event) {
    event.preventDefault()
    event.stopPropagation()
    this._dadComponent.events(event)
  }

  /**
   * Paints the header.
   */
  paintHeader () {
    this._mainComponent.toggleClass('sezzh-header--solid')
  }

  /**
   * Paints the networking icons.
   */
  paintNetIcons () {
    this._networkingIcons.each((index, element) => {
      $(element).toggleClass(this.paintClass)
    })
  }

  /**
   * Rotates the menu icon.
   */
  rotateMenu () {
    this._logoComponent.toggleClass(this.rotateClass)
  }
}
