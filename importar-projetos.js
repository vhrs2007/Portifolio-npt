// Importa os projetos do martinelli-it-showcase para o data.js deste portfólio.
// Uso:  node importar-projetos.js  [caminho/opcional/para/projects.json]

const fs = require("fs");
const path = require("path");
const os = require("os");

const ORIGEM =
  process.argv.slice(2).find((a) => !a.startsWith("--")) ||
  path.join(
    os.homedir(),
    "OneDrive - MARTINELLI ADVOGADOS",
    "Documentos",
    "Portifólio NPT",
    "martinelli-it-showcase",
    "src",
    "data",
    "projects.json"
  );

// Qual categoria do nosso menu recebe cada categoria do sistema antigo.
// Categoria não listada aqui cai em "automacoes".
const MAPA = {
  RPA: "rpa",
  Monitoramento: "monitoramento",
  chatbot: "automacoes",
  workflow: "automacoes",
  documentos: "automacoes",
  integracao: "automacoes",
  data: "automacoes",
};

const CATEGORIAS = [
  { id: "rpa", nome: "RPA", descricao: "Robôs que executam processos no lugar do time" },
  { id: "monitoramento", nome: "Monitoramento", descricao: "Acompanhamento automático de portais, normas e decisões" },
  { id: "automacoes", nome: "Automações", descricao: "Chatbots, integrações e ferramentas de apoio" },
];

// Proteção: depois que data.js virou a fonte oficial, só sobrescreve com --forcar
const destino = path.join(__dirname, "data.js");
if (
  fs.existsSync(destino) &&
  fs.readFileSync(destino, "utf8").includes("fonte oficial") &&
  !process.argv.includes("--forcar")
) {
  console.error("data.js já é a fonte oficial e tem revisões. Importação cancelada.");
  console.error("Para sobrescrever mesmo assim (perde as revisões): node importar-projetos.js --forcar");
  process.exit(1);
}

const projetos = JSON.parse(fs.readFileSync(ORIGEM, "utf8")).map((p) => ({
  ...p,
  grupo: MAPA[p.category] || "automacoes",
}));

const saida =
  `// Gerado por importar-projetos.js em ${new Date().toLocaleString("pt-BR")}\n` +
  `// Origem: ${ORIGEM}\n` +
  `// Para atualizar, rode de novo:  node importar-projetos.js\n\n` +
  `const CATEGORIAS = ${JSON.stringify(CATEGORIAS, null, 2)};\n\n` +
  `const PROJETOS = ${JSON.stringify(projetos, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, "data.js"), saida, "utf8");

const cont = {};
projetos.forEach((p) => (cont[p.grupo] = (cont[p.grupo] || 0) + 1));
console.log(`${projetos.length} projetos importados:`, cont);
