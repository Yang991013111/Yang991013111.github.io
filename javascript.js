let imgArr = document.querySelectorAll('.img')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let imgIndex = 0;

function randomText() {
    for (let i = 0; i < imgArr.length; i++) {
        imgArr[i].style.width = '20vw'
        imgArr[i].style.transform = 'translate(0,0)'
        switch (i) {
            case 0:
                imgArr[i].style.left = '10px'
                imgArr[i].style.top = '10px'
                break
            case 1:
                imgArr[i].style.right = '10px'
                imgArr[i].style.top = '10px'
                break
            case 2:
                imgArr[i].style.left = '10px'
                imgArr[i].style.bottom = '10px'
                break
            case 3:
                imgArr[i].style.right = '10px'
                imgArr[i].style.bottom = '10px'
                break
        }
    }
    imgArr[imgIndex].style.width = '30vw'
    switch (imgIndex) {
        case 0:
            imgArr[imgIndex].style.left = '50%'
            imgArr[imgIndex].style.top = '50%'
            imgArr[imgIndex].style.transform = 'translate(-50%,-50%)'
            break
        case 1:
            imgArr[imgIndex].style.right = '50%'
            imgArr[imgIndex].style.top = '50%'
            imgArr[imgIndex].style.transform = 'translate(50%,-50%)'
            break
        case 2:
            imgArr[imgIndex].style.left = '50%'
            imgArr[imgIndex].style.bottom = '50%'
            imgArr[imgIndex].style.transform = 'translate(-50%,50%)'
            break
        case 3:
            imgArr[imgIndex].style.right = '50%'
            imgArr[imgIndex].style.bottom = '50%'
            imgArr[imgIndex].style.transform = 'translate(50%,50%)'
            break
    }
    if (imgIndex == 3) {
        imgIndex = 0
    } else {
        imgIndex++
    }
}

randomText()
setInterval(() => {
    randomText()
}, 1000)
