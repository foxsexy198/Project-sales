//chuyển slide trang chủ

var arr_img = [
  "assets/images/trangchu/run/img1.png",
  "assets/images/trangchu/run/img2.png",
  "assets/images/trangchu/run/img3.png",
  "assets/images/trangchu/run/img4.png",
];

var index = 0;

function next() {
  index++;
  if (index >= arr_img.length) index = 0;
  var hinh = document.getElementById("hinh");
  hinh.src = arr_img[index];
}

function prev() {
  index--;
  if (index < 0) index = arr_img.length - 1;
  var hinh = document.getElementById("hinh");
  hinh.src = arr_img[index];
}

const autoSlide = () => {
  slider = setInterval("next()", 1500);
};

autoSlide();

const stop_sliders = () => {
  clearInterval(slider);
};
