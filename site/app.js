const DATA_URL = "data/site-data.json";
const DETAIL_TABS = [
  { id: "guide", label: "Guide" },
  { id: "sample", label: "Sample output" },
  { id: "prompt", label: "Prompt" },
  { id: "scripts", label: "Scripts" },
];

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => renderLoadError(error));
});

async function init() {
  const data = await loadSiteData();
  renderFooterNote(data);

  if (document.body.dataset.page === "home") {
    renderHome(data);
    return;
  }

  if (document.body.dataset.page === "docs") {
    renderDocs(data);
  }
}

async function loadSiteData() {
  const response = await fetch(DATA_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Could not load ${DATA_URL} (${response.status})`);
  }
  return response.json();
}

function renderFooterNote(data) {
  const note = document.getElementById("verification-note");
  if (!note) {
    return;
  }

  const builtAt = formatLongDate(data.generatedAt);
  note.textContent = `Generated from repository sources and cross-checked against official OpenClaw documentation on ${builtAt}.`;
}

function renderHome(data) {
  const examplesById = new Map(data.examples.map((example) => [example.id, example]));
  setText("hero-lead", data.repo.lead);
  renderHeroProof(data.repo.qualityStandard);
  renderHeroStats(data.repo.stats);
  renderSkillCloud("hero-skills", data.repo.skillStats.slice(0, 10));
  renderFastStart(data.repo.fastStart);
  renderQuickWins(data.quickWins, examplesById);
  renderCollections(data.repo.collections, data.examples);
  renderQualityList(data.repo.qualityStandard);
  renderFaq(data.repo.faq);
  renderSourceDocs(data);
}

function renderDocs(data) {
  const state = {
    search: "",
    collection: "all",
    skill: "all",
    quickWinsOnly: false,
    activeTab: "guide",
    selectedId: selectExampleIdFromHash(data.examples) || data.examples[0]?.id || null,
  };
  const quickWinIds = new Set(data.quickWins.map((quickWin) => quickWin.id));

  populateSelect(
    document.getElementById("collection-filter"),
    [{ value: "all", label: "All collections" }].concat(
      data.repo.collections.map((collection) => ({
        value: collection.range,
        label: `${collection.range} · ${collection.focus}`,
      })),
    ),
  );

  populateSelect(
    document.getElementById("skill-filter"),
    [{ value: "all", label: "All skills" }].concat(
      data.repo.skillStats.map((entry) => ({
        value: entry.skill,
        label: `${entry.skill} (${entry.count})`,
      })),
    ),
  );

  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    refreshDocs();
  });

  document.getElementById("collection-filter").addEventListener("change", (event) => {
    state.collection = event.target.value;
    refreshDocs();
  });

  document.getElementById("skill-filter").addEventListener("change", (event) => {
    state.skill = event.target.value;
    refreshDocs();
  });

  document.getElementById("quick-wins-toggle").addEventListener("change", (event) => {
    state.quickWinsOnly = event.target.checked;
    refreshDocs();
  });

  window.addEventListener("hashchange", () => {
    const hashSelection = selectExampleIdFromHash(data.examples);
    if (hashSelection) {
      state.selectedId = hashSelection;
      refreshDocs(false);
    }
  });

  function refreshDocs(syncHash = true) {
    const filtered = filterExamples(data.examples, state, quickWinIds);

    if (filtered.length === 0) {
      state.selectedId = null;
    } else if (!filtered.some((example) => example.id === state.selectedId)) {
      state.selectedId = filtered[0].id;
    }

    renderCatalogList(filtered, state, quickWinIds, (exampleId) => {
      state.selectedId = exampleId;
      state.activeTab = "guide";
      if (syncHash) {
        updateHash(data.examples.find((example) => example.id === exampleId));
      }
      refreshDocs(false);
    });
    renderDetail(filtered, state);
  }

  refreshDocs(false);
}

function renderHeroProof(items) {
  const target = document.getElementById("hero-proof");
  if (!target) {
    return;
  }

  target.innerHTML = items
    .slice(0, 4)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderHeroStats(stats) {
  const target = document.getElementById("hero-stats");
  if (!target) {
    return;
  }

  const entries = [
    { label: "runnable starters", value: stats.examples },
    { label: "catalog collections", value: stats.collections },
    { label: "quick wins", value: stats.quickWins },
    { label: "unique skills", value: stats.uniqueSkills },
  ];
  target.innerHTML = entries
    .map(
      (entry) => `
        <div class="stat-card">
          <strong>${escapeHtml(String(entry.value))}</strong>
          <span>${escapeHtml(entry.label)}</span>
        </div>
      `,
    )
    .join("");
}

function renderSkillCloud(targetId, skillStats) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.innerHTML = skillStats
    .map(
      (entry, index) => `
        <span class="chip ${index % 3 === 1 ? "chip-muted" : index % 3 === 2 ? "chip-warm" : ""}">
          <span>${escapeHtml(entry.skill)}</span>
          <strong>${entry.count}</strong>
        </span>
      `,
    )
    .join("");
}

function renderFastStart(fastStart) {
  const target = document.getElementById("fast-start-list");
  if (!target) {
    return;
  }

  target.innerHTML = fastStart
    .map(
      (step, index) => `
        <li class="step-card">
          <strong>Step ${index + 1}</strong>
          <p>${renderInlineMarkup(step)}</p>
        </li>
      `,
    )
    .join("");
}

function renderQuickWins(quickWins, examplesById) {
  const target = document.getElementById("quick-wins-grid");
  if (!target) {
    return;
  }

  target.innerHTML = quickWins
    .map((quickWin) => {
      const example = examplesById.get(quickWin.id);
      const docsHref = example ? `docs.html#example/${example.dirName}` : "docs.html";
      const skills = example ? example.skills.slice(0, 3) : [];
      return `
        <article class="quick-card">
          <div class="quick-card-header">
            <strong>${formatId(quickWin.id)}. ${escapeHtml(quickWin.title)}</strong>
            <span class="chip chip-muted">${escapeHtml(example?.collection?.range || "featured")}</span>
          </div>
          <p>${escapeHtml(quickWin.reason)}</p>
          <div class="chip-cloud">
            ${skills.map((skill) => renderChip(skill)).join("")}
          </div>
          <div class="action-links">
            <a href="${docsHref}">Open in docs</a>
            <a href="${quickWin.guidePath}" target="_blank" rel="noreferrer">Raw guide</a>
            <a href="${quickWin.samplePath}" target="_blank" rel="noreferrer">Raw sample</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCollections(collections, examples) {
  const target = document.getElementById("collections-grid");
  if (!target) {
    return;
  }

  target.innerHTML = collections
    .map((collection) => {
      const count = examples.filter((example) => example.collection?.range === collection.range).length;
      return `
        <article class="collection-card">
          <strong>${escapeHtml(collection.range)} · ${escapeHtml(collection.focus)}</strong>
          <p>${escapeHtml(collection.notes)}</p>
          <p><span class="chip">${count} starters</span></p>
        </article>
      `;
    })
    .join("");
}

function renderQualityList(items) {
  const target = document.getElementById("quality-list");
  if (!target) {
    return;
  }

  target.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderFaq(faq) {
  const target = document.getElementById("faq-grid");
  if (!target) {
    return;
  }

  target.innerHTML = faq
    .map(
      (entry) => `
        <article class="faq-card">
          <strong>${escapeHtml(entry.question)}</strong>
          <p>${escapeHtml(entry.answer)}</p>
        </article>
      `,
    )
    .join("");
}

function renderSourceDocs(data) {
  const target = document.getElementById("source-docs");
  if (!target) {
    return;
  }

  const docs = [
    {
      title: "Repository README",
      description: "Top-level framing, quick wins, fast start, and FAQ.",
      href: data.docs.readme.rawPath,
      external: false,
    },
    {
      title: "Examples overview",
      description: "Range-based map of the runnable starter library.",
      href: data.docs.examples.rawPath,
      external: false,
    },
    {
      title: "Contributing",
      description: "Acceptance bar, required sections, and security rules.",
      href: data.docs.contributing.rawPath,
      external: false,
    },
    {
      title: "Full catalog",
      description: "All 100 starters with skill stacks and status.",
      href: data.docs.catalog.rawPath,
      external: false,
    },
    ...data.repo.verifiedSources.map((source) => ({
      title: source.label,
      description: "Official external reference checked during this site build.",
      href: source.url,
      external: true,
    })),
  ];

  target.innerHTML = docs
    .map(
      (doc) => `
        <article class="doc-card">
          <div class="doc-card-head">
            <strong>${escapeHtml(doc.title)}</strong>
            ${doc.external ? '<span class="chip chip-muted">External</span>' : ""}
          </div>
          <p>${escapeHtml(doc.description)}</p>
          <p><a class="text-link" href="${doc.href}"${doc.external ? ' target="_blank" rel="noreferrer"' : ""}>${doc.external ? "Open official site" : "Open raw source"}</a></p>
        </article>
      `,
    )
    .join("");
}

function populateSelect(select, options) {
  select.innerHTML = options
    .map(
      (option) =>
        `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`,
    )
    .join("");
}

function filterExamples(examples, state, quickWinIds) {
  return examples.filter((example) => {
    if (state.quickWinsOnly && !quickWinIds.has(example.id)) {
      return false;
    }
    if (state.collection !== "all" && example.collection?.range !== state.collection) {
      return false;
    }
    if (state.skill !== "all" && !example.skills.includes(state.skill)) {
      return false;
    }
    if (state.search && !example.searchText.includes(state.search)) {
      return false;
    }
    return true;
  });
}

function renderCatalogList(filtered, state, quickWinIds, onSelect) {
  const target = document.getElementById("catalog-list");
  if (!target) {
    return;
  }

  const meta = document.getElementById("results-meta");
  if (meta) {
    meta.textContent = `${filtered.length} starter${filtered.length === 1 ? "" : "s"} shown${
      state.quickWinsOnly ? " · quick wins only" : ""
    }.`;
  }

  if (filtered.length === 0) {
    target.innerHTML = `
      <div class="empty-state">
        No starters match the current filters. Clear the search or change the collection or skill.
      </div>
    `;
    return;
  }

  target.innerHTML = "";
  filtered.forEach((example) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `catalog-item${example.id === state.selectedId ? " is-active" : ""}`;
    button.innerHTML = `
      <h3>${formatId(example.id)}. ${escapeHtml(example.title)}</h3>
      <p>${escapeHtml(example.description)}</p>
      <div class="meta-line">
        <span class="chip chip-muted">${escapeHtml(example.collection.range)}</span>
        ${quickWinIds.has(example.id) ? '<span class="chip chip-warm">quick win</span>' : ""}
        ${example.skills.slice(0, 3).map((skill) => renderChip(skill)).join("")}
      </div>
    `;
    button.addEventListener("click", () => onSelect(example.id));
    target.appendChild(button);
  });
}

function renderDetail(filtered, state) {
  const empty = document.getElementById("detail-empty");
  const view = document.getElementById("detail-view");
  const example = filtered.find((item) => item.id === state.selectedId);

  if (!example) {
    empty.hidden = false;
    view.hidden = true;
    return;
  }

  empty.hidden = true;
  view.hidden = false;
  setText("detail-range", `${example.collection.range} · ${example.collection.focus}`);
  setText("detail-title", `${formatId(example.id)}. ${example.title}`);
  setText("detail-description", example.description);

  const meta = document.getElementById("detail-meta");
  meta.innerHTML = [
    renderChip(example.status),
    renderChip(example.collection.focus, "chip-muted"),
    ...example.skills.map((skill) => renderChip(skill, "chip-warm")),
  ].join("");

  const links = document.getElementById("detail-links");
  links.innerHTML = `
    <a href="${example.rawLinks.readme}" target="_blank" rel="noreferrer">Raw guide</a>
    <a href="${example.rawLinks.sample}" target="_blank" rel="noreferrer">Raw sample</a>
    <a href="${example.rawLinks.prompt}" target="_blank" rel="noreferrer">Raw prompt</a>
    <a href="${example.scripts.installSkills.rawPath}" target="_blank" rel="noreferrer">Install script</a>
  `;

  renderList("detail-highlights", example.highlights, "Guide bullets are missing from this README.");
  renderList("detail-kpis", example.kpis, "KPI bullets are missing from this README.");
  renderList(
    "detail-security",
    example.securityNotes,
    "Security bullets are missing from this README.",
  );

  document.getElementById("panel-guide").innerHTML = example.guideHtml;
  document.getElementById("panel-sample").innerHTML = example.sampleHtml;
  document.getElementById("detail-prompt").textContent = example.promptText;
  renderScripts(example);

  const tabs = document.getElementById("detail-tabs");
  renderTabs(tabs, DETAIL_TABS, state.activeTab, (tabId) => {
    state.activeTab = tabId;
    renderDetail(filtered, state);
  });
  setActivePanel(state.activeTab);
}

function renderScripts(example) {
  const target = document.getElementById("detail-scripts");
  target.innerHTML = Object.values(example.scripts)
    .map(
      (script) => `
        <article class="script-card">
          <h3>${escapeHtml(script.label)}</h3>
          <div class="action-links">
            <a href="${script.rawPath}">Open raw file</a>
          </div>
          <pre class="code-block">${escapeHtml(script.content)}</pre>
        </article>
      `,
    )
    .join("");
}

function renderTabs(target, tabs, activeTab, onSelect) {
  target.innerHTML = "";
  tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-button${tab.id === activeTab ? " is-active" : ""}`;
    button.textContent = tab.label;
    button.addEventListener("click", () => onSelect(tab.id));
    target.appendChild(button);
  });
}

