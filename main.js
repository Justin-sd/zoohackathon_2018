
let ref;
let popper;
// let modal = $.get(chrome.extension.getURL('/template.html'), function(data) {
//     $(data).appendTo('body');
//     // Or if you're using jQuery 1.8+:
//     // $($.parseHTML(data)).appendTo('body');
// });
                        

var endangered_animals = ["African Elephant", "Woolly Mammoth", "panda"]




function showModal(animal) {
    ref = $('#id');

    popper = new Popper(ref,popup,{
        placement: 'top',
    });


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
    let temp = "hover";
    let hoverid;
    $(".enfo").hover(function() { 
        hoverid = $(this).attr("class",temp ); 
        showModal(hoverid) 
})
});