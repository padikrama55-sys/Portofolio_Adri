"use strict";

/* =========================================
   KONTAK
   Format nomor: kode negara, tanpa + / spasi.
========================================= */

const WHATSAPP_NUMBER = "6287821534446";
const MOTION_URL = "https://www.youtube.com/watch?v=FcGYjMUH6ug";

/* =========================================
   DATA PORTOFOLIO
   Gambar pertama menjadi thumbnail.
   Tambahkan karya dengan menyalin satu objek.
========================================= */

window.PROJECTS = [
  {
    id: 0,
    title: "Pesta Balap Rakyat",
    categories: ["event"],
    images: [
      "assets/images/event-01.webp",
      "assets/images/event-04.webp",
      "assets/images/event-13.webp",
      "assets/images/event-14.webp",
      "assets/images/event-18.webp",
      "assets/images/event-20.webp"
    ],
    pdf: "assets/pdf/event.pdf",
    page: 1,
    description: {
      id: "Proposal identitas visual event, tata area, panggung, dan materi promosi.",
      en: "Event visual identity proposal, site layout, stage, and promotional materials."
    },
    status: {
      id: "Proposal event",
      en: "Event proposal"
    }
  },
  {
    id: 1,
    title: "Torch — Omnichannel",
    categories: ["branding", "packaging"],
    images: [
      "assets/images/torch-26.webp",
      "assets/images/torch-10.webp",
      "assets/images/torch-15.webp",
      "assets/images/torch-18.webp",
      "assets/images/torch-27.webp",
      "assets/images/torch-30.webp",
      "assets/images/torch-33.webp"
    ],
    pdf: "assets/pdf/torch.pdf",
    page: 26,
    description: {
      id: "Eksplorasi identitas lintas media: packaging, tagging, display, dan materi promosi.",
      en: "An exploration of identity across packaging, tags, displays, and promotional materials."
    },
    status: {
      id: "Eksplorasi visual",
      en: "Visual exploration"
    }
  },
  {
    id: 2,
    title: "Illustration & Character",
    categories: ["illustration"],
    images: [
      "assets/images/illustration-03.webp",
      "assets/images/illustration-04.webp",
      "assets/images/illustration-05.webp",
      "assets/images/illustration-14.webp",
      "assets/images/illustration-19.webp",
      "assets/images/illustration-20.webp",
      "assets/images/illustration-21.webp",
      "assets/images/illustration-23.webp"
    ],
    pdf: "assets/pdf/illustration.pdf",
    page: 3,
    description: {
      id: "Ilustrasi karakter, editorial, poster, dan infografis dengan bahasa visual yang beragam.",
      en: "Character, editorial, poster, and infographic illustration in a range of visual styles."
    },
    status: {
      id: "Kompilasi karya",
      en: "Selected collection"
    }
  },
  {
    id: 3,
    title: "Expressive Typography",
    categories: ["typography"],
    images: [
      "assets/images/type-03.webp",
      "assets/images/type-01.webp",
      "assets/images/type-02.webp",
      "assets/images/type-04.webp",
      "assets/images/type-05.webp",
      "assets/images/type-06.webp",
      "assets/images/type-07.webp",
      "assets/images/type-08.webp",
      "assets/images/type-09.webp",
      "assets/images/type-10.webp",
      "assets/images/type-11.webp",
      "assets/images/type-12.webp"
    ],
    pdf: "assets/pdf/type.pdf",
    page: 3,
    description: {
      id: "Eksplorasi lettering, bentuk huruf, warna, dan komposisi untuk pesan yang berkarakter.",
      en: "Lettering, letterforms, colour, and composition that give messages a distinctive voice."
    },
    status: {
      id: "Eksplorasi personal",
      en: "Personal exploration"
    }
  },
  {
    id: 4,
    title: "Wells — Elevate Everyday Living",
    categories: ["social"],
    images: [
      "assets/images/wells-04.webp",
      "assets/images/wells-02.webp",
      "assets/images/wells-03.webp",
      "assets/images/wells-06.webp",
      "assets/images/wells-07.webp"
    ],
    pdf: "assets/pdf/wells.pdf",
    page: 4,
    description: {
      id: "Konsep kampanye media sosial: moodboard, strategi konten, feed, dan story.",
      en: "A social campaign concept covering moodboards, content strategy, feeds, and stories."
    },
    status: {
      id: "Konsep / Design task",
      en: "Concept / Design task"
    }
  },
  {
    id: 5,
    title: "Iwan Fals ft. Ubay Nidji",
    categories: ["motion"],
    images: [
      "assets/images/main-13.webp"
    ],
    pdf: "assets/pdf/main.pdf",
    page: 13,
    description: {
      id: "Motion graphic untuk video lirik, ditampilkan dalam portofolio Musica Studios.",
      en: "Motion graphics for a lyric video, featured in the Musica Studios portfolio."
    },
    status: {
      id: "Motion graphic",
      en: "Motion graphics"
    }
  },
  {
    id: 6,
    title: "Logo Selection",
    categories: ["branding"],
    images: [
      "assets/images/main-10.webp"
    ],
    pdf: "assets/pdf/main.pdf",
    page: 10,
    description: {
      id: "Kumpulan eksplorasi logo dengan pendekatan bentuk dan identitas yang berbeda.",
      en: "A selection of logos exploring distinct forms and visual identities."
    },
    status: {
      id: "Kompilasi karya",
      en: "Selected collection"
    }
  },
  {
    id: 7,
    title: "Packaging Selection",
    categories: ["packaging"],
    images: [
      "assets/images/main-21.webp",
      "assets/images/main-22.webp"
    ],
    pdf: "assets/pdf/main.pdf",
    page: 21,
    description: {
      id: "Desain kemasan untuk Sambal Garang dan produk UMKM, dari grafis hingga aplikasi.",
      en: "Packaging for Sambal Garang and small businesses, from graphics to application."
    },
    status: {
      id: "Desain kemasan",
      en: "Packaging design"
    }
  },
  {
    id: 8,
    title: "The 90’s Festival",
    categories: ["event", "illustration"],
    images: [
      "assets/images/main-11.webp"
    ],
    pdf: "assets/pdf/main.pdf",
    page: 11,
    description: {
      id: "Eksplorasi ilustrasi objek era 90-an sebagai bahasa visual event.",
      en: "Illustrated objects from the 1990s form the visual language of an event."
    },
    status: {
      id: "Visual event",
      en: "Event visuals"
    }
  },
  {
    id: 9,
    title: "Editorial & Information",
    categories: ["editorial"],
    images: [
      "assets/images/main-31.webp",
      "assets/images/main-32.webp",
      "assets/images/main-33.webp",
      "assets/images/main-27.webp",
      "assets/images/main-28.webp",
      "assets/images/main-30.webp"
    ],
    pdf: "assets/pdf/main.pdf",
    page: 31,
    description: {
      id: "Layout publikasi dan infografis untuk menyampaikan informasi secara terstruktur.",
      en: "Publication layouts and infographics that communicate information clearly."
    },
    status: {
      id: "Layout & infografis",
      en: "Layout & infographics"
    }
  }
];

