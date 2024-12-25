const irodalomArray=[//Tümb inicializálása
    {
        author:"Balassi Bálint",//A tömb első elemének author tulajdonságának értéke: "Balassi Bálint"
        era:"reformáció",//A tömb első elemének era tulajdonságának értéke: "reformáció"
        love1:"Losonczy Anna",//A tömb első elemének love1 tulajdonságának értéke: "Losonczy Anna"
        love2:"Dobó Krisztina"//A tömb első elemének love2 tulajdonságának értéke: "Dobó Krisztina"
    },
    {
        author:"Csokonai Vitéz Mihály",//A tömb második elemének author tulajdonságának értéke: "Csokonai Vitéz Mihály"
        era:"felvilágosodás",//A tömb második elemének era tulajdonságának értéke: "felvilágosodás"
        love1:"Vajda Juliána"//A tömb második elemének love1 tulajdonságának értéke: "Vajda Juliána"
    },
    {
        author:"Petőfi Sándor",//A tömb harmadik elemének author tulajdonságának értéke: "Petőfi Sándor"
        era:"magyar romantika",//A tömb harmadik elemének era tulajdonságának értéke: "magyar romantika"
        love1:"Mednyánszky Berta",//A tömb harmadik elemének love1 tulajdonságának értéke: "Mednyánszky Berta"
        love2:"Szendrey Júlia",//A tömb harmadik elemének love2 tulajdonságának értéke: "Szendrey Júlia"
    },
    {
        author:"Ady Endre",//A tömb negyedik elemének author tulajdonságának értéke: "Ady Endre"
        era:"20. Század",//A tömb negyedik elemének era tulajdonságának értéke: "20. század"
        love1:"Léda",//A tömb negyedik elemének love1 tulajdonságának értéke: "Léda"
        love2:"Csinszka"//A tömb negyedik elemének love2 tulajdonságának értéke: "Csinszka"
    }
] 
const header = {//header objektum létrehozása
    author:"Szerző neve",//A header objektum author tulajdonságának az értéke "Szerző neve"
    era:"Korszak",//A header objektum era  tulajdonságának az értéke "Korszak"
    love:"Szerelmek"//A header objektum love tulajdonságának az értéke "Szerelmek"
}

const table = document.createElement("table");//table elem készítése
document.body.appendChild(table);//Hozzárakjuk a body-hoz

const colgroup = document.createElement("colgroup");//Készítünk egy colgroup elemet
table.appendChild(colgroup);//Hozzárakjuk a table-höz

const col1 = document.createElement("col");//Készítünk egy col elemet
col1.span ="1";//Megadjuk a hatáskörét
col1.style.backgroundColor = "aqua";//Megadunk neki egy tulajdonságot ami vonatkozni fog az oszlopokra(ebben az esetben a háttérszínt)
colgroup.appendChild(col1);//Hozzárendeljük a colgroup elemhez

const col2 = document.createElement("col");//Készítünk egy col elemet
colgroup.appendChild(col2);//Hozzárendeljük a colgroup elemhez

const col3 = document.createElement("col");//Készítünk egy col elemet
col3.span ="1";//Megadjuk a hatáskörét
col3.style.backgroundColor = "aqua";//Megadunk neki egy tulajdonságot ami vonatkozni fog az oszlopokra(ebben az esetben a háttérszínt)
colgroup.appendChild(col3);//Hozzárendeljük a colgroup elemhez

const col4 = document.createElement("col");//Készítünk egy col elemet
col4.span ="1";//Megadjuk a hatáskörét
col4.style.backgroundColor = "aqua";//Megadunk neki egy tulajdonságot ami vonatkozni fog az oszlopokra(ebben az esetben a háttérszínt)
colgroup.appendChild(col4);//Hozzárendeljük a colgroup elemhez

const thead = document.createElement("thead");//Készítünk egy thead elemet
table.appendChild(thead);//Amit hozzárendelünk a table-höz
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
headerMakerFunction();//Hívjuk meg a headerMakerFunction() függvényt

const tbody = document.createElement("tbody");//Készítünk egy tbody elemet
table.appendChild(tbody);//Hozzáadjuk a table-höz
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
tableMakerFunction(irodalomArray);//Függvény meghívás
FormMakerFunction();//függvény meghívása

form.addEventListener("submit",function(e){//Adunk a form-nak egy eseménykezelőt
    e.preventDefault();//Ezzel megakadályozzuk, hogy alapértelmezetten lefusson a hozzáadás amikor betölt az oldal

    const author = document.getElementById("kolto_nev");//Lekérjük id alapján az elemeket
    const era = document.getElementById("korszak");//Lekérjük id alapján az elemeket
    const love1 = document.getElementById("szerelem1");//Lekérjük id alapján az elemeket
    const love2 = document.getElementById("szerelem2");//Lekérjük id alapján az elemeket
    const loveCheckbox = document.getElementById("masodik");//Lekérjük id alapján az elemeket

    const authorValue = author.value;//Azoknak az elemeknek az értékét külön változóba tároljuk
    const eraValue = era.value;//Azoknak az elemeknek az értékét külön változóba tároljuk
    const love1Value = love1.value;//Azoknak az elemeknek az értékét külön változóba tároljuk
    let love2Value = love2.value;//Azoknak az elemeknek az értékét külön változóba tároljuk

    const thisForm = e.currentTarget;//Eltűroljuk a változóban az ebben a form-ban tárolt elemeket
    const error = thisForm.querySelectorAll(".error");//Megkeressük az error class-okat
    for(const err of error){//Végigjárunk azokon az elemeken amiknek van error class-a
        err.innerHTML = "";//És kitöröljük azt ami bele volt írva, ha volt benne valami
    }

    if(!loveCheckbox.checked){//Hogya nincs bepipálva a "volt másik szerelme?" akkor 
        love2Value = ""; //Törölje ki bármi is van írva a második szerelem mezőbe
    }

    if(SimpleValidation(author,era) &&complexValidation(love1,love2,loveCheckbox)){//Ha a függvények igaz értékkel térnek vissza
    const newElement = {//Készítünk ezekkel az értékekkel egy új objektumot
        author: authorValue,//tulajdonságnak értékadás
        era: eraValue,//tulajdonságnak értékadás
        love1: love1Value,//tulajdonságnak értékadás
        love2: love2Value//tulajdonságnak értékadás
    }
    irodalomArray.push(newElement);//Hozzárakjuk a tömbhöz
    tbody.innerHTML = "";//Lenullázzuk a tábla tartalmát 
    form.reset();//Töröljön ki mindent az űrlap bemeneti mezőiből
    tableMakerFunction(irodalomArray);//Meghívjük a függvényt
}
})
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