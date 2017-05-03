import $ from 'jquery'

export default class HeaderComponent {
  constructor (dadComponent) {
    this._mainComponent = $('[data-sezzh-comp="header"]')
    this._logoComponent = $('[data-sezzh-comp="logo-menu"]')
    this._logoComponent.on('click', this.handleClick.bind(this))
    this.dadComponent = dadComponent
  }

  handleClick (event) {
    event.preventDefault()
    event.stopPropagation()
    this.dadComponent.events(event)
  }

  paintHeader () {
    this._mainComponent.toggleClass('sezzh-header--solid')
  }
}