/* =========================================
   TEKS INDONESIA DAN INGGRIS
========================================= */

const copy = {
  id: {
    skip: "Langsung ke karya",
    work: "Karya",
    about: "Tentang",
    contact: "Kontak",
    intro: "Mengubah ide menjadi identitas, visual, dan cerita yang bermakna bagi brand Anda.",
    explore: "Jelajahi karya",
    years: "tahun pengalaman desain",
    featured: "PILIHAN KARYA / VISUAL EVENT",
    selection: "01 / PORTOFOLIO",
    selected: "Karya pilihan<span>.</span>",
    workIntro: "Temukan pendekatan visual yang sesuai dengan kebutuhan proyek Anda.",
    search: "Cari karya atau kategori…",
    empty: "Karya tidak ditemukan. Coba kata kunci atau kategori lainnya.",
    reset: "Tampilkan semua karya",
    motionTitle: "Visual yang<br>bergerak. Cerita<br>yang terasa.",
    motionDesc: "Motion graphic video lirik Iwan Fals ft. Ubay Nidji, dalam portofolio Musica Studios.",
    watch: "Tonton di YouTube",
    aboutLabel: "03 / TENTANG SAYA",
    aboutTitle: "Ide yang jelas.<br>Eksekusi yang<br>berkarakter.",
    cv: "Lihat CV ↗",
    bio: "Saya Adri Prasetyo, Graphic & Motion Designer berbasis di Bandung dengan pengalaman lebih dari 10 tahun. Saya menggabungkan desain grafis, ilustrasi, dan gerak untuk membantu brand menyampaikan pesan dengan jelas dan konsisten.",
    approach: "Setiap proyek dimulai dari memahami tujuan, audiens, dan konteks penggunaannya. Dari identitas brand hingga visual event, saya mengembangkan desain yang relevan dan siap diaplikasikan di berbagai media.",
    musicRole: "Motion graphic & animasi video lirik",
    contactLabel: "04 / MULAI PERCAKAPAN",
    contactTitle: "Punya ide?<br>Mari wujudkan<span> bersama.</span>",
    contactCopy: "Ceritakan kebutuhan, ruang lingkup, dan jadwal proyek Anda. Mari temukan pendekatan visual yang tepat.",
    chat: "Diskusikan via WhatsApp",
    top: "Kembali ke atas ↑",
    pdf: "Lihat PDF lengkap ↗",
    similar: "Diskusikan proyek serupa ↗"
  },

  en: {
    skip: "Skip to work",
    work: "Work",
    about: "About",
    contact: "Contact",
    intro: "Turning ideas into identities, visuals, and stories that bring meaning to your brand.",
    explore: "Explore my work",
    years: "years of design experience",
    featured: "FEATURED WORK / EVENT VISUALS",
    selection: "01 / PORTFOLIO",
    selected: "Selected work<span>.</span>",
    workIntro: "Find the visual approach that fits your project.",
    search: "Search projects or categories…",
    empty: "No projects found. Try another keyword or category.",
    reset: "Show all projects",
    motionTitle: "Visuals in motion.<br>Stories that<br>connect.",
    motionDesc: "Lyric video motion graphics for Iwan Fals ft. Ubay Nidji, featured in the Musica Studios portfolio.",
    watch: "Watch on YouTube",
    aboutLabel: "03 / ABOUT ME",
    aboutTitle: "Clear ideas.<br>Distinctive<br>execution.",
    cv: "View CV ↗",
    bio: "I’m Adri Prasetyo, a Graphic & Motion Designer based in Bandung with over 10 years of experience. I combine graphic design, illustration, and motion to help brands communicate clearly and consistently.",
    approach: "Every project starts with understanding its purpose, audience, and context. From brand identities to event visuals, I develop relevant designs that work across media.",
    musicRole: "Motion graphics & lyric video animation",
    contactLabel: "04 / START A CONVERSATION",
    contactTitle: "Have an idea?<br>Let’s bring it<span> to life.</span>",
    contactCopy: "Tell me about your project, scope, and timeline. Let’s find the right visual approach.",
    chat: "Let’s talk on WhatsApp",
    top: "Back to top ↑",
    pdf: "View full PDF ↗",
    similar: "Discuss a similar project ↗"
  }
};

