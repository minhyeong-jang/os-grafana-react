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

3. 플러그인 사용하는 경우

```bash
npm build
```

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
