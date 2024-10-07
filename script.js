const apiUrl = 'https://programming-quotesapi.vercel.app/api/random';

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector(".new");
const tweet = document.querySelector(".tweet");

async function fetchData() {
    try{
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json(); 
        console.log(data);

        quote.innerHTML = data.quote;
        author.innerHTML = '';
        span = document.createElement("span");
        span.innerHTML = "-"
        author.appendChild(span);
        author.appendChild(document.createTextNode('  ' + data.author));
        
        tweet.addEventListener("click", () =>{
            //Encode the tweet text for the URL
            const encodedTweet = encodeURIComponent(data.quote);
        
            //Create the Twitter Web Intent URL
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTweet}`;
        
            //Open the Twitter URL in a new tab
            window.open(twitterUrl, '_blank');
        });
        
    }catch(error){
        console.error('Error fetching the API:', error); 
    }
}

newQuote.addEventListener('click', () =>{
    fetchData();
});


fetchData();