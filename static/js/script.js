let url = "https://randomuser.me/api/"
let globalPerson

fetch(url).then(
    (response) => response.json()
).then(
    function(data){
        globalPerson = data.results[0]
        console.log(globalPerson)
        document.getElementById('name').innerHTML = globalPerson.name.first+ " " + globalPerson.name.last;
        document.getElementById('email').innerHTML = globalPerson.email;
        document.getElementById('location').innerHTML = globalPerson.location.city+ " " + globalPerson.location.country;
        document.getElementById('phone').innerHTML = globalPerson.phone;
        document.getElementById('picture').src = globalPerson.picture.large;
    }
)