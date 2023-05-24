const jokeContainer = document.getElementById("joke");
const emojiContainer = document.getElementById("emoji");
const copyBtn = document.getElementById("copy");
const defaultText = copyBtn.textContent;
const newText = "copied";
const btn = document.getElementById("btn");

const url = "https://icanhazdadjoke.com/";
const emojis = [
  "😄",
  "😂",
  "🤣",
  "😊",
  "😎",
  "😆",
  "😜",
  "🤭",
  "🤪",
  "😁",
  "😝",
];

let getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.textContent = data.joke;
      jokeContainer.classList.add("fade");

      const randomEmoji = getRandomEmoji();
      emojiContainer.textContent = randomEmoji;
    })
};

let copyJokeToClipboard = () => {
  const jokeText = jokeContainer.textContent;
  navigator.clipboard
    .writeText(jokeText)
};

function changeButtonText() {
    copyBtn.textContent = newText;

  setTimeout(() => {
    copyBtn.textContent = defaultText;
  }, 1000);
}

btn.addEventListener("click", getJoke);
copyBtn.addEventListener("click", copyJokeToClipboard);
copyBtn.addEventListener("click", changeButtonText);

getJoke();
