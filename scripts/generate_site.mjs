#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SITE_DIR = path.join(ROOT, "site");
const DATA_DIR = path.join(SITE_DIR, "data");
const FILES_DIR = path.join(SITE_DIR, "files");
const ASSETS_DIR = path.join(SITE_DIR, "assets");
const RUNNABLE_DIR = path.join(ROOT, "examples", "runnable");
const REQUIRED_FILES = [
  "README.md",
  "sample-output.md",
  path.join("prompts", "cron_prompt.txt"),
  path.join("scripts", "check_prereqs.sh"),
  path.join("scripts", "install_cron.sh"),
  path.join("scripts", "install_skills.sh"),
];
const REQUIRED_HEADINGS = [
  "## Skill Stack",
  "## Setup",
  "## Smoke Test",
  "## KPI",
  "## Security Notes",
  "## Rollback",
];
const COLLECTIONS = [
  {
    range: "01-30",
    focus: "Foundation set",
    notes:
      "The original starter library across engineering, support, research, and founder workflows.",
    min: 1,
    max: 30,
  },
  {
    range: "31-42",
    focus: "Engineering quality and release operations",
    notes:
      "Dependency, CI, ownership, release, hotfix, and model-behavior control loops.",
    min: 31,
    max: 42,
  },
  {
    range: "43-52",
    focus: "Revenue, renewals, and pipeline control",
    notes:
      "Renewal risk, expansion signals, trials, collections, and partner motion.",
    min: 43,
    max: 52,
  },
  {
    range: "53-62",
    focus: "Support, inbox, and operator workflows",
    notes:
      "Bug intake, VIP attention, calendar prep, handoffs, and operating memos.",
    min: 53,
    max: 62,
  },
  {
    range: "63-70",
    focus: "Research, content, and market signals",
    notes:
      "Competitive intelligence, quote mining, webinar repurposing, SEO, and request routing.",
    min: 63,
    max: 70,
  },
  {
    range: "71-76",
    focus: "People, recruiting, and onboarding",
    notes:
      "Candidate briefs, stall tracking, onboarding, policy, and source-quality workflows.",
    min: 71,
    max: 76,
  },
  {
    range: "77-82",
    focus: "Finance, procurement, and board prep",
    notes:
      "Renewals, redlines, procurement, PO follow-up, expense exceptions, and board evidence.",
    min: 77,
    max: 82,
  },
  {
    range: "83-101",
    focus: "Security, IT, governance, and internal operations",
    notes:
      "Access review, secrets, audits, exceptions, IT intake, asset return, meeting hygiene, and social operations.",
    min: 83,
    max: 101,
  },
  {
    range: "102-126",
    focus: "Data, metrics, and knowledge operations",
    notes:
      "Evidence indexes, data quality, KPI definitions, research archives, taxonomy, retention, and analyst handoffs.",
    min: 102,
    max: 126,
  },
  {
    range: "127-151",
    focus: "Customer success, sales, and revenue execution",
    notes:
      "Onboarding, support capacity, customer health, references, deal review, pipeline evidence, and renewal preparation.",
    min: 127,
    max: 151,
  },
  {
    range: "152-176",
    focus: "Product, marketing, and content operations",
    notes:
      "Product feedback, launch readiness, content planning, accessibility, community signals, and campaign hygiene.",
    min: 152,
    max: 176,
  },
  {
    range: "177-201",
    focus: "Engineering, platform, and reliability operations",
    notes:
      "Ownership, issue triage, API contracts, deployments, cost, observability, SLOs, dependencies, and test quality.",
    min: 177,
    max: 201,
  },
];
const VERIFIED_SOURCES = [
  {
    label: "OpenClaw Docs",
    url: "https://docs.openclaw.ai/",
  },
  {
    label: "ClawHub Registry",
    url: "https://clawhub.com/",
  },
];
let fallbackMarkdownWarningShown = false;

