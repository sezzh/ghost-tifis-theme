import $ from 'jquery'

export default class NavComponent {
  constructor () {
    this.className = 'sezzh-nav--closed'
    this._mainComponent = $('[data-sezzh-comp="nav"]')
  }

  handleOpening () {
    this._mainComponent.toggleClass(this.className)
  }
}
