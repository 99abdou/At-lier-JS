// API for get requests 
let fetchRes = fetch( "https://jsonplaceholder.typicode.com/todos/25"); 
    // fetchRes is the promise to resolve 
    // it by using.then() method 
    fetchRes.then(res => res.json())
    .then(function(data) { 
        let results = document.getElementById('result');
        results.innerHTML = `
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        {<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };{<p>"userId" :${data.userId}</p><p>"id" :${data.id}</p><p>"title" :${data.title}</p><p>"completed" :${data.completed}</p> };<br>
        `
        
    console.log(data) 
}) 