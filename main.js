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

headerMakerFunction();//Hívjuk meg a headerMakerFunction() függvényt

const tbody = document.createElement("tbody");//Készítünk egy tbody elemet
table.appendChild(tbody);//Hozzáadjuk a table-höz

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
