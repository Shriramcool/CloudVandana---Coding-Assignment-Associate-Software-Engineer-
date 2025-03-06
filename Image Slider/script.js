
const images = [
    'https://picsum.photos/600/400?random=1',
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4',
    'https://picsum.photos/600/400?random=5'
];


const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


let currentIndex = 0;


function showImage(index) {
    sliderImage.src = images[index];
    sliderImage.alt = `Slider Image ${index + 1}`;
}


function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}


function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}


nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);


showImage(currentIndex);