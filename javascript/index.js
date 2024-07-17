const bg4 = new Swiper('.bg4 .swiper', {
    autoplay:{delay:2000},
    speed:3000,
    loop:true,
    navigation:{
        nextEI:'.web .swiper-button-prev',
        prevEI:'.web .swiper-button-next',
    }
})
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:2,//한번에 보일 슬라이드 수(모바일)
    spaceBetween:0,//슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},
    loop:true,
    speed:3000,
    freemode:true,
    //반응형 슬라이드 수
    breakpoints:{
        800:{slidesPerView:3,}, //800 이상일떄 3개
        1200:{slidesPerView:4.3,}, //1200이상일때 4개
    }
})
/* 풀페이지 */
$("main").fullpage({})