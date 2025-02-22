replaceText(document.body)


function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
            // console.log(element.parentElement)
            // element.parentElement.remove();
            const newElement = document.createElement("span");
            newElement.innerHTML = element.textContent.replace(/coronavirus/gi, '<span class="rainbow"> CoronaVirus </span>');
            element.replaceWith(newElement)
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, "⬛")

    }

}