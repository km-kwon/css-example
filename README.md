<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=80ea6e&fontColor=363636&text=css%20%EC%98%88%EC%A0%9C%20%EC%97%B0%EC%8A%B5" alt="header"/>
</div>

<div align="center">
    CSS을 활용한 예제 연습
</div>
<br>

## 🛠️ 기술 스택 🛠️
<div align="center">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
</div>

## 🧰 개발 도구 🧰

<div align="center">
    <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
    <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
</div>



## 구현 사항

- 다크 모드 구현
- 영상 매체를 활용한 백그라운드 영상 재생
- 반응형 애니메이션 구현 (sliding menu)
- 반응형 UI 제작

## 객체 선언 및 사용

```javascript
var human = function (name, old, height) {
  this.name = name;
  this.old = old;
  this.height = height;
};

const kyoungmin = new human("kyoungmin", 23, 177);
```
결과 : kyongmin 이라는 객체 초기 선언

## 객체 내 함수 선언 및 사용

```javascript

const player = {
  calc: function (firstNumber, secondNumber, typeOfCalc) {
    if ((typeOfCalc = "+")) {
      console.log(firstNumber + secondNumber);
    }
  },
};

player.calc(15, 30, "+");

```
결과 : player 객체 내 calc function 선언 및 사용

```javascript
const calc = {
  calculateKrAge: function (ageOfForeigner) {
    return ageOfForeigner + 2;
  },
};
const krAge = calc.calculateKrAge(age);
console.log(krAge);
```
결과 : krage라는 변수 선언 및 calculateKrAge 계산결과 값 출력