const categories = {
  all: ["Semua", "All"],
  branding: ["Branding", "Branding"],
  illustration: ["Ilustrasi", "Illustration"],
  typography: ["Tipografi", "Typography"],
  motion: ["Motion", "Motion"],
  social: ["Media sosial", "Social media"],
  packaging: ["Kemasan", "Packaging"],
  event: ["Event", "Events"],
  editorial: ["Editorial", "Editorial"]
};

/* =========================================
   STATUS HALAMAN
========================================= */

let language = "id";

try {
  language = localStorage.getItem("adri-language") === "en" ? "en" : "id";
} catch {
  // Website tetap berjalan jika penyimpanan browser dibatasi.
}

let category = "all";
let activeProject = null;
let previousFocus = null;

const $ = selector => document.querySelector(selector);
const grid = $("#project-grid");
const dialog = $("#project-dialog");

function label(categoryKey) {
  return categories[categoryKey][language === "id" ? 0 : 1];
}

/* =========================================
   WHATSAPP
========================================= */

function contactURL(title = "") {
  const message = language === "id"
    ? `Halo Adri, saya ingin berdiskusi tentang ${
        title
          ? "proyek serupa " + title
          : "kebutuhan desain untuk proyek saya"
      }.`
    : `Hi Adri, I’d like to discuss ${
        title
          ? "a project similar to " + title
          : "design for my project"
      }.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =========================================
   FILTER KATEGORI
========================================= */

function renderFilters() {
  const host = $("#filters");
  host.replaceChildren();

  Object.keys(categories).forEach(categoryKey => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label(categoryKey);
    button.setAttribute(
      "aria-pressed",
      String(categoryKey === category)
    );

    button.addEventListener("click", () => {
      category = categoryKey;
      renderFilters();
      renderProjects();
    });

    host.append(button);
  });
}

/* =========================================
   KARTU DAN PENCARIAN PORTOFOLIO
========================================= */

function renderProjects() {
  const query = $("#search").value.trim().toLowerCase();

  const visible = window.PROJECTS.filter(project => {
    const matchesCategory =
      category === "all" || project.categories.includes(category);

    const searchableText = [
      project.title,
      ...project.categories.flatMap(key => categories[key]),
      project.description.id,
      project.description.en
    ].join(" ").toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  grid.replaceChildren();

  visible.forEach((project, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "project-card reveal";
    button.style.animationDelay = `${Math.min(index, 5) * 45}ms`;
    button.setAttribute(
      "aria-label",
      (language === "id" ? "Lihat proyek: " : "View project: ") +
      project.title
    );

    const frame = document.createElement("div");
    frame.className = "card-image";

    const image = document.createElement("img");
    image.src = project.images[0];
    image.alt = project.title;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("error", () => {
      image.hidden = true;
      frame.classList.add("image-unavailable");
      frame.dataset.message = language === "id"
        ? "Pratinjau tidak tersedia — buka detail"
        : "Preview unavailable — open details";
    }, { once: true });

    frame.append(image);

    const arrow = document.createElement("span");
    arrow.className = "card-arrow";
    arrow.textContent = "↗";
    arrow.setAttribute("aria-hidden", "true");
    frame.append(arrow);

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const categoryText = document.createElement("span");
    categoryText.textContent = project.categories.map(label).join(" / ");

    const status = document.createElement("span");
    status.textContent = project.status[language];

    meta.append(categoryText, status);

    const title = document.createElement("h3");
    title.textContent = project.title;

    button.append(frame, meta, title);
    button.addEventListener("click", () => openProject(project));

    grid.append(button);
  });

  $("#empty").hidden = visible.length > 0;

  $("#result-count").textContent = language === "id"
    ? `${visible.length} koleksi karya ditampilkan`
    : `${visible.length} project collections shown`;
}

/* =========================================
   GALERI DETAIL PROYEK
========================================= */

function fillDialog(project) {
  $("#dialog-title").textContent = project.title;
  $("#dialog-status").textContent = project.status[language];
  $("#dialog-description").textContent = project.description[language];

  $("#project-pdf").href = `${project.pdf}#page=${project.page}`;

  dialog.querySelector(".whatsapp").href = contactURL(project.title);

  const gallery = $("#gallery");
  gallery.replaceChildren();

  project.images.forEach((source, index) => {
    const image = document.createElement("img");

    image.src = source;
    image.alt = `${project.title} — visual ${index + 1}`;
    image.loading = index ? "lazy" : "eager";

    gallery.append(image);
  });

  if (project.categories.includes("motion")) {
    const link = document.createElement("a");

    link.className = "button lime";
    link.href = MOTION_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = copy[language].watch + " ↗";

    gallery.prepend(link);
  }
}

