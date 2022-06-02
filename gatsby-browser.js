<<<<<<< HEAD
import './src/style/global.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/inter/600.css';
=======
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry = () => {
    window.onload = () => {
        addScript("https://code.iconify.design/1/1.0.7/iconify.min.js")
    }
}
>>>>>>> 2d3c98363588059a05c8e4b9f60489cb6ce308b5
