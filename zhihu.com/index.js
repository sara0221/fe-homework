var input = document.querySelector('.input')
var button = document.querySelector('.button')
var ask_push = document.querySelector('.ask-push')
var icon_search=document.querySelector('.Icon--search')
const SEARCH_HISTORY_STORAGE_KEY = 'searchHistory'
input.addEventListener('focus', function (event) {
    button.style.display = 'none'
    ask_push.style.display = 'block'   
    icon_search.style.right='-390px'
    icon_search.style.top='-25px'
    icon_search.style.fill='#0084ff'
    generateSearchHistoryList()
})

function generateSearchHistoryList() {
    let searchHistory = JSON.parse(localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY)) || []
    let html = ''
    let ul = document.querySelector('.J_search-history-list')

    searchHistory.forEach(e=>{
        html += `
        <li>
            ${e}
            <svg viewBox="0 0 14 14" class="Icon Icon--remove" width="10" height="10" aria-hidden="true" style="height: 10px; width: 10px;">
                <title></title>
                <g>
                    <path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path>
                </g>
            </svg>
        </li>`
    })

    // if (!searchHistory.length) {
    //     html += '<li>扎无桑珊</li>'
    // }

    ul.style.display = searchHistory.length ? 'block' : 'none'
    ul.innerHTML = html
}

document.body.addEventListener('click', function (event) {
    debugger
    button.style.display = 'block'
    ask_push.style.display = 'none'
    icon_search.style.right='30px'
    icon_search.style.top='0px'
    icon_search.style.fill='#8590a6'
})

icon_search.addEventListener('click',function(event){
    let val = input.value.trim()
    if (val.length) {
        let temp = JSON.parse(localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY)) || []
        temp.unshift(val)
        localStorage.setItem(SEARCH_HISTORY_STORAGE_KEY, JSON.stringify(temp))
    }
})