const fs = require("fs")
const path = require("path")
module.exports = {
    generateFrontend: () => {
        // TODO this part is here because parcel currently throws an error when trying to read the .css.map of bootstrap
        // once this error is fixed or a better workaround is found this part should be removed
        let bootstrapLocation = path.join(__dirname, "../bootstrap/dist/css/bootstrap.css")
        let bootstrapText = fs.readFileSync(bootstrapLocation).toString()
        // remove the source mapping
        bootstrapText = bootstrapText.replace("/*# sourceMappingURL=bootstrap.css.map */","")
        fs.writeFileSync(bootstrapLocation, bootstrapText)
        return `
            // add the bootstrap CSS
            require("bootstrap/dist/css/bootstrap.css")
            // add jquery since bootstrap depends on it
            window.$ = require("jquery")
            // now add bootstrap
            window.bootstrap = require('bootstrap')
        `
    }
}