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