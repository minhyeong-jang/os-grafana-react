# grafana-react

Grafana를 사용한 react 프로젝트

## 요구사항

```
node >= 14.0
```

## Grafana 설치

[Grafana 설치 가이드 문서](https://grafana.com/docs/grafana/latest/installation/requirements/)  
Ubuntu, Docker 등 OS 별 설치방법 문서가 존재합니다.

### grafana 설치 ( macOS )

```bash
brew update
brew install grafana
```

## Grafana 개발환경 셋팅

### grafana ini 설정 ( macOS )

grafana 설정파일에서 plugin path를 연결합니다.

```bash
vim /usr/local/etc/grafana/grafana.ini

[paths]
plugins = /Users/react/Documents/github/private/os-grafana-react
```

### react start

0. grafana 실행 ( macOS )

```bash
brew services start grafana
```

1. 설치

```bash
yarn install
```

2. 개발하는 경우

```bash
yarn dev
or
yarn watch
```

3. 플러그인에 배포하는 경우

```bash
yarn build
```

## grafana 플러그인 설치

grafana-cli를 사용하여 플러그인을 설치합니다.

플러그인에서 자동으로 빌드해주지 않아, 설치 후 build 작업 진행이 필요합니다.

```bash
grafana-cli --pluginUrl https://github.com/minhyeong-jang/os-grafana-react/archive/main.zip plugins install grafana-react
```

설치완료 후 서비스를 재시작합니다.

## 플러그인 사용하기

### Panel 생성

1. Add Panel -> Visualization 에서 grafana-react 선택
2. Display 탭에서 API method / url 입력

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

### Get Controller Response

서버에서 컨트롤러 데이터를 호출합니다.

```js
# Method: `${option.getMethod}`
# Request URL: `${option.getUrl}`
# Response: <GetControllerResponse>
```

```ts
interface GetControllerResponse {
  data: ControllerData[];
}
interface ControllerData {
  id: string | number;
  type: ControllerDataType;
  items: ControllerDataItems[];
  selectedId?: string | number | null;
}
interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
```

### Create Controller Params

컨트롤러를 생성합니다.  
파라미터는 Get Controller와 동일합니다.

```js
# Method: `${option.createMethod}`
# Request URL: `${option.createUrl}`
# Params: <ControllerData>
```

```ts
interface ControllerData {
  id: string | number;
  type: ControllerDataType;
  items: ControllerDataItems[];
  selectedId?: string | number | null;
}
interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
```

### Update Controller Params

컨트롤러를 수정합니다.

```js
# Method: `${option.updateMethod}`
# Request URL: `${option.updateUrl}`
# Params: <PutControllerParams>
```

```ts
interface PutControllerParams {
  controllerId: string | number;
  type: ControllerType;
  items: ControllerDataItems[];
  selectedId?: string | number | null;
}
interface ControllerDataItems {
  id: string | number;
  type: ControllerItemType;
  label: string;
  value: boolean | string;
}
```

<!-- ### Delete Controller

컨트롤러를 삭제합니다.

```js
# Method : `${option.deleteMethod}`
# Request URL: `${option.deleteUrl}/${controllerId}`
``` -->

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
