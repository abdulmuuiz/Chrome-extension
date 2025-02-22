replaceText(document.body)


function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.array.forEach(element => {
            replaceText
        });
    } else if (element.nodeType === Text.TEXT_NODE) {
        element.textContent = element.textContent.replace(/coronavirus/gi, "⬛")

    }
}