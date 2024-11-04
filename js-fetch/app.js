const url = "https://66eab38855ad32cda47a0c46.mockapi.io/api/v1/tez-sat"
const div = document.getElementById('div')
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('.btn-info')
// GET
function getDresses() {
    fetch(url)
        .then((response) => {
            return response.json() //  obj <-JSON string
        })
        .then((dresses) => {
            console.log(dresses);
            showDresses(dresses)
        });
}
getDresses()
btn.addEventListener('click', () => {
    const newDress = {
        image: inputs[0].value,
        name: inputs[1].value,
        price: Number(inputs[2].value), //"500" -> 500
        colors: [inputs[3].value],
        like: false
    }

    // DRY - Don't Repeat YourSelft
    // POST
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newDress),//  obj ---> JSON string
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((response) => {
            return response.json() //  obj <- JSON string
        })
        .then((dresses) => {
            console.log(dresses);
            // GET
            getDresses()
        });

})

const btnDel = document.querySelector('.btn-gg')

function showDresses(arr) {
    for (const dress of arr) {
        div.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${dress.image}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${dress.name} </h5>
                <p class="card-text"><b> ${dress.price} som</b></p>
                <a href="#" id="btn-no" class="btn btn-primary" class="btn-gg">add to cart</a>
            </div>
        </div>`
    }
}
btnDel.addEventListener('click', () => {
    alert(333333)
})