// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
let generator =document.getElementById('colorPicker')

function makeGrid(){
let heightY = document.getElementById('inputHeight').value
let widthX = document.getElementById('inputWidth').value
generator.style.height = heightY + 'px'
generator.style.width = widthX + 'px'
}

