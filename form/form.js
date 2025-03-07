const data = { name: 'Pranjal', age: 25 };
fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => console.log(result));
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(items => console.log(items));
 