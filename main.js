var endangered_animals = ["African Elephant", "Woolly Mammoth", "panda"]


function showModal(animal) {
    console.log(`${animal} has been clicked!`)
    alert(`${animal} clicked!`)
}

function highlight_species() {
    endangered_animals.forEach(function (animal) {
        var page_content = document.body.innerHTML.replace(new RegExp(animal, "gi"), `<span id='${animal}' class='enfo' style='background-color: yellow'>${animal}</span>`)
        $("body").html(page_content);
    });
}

highlight_species()


$(document).ready(function () {
    $(".enfo").hover(function() { showModal($(this).attr("id")) } )
})