const middleware = {}

middleware['checkToken'] = require('../middleware/checkToken.js')
middleware['checkToken'] = middleware['checkToken'].default || middleware['checkToken']

export default middleware
