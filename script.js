//API url
const apiUrl = 'https://programming-quotesapi.vercel.app/api/random';

// required HTML 
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuote = document.querySelector(".new");
const tweet = document.querySelector(".tweet");

// function to fetch data from API 
async function fetchData() {

    // try to fetch Data
    try{
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json(); 
        console.log(data);

        //Adding Quuote
        quote.innerHTML = data.quote;

        //initializing author to blank
        author.innerHTML = '';

        //adding a span element
        span = document.createElement("span");
        span.innerHTML = "-"
        author.appendChild(span);
        author.appendChild(document.createTextNode('  ' + data.author));

        //sharing to Twitter        
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

//New Quote Button 
newQuote.addEventListener('click', () =>{
    fetchData();
});

//Calling function to fetch data for the first time
fetchData();