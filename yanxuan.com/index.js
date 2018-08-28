var html = template('test', {
    list: [{
        text: '【福利】下载严选APP，抢1元包邮团，领...',
        link: 'http://u.163.com/aospd41?_stat_content=%E3%80%90%E7%A6%8F%E5%88%A9%E3%80%91%E4%B8%8B%E8%BD%BD%E4%B8%A5%E9%80%89APP%EF%BC%8C%E6%8A%A21%E5%85%83%E5%8C%85%E9%82%AE%E5%9B%A2%EF%BC%8C%E9%A2%86...&_stat_refer=%2F'
    }, {
        text: '【严选x中行联名卡】达标领80元礼品卡>',
        link: 'http://you.163.com/act/pub/Gq0SwbxEmB.html?from=web_hz_neibu_neibu_105&_stat_content=%E3%80%90%E4%B8%A5%E9%80%89x%E4%B8%AD%E8%A1%8C%E8%81%94%E5%90%8D%E5%8D%A1%E3%80%91%E8%BE%BE%E6%A0%87%E9%A2%8680%E5%85%83%E7%A4%BC%E5%93%81%E5%8D%A1%3E&_stat_refer=%2F'
    }, {
        text: '【福利】下载严选APP，抢1元包邮团，领...',
        link: 'http://u.163.com/aospd41?_stat_content=%E3%80%90%E7%A6%8F%E5%88%A9%E3%80%91%E4%B8%8B%E8%BD%BD%E4%B8%A5%E9%80%89APP%EF%BC%8C%E6%8A%A21%E5%85%83%E5%8C%85%E9%82%AE%E5%9B%A2%EF%BC%8C%E9%A2%86...&_stat_refer=%2F'
    }]
});
document.getElementById('yanxuan-notice-ul').innerHTML = html
var notice_ul = document.getElementById('yanxuan-notice-ul')

function moveBysecond() {
    //行内设置的时候才能取得其值
    var currentTop = parseInt(notice_ul.style.top)
    if (currentTop < -69) {
        currentTop = 20
    }
    currentTop = currentTop - 30 + "px"
    notice_ul.style.top = currentTop
    setTimeout(moveBysecond, 2000)
    
}
 moveBysecond()

 var ht=template('test',{
    list:[{
        text:'在线客服',
        link:''
    },{
        text:'帮助中心',
        link:''
    },{
        text:'商务合作',
        link:''
    },{
        text:'开放平台',
        link:''
    }]
});
document.getElementById('drop-down-menu-ul').innerHTML=ht

var icon_upArrow=document.querySelector(".drop-down-menu-li")
var drop_down_menu=document.querySelector(".right-ul-li-div")
icon_upArrow.addEventListener("mouseenter",function(e){
    drop_down_menu.style.display="block"
})
icon_upArrow.addEventListener("mouseleave",function(){
    drop_down_menu.style.display="none" 
})

// drop_down_menu.addEventListener("mouseenter",function(e){
//     console.log(2)
//     drop_down_menu.style.display="block"
// })