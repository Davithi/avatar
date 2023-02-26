import input from './link.js'
async function promise() {
  let url = "https://63fa94717a045e192b5c30db.mockapi.io/avatar";
  let promise = await fetch(url).then((res) => res.json());
  promise.map((item) => {
    let div = document.createElement("div");
    div.style.backgroundImage = `url("${item.avatar}")`;
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";
    div.style.backgroundSize = "30vw 100%";
    div.onmouseenter = () => {
      div.style.backgroundSize = "cover";
      div.style.width = "600vw";
    };
    div.onmouseleave = () => {
      div.style.width = "3vw";
    };
    container.appendChild(div);
  });
}
promise();
input();