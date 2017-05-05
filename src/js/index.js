/**
 * @fileoverview file in charge of running modules and handle vendor css
 * imports.
 */

import 'animate.css'
import siteComponent from './site-component'
import upBtn from './up-btn'

(function () {
  siteComponent()
  upBtn()
})()
