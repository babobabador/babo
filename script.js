/* =========================================================
   BABÔ BABADOR — configuração e interações
   ========================================================= */

/* ---------- 1. CONFIGURAÇÃO — edite aqui ---------- */
const CONFIG = {
  // Número de WhatsApp com código do país e DDD, só números.
  whatsappNumber: "5524998579443", // vindo da bio do Instagram @babobabador

  // Mensagem padrão enviada quando não há produto específico
  defaultMessage: "Oi! Vim pelo site e quero saber mais sobre os produtos da Babô Babador",
};

/* ---------- 2. CATÁLOGO — edite/duplique os itens ---------- */
const PRODUCTS = [
  {
    name: "Toalha Capuz Safári",
    description: "Toalha de banho com capuz, bordada com leãozinho, girafa e elefante.",
    image: "img/safari_verde.jpg",
  },
  {
    name: "Toalha de Capuz Ovelhinha",
    description: "Capuz rosa bordado com ovelhinha — pode levar o nome do bebê.",
    image: "img/ovelhinha_rosa.jpg",
  },
  {
    name: "Kit Bailarina",
    description: "Toalha, capuz e acessórios combinando no tema bailarina.",
    image: "img/bailarina_kit.jpg",
  },
  {
    name: "Toalha de Banho Capivara",
    description: "Toalha de Banho Tradicional no Tema Capivara personalizada com o Nome. Medidas: 70cm x 1,40m.",
    image: "img/toalha-banho.jpg",
  },
  {
    name: "Kit Personalizado com Nome",
    description: "Toalha, touca e naninha combinando, todo bordado com o nome do bebê.",
    image: "img/kit_benicio.jpg",
  },
  {
    name: "Naninha Elefante Masculina",
    description: "Elefante companheiro de soninho macio.",
    image: "img/naninha_elefante.jpg",
  },
  {
    name: "Caixinha Temática",
    description: "Kit presente sazonal (ex.: Páscoa) com naninha e embalagem especial.",
    image: "img/caixinha_pascoa.jpg",
  },
];

/* ---------- Monta o link do WhatsApp ---------- */
function buildWhatsAppLink(message){
  const text = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

/* ---------- Renderiza os cartões de produto ---------- */
function renderProducts(){
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product) => {
    const message = `Oi! Tenho interesse no "${product.name}" que vi no site. Ainda tem disponível?`;
    const link = buildWhatsAppLink(message);
    const thumb = product.image
      ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
      : BIB_ICON;
    return `
      <article class="product-card">
        <div class="product-thumb">${thumb}</div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a class="btn btn-whats btn-small" href="${link}" target="_blank" rel="noopener">
          Peça pelo WhatsApp
        </a>
      </article>
    `;
  }).join("");
}

/* ---------- Liga os botões genéricos de WhatsApp (header, hero, rodapé) ---------- */
function wireGenericWhatsAppButtons(){
  const link = buildWhatsAppLink(CONFIG.defaultMessage);
  document.querySelectorAll(".js-whats-cta, #headerWhatsBtn").forEach((el) => {
    el.href = link;
  });
}

/* ---------- Menu mobile ---------- */
function wireMobileNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Revela os cartões ao rolar a página ---------- */
function wireScrollReveal(){
  const cards = document.querySelectorAll(".product-card");
  if (!cards.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced){
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));
}

/* ---------- Ano no rodapé ---------- */
function setFooterYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  wireGenericWhatsAppButtons();
  wireMobileNav();
  wireScrollReveal();
  setFooterYear();
});
