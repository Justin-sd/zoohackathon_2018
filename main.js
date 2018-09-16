let ref;
let db_animal;
// let modal = $.get(chrome.extension.getURL("./modal.html"), function(data) {
//   console.log(data);
//   return data;
//   // Or if you're using jQuery 1.8+:
//   // $($.parseHTML(data)).appendTo('body');
// });

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
  db_animal
  page_content = `<div id="enfo_popup" style="background-color: white;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;" class="modal"><div class="modal-content"> <span class="close">&times;</span> <p>Some text in the Modal..</p></div></div>`
//   console.log(modal)
//   page_content = modal;
  page_content = document.body.innerHTML.concat(page_content);
  $("body").html(page_content);
}

function highlight_species() {
  endangered_animals.forEach(function(animal) {
    db_animal = animal;
    page_content = document.body.innerHTML.replace(
      new RegExp(animal, "gi"),
      `<span class='enfo' data=${translateId(
        animal
      )} style='background-color: yellow'>${animal}</span>`
    );
    $("body").html(page_content);
  });
}

insert_popup();
highlight_species();

$(document).ready(function () {
    $(".enfo").hover(function () { 
        //Get the name of the animal being hovered
        let animal_id = $(this).attr("data")
        $(this).attr("id", animal_id)
        showModal($(this).attr("id"))
    }, function() {
        $(this).attr("id", '')
        hideModal()
    })
})
