var endangered_animals = ["African Elephant", "Woolly Mammoth", "panda"]

function highlight_species() {
    endangered_animals.forEach(function (animal) {
        var page_content = document.body.innerHTML.replace(new RegExp(animal, "gi"), `<span onclick='showModal()' style='background-color: yellow'>${animal}</span>`)
        $("body").html(page_content);
    });
}

highlight_species()






