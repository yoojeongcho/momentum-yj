const images = ['0.JPEG', '1.JPEG', '2.JPEG'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement('img');

//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

// 배경 이미지를 랜덤으로 선택하고 설정
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover'; // 배경 이미지를 화면 크기에 맞게 꽉 채움
document.body.style.backgroundPosition = 'center'; // 배경 이미지가 중앙에 위치하도록 설정
document.body.style.backgroundAttachment = 'fixed'; // 배경 이미지가 스크롤 시 고정되도록 설정

