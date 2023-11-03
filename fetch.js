// fetch data from a url => https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

fetch('https://jsonplaceholder.typicode.com/users')

// .then triggers when the server responds

.then(function(response) {

    // when we get the full json response
    return response.json();
})


// lets log the names of users to the console
// since the url returns an array, we can loop over it

.then(function(userData) {
    userData.forEach(function(user) {
        console.log(user.name);
    })
})