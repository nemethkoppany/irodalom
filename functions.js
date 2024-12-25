/**
 * Fejléc készítős függvény
 * Végigmegyünk az objektumon és annyi cellát készítünk ahány értéke van az objektumnak
 * Valamint ha a cellagenerálás a "Szerelmek"-hez ér vonja össze a cellákat, hogy egyik szerelem se lógjon ki
 */
function headerMakerFunction(){//Fejléckészytő függvény
    const thead_tr = document.createElement("tr");//Készyt egy sort
    thead.appendChild(thead_tr);//Amit hozzárak a thead-hez

    for(const head of Object.values(header)){//Végigmegy a headser objektum tulajdonságainak értékein
        const th = document.createElement("th");//Készyt egy cellát
        th.innerHTML = head;//Amiben az aktuális érték lesz
        thead_tr.appendChild(th);//És hozzárakja a thead_tr-hez

        if(head == "Szerelmek"){//Ha a változó ami végigmegy az értékeken egyenlő lesz a "Szerelmek"-el
            th.colSpan = "2";//Vonja össze a sorokat
        }
    }
}
/**
 * tábla készítése
 * Végigmegyünk a tömbön amiben az információ van
 * ezeket berendezzük cellákba és elágazással kezeljük ha esetleg nincs mindenhol ugyan annyi adat 
 * @param {array} array//Típus megadás  
 */
function tableMakerFunction(array){//Táblagenerálós függvény egy paraméterrel
    for(const irodalom of array ){//Végigmegyünk a tömbbön
        const tbody_tr = document.createElement("tr");//Csinálunk egy sort
        tbody.appendChild(tbody_tr);//A tbody-n belül

        const author_td = document.createElement("td");//Csinálunk egy cellát 
        author_td.innerHTML = irodalom.author;//Megadjuk a cella tartalmát 
        tbody_tr.appendChild(author_td);//Hozzárakjuk a sorhoz

        const era_td = document.createElement("td");//Csinálunk egy cellát 
        era_td.innerHTML = irodalom.era;//Megadjuk a cella tartalmát 
        tbody_tr.appendChild(era_td);//Hozzárakjuk a sorhoz

        const love_td = document.createElement("td");//Csinálunk egy cellát 
        love_td.innerHTML = irodalom.love1;//Megadjuk a cella tartalmát 
        tbody_tr.appendChild(love_td);//Hozzárakjuk a sorhoz

        if(irodalom.love2){//Hogyha van második szerelem
            const love2_td = document.createElement("td");//Csinálunk egy cellát 
            love2_td.innerHTML = irodalom.love2;//Megadjuk a cella tartalmát 
            tbody_tr.appendChild(love2_td);//Hozzárakjuk a sorhoz
          
           
        }
        else{//Máskülönben
            love_td.colSpan = 2;//az első szerelmi cellával vonja össze az utáni cellát
            love_td.style.textAlign = "center";//És igazítsa középre a szöveget
        }
       if(!irodalom.love1 && !irodalom.love2 ){//Hogyha egyik szerelem sincs megadva
        love_td.innerHTML = "-";//Csak egy - szerepeljen a szerelmek helyén
        love_td.style.textAlign = "center";//És azt igazítsa középre
       }
      
    }
}
/**
 * Az egyszerű validáció logikája
 * Ha valamelyik bemeneti mezőnél nincs semmi írva
 * megkeresi annak a parentelementjéz
 * Megnézi, hogy van a error class
 * Ha van akkor oda írja majd a hibaüzenete
 * @param {HTMLInputElement} input //Típus megadás 
 * @param {String} errormsg //Típus megadás 
 * @returns {boolean}//Típus megadás 
 */
function simpleValidation(input,errormsg){//egyszerű validációs függvény, paraméterekkel
    let valid = true;//A valid értéke igaz
    if(input.value === ""){//Ha nincs semmi írva a mezőbe 
        const parentElement = input.parentElement;//eltároljuk az bemeneti mező parentElementjét egy másik változóban
        const errorPlace = parentElement.querySelector(".error");//Megkeressük az error class-okat
        if(errorPlace !== undefined){//Ha van error class-al ellátott elem
            errorPlace.innerHTML = errormsg;//Akkor oda írjon hibaüzenetet
        }
        valid = false;//Legyen a valid értéke false
    }
    return valid;//Térjen vissza a validdal
}
/**
 * Egyszerű validáció
 * Ha bármelyik függvényhívás hamis értékkel tér vissza hibaüzenetet dob
 * @param {HTMLInputElement} author //Típus megadás 
 * @param {HTMLInputElement} era //Típus megadás 
 * @returns {boolean}//Típus megadás 
 */
