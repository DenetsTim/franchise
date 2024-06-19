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

let modalImgBtn_prev = document.querySelector(".modalImgBtn.prev");
let modalImgBtn_next = document.querySelector(".modalImgBtn.next");

const CERTIFICATE_COUNT = 6
const COMMENT_COUNT = 4

function getImgNum(src, is_next) {
    const NUM = is_next ? parseInt(src.split('.').at(-2).at(-1)) + 1 : parseInt(src.split('.').at(-2).at(-1)) - 1
    const COUNT = src.split('/').at(-1).startsWith("ce") ? CERTIFICATE_COUNT : COMMENT_COUNT;

    return NUM > COUNT ? 1 : NUM == 0 ? COUNT : NUM;
}
function getImgSrc(src, is_next){
    const NUM = getImgNum(src, is_next);

    const index = src.lastIndexOf(src.split('.').at(-2).at(-1));
    const res = src.substring(0, index) + NUM + src.substring(index + 1);
    
    return res;
}

modalImgBtn_prev.onclick = function(){
    modalImg.src = getImgSrc(modalImg.src, false);
}
modalImgBtn_next.onclick = function(){
    modalImg.src = getImgSrc(modalImg.src, true);
}

mainModal.onclick = function(event){
    if (!event.target.closest('.modal_content') && !event.target.closest('.modalImgBtn')){
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