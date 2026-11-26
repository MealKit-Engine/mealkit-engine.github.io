# MealKit 다운로드 사이트

정적 사이트(빌드 없음). 방문자의 OS(Windows · Linux · macOS)를 감지해 맞는 빌드를 먼저 보여 주고, 위쪽 탭으로 다른 OS를 고를 수 있습니다 (`#os=linux` 처럼 링크도 가능).

## 데이터

Manager가 읽는 것과 같은 **스위트 릴리스 인덱스**(`MealKit/tools/release_index.ps1`, format 1)를 읽습니다. 따로 관리할 목록이 없습니다.

- `config.js`의 `indexUrl` (기본 `index.json`, 페이지 옆). 다른 곳의 https URL이면 CORS가 허용돼야 합니다 (GitHub Pages / raw는 허용).
- 각 항목의 `platform`: `windows-x64`, `windows-arm64`, `linux-x64`, `linux-arm64`, `macos-arm64`, `macos-universal`, `macos-x64`. 없으면 `windows-x64`.
- macOS 항목이 생기면 별도 수정 없이 macOS 탭에 나타납니다. 그 전까지는 "준비 중 + 소스에서 빌드"를 보여 줍니다.
- 인덱스가 없으면 "아직 공개된 빌드가 없습니다" 안내를 띄웁니다.

## 미리 보기

```bash
python3 -m http.server 8080
```
`http://localhost:8080/?index=index.sample.json` — 가짜 샘플 데이터로 화면을 확인합니다 (`?index=`는 상대 경로만 받음). 샘플 파일은 git에 올리지 않습니다 (`.gitignore`).

## 배포

GitHub Pages: 저장소 `MealKit-Engine/mealkit-engine.github.io`의 `main` 브랜치 루트 → https://mealkit-engine.github.io/ . push하면 바로 반영됩니다.

릴리스할 때 `release_index.ps1`로 만든 `index.json`을 이 저장소 루트에 커밋하거나, `config.js`의 `indexUrl`을 인덱스 위치로 바꿉니다.
