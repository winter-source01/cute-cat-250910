# 🐱 Cute Cat Gallery - 고양이 사진 갤러리

바이브코딩 입문자를 위한 **The Cat API**를 활용한 웹 애플리케이션입니다.

## 📋 프로젝트 개요

이 프로젝트는 무료 API인 **The Cat API**를 사용하여 랜덤한 고양이 사진을 보여주는 간단한 웹 애플리케이션입니다. 바이브코딩의 핵심 개념들을 학습할 수 있도록 설계되었습니다.

### 🎯 학습 목표
- HTML5 기본 구조 이해
- CSS3 스타일링과 반응형 디자인
- JavaScript Fetch API 사용법
- 비동기 프로그래밍 (async/await)
- 에러 핸들링
- DOM 조작

## 🚀 빠른 시작

### 1. 파일 구조
```
cute cat_250910/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일시트
├── script.js       # JavaScript 로직
└── README.md       # 프로젝트 문서
```

### 2. 실행 방법
1. 모든 파일을 같은 폴더에 저장
2. `index.html` 파일을 웹 브라우저에서 열기
3. "Get New Cat Photo" 버튼 클릭하여 고양이 사진 보기

### 3. 필요한 것
- 웹 브라우저 (Chrome, Firefox, Safari, Edge 등)
- 인터넷 연결 (API 호출을 위해)

## 🛠️ 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| HTML5 | - | 웹 페이지 구조 |
| CSS3 | - | 스타일링 및 레이아웃 |
| JavaScript (ES6+) | - | 동적 기능 구현 |
| The Cat API | v1 | 고양이 이미지 데이터 |

## 📚 주요 기능

### ✨ 핵심 기능
- **랜덤 고양이 사진 표시**: API를 통해 매번 다른 고양이 사진을 가져옴
- **새 사진 요청**: 버튼 클릭으로 새로운 고양이 사진 로드
- **에러 처리**: 네트워크 오류나 API 오류 시 사용자 친화적 메시지 표시
- **로딩 상태**: 사진을 가져오는 동안 로딩 표시

### 🎨 UI/UX 특징
- **반응형 디자인**: 모바일과 데스크톱에서 모두 최적화
- **모던한 디자인**: 그라데이션 배경과 글래스모피즘 효과
- **부드러운 애니메이션**: 호버 효과와 전환 애니메이션
- **접근성**: 키보드 지원 (Enter 키로 새 사진 요청)

## 🔧 API 정보

### The Cat API
- **공식 사이트**: https://thecatapi.com/
- **사용 엔드포인트**: `https://api.thecatapi.com/v1/images/search`
- **응답 형식**: JSON 배열
- **무료 사용**: API 키 없이도 사용 가능

### API 응답 예시
```json
[
  {
    "id": "abc123",
    "url": "https://cdn2.thecatapi.com/images/abc123.jpg",
    "width": 500,
    "height": 400
  }
]
```

## 📖 코드 설명

### HTML 구조 (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cute Cat Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🐱 Cute Cat Gallery</h1>
        <div class="gallery">
            <img id="catImage" src="" alt="Random cat photo" />
            <button id="newCatBtn">Get New Cat Photo</button>
        </div>
        <div id="errorMessage" class="error-message" style="display: none;"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**주요 요소:**
- `#catImage`: 고양이 사진을 표시할 이미지 태그
- `#newCatBtn`: 새 사진을 요청하는 버튼
- `#errorMessage`: 에러 메시지를 표시할 영역

### CSS 스타일링 (`style.css`)
주요 스타일링 기법:
- **Flexbox**: 중앙 정렬과 레이아웃
- **CSS Grid**: 반응형 그리드 시스템
- **CSS 변수**: 일관된 색상 관리
- **미디어 쿼리**: 반응형 디자인
- **애니메이션**: 부드러운 전환 효과

### JavaScript 로직 (`script.js`)
핵심 함수들:
- `fetchNewCat()`: API에서 새 고양이 사진 가져오기
- `showError()` / `hideError()`: 에러 메시지 관리
- `setLoadingState()`: 로딩 상태 관리
- `handleImageError()`: 이미지 로드 실패 처리

## 🐛 문제 해결

### 자주 발생하는 문제들

1. **사진이 표시되지 않음**
   - 인터넷 연결 확인
   - 브라우저 개발자 도구에서 콘솔 에러 확인

2. **API 요청 실패**
   - The Cat API 서버 상태 확인
   - CORS 정책 확인 (일반적으로 문제없음)

3. **스타일이 적용되지 않음**
   - CSS 파일 경로 확인
   - 브라우저 캐시 새로고침 (Ctrl+F5)

## 🔄 확장 아이디어

### 추가 기능 제안
- **사진 저장**: 좋아하는 고양이 사진 저장 기능
- **카테고리 필터**: 특정 품종이나 색상의 고양이만 보기
- **슬라이드쇼**: 자동으로 사진이 바뀌는 슬라이드쇼
- **좋아요 기능**: 마음에 드는 사진에 좋아요 표시
- **공유 기능**: SNS에 사진 공유하기

### 기술적 개선
- **PWA**: Progressive Web App으로 변환
- **오프라인 지원**: Service Worker로 오프라인 캐싱
- **상태 관리**: Redux나 Context API 도입
- **테스팅**: Jest를 사용한 단위 테스트

## 📚 학습 자료

### 추천 학습 순서
1. **HTML 기초**: 시맨틱 태그와 접근성
2. **CSS 기초**: Flexbox, Grid, 애니메이션
3. **JavaScript 기초**: ES6+, DOM 조작, 이벤트
4. **API 사용법**: Fetch API, JSON 처리
5. **에러 핸들링**: try-catch, 사용자 경험

### 유용한 링크
- [MDN Web Docs](https://developer.mozilla.org/)
- [The Cat API 문서](https://docs.thecatapi.com/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었으며, 자유롭게 사용하고 수정할 수 있습니다.

## 🤝 기여하기

바이브코딩 입문자분들의 기여를 환영합니다!
- 버그 리포트
- 기능 제안
- 코드 개선
- 문서 번역

---

**즐거운 바이브코딩 되세요! 🚀**
