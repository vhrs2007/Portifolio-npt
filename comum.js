// Funções usadas pela página inicial e pela página do projeto

const STATUS = { em_andamento: "Em andamento", concluido: "Concluído", pausado: "Pausado", standby: "Stand-by" };
const nomeCategoria = Object.fromEntries(CATEGORIAS.map((c) => [c.id, c.nome]));

// Um projeto pode estar em uma categoria ("rpa") ou em várias (["monitoramento", "rpa"])
function grupos(p) {
  return [].concat(p.grupo || []);
}
function nomesGrupos(p) {
  return grupos(p).map((g) => nomeCategoria[g] || g).join(" · ");
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

// Suporta **negrito**, `código` e parágrafos separados por linha em branco
function inline(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/gs, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}
function texto(s) {
  if (!s) return "";
  return String(s)
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((p) => `<p>${inline(p.trim()).replace(/\n/g, "<br>")}</p>`)
    .join("");
}
function lista(itens) {
  const validos = (itens || []).filter((i) => i && i.trim());
  if (!validos.length) return "";
  return `<ul>${validos.map((i) => `<li>${inline(i).replace(/\n/g, "<br>")}</li>`).join("")}</ul>`;
}
function resumo(desc) {
  const limpo = String(desc || "").replace(/^[-•\s]+/, "").replace(/\s+/g, " ").trim();
  return limpo.length > 110 ? limpo.slice(0, 107).trimEnd() + "…" : limpo;
}
function data(iso) {
  if (!iso) return "";
  const [a, m, d] = iso.split("-");
  return `${d}/${m}/${a}`;
}
