const parthers = () => {
    const cardsRestaurants = document.querySelector('.cards-restaurants');

    const renderItems = (data) => {
        data.forEach((item) => {
            const { image, kitchen, name, price, products, stars, time_of_delivery } = item;
            const a = document.createElement('a');

            a.setAttribute('href', '/restaurant.html');
            a.classList.add('card');
            a.classList.add('card-restaurant');
            a.dataset.products = products;

            a.innerHTML = `
                    <img src="${image}" alt="${image}" class="card-image" />
                    <div class="card-text">
                        <div class="card-heading">
                            <h3 class="card-title">${name}</h3>
                            <span class="card-tag tag">${time_of_delivery} мин</span>
                        </div>
                        <!-- /.card-heading -->
                        <div class="card-info">
                            <div class="rating">
                            ${stars}
                            </div>
                            <div class="price">${price}</div>
                            <div class="category">${kitchen}</div>
                        </div>
                    </div>
                `

                a.addEventListener('click', (event) => {
                    event.preventDefault();

                    localStorage.setItem('restaurant', JSON.stringify(item));

                    window.location.href = '/restaurant.html';
                })

                cardsRestaurants.append(a);
        })
    }

    fetch('https://test-2-8c729-default-rtdb.firebaseio.com/db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

parthers();