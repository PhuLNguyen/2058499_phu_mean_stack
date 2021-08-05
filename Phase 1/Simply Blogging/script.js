// 2058499 Simply Blogging

function addBlog() {
    let title = document.getElementById("title").value;
    let article = document.getElementById("article").value;
    let img_url = document.getElementById("img_url").value;
    let blogs_area = document.getElementById("blogs_area");
    let newBlog =  
        `<div class="col-3 article_div">
            <h3>${title}</h3>
            <p>${article}</p>
            <img src="${img_url}" class="article_img">
        </div>`;

    blogs_area.innerHTML = newBlog + blogs_area.innerHTML;
}