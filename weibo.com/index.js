// 1. bind mouseenter event on li elems
// 2. collapse last active elem 
// 3. expand active elem
var rank = document.querySelectorAll('.J_rank-item')
rank.forEach(element => {
    element.addEventListener('mouseenter', function (event) {
        document.querySelector('.J_rank-item.New-vedio').className = 'J_rank-item New-item'
        event.target.className = 'J_rank-item New-vedio'
    })
});

//-------发表微博框-------
function countstr(textarea) {
    var count = 0
    var number = textarea
    for (let i = 0; i < number.length; i++) {
        if (/^[\u3220-\uFA29]+$/.test(number[i])) {
            count++
        } else {
            count = count + 0.5
        }
    }
    return count
}
var textarea = document.querySelector('.post-input')
var countnumber
textarea.addEventListener('focus', function (event) {
    var post_span_left = document.querySelector('.post-span-left')
    post_span_left.style.display = 'none'
    
    countnumber = setInterval(function (e) {
        var input_number = document.querySelector('.input-number')
        var countvalue = Math.ceil(countstr(event.target.value))
        input_number.innerHTML = countvalue

        if (countvalue > 0) {

            var post_input_number = document.querySelector('.post-input-number')
            post_input_number.style.display = "block"
        }

        if (countvalue >= 140) {
            input_number.style.color = "red"
        } else {
            input_number.style.color = "currentcolor"
        }
    }, 200)
})

textarea.addEventListener('blur', function (event) {
    clearInterval(countnumber)
    if (countstr(event.target.value) === 0) {
        var post_span_left = document.querySelector('.post-span-left')
        post_span_left.style.display = 'block'
        var post_input_number = document.querySelector('.post-input-number')
        post_input_number.style.display = "none"
    }
})