/* javascript
------------------------------------------ */
const button = document.getElementById('button');

button.addEventListener('click', function(){
    this.innerHTML = 'クリック済';
    this.setAttribute('disabled', true);
});

const buttonAdd = document.getElementById('button-add');
const buttonClear = document.getElementById('button-clear');
const list = document.getElementById('list');

buttonAdd.addEventListener('click', function(){
    const element = document.createElement('li');
    element.innerHTML = 'リスト';

    list.appendChild(element);
});

buttonClear.addEventListener('click', function(){
    //list.removeChild(list.lastChild);
    while(list.lastChild) { // ←この条件式では、最後の要素が存在する限りtrueになるということ（最後の要素がなくなればfalse）
        list.removeChild(list.lastChild)
    }
});
// example03
const buttonColor = document.querySelectorAll('.color .button');
const listColor = document.getElementById('list-color');

const colorListAdd = function(){
    const colorItem = document.createElement('li');
    colorItem.innerHTML = this.innerHTML;

    listColor.appendChild(colorItem);
}

for(let j = 0; j < buttonColor.length;j++){
    buttonColor[j].addEventListener('click', colorListAdd);
}
/* technique-1
------------------------------------------ */
const techCircle = $('.technique-circle');
techCircle.on('click', function(){
    $(this).animate({
        bottom: '5rem',
        left: '10rem',
    }, 1000)
});
const techArrow = $('.technique-arrow');
techArrow.on('click', function(){
    techCircle.animate({
        bottom: '0',
        left: '0',
    }, 1000)
});

/* 色を変えるボタン
------------------------------------------ */
const colorBtn = document.getElementsByClassName('color-btn');
for(let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].addEventListener('click', function(){
        this.classList.toggle('color-btn-clicked');
    })
};