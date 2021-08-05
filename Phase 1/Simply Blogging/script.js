// 2058499 Simply Blogging

function addBlog() {
    let title = document.getElementById("title").value;
    let article = document.getElementById("article").value;
    let img_url = document.getElementById("img_url").value;
    let newBlog = `<div><h3>${title}</h3><p>    ${article}</p> <img src="${img_url}"></div>`;
    let blogs_area = document.getElementById("blogs_area");

    blogs_area.innerHTML = newBlog + blogs_area.innerHTML;
}