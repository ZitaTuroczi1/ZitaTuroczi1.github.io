let data = {
    photo: ['./A5_FonyoJohanna_tisztaszoba.jpg', 
    './A5_IllyesKata_tisztaszoba_1.jpg', './A5_IllyesKata_tisztaszoba_2.jpg', 
    './A5_PetrocziPetra_tisztaszoba_1.jpg',  './A5_PetrocziPetra_tisztaszoba_2.jpg',  './A5_PetrocziPetra_tisztaszoba_3.jpg', 
    './A5_PriklerVivien_tisztaszoba_1.jpg','./A5_PriklerVivien_tisztaszoba_2.jpg',
     './A5_SzilvagyiBorbala_tisztaszoba_1.jpg', './A5_SzilvagyiBorbala_tisztaszoba_2.jpg', 
      './A5_SzilvagyiBorbala_tisztaszoba_4.jpg', 
     './A5_ValdingerLaura_tisztaszoba_1.jpg','./A5_ValdingerLaura_tisztaszoba_2.jpg','./A5_ValdingerLaura_tisztaszoba_3.jpg',
   ],
    title: ['Fonyó Johanna', 
    'Illyés Kata','Illyés Kata',
    'Petróczi Petra', 'Petróczi Petra', 'Petróczi Petra', 
    'Prikler Vivien', 'Prikler Vivien', 
    'Szilvágyi Borbála', 'Szilvágyi Borbála', 'Szilvágyi Borbála', 
    'Valdinger Laura',  'Valdinger Laura',  'Valdinger Laura',  
],
    description: ['...',
    '...',
    '...',
    '...',
    "...",
    '...',
    '...'    
     
]
};
let img = document.getElementById('img-container');
let title = document.getElementById('image_title');
let description = document.getElementById('image_description');
let currentPhoto = 0;
let up = document.getElementById('forward-arrow');
let down = document.getElementById('back-arrow');
let thumbnail_container = document.getElementById('thumbnails');
let counter = 0;

data.photo.forEach((i) => {
    let newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'div'+counter+'');
    newdiv.style.cssText = ('position: relative; text align: center; width: 80px; height: 80px, display: inline-block');
    let thumbnail = new Image;
    thumbnail.style.cssText = 'object-fit: cover; width: 70px; height: 70px; box-shadow: grey 0px 0px 3px 2px; padding: 3px; border-radius: 1px; position: relative';
    thumbnail.setAttribute('id', counter);
    //thumbnail.setAttribute('title', data.title[counter]);
    let thumb_title = document.createElement('span');
    thumb_title.setAttribute('id', 'thumb-title'+counter+'');
    //thumb_title.style.cssText = 'position: relative; top: 0px; width: auto; text-align: center; background: black; padding: 10px, margin-bottom: 10px; color: white; visibility: hidden';
    thumb_title.innerText = data.title[counter];
    thumbnail.src = i;
    counter++;
    newdiv.appendChild(thumbnail);
    newdiv.appendChild(thumb_title);
    thumbnail_container.appendChild(newdiv);
})

let thumb0 = document.getElementById('0');
let thumb1 = document.getElementById('1');
let thumb2 = document.getElementById('2');
let thumb3 = document.getElementById('3');
let thumb4 = document.getElementById('4');
let thumb5 = document.getElementById('5');
let thumb6 = document.getElementById('6');
let thumb7 = document.getElementById('7');
let thumb8 = document.getElementById('8');
let thumb9 = document.getElementById('9');
let thumb10 = document.getElementById('10');
let thumb11 = document.getElementById('11');
let thumb12 = document.getElementById('12');
let thumb13 = document.getElementById('13');