function setActivePanel(activeTab) {
  const panels = ["guide", "sample", "prompt", "scripts"];
  panels.forEach((panelId) => {
    const panel = document.getElementById(`panel-${panelId}`);
    panel.hidden = panelId !== activeTab;
  });
}

function renderList(targetId, items, emptyMessage) {
  const target = document.getElementById(targetId);
  target.innerHTML = (items.length ? items : [emptyMessage])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderLoadError(error) {
  const main = document.querySelector("main");
  if (!main) {
    throw error;
  }

  main.innerHTML = `
    <section class="load-error">
      <p class="eyebrow">Site data did not load</p>
      <h1>Serve the <code>site/</code> directory over HTTP.</h1>
      <p class="lead">${escapeHtml(error.message)}</p>
    </section>
  `;
}

function setText(id, value) {
  const target = document.getElementById(id);
  if (target) {
    target.textContent = value;
  }
}

function renderChip(label, extraClass = "") {
  return `<span class="chip ${extraClass}">${escapeHtml(label)}</span>`;
}

function updateHash(example) {
  if (!example) {
    return;
  }
  window.history.replaceState(null, "", `#example/${example.dirName}`);
}

function selectExampleIdFromHash(examples) {
  const match = window.location.hash.match(/^#example\/(.+)$/);
  if (!match) {
    return null;
  }
  const dirName = decodeURIComponent(match[1]);
  const example = examples.find((item) => item.dirName === dirName);
  return example ? example.id : null;
}

function formatId(value) {
  return String(value).padStart(2, "0");
}

function formatLongDate(value) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInlineMarkup(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}
