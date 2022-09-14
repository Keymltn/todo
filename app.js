let input = document.querySelector(".input")
let del = document.querySelector(".delete")
let app = document.querySelector(".app")
let deleteBox = document.querySelector(".box4")
console.log(deleteBox);

del.addEventListener("click" , () => {
    app.classList.toggle('none')
    deleteBox.classList.toggle('flex-wr')
})