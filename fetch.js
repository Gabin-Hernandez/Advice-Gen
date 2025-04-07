const btn = document.querySelector(".btn");
const advice = document.querySelector(".advice-text");
const number = document.querySelector(".advice-number");
const API = "https://qapi.vercel.app/api/random";

async function fetchData() {
  try {
    let response = await fetch(API);
    let data = await response.json();
    advice.textContent = data.quote;
    number.textContent = 'Advice #'+data.id;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", fetchData);