function printImage(){
    img.style.backgroundImage = 'url('+data.photo[currentPhoto]+')';
    title.textContent = data.title[currentPhoto];
    description.textContent = data.description[currentPhoto];
    if (currentPhoto === 0) {
        thumb0.style.background = 'rgb(65 179 247)';
    } else {
        thumb0.style.background = 'inherit';
    }
    if (currentPhoto === 1) {
        thumb1.style.background = 'rgb(65 179 247)';
    } else {
        thumb1.style.background = 'inherit';
    }
    if (currentPhoto === 2) {
        thumb2.style.background = 'rgb(65 179 247)';
    } else {
        thumb2.style.background = 'inherit';
    }
    if (currentPhoto === 3) {
        thumb3.style.background = 'rgb(65 179 247)';
    } else {
        thumb3.style.background = 'inherit';
    }
    if (currentPhoto === 4) {
        thumb4.style.background = 'rgb(65 179 247)';
    } else {
        thumb4.style.background = 'inherit';
    }
    if (currentPhoto === 5) {
        thumb5.style.background = 'green';
    } else {
        thumb5.style.background = 'inherit';
    }
    if (currentPhoto === 6) {
        thumb6.style.background = 'green';
    } else {
        thumb6.style.background = 'inherit';
    }
    if (currentPhoto === 7) {
        thumb7.style.background = 'green';
    } else {
        thumb7.style.background = 'inherit';
    }
    if (currentPhoto === 8) {
        thumb8.style.background = 'green';
    } else {
        thumb8.style.background = 'inherit';
    }
    if (currentPhoto === 9) {
        thumb9.style.background = 'green';
    } else {
        thumb9.style.background = 'inherit';
    }
    if (currentPhoto ===10) {
        thumb10.style.background = 'green';
    } else {
        thumb10.style.background = 'inherit';
    }
    if (currentPhoto === 11) {
        thumb11.style.background = 'green';
    } else {
        thumb11.style.background = 'inherit';
    }
    if (currentPhoto === 12) {
        thumb12.style.background = 'green';
    } else {
        thumb12.style.background = 'inherit';
    }
    if (currentPhoto === 13) {
        thumb13.style.background = 'green';
    } else {
        thumb13.style.background = 'inherit';
    }

}

printImage();

up.onclick = function() {
    if (currentPhoto === data.photo.length-1) {
        currentPhoto = 0;
        printImage();
    } else {
        currentPhoto++;
        printImage();
    }
}

down.onclick = function() {
    if (currentPhoto === 0) {
        currentPhoto = 13;
        printImage();
    } else {
        currentPhoto--;
        printImage();
    }
}


thumb0.onclick = function() {
    currentPhoto = 0;
    printImage();
}
thumb1.onclick = function() {
    currentPhoto = 1;
    printImage();
}
thumb2.onclick = function() {
    currentPhoto = 2;
    printImage();
}
thumb3.onclick = function() {
    currentPhoto = 3;
    printImage();
}
thumb4.onclick = function() {
    currentPhoto = 4;
    printImage();
}
thumb5.onclick = function() {
    currentPhoto = 5;
    printImage();
}
thumb6.onclick = function() {
    currentPhoto = 6;
    printImage();
}
thumb7.onclick = function() {
    currentPhoto = 7;
    printImage();
}
thumb8.onclick = function() {
    currentPhoto = 8;
    printImage();
}
thumb9.onclick = function() {
    currentPhoto = 9;
    printImage();
}
thumb10.onclick = function() {
    currentPhoto = 10;
    printImage();
}
thumb11.onclick = function() {
    currentPhoto = 11;
    printImage();
}
thumb12.onclick = function() {
    currentPhoto = 12;
    printImage();
}
thumb13.onclick = function() {
    currentPhoto = 13;
    printImage();
}

/*
Failed attempts at syncing thumbnail and the image at the viewer area, making the viewer show the image clicked at the thumbnail section
Also highlight the thumbnail of the image being showed at the viewer area
let arr = [thumb0, thumb1, thumb2, thumb3, thumb4, thumb5, thumb6]
arr.onclick = function() {
    
}
thumb0.onclick = function() {
    currentPhoto = thumb0;
    printImage();
}
thumbnail_container.onclick = function() {
    let ncounter = 0;
    for (let n of arr) {
        n.addEventListener('click', function() {
            currentPhoto = ncounter;
            printImage();
            console.log(ncounter);
        });
        ncounter++;
    }
}
*/