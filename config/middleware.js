const checkAuth = function(req, res, next){
  if(!req.user) {
    res.status(400).send( 'no authenticated user for current session' )
  }
  else next()
}

const errorHandler = function(err, req, res, next) {
  console.log(err)
  res.render(err);
  return
}

const cookifyUser = function(req,res,next) {
  if (req.user) {
    res.cookie(global.PROJECT_NAME + '_user',JSON.stringify(req.user))
    res.cookie('tiy_full_stack_app_name', global.PROJECT_NAME)
    next()
  }
  else {
    console.log('no user')
    res.cookie(global.PROJECT_NAME + '_user','null')
    res.cookie('tiy_full_stack_app_name', global.PROJECT_NAME)
    next()
  }
}

const handleRegEx = function(req,res,next) {
    if (req.query) {
        for (let key in req.query) {
            let keyParts = key.split('__')
            if (keyParts.length > 1 && keyParts[0] === 'regex') {
                var targetKey = key
                var val = req.query[key]
                req.query[keyParts[1]] = new RegExp(val,'gi')
            }
        }
        delete req.query[targetKey]
    }
    console.log(req.query)
    next()

const parseQuery = function(req,res,next) {
  if (req.query) {
    for (var prop in req.query) {
      if (prop[0] === '$') {
        let val = req.query[prop]
        req.query[prop] = JSON.parse(val)
      }
    }
  }
  next()
}

module.exports = {
  checkAuth: checkAuth,
  errorHandler: errorHandler,
  cookifyUser: cookifyUser,
  handleRegEx: handleRegEx,
  parseQuery: parseQuery
}

