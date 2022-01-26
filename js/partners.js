const renderItems = (data) => {
    console.log(data);
}

fetch('https://test-2-8c729-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error)
    })