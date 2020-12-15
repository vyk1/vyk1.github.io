function getLanguage() {
    let stored = localStorage.getItem('language')

    if (!stored) {
        localStorage.setItem('language', 'pt')
        stored = 'pt'
    }

    fetch('/languages/' + stored + '.json')
        .then(data => data.json()
            .then(json => {
                for (const key in json) {
                    if (json.hasOwnProperty(key)) {
                        const element = json[key]

                        if (key === 'byClassnames') {
                            element.map(c => {
                                for (const k in c) {
                                    if (c.hasOwnProperty(k)) {
                                        const element2 = c[k]
                                        $("." + k).html(element2)
                                    }
                                }
                            })

                        } else {
                            $('#' + key).empty()
                            // Se array
                            if (Array.isArray(element)) {
                                element.map(e => {
                                    $('#' + key).append('<p>' + e + '</p>')
                                })
                            } else {
                                $("#" + key).html(element)
                            }
                        }
                    }
                }
                return $("#selection-" + stored).addClass('selected')
            }))

}
function setLanguage(lang) {
    let stored = localStorage.getItem('language')
    if (stored !== lang) {
        $("#selection-" + stored).removeClass('selected')
        localStorage.setItem('language', lang)
        getLanguage()
        getProjects()
    }

}