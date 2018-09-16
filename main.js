let db_url;
let animal_name;

var endangered_animals = ["African Elephant", "Woolly Mammoth", "panda"];
var page_content;
var enfo_popper;
var popperNode;

//ANYTIME YOU NEED TO USE AN ID FOR AN ANIMAL CALL THIS
function translateId(animal) {
    return animal.replace(/ /g, "");
}

function showModal(animal) {
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

function hideModal() {
    enfo_popper.destroy()
}

//Append the popup element to the body
function insert_popup() {
    page_content = `<div id="enfo_popup" style="background-color: white;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;" class="modal"><div class="modal-content"><img id="enfo_popup_animal_img" height="200px" width="200px" src=""></img><img id="enfo_popup_stats_img" width="100px" height="100px" src=""><p id="enfo_popup_text">placeholder text</p></div></div>`
    page_content = document.body.innerHTML.concat(page_content);
    $("body").html(page_content);
}

function populateModal(animal_id) {
    let animal_name = document.getElementById(animal_id).innerHTML;
    let animal_search = getJSON();
    console.log("animal_search in populateModal", animal_search);

}

function highlight_species() {
    endangered_animals.forEach(function (animal) {
        page_content = document.body.innerHTML.replace(
            new RegExp(animal, "gi"),
            `<span class='enfo' data=${translateId(
                animal
            )} style='color: green; text-decoration: underline'>${animal}</span>`
        );
        $("body").html(page_content);
    });
}

insert_popup();
highlight_species();

$(document).ready(function () {
    $(".enfo").hover(function () {

        $(this).css("background", "lightblue")

        //Get the name of the animal being hovered
        let animal_id = $(this).attr("data")
        $(this).attr("id", animal_id)
        console.log("got here")
        populateModal($(this).attr("id"))
        showModal($(this).attr("id"))
    }, function () {
        $(this).css("background", "")
        $(this).attr("id", "")
        hideModal()
    });

});
