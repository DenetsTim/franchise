slidesPerPage = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 1 : 3

let spliders = document.getElementsByClassName( 'splide' );
for ( let i = 0; i < spliders.length; i++ ) {
    new Splide(spliders[ i ], {
        type: 'loop',
        perPage: slidesPerPage,
        focus: 'center',
        gap: '30px',
        arrows: false,
        pagination: false,
        autoplay: 'pause',
        intersection: {
            inView: {
                autoplay: true,
            },
            outView: {
                autoplay: false,
            },
        },
        interval: 1500,
        perMove: 1,
    }).mount( window.splide.Extensions );
}


let mainModal = document.getElementById("mainModal");
let modalImg = document.getElementById("modalImg");

let imgs = document.querySelectorAll('img')
imgs.forEach(img => {
    img.onclick = function(){
        mainModal.style.display = "flex";
        modalImg.src = this.src;
    }
});

mainModal.onclick = function(event){
    if (!event.target.closest('.modal_content')){
        this.style.display = "none";
    }
};

let confidentModal = document.getElementById("confidentPoliticsModal");

let confidentModalLinks = document.querySelectorAll('.confident_politics_link')
confidentModalLinks.forEach(link => {
    link.onclick = function(){
        confidentModal.style.display = "block";
        document.body.style.overflowY = "hidden";
    }
})
confidentModal.onclick = function(event){
    if (!event.target.closest('.modal_text')){
        this.style.display = "none";
        document.body.style.overflowY = "auto";
    }
};