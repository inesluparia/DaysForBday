function countDays(){
    let bDate = new Date(document.getElementById("b-date").value)
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let bDay = new Date(2022, bDate.getMonth(), bDate.getDate())
    
    //check if your birthday is today or next year and adjust
    if (bDay-today < 0) { bDay = new Date(2023, bDate.getMonth(), bDate.getDate()) }

    //render results
    document.getElementById("days-left-result").innerText=Math.round((bDay-today)/1000/60/60/24) + ' days'
    document.getElementById("header-container").style.display="none"
    document.getElementById("results-container").style.display="block"

    //calculate fun facts
    //Days old
    let daysOld = Math.round((today - bDate)/1000/60/60/24)
    document.getElementById("days-old-result").innerText=daysOld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    
    //Round date
    let roundDate = new Date(document.getElementById("b-date").value)
    roundDate.setDate(bDate.getDate() + 15000)
    document.getElementById("15K-days-result").innerText= roundDate.toDateString().replace(/^\S+\s/,'')

    //Random people with same birthdate
    let random = Math.floor(Math.random() * (4200000 - 3600000 + 1)) + 3600000
    document.getElementById("people-result").innerText = random.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}  