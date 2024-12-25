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

const thead_tr = document.createElement("tr");//Csinálunk egy sort
thead.appendChild(thead_tr);//A thead-en belül

const  author_th = document.createElement("th");//Csinálunk egy cellát 
author_th.innerHTML = header.author;//Megadjuk a cella tartalmát 
thead_tr.appendChild(author_th);//Hozzárakjuk a sorhoz

const era_th = document.createElement("th");//Csinálunk egy cellát 
era_th.innerHTML = header.era;//Megadjuk a cella tartalmát 
thead_tr.appendChild(era_th);//Hozzárakjuk a sorhoz

const love_th = document.createElement("th");//Csinálunk egy cellát 
love_th.innerHTML = header.love;//Megadjuk a cella tartalmát 
thead_tr.appendChild(love_th);//Hozzárakjuk a sorhoz

const tbody = document.createElement("tbody");//Készítünk egy tbody elemet
table.appendChild(tbody);//Hozzáadjuk a table-höz

function tableMakerFunction(){
    for(const irodalom of irodalomArray ){//Végigmegyünk a tömbbön
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
            
            love_th.colSpan = "2";//Vonja össze a szerelem fejléc utáni cellákat
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
tableMakerFunction();//Függvény meghívás

const form = document.getElementById("form");//Lekérjük id alapján a formot
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

    let valid = true;//A valid értéke true

    if(!simpleValidation(author, "A költő nevének megadása kötelező!")){//Hogyha az egyszerű validációs függvényben a visszatérési érték hamis akkor adjon hibaüzenete
        valid = false;//Legyen a valid értéke false
    }
    if(!simpleValidation(era,"A korszak megadása kötelező!")){//Hogyha az egyszerű validációs függvényben a visszatérési érték hamis akkor adjon hibaüzenete
        valid = false;//Legyen a valid értéke false
    }


    if(!loveCheckbox.checked){//Hogya nincs bepipálva a "volt másik szerelme?" akkor 
        love2Value = ""; //Törölje ki bármi is van írva a második szerelem mezőbe
    }
  
    if(valid){//Hogyha a valid továbbra is true
    const newElement = {//Készítünk ezekkel az értékekkel egy új objektumot
        author: authorValue,//tulajdonságnak értékadás
        era: eraValue,//tulajdonságnak értékadás
        love1: love1Value,//tulajdonságnak értékadás
        love2: love2Value//tulajdonságnak értékadás
    }
    irodalomArray.push(newElement);//Hozzárakjuk a tömbhöz
    tbody.innerHTML = "";//Lenullázzuk a tábla tartalmát 
    form.reset();//Töröljön ki mindent az űrlap bemeneti mezőiből
    tableMakerFunction();//Meghívjük a függvényt
}
})

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