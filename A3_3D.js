let data = {
    photo: ['./A3A_AcsLaura_3D.jpg', './A3A_BenyatsKlaudia_3D.jpg', 
    './A3A_JamborTimea_3D.jpg', './A3A_KovacsFruzsina_3D.jpg', 
    './A3A_NuszerAbigel_3D.jpg',  './A3A_SovariDenes_3D.jpg', 
     './A3A_TothBrigitta_3D.jpg', 
   

     './A3B_AndorkaAbigel_3D.jpg', './A3B_BencsicsJanka_3D.jpg', 
     './A3B_CsurgaiMarta_3D.jpg', './A3B_FenyodiBotond_3D.jpg', 
     './A3B_HorvathKincso_3D.jpg',  './A3B_JuhaszAntonia_3D.jpg', 
      './A3B_PonaczKrisztian_3D.jpg', './A3B_RokobDora_3D.jpg',
      './A3B_SaruZsombor_3D.jpg','./A3B_SaskaLia_3D.jpg',
      './A3B_SzaboViola_3D.jpg',

      './A3C_BokaLilla_3D.jpg', './A3C_DomotorIlona_3D.jpg', 
    './A3C_GasparBoldizsar_3D.jpg', './A3C_HerkBence_3D.jpg', 
    './A3C_HermanMilan_3D.jpg',  './A3C_KovacsDaniel_3D.jpg', 
     './A3C_KunReka_3D.jpg', './A3C_MarcaliLilien_3D.jpg',
     './A3C_ModVeronika_3D.jpg', './A3C_PolniczkyKamilla_3D.jpg', 
     './A3C_SzalantzyBerta_3D.jpg',  './A3C_SzegletBiborka_3D.jpg', 
      './A3C_TothRichard_3D.jpg', './A3C_VasokAnna_3D.jpg',
 
   ],
    title: ['A3A - Ács Laura', 'A3A - Benyáts Klaudia',
    'A3A - Jámbor Tímea Kitti',    'A3A - Kovács Fruzsina Mária', 
    'A3A - Nuszer Abigél', 'A3A - Sóvári Dénes', 
    'A3A - Tóth Brigitta', 
  

    'A3B - Andorka Abigél', 'A3B - Bencsics Janka Linett', 
    'A3B - Csurgai Márta Zsuzsanna', 'A3B - Fenyődi Botond', 
     'A3B - Horváth Kincső',  'A3B - Juhász Antónia',  
     'A3B - Ponácz Krisztián', 'A3B - Rokob Dóra Diána', 
     'A3B - Saru Zsombor', 'A3B - Sáska Lia', 
      'A3B - Szabó Viola',  
   

      'A3C - Bóka Lilla', 'A3C - Dömötör Ilona', 
      'A3C - Gáspár Boldizsár', 'A3C - Herk Bence Ádám', 
       'A3C - Hermán Milán',  'A3C - Kovács Dániel',  
       'A3C - Kun Réka', 'A3C - Marcali Lilien', 
       'A3C - Mód Veronika', 'A3C - Polniczky Kamilla Ágnes', 
       'A3C - Szalántzy Berta Kata',  'A3C - Szeglet Bíborka',  
       'A3C - Tóth Richárd', 'A3C - Vasok Anna', 

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
let thumb14 = document.getElementById('14');
let thumb15 = document.getElementById('15');
let thumb16 = document.getElementById('16');
let thumb17 = document.getElementById('17');
let thumb18 = document.getElementById('18');
let thumb19 = document.getElementById('19');
let thumb20 = document.getElementById('20');
let thumb21 = document.getElementById('21');
let thumb22 = document.getElementById('22');
let thumb23 = document.getElementById('23');
let thumb24 = document.getElementById('24');
let thumb25 = document.getElementById('25');
let thumb26 = document.getElementById('26');
let thumb27 = document.getElementById('27');
let thumb28 = document.getElementById('28');
let thumb29 = document.getElementById('29');
let thumb30 = document.getElementById('30');
let thumb31 = document.getElementById('31');

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
    if (currentPhoto === 14) {
        thumb14.style.background = 'green';
    } else {
        thumb14.style.background = 'inherit';
    }
    if (currentPhoto === 15) {
        thumb15.style.background = 'rgb(65 179 247)';
    } else {
        thumb15.style.background = 'inherit';
    }
    if (currentPhoto === 16) {
        thumb16.style.background = 'rgb(65 179 247)';
    } else {
        thumb16.style.background = 'inherit';
    }
    if (currentPhoto === 17) {
        thumb17.style.background = 'rgb(65 179 247)';
    } else {
        thumb17.style.background = 'inherit';
    }
    if (currentPhoto === 18) {
        thumb18.style.background = 'rgb(65 179 247)';
    } else {
        thumb18.style.background = 'inherit';
    }
    if (currentPhoto === 19) {
        thumb19.style.background = 'rgb(65 179 247)';
    } else {
        thumb19.style.background = 'inherit';
    }
    if (currentPhoto === 20) {
        thumb20.style.background = 'green';
    } else {
        thumb20.style.background = 'inherit';
    }
    if (currentPhoto === 21) {
        thumb21.style.background = 'green';
    } else {
        thumb21.style.background = 'inherit';
    }
    if (currentPhoto === 22) {
        thumb22.style.background = 'green';
    } else {
        thumb22.style.background = 'inherit';
    }
    if (currentPhoto === 23) {
        thumb23.style.background = 'green';
    } else {
        thumb23.style.background = 'inherit';
    }
    if (currentPhoto === 24) {
        thumb24.style.background = 'green';
    } else {
        thumb24.style.background = 'inherit';
    }
    if (currentPhoto ===25) {
        thumb25.style.background = 'green';
    } else {
        thumb25.style.background = 'inherit';
    }
    if (currentPhoto === 26) {
        thumb26.style.background = 'green';
    } else {
        thumb26.style.background = 'inherit';
    }
    if (currentPhoto === 27) {
        thumb27.style.background = 'green';
    } else {
        thumb27.style.background = 'inherit';
    }
    if (currentPhoto === 28) {
        thumb28.style.background = 'green';
    } else {
        thumb28.style.background = 'inherit';
    }
    if (currentPhoto === 29) {
        thumb29.style.background = 'green';
    } else {
        thumb29.style.background = 'inherit';
    }
    if (currentPhoto === 30) {
        thumb30.style.background = 'green';
    } else {
        thumb30.style.background = 'inherit';
    }
    if (currentPhoto === 31) {
        thumb31.style.background = 'green';
    } else {
        thumb31.style.background = 'inherit';
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
        currentPhoto = 31;
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
thumb14.onclick = function() {
    currentPhoto = 14;
    printImage();
}
thumb15.onclick = function() {
    currentPhoto = 15;
    printImage();
}
thumb16.onclick = function() {
    currentPhoto = 16;
    printImage();
}
thumb17.onclick = function() {
    currentPhoto = 17;
    printImage();
}
thumb18.onclick = function() {
    currentPhoto = 18;
    printImage();
}
thumb19.onclick = function() {
    currentPhoto = 19;
    printImage();
}
thumb20.onclick = function() {
    currentPhoto = 20;
    printImage();
}
thumb21.onclick = function() {
    currentPhoto = 21;
    printImage();
}
thumb22.onclick = function() {
    currentPhoto = 22;
    printImage();
}
thumb23.onclick = function() {
    currentPhoto = 23;
    printImage();
}
thumb24.onclick = function() {
    currentPhoto = 24;
    printImage();
}
thumb25.onclick = function() {
    currentPhoto = 25;
    printImage();
}
thumb26.onclick = function() {
    currentPhoto = 26;
    printImage();
}
thumb27.onclick = function() {
    currentPhoto = 27;
    printImage();
}
thumb28.onclick = function() {
    currentPhoto = 28;
    printImage();
}
thumb29.onclick = function() {
    currentPhoto = 29;
    printImage();
}
thumb30.onclick = function() {
    currentPhoto = 30;
    printImage();
}
thumb31.onclick = function() {
    currentPhoto = 31;
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