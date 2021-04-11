const tabs = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab =>{
    tab.addEventListener('click', e=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        target.classList.add('active')
        console.log(target.className)

    })
})