function listRootReadmes() {
  return readdirSync(path.join(ROOT, "docs", "readmes"))
    .filter((name) => /^README(?:\.[a-z-]+)?\.md$/i.test(name))
    .sort((left, right) => left.localeCompare(right, "en"));
}

function main() {
  const auditOnly = process.argv.includes("--audit-only");
  const repoDocs = loadRepoDocs();
  const examples = loadExamples(repoDocs.catalogRows);
  const audit = auditRepo(repoDocs, examples);

  if (audit.errors.length > 0) {
    audit.errors.forEach((error) => console.error(`ERROR: ${error}`));
    audit.warnings.forEach((warning) => console.error(`WARN: ${warning}`));
    process.exitCode = 1;
    return;
  }

  audit.warnings.forEach((warning) => console.warn(`WARN: ${warning}`));
  console.log(
    `Audit OK: ${examples.length} runnable starters, ${repoDocs.quickWins.length} quick wins, ${repoDocs.skillStats.length} unique skills.`,
  );

  if (auditOnly) {
    return;
  }

  prepareSiteDirectories();
  copySourceFiles();

  const siteData = buildSiteData(repoDocs, examples);
  writeFileSync(
    path.join(DATA_DIR, "site-data.json"),
    `${JSON.stringify(siteData, null, 2)}\n`,
  );
  writeFileSync(
    path.join(DATA_DIR, "audit-report.json"),
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        stats: siteData.repo.stats,
        warnings: audit.warnings,
      },
      null,
      2,
    )}\n`,
  );

  console.log(`Wrote ${path.relative(ROOT, path.join(DATA_DIR, "site-data.json"))}`);
}

function loadRepoDocs() {
  const readmePath = path.join(ROOT, "README.md");
  const readme = readFileSync(readmePath, "utf8");
  const examplesReadmePath = path.join(ROOT, "examples", "README.md");
  const examplesReadme = readFileSync(examplesReadmePath, "utf8");
  const contributingPath = path.join(ROOT, "CONTRIBUTING.md");
  const contributing = readFileSync(contributingPath, "utf8");
  const catalogPath = path.join(ROOT, "examples", "catalog.md");
  const catalog = readFileSync(catalogPath, "utf8");

  const quickWins = parseMarkdownTable(extractSection(readme, "## Top 10 Quick Wins")).map(
    (row) => {
      const links = parseLinks(row.Links || "");
      return {
        id: Number.parseInt(row.ID, 10),
        title: row.Example,
        reason: row["Why It Is A Quick Win"],
        guidePath: links.Guide || "",
        samplePath: links.Sample || "",
      };
    },
  );
  const collectionHeading = readme
    .split(/\r?\n/)
    .find((line) => /^## Runnable Starters \(\d+ Total\)$/.test(line.trim()));
  const collections = parseMarkdownTable(
    extractSection(readme, collectionHeading || "## Runnable Starters (101 Total)"),
  ).map((row) => ({
    range: row.Range,
    focus: row.Focus,
    notes: row.Notes,
  }));
  const catalogRows = parseMarkdownTable(catalog).map((row) => ({
    id: Number.parseInt(row["#"], 10),
    title: row.Example,
    skills: row.Skills.split(",").map((skill) => skill.trim()),
    status: row.Status,
  }));
  const skillStats = buildSkillStats(catalogRows);
  const languages = listRootReadmes().map((name) => ({
    code: readmeLanguageCode(name),
    label: languageLabelForReadme(name),
    rawPath: toPosix(path.join("files", "readmes", name)),
  }));

  return {
    lead: firstParagraph(readme),
    fastStart: parseOrderedList(extractSection(readme, "## Fast Start")),
    qualityStandard: parseBulletList(extractSection(readme, "## Example Quality Standard")),
    faq: parseFaq(extractSection(readme, "## OpenClaw FAQ")),
    quickWins,
    collections,
    catalogRows,
    skillStats,
    docs: {
      readme: {
        rawPath: "files/README.md",
        html: rewriteRelativeTargets(
          markdownToHtml(readme),
          path.relative(ROOT, readmePath),
        ),
      },
      examples: {
        rawPath: "files/examples/README.md",
        html: rewriteRelativeTargets(
          markdownToHtml(examplesReadme),
          path.relative(ROOT, examplesReadmePath),
        ),
      },
      contributing: {
        rawPath: "files/CONTRIBUTING.md",
        html: rewriteRelativeTargets(
          markdownToHtml(contributing),
          path.relative(ROOT, contributingPath),
        ),
      },
      catalog: {
        rawPath: "files/examples/catalog.md",
        html: rewriteRelativeTargets(
          markdownToHtml(catalog),
          path.relative(ROOT, catalogPath),
        ),
      },
      languages,
    },
  };
}

function loadExamples(catalogRows) {
  const catalogById = new Map(catalogRows.map((row) => [row.id, row]));
  const examples = readdirSync(RUNNABLE_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => Number.parseInt(left, 10) - Number.parseInt(right, 10))
    .map((dirName) => {
      const exampleDir = path.join(RUNNABLE_DIR, dirName);
      const readmePath = path.join(exampleDir, "README.md");
      const readme = readFileSync(readmePath, "utf8");
      const samplePath = path.join(exampleDir, "sample-output.md");
      const sampleOutput = readFileSync(samplePath, "utf8");
      const promptPath = path.join(exampleDir, "prompts", "cron_prompt.txt");
      const prompt = readFileSync(promptPath, "utf8");
      const id = Number.parseInt(dirName.split("-")[0], 10);
      const slug = dirName.replace(/^\d+-/, "");
      const title = readme
        .split(/\r?\n/, 1)[0]
        .replace(/^#\s+\d+\s+-\s+/, "")
        .trim();
      const catalogRow = catalogById.get(id);
      const scripts = {
        checkPrereqs: {
          label: "check_prereqs.sh",
          rawPath: toPosix(path.join("files", "examples", "runnable", dirName, "scripts", "check_prereqs.sh")),
          content: readFileSync(path.join(exampleDir, "scripts", "check_prereqs.sh"), "utf8").trim(),
        },
        installCron: {
          label: "install_cron.sh",
          rawPath: toPosix(path.join("files", "examples", "runnable", dirName, "scripts", "install_cron.sh")),
          content: readFileSync(path.join(exampleDir, "scripts", "install_cron.sh"), "utf8").trim(),
        },
        installSkills: {
          label: "install_skills.sh",
          rawPath: toPosix(path.join("files", "examples", "runnable", dirName, "scripts", "install_skills.sh")),
          content: readFileSync(path.join(exampleDir, "scripts", "install_skills.sh"), "utf8").trim(),
        },
      };

      return {
        id,
        slug,
        dirName,
        title,
        description: firstParagraph(readme),
        skills: parseSkillStack(readme),
        skillsLabel: (catalogRow?.skills || []).join(", "),
        status: catalogRow?.status || "Unknown",
        collection: collectionForId(id),
        highlights: parseBulletList(extractSection(readme, "## What It Does")),
        kpis: parseBulletList(extractSection(readme, "## KPI")),
        securityNotes: parseBulletList(extractSection(readme, "## Security Notes")),
        searchText: [
          dirName,
          title,
          firstParagraph(readme),
          parseSkillStack(readme).join(" "),
          parseBulletList(extractSection(readme, "## What It Does")).join(" "),
        ]
          .join(" ")
          .toLowerCase(),
        guideHtml: stripLeadingHeading(
          rewriteRelativeTargets(markdownToHtml(readme), path.relative(ROOT, readmePath)),
        ),
        sampleHtml: stripLeadingHeading(
          rewriteRelativeTargets(
            markdownToHtml(sampleOutput),
            path.relative(ROOT, samplePath),
          ),
        ),
        promptText: prompt.trim(),
        scripts,
        rawLinks: {
          readme: toPosix(path.join("files", "examples", "runnable", dirName, "README.md")),
          sample: toPosix(
            path.join("files", "examples", "runnable", dirName, "sample-output.md"),
          ),
          prompt: toPosix(
            path.join("files", "examples", "runnable", dirName, "prompts", "cron_prompt.txt"),
          ),
        },
      };
    });

  return examples;
}

function readmeLanguageCode(readmeName) {
  if (readmeName === "README.md") {
    return "en";
  }
  const match = readmeName.match(/^README\.([^.]+(?:-[^.]+)?)\.md$/i);
  return match ? match[1] : readmeName;
}

function languageLabelForReadme(readmeName) {
  const labels = {
    "README.md": "English",
    "README.es.md": "Español",
    "README.de.md": "Deutsch",
    "README.ja.md": "日本語",
    "README.fr.md": "Français",
    "README.pt.md": "Português",
    "README.ru.md": "Русский",
    "README.it.md": "Italiano",
    "README.nl.md": "Nederlands",
    "README.pl.md": "Polski",
    "README.zh-CN.md": "中文 (简体)",
    "README.zh-TW.md": "中文 (繁體)",
    "README.ko.md": "한국어",
    "README.tr.md": "Türkçe",
    "README.ar.md": "العربية",
    "README.vi.md": "Tiếng Việt",
    "README.th.md": "ไทย",
    "README.id.md": "Bahasa Indonesia",
    "README.hi.md": "हिन्दी",
    "README.cs.md": "Čeština",
  };

  return labels[readmeName] || readmeName;
}

function auditRepo(repoDocs, examples) {
  const errors = [];
  const warnings = [];
  const exampleNames = new Set(examples.map((example) => example.dirName));
  const catalogIds = new Set(repoDocs.catalogRows.map((row) => row.id));

  if (examples.length !== repoDocs.catalogRows.length) {
    errors.push(
      `Catalog count (${repoDocs.catalogRows.length}) does not match runnable example count (${examples.length}).`,
    );
  }

  if (repoDocs.quickWins.length !== 10) {
    warnings.push(`Expected 10 quick wins, found ${repoDocs.quickWins.length}.`);
  }

  for (const example of examples) {
    if (!example.collection) {
      errors.push(`${example.dirName} is outside the configured collection ranges.`);
    }
    const exampleRoot = path.join(RUNNABLE_DIR, example.dirName);
    for (const requiredFile of REQUIRED_FILES) {
      const target = path.join(exampleRoot, requiredFile);
      if (!existsSync(target)) {
        errors.push(`${example.dirName} is missing ${toPosix(requiredFile)}.`);
      }
    }

    const readme = readFileSync(path.join(exampleRoot, "README.md"), "utf8");
    for (const heading of REQUIRED_HEADINGS) {
      if (!readme.includes(heading)) {
        errors.push(`${example.dirName} is missing ${heading}.`);
      }
    }

    const catalogRow = repoDocs.catalogRows.find((row) => row.id === example.id);
    if (!catalogRow) {
      errors.push(`${example.dirName} is missing from examples/catalog.md.`);
      continue;
    }

    const titleMatches = normalizeLabel(catalogRow.title) === normalizeLabel(example.title);
    if (!titleMatches) {
      warnings.push(
        `${example.dirName} title differs from catalog entry (${catalogRow.title} vs ${example.title}).`,
      );
    }

    const readmeSkills = [...example.skills].sort().join(",");
    const catalogSkills = [...catalogRow.skills].sort().join(",");
    if (readmeSkills !== catalogSkills) {
      warnings.push(`${example.dirName} skills differ between README and catalog.`);
    }
  }

  for (const quickWin of repoDocs.quickWins) {
    const guideTarget = path.join(ROOT, quickWin.guidePath);
    const sampleTarget = path.join(ROOT, quickWin.samplePath);
    if (!existsSync(guideTarget)) {
      errors.push(`Quick win ${quickWin.id} guide is missing: ${quickWin.guidePath}`);
    }
    if (!existsSync(sampleTarget)) {
      errors.push(`Quick win ${quickWin.id} sample is missing: ${quickWin.samplePath}`);
    }
  }

  for (const row of repoDocs.catalogRows) {
    const dirName = `${String(row.id).padStart(2, "0")}-${slugify(row.title)}`;
    if (!exampleNames.has(dirName)) {
      errors.push(`Catalog entry ${row.id} has no matching directory (${dirName}).`);
    }
  }

  for (const example of examples) {
    if (!catalogIds.has(example.id)) {
      errors.push(`${example.dirName} exists on disk but is missing from catalog.`);
    }
  }

  const brokenLinks = findBrokenMarkdownLinks([
    path.join(ROOT, "README.md"),
    ...listRootReadmes().map((name) => path.join(ROOT, "docs", "readmes", name)),
    path.join(ROOT, "CONTRIBUTING.md"),
    path.join(ROOT, "examples", "README.md"),
    path.join(ROOT, "examples", "catalog.md"),
    ...examples.map((example) =>
      path.join(ROOT, "examples", "runnable", example.dirName, "README.md"),
    ),
    ...examples.map((example) =>
      path.join(ROOT, "examples", "runnable", example.dirName, "sample-output.md"),
    ),
  ]);
  brokenLinks.forEach((brokenLink) => errors.push(`Broken local link: ${brokenLink}`));

  return { errors, warnings };
}

function buildSiteData(repoDocs, examples) {
  return {
    generatedAt: new Date().toISOString(),
    repo: {
      name: "Awesome OpenClaw Examples",
      lead: repoDocs.lead,
      stats: {
        examples: examples.length,
        collections: COLLECTIONS.length,
        quickWins: repoDocs.quickWins.length,
        uniqueSkills: repoDocs.skillStats.length,
      },
      collections: repoDocs.collections,
      skillStats: repoDocs.skillStats,
      fastStart: repoDocs.fastStart,
      qualityStandard: repoDocs.qualityStandard,
      faq: repoDocs.faq,
      verifiedSources: VERIFIED_SOURCES,
    },
    quickWins: repoDocs.quickWins.map((quickWin) => ({
      ...quickWin,
      guidePath: toSitePath(quickWin.guidePath),
      samplePath: toSitePath(quickWin.samplePath),
      exampleSlug: quickWin.guidePath
        .split("/")
        .slice(-2, -1)[0]
        .replace(/^\d+-/, ""),
    })),
    docs: repoDocs.docs,
    examples,
  };
}

function prepareSiteDirectories() {
  mkdirSync(SITE_DIR, { recursive: true });
  rmSync(DATA_DIR, { recursive: true, force: true });
  rmSync(FILES_DIR, { recursive: true, force: true });
  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(FILES_DIR, { recursive: true });
  mkdirSync(ASSETS_DIR, { recursive: true });
}

function copySourceFiles() {
  cpSync(path.join(ROOT, "README.md"), path.join(FILES_DIR, "README.md"));
  for (const readmeName of listRootReadmes()) {
    cpSync(
      path.join(ROOT, "docs", "readmes", readmeName),
      path.join(FILES_DIR, "readmes", readmeName),
    );
  }
  cpSync(path.join(ROOT, "CONTRIBUTING.md"), path.join(FILES_DIR, "CONTRIBUTING.md"));
  cpSync(path.join(ROOT, "LICENSE"), path.join(FILES_DIR, "LICENSE"));
  cpSync(path.join(ROOT, "logo.png"), path.join(FILES_DIR, "logo.png"));
  cpSync(path.join(ROOT, "logo.png"), path.join(ASSETS_DIR, "logo.png"));
  cpSync(path.join(ROOT, "examples"), path.join(FILES_DIR, "examples"), {
    recursive: true,
  });
  const researchDir = path.join(ROOT, "research_openclaw_examples");
  if (existsSync(researchDir)) {
    cpSync(researchDir, path.join(FILES_DIR, "research_openclaw_examples"), {
      recursive: true,
    });
  }
}

function markdownToHtml(markdown) {
  try {
    return execFileSync(
      "pandoc",
      ["--from", "gfm", "--to", "html5", "--wrap=none"],
      {
        cwd: ROOT,
        input: markdown,
        encoding: "utf8",
      },
    ).trim();
  } catch (error) {
    if (!fallbackMarkdownWarningShown) {
      console.warn("pandoc is unavailable; using the built-in Markdown fallback.");
      fallbackMarkdownWarningShown = true;
    }
    return simpleMarkdownToHtml(markdown);
  }
}

function simpleMarkdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let paragraph = [];
  let listType = null;
  let inCode = false;
  let codeLines = [];
  let tableRows = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };
  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };
  const flushTable = () => {
    if (tableRows.length < 2) {
      tableRows = [];
      return;
    }
    const cells = (row) => row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
    const header = cells(tableRows[0]);
    const body = tableRows.slice(2).map(cells);
    html.push(`<table><thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`);
    html.push(`<tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
    tableRows = [];
  };

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      flushParagraph();
      closeList();
      flushTable();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
      }
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const trimmed = line.trim();
    if (trimmed.startsWith("|")) {
      flushParagraph();
      closeList();
      tableRows.push(trimmed);
      continue;
    }
    if (tableRows.length > 0) {
      flushTable();
    }
    if (!trimmed) {
      flushParagraph();
      closeList();
      continue;
    }
    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      html.push(`<h${heading[1].length}>${inlineMarkdown(heading[2])}</h${heading[1].length}>`);
      continue;
    }
    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    const ordered = trimmed.match(/^\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        html.push(`<${nextType}>`);
        listType = nextType;
      }
      html.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
      continue;
    }
    if (trimmed.startsWith("> ")) {
      flushParagraph();
      closeList();
      html.push(`<blockquote><p>${inlineMarkdown(trimmed.slice(2))}</p></blockquote>`);
      continue;
    }
    paragraph.push(trimmed);
  }

  if (inCode) {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }
  flushParagraph();
  closeList();
  flushTable();
  return html.join("");
}

