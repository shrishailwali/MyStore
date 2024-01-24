fetch('https://fakestoreapi.com/products').then((data) => {
  return data.json()
}).then((actualData) => {
  console.log(actualData)
  let data1 = ''
  actualData.map((values) => {
    data1 += `<div class="card">
      <h2 class="title">${values.title}</h2>
      <img src=${values.image}
        alt="img">
      <p class="desc">${values.description}</p>
      <p class="category">${values.category}</p>
      <p class="price">${values.price}</p>
    </div>`
  });
  document.getElementById('card').innerHTML = data1
}).catch(error => {
  console.log(error)
})


