const categoryData = {
  men: {
    title: "男子中长跑",
    description: "以公路与场地项目为主，从全马一直排到 800m，保持竞技感与荣誉墙并存的展示方式。",
    records: [
      {
        athlete: "马睿",
        gender: "男",
        department: "7系",
        project: "全程马拉松",
        mark: "2:29'20''",
        competition: "2026石家庄马拉松",
        date: "2026-03-29"
      },
      {
        athlete: "黄硕",
        gender: "男",
        department: "17系24级硕",
        project: "半程马拉松",
        mark: "1:11'23''",
        competition: "2025眉山仁寿半马",
        date: "2025-02-23"
      },
      {
        athlete: "刘守斌",
        gender: "男",
        department: "5系19级博",
        project: "10000m",
        mark: "33'05''",
        competition: "首高第14届秋季运动会",
        date: "2022-11-05"
      },
      {
        athlete: "刘守斌",
        gender: "男",
        department: "5系19级博",
        project: "5000m",
        mark: "15'52''",
        competition: "北航第61届运动会",
        date: "2023-10-13"
      },
      {
        athlete: "隋晗",
        gender: "男",
        department: "5系17级博",
        project: "3000m",
        mark: "9'21''",
        competition: "高百资格赛",
        date: "2024-05-18"
      },
      {
        athlete: "史永淇",
        gender: "男",
        department: "7系18级本",
        project: "1500m",
        mark: "4'21''99",
        competition: "首高第13届秋季运动会",
        date: "2021-10-16"
      },
      {
        athlete: "王俊翔",
        gender: "男",
        department: "25系22级本",
        project: "1000m",
        mark: "2'40''35",
        competition: "北航第63届运动会",
        date: "2025-10-18"
      },
      {
        athlete: "宋寿磊",
        gender: "男",
        department: "6系25级硕",
        project: "800m",
        mark: "2'03''32",
        competition: "北大秋冬队内测",
        date: "2025-09-07",
        review: true
      }
    ]
  },
  women: {
    title: "女子中长跑",
    description: "覆盖全马、半马和中距离场地项目，页面按荣誉卡片呈现。",
    records: [
      {
        athlete: "李晓",
        gender: "女",
        department: "10系24级硕",
        project: "全程马拉松",
        mark: "3:23'30''",
        competition: "2022北京马拉松",
        date: "2022-11-05"
      },
      {
        athlete: "徐文宇",
        gender: "女",
        department: "17系23级本",
        project: "半程马拉松",
        mark: "1:33'26''",
        competition: "2025桐庐半程马拉松",
        date: "2025-10-26"
      },
      {
        athlete: "王佳",
        gender: "女",
        department: "11系23级本",
        project: "10000m",
        mark: "42'29''",
        competition: "北航飞协10k测速赛",
        date: "2025-03-08"
      },
      {
        athlete: "颜泽君",
        gender: "女",
        department: "10系21级硕",
        project: "5000m",
        mark: "20'20''58",
        competition: "首高第14届秋季运动会",
        date: "2022-11-05"
      },
      {
        athlete: "徐文宇",
        gender: "女",
        department: "17系23级本",
        project: "3000m",
        mark: "11'51''06",
        competition: "北航第63届运动会",
        date: "2025-10-17"
      },
      {
        athlete: "颜泽君",
        gender: "女",
        department: "10系21级硕",
        project: "1500m",
        mark: "5'27''24",
        competition: "首高第14届秋季运动会",
        date: "2022-11-05"
      },
      {
        athlete: "王佳",
        gender: "女",
        department: "11系23级本",
        project: "800m",
        mark: "2'35''62",
        competition: "首高第16届秋季运动会",
        date: "2024-10-13",
        review: true
      }
    ]
  },
  gaobai: {
    title: "高百专项",
    description: "保留高百总决赛与分站赛的独立分组，和常规场地、公路项目分开。",
    records: [
      {
        athlete: "刘守斌",
        gender: "男",
        department: "5系19级博",
        project: "高百总决赛16km",
        mark: "53'02''21",
        competition: "2023总决赛",
        date: "2023-12-16"
      },
      {
        athlete: "姚良涛",
        gender: "男",
        department: "5系23级硕",
        project: "高百分站赛4000m",
        mark: "12'26''57",
        competition: "2025华北站",
        date: "2025-09-27"
      },
      {
        athlete: "王佳",
        gender: "女",
        department: "11系23级本",
        project: "高百总决赛16km",
        mark: "1:08'39''",
        competition: "2024总决赛",
        date: "2024-12-08"
      },
      {
        athlete: "徐文宇",
        gender: "女",
        department: "17系23级本",
        project: "高百分站赛4000m",
        mark: "15'56''22",
        competition: "2025华北站",
        date: "2025-09-27"
      }
    ]
  },
  ultra: {
    title: "特别挑战",
    description: "把超长距离耐力挑战单列成一张主卡，保留“点将台”里最具传奇感的纪录。",
    records: [
      {
        athlete: "张卓明",
        gender: "男",
        department: "3系12级本",
        project: "330kmDist+25kmClimb",
        mark: "117:11'",
        competition: "巨人之旅 Tor des Geants",
        date: "2024-09-08"
      }
    ]
  }
};

