import 'animate.css'
import moment from 'moment'
import _ from 'lodash'

class SezzhComponent {
  createComponent () {
    var element = document.createElement('div')
    element.innerHTML = _.join(['hello', 'webpack'], ' ')
    return element
  }

  doSomething () {
    return 'ss'
  }

  doSomething2 () {
    return 'ssss'
  }
}

let sezzhComp = new SezzhComponent()
document.body.appendChild(sezzhComp.createComponent())
console.log(moment().format())
