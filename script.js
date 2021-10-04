//* API NASA
//* BaseURL = https://api.nasa.gov/
//* Personal API Key = 1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0
//* Example Web Request URL = https://api.nasa.gov/planetary/apod?api_key=1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0

//* Variables related to classes in index.html

let eonet = document.querySelector('eonets');

//! APOD: Astronomy Picture of the Day
//const apodURL = 'https://api.nasa.gov/planetary/apod?api_key=1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0'      //URL we are fetching data from

fetchAPOD().catch(error => console.log('Error! Why?!?!?! T-T'));        // Calls Function and catches all errors that occur during fetch request

async function fetchAPOD(){                                             // async fetch request function
//    try{   
    const apodURL = 'https://api.nasa.gov/planetary/apod?api_key=1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0'       
    const res = await fetch(apodURL);                                   // recieve response after awaiting fetch response
    const apodData = await res.json();                                  // recieve json data from await response and define it by apodData
    if(res.ok) {                                                        // if response is successful then we're good to go
        console.log('We got the goods!')
    } else {                                                            // if response is unsuccessful then throw an error
        console.log('This is not the info you are looking for... >.<')
    }
    console.log(apodData);                                              //logs data recieved in console
    console.log(apodData.date);                                         //will log date     
    console.log(apodData.title);                                        //will log title     etc.  very cool! Lets me know I am indeed stepping into the object correctly!
    console.log(apodData.hdurl);
    //console.log(apodData.media_type);
    //console.log(apodData.explanation);
    displayData(apodData);                                                 //! Memo to self: 
//    } catch{error => console.log(error + 'Error! Why?!?!?! T-T')}
};
//fetchAPOD();                                                          //other option for error catch and calling function

function displayData(apodData) {                                        // function to display data on html
    //console.log(apodData);                                            // making sure this function is connected to and being passed through fetch function
    let apod = document.getElementById('apods');                        // connects this function to corresponding html id tag

    let img = document.createElement('img');                            // creating the elements I want inside the html id tag and in what order
    let title = document.createElement('h3');
    let explan = document.createElement('p');
    let otherInfo = document.createElement('p');
    let clearfix = document.createElement('div');

    title.innerText = apodData.title;
    explan.innerText = apodData.explanation;
    otherInfo.innerText = apodData.date;

    
    img.src = apodData.hdurl;
    img.alt = apodData.title;

    clearfix.setAttribute('class', 'clearfix');

    apod.appendChild(img);
    apod.appendChild(title);
    apod.appendChild(explan);
    apod.appendChild(otherInfo);
    apod.appendChild(clearfix);
    
};




//! EONET: The Earth Observatory Natural Event Tracker

fetchEONET().catch(error => console.log('Error! Why?!?!?! T-T'));                    // to catch all errors that occur during fetch request

async function fetchEONET(){ 
    const eonetURL = ' https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=8'      //URL we are fetching data from                                                        // async fetch request function
    const res = await fetch(eonetURL);                                               // recieve response after awaiting fetch response
    const eonetData = await res.json();                                              // recieve json data from await response and define it by apodData
    if(res.ok) {                                                                     // if response is successful then we're good to go
        console.log('We got the goods!')
    } else {                                                                         // if response is unsuccessful then throw an error
        console.log('This is not the info you are looking for... >.<')
    }
    console.log(eonetData);                                                          //logs data recieved in console
};





// Asteroids - NeoWs: Near Earth Object Web Service
// This API is maintained by SpaceRocks Team: David Greenfield, Arezu Sarvestani, Jason English and Peter Baunach.
// Neo-Feed = GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0
// Neo- Lookup = https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0
// Neo-Browse = https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=1BV2dJlAdheBONpyaHpW6GHQivZgMaNsrrfdw3v0




/*
                                                                    NASA API
                                                                        ↓
                                                                    |Document|
                                                                        ↓
                                                                     |Body|
                                                                        ↓                                                     
                    ------------------------------------------------------------------------------------------------------------                                           
                    ↓                                                   ↓                                      ↓               ↓
                 |APODS|                                             |EONET|                                |section|     |section|                                                        
                    ↓                                                   ↓
        -------------------------------------
        ↓        ↓          ↓               ↓
     |Image|  |Title| |Explanation|  |Copyright & Date|
                                     | aka otherInfo  |
*/