function inlineMarkdown(value) {
  let html = escapeHtml(value);
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return html;
}

function rewriteRelativeTargets(html, sourceRelativePath) {
  const sourceDir = path.dirname(sourceRelativePath);
  return html.replace(
    /(href|src)="([^"]+)"/g,
    (fullMatch, attribute, rawTarget) => {
      if (/^(https?:|mailto:|#|data:)/.test(rawTarget)) {
        return fullMatch;
      }

      const [targetPath, suffix = ""] = rawTarget.split(/(?=[?#])/);
      if (!targetPath) {
        return fullMatch;
      }

      const resolved = toPosix(path.normalize(path.join(sourceDir, targetPath)));
      return `${attribute}="files/${resolved}${suffix}"`;
    },
  );
}

function stripLeadingHeading(html) {
  return html.replace(/^\s*<h1[^>]*>.*?<\/h1>\s*/s, "");
}

function extractSection(markdown, heading) {
  const lines = markdown.split(/\r?\n/);
  const startIndex = lines.findIndex((line) => line.trim() === heading);
  if (startIndex === -1) {
    return "";
  }

  const level = heading.match(/^#+/)?.[0].length || 2;
  const endPattern = new RegExp(`^#{1,${level}}\\s+`);
  const buffer = [];

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (endPattern.test(line)) {
      break;
    }
    buffer.push(line);
  }

  return buffer.join("\n").trim();
}

function parseMarkdownTable(section) {
  const lines = section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"));
  if (lines.length < 2) {
    return [];
  }

  const headers = splitTableRow(lines[0]);
  return lines.slice(2).map((line) => {
    const cells = splitTableRow(line);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""]));
  });
}

