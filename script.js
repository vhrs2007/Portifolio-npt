const listaCategorias = document.getElementById("lista-categorias");
const painel = document.getElementById("painel");
const painelTitulo = document.getElementById("painel-titulo");
const painelDesc = document.getElementById("painel-desc");
const painelProjetos = document.getElementById("painel-projetos");

let categoriaAtiva = null;

const GRUPOS = [
  ...CATEGORIAS.map((c) => ({ ...c, projetos: PROJETOS.filter((p) => grupos(p).includes(c.id)) })),
  {
    id: "todos",
    nome: "Todos os Projetos",
    descricao: "Todos os projetos desenvolvidos pelo time",
    projetos: PROJETOS,
    mostrarRotulo: true,
  },
];

GRUPOS.forEach((grupo) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.className = "categoria";
  btn.dataset.id = grupo.id;
  btn.innerHTML = `<span>${esc(grupo.nome)}</span><span class="qtd">${grupo.projetos.length}</span>`;
  btn.addEventListener("click", () => alternarCategoria(grupo, btn));
  li.appendChild(btn);
  listaCategorias.appendChild(li);
});

function alternarCategoria(grupo, btn) {
  if (categoriaAtiva === grupo.id) return fecharPainel();

  document.querySelectorAll(".categoria").forEach((b) => b.classList.remove("ativa"));
  btn.classList.add("ativa");
  categoriaAtiva = grupo.id;
  history.replaceState(null, "", `#${grupo.id}`);

  painelTitulo.textContent = grupo.nome;
  painelDesc.textContent = grupo.descricao || "";
  painelProjetos.innerHTML = "";

  if (!grupo.projetos.length) {
    painelProjetos.innerHTML = `<li class="vazio">Nenhum projeto cadastrado ainda.</li>`;
  }

  grupo.projetos.forEach((proj) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "projeto";
    a.href = `projeto.html?id=${encodeURIComponent(proj.id)}&de=${grupo.id}`;
    const rotulo = grupo.mostrarRotulo ? `<em class="rotulo">${esc(nomesGrupos(proj))}</em>` : "";
    const status = STATUS[proj.status] || "";
    a.innerHTML = `
      ${rotulo}
      <strong>${esc(proj.name)}</strong>
      <span>${esc(resumo(proj.description))}</span>
      ${status ? `<i class="mini-status ${proj.status}">${status}</i>` : ""}`;
    li.appendChild(a);
    painelProjetos.appendChild(li);
  });

  // reinicia a animação ao trocar de categoria
  painel.classList.remove("aberto");
  void painel.offsetWidth;
  painel.classList.add("aberto");
  painel.setAttribute("aria-hidden", "false");
}

function fecharPainel() {
  painel.classList.remove("aberto");
  painel.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".categoria").forEach((b) => b.classList.remove("ativa"));
  categoriaAtiva = null;
  history.replaceState(null, "", location.pathname);
}

document.getElementById("fechar-painel").addEventListener("click", fecharPainel);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharPainel(); });

// Ao voltar de um projeto (index.html#rpa), reabre a categoria
const inicial = GRUPOS.find((g) => g.id === location.hash.slice(1));
if (inicial) alternarCategoria(inicial, document.querySelector(`.categoria[data-id="${inicial.id}"]`));