const PROJECT_ORDER = {
  "全程马拉松": 0,
  "半程马拉松": 1,
  "高百总决赛16km": 2,
  "10000m": 3,
  "5000m": 4,
  "高百分站赛4000m": 5,
  "3000m": 6,
  "1500m": 7,
  "1000m": 8,
  "800m": 9
};

function sortByProjectOrder(records) {
  return [...records].sort((left, right) => {
    const leftOrder = PROJECT_ORDER[left.project] ?? 99;
    const rightOrder = PROJECT_ORDER[right.project] ?? 99;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    if (left.gender !== right.gender) {
      return left.gender === "男" ? -1 : 1;
    }

    return right.date.localeCompare(left.date);
  });
}

const standardRecords = sortByProjectOrder([
  ...categoryData.men.records,
  ...categoryData.women.records,
  ...categoryData.gaobai.records
]);

const specialRecords = [...categoryData.ultra.records].sort((left, right) =>
  right.date.localeCompare(left.date)
);

const allRecords = [...standardRecords, ...specialRecords];

const boardData = {
  all: {
    title: "全部纪录",
    description: "主项按距离由长到短排列，从全马一路看到 800m；巨人之旅单独列出。",
    records: allRecords
  },
  ...categoryData
};

function makeHistoryKey(project, gender) {
  return `${project}__${gender}`;
}

const recordHistorySeed = {
  [makeHistoryKey("全程马拉松", "男")]: [
    {
      athlete: "徐伟强",
      mark: "2:58'37''",
      competition: "北京马拉松",
      date: "2005-10-16"
    },
    {
      athlete: "朱风云",
      mark: "2:58'08''",
      competition: "天津马拉松",
      date: "2006-04-16"
    },
    {
      athlete: "朱风云",
      mark: "2:52'14''",
      competition: "儋州马拉松",
      date: "2011-12-17"
    },
    {
      athlete: "朱风云",
      mark: "2:50'43''",
      competition: "杭州马拉松",
      date: "2012-11-18"
    },
    {
      athlete: "黄兴智",
      mark: "2:48'45''",
      competition: "北京马拉松",
      date: "2013-10-20",
      note: "首个 2:50 内"
    },
    {
      athlete: "王云峰",
      mark: "2:46'33''",
      competition: "首尔马拉松",
      date: "2014-03-16"
    },
    {
      athlete: "刘守斌",
      mark: "2:37'34''",
      competition: "北京马拉松",
      date: "2022-11-06",
      note: "首个 2:40 内"
    },
    {
      athlete: "刘守斌",
      mark: "2:35'30''",
      competition: "武汉马拉松",
      date: "2023-04-16"
    },
    {
      athlete: "刘守斌",
      mark: "2:29'32''",
      competition: "北京马拉松",
      date: "2023-10-29",
      note: "首个 2:30 内"
    }
  ],
  [makeHistoryKey("全程马拉松", "女")]: [
    {
      athlete: "王贝贝",
      mark: "4:15'21''",
      competition: "北京马拉松",
      date: "2005-10-16"
    },
    {
      athlete: "王贝贝",
      mark: "4:03'09''",
      competition: "北京马拉松",
      date: "2006-09-26"
    },
    {
      athlete: "赵玉侠",
      mark: "3:48'52''",
      competition: "北京马拉松",
      date: "2008-10-16",
      note: "首个 4:00 内"
    },
    {
      athlete: "梁姣姣",
      mark: "3:43'00''",
      competition: "厦门马拉松",
      date: "2015-01-03"
    },
    {
      athlete: "梁姣姣",
      mark: "3:32'00''",
      competition: "南京马拉松",
      date: "2015-11-18"
    }
  ]
};

