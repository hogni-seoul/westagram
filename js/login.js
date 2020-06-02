const userName = document.getElementById("user-name");
const userPassword = document.getElementById("user-password");
const inputs = [userName, userPassword];

const loginButton = document.querySelector(".login-btn");

// id, pw 입력에 따른 로그인 버튼 활성화
for (let i in inputs) {
  inputs[i].addEventListener("keyup", function () {
    const userNameLength = userName.value.length;
    const userPasswordLength = userPassword.value.length;
    const isDisabled = loginButton.classList.contains("disabled");

    if (isDisabled && userNameLength >= 1 && userPasswordLength >= 1) {
      loginButton.classList.remove("disabled");
      loginButton.disabled = false;
      // console.log("on");
    }

    if (!isDisabled && (userNameLength === 0 || userPasswordLength === 0)) {
      loginButton.classList.add("disabled");
      loginButton.disabled = true;
      // console.log("off");
    }
  });
}

// 좌측 이미지 전환
const changeImg = function () {
  const images = document.querySelectorAll(".aside__images img");
  let index;

  for (let i = 0; i < images.length; i++) {
    const imgClassList = images[i].classList;
    if (imgClassList.contains("selected")) {
      imgClassList.remove("selected");
      index = i;
      break;
    }
  }

  if (index === images.length - 1) {
    images[0].classList.add("selected");
  } else {
    images[index + 1].classList.add("selected");
  }
};

setInterval(changeImg, 4000);

// 로그인 버튼 클릭 확인, 이벤트 캔슬
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("Login Button Clicked");
});
