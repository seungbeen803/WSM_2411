//toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    // html의 id를 자바스크립트로 가져오는 함수
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = document.getElementsByTagName('i')[0];

    if(toggle && navList) {
        // add: 추가, remove: 제거, toggle: 추가/제거 번갈아가면서 한다
        toggle.addEventListener('click', () => {
            // toggle menu
            navList.classList.toggle('show-menu');
            // change toggle icon: bx-menu <-> bx bx-x-circle
            toggleIcon.classList.toggle('bx-menu');
            toggleIcon.classList.toggle('bx-x-circle');

        });
    }
}
toggleMenu('nav-toggle', 'nav-list');

/* 함수 선언식 */
// function say() {
//     console.log('hello world');
// }

/* 함수 표현식 */
// const say = function() {
//     console.log('hello world2');
// }

/* 화살표 함수 */
// const say = () => console.log('hello world3');
// say();

const addNow = (homeCardId) => {
    // html -> js
    const homeCard= document.getElementById(homeCardId);

    // 시간 -> index번째 식사가 선택되어야하는지 결정
    // 조식 끝 : 8:00
    // 중식 끝 : 13:00
    // 석식 끝 : 17:50
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    //console.log(hour, minute); // 14 30
    minute = hour * 60 + minute;
    // 단위를 하나로 바꿔서 구한다.
    if(minute >= 17 * 60 + 50){ // 1070
        index = 0;
    }else if(minute >= 13 * 60){
        index = 2;
    }else if(minute >= 8 * 60){
        index = 1;
    }else{
        index = 0;
    }
    // console.log(index);
    // homeCard에서 index번째 card에 now클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card')