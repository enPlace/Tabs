let tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')
const tabtargs = document.querySelectorAll(tabs[0].dataset.tabTarget)
tabList = document.querySelector(".tablist")

tabs.forEach(tab =>{
    tab.addEventListener('click', e=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        
        tabContent.forEach(content=>{
            content.classList.remove('active')
        })
        target.classList.add('active')
        console.log(target.className)
        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')

    })
})
newTab = document.querySelector(".newtab")
newTab.addEventListener('submit', e=>{
    e.preventDefault()
    // make a new tab at the top//
    const listLength = document.querySelectorAll("li").length
    const inputValue = document.querySelector("#tabname").value
    const newLi = document.createElement("li")
    newLi.textContent= inputValue
    newLi.classList.add("tab")
    newLi.setAttribute("data-tab-target", `#newtab${listLength}`)
    tabList.appendChild(newLi)
    console.log(listLength)
    globalThis.tabs = document.querySelectorAll('[data-tab-target]')
    tabs = document.querySelectorAll('[data-tab-target]')
    newLi.addEventListener("click", e=>{
        
        tabs.forEach(tab=>{
            tab.classList.remove("active")
        })
        newLi.classList.add("active")
        
    })
 
})
