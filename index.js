const express = require('express')
const app = express()
const port = 3300

/*Where am I serving these files? */
app.listen (port, () => {
    console.log(`Check, check! One two! App listening at localhost:${port}`)
});

/*Where am I getting these files I'm serving? Apparently 'public' if you're serving static assets from a single directory.

if(using mutliple directories, call static on those other directories like this) {
    app.use(express.static('files'))
    for better examples (without pseudo-code)go here:
    https://expressjs.com/en/starter/static-files.html
}*/
app.use(express.static('public'));