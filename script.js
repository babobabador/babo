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

/* ---------- 2. CATÁLOGO — organizado por categoria ----------
   Para adicionar/editar produtos:
   1. Encontre a categoria certa abaixo (ex: toalhaBanho, babador).
   2. Copie um item dentro de "items" e ajuste name, description e image.
   3. O "gridId" tem que ser igual ao id da div no index.html
      (ex: <div class="product-grid-babador" id="productGridBabador">).

   Para criar uma categoria nova:
   1. Adicione um novo bloco aqui, com um gridId novo (ex: "productGridNaninha").
   2. No index.html, adicione o <h2> do título e a <div id="productGridNaninha">
      dentro da seção #produtos, seguindo o mesmo padrão das outras.

   Ao clicar em "Peça pelo WhatsApp", abre uma janela pedindo o nome
   para o bordado e a fonte (Josephsophia ou Bertilda).
------------------------------------------------------------- */
const PRODUCTS = {

  toalhaBanhoTradicional: {
    gridId: "productGridTbanhotd",
    items: [
      {
        name: "Toalha de Banho Tradicional",
        description: "Toalha de Banho Tradicional no Tema que você escolher personalizada com o Nome. Medidas: 70cm x 1,40m.",
        image: "./img/produtos/toalha-banho/t-banho.jpg",
      },
    ],
  },

  toalhaBanhoCapuz: {
    gridId: "productGridTbanhoCapuz",
    items: [
      {
        name: "Toalha de Banho Capuz (Toda Forrada)",
        description: "Toalha de Banho Com Capuz Toda Forrada, no Tema que você escolher personalizada com o Nome. Medidas: x cm x W m.",
        image: "./img/produtos/toalha-capuz/td-forrado.jpg",
      },
      {
        name: "Toalha de Banho Capuz (Com Forro Somente no Capuz)",
        description: "Toalha de Banho Com Capuz Forrada Somente no Capuz, no Tema que você escolher personalizada com o Nome. Medidas: x cm x W m.",
        image: "./img/produtos/toalha-capuz/cap-forrado.jpg",
      },
    ],
  },

  cobertor: {
    gridId: "productGridCobertor",
    items: [
      {
        name: "Cobertor",
        description: "Cobertor no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/cobertor/cobertor.jpg",
      },
    ],
  },

  naninha: {
    gridId: "productGridNaninha",
    items: [
      {
        name: "Naninha Girafinha (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Girafinha (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Leãozinho (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Leãozinho (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Ursinha (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Ursinha (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Mtoo Coelinha (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Mtoo Bailarina 2 Coques (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Mtoo Bailarina 1 Coque (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Ovelinha (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Ovelinha (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Cachorrinho (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Cachorrinho (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Anjinha (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Anjinha (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Gatinha (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Gatinha (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Elefantinho (Menino)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
      {
        name: "Naninha Elefantinho (Menina)",
        description: "Naninha no Tema que você escolher personalizada com o Nome. Medidas: 90cm x 1,10m(aproximadamente)",
        image: "./img/produtos/toalha-banho.jpg",
      },
    ],
  },

};

/* ---------- Monta o link do WhatsApp ---------- */
function buildWhatsAppLink(message){
  const text = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

/* ---------- Monta o HTML de um cartão de produto ---------- */
function buildProductCard(product, categoryKey, index){
  const thumb = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : "";
  return `
    <article class="product-card">
      <div class="product-thumb">${thumb}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <button
        type="button"
        class="btn btn-whats btn-small js-abrir-pedido"
        data-categoria="${categoryKey}"
        data-indice="${index}"
      >
        Peça pelo WhatsApp
      </button>
    </article>
  `;
}

/* ---------- Renderiza os cartões de cada categoria na grid certa ---------- */
function renderProducts(){
  Object.entries(PRODUCTS).forEach(([categoryKey, category]) => {
    const grid = document.getElementById(category.gridId);
    if (!grid) return;
    grid.innerHTML = category.items
      .map((product, index) => buildProductCard(product, categoryKey, index))
      .join("");
  });
}

/* ---------- Liga os botões genéricos de WhatsApp (header, hero, rodapé) ---------- */
function wireGenericWhatsAppButtons(){
  const link = buildWhatsAppLink(CONFIG.defaultMessage);
  document.querySelectorAll(".js-whats-cta, #headerWhatsBtn").forEach((el) => {
    el.href = link;
  });
}

/* =========================================================
   MODAL DE PEDIDO — pede nome (e matriz, se houver) antes
   de montar a mensagem e abrir o WhatsApp.
   ========================================================= */
function wirePedidoModal(){
  const modal = document.getElementById("bbPedidoModal");
  if (!modal) return;

  const titulo = document.getElementById("bbPedidoTitulo");
  const inputNome = document.getElementById("bbPedidoNome");
  const preview = document.getElementById("bbPedidoPreviewTexto");
  const opcoesFonte = modal.querySelectorAll(".bb-fonte-opcao");
  const btnConfirmar = document.getElementById("bbPedidoConfirmar");

  let produtoAtual = null;
  let fonteAtual = "'BB Josephsophia'";
  let fonteNomeAtual = "Josephsophia";

  function atualizarPreview(){
    const texto = inputNome.value.trim();
    if (texto === ""){
      preview.textContent = "O nome aparece aqui";
      preview.classList.add("bb-preview-placeholder");
    } else {
      preview.textContent = texto;
      preview.classList.remove("bb-preview-placeholder");
    }
    preview.style.fontFamily = fonteAtual;
  }

  function abrirModal(product){
    produtoAtual = product;
    fonteAtual = "'BB Josephsophia'";
    fonteNomeAtual = "Josephsophia";

    titulo.textContent = product.name;
    inputNome.value = "";

    opcoesFonte.forEach((el) => el.classList.remove("ativa"));
    opcoesFonte[0]?.classList.add("ativa");

    atualizarPreview();

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    inputNome.focus();
  }

  function fecharModal(){
    modal.hidden = true;
    document.body.style.overflow = "";
    produtoAtual = null;
  }

  // Abre o modal ao clicar em qualquer botão "Peça pelo WhatsApp" de um produto
  document.addEventListener("click", (event) => {
    const botao = event.target.closest(".js-abrir-pedido");
    if (!botao) return;
    const { categoria, indice } = botao.dataset;
    const product = PRODUCTS[categoria]?.items[Number(indice)];
    if (product) abrirModal(product);
  });

  // Atualiza a prévia conforme o nome é digitado
  inputNome.addEventListener("input", atualizarPreview);

  // Escolher a fonte do bordado
  opcoesFonte.forEach((opcao) => {
    opcao.addEventListener("click", () => {
      opcoesFonte.forEach((el) => el.classList.remove("ativa"));
      opcao.classList.add("ativa");
      fonteAtual = opcao.getAttribute("data-fonte");
      fonteNomeAtual = opcao.querySelector(".bb-fonte-nome")?.textContent.trim() || "";
      atualizarPreview();
    });
  });

  // Fechar (X ou clique fora)
  modal.querySelectorAll("[data-bb-close]").forEach((el) => {
    el.addEventListener("click", fecharModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) fecharModal();
  });

  // Confirmar pedido — monta a mensagem e abre o WhatsApp
  btnConfirmar.addEventListener("click", () => {
    if (!produtoAtual) return;

    const nome = inputNome.value.trim();
    let mensagem = `Oi! Quero pedir o(a) "${produtoAtual.name}"`;
    if (fonteNomeAtual) mensagem += ` na fonte "${fonteNomeAtual}"`;
    if (nome) mensagem += ` com o nome "${nome}"`;
    mensagem += ".";

    window.open(buildWhatsAppLink(mensagem), "_blank", "noopener");
    fecharModal();
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
  wirePedidoModal();
  wireMobileNav();
  wireScrollReveal();
  setFooterYear();
});
