const hiddenElements = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.remove("hidden")
            entry.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})

hiddenElements.forEach(element => observer.observe(element))

const cells = document.querySelectorAll(".cell")

for(let i=0; i<cells.length; i++){
    cells[i].style.animationDelay = "0.2*is"
}