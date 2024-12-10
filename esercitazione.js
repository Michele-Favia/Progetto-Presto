let navbar = document.querySelector("#navbar")


window.addEventListener("scroll", ()=>{
 
    if(window.scrollY > 0){
        navbar.classList.add("navbar-custom")
    }else {
        navbar.classList.remove("navbar-custom")
    }

})


let articlesNumber = document.querySelector("#articlesNumber");
let usersNumber = document.querySelector("#usersNumber");
let productsNumber = document.querySelector("#productsNumber");

function createInterval(finalN, elemento, frequenza){
    let counter = 0;

    let interval = setInterval( ()=>{

    if(counter < finalN){
        counter++
        elemento.innerHTML = counter;
    } else {
        clearInterval(interval)
    }
    }, frequenza)
}

let isEntered = false;

let observer = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isEntered == false){
            createInterval(1000, articlesNumber, 5)
            createInterval(500, usersNumber, 10)
            createInterval(120, productsNumber, 20)
            isEntered = true;
        }
    })
},  { threshold: 1 })


observer.observe(articlesNumber);


let annunci = [
    {nome: "Katana di Hattori Hanzo", categoria: "Accessori", prezzo: 500, url: "https://picsum.photos/200"},
    {nome: "Occhio di Pai Mei", categoria: "Reliquie", prezzo: 1500, url: "https://picsum.photos/201"},
    {nome: "Vaso Ming", categoria: "Arredamento", prezzo: 350, url: "https://picsum.photos/202"},
    {nome: "Soldato di Terracotta", categoria: "Oggettistica", prezzo: 2000, url: "https://picsum.photos/203"},
    {nome: "Kimono Giapponese", categoria: "Abbigliamento", prezzo: 700, url: "https://picsum.photos/204"},
]

let annunciWrapper = document.querySelector("#annunciWrapper")

annunci.forEach((annuncio, i)=>{
    if(i >= annunci.length - 3){

        let div = document.createElement("div")
        div.classList.add("col-12", "col-md-4", "col-lg-3", "my-5" )
        div.innerHTML = `
            <div class="card">
                <div class="overflow-hidden">
                    <img src="${annuncio.url}" class="card-img-top transition" alt="...">
                </div>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">NEW</span>
                <div class="card-body">
                <h5 class="card-title">${annuncio.nome}</h5>
                <p class="card-text">${annuncio.categoria}</p>
                <p class="card-text fw-bold">Prezzo: ${annuncio.prezzo}$</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-outline-danger">Aggiungi al carrello</a>
                    <i class="bi bi-heart fs-4"></i>
                </div>
                <p class="card-text mt-3 text-end"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        `
        annunciWrapper.appendChild(div)

    }
    
})

let hearts = document.querySelectorAll(".bi-heart");


hearts.forEach((heart)=>{

    heart.addEventListener("click", ()=>{
        heart.classList.toggle("bi-heart")
        heart.classList.toggle("bi-heart-fill")
        heart.classList.toggle("text-danger")
    })


})


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination"
    }
  });

})
