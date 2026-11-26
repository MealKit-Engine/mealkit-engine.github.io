// Site settings. Edit these when deploying.
window.MEALKIT_SITE = {
  // The suite release index (MealKit tools/release_index.ps1, format 1). Same file the Manager reads.
  // A relative path is served next to this page; an https URL must allow CORS (GitHub raw and Pages do).
  indexUrl: "index.json",
  // Where to send people when there's no build for their OS yet.
  sourceUrl: "https://github.com/MealKit-Engine/MealKit",
  githubOrg: "https://github.com/MealKit-Engine",
  // Short tool descriptions shown when the index entry has no "summary".
  toolSummaries: {
    MkAudio:  { ko: "게임용 사운드 이벤트 런타임과 편집기", en: "Sound event runtime and editor for games" },
    MkUI:     { ko: "게임 화면 UI 런타임과 디자이너", en: "Game screen UI runtime and designer" },
    MkRender: { ko: "엔진 없이 쓰는 MealKit 렌더러", en: "The MealKit renderer as engine-free libraries" },
    MkQA:     { ko: "버그·크래시 리포트, 리플레이, 시나리오 테스트", en: "Bug and crash reports, replays, scenario tests" }
  }
};