function openProject(project) {
  previousFocus = document.activeElement;
  activeProject = project;

  fillDialog(project);
  dialog.showModal();

  document.body.style.overflow = "hidden";
  dialog.scrollTop = 0;
}

$("#close-dialog").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
  activeProject = null;

  if (previousFocus?.isConnected) {
    previousFocus.focus();
  }
});

/* Klik di luar kotak galeri untuk menutup. */
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;

  const bounds = dialog.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) {
    dialog.close();
  }
});

/* =========================================
   PERGANTIAN BAHASA
========================================= */

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.innerHTML = copy[lang][element.dataset.i18n];
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === lang)
    );
  });

  $("#search").placeholder = copy[lang].search;
  $("#search").setAttribute("aria-label", copy[lang].search);

  $("#filters").setAttribute(
    "aria-label",
    lang === "id" ? "Kategori portofolio" : "Portfolio categories"
  );

  $("nav").setAttribute(
    "aria-label",
    lang === "id" ? "Navigasi utama" : "Main navigation"
  );

  $(".motion-image img").alt = lang === "id"
    ? "Cuplikan desain motion video lirik Iwan Fals ft. Ubay Nidji"
    : "Lyric video motion design for Iwan Fals ft. Ubay Nidji";

  $("#close-dialog").setAttribute(
    "aria-label",
    lang === "id" ? "Tutup detail proyek" : "Close project details"
  );

  document.querySelectorAll(".whatsapp").forEach(link => {
    link.href = contactURL();
  });

  renderFilters();
  renderProjects();

  if (activeProject) {
    fillDialog(activeProject);
  }

  try {
    localStorage.setItem("adri-language", lang);
  } catch {
    // Bahasa tetap bisa diganti tanpa localStorage.
  }
}

/* =========================================
   EVENT DAN INISIALISASI
========================================= */

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

$("#search").addEventListener("input", renderProjects);

$("#reset").addEventListener("click", () => {
  category = "all";
  $("#search").value = "";

  renderFilters();
  renderProjects();
});

$("#year").textContent = new Date().getFullYear();

setLanguage(language);