function SimpleValidation(author, era){//függvény az egyszerű validálás kezelésére
    let valid = true;//A valid értéke igaz
    if(!simpleValidation(author, "A költő nevének megadása kötelező!")){//Hogyha az egyszerű validációs függvényben a visszatérési érték hamis akkor adjon hibaüzenete
        valid = false;//Legyen a valid értéke false
    }
    if(!simpleValidation(era,"A korszak megadása kötelező!")){//Hogyha az egyszerű validációs függvényben a visszatérési érték hamis akkor adjon hibaüzenete
        valid = false;//Legyen a valid értéke false
    }
    return valid;//Térjen vissza a validdal
}
/**
 * Összetett validáció
 * Ha be van pipálva a checkbox, de vagy az egyik szerelem vagy a másik, vagy egyik sincs kitöltve akkor hibaüzenetet dob 
 * @param {HTMLElement} love1//Típus megadás 
 * @param {HTMLElement} love2 //Típus megadás
 * @param {HTMLInputElement} loveCheckbox //Típus megadás
 * @returns {boolean}//Típus megadás
 */
function complexValidation(love1,love2,loveCheckbox){//Összetett validáció függvénybe szervezése
    let valid = true;//A valid értéke igaz
    if(loveCheckbox.checked && love1.value === "" && love2.value === ""){//Hogyha be van pipálva a checkbox, de nincs kitöltve egyik szerelem sem a
        simpleValidation(love1, "A költőnek kötelező megadni a szerelmeit");//Adjon hibaüzenetet mind a kettő bemeneti mezőhöz
        simpleValidation(love2, "A költőnek kötelező megadni a szerelmeit");//Adjon hibaüzenetet mind a kettő bemeneti mezőhöz
        valid = false;//És legyen a valid értéke false
    }
    if(loveCheckbox.checked && love1.value === "" && love2.value !== ""){//Hogyha be van pipálva, de csak a második szerelemhez van írva valami
        simpleValidation(love1, "Biztos jó helyre írtad a szerelmet ha csak egy van neki?");//Adjon hibaüzenetet
        valid = false;//És legyen a valid értéke false
    }
    if(loveCheckbox.checked && love1.value !== "" && love2.value === ""){//Ha be van pipálva, de csak az első-höz van írva valami(az úgy furán néz ki ha nincs a másodikhoz is írva valami)
        simpleValidation(love2,"Meg kell adni a másik szerelmet is ha ki van pipálva");//Akkor írjon ki hibaüzenetet
        valid = false;//És legyen a valid értéke false
    }
    return valid;//Térjen vissza a valid értékekel
}
/**
 * Az űrlap szükséges elemeit készíti el
 * készít div-et amiben el van tárolva az egész
 * a hely ahová a bemeneti mezőhöz kell adni szöveget, azt itt adjuk meg
 * A bemeneti mezőt itt készítjük el
 * És minden hozzárendelünk a div-hez
 * @param {HTMLElement} parent //Típus megadás
 * @param {string} type //Típus megadás
 * @param {string} innerHTML //Típus megadás
 * @param {string} nameID //Típus megadás
 * @returns {HTMLElement}//Típus megadás
 */
function CreateInput(parent,type,innerHTML,nameID ){//a formhoz szükséges elemeket készytő függvény
    const div = document.createElement("div");//Készítünk egy div elemet
    div.className = "field";//Adunk neki egy class-t

    const label = document.createElement("label");//Készítünk egy label elemet
    label.htmlFor = nameID;//A label forjának megadása
    label.innerHTML = innerHTML;//Mi lesz a bemeneti mező mellé írva

    const input = document.createElement("input")//input elemet létrehozzuk
    input.type = type;//input típusának megadása
    input.id = nameID;//input id-jének megadása
    input.name = nameID;//input name-jének megadása

    const errorDiv = document.createElement("div")//div létrehozása
    errorDiv.classList.add("error")//div class-ának megadása

    parent.appendChild(div);//Hozzárendeljük a parent-hez
    div.appendChild(label);//Hozzárendeljük a div-hez
    div.appendChild(document.createElement("br"));//Hozzárendelünk a div-hez egy break pointot
    div.appendChild(input);//Hozzárendeljük a div-hez
    div.appendChild(document.createElement("br"));//Hozzárendelünk a div-hez egy break pointot
    div.appendChild(document.createElement("br"));//Hozzárendelünk a div-hez egy break pointot
    div.appendChild(errorDiv);//Hozzárendeljük a div-hez
    return div;
}
/**
 * Összeállítja a függvényt
 * formot készít és megtölti azt a másik függvényben készített elemekkel
 * majd készít egy gombot is
 */
function FormMakerFunction(){//Az űrlap összeállítására szolgáló űrlap
    const form = document.createElement("form")//form létrehozása
    form.id = "form"//form id-jének megadása
    document.body.appendChild(form)//Hozzárakjuk a body-hoz

    form.append(//formhoz hozzáadás
        CreateInput(form,"text","Költö neve:","kolto_nev"),//A bemeneti mezőket
        CreateInput(form,"text","korszak:","korszak"),//A bemeneti mezőket
        CreateInput(form,"text","Szerelme:","szerelem1"),//A bemeneti mezőket
        CreateInput(form,"checkbox","Volt másik szerelem?","masodik"),//A checkboxot
        CreateInput(form,"text","Szerelme:","szerelem2")//A bemeneti mezőket
    )

    const button = document.createElement("button")//gomb létrehozása
    button.type = "submit"//gomb típusának megadása
    button.innerHTML = "Hozzáadás"//gomb szövegének megadása
    form.appendChild(button)//Hozzárendeljük a formhoz
}