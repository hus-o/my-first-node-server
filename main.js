function getImages(){
    fetch("https://source.unsplash.com/random")
    .then(response => {
        console.log(response.url)
        return response;
    })
};


async function callImages(){
    let a = await getImages();
    let b = await getImages();
    displayImages(a,b)
};

const displayImages = (x,y) => {
    document.getElementById("image1").innerHTML = `<img src="${x}">`
    document.getElementById("image2").innerHTML = `<img src="${y}">`
}

callImages()