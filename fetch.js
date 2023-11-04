// fetch data from a url => https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data


try {

    fetch('https://jsonplaceholder.typicode.com/users//3')
    
    // .then triggers when the server responds

    .then(function(response) {
        if (response.status === 404) {
            throw new Error('Url not found');
        } else if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
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
    .catch(function(err) {
        console.error('fetch error', err.name);
        console.error('fetch error', err.message);
    })


} catch (e) {
    console.error('general: ', e.message);
    console.error('general: ', e.name);
}