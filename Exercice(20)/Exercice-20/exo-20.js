let html = '';
let nalea = 12;
for(let i = 1;i <= nalea;i++) {
   html = html + '<img src="https://picsum.photos/id/237/200/300?random=' + i + '" />';
}
document.body.innerHTML = html;