//toggle hidden menu
const toggleMenu = (toggleId, navListId) => {
    // html의 id를 자바스크립트로 가져오는 함수
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId); 

    if(toggle && navList) {
        // add: 추가, remove: 제거, toggle: 추가/제거 번갈아가면서 한다
        toggle.addEventListener('click', () => navList.classList.toggle('show-menu'));
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