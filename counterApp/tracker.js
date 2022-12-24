let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0



function increment() {
    count = count + 1
    countEl.innerHTML = count

}


function save() {
 let countstr = count + ' -  '
 saveEl.innerHTML += countstr
 count = 0 
 countEl.innerHTML = count
}

