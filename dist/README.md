# grafana-react

Grafana를 사용한 react 프로젝트

## 요구사항

```
node >= 14.0
```

## 초기 설정

[Grafana 설치 가이드 문서](https://grafana.com/docs/grafana/latest/installation/requirements/)  
Ubuntu, Docker 등 OS 별 설치방법 문서가 존재합니다.

### grafana 설치 ( macOS )

```bash
brew update
brew install grafana
```

### grafana plugin ini 설정 ( macOS )

grafana 소스 path를 연결합니다.

```bash
vim /usr/local/etc/grafana/grafana.ini

[paths]
plugins = /Users/react/Documents/github/private/os-grafana-react
```

## 시작하기

0. grafana 실행 ( macOS )

```bash
brew services start grafana
```

1. 설치

```bash
npm install
```

2. 개발하는 경우

```bash
npm dev
or
npm watch
```

3. 플러그인에 배포하는 경우

```bash
npm build
```

## 플러그인 사용하기

### Panel 생성

1. Add Panel -> Visualization 에서 grafana-react 선택
2. 하단 Display에서 입력값에 서버 URL 적용

### 컨트롤러 사용

1. 상단 컨트롤러 추가 버튼 클릭
2. 컨트롤러 타입 및 아이템 추가

> 주의사항  
> 복합형에서는 선택형 불가 ( 선택형은 하나만 선택하는 구조인데, 순서가 변경되면 꼬이는 문제 발생 )

3. 컨트롤러 수정 시 하단 업데이트 버튼 클릭 시 업데이트 API 호출

## API 형식

### 컨트롤러 타입

```ts
type ControllerType = 'switch' | 'radio' | 'input' | 'checkbox' | 'multiple';
```

### 컨트롤러 데이터 타입

```ts
type ControllerItemType = 'switch' | 'radio' | 'input' | 'checkbox';
```

### getController Response

작성한 서버 URL을 get method로 호출합니다.  
params는 없습니다.

```ts
interface GetControllerResponse {
  data: ControllerData[];
}
interface ControllerData {
  id: string | number;
  title: string;
  type: ControllerDataType;
  items: ControllerDataItems[];
}
interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
```

### putController Params

작성한 서버 URL을 put method로 호출합니다.  
items는 get method 형식과 동일합니다.

```ts
interface PutControllerParams {
  controllerId: string | number;
  items: ControllerDataItems[];
}
```

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System