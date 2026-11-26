// MealKit download page: reads the suite release index (format 1) and shows the build for the visitor's OS.
(() => {
  "use strict";
  const CFG = window.MEALKIT_SITE || {};

  // ---- Text ----
  const T = {
    ko: {
      beta: "베타 (v0.x)",
      heroTitle: "MealKit 내려받기",
      heroLead: "가벼운 3D 멀티플레이 게임 엔진과 도구 모음. 무료, MIT 라이선스.",
      recommended: "추천",
      managerDesc: "프로젝트, 엔진 버전, MealKit 도구를 한 창에서 관리하는 허브 앱입니다. 설치 후 Manager에서 엔진(에디터)과 도구를 바로 설치할 수 있습니다.",
      editorTitle: "MealKit Editor (엔진)",
      editorDesc: "엔진과 범용 에디터가 함께 든 패키지입니다. 엔진 MINOR마다 최신 패치 하나만 제공합니다. 보통은 Manager에서 설치하면 됩니다.",
      toolsTitle: "도구",
      toolsDesc: "역할별 작업 도구입니다. 맞는 엔진 버전과 함께 쓰세요. Manager의 Tools 페이지에서도 설치·업데이트할 수 있습니다.",
      installTitle: "설치 방법",
      verifyTitle: "다운로드 확인 (SHA-256)",
      verifyDesc: "받은 파일의 해시가 위에 표시된 SHA-256과 같은지 확인하세요.",
      footer: "MealKit은 무료이며 코드는 MIT 라이선스입니다.",
      source: "소스에서 빌드하기",
      download: "다운로드",
      downloadFor: (os) => `${os}용 다운로드`,
      detected: (os) => `이 컴퓨터는 ${os}로 보입니다. 다른 OS는 아래에서 고르세요.`,
      detectedUnknown: "OS를 알아내지 못했습니다. 아래에서 고르세요.",
      mobile: "휴대기기에서는 실행할 수 없습니다. Windows · Linux · macOS 컴퓨터용 파일을 고르세요.",
      showing: (os) => `${os}용 빌드를 보여 줍니다.`,
      notYet: (os) => `${os}용 빌드는 아직 없습니다.`,
      macSoon: "macOS 에디터는 로드맵 5단계에서 지원 예정입니다. 그 전까지는 소스에서 빌드하세요.",
      buildSource: "소스에서 빌드",
      engines: (list) => `엔진 ${list}용`,
      noEngines: "이 OS용 엔진 패키지가 아직 없습니다.",
      noTools: "이 OS용 도구가 아직 없습니다.",
      copied: "복사됨",
      copyHash: "클릭하면 SHA-256을 복사합니다",
      noIndex: "아직 공개된 빌드가 없습니다. 첫 릴리스 전까지는 소스에서 빌드하세요.",
      indexNewer: "릴리스 인덱스 형식이 이 페이지보다 새롭습니다. 페이지를 새로 고치세요.",
      install: {
        windows: [
          "위에서 <code>mealkit-manager-…-windows-x64.zip</code>을 받습니다.",
          "압축을 풀고 <code>MealKitManager.exe</code>를 실행합니다. 시작 메뉴와 바탕 화면에 바로 가기가 생깁니다.",
          "Manager의 <b>설정 › 엔진</b>에서 엔진을 설치한 뒤 프로젝트를 만들거나 엽니다.",
          "필요: Windows 10/11 x64, DirectX 12 (Shader Model 6.6) 그래픽."
        ],
        linux: [
          "위에서 <code>mealkit-manager-…-linux-x64.zip</code>을 받습니다.",
          "압축을 풀고 터미널에서 <code>./MealKitManager</code>를 실행합니다. <code>~/.local/share/MealKit/manager</code>에 설치되고 애플리케이션 메뉴에 추가됩니다.",
          "Manager의 <b>설정 › 엔진</b>에서 엔진을 설치한 뒤 프로젝트를 만들거나 엽니다.",
          "필요: x64 Linux (Ubuntu에서 확인), Vulkan 1.3 그래픽 드라이버."
        ],
        macos: [
          "macOS용 빌드는 준비 중입니다 (로드맵 5단계).",
          "지금은 <a href=\"https://github.com/MealKit-Engine/MealKit\" target=\"_blank\" rel=\"noopener\">MealKit 저장소</a>의 안내에 따라 소스에서 빌드할 수 있습니다.",
          "빌드가 나오면 이 페이지에 자동으로 표시됩니다."
        ]
      }
    },
    en: {
      beta: "Beta (v0.x)",
      heroTitle: "Download MealKit",
      heroLead: "A lightweight 3D multiplayer game engine and its tool family. Free, MIT.",
      recommended: "Recommended",
      managerDesc: "The hub app for your projects, engine versions and MealKit tools in one window. Install engines (with the editor) and tools from it after setup.",
      editorTitle: "MealKit Editor (engine)",
      editorDesc: "The engine package with the general-purpose editor. Only the newest patch of each engine MINOR is offered. Installing from the Manager is usually easier.",
      toolsTitle: "Tools",
      toolsDesc: "Tools for each role. Use them with a matching engine version. The Manager's Tools page installs and updates them too.",
      installTitle: "How to install",
      verifyTitle: "Check the download (SHA-256)",
      verifyDesc: "Make sure the file's hash matches the SHA-256 shown above.",
      footer: "MealKit is free and its code is MIT licensed.",
      source: "Build from source",
      download: "Download",
      downloadFor: (os) => `Download for ${os}`,
      detected: (os) => `This computer looks like ${os}. Pick another OS below.`,
      detectedUnknown: "Couldn't tell your OS. Pick one below.",
      mobile: "These don't run on phones or tablets. Pick a Windows, Linux or macOS build for your computer.",
      showing: (os) => `Showing builds for ${os}.`,
      notYet: (os) => `No ${os} build yet.`,
      macSoon: "The macOS editor is planned for roadmap stage 5. Until then, build from source.",
      buildSource: "Build from source",
      engines: (list) => `For engine ${list}`,
      noEngines: "No engine package for this OS yet.",
      noTools: "No tools for this OS yet.",
      copied: "Copied",
      copyHash: "Click to copy the SHA-256",
      noIndex: "No builds are published yet. Until the first release, build from source.",
      indexNewer: "The release index format is newer than this page. Reload the page.",
      install: {
        windows: [
          "Download <code>mealkit-manager-…-windows-x64.zip</code> above.",
          "Unzip it and run <code>MealKitManager.exe</code>. It adds a Start menu and a desktop shortcut.",
          "Install an engine in the Manager's <b>Settings › Engines</b>, then create or open a project.",
          "Needs Windows 10/11 x64 and DirectX 12 graphics (Shader Model 6.6)."
        ],
        linux: [
          "Download <code>mealkit-manager-…-linux-x64.zip</code> above.",
          "Unzip it and run <code>./MealKitManager</code> from a terminal. It installs itself into <code>~/.local/share/MealKit/manager</code> with an application menu entry.",
          "Install an engine in the Manager's <b>Settings › Engines</b>, then create or open a project.",
          "Needs x64 Linux (tested on Ubuntu) and a Vulkan 1.3 graphics driver."
        ],
        macos: [
          "macOS builds are in progress (roadmap stage 5).",
          "For now you can build from source by following the <a href=\"https://github.com/MealKit-Engine/MealKit\" target=\"_blank\" rel=\"noopener\">MealKit repository</a>.",
          "Builds show up on this page once they're published."
        ]
      }
    }
  };

  const OS_NAME = { windows: "Windows", linux: "Linux", macos: "macOS" };
  // Index "platform" values per OS, preferred first (arch is moved to the front once detected)
  const OS_PLATFORMS = {
    windows: ["windows-x64", "windows-arm64"],
    linux: ["linux-x64", "linux-arm64"],
    macos: ["macos-arm64", "macos-universal", "macos-x64"]
  };
  const VERIFY = {
    windows: "Get-FileHash .\\FILE.zip -Algorithm SHA256",
    linux: "sha256sum FILE.zip",
    macos: "shasum -a 256 FILE.zip"
  };

  // ---- State ----
  const state = {
    lang: pickLang(),
    detected: null,  // "windows" | "linux" | "macos" | null
    arch: null,      // "x64" | "arm64" | null
    mobile: false,
    os: "windows",
    index: null,     // normalized index or null
    indexError: null // "missing" | "format"
  };

  function pickLang() {
    try { const s = localStorage.getItem("mk-lang"); if (s === "ko" || s === "en") return s; } catch (_) {}
    return (navigator.language || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
  }

  // ---- OS detection ----
  async function detect() {
    const uad = navigator.userAgentData;
    const ua = navigator.userAgent || "";
    let os = null, arch = null, mobile = false;
    const p = (uad && uad.platform) || navigator.platform || "";
    if (/android|iphone|ipad|ipod/i.test(ua) || (uad && uad.mobile)) mobile = true;
    if (/^win/i.test(p) || /windows/i.test(ua)) os = "windows";
    else if (/mac/i.test(p) || /mac os x/i.test(ua)) os = "macos";
    else if (/linux|x11|cros/i.test(p) || /linux|x11/i.test(ua)) os = "linux";
    // iPad reports as Mac with touch
    if (os === "macos" && navigator.maxTouchPoints > 1 && !/macintosh/i.test(p)) mobile = true;
    if (/android/i.test(ua)) { os = null; }
    if (/iphone|ipad|ipod/i.test(ua)) { os = null; }
    if (uad && uad.getHighEntropyValues) {
      try {
        const v = await uad.getHighEntropyValues(["architecture", "bitness"]);
        if (v.architecture === "arm") arch = "arm64";
        else if (v.architecture === "x86" && v.bitness === "64") arch = "x64";
      } catch (_) {}
    }
    if (!arch) {
      if (/aarch64|arm64/i.test(ua)) arch = "arm64";
      else if (/x86_64|x64|win64|wow64|amd64/i.test(ua)) arch = "x64";
    }
    state.detected = mobile ? null : os;
    state.arch = arch;
    state.mobile = mobile;
    const fromHash = (location.hash.match(/^#os=(windows|linux|macos)$/) || [])[1];
    state.os = fromHash || state.detected || "windows";
  }

  function platformsFor(os) {
    const list = OS_PLATFORMS[os].slice();
    if (state.arch && os === state.detected) {
      const pref = list.filter((p) => p.endsWith("-" + state.arch));
      return pref.concat(list.filter((p) => !pref.includes(p)));
    }
    return list;
  }

  // ---- Release index ----
  const platformOf = (e) => (e && e.platform) || "windows-x64";

  async function loadIndex() {
    let url = CFG.indexUrl || "index.json";
    // ?index=<relative path> for local previews (relative paths only)
    const q = new URLSearchParams(location.search).get("index");
    if (q && /^[\w./-]+\.json$/.test(q) && !q.includes("..")) url = q;
    try {
      const r = await fetch(url, { cache: "no-cache" });
      if (!r.ok) throw new Error(r.status);
      const data = await r.json();
      if (data.format !== 1) { state.indexError = "format"; return; }
      state.index = {
        manager: [].concat(data.manager || []),
        engines: Array.isArray(data.engines) ? data.engines : [],
        tools: Array.isArray(data.tools) ? data.tools : []
      };
    } catch (_) {
      state.indexError = "missing";
    }
  }

  function pick(entries, os) {
    for (const p of platformsFor(os)) {
      const e = entries.find((x) => platformOf(x) === p);
      if (e) return e;
    }
    return null;
  }

  const cmpVer = (a, b) => {
    const pa = String(a).split(".").map(Number), pb = String(b).split(".").map(Number);
    for (let i = 0; i < 3; i++) if ((pa[i] || 0) !== (pb[i] || 0)) return (pb[i] || 0) - (pa[i] || 0);
    return 0;
  };

  // ---- DOM helpers ----
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v; else if (k === "text") n.textContent = v; else n.setAttribute(k, v);
    }
    for (const k of kids) if (k != null) n.append(k);
    return n;
  }
  const safeUrl = (u) => (typeof u === "string" && /^https:\/\//i.test(u)) || (typeof u === "string" && /^[\w./-]+$/.test(u) && !u.includes("..")) ? u : null;
  const fileName = (u) => { try { return decodeURIComponent(new URL(u, location.href).pathname.split("/").pop()); } catch (_) { return ""; } };
  function fmtSize(n) {
    if (!Number.isFinite(n) || n <= 0) return "";
    const u = ["B", "KB", "MB", "GB"]; let i = 0;
    while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
    return `${n.toFixed(i >= 2 ? 1 : 0)} ${u[i]}`;
  }
  const t = () => T[state.lang];

  function hashButton(sha) {
    if (!sha) return null;
    const b = el("button", { class: "hash", type: "button", title: t().copyHash, text: "SHA-256 " + sha.slice(0, 16) + "…" });
    b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(sha); const o = b.textContent; b.textContent = t().copied; setTimeout(() => (b.textContent = o), 1200); } catch (_) { b.textContent = sha; }
    });
    return b;
  }

  function downloadBlock(entry, label, primary) {
    const url = entry && safeUrl(entry.url);
    if (!url) return unavailable();
    const name = OS_NAME[state.os];
    const btn = el("a", { class: "btn" + (primary ? " primary" : ""), href: url, rel: "noopener" },
      el("span", { text: label || t().downloadFor(name) }),
      el("small", { text: [entry.version && "v" + entry.version, platformOf(entry)].filter(Boolean).join(" · ") }));
    const meta = el("div", { class: "meta" },
      fmtSize(entry.size) ? el("span", { text: fmtSize(entry.size) }) : null,
      el("span", { text: fileName(url) }),
      hashButton(entry.sha256));
    return el("div", { class: "dl" }, btn, meta);
  }

  function unavailable() {
    const name = OS_NAME[state.os];
    const msg = state.os === "macos" ? t().macSoon : t().notYet(name);
    return el("div", { class: "dl" },
      el("span", { class: "unavailable", text: msg }),
      el("a", { class: "btn", href: CFG.sourceUrl || "#", target: "_blank", rel: "noopener", text: t().buildSource }));
  }

  // ---- Render ----
  function render() {
    const L = t();
    document.documentElement.lang = state.lang;
    document.title = L.heroTitle;
    document.querySelectorAll("[data-i18n]").forEach((n) => { const v = L[n.dataset.i18n]; if (typeof v === "string") n.textContent = v; });
    document.getElementById("lang").textContent = state.lang === "ko" ? "English" : "한국어";

    // OS tabs
    document.querySelectorAll("#os-tabs button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.os === state.os)));
    const name = OS_NAME[state.os];
    document.getElementById("detected").textContent =
      state.mobile ? L.mobile : state.detected ? L.detected(OS_NAME[state.detected]) : L.detectedUnknown;
    document.getElementById("os-note").textContent = L.showing(name);

    // Notice
    const notice = document.getElementById("notice");
    notice.hidden = !state.indexError;
    notice.textContent = state.indexError === "format" ? L.indexNewer : state.indexError ? L.noIndex : "";

    const idx = state.index || { manager: [], engines: [], tools: [] };

    // Manager + hero button
    const mgr = pick(idx.manager, state.os);
    document.getElementById("dl-manager").replaceChildren(downloadBlock(mgr, null, true));
    const hero = document.getElementById("hero-btn");
    const mgrUrl = mgr && safeUrl(mgr.url);
    hero.href = mgrUrl || "#manager";
    hero.classList.toggle("primary", !!mgrUrl);
    document.getElementById("hero-btn-label").textContent = mgrUrl ? L.downloadFor(name) : "MealKit Manager";
    document.getElementById("hero-btn-sub").textContent = mgrUrl ? `MealKit Manager v${mgr.version}` : (state.os === "macos" ? L.macSoon : L.notYet(name));

    // Engines: newest patch per MINOR for this OS, newest first
    const byMinor = new Map();
    for (const p of platformsFor(state.os)) {
      for (const e of idx.engines.filter((x) => platformOf(x) === p)) {
        const minor = String(e.version).split(".").slice(0, 2).join(".");
        const cur = byMinor.get(minor);
        if (!cur || (platformOf(cur) === p && cmpVer(e.version, cur.version) < 0)) byMinor.set(minor, e);
      }
    }
    const engines = [...byMinor.values()].sort((a, b) => cmpVer(a.version, b.version));
    const engList = document.getElementById("dl-engines");
    if (!engines.length) engList.replaceChildren(el("div", { class: "row" }, unavailable()));
    else engList.replaceChildren(...engines.map((e, i) => el("div", { class: "row" },
      el("div", { class: "left" }, el("h3", { text: `MealKit ${e.version}` }), el("span", { class: "meta", text: platformOf(e) })),
      downloadBlock(e, L.download, i === 0))));

    // Tools: one per name for this OS
    const tools = new Map();
    for (const p of platformsFor(state.os)) for (const tl of idx.tools) if (platformOf(tl) === p && tl.name && !tools.has(tl.name)) tools.set(tl.name, tl);
    const grid = document.getElementById("dl-tools");
    if (!tools.size) grid.replaceChildren(el("div", { class: "card" }, el("p", { class: "unavailable", text: L.noTools }), unavailable()));
    else grid.replaceChildren(...[...tools.values()].sort((a, b) => a.name.localeCompare(b.name)).map((tl) => {
      const sum = tl.summary || (CFG.toolSummaries && CFG.toolSummaries[tl.name] && CFG.toolSummaries[tl.name][state.lang]) || "";
      const eng = Array.isArray(tl.engines) && tl.engines.length ? L.engines(tl.engines.join(", ")) : "";
      return el("div", { class: "card tool" },
        el("h3", { text: tl.name }),
        el("p", { text: sum }),
        el("span", { class: "meta", text: [`v${tl.version}`, eng].filter(Boolean).join(" · ") }),
        downloadBlock(tl, L.download, false));
    }));

    // Install steps (static, trusted HTML from T)
    document.getElementById("install-steps").innerHTML = L.install[state.os].map((s) => `<li>${s}</li>`).join("");
    document.getElementById("verify-cmd").textContent = VERIFY[state.os];
  }

  // ---- Events ----
  document.querySelectorAll("#os-tabs button").forEach((b) => b.addEventListener("click", () => {
    state.os = b.dataset.os;
    history.replaceState(null, "", location.pathname + location.search + "#os=" + state.os);
    render();
  }));
  document.getElementById("lang").addEventListener("click", () => {
    state.lang = state.lang === "ko" ? "en" : "ko";
    try { localStorage.setItem("mk-lang", state.lang); } catch (_) {}
    render();
  });

  (async () => {
    render();
    await Promise.all([detect(), loadIndex()]);
    render();
  })();
})();
