// The user must be able to search for parks in one or more states.
'use strict';

 // The search must trigger a call to NPS's API.
function parkSearch(state, number){
    let url = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=NFjCXIdeOTeDTneoLyAyqQwdsgXbqkU2cRW3gRcF`;
    fetch(url)
        .then(res => res.json())
        .then (respJson => 
            // The parks in the given state must be displayed on the page. Include at least:
            // Full name
            // Description
            // Website URL
             { 

                 for(let i = 0; i < number; i++){

                     $('#results').append(
                        `<h3> ${respJson.data[i].name}</h3>
                            <ul>
                            <li>
                                ${respJson.data[i].description} <br /> <b> <a href="${respJson.data[i].directionsUrl}"> Click here to visit ${respJson.data[i].name}'s website!</a> </b>
                            </li>
                            </ul>`

                             );
                            console.log(respJson.data.slice(4, respJson.data.length ));

                 }
            })
        .catch(error => console.error('error', error));
}


 // The user must be able to set the max number of results, with a default of 10.
function findPark(){
    $('form').submit(function (event) {
        event.preventDefault();
        $('#results').empty();
        let state = $('#user-input').val();
        let number = $('#number-input').val();
        parkSearch(state, number);
    });
}


 $(
    findPark
    )
// The user must be able to make multiple searches and see only the results for the current search. 