

function input() {
    let x = document.createElement('input');
    
        x.onchange = (e) => {
            let obj = {link:e.target.value};
            e.target.value = "";
            let url = "https://63fa94717a045e192b5c30db.mockapi.io/PHOTO";
            let f = fetch(url,{method:'POST',obj})
        }
    inp.appendChild(x)

}

export default input;