const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = document.querySelector('.button');
let input = document.querySelector('input');

let file;

button.onclick = () =>{
    input.click();
};

input.addEventListener('change',function(){
    file = this.files[0];
  dragArea.classList.add('active');
  displayFile();
});

dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragText.textContent = "Release to upload";
    dragArea.classList.add('active');

});

dragArea.addEventListener('dragleave',() => {
    dragText.textContent = "drag and drop";
    dragArea.classList.remove('active');

});

dragArea.addEventListener('drop',(event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];

    displayFile();
});

function displayFile(){
    let fileType = file.type;
   
    let validExtensions = ['images/jpeg','image/jpg','image/png'];

    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let fileURL = fileReader.result;
          
            let imgTag = `<img src="${fileURL}" alt="">`;
            dragArea.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file);
    }else{
        alert ('This file is not an Images');
        dragArea.classList.remove('active');
    }
//    console.log('The file is droped');
}