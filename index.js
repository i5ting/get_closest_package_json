var fs = require('fs')  
var debug = require('debug')('get_closest_package_json')

function get_closest_package_json () {
  var config
  
  module.paths.forEach(function (i) {
    var file = i.replace('node_modules', 'package.json')
    
    if (fs.existsSync(file) === true) {
      try{
        debug('exist file = ' + file)
        // debug(require(file))
        config =  require(file)
      }catch (e){
        console.error('get_closest_package_json' + e)
      }
    } else {
      debug('not exist file = ' + file)
    }
  })
  
  return config
}

module.exports = get_closest_package_json()