const board = document.querySelector("#board");
const tabButtons = [...document.querySelectorAll(".tab-button")];
const historyModal = document.querySelector("#history-modal");
const historyModalTitle = document.querySelector("#history-modal-title");
const historyModalSubtitle = document.querySelector("[data-history-subtitle]");
const historyModalSummary = document.querySelector("[data-history-summary]");
const historyModalBody = document.querySelector("[data-history-body]");
let lastHistoryTrigger = null;
const PROJECT_DISTANCES_KM = {
  "全程马拉松": 42.195,
  "半程马拉松": 21.0975,
  "高百总决赛16km": 16,
  "10000m": 10,
  "5000m": 5,
  "高百分站赛4000m": 4,
  "3000m": 3,
  "1500m": 1.5,
  "1000m": 1,
  "800m": 0.8,
  "330kmDist+25kmClimb": 330
};

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${year}.${month}.${day}`;
}

function parseMarkToSeconds(mark) {
  let remaining = mark.trim();
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let centiseconds = 0;

  if (remaining.includes(":")) {
    const [hourPart, rest] = remaining.split(":");
    hours = Number(hourPart) || 0;
    remaining = rest ?? "";
  }

  const minuteMatch = remaining.match(/^(\d+)'/);
  if (minuteMatch) {
    minutes = Number(minuteMatch[1]) || 0;
    remaining = remaining.slice(minuteMatch[0].length);
  }

  const secondMatch = remaining.match(/^(\d+)(?:''|')/);
  if (secondMatch) {
    seconds = Number(secondMatch[1]) || 0;
    remaining = remaining.slice(secondMatch[0].length);
  }

  const fractionMatch = remaining.match(/^(\d{1,2})$/);
  if (fractionMatch) {
    centiseconds = Number(fractionMatch[1]) || 0;
  }

  return hours * 3600 + minutes * 60 + seconds + centiseconds / 100;
}

function formatPace(record) {
  const distanceKm = PROJECT_DISTANCES_KM[record.project];
  if (!distanceKm) {
    return "";
  }

  const totalSeconds = parseMarkToSeconds(record.mark);
  if (!totalSeconds) {
    return "";
  }

  const paceSeconds = Math.round(totalSeconds / distanceKm);
  const paceMinutesPart = Math.floor(paceSeconds / 60);
  const paceSecondsPart = paceSeconds % 60;

  return `配速 ${paceMinutesPart}'${String(paceSecondsPart).padStart(2, "0")}''/km`;
}

function formatDuration(totalSeconds) {
  const totalCentiseconds = Math.round(totalSeconds * 100);
  const hours = Math.floor(totalCentiseconds / 360000);
  const minutes = Math.floor((totalCentiseconds % 360000) / 6000);
  const seconds = Math.floor((totalCentiseconds % 6000) / 100);
  const centiseconds = totalCentiseconds % 100;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}'${String(seconds).padStart(2, "0")}''`;
  }

  const minuteChunk = `${minutes}'${String(seconds).padStart(2, "0")}''`;
  if (centiseconds > 0) {
    return `${minuteChunk}${String(centiseconds).padStart(2, "0")}`;
  }

  return minuteChunk;
}

function formatHistoryDelta(previousEntry, nextEntry) {
  const deltaSeconds = parseMarkToSeconds(previousEntry.mark) - parseMarkToSeconds(nextEntry.mark);
  if (Math.abs(deltaSeconds) < 0.005) {
    return "持平";
  }

  return `${deltaSeconds > 0 ? "快" : "慢"} ${formatDuration(Math.abs(deltaSeconds))}`;
}

function buildHistoryEntryFromRecord(record) {
  return {
    athlete: record.athlete,
    mark: record.mark,
    competition: record.competition,
    date: record.date,
    note: record.note ?? ""
  };
}

function getHistoryEntries(record) {
  const historyKey = makeHistoryKey(record.project, record.gender);
  const seededEntries = recordHistorySeed[historyKey] ?? [];
  const currentEntry = buildHistoryEntryFromRecord(record);
  const hasCurrentEntry = seededEntries.some(
    (entry) =>
      entry.athlete === currentEntry.athlete &&
      entry.mark === currentEntry.mark &&
      entry.date === currentEntry.date
  );

  return [...seededEntries, ...(hasCurrentEntry ? [] : [currentEntry])].sort((left, right) =>
    left.date.localeCompare(right.date)
  );
}

function findRecord(project, gender) {
  return allRecords.find((record) => record.project === project && record.gender === gender) ?? null;
}

