let id = document.getElementById('Id')
let userId = document.getElementById('userId')
let title = document.getElementById('Title')
let completed = document.getElementById("completed")
let table = document.querySelector('.table')
let view = document.querySelector('#View')
let btn = document.getElementById('btn-1')

let todos1 = []
fetch("https://jsonplaceholder.typicode.com/todos/")
.then(res => res.json())
.then(newRes => {
    todos1 = newRes
    
    const todos = todos1.filter(element => element.completed == false)
    console.log(todos1);
    console.log(todos, 'test');
    for (const i of todos) {
        let t = document.createElement('tr')
        t.innerHTML = `
        <td>${i.userId}</td>
        <td>${i.id}</td>
        <td>${i.title}</td>
        <td>${i.completed}</td>
         
         <td><button type="button" class="btn btn-danger btn1">Ajouter</button></td>
        `
        view.appendChild(t)
    }
    // let result = document.getElementById('result')
    
    // result.addEventListener('click', function () {
        //     console.log("yesseuuuuuuuuu");
        // })
        
        let notif = document.querySelector('.buttons');
    
        let btn = document.querySelector('.btn1');
        btn.addEventListener('click', active);
    
        function active(){
        let add = Number(notif.getAttribute('data-count'))|| 0;
        notif.setAttribute('data-count', add + 1);
        if (add === 0) {
            notif.classList.remove('add-numb');
        }
        false;
    }
        
    })

    // result.innerText= JSON.stringify(todos1, null,1)

//     btn.addEventListener('click', function () {
//         let todos2 = []
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then(res => res.json())
// .then(newRes => {
//     todos2 = newRes
    
//     const todose = todos2.filter(element => element.completed == true)
//     console.log(todos1);
//     console.log(todose);
//     for (const index of todose) {
//         let t = document.createElement('tr')
//         t.innerHTML = `
//         <td>${index.userId}</td>
//         <td>${index.id}</td>
//         <td>${index.title}</td>
//         <td>${index.completed}</td>
//         `
//         table.appendChild(t)
//     }
//     // let result = document.getElementById('result')
    
//     // result.addEventListener('click', function () {
//         //     console.log("yesseuuuuuuuuu");
//         // })
        
//     })
//     })