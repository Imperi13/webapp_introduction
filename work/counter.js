let count=0
const countUp=()=>{
    count++
    const countElement=document.querySelector('#count')
    countElement.innerText= '回数: '+count
}
const reset=()=>{
    count=0
    const countElement=document.querySelector('#count')
    countElement.innerText= '回数: '+count
}

let sec=0
let timer

const updateTimer=()=>{
    sec++
    const countElement=document.querySelector('#timer')
    countElement.innerText= '秒数: '+sec
}

const setTimer=()=>{
    timer=setInterval(updateTimer,1000)
    document.getElementById('setTimer').disable=true
}

const stopTimer=()=>{
    clearInterval(timer)
    const countElement=document.querySelector('#timer')
    countElement.innerText= '秒数: '+sec
    document.getElementById('setTimer').disable=false
}

const clearTimer=()=>{
    clearInterval(timer)
    sec=0
    const countElement=document.querySelector('#timer')
    countElement.innerText= '秒数: '+sec
    document.getElementById('setTimer').disable=false
}