function buildSummary(records) {
  const distinctProjects = new Set(records.map((record) => record.project)).size;
  const latestRecord = [...records].sort((left, right) => right.date.localeCompare(left.date))[0];

  return [
    `${records.length} 条纪录`,
    `${distinctProjects} 个项目`,
    `最新刷新 ${formatDate(latestRecord.date)}`
  ];
}

function renderCard(record) {
  const cardClass = record.gender === "女" ? "record-card is-female" : "record-card is-male";
  const paceText = formatPace(record);

  return `
    <article class="${cardClass}">
      <div class="record-top">
        <span class="project-badge">${record.project}</span>
        <button
          class="expand-history-button"
          type="button"
          data-history-trigger
          data-history-project="${record.project}"
          data-history-gender="${record.gender}"
          aria-label="展开 ${record.project} 纪录变迁"
        >
          展开
        </button>
      </div>
      <div class="record-mark">${record.mark}</div>
      ${paceText ? `<div class="record-pace">${paceText}</div>` : ""}
      <h4 class="record-name">${record.athlete}</h4>
      <p class="record-dept">${record.gender} · ${record.department}</p>
      <dl class="record-meta">
        <div class="record-meta-item">
          <dt>赛事</dt>
          <dd>${record.competition}</dd>
        </div>
        <div class="record-meta-item">
          <dt>日期</dt>
          <dd>${formatDate(record.date)}</dd>
        </div>
      </dl>
    </article>
  `;
}

function renderHistoryTimeline(entries) {
  return entries
    .map((entry, index) => {
      const nextEntry = entries[index + 1];
      const noteMarkup = entry.note ? `<span class="history-node__note">${entry.note}</span>` : "";
      const connectorMarkup = nextEntry
        ? `
            <div class="history-link" aria-hidden="true">
              <span class="history-link__delta">${formatHistoryDelta(entry, nextEntry)}</span>
              <span class="history-link__arrow"></span>
            </div>
          `
        : "";

      return `
        <article class="history-node">
          <span class="history-node__step">${String(index + 1).padStart(2, "0")}</span>
          ${noteMarkup}
          <div class="history-node__mark">${entry.mark}</div>
          <h4 class="history-node__athlete">${entry.athlete}</h4>
          <p class="history-node__competition">${entry.competition}</p>
          <p class="history-node__date">${formatDate(entry.date)}</p>
        </article>
        ${connectorMarkup}
      `;
    })
    .join("");
}

function renderHistoryLog(entries) {
  return entries
    .map((entry) => {
      const noteMarkup = entry.note ? `<span class="history-log-card__note">${entry.note}</span>` : "";

      return `
        <article class="history-log-card">
          <div class="history-log-card__top">
            <div>
              <div class="history-log-card__mark">${entry.mark}</div>
              <h4 class="history-log-card__athlete">${entry.athlete}</h4>
            </div>
            ${noteMarkup}
          </div>
          <p class="history-log-card__competition">${entry.competition}</p>
          <p class="history-log-card__date">${formatDate(entry.date)}</p>
        </article>
      `;
    })
    .join("");
}

function openHistoryModal(record, trigger) {
  const entries = getHistoryEntries(record);
  const firstEntry = entries[0];
  const latestEntry = entries[entries.length - 1];
  const isFemale = record.gender === "女";

  lastHistoryTrigger = trigger ?? null;
  historyModal.classList.toggle("is-female", isFemale);
  historyModal.classList.toggle("is-male", !isFemale);
  historyModalTitle.textContent = `${record.project}纪录变迁`;
  historyModalSubtitle.textContent = `${isFemale ? "女子" : "男子"} · 从最早已录入节点到当前校纪录`;
  historyModalSummary.innerHTML = [
    `当前纪录 ${record.athlete} · ${record.mark}`,
    `${entries.length} 个历史节点`,
    `${formatDate(firstEntry.date)} - ${formatDate(latestEntry.date)}`
  ]
    .map((item) => `<span>${item}</span>`)
    .join("");

  historyModalBody.innerHTML = `
    <div class="history-flow-shell">
      <div class="history-flow">${renderHistoryTimeline(entries)}</div>
    </div>
    ${
      entries.length === 1
        ? '<p class="history-empty">当前项目暂时只录入了最新校纪录。后续继续补充历史成绩后，这里会自动串成完整的纪录变迁。</p>'
        : ""
    }
    <div class="history-log">${renderHistoryLog(entries)}</div>
  `;

  historyModal.classList.add("is-open");
  historyModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
}

