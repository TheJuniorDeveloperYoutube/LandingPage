const reviewsContainer = document.querySelector('.reviews');
const form = document.querySelector('form');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    const review = document.createElement('div');
    review.classList.add('reviewCard');
    review.innerHTML = `<h3>${name} gave ${rating} stars:</h3>
                      <p>${comment}</p>`;
    reviewsContainer.appendChild(review);

});

