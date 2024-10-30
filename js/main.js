const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
    //발생내용 logic 작성
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', ' ')
})

// badge scroll
const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function(){
    console.log('scroll!')
    if (window.scrollY > 500) {
        // 뱃지 숨기기
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
        })
    } else {
        // 뱃지 표시
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
    })

}
}, 300)) // _.throttle (함수, 시간)