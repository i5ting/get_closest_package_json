var fs = require('fs')  
  
module.exports = function get_closest_package_json(){
  module.paths.forEach(function(i){
    var file = i.replace('node_modules', 'package.json')
    
    if (fs.existsSync(file) === true) {
      try{
        console.log('exist = ' + file)
        return require(file)
      }catch (e){
        console.error('get_closest_package_json' + e)
      }
    }
  })
}