function splitTableRow(line) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseLinks(markdown) {
  const links = {};
  for (const match of markdown.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    links[match[1]] = match[2];
  }
  return links;
}

function parseSkillStack(readme) {
  const section = extractSection(readme, "## Skill Stack");
  const skills = [];
  for (const match of section.matchAll(/install\s+([a-z0-9-]+)/gi)) {
    skills.push(match[1]);
  }
  return skills;
}

function parseBulletList(section) {
  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim());
}

function parseOrderedList(section) {
  const items = [];
  let current = "";

  for (const rawLine of section.split(/\r?\n/)) {
    const line = rawLine.trim();
    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);

    if (orderedMatch) {
      if (current) {
        items.push(current.trim());
      }
      current = orderedMatch[1];
      continue;
    }

    if (!line) {
      continue;
    }

    if (line.startsWith("- ")) {
      current = `${current} ${line.replace(/^- /, "").trim()}`.trim();
      continue;
    }

    if (current) {
      current = `${current} ${line}`.trim();
    }
  }

  if (current) {
    items.push(current.trim());
  }

  return items;
}

function parseFaq(section) {
  const entries = [];
  let current = null;

  for (const rawLine of section.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (line.startsWith("### ")) {
      if (current) {
        entries.push(current);
      }
      current = {
        question: line.replace(/^### /, "").trim(),
        answer: "",
      };
      continue;
    }

    if (!current || !line) {
      continue;
    }

    current.answer = `${current.answer} ${line}`.trim();
  }

  if (current) {
    entries.push(current);
  }

  return entries;
}

function firstParagraph(markdown) {
  const lines = markdown.split(/\r?\n/).slice(1);
  const buffer = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      if (buffer.length > 0) {
        break;
      }
      continue;
    }

    if (line.startsWith("#") || line.startsWith("![")) {
      continue;
    }

    // Skip the language switcher block added to the multilingual READMEs.
    if ((line.match(/\]\(/g) || []).length >= 3 && line.includes("README")) {
      continue;
    }

    if (line.startsWith("|")) {
      break;
    }

    buffer.push(line);
  }

  return buffer.join(" ").trim();
}

