var endangered_animals = ["African Elephant", "Woolly Mammoth", "panda"]
var page_content
var enfo_popper
var popperNode



//ANYTIME YOU NEED TO USE AN ID FOR AN ANIMAL CALL THIS
function translateId(animal) {
    return animal.replace(/ /g, '')
}

function showModal(animal) {
    console.log(`${translateId(animal)} has been clicked!`)
    alert(`${animal} clicked!`)
    referenceObject = $(`#${translateId(animal)}`)
    popperNode = $('#enfo_popup')
    enfo_popper = new Popper(referenceObject, popperNode, {
        placement: 'top',
        
        modifiers: {
            flip: {
                behavior: ['left', 'right', 'top', 'bottom']
            },
            offset: {
                enabled: true,
                offset: '0,10'
            }
        }
    });
}

//Append the popup element to the body
function insert_popup() {
    page_content = `<div id="enfo_popup"><p>Popup Test</p></div>`
    page_content = document.body.innerHTML.concat(page_content)
    $("body").html(page_content);
}

function highlight_species() {
    endangered_animals.forEach(function (animal) {
        page_content = document.body.innerHTML.replace(new RegExp(animal, "gi"), `<span id='${translateId(animal)}' class='enfo' style='background-color: yellow'>${animal}</span>`)
        $("body").html(page_content);
    });
}

insert_popup()
highlight_species()


$(document).ready(function () {
    $(".enfo").hover(function () { showModal($(this).attr("id")) })
})