let input = document.querySelector(".input")
let del = document.querySelector(".delete")
let app = document.querySelector(".app")
let deleteBox = document.querySelector(".box4")
let yes = document.querySelector(".yes")
console.log(deleteBox);

del.addEventListener("click" , () => {
    app.classList.toggle('none')
    deleteBox.classList.add('flex-wr')
})

del.addEventListener("click" , () => {
    yes.classList.add('yes')
})
