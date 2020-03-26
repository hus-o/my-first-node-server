function getImages() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fetch("https://source.unsplash.com/random"))
        }, 3000);
    });
}
async function getURLs(){
    const a = await getImages().then(result => result.url);
    const b = await getImages().then(result => result.url);
    console.log(a)
    displayImages(a,b)
}

const displayImages = (x,y) => {
    document.getElementById("image1").innerHTML = `<img src="${x}">`
    document.getElementById("image2").innerHTML = `<img src="${y}">`
};

getURLs()