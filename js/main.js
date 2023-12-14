// 色を変えるボタン
const colorBtn = document.getElementsByClassName('color-btn');
for(let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].addEventListener('click', function(){
        this.classList.toggle('color-btn-clicked');
    })
};