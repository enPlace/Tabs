let tabs = document.querySelectorAll('[data-tab-target]')
let tabContent = document.querySelectorAll('[data-tab-content]')
const tabtargs = document.querySelectorAll(tabs[0].dataset.tabTarget)
let tabList = document.querySelector(".tablist")
contentContainer = document.querySelector(".tab-content")



tabs.forEach(tab =>{
    tab.addEventListener('click', e =>{
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
   
    // make a new tab at the top with all relevent attributes //
    const listLength = document.querySelectorAll("li").length
    const inputValue = document.querySelector("#tabname").value
    const newLi = document.createElement("li")
    newLi.textContent= inputValue
    newLi.classList.add("tab")
    tabs = document.querySelectorAll('[data-tab-target]')

    //CLONES AND REPLACES TABS, REMOVING EVENT LISTENERS////////////////////
    tabs.forEach(tab=>{
        tab.replaceWith(tab.cloneNode(true))
    })


    /////////////////Adding more attributes after the clone///////
    newLi.setAttribute("data-tab-target", `#newtab${listLength}`)
    tabList.appendChild(newLi)
    console.log(listLength)
    
 

    //Creating content section for each new tab///
    newDiv = document.createElement("div")
    newh1 = document.createElement("h1")
    newp = document.createElement("p")

    newDiv.setAttribute("id", `newtab${listLength}`)
    newDiv.setAttribute("data-tab-content", "something")
    
    newh1.textContent = `${inputValue}`
    newp.textContent = `This is your new tab, "${inputValue}"`
    newDiv.appendChild(newh1)
    newDiv.appendChild(newp)
    contentContainer.appendChild(newDiv)
    

    
    //add event listener and events for new tabs and content

    tabs = document.querySelectorAll('[data-tab-target]')
    tabContent = document.querySelectorAll('[data-tab-content]')
    

tabs.forEach(tab =>{
    tab.addEventListener('click', e =>{
        
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

    newTab.reset()

})
