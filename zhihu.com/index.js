var input = document.querySelector('.input')
var button = document.querySelector('.button')
var ask_push = document.querySelector('.ask-push')
var icon_search = document.querySelector('.Icon--search')
var SearchBar_input = document.querySelector('.SearchBar-input')
const SEARCH_HISTORY_STORAGE_KEY = 'searchHistory'
var search_history_dis=document.querySelector('.search-history-dis')
//点击放大镜时，搜索栏的变化
input.addEventListener('focus', function (event) {
    button.style.display = 'none'
    ask_push.style.display = 'block'
    icon_search.style.fill = '#0084ff'
    SearchBar_input.style.width = '400px'
    SearchBar_input.style.border = '1px solid #808080'
    //出现下拉框
    generateSearchHistoryList()
})

function generateSearchHistoryList() {
    let searchHistory = getSearchHistory()
    let html = ''
    let ul = document.querySelector('.J_search-history-list')
    //localstorage里面有数据，就遍历，并展示在li的位置上
    searchHistory.forEach(e => {
        html += `
        <li>
            ${e}
            <a class="a-remove" data-keyword="${e}">
            <svg viewBox="0 0 14 14" class="Icon Icon--remove" width="10" height="10" aria-hidden="true" style="height: 10px; width: 10px;">
                <title></title>
                <g>
                    <path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path>
                </g>
            </svg>
            </a>
        </li>`
    })

    if(!searchHistory.length) {  
        search_history_dis.style.display='none'
    }
    ul.innerHTML = html
}
//搜索图标的点击事件
icon_search.addEventListener('click', function (event) {
    let val = input.value.trim()
    if (val.length) {
        let temp = getSearchHistory()
        let index=temp.findIndex(el=>{
           return el==val
        })
        if(index!=-1){
            temp.splice(index,1)
        }
        //操作数组，搜索过重复的就置顶
        temp.unshift(val)
        setSearchHistory(temp)
    }
})

function getSearchHistory() {
    return JSON.parse(localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY)) || []
}

function setSearchHistory(data) {
    localStorage.setItem(SEARCH_HISTORY_STORAGE_KEY, JSON.stringify(data))
}
//搜索历史里面li的XX的点击事件的冒泡
document.body.addEventListener('click', e => {
    let removeEl = e.target.closest('.a-remove')
    if (removeEl) {
        let keyword = removeEl.getAttribute('data-keyword')
        let temp = getSearchHistory()
        temp = temp.filter(e=>{
            return keyword !== e
        })
        //x最近的li是liEl
        let liEl = removeEl.closest('li')
        //移除这个li,????为啥这么写？？？？
        liEl && liEl.remove()
        setSearchHistory(temp)
    }
})

//清除
var clear_all=document.querySelector('.clear-all')
clear_all.addEventListener('click',function(event){
    let search_history_dis = document.querySelector('.search-history-dis')
    search_history_dis.outerHTML=''
    setSearchHistory([])
    event.preventDefault()
})

//脱靶之后恢复
document.body.addEventListener('click', e => {
    let removeEl = e.target.closest('.ask-push')||e.target.closest('.SearchBar')
    if (!removeEl) {
        button.style.display = 'block'
        ask_push.style.display = 'none'
        icon_search.style.fill = '#808080'
        SearchBar_input.style.width = '320px'
        SearchBar_input.style.border = '1px solid #ebebeb'
    }
}) 
