import $ from 'jquery'
import CONFIG_APP from '../config.js'

export default class HeaderComponent {
  constructor (dadComponent) {
    this.paintClass = 'u--font-primary-dark-color'
    this.rotateClass = 'u--a-rotate-logo'
    this._mainComponent = $('[data-sezzh-comp="header"]')
    this._logoComponent = $('[data-sezzh-comp="logo-menu"]')
    this._networkingIcons = $('[data-sezzh-comp="net-icon"]')
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

  paintNetIcons () {
    this._networkingIcons.each((index, element) => {
      $(element).toggleClass(this.paintClass)
    })
  }

  rotateMenu () {
    this._logoComponent.toggleClass(this.rotateClass)
  }
}
