let data = `{"animals":[
    {
    "name": "African Bush Elephant",
    "scientificName":"Loxodonta africana",
    "status": "VU",
    "wiki": "https://en.wikipedia.org/wiki/African_elephant",
    "img":"/bushelephant.jpg",
    "blurb": "The African bush elephant (Loxodonta africana), also known as the African savanna elephant, is the larger of the two species of African elephants, and the largest living terrestrial animal. These elephants were previously regarded as the same species, but the African forest elephant has been reclassified as L. cyclotis. "
    },
    {
    "name": "African Forest Elephant",
    "scientificName": "Loxodonta cyclotis",
    "status": "VU",
    "wiki": "https://en.wikipedia.org/wiki/African_elephant",
    "img":"/forestelephant.jpg",
    "blurb":"The African forest elephant (Loxodonta cyclotis) is a forest-dwelling species of elephant found in the Congo Basin. It is the smallest of the three extant species of elephant, but still one of the largest living terrestrial animals. The African forest elephant and the African bush elephant, L. africana, were considered to be one species until genetic studies indicated that they separated an estimated 2–7 million years ago.[3] From an estimated population size of over 2 million prior to the colonization of Africa, the population in 2015 is estimated to be about 100,000 forest elephants, mostly living in the forests of Gabon.[4] Due to a slower birth rate, the forest elephant takes longer to recover from poaching, which caused its population to fall by 65% from 2002 to 2014.[5]"
    }
]}`;

let animalJSON = function getJSON(){
    return JSON.parse(data);
}
module.exports = animalJSON;


