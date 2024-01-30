<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=80ea6e&fontColor=363636&text=%EC%82%AC%EC%9A%A9%EC%9E%90%20%EB%A9%94%EC%9D%B8%20%ED%99%94%EB%A9%B4%20%EA%B5%AC%ED%98%84" alt="header"/>
</div>

<div align="center">
    CSS을 활용한 예제 연습
</div>
<br>

## 🛠️ 기술 스택 🛠️
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black">  
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=black">  
</div>

## 🧰 개발 도구 🧰

<div align="center">
    <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>



## 구현 사항

- 다크 모드 구현
- 영상 매체를 활용한 백그라운드 영상 재생
- 반응형 애니메이션 구현 (sliding menu)
- 반응형 UI 제작

## VanilaJs을 활용한 다크 모드 구현
 - white 모드 (Default)
<p align="center">
  <img src="https://github.com/km-kwon/css-example/assets/70142699/ac1401ef-a656-41f8-a3ea-0d4705883905">
</p>

 - dark 모드
<p align="center">
  <img src="https://github.com/km-kwon/css-example/assets/70142699/26ef7462-32f4-4dbd-a165-0ee3574f7927">
</p>

### 해당 소스 코드

```javascript
const dayNight = document.querySelector(".day");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");

dayNight.onclick = function(){
    body.classList.toggle("dark");
    dayNight.classList.toggle("active");
};

menu.onclick = function(){
    menu.classList.toggle("active");
    navigation.classList.toggle("active");
};
```
결과 : CSS내 active 옵션에 따른 출력 결과 조정

## 영상 매체를 활용한 백그라운드 영상 재생

- html5 기능 중 하나로 Video 태그를 활용한 백그라운드 영상 반복 재생

## 반응형 애니메이션 구현 (sliding menu)

<p align="center">
  <img src="https://github.com/km-kwon/css-example/assets/70142699/9dfa6a98-aa64-4863-b250-f655ee3c56b3">
</p>

- 특정 버튼 클릭시 왼쪽에서 메인 화면으로 슬라이딩 하는 메뉴 화면 구현
- 사용자가 메뉴 등장에 따른 지루함을 느끼지 않도록 이동 화면 구현


## 반응형 UI 제작


<p align="center">
  <img src="https://github.com/km-kwon/css-example/assets/70142699/c9dcb1e8-13d1-4a92-bf38-79f32c960824">
</p>

- 디바이스에 맞는 해상도에 따른 적절한 화면 크기 조정
- 화면 크기 조정에 따른 지연시간 최적화
- 해당 화면은 540x670 상의 디바이스에서 동작하는 화면
  
