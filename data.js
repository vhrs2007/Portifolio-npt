// DADOS DO PORTFÓLIO: este arquivo é a fonte oficial dos projetos.
// Importado originalmente do martinelli-it-showcase em 24/09/2026.
// ATENÇÃO: NÃO rode mais importar-projetos.js, porque ele sobrescreve este arquivo.

const CATEGORIAS = [
  {
    "id": "rpa",
    "nome": "RPA",
    "descricao": "Robôs que executam processos no lugar do time"
  },
  {
    "id": "monitoramento",
    "nome": "Monitoramento",
    "descricao": "Acompanhamento automático de portais, normas e decisões"
  },
  {
    "id": "automacoes",
    "nome": "Automações",
    "descricao": "Chatbots, integrações e ferramentas de apoio"
  }
];

const PROJETOS = [
  {
    "id": "atualizacao-tax-tributario",
    "name": "Atualização TAX Tributário (CARF + Normas Diárias)",
    "description": "Acompanhar as publicações tributárias exige consultar, todos os dias, o site do CARF (acórdãos julgados) e o da Receita Federal (normas do dia). É um trabalho manual e repetitivo, e pular um dia pode significar perder uma decisão relevante sem saber que ela existe.\n\nA automação faz as duas consultas e entrega o resultado por e-mail, já organizado: cada caso vem com ementa, decisão e o inteiro teor em PDF. O envio respeita o perfil de cada pessoa. Quem acompanha só normas recebe só normas, e quem acompanha o CARF recebe os acórdãos.",
    "benefits": [
      "Elimina a consulta manual diária aos portais do CARF e da Receita Federal.",
      "Tudo o que foi publicado chega organizado, sem depender de alguém lembrar de olhar.",
      "Cada pessoa recebe só o que acompanha, o que preserva a atenção para o que importa.",
      "Ementa, decisão e inteiro teor chegam juntos, então a triagem acontece no próprio e-mail.",
      "Dá conta de dias de publicação em massa: em 10/09, foram 1.660 acórdãos processados de uma vez.",
      "Cada envio fica registrado, o que permite comprovar o que foi enviado e quando."
    ],
    "risks": [
      "**[ALTO] Mudanças nos sites oficiais.** Se o CARF ou a Receita mudarem a página ou ficarem instáveis, a coleta pode falhar. Os registros de cada execução permitem identificar e corrigir rápido, mas essa manutenção é periódica e faz parte do custo do projeto.",
      "**[MÉDIO] Execução depende de acionamento manual.** Hoje o sistema roda sob demanda em uma máquina local. Se ninguém rodar, o dia fica sem envio.",
      "**[BAIXO] Listas de destinatários mantidas em arquivo.** Incluir ou tirar alguém exige ajustar a configuração, porque não há uma tela para isso."
    ],
    "improvements": [
      "Rodar em nuvem, de forma automática e independente da máquina local.",
      "Permitir filtros personalizados por pessoa (por tema ou tributo), além dos perfis atuais.",
      "Criar uma forma simples de gerenciar os destinatários sem mexer em código."
    ],
    "technologies": [
      "Python",
      "BeautifulSoup",
      "Playwright",
      "Selenium",
      "Pandas",
      "Gmail (SMTP)"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    "category": "Monitoramento",
    "requester": "Vinicius Generoso, Ravi Nolasco",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "Contencioso Administrativo Brasília / NPT",
    "progress": 95,
    "howItWasDeveloped": "O sistema respeita o ritmo de cada fonte. O CARF publica os acórdãos com atraso, então a coleta busca o dia útil anterior. As normas são buscadas no próprio dia. Assim nada fica de fora e nada se repete.\n\nAntes de enviar, o sistema confere se aquele conteúdo já foi mandado, para não duplicar. Quando o volume é grande, o envio é dividido em várias partes, porque um único e-mail com todos os anexos seria recusado pelo servidor. Filtros automáticos separam o que interessa ao time, e as falhas são registradas para correção rápida.",
    "lastUpdate": "2026-09-24",
    "grupo": "monitoramento",
    "recipients": [
      {
        "grupo": "Normas",
        "nomes": [
          "Eduardo Baladão",
          "Petrick Varnier",
          "Jacob Neto",
          "Larissa Salgado",
          "Victor Silva"
        ]
      },
      {
        "grupo": "CARF",
        "nomes": [
          "Vinicius Generoso",
          "Ravi Nolasco",
          "Myllena Araújo",
          "Victor Silva"
        ]
      }
    ],
    "startDate": "2026-01-14"
  },
  {
    "id": "pgfn-dispensa",
    "name": "Monitoramento PGFN (Lista de Dispensa de Contestar e Recorrer)",
    "description": "A PGFN publica e altera, sem avisar ninguém, a Lista de Dispensa de Contestar e Recorrer: o documento que define em que teses a Procuradoria deixou de recorrer. Uma inclusão nessa lista muda a estratégia de um caso, e descobrir isso com semanas de atraso custa prazo. Acompanhar à mão significaria reler todos os 51 tópicos, com seus sub-itens, para achar a linha que mudou.\n\nO sistema faz essa comparação diariamente e avisa por e-mail apenas o que mudou, com o item ou sub-item novo separado do resto da página. Está em produção desde 17/12/2025, com 401 verificações acumuladas até 24/09/2026.",
    "benefits": [
      "Acaba com a releitura manual diária dos 51 tópicos da lista da PGFN.",
      "Entrega o item exato que entrou ou mudou, com resumo, precedentes, referência e datas, e não um simples \"a página mudou\". Quem lê o e-mail já sabe se o caso dele foi afetado.",
      "Guarda o histórico de todas as verificações desde 17/12/2025, o que permite reconstruir quando uma tese entrou ou saiu da lista.",
      "Arquiva os cerca de 265 PDFs referenciados pela lista e anexa ao e-mail o documento do item alterado.",
      "Quase não gera alarme falso: a comparação item a item ignora as mudanças cosméticas da página e os itens que só mudaram de posição."
    ],
    "risks": [
      "**[CRÍTICO] Envio automático de e-mail travado.** `BLOCK_EMAIL=true` está ativo de propósito: o sistema verifica, detecta e grava, mas a execução diária não avisa ninguém. Em 17/09/2026 o caminho de envio foi validado com um envio manual do relatório do dia (sub-item K do item 1.16) aos 11 destinatários. Por isso, quem recebeu pode achar que esteve coberto durante todo o bloqueio, o que não é verdade. Atenção ao destravar: a foto continua sendo gravada todos os dias, então as alterações do período bloqueado já entraram na base de comparação e **não serão reenviadas**. Se o histórico do período importar, ele precisa ser levantado à mão a partir do banco.",
      "**[ALTO] O ambiente de produção é uma máquina pessoal, sem alerta de falha.** Se a máquina do Victor estiver desligada, o dia não é verificado. Não há redundância, e hoje não há nenhum alerta de execução perdida: o aviso de \"estou vivo\" só existe no modo contínuo, que não está em uso.",
      "**[MÉDIO] Alteração dentro de PDF não é detectada.** A impressão digital de cada PDF é gravada, mas não é comparada com a do dia anterior. Se a PGFN trocar o conteúdo de um parecer sem mexer no texto da lista, ninguém é avisado.",
      "**[MÉDIO] Migração para VM descartada por ora.** Em 13/08/2026 o TI informou que a infraestrutura não comporta o RPA. Em 14/08 o motivo ficou claro: não é limitação técnica de hospedagem, é falta de garantia de execução diária sem acompanhamento. Sem data para retomar. Reabrir a conversa exige resolver \"quem garante que roda\", e não \"onde hospeda\".",
      "**[BAIXO] PDFs tornados privados pela PGFN.** Três documentos caem em tela de login e não têm cópia pública: `nota-sei-no-77-2018-4.pdf` (privado desde 29/07/2026), `parecer-sei-no-2814-2026-cojud.pdf` e `parecer-sei-no-1218-2026-redlit.pdf`. O 2814/2026 é o parecer citado no sub-item K. A detecção não é afetada, mas esses itens saem sem anexo. Não é defeito do robô.",
      "**[BAIXO] Sub-item novo sem data reconhecível é ignorado.** Foi uma decisão deliberada, para não notificar o que não dá para confirmar como relevante. Em compensação, uma inclusão real escrita fora dos padrões de data conhecidos passaria sem aviso.",
      "**[RESOLVIDO] Duas instâncias do modo contínuo.** Em 13/08/2026 havia dois processos ativos, o que gerou dois snapshots no mesmo dia em 29/07 e 31/07. Hoje a execução é feita pelo `scripts/run_once.py`, que encerra ao terminar. Uma execução manual no mesmo dia da agendada ainda gera uma segunda foto, como em 24/09/2026. Se o modo contínuo for religado, confira antes se não há outra instância."
    ],
    "improvements": [
      "Decidir sobre o destravamento do envio automático de e-mail. É a pendência que impede o sistema de entregar valor todos os dias.",
      "Comparar a impressão digital dos PDFs entre verificações, para detectar alterações dentro dos documentos.",
      "Criar um alerta de execução perdida que funcione com o Agendador de Tarefas, por exemplo consultando o status do painel.",
      "Mover o `data/snapshots.db` para fora do OneDrive, em disco local.",
      "Limpar os shims de compatibilidade (`cf_*.py`, `pr_*.py`), restos da consolidação de junho/2026 que hoje só reexportam os módulos de `src/`.",
      "Retomar a conversa de migração para VM com foco em garantia de execução, e não em hospedagem."
    ],
    "technologies": [
      "Python",
      "SQLite",
      "BeautifulSoup",
      "Flask",
      "SMTP",
      "Batch"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "category": "Monitoramento",
    "requester": "rafael.potter@martinelli.adv.br",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "ADM Brasília / ADM RS / NPT",
    "progress": 99,
    "startDate": "2025-12-17",
    "howItWasDeveloped": "Todo dia útil, o Agendador de Tarefas do Windows dispara uma execução única. O sistema baixa a página da lista da PGFN e a quebra em itens: os tópicos numerados e os sub-itens a), b), c). Compara esses itens com a última foto gravada num banco local e classifica o que mudou: item novo, sub-item novo ou item alterado. Item novo gera aviso, mesmo com data antiga, porque a PGFN publica retroativamente. Item apenas alterado só gera aviso se a data for recente. Itens que só mudaram de posição são descartados.\n\nO sistema também baixa cada PDF referenciado e guarda uma impressão digital de cada um. Os PDFs vão anexados ao e-mail, mas a detecção vem do texto da página: uma alteração feita só dentro de um PDF ainda não é detectada. Quando o link da página cai em tela de login, o sistema procura a cópia pública do mesmo documento e só a aceita se o texto do PDF citar o número e o ano certos.\n\nPor fim, monta o e-mail com os itens alterados, envia à equipe e grava a nova foto, que passa a ser a base da próxima comparação. Se um dia ficar sem execução, nada se perde: a comparação é sempre contra a última foto gravada.\n\nA comparação é feita item a item, e não pela página inteira, porque a página da PGFN muda por motivos irrelevantes, como um banner ou uma data de rodapé. Uma comparação grosseira geraria alarme falso quase todo dia.\n\nA classificação é feita por regra fixa. Existe um módulo de análise por IA no projeto, mas ele não está em uso.\n\nHá também um painel web local, somente leitura, para conferir a situação do serviço, o histórico de verificações e o que mudou em cada dia.",
    "lastUpdate": "2026-09-24",
    "grupo": "monitoramento"
  },
  {
    "id": "monitor-avisos-fiscais",
    "name": "Monitor de Avisos Fiscais (COMPROT + Push CARF)",
    "description": "Os avisos do COMPROT e do Push do CARF chegam por e-mail, um a um, sem relação com a base de processos do escritório. Alguém precisa abrir cada aviso, extrair o número do processo, procurar esse número entre os ~1.950 processos ativos e descobrir de quem é o caso. É trabalho de triagem puro, repetido toda semana.\n\nO robô lê os avisos, extrai o número do processo de cada um, cruza com a base do Espaider e envia **um** e-mail por rodada, com a lista das movimentações e a planilha da rodada em anexo — já com pasta, cliente e objeto. O que ele não conseguiu casar fica marcado como \"requer atenção\" num painel, para triagem humana.",
    "benefits": [
      "Elimina a triagem manual de casar cada aviso com um dos ~1.950 processos ativos da base.",
      "O resumo já chega com pasta, cliente e objeto — a equipe lê e encaminha, sem consultar o Espaider.",
      "Uma mensagem por rodada, não uma por aviso: a rodada de 08/09 teria sido 20 e-mails, e uma rodada de duas semanas chegaria a 74.",
      "A planilha da rodada vai em anexo, com funil no cabeçalho — é onde se filtra e distribui, enquanto o e-mail serve para saber o tamanho da rodada.",
      "Nenhuma movimentação é enviada duas vezes, mesmo que a mesma mensagem reapareça na janela de sobreposição ou exista em várias cópias na caixa lida.",
      "A base de processos se atualiza sozinha toda segunda, com validação — uma exportação errada do Espaider é recusada e não derruba a operação."
    ],
    "risks": [
      "**[MÉDIO] O e-mail semanal do Espaider ainda manda a configuração ANTIGA do Smart Report.** A base que vale desde 14/09 tem 140 colunas e 4.242 processos (ativos e encerrados); o anexo de segunda ainda vem com 10 colunas e ~1.950 processos. Em 21/09 a trava dos 50% recusou o relatório antigo sozinha — mas por uma margem de ~8%. Se a base oficial cair para perto de 3.900 processos, o relatório antigo passa na validação e entra em silêncio, levando junto as colunas Valor da Causa e Detalhamento.",
      "**[MÉDIO] Conferir antes consome a rodada.** O envio de conferência (`REDIRECT_ALL_TO` preenchido) desvia o resumo para um único endereço, mas marca os avisos como enviados do mesmo jeito. O envio oficial depois precisa ser remontado à mão; rodar de novo sai com \"fila vazia\" em silêncio — indistinguível de uma semana sem movimentação. E deixar a variável preenchida desvia a rodada seguinte inteira. O painel mostra em qual estado o robô está.",
      "**[MÉDIO] Sem agendamento.** A rodada é acionada à mão. `rodar.py` já é o ponto de entrada pronto para ser pendurado no Agendador de Tarefas do Windows — falta só fazê-lo.",
      "**[MÉDIO] O corte da janela semanal é manual.** Como o código não tem regra de data, o que ficou pendente de semanas anteriores precisa ser fechado à mão antes do envio; se não for, a rodada seguinte o envia como movimentação da semana, com semanas de atraso e sem contexto. Aviso parado por atenção humana é seguro (nunca é enviado nem fechado pelo corte).",
      "**[BAIXO] A leitura inclui pastas que não deveria.** A caixa de avisos é lida sem restrição de pasta, de propósito, para não perder aviso já arquivado. O efeito colateral é que Itens Excluídos e Problemas de Sincronização também entram: um aviso apagado pela pessoa ainda chega ao robô, e cópias de conflito do Outlook inflam o banco e o painel (no resumo elas já são colapsadas).",
      "**[BAIXO] Destino do resumo é fixo, por limitação da fonte.** O Smart Report do Espaider não tem coluna de e-mail, só o nome do advogado interno — e esse nome é quase sempre o mesmo (1.943 das 1.945 linhas da base de 07/09). Roteamento por advogado exige antes uma fonte que traga o e-mail.",
      "**[BAIXO] A base agora traz processos encerrados.** São 2.412 encerrados ao lado de ~1.950 ativos. Quando um número aparece como Ativo e como Encerrado, o cruzamento usa a linha Ativa; 72 números que estão em duas linhas sem uma ativa única continuam caindo em \"Múltiplas linhas na planilha\".",
      "**[ENCERRADO] Passivo do parser antigo do CARF.** Até 14/09/2026 o robô lia só o primeiro processo de cada Push, e 8 dos 14 boletins recebidos traziam mais de um. O parser foi corrigido e a rodada de 14/09 já saiu com os boletins desdobrados. Os 15 avisos que sobraram de rodadas já fechadas (31/08, 02/09 e 04/09) foram dispensados em 21/09, por estarem fora da janela da rodada."
    ],
    "improvements": [
      "Trocar a configuração do Smart Report no Espaider para a de 140 colunas.",
      "Levar o corte da janela semanal para o código, em vez de fechar à mão.",
      "Separar a conferência do envio oficial, para que conferir não consuma a rodada.",
      "Pendurar `rodar.py` no Agendador de Tarefas do Windows.",
      "Excluir Itens Excluídos e Problemas de Sincronização da leitura da caixa de avisos."
    ],
    "technologies": [
      "Python",
      "Flask",
      "SQLite",
      "Microsoft Graph",
      "MSAL",
      "Pandas",
      "openpyxl"
    ],
    "status": "em_andamento",
    "imageUrl": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
    "category": "Monitoramento",
    "requester": "tribadmpoa@martinelli.adv.br",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "Contencioso Administrativo POA",
    "progress": 95,
    "howItWasDeveloped": "O robô **escreve** para `tribadmpoa@`, com `victor.silva@` sempre em cópia, e **lê** de duas fontes com regras diferentes: a caixa dedicada dele (`pushcontadm@`), trazida por inteiro, e a caixa de um membro da equipe, filtrada no servidor para trazer só os endereços do COMPROT e do CARF. A segunda existe porque os órgãos passaram a mandar para a lista `tribadmpoa@`, e lista não é caixa — o Graph não a lê. Como é caixa pessoal, o recorte por remetente vai na própria consulta: nenhuma outra mensagem dela chega a trafegar.\n\nA autenticação é de aplicativo (client credentials): o robô tem identidade própria no Microsoft Entra e é com ela que lê as duas caixas e envia o resumo. Ninguém faz login e nada depende de uma sessão aberta.\n\nCada rodada busca no Graph só o que chegou desde onde a anterior parou, com uma hora de sobreposição para cobrir atraso de entrega, e usa o identificador único de cada mensagem para não ingerir a mesma coisa duas vezes. São duas travas independentes: a marca d'água de data e o identificador da mensagem.\n\nA mesma movimentação ainda assim chega mais de uma vez, porque a caixa lida guarda cópias do mesmo e-mail. A rodada colapsa as repetições na montagem do resumo, por conteúdo (origem, processo, data, destino e situação), e registra as descartadas como `dispensado` em vez de deixá-las pendentes para sempre.\n\n**Um aviso é uma movimentação, não um e-mail.** O Push do CARF é um boletim: uma mensagem lista vários processos, cada um com os seus andamentos embaixo. A rodada abre o boletim antes de processar e cria um aviso por processo, com os campos presos ao bloco de cada um. O COMPROT nunca fez isso — nos 79 e-mails recebidos, sempre um processo por mensagem.\n\nA rodada vale de segunda a segunda. O código não tem regra de data: ela envia o que estiver pendente, e o que está pendente é o que chegou desde a última vez — é isso que faz uma rodada atrasada por feriado cobrir o intervalo maior sozinha, como a de 08/09 cobriu depois do feriado de 07/09. O que ficou para trás da janela é fechado como `dispensado`, com o motivo registrado, e não vai para o resumo da semana seguinte.\n\nToda segunda-feira o Espaider manda a base de processos em anexo. Esse e-mail não vira aviso: a rodada o desvia, baixa a planilha, guarda no histórico e só então a promove a base oficial — e só depois de validar que o arquivo é legível, que o layout é reconhecível e que não vem com menos da metade dos processos da base anterior. Em qualquer recusa a base anterior continua valendo e a rodada segue processando avisos: perder a atualização é ruim, perder a rodada inteira seria pior.",
    "lastUpdate": "2026-09-21",
    "grupo": [
      "monitoramento",
      "rpa"
    ]
  },
  {
    "id": "3",
    "name": "Analista de Jurisprudência CARF",
    "description": "O Analista de Jurisprudência CARF é uma ferramenta web interna, com login por usuário, que pesquisa acórdãos do CARF pelos termos que escolhermos. Ela baixa os PDFs, confere se o conteúdo é mesmo relevante, guarda tudo num histórico sem repetir acórdão e entrega o resultado por e-mail ou em planilha Excel.\n\nDá para filtrar pelo ano do fato gerador dentro de um período que a gente define e procurar acórdãos sobre uma lei ou tese específica. Tem ainda um chat com IA para tirar dúvidas sobre os acórdãos encontrados e consultar o andamento de um processo no CARF (por exemplo, se houve decisão posterior).",
    "benefits": [
      "Testes com 90% de aprovação. Vamos continuar alimentando a ferramenta e trazendo ideias até chegar nos 100%.",
      "Antes de baixar qualquer arquivo, a ferramenta mostra quantos acórdãos cada combinação de termos traz. Assim dá para escolher a busca certa sem gastar tempo nem IA.",
      "Não envia o mesmo acórdão duas vezes, e todo o histórico fica guardado para consulta."
    ],
    "risks": [
      "**Uso de 2 em 2 meses.** A ferramenta pode ficar parada e as informações se perderem. O que já foi feito: backup diário automático do banco.",
      "**Base do CARF atrasada.** A base pública fica uns 3 meses atrás, e cerca de 1,5% dos PDFs não aparecem na busca. Acórdãos muito recentes podem ficar de fora.",
      "**Limite da IA.** A chave do Gemini é gratuita e só permite 20 consultas por dia. Em buscas grandes a ferramenta fica bem mais lenta. Para usar em volume, é preciso contratar o plano pago.",
      "**Roda só num computador local.** A hospedagem num servidor foi testada e pausada, porque a conta disponível é gratuita e não guarda o banco de dados.",
      "**Solução proposta:** melhorar o filtro até chegar em 100% de acerto na busca, contratar o plano pago do Gemini e padronizar o código conforme os padrões da Martinelli."
    ],
    "improvements": [
      "Hospedar a ferramenta num servidor para o time acessar sem depender de uma máquina.",
      "Controlar o gasto de IA por sócio responsável.",
      "Pensar em funcionalidades que agreguem mais valor para a área."
    ],
    "technologies": [
      "Python",
      "Flask",
      "Waitress",
      "Solr",
      "Playwright",
      "pypdf",
      "Regex",
      "Google Gemini",
      "SQLite",
      "SMTP (Office 365)",
      "openpyxl"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2000&auto=format&fit=crop",
    "category": "RPA",
    "requester": "ravi.nolasco@martinelli.adv.br, NPT Embaladao@martinelli.adv.br e victor.silva@martinelli.adv.br",
    "requesterEmail": "vinicius.generoso@martinelli.adv.br",
    "area": "Contencioso Administrativo Brasília",
    "progress": 95,
    "howItWasDeveloped": "1. **Python:** a base do projeto, escolhida pela robustez em automação e processamento de dados.\n2. **Flask + Waitress:** a interface web com login, que cada usuário usa pelo navegador. Várias pessoas podem fazer buscas ao mesmo tempo sem uma atrapalhar a outra.\n3. **Busca no índice do CARF (Solr):** a pesquisa vai direto na base de busca do CARF, o que é mais rápido e mais confiável do que simular cliques no site.\n4. **Playwright:** um navegador automatizado que mantém a sessão e baixa os PDFs com segurança, sem arquivos corrompidos. Também faz a consulta ao andamento do processo.\n5. **pypdf + Regex:** leem cada PDF baixado e tiram dele a ementa, o ano do fato gerador e o resultado do julgamento (a parte que diz o que foi decidido e por qual votação).\n6. **IA (Google Gemini):** dá uma nota de relevância a cada acórdão, sugere termos de busca e responde as perguntas do chat. É o único provedor de IA aprovado pelo escritório.\n7. **SQLite:** um banco de dados local que guarda o histórico de tudo que já foi baixado e impede acórdão repetido. Tem backup diário automático, com uma trava que avisa se o banco aparecer vazio.\n8. **SMTP (Office 365) + Excel (openpyxl):** mandam o relatório por e-mail em HTML com os PDFs anexados em lotes, ou geram a planilha da busca.",
    "lastUpdate": "2026-09-24",
    "grupo": "rpa"
  },
  {
    "id": "4",
    "name": "TRF4",
    "description": "Busca novas informações de acordo, com uma base de dados criada com a base no site do TRF4",
    "benefits": [
      "Stand-by..."
    ],
    "risks": [
      "Risco: Stand-by...\n\nSolução proposta: Stand-by..."
    ],
    "improvements": [
      "Stand-by..."
    ],
    "technologies": [
      "Python"
    ],
    "status": "standby",
    "imageUrl": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
    "category": "RPA",
    "requester": "raul.simoes@martinelli.adv.br",
    "requesterEmail": "fabricio.pino@martinelli.adv.br",
    "area": "NÚCLEO TRIBUTÁRIO",
    "progress": 45,
    "howItWasDeveloped": "Stand-by...",
    "lastUpdate": "2026-09-25",
    "grupo": "rpa"
  },
  {
    "id": "8",
    "name": "Automação Devops",
    "description": "Todo contrato tributário assinado precisa virar atividade no Azure DevOps para a equipe começar a trabalhar. Antes, isso dependia de alguém abrir o PDF, ler o objeto do contrato, identificar os tributos envolvidos, confirmar com cada responsável e criar os cards à mão. Esse fluxo ficava espalhado entre e-mails e planilhas, e um contrato podia ficar dias parado sem ninguém perceber.\n\nA automação acompanha a caixa de e-mail que recebe os contratos do Espaider, lê cada contrato, identifica os tributos do objeto e envia a validação para o responsável de cada tributo. Depois da aprovação final, cria os cards no Azure DevOps já preenchidos com cliente, CNPJ, número do contrato, produto e responsável.\n\nEstá em uso desde 14/07/2026, quando o primeiro contrato foi processado de ponta a ponta (Sistemilk, ADV02-709216-2026).",
    "benefits": [
      "Acaba com a leitura manual de cada contrato para descobrir quais tributos ele envolve.",
      "Os cards no DevOps são criados já preenchidos, sem redigitar dados do contrato.",
      "Cada responsável valida só o tributo que acompanha, sem precisar revisar o contrato inteiro.",
      "Se um tributo estiver errado, só aquele volta para correção. Os que já foram confirmados continuam valendo.",
      "Cada contrato tem o histórico registrado (recebido, validado, aprovado, card criado), o que permite comprovar quando e por quem cada etapa foi feita.",
      "A gestão vê o andamento de cada contrato em um processo estruturado, e não mais em trocas de e-mail."
    ],
    "risks": [
      "**[ALTO] Dependência do relatório diário do Espaider.** Sem o relatório, os PDFs que chegam não têm base para cruzar os dados. O envio automático parou em 27/08 e precisa ser reativado com o Carlos Duro.",
      "**[ALTO] Execução depende de uma máquina local.** Hoje o sistema roda em um computador. Se ele for desligado ou o processo parar, os contratos se acumulam sem aviso.",
      "**[MÉDIO] Migração para o novo projeto do DevOps (\"TAX RS - Nacional\").** O projeto novo mudou tipos de card e campos. IPI e Transferência de ICMS não têm tipo próprio lá, e alguns campos não têm equivalente. A migração depende de decisões de negócio que ainda estão em aberto.",
      "**[MÉDIO] Conexões e credenciais que expiram.** O token do DevOps e as conexões do Power Automate (Forms e Outlook) vencem de tempos em tempos e interrompem o fluxo até serem renovados.",
      "**[BAIXO] Contratos fora dos grupos atuais.** Objetos novos, como créditos previdenciários sobre verbas indenizatórias, ainda exigem análise manual até que um tipo de card seja criado para eles."
    ],
    "improvements": [
      "Rodar em nuvem, de forma contínua e sem depender da máquina local.",
      "Enviar um aviso diário automático com os contratos pendentes em cada etapa.",
      "Concluir a migração para o projeto \"TAX RS - Nacional\" e ajustar o Forms aos campos novos.",
      "Criar tipos de card para os objetos que hoje ficam de fora.",
      "Limpar automaticamente os dados de trabalho antigos, deixando o DevOps como registro oficial."
    ],
    "technologies": [
      "Python",
      "Azure DevOps",
      "Power Automate",
      "Microsoft Forms",
      "Outlook"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    "category": "RPA",
    "requester": "",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "TAX/Tributário",
    "progress": 95,
    "howItWasDeveloped": "O Espaider manda dois tipos de e-mail: um relatório diário com os dados de todos os contratos novos e, separadamente, o PDF de cada contrato assinado. A automação guarda o relatório e, quando o PDF chega, cruza os dois para montar a ficha completa. Se o contrato não aparecer no relatório, os dados são extraídos direto do PDF.\n\nA cláusula do objeto é lida e comparada com regras por tributo (IRPJ/CSLL, PIS/COFINS, IPI, ICMS, Previdenciário e Transferência de ICMS). Cada grupo identificado gera um formulário de validação para o responsável daquele tributo. Quando todos respondem, o responsável pelo fluxo recebe um e-mail de aprovação final com o resumo completo. Nesse e-mail, cada tributo tem um link próprio para reportar erro, e só o tributo apontado volta para correção. Com a aprovação, os cards são criados no Azure DevOps.\n\nContratos que não se encaixam nos grupos tributários, como consultorias genéricas sobre a reforma tributária, são separados e não geram cards. Cada execução fica registrada em log, e as falhas são identificadas para correção rápida.",
    "lastUpdate": "2026-09-25",
    "startDate": "2026-07-14",
    "recipientsTitle": "Envolvidos",
    "recipients": [
      { "grupo": "Responsável pelo fluxo e aprovação final", "nomes": ["Carlos Duro"] },
      { "grupo": "Validação por tributo", "nomes": ["Responsáveis de cada grupo tributário"] },
      { "grupo": "Acompanhamento", "nomes": ["Victor Silva"] }
    ],
    "grupo": "rpa"
  },
  {
    "id": "9",
    "name": "CHAT BOT (EXCEL)",
    "description": "Criei um chat bot integrado com a planilha do excel, para nos informar informações da planilha de maneira mais agil e eficiente, sem ter que ficar procurando linha por linha, apenas digitando a linha que queremos saber a informação.",
    "benefits": [
      "Aguardando resposta do usuario"
    ],
    "risks": [
      "Risco: Atualmente o projeto tem uma escala pequena então os erros que acabaram ocorrendo já foram resolvidos.\n\nSolução proposta: Atualmente o projeto tem uma escala pequena então os eros que acabaram ocorrendo já foram resolvidos."
    ],
    "improvements": [
      "Podemos criar novas estruturas para o projeto para usarmos diversas vezes, entramos no chat e anexamos a planilha que queremos integrar."
    ],
    "technologies": [
      "Python",
      "Pandas",
      "Excel"
    ],
    "status": "em_andamento",
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "category": "chatbot",
    "requester": "• TAX",
    "requesterEmail": "jeferson.santos@martinelli.adv.br",
    "area": "Consultor Tributario",
    "progress": 90,
    "link": "https://chat-bot-infos.vercel.app/chat",
    "howItWasDeveloped": "Linguagens\r\n- Python: Backend (lógica, busca de dados, cálculos e regras de negócio).\r\n- HTML: Estruturação das páginas web (Login e Chat).\r\n- CSS: Estilização visual da interface (design).\r\n- JavaScript: Comunicação dinâmica entre a tela do usuário e o servidor (para o chat funcionar sem recarregar a página).\r\n Tecnologias & Frameworks\r\n- Flask: Framework web em Python usado para criar o servidor e as rotas (API) da aplicação.\r\n- Pandas: Biblioteca de manipulação de dados em Python, usada para ler e extrair as informações exatas do arquivo Excel.\r\n- Regex (Expressões Regulares): Tecnologia nativa do Python usada para buscar e validar padrões de texto (usada para localizar os CNPJs nas linhas acima).\r\n- Flask Sessions: Sistema de gerenciamento de sessões para controle de login e autenticação.\r\n- Git & GitHub: Sistema de controle de versão e repositório na nuvem para armazenar o código.\r\n- Vercel: Plataforma de hospedagem Serverless (nuvem) com Continuous Deployment (Deploy Automático) integrado ao GitHub.",
    "lastUpdate": "2026-09-03",
    "grupo": "automacoes"
  },
  {
    "id": "10",
    "name": "COSIT/PGFN",
    "description": "Monitoramento do site da PGFN e NORMAS, filtrado para trazer informações que consideramos relevantes mensalmente, um relatório resumidos nos mostrando tudo que houve no Mês destes 2 sites.",
    "benefits": [
      "Monitoramento do site da PGFN e NORMAS, filtrado para trazer informações que consideramos relevantes mensalmente, um relatório resumidos nos mostrando tudo que houve no Mês destes 2 sites."
    ],
    "risks": [
      "Risco: ......"
    ],
    "improvements": [
      "Melhorarmos a lógica dos envios, e acrescentar novas funcionalidades"
    ],
    "technologies": [
      "Python",
      "BeautifulSoup",
      "SMTP"
    ],
    "status": "em_andamento",
    "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    "category": "RPA",
    "requester": "• Nucleo Tributario Raul Costi Simões Head • Negócios Gustavo Mecabô",
    "requesterEmail": "",
    "area": "Socio",
    "progress": 90,
    "howItWasDeveloped": "Linguagem: Python 3.10+\r\n\r\nBibliotecas externas:\r\n\r\nrequests — requisições HTTP à API da RFB\r\nbeautifulsoup4 + lxml — parsing do HTML/tabelas\r\npython-dotenv — leitura segura do .env\r\nBibliotecas nativas (stdlib):\r\n\r\nsmtplib — envio de e-mail\r\ncsv, json — geração dos arquivos de saída\r\nargparse — parâmetros de linha de comando\r\nre — expressões regulares nas ementas\r\nlogging — log de execução\r\nFonte de dados: API pública SIJUT2 / Receita Federal (via POST HTTP)\r\n\r\nInfraestrutura: SMTP interno do escritório (relay na porta 25, sem autenticação)",
    "lastUpdate": "2026-09-03",
    "grupo": "rpa"
  },
  {
    "id": "12",
    "name": "RPA e-CAC / CAV (Receita Federal)",
    "description": "RPA que automatiza o preenchimento de informações no portal CAV/e-CAC da Receita Federal. Lê uma planilha Excel com os dados das empresas, acessa o portal com autenticação, preenche os formulários automaticamente e salva evidências (prints e HTML) de cada operação realizada. Gera relatório final em CSV com o status de cada registro.",
    "benefits": [
      "Elimina horas de trabalho manual repetitivo no portal da Receita Federal. O controle de estado (banco SQLite) permite retomar de onde parou em caso de interrupção, processando apenas os registros pendentes ou com erro."
    ],
    "risks": [
      "Risco: O portal e-CAC possui autenticação complexa (certificado digital/gov.br) e pode apresentar instabilidades ou timeouts.\n\nSolução proposta: O RPA salva evidências (prints e HTML) de cada erro para diagnóstico. Suporte a modo --only-pending para reprocessar apenas os registros que falharam."
    ],
    "improvements": [
      "Adicionar suporte a múltiplos perfis de preenchimento. Integrar com o Microsoft Graph para enviar o relatório CSV automaticamente por e-mail ao final de cada execução."
    ],
    "technologies": [
      "Python",
      "Playwright",
      "SQLite",
      "Pandas",
      "Excel",
      "PowerShell"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    "category": "RPA",
    "requester": "",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "NPT",
    "progress": 10,
    "howItWasDeveloped": "O RPA lê uma planilha Excel com os dados das empresas, abre o portal e-CAC como se fosse um usuário real, preenche os formulários e salva um print de cada tela como evidência. Se der algum erro em um registro, ele marca como pendente e segue para o próximo — depois é só rodar novamente que ele pula os que já foram feitos e retoma de onde parou. Ao final gera um relatório com o resultado de cada empresa.",
    "lastUpdate": "2026-09-09",
    "grupo": "rpa"
  },
  {
    "id": "13",
    "name": "Monitor P&R - Perguntas e Respostas (Receita Federal)",
    "description": "Monitora a página de Perguntas e Respostas da Receita Federal, detectando novas publicações e atualizações em todos os temas tributários disponíveis (CNPJ, DCTF, e-Social, IRPF, ECF, ITR, etc.). Armazena um histórico em SQLite e envia notificações por e-mail com os documentos novos ou modificados.",
    "benefits": [
      "Garante que o time tributário seja notificado imediatamente quando a Receita Federal atualiza ou publica novos documentos de P&R, sem necessidade de consultar manualmente cada um dos temas disponíveis no portal."
    ],
    "risks": [
      "Risco: Mudanças na estrutura HTML do portal da Receita Federal podem quebrar o scraper.\n\nSolução proposta: O sistema usa hashing de conteúdo para detectar mudanças, tornando-o resiliente a alterações cosméticas na página. Logs de execução registram cada run para diagnóstico."
    ],
    "improvements": [
      "Adicionar filtro por tema (ex: notificar apenas atualizações de DCTF). Expandir para outras seções da Receita Federal além de P&R."
    ],
    "technologies": [
      "Python",
      "Playwright",
      "BeautifulSoup",
      "SQLite",
      "SMTP",
      "Requests"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    "category": "Monitoramento",
    "requester": "",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "NPT",
    "progress": 100,
    "howItWasDeveloped": "O sistema acessa a página de P&R da Receita Federal e varre todos os temas disponíveis (CNPJ, DCTF, e-Social, IRPF, ECF, ITR e outros). Para cada documento encontrado, gera uma assinatura única — se a assinatura não existir no histórico, é novidade. Isso evita que o mesmo documento seja notificado duas vezes. Quando encontra algo novo ou atualizado, monta um e-mail organizado por tema e envia.",
    "lastUpdate": "2026-09-09",
    "grupo": "monitoramento"
  },
  {
    "id": "14",
    "name": "Relatório NPT - Consolidação de Acórdãos Brasília",
    "description": "Sistema que lê e-mails recebidos do time de Brasília contendo acórdãos e atos normativos do CARF, faz o parsing do HTML, aplica filtros de relevância, armazena no banco de dados e gera relatórios consolidados em PDF e Excel. Os relatórios são enviados por e-mail via Microsoft Graph API com os acórdãos aceitos e rejeitados.",
    "benefits": [
      "Transforma o fluxo manual de triagem de e-mails com acórdãos em um processo automatizado e rastreável. O time passa a receber relatórios consolidados prontos para análise em vez de ter que ler e-mail por e-mail."
    ],
    "risks": [
      "Risco: Mudanças no formato dos e-mails enviados pelo time de Brasília podem quebrar o parser.\n\nSolução proposta: O parser é baseado em padrões de texto (Regex) e estrutura HTML, com fallback para diferentes formatos. Sistema de logs permite identificar e-mails que falharam no parse."
    ],
    "improvements": [
      "Adicionar interface web para visualização e busca nos acórdãos armazenados. Integrar com o portfólio de jurisprudência existente."
    ],
    "technologies": [
      "Python",
      "Microsoft Graph API",
      "pdfplumber",
      "ReportLab",
      "openpyxl",
      "SQLite",
      "Regex"
    ],
    "status": "em_andamento",
    "imageUrl": "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2030&auto=format&fit=crop",
    "category": "RPA",
    "requester": "",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "NPT / CONTENCIOSO ADMINISTRATIVO BRASÍLIA",
    "progress": 75,
    "howItWasDeveloped": "O sistema acessa a caixa de e-mail do time de Brasília, lê os e-mails com acórdãos e atos normativos e extrai automaticamente os dados de cada um (número, data, ementa, decisão). Depois aplica um filtro de relevância para separar o que é pertinente do que não é. Com tudo classificado, gera um relatório em PDF e Excel com os acórdãos aceitos e rejeitados e envia por e-mail para o time.",
    "lastUpdate": "2026-06-30",
    "grupo": "rpa"
  },
  {
    "id": "15",
    "name": "Retificação TAX - Scrapers Jurídicos (ICMS-ST e PERDCOMP)",
    "description": "Conjunto de scrapers tributários especializados: (1) Scraper CARF PERDCOMP — identifica quais processos vinculados possuem PDF de inteiro teor disponível; (2) Scraper de Jurisprudência Estadual — busca acórdãos de ICMS-ST nos tribunais de SP, MG e PR por combinações de termos (ICMS-ST, MVA, IVA-ST, Grupo Econômico); (3) Scraper Selo Sintonia — extrai dados do programa Selo Sintonia da SEFAZ. Todos os resultados são exportados em planilhas Excel formatadas.",
    "benefits": [
      "Substitui horas de pesquisa manual nos portais dos tribunais estaduais e no CARF. As planilhas geradas trazem os resultados organizados e prontos para análise jurídica."
    ],
    "risks": [
      "Risco: Os portais dos tribunais estaduais (TJ-SP, TJ-MG, TJ-PR) possuem estruturas distintas e podem apresentar instabilidades ou CAPTCHAs.\n\nSolução proposta: Cada tribunal tem seu próprio conjunto de seletores e delays configuráveis. Screenshots automáticos em caso de erro facilitam o diagnóstico."
    ],
    "improvements": [
      "Unificar os scrapers em um único orquestrador com interface de linha de comando. Adicionar suporte aos demais estados (RS, SC, RJ)."
    ],
    "technologies": [
      "Python",
      "Playwright",
      "BeautifulSoup",
      "Requests",
      "openpyxl",
      "Excel"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "category": "RPA",
    "requester": "",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "TAX / CONTENCIOSO TRIBUTÁRIO",
    "progress": 90,
    "howItWasDeveloped": "São três ferramentas dentro de um mesmo projeto. A primeira acessa o CARF e verifica quais processos vinculados ao processo principal já têm PDF de inteiro teor disponível. A segunda busca jurisprudência de ICMS-ST nos tribunais de SP, MG e PR, pesquisando por combinações de termos como ICMS-ST, MVA e Grupo Econômico. A terceira extrai dados do programa Selo Sintonia da SEFAZ. Todas geram planilhas Excel organizadas com os resultados.",
    "lastUpdate": "2026-06-30",
    "grupo": "rpa"
  },
  {
    "id": "16",
    "name": "Extrator de Cláusulas",
    "description": "Muitos trabalhos do tributário começam do mesmo jeito: um acervo grande de PDFs (contratos de locação, acórdãos do CARF, faturas de energia) em que alguém precisa abrir documento por documento, achar a cláusula ou o dado que interessa, copiar o trecho e preencher uma planilha. Boa parte desse material é papel antigo digitalizado, sem texto pesquisável. A leitura manual leva semanas, e esquecer uma cláusula que existe é um erro que ninguém percebe na conferência.\n\nNo sistema, a pessoa indica o acervo (uma pasta ou um .zip), descreve em texto livre o que quer extrair e confere as colunas sugeridas. No fim recebe uma planilha pronta para conferência, em que cada informação vem acompanhada do trecho do documento de onde saiu.\n\nA primeira execução completa foi o acervo de contratos de locação com cláusula de IPTU, em agosto de 2026: 2.245 documentos e 8.414 páginas, processados em pouco mais de seis horas. Depois o sistema passou a atender acórdãos do CARF e faturas de energia para apuração de ICMS.",
    "benefits": [
      "Acaba com a leitura manual de cada documento para achar uma cláusula ou um dado.",
      "Lê documentos digitalizados sem texto, inclusive páginas desbotadas, com a marca da dobra do papel ou escaneadas de lado.",
      "Cada informação da planilha vem com o trecho literal do documento. O advogado confere sem reabrir o PDF.",
      "Quando não encontra um dado, o sistema deixa o campo vazio e explica o motivo, em vez de preencher com algo duvidoso.",
      "Todos os documentos lidos ficam registrados, inclusive os descartados, com o motivo do descarte e o grau de confiança.",
      "Serve para qualquer tipo de dado que se consiga descrever, sem precisar de um programa novo para cada caso.",
      "Se a execução for interrompida, ela continua de onde parou, sem refazer nem pagar de novo o que já estava pronto."
    ],
    "risks": [
      "**[ALTO] Execução depende de uma máquina local.** O sistema roda num computador pessoal e só aceita acesso a partir dele mesmo, por segurança. Se a máquina estiver desligada, ninguém consegue usar.",
      "**[ALTO] Sem controle de versão nem backup estruturado.** O código fica numa pasta do OneDrive, ao lado de um projeto antigo (o scraper do TARF) e de uma cópia obsoleta (\"Leitor de PDF\"). Uma alteração no lugar errado pode se perder ou gerar divergência sem ninguém notar.",
      "**[MÉDIO] Anonimização inconsistente da IA Corporativa.** Alguns nomes chegam mascarados ao modelo e outros não. Quando o nome vem mascarado, o modelo responde \"não consta\". A plataforma também limita as chamadas por minuto e tem cota mensal.",
      "**[MÉDIO] Credenciais e custo da API.** A chave da API do Claude precisa estar configurada, e acervos grandes interpretados por IA têm custo por documento.",
      "**[BAIXO] Documentos muito degradados.** Algumas digitalizações continuam ilegíveis mesmo após o tratamento. Elas são sinalizadas no Diagnóstico para revisão manual."
    ],
    "improvements": [
      "Rodar num servidor do escritório, acessível à equipe sem depender de uma máquina pessoal.",
      "Colocar o código em repositório com controle de versão e separá-lo do projeto do TARF.",
      "Criar modelos prontos para os trabalhos que se repetem (IPTU, CARF, ICMS em faturas de energia).",
      "Resolver com a equipe da IA Corporativa a inconsistência da anonimização.",
      "Ampliar as regras próprias para novos tipos de documento conforme surgirem pedidos."
    ],
    "technologies": [
      "Python",
      "Flask",
      "Claude (API Anthropic)",
      "IA Corporativa",
      "OCR do Windows",
      "Excel"
    ],
    "status": "concluido",
    "imageUrl": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    "category": "Automações",
    "requester": "Equipes do tributário que demandam análise de acervo",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "TAX/Tributário",
    "progress": 80,
    "howItWasDeveloped": "O sistema lê os PDFs de dentro do .zip original, sem copiar o acervo. Quando o PDF tem texto digital, esse texto é usado direto. Quando não tem, as páginas passam por OCR em português, com um tratamento prévio da imagem: remoção da dobra do papel, realce de contraste e correção de páginas escaneadas de lado.\n\nA extração pode ser feita de duas formas:\n- **Termos de busca**, sem custo e sem internet. A busca tolera os erros típicos do OCR, como \"impostor prediais\" no lugar de \"impostos prediais\", e é calibrada para não confundir \"IPTU\" com os municípios de Itu e Ipu.\n- **Interpretação por IA**, pelo Claude ou pela IA Corporativa do escritório, para dados que exigem leitura. O modelo é obrigado a citar o trecho em que se apoia. Se esse trecho não aparece no documento, a confiança é rebaixada e a planilha avisa.\n\nPara dados que dependem de saber onde procurar, existem regras próprias:\n- O endereço do imóvel é buscado na cláusula do objeto, e não na qualificação da locatária.\n- A ementa do acórdão do CARF é lida no cabeçalho, e não numa citação dentro do voto.\n\nA planilha final tem quatro abas: Resultado, Fundamentação (os trechos que sustentam cada célula), Diagnóstico (todos os documentos, com o que foi feito em cada um) e Parâmetros (o que gerou aquela planilha).",
    "lastUpdate": "2026-09-25",
    "startDate": "2026-08-25",
    "recipientsTitle": "Envolvidos",
    "recipients": [
      { "grupo": "Desenvolvimento e manutenção", "nomes": ["Victor Silva"] },
      { "grupo": "Solicitantes / usuários", "nomes": ["Equipes do tributário que demandam análise de acervo"] }
    ],
    "grupo": "automacoes"
  },
  {
    "id": "17",
    "name": "NPT – Gerador de Materiais",
    "description": "Cada tema analisado pelo Núcleo de Produtos Tributários vira um material para o time comercial e para os clientes. Se o tema é uma oportunidade, vira uma apresentação. Se não é, vira uma ficha técnica. Antes, a pessoa copiava o texto do Word para o PowerPoint lâmina por lâmina e ajustava fonte, cor, quebra de texto e posição de cada bloco à mão. Cada material levava horas, e dois analistas raramente entregavam o mesmo padrão visual.\n\nO gerador recebe o Word do tema, lê as seções (contexto, posicionamento dos órgãos, fundamentos, jurisprudência, classificação do êxito), mostra ao analista o que foi extraído para ele conferir e gera o material no modelo aprovado. Se houver destinatário, o material já sai por e-mail.",
    "benefits": [
      "Acaba com a montagem manual de lâminas. O conteúdo do Word vai direto para o modelo aprovado.",
      "Todo material sai no mesmo padrão visual, seja quem for o analista.",
      "Se falta um dado no documento, o gerador aponta a falta e não inventa nada. Nenhum campo é preenchido com texto de reserva.",
      "O texto que não cabe no espaço é detectado. Ele não encolhe sozinho nem some.",
      "O analista pode acrescentar lâminas prontas do marketing (institucional, gráficos, linha do tempo) escolhendo-as num carrossel.",
      "Documentos fora do padrão podem ser convertidos para o formato padrão. O que falta aparece marcado como \"A COMPLETAR\".",
      "Ninguém instala nada: o time abre o programa com dois cliques."
    ],
    "risks": [
      "**[ALTO] Texto de cliente enviado à IA externa.** A IA está ligada e usa um provedor externo (Groq). Quando a leitura padrão falha, o texto do documento sai do escritório. Isso precisa de aprovação formal, ou a IA precisa passar para a API interna. A troca é só de configuração.",
      "**[MÉDIO] Formatos de Word novos.** A leitura foi ajustada a partir de um documento modelo e dos primeiros Words reais. Cada formato novo de documento pode exigir um ajuste, e até lá depende da IA ou do preenchimento manual.",
      "**[MÉDIO] Falha silenciosa da IA.** Se o nome do modelo ou a chave estiverem errados, a IA desliga sem avisar e o material sai só com a leitura padrão. Existe uma ferramenta de diagnóstico, mas ninguém recebe alerta.",
      "**[MÉDIO] Depende do Office de cada máquina.** A geração e o envio usam o PowerPoint, o Outlook e o Edge instalados. Se algum deles for atualizado ou tiver uma política diferente em outra máquina, o fluxo pode quebrar.",
      "**[BAIXO] Atualização manual.** Cada versão nova precisa ser redistribuída como pasta ou zip para o time.",
      "**[BAIXO] Modelos do marketing.** Se o marketing mudar o modelo ou as lâminas (hoje são 65), elas precisam ser reimportadas."
    ],
    "improvements": [
      "Trocar o Groq pela API interna do escritório.",
      "Gravar os materiais numa pasta compartilhada do time, em vez da pasta Documentos de cada pessoa.",
      "Implementar o terceiro tipo de material. O espaço no código já existe.",
      "Ajustar a leitura com mais Words reais do time.",
      "Criar atualização automática da pasta do programa.",
      "Avisar quando a IA estiver indisponível."
    ],
    "technologies": [
      "Python",
      "PowerPoint",
      "Word",
      "Outlook",
      "Edge",
      "IA"
    ],
    "status": "em_andamento",
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "category": "Automações",
    "requester": "Analistas do Núcleo de Produtos Tributários",
    "requesterEmail": "victor.silva@martinelli.adv.br",
    "area": "TAX/Tributário",
    "progress": 85,
    "howItWasDeveloped": "O analista anexa o Word e escreve o contexto numa tela própria. A leitura segue a estrutura numerada do material do NPT: reconhece cada órgão no posicionamento, trata o texto em vermelho como alerta e mantém o negrito dos trechos em destaque. O que a leitura não reconhece aparece vazio na tela de conferência, para o analista preencher ou deixar de fora.\n\nQuando o documento foge muito do formato conhecido, entra a IA como plano B. Ela só organiza a estrutura. Cada trecho que ela devolve é comparado com o documento original, e se algum trecho não bater, a resposta inteira é descartada. Documentos no formato de sempre nunca passam pela IA.\n\nDepois da conferência, a classificação decide o formato:\n- **Oportunidade:** apresentação PowerPoint com duas seções por lâmina e cartões para os fundamentos. Cada ficha de jurisprudência tem a altura do próprio conteúdo, e a classificação do êxito aparece num painel próprio.\n- **Não oportunidade:** ficha técnica em HTML, pronta para colar no Outlook, e um PDF ao lado.\n\nO envio sai pelo Outlook de quem clicou ou pelo servidor de e-mail do escritório. O gerador confere se a mensagem realmente saiu antes de dar o envio como feito. A distribuição é uma pasta com o Python embutido e assinado, o que evita o bloqueio de antivírus que um executável sem assinatura sofreria.",
    "lastUpdate": "2026-09-16",
    "recipientsTitle": "Envolvidos",
    "recipients": [
      { "grupo": "Desenvolvimento e acompanhamento", "nomes": ["Victor Silva"] },
      { "grupo": "Usuários", "nomes": ["Analistas do Núcleo de Produtos Tributários"] },
      { "grupo": "Modelos visuais", "nomes": ["Marketing"] }
    ],
    "grupo": "automacoes"
  }
];
