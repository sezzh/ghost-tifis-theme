import $ from 'jquery'

/**
 * Class which controls the Nav tag behavior.
 */
export default class NavComponent {
  /**
   * @constructor
   * @param {dadComponent} obj The Class which will control the behavior
   *    of this component.
   */
  constructor (dadComponent) {
    this.className = 'sezzh-nav--closed'
    this._mainComponent = $('[data-sezzh-comp="nav"]')
    this._dadComponent = dadComponent
  }

  /**
   * It handles the opening an closing of the nav.
   */
  handleOpening () {
    this._mainComponent.toggleClass(this.className)
  }
}
