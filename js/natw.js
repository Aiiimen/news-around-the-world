

const main = document.getElementById("main");
const images = {};
let currentImages = [];

async function getData() {

    for (i = 1; i < 6; i++) {
        console.log("day: " + i);
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${i}&camera=mast&api_key=tdnVnk5Mmcj82tcOdffHvTeHS8ulfOX61WFuIKzf`);
        const data = await response.json();
        // console.log(data);
        for (j = 0; j < data.photos.length; j++) {
            if(data.photos.length = 0){
                console.log("there's no images in day "+ j);
            }else{
                // const imgEl = document.createElement("img");
                // imgEl.src = data.photos[j].img_src;
                // currentImages.push(imgEl.src);
            }

        }
        // images[j] = currentImages;
        console.log("number of images in day "+ i + " is " + currentImages.length );
        currentImages = [];
    }

    
    console.log(images);


}

getData();









