function getTemplateItemElement(id) {
    var templateItemElement = document.getElementById(id);

    return templateItemElement;
}

function createNewTemplate(containerId, data) {
    var template = getTemplateItemElement("templateItem");
    const templateClone = template.content.cloneNode(true);

    [...templateClone.querySelectorAll(".name")].forEach(i => i.innerHTML = data.name);

    const container = document.getElementById(containerId);

    for (var i = 0; i < 50; i++) {
        var clone = template.content.cloneNode(true);
        [...clone.querySelectorAll(".name")].forEach(h => h.innerHTML = `${i} ${data.name}`);
        container.appendChild(clone);

    }

}

function clickHandler(event) {
    event.target.append(" — Clicked this div");
}


(function () { createNewTemplate("container", { "name": "test" }) })();