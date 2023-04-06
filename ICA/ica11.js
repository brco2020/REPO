const spinner = document.querySelector('.spinner');
const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
  spinner.classList.remove('hidden');
  newQuoteButton.disabled = true;

  fetch(endpoint)
    .then(response => {
      return response.json();
    })
    .then(data => {
      displayQuote(data.message);
    })
    .catch((err) => {
      console.log(err);
      alert('Failed to fetch new quote');
    })
    .finally(() => {
      newQuoteButton.disabled = false;
      spinner.classList.add('hidden');
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;

  const twitterButton = document.querySelector('.twitter');
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

getQuote();