function closeHistoryModal() {
  historyModal.classList.remove("is-open");
  historyModal.classList.remove("is-female", "is-male");
  historyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-modal-open");

  if (lastHistoryTrigger) {
    lastHistoryTrigger.focus();
  }
}

function renderAllView(currentGroup) {
  const mainSummary = [
    `${standardRecords.length} 条主项纪录`,
    "按项目距离由长到短排列"
  ]
    .map((item) => `<span>${item}</span>`)
    .join("");

  const specialSummary = [`${specialRecords.length} 条特别挑战纪录`, "巨人之旅单独陈列"]
    .map((item) => `<span>${item}</span>`)
    .join("");

  return `
    <div class="board-head">
      <div>
        <p class="section-kicker">${currentGroup.title.toUpperCase()}</p>
        <h3>${currentGroup.title}</h3>
        <p>${currentGroup.description}</p>
      </div>
      <div class="board-summary">${buildSummary(currentGroup.records)
        .map((item) => `<span>${item}</span>`)
        .join("")}</div>
    </div>
    <div class="board-stack">
      <section class="board-subsection">
        <div class="board-subhead">
          <div>
            <p class="section-kicker">MAIN EVENTS</p>
            <h4>主项纪录</h4>
            <p>全程马拉松、半程马拉松、高百与场地中距离统一按距离顺序展开。</p>
          </div>
          <div class="board-summary">${mainSummary}</div>
        </div>
        <div class="board-grid">
          ${standardRecords.map(renderCard).join("")}
        </div>
      </section>
      <section class="board-subsection is-special">
        <div class="board-subhead">
          <div>
            <p class="section-kicker">SPECIAL CHALLENGE</p>
            <h4>巨人之旅</h4>
            <p>超长距离耐力挑战单独列出，不和常规项目混排。</p>
          </div>
          <div class="board-summary">${specialSummary}</div>
        </div>
        <div class="board-grid board-grid-special">
          ${specialRecords.map(renderCard).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderGroup(groupKey) {
  const currentGroup = boardData[groupKey];

  if (groupKey === "all") {
    board.innerHTML = renderAllView(currentGroup);
    return;
  }

  const summary = buildSummary(currentGroup.records)
    .map((item) => `<span>${item}</span>`)
    .join("");

  board.innerHTML = `
    <div class="board-head">
      <div>
        <p class="section-kicker">${currentGroup.title.toUpperCase()}</p>
        <h3>${currentGroup.title}</h3>
        <p>${currentGroup.description}</p>
      </div>
      <div class="board-summary">${summary}</div>
    </div>
    <div class="board-grid">
      ${currentGroup.records.map(renderCard).join("")}
    </div>
  `;
}

function updateOverview() {
  const latestRecord = [...allRecords].sort((left, right) => right.date.localeCompare(left.date))[0];
  const totalProjects = new Set(allRecords.map((record) => record.project)).size;
  const menCount = allRecords.filter((record) => record.gender === "男").length;
  const womenCount = allRecords.filter((record) => record.gender === "女").length;

  document.querySelector('[data-stat="total"]').textContent = String(allRecords.length);
  document.querySelector('[data-stat="projects"]').textContent = String(totalProjects);
  document.querySelector('[data-stat="latest"]').textContent = formatDate(latestRecord.date);
  document.querySelector('[data-stat-note="latest"]').textContent =
    `${latestRecord.athlete} · ${latestRecord.project}`;
  document.querySelector(".stat-note").textContent = `男子 ${menCount} 项，女子 ${womenCount} 项`;

  document.querySelector('[data-spotlight="count"]').textContent = String(allRecords.length);
  document.querySelector('[data-spotlight="latest"]').textContent =
    `最新刷新：${formatDate(latestRecord.date)}`;
  document.querySelector('[data-spotlight="focus"]').textContent =
    `最新项目：${latestRecord.project}`;
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextGroup = button.dataset.group;

    tabButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    renderGroup(nextGroup);
  });
});

board.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-history-trigger]");
  if (!trigger) {
    return;
  }

  const record = findRecord(trigger.dataset.historyProject, trigger.dataset.historyGender);
  if (!record) {
    return;
  }

  openHistoryModal(record, trigger);
});

historyModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-history-close]")) {
    closeHistoryModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && historyModal.classList.contains("is-open")) {
    closeHistoryModal();
  }
});

updateOverview();
renderGroup("all");
