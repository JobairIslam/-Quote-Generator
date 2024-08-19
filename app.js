const quote = document.getElementById("quote");
const author = document.getElementById("author");
const abcd = document.getElementById("new");

const api_url = "https://dummyjson.com/quotes/random";
async function getquote(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  } catch (error) {
    console.error("Failed to fetch the quote:", error);
    quote.innerHTML = "Failed to load quote";
    author.innerHTML = "";
  }
}
abcd.addEventListener("click", () => getquote(api_url));
