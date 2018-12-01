module.exports = {
    generateFrontend: () => {
        return `
            // add the bootstrap CSS
            require("./node_modules/bootstrap/dist/css/bootstrap.css")
            // add jquery since bootstrap depends on it
            window.$ = require("jquery")
            // now add bootstrap
            window.bootstrap = require('bootstrap')
        `
    }
}