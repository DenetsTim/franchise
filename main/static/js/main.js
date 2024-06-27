let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
let slidesPerPage = isMobile ? 1 : 3

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


const mainModal = document.getElementById("mainModal");
const modalImg = document.getElementById("modalImg");

const imgs = document.querySelectorAll('img')
imgs.forEach(img => {
    if (img.id.startsWith('c')){
        img.onclick = function(){
            mainModal.style.display = "flex";
            modalImg.src = this.src;
        }
    }
});

const modalImgBtn_prev = document.querySelector(".modalImgBtn.prev");
const modalImgBtn_next = document.querySelector(".modalImgBtn.next");

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

const confidentModal = document.getElementById("confidentPoliticsModal");
const confidentModalLinks = document.querySelectorAll('.confident_politics_link');

confidentModalLinks.forEach(link => {
    link.onclick = function(){
        confidentModal.style.display = "block";
        document.body.style.overflowY = "hidden";
    }
});
confidentModal.onclick = function(event){
    if (!event.target.closest('.modal_text')){
        this.style.display = "none";
        document.body.style.overflowY = "auto";
    }
};

const programsButton = document.getElementById("consult_programs_button");
const maintenanceButton = document.getElementById("consult_maintenance_button");
const servicesButton = document.getElementById("consult_services_button");

const consultButtons = [programsButton, maintenanceButton, servicesButton];

const consultContentWrapper = document.querySelector(".consult_content_wrapper");

const programsContent = document.querySelector(".consult_programs_table");
const maintenanceContent = document.querySelector(".consult_maintenance_table");
const servicesContent = document.querySelector(".consult_services_table");

const consultContent = [programsContent, maintenanceContent, servicesContent];

const tableElemenets = document.querySelectorAll(".consult_table_element")

consultButtons.forEach(button => {
    button.onclick = function(event){
        if (consultContentWrapper.classList.contains("enabled")){
            if (consultContent[consultButtons.indexOf(button)].classList.contains("enabled")){
                consultContent[consultButtons.indexOf(button)].classList.remove("enabled", "flexed");
                consultContentWrapper.classList.remove("enabled");
                button.classList.remove("selected");

                tableElemenets.forEach(element => {
                    element.classList.remove("minimized");
                    element.classList.remove("expanded");
                });
            }
            else{
                consultContent.forEach(content => {
                    content.classList.remove("enabled", "flexed");
                });
                consultButtons.forEach(button => {
                    button.classList.remove("selected");
                });

                consultContent[consultButtons.indexOf(button)].classList.add("enabled");
                button.classList.add("selected");


                tableElemenets.forEach(element => {
                    element.classList.remove("minimized");
                    element.classList.remove("expanded");
                });
            }
        }
        else{
            consultContentWrapper.classList.add("enabled");
            consultContent[consultButtons.indexOf(button)].classList.add("enabled");
            button.classList.add("selected");
        }
    }
});

tableElemenets.forEach(tableElemenet => {
    tableElemenet.onclick = function(event){
        if (tableElemenet.classList.contains("expanded")) {
            tableElemenets.forEach(element => {
                if (element.parentElement == tableElemenet.parentElement){
                    element.classList.remove("minimized");
                }
            });

            tableElemenet.classList.remove("expanded");

            setTimeout(() => {
                tableElemenet.parentElement.classList.remove("flexed");
            }, 701);
        }
        else{
            tableElemenets.forEach(element => {
                if (element.parentElement == tableElemenet.parentElement){
                    element.classList.remove("expanded");
                    if (!isMobile){
                        element.classList.add("minimized");
                    }
                }
            });
            tableElemenet.classList.remove("minimized");
            tableElemenet.classList.add("expanded");

            tableElemenet.parentElement.classList.add("flexed");
        }
    }
});