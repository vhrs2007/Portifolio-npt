const params = new URLSearchParams(location.search);
const p = PROJETOS.find((x) => x.id === params.get("id"));
const de = params.get("de") || (p && grupos(p)[0]);
const voltarHref = `index.html${de ? `#${encodeURIComponent(de)}` : ""}`;
const raiz = document.getElementById("projeto");

function secao(titulo, html) {
  return html ? `<section class="bloco"><h3>${titulo}</h3>${html}</section>` : "";
}
function info(rotulo, valor) {
  return valor && String(valor).trim() ? `<div><dt>${rotulo}</dt><dd>${esc(valor)}</dd></div>` : "";
}

if (!p) {
  raiz.innerHTML = `
    <div class="conteudo">
      <a class="voltar" href="index.html">← Voltar ao portfólio</a>
      <h1 class="nao-encontrado">Projeto não encontrado.</h1>
    </div>`;
} else {
  document.title = `${p.name} | NPT`;

  const tags = [
    p.status && `<span class="tag status ${p.status}">${STATUS[p.status] || p.status}</span>`,
    ...(p.technologies || []).map((t) => `<span class="tag">${esc(t)}</span>`),
  ].filter(Boolean).join("");

  const progresso =
    typeof p.progress === "number"
      ? `<div class="progresso"><div class="barra"><span style="width:${p.progress}%"></span></div><b>${p.progress}%</b></div>`
      : "";

  const infos = [
    info("Área", p.area),
    info("Solicitante", p.requester),
    info("Contato", p.requesterEmail),
    info(p.status === "concluido" ? "Em uso desde" : "Início", data(p.startDate)),
    info("Última atualização", data(p.lastUpdate)),
  ].join("");

  const destinatarios = (p.recipients || [])
    .filter((r) => r.nomes && r.nomes.length)
    .map((r) => `<div class="destino"><strong>${esc(r.grupo)}</strong><span>${r.nomes.map(esc).join(", ")}</span></div>`)
    .join("");

  raiz.innerHTML = `
    <section class="capa-projeto" ${p.imageUrl ? `style="--foto:url('${esc(p.imageUrl)}')"` : ""}>
      <div class="capa-texto">
        <a class="voltar" href="${voltarHref}">← Voltar</a>
        <span class="cat">${esc(nomesGrupos(p))}</span>
        <h1>${esc(p.name)}</h1>
        <div class="meta">${tags}</div>
        ${progresso}
      </div>
    </section>

    <div class="conteudo">
      <div class="colunas">
        <article>
          ${secao("Sobre o projeto", texto(p.description))}
          ${secao("Benefícios", lista(p.benefits))}
          ${secao("Como foi desenvolvido", texto(p.howItWasDeveloped))}
          ${secao("Riscos", lista(p.risks))}
          ${secao("Melhorias futuras", lista(p.improvements))}
          ${secao(p.recipientsTitle || "Destinatários", destinatarios && `<div class="destinos">${destinatarios}</div>`)}
        </article>
        <aside class="lateral">
          ${infos ? `<dl class="infos">${infos}</dl>` : ""}
          ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">Acessar projeto ↗</a>` : ""}
        </aside>
      </div>
    </div>`;
}
