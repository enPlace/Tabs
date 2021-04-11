const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', e=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(content=>{
            content.classList.remove('active')
        })
        target.classList.add('active')
        console.log(target.className)

    })
})