function collectionForId(id) {
  return COLLECTIONS.find((collection) => id >= collection.min && id <= collection.max) || null;
}

function buildSkillStats(catalogRows) {
  const counts = new Map();
  for (const row of catalogRows) {
    for (const skill of row.skills) {
      counts.set(skill, (counts.get(skill) || 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([skill, count]) => ({ skill, count }))
    .sort((left, right) => right.count - left.count || left.skill.localeCompare(right.skill));
}

function findBrokenMarkdownLinks(files) {
  const broken = [];
  const linkPattern = /!?\[[^\]]*]\(([^)]+)\)/g;

  for (const file of files) {
    const markdown = readFileSync(file, "utf8");
    const sourceDir = path.dirname(file);
    for (const match of markdown.matchAll(linkPattern)) {
      const target = match[1].trim().replace(/^["']|["']$/g, "");
      if (!target || /^(https?:|mailto:|#)/.test(target)) {
        continue;
      }

      const cleanTarget = target.split("#")[0].split("?")[0];
      const resolved = path.resolve(sourceDir, cleanTarget);
      if (!existsSync(resolved)) {
        broken.push(`${path.relative(ROOT, file)} -> ${target}`);
      }
    }
  }

  return broken;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeLabel(value) {
  return slugify(value).replace(/-/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function toSitePath(repoRelativePath) {
  return toPosix(path.join("files", repoRelativePath));
}

main();
