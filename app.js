
const url = 'https://dummyjson.com/products'
const div1 = document.querySelector('.div1')
const btn1 = document.querySelector('.btn')
const input = document.querySelectorAll('input')
function getUrlData() {
    fetch(url) 
     .then(response => response.json())
     .then(data => {
        console.log(data);
        showMeData(data)
     })
     .catch(error => {
        console.log('Ошибка:', error);
     })
}
        // DRY Don't Repeat yourself!

function showMeData(data) {
    for (const el of data.products) {
        div1.innerHTML += `
        <div style="text-align: center;">
        <div>${el.title}</div>
        <div>${el.price}</div>
        <img style="height: 100px" src="${el.images}" />
        </div>
        `
       }
    }
getUrlData()
    

// btn1.addEventListener('click', () => {
  
      
// });