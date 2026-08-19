import { QuizTopic } from '../types';

export const ALL_QUIZZES: QuizTopic[] = [
  // =========================================================================
  // QUIZ 1: HISTÓRIA (NOVO - FAMÍLIA REAL, INCONFIDÊNCIA, CONJURAÇÃO & NAPOLEÃO)
  // =========================================================================
  {
    id: 'historia-brasil-napoleao',
    title: 'História: Vinda da Família Real, Inconfidência, Conjuração & Napoleão',
    subject: 'História',
    description: 'Causas da vinda da Família Real (1808), tratados com a Inglaterra, Inconfidência Mineira (1789), Conjuração Baiana (1798), Fases de Napoleão e Congresso de Viena.',
    icon: 'fa-landmark',
    badgeColor: 'bg-amber-500',
    questions: [
      // --- BLOCO A: CAUSAS E VINDA DA FAMÍLIA REAL (1808) ---
      {
        question: "Qual medida decretada por Napoleão Bonaparte em 1806 determinava que os países europeus fechassem seus portos ao comércio com a Inglaterra?",
        options: [
          "Bloqueio Continental",
          "Tratado de Fontainebleau",
          "Tratado de Tordesilhas",
          "Congresso de Viena"
        ],
        correctAnswer: "Bloqueio Continental",
        explanation: "Em 1806, Napoleão instituiu o Bloqueio Continental visando isolar e sufocar a economia britânica ao proibir o comércio dos países europeus com o Reino Unido."
      },
      {
        question: "Qual foi o tratado secreto assinado entre a França de Napoleão e a Espanha em 1807 para invadir e dividir o território português?",
        options: [
          "Tratado de Fontainebleau",
          "Tratado de Aliança e Amizade",
          "Tratado de Utrecht",
          "Tratado de Madri"
        ],
        correctAnswer: "Tratado de Fontainebleau",
        explanation: "O Tratado de Fontainebleau (1807) permitia às tropas francesas cruzarem a Espanha para invadir Portugal em troca de parte do território lusitano para a Espanha."
      },
      {
        question: "Por qual razão principal o reino de Portugal não aderiu ao Bloqueio Continental imposto por Napoleão Bonaparte?",
        options: [
          "Devido à longa aliança política e comercial com a Inglaterra",
          "Porque Portugal pretendia colonizar a França",
          "Por falta de navios mercantes para navegar no Atlântico",
          "Porque a Espanha já havia conquistado todo o território de Portugal"
        ],
        correctAnswer: "Devido à longa aliança política e comercial com a Inglaterra",
        explanation: "Portugal mantinha uma aliança histórica e dependência comercial com a Grã-Bretanha, tornando inviável o rompimento com os britânicos."
      },
      {
        question: "O que estabelecia a convenção secreta assinada em 22 de outubro de 1807 entre o príncipe regente D. João e o rei inglês Jorge III?",
        options: [
          "A transferência da sede da corte portuguesa para o Brasil com escolta naval britânica",
          "A entrega imediata de todas as minas de ouro para a França",
          "A abolição total da escravidão nas colônias portuguesas naquele mesmo ano",
          "A transformação de Portugal em república subordinada a Londres"
        ],
        correctAnswer: "A transferência da sede da corte portuguesa para o Brasil com escolta naval britânica",
        explanation: "A convenção assegurava a transferência segura da família real e da corte para o Brasil, com apoio da marinha inglesa."
      },
      {
        question: "Quanto tempo durou a insalubre travessia marítima da corte portuguesa até o desembarque em Salvador (Bahia) em 22 de janeiro de 1808?",
        options: ["54 dias de viagem", "10 dias de viagem", "6 meses de viagem", "1 ano de viagem"],
        correctAnswer: "54 dias de viagem",
        explanation: "A travessia marítima durou 54 dias em condições precárias e insalubres até a chegada na capital baiana."
      },
      {
        question: "Qual documento histórico de grande impacto econômico D. João assinou ainda em Salvador, logo após desembarcar em 1808?",
        options: [
          "Carta Régia de Abertura dos Portos às Nações Amigas",
          "Constituição Imperial de 1824",
          "Código Civil Napoleônico",
          "Tratado de Fontainebleau"
        ],
        correctAnswer: "Carta Régia de Abertura dos Portos às Nações Amigas",
        explanation: "A Abertura dos Portos às Nações Amigas rompeu o pacto colonial português, beneficiando diretamente o comércio com a Inglaterra."
      },
      {
        question: "Ao chegarem ao Rio de Janeiro em março de 1808, os imóveis requisitados para a nobreza recebiam a sigla 'P.R.' (Príncipe Regente). Como a população carioca interpretava ironicamente a sigla?",
        options: ["'Ponha-se na Rua'", "'Pátria Real'", "'Povo Revoltado'", "'Prédio Reformado'"],
        correctAnswer: "'Ponha-se na Rua'",
        explanation: "Como os moradores tinham que desocupar suas casas às pressas para abrigar a comitiva real, ironizavam a sigla P.R. como 'Ponha-se na Rua'."
      },
      {
        question: "Quais importantes instituições e melhoramentos públicos foram criados por D. João após a instalação da corte no Rio de Janeiro?",
        options: [
          "Banco do Brasil, Real Academia Militar, Jardim Botânico, Real Fábrica de Pólvora e Imprensa Régia",
          "Congresso Nacional, Petrobras e Usina de Itaipu",
          "Assembleia Constituinte de Versalhes e Bastilha",
          "Universidade Federal de Vila Rica e MASP"
        ],
        correctAnswer: "Banco do Brasil, Real Academia Militar, Jardim Botânico, Real Fábrica de Pólvora e Imprensa Régia",
        explanation: "D. João modernizou o Rio de Janeiro com a fundação do Banco do Brasil (1808), Jardim Botânico (1808), Real Academia Militar (1810), etc."
      },
      {
        question: "Pelo Tratado de Aliança e Amizade, de Comércio e Navegação (1810), qual era a taxa alfandegária cobrada sobre os produtos ingleses importados pelo Brasil?",
        options: [
          "15% para produtos ingleses (inferior aos 16% dos portugueses e 24% de outros países)",
          "50% para produtos ingleses e 0% para portugueses",
          "24% para todos os países sem nenhuma distinção",
          "Isenção total de 0% apenas para a Espanha"
        ],
        correctAnswer: "15% para produtos ingleses (inferior aos 16% dos portugueses e 24% de outros países)",
        explanation: "A Inglaterra obteve privilégios aduaneiros inéditos (15%), pagando tarifas menores que os próprios produtos da metrópole portuguesa (16%)."
      },
      {
        question: "O que significava a cláusula de 'extraterritorialidade' concedida aos ingleses no Tratado de 1810?",
        options: [
          "Ingleses que cometessem crimes em terras portuguesas seriam julgados por magistrados ingleses segundo as leis da Inglaterra",
          "Ingleses eram obrigados a se converter ao catolicismo",
          "Ingleses não podiam desembarcar em portos brasileiros",
          "Ingleses perderiam suas propriedades caso viajassem para o Brasil"
        ],
        correctAnswer: "Ingleses que cometessem crimes em terras portuguesas seriam julgados por magistrados ingleses segundo as leis da Inglaterra",
        explanation: "A extraterritorialidade dava aos súditos britânicos o privilégio de julgamento por juízes ingleses conforme a legislação britânica."
      },
      {
        question: "O que ocorreu em 1815 que fez o Brasil deixar juridicamente a condição de colônia?",
        options: [
          "O Brasil foi elevado à categoria de Reino Unido a Portugal e Algarves",
          "Foi proclamada a primeira República Federalista do Brasil",
          "D. Pedro I assinou a Lei Áurea",
          "A capital foi transferida de volta para Salvador"
        ],
        correctAnswer: "O Brasil foi elevado à categoria de Reino Unido a Portugal e Algarves",
        explanation: "Em 1815, com o fim das guerras napoleônicas, o Brasil passou a integrar o Reino Unido de Portugal, Brasil e Algarves."
      },
      {
        question: "Qual movimento ocorrido em Portugal em 1820 exigiu a volta de D. João VI e a elaboração de uma constituição, ameaçando recolonizar o Brasil?",
        options: [
          "Revolução Liberal do Porto",
          "Revolução dos Cravos",
          "Revolução Francesa de 1789",
          "Inconfidência Mineira"
        ],
        correctAnswer: "Revolução Liberal do Porto",
        explanation: "A Revolução Liberal do Porto (1820) forçou o retorno do rei D. João VI e acelerou a marcha da independência brasileira sob liderança de D. Pedro I."
      },

      // --- BLOCO B: INCONFIDÊNCIA MINEIRA (1789) ---
      {
        question: "A partir de 1760, qual fator econômico agravou a tensão entre a Coroa Portuguesa e a Capitania de Minas Gerais?",
        options: [
          "A queda acentuada na produção anual de ouro mantendo-se a cobrança abusiva do quinto e tributos",
          "A descoberta de petróleo no litoral fluminense",
          "A proibição do plantio de café em São Paulo",
          "A invasão de tropas inglesas em Ouro Preto"
        ],
        correctAnswer: "A queda acentuada na produção anual de ouro mantendo-se a cobrança abusiva do quinto e tributos",
        explanation: "Com o esgotamento das jazidas de ouro, os colonos não conseguiam bater a cota fixada por Portugal, gerando endividamento e revolta."
      },
      {
        question: "O que era a 'derrama' na capitania de Minas Gerais?",
        options: [
          "A cobrança forçada pelas armas para atingir a cota anual de 100 arrobas (1500 kg) de ouro devida à Coroa",
          "Uma festa religiosa tradicional realizada na Semana Santa",
          "O desvio legal de diamantes para a Espanha",
          "A libertação imediata de todos os escravizados das minas"
        ],
        correctAnswer: "A cobrança forçada pelas armas para atingir a cota anual de 100 arrobas (1500 kg) de ouro devida à Coroa",
        explanation: "A derrama era a execução armada e confisco de bens da população caso o volume do quinto não alcançasse 100 arrobas anuais."
      },
      {
        question: "Quais ideias e acontecimentos externos influenciaram diretamente os inconfidentes mineiros em 1789?",
        options: [
          "O Iluminismo europeu (liberdade e soberania popular) e a Independência dos Estados Unidos (1776)",
          "O Socialismo Científico e a Revolução Russa",
          "A Guerra do Paraguai e a Revolução Industrial Alemã",
          "O Tratado de Madri e a União Ibérica"
        ],
        correctAnswer: "O Iluminismo europeu (liberdade e soberania popular) e a Independência dos Estados Unidos (1776)",
        explanation: "Estudantes brasileiros formados na Europa trouxeram os ideais iluministas e a inspiração da independência americana."
      },
      {
        question: "Qual era a frase latina escrita na bandeira idealizada pelos inconfidentes mineiros?",
        options: [
          "Libertas quae sera tamen (Liberdade ainda que tardia)",
          "Ordem e Progresso",
          "In hoc signo vinces",
          "Non ducor, duco"
        ],
        correctAnswer: "Libertas quae sera tamen (Liberdade ainda que tardia)",
        explanation: "'Libertas quae sera tamen' tornou-se o célebre lema dos inconfidentes e está até hoje na bandeira de Minas Gerais."
      },
      {
        question: "Por que a Inconfidência Mineira NÃO incluiu a proposta de abolição da escravidão em seu programa?",
        options: [
          "Porque os líderes faziam parte das elites locais e eram proprietários de pessoas escravizadas",
          "Porque a escravidão já havia sido extinta em Minas Gerais em 1750",
          "Porque a Coroa Portuguesa já proibia escravizados nas minas",
          "Porque a Igreja Católica de Vila Rica proibiu qualquer discussão sobre o tema"
        ],
        correctAnswer: "Porque os líderes faziam parte das elites locais e eram proprietários de pessoas escravizadas",
        explanation: "Composto majoritariamente por membros da elite agrária, mineradora e letrada, o movimento não tinha interesse na abolição."
      },
      {
        question: "Quem foi o delator da Inconfidência Mineira que traiu seus companheiros denunciando o plano ao governador Visconde de Barbacena em troca do perdão de dívidas?",
        options: [
          "Joaquim Silvério dos Reis",
          "Tomás Antônio Gonzaga",
          "Cláudio Manuel da Costa",
          "Alvarenga Peixoto"
        ],
        correctAnswer: "Joaquim Silvério dos Reis",
        explanation: "Joaquim Silvério dos Reis delatou a conspiração ao Visconde de Barbacena para obter perdão de suas vultosas dívidas fiscais, pensão e títulos."
      },
      {
        question: "Qual dos inconfidentes foi o único condenado à morte por enforcamento e esquartejamento, tornando-se mártir cívico do movimento?",
        options: [
          "Joaquim José da Silva Xavier (Tiradentes)",
          "Cipriano Barata",
          "José Bonifácio de Andrada e Silva",
          "Luís XVI"
        ],
        correctAnswer: "Joaquim José da Silva Xavier (Tiradentes)",
        explanation: "Tiradentes assumiu a culpa pela conspiração e foi o único executado e esquartejado no Rio de Janeiro em 21 de abril de 1792."
      },
      {
        question: "Qual era a composição social preponderante entre a liderança da Inconfidência Mineira?",
        options: [
          "Elite colonial: grandes proprietários, mineradores, magistrados, poetas, padres e letrados",
          "Apenas escravos libertos e artesãos pobres",
          "Trabalhadores rurais sem terra e índios catequizados",
          "Soldados rasos e alfaiates de baixa renda exclusivamente"
        ],
        correctAnswer: "Elite colonial: grandes proprietários, mineradores, magistrados, poetas, padres e letrados",
        explanation: "A Inconfidência Mineira foi uma conspiração de caráter elitista, organizada por letrados, magistrados e ricos devedores da Coroa."
      },

      // --- BLOCO C: CONJURAÇÃO BAIANA (1798) ---
      {
        question: "Em que ano e cidade ocorreu a Conjuração Baiana, também conhecida como Revolta dos Alfaiates?",
        options: [
          "Em 1798, na cidade de Salvador (Bahia)",
          "Em 1789, em Vila Rica (Minas Gerais)",
          "Em 1808, no Rio de Janeiro",
          "Em 1822, em São Paulo"
        ],
        correctAnswer: "Em 1798, na cidade de Salvador (Bahia)",
        explanation: "A Conjuração Baiana ocorreu em Salvador em 1798, mobilizando setores populares da antiga capital colonial."
      },
      {
        question: "Diferente da Inconfidência Mineira, a Conjuração Baiana destacou-se por ter quais reivindicações sociais profundas?",
        options: [
          "Fim da escravidão, igualdade social e racial, liberdade e melhoria nas condições de vida da população pobre",
          "Manutenção rigorosa dos privilégios da nobreza portuguesa",
          "Cobrança obrigatória da derrama sobre o ouro",
          "Submissão total da Bahia ao rei da Inglaterra"
        ],
        correctAnswer: "Fim da escravidão, igualdade social e racial, liberdade e melhoria nas condições de vida da população pobre",
        explanation: "A Conjuração Baiana foi um movimento de base popular com forte pauta abolicionista, republicana e antirracista."
      },
      {
        question: "Por que a Conjuração Baiana também ficou historicamente conhecida como 'Revolta dos Alfaiates'?",
        options: [
          "Por conta da profissão exercida por importantes líderes do movimento, como João de Deus e Manuel Faustino",
          "Porque os revoltosos teciam uniformes militares para Napoleão Bonaparte",
          "Porque a revolta começou dentro de uma tecelagem inglesa",
          "Porque todos os participantes eram comerciantes de tecidos finos importados"
        ],
        correctAnswer: "Por conta da profissão exercida por importantes líderes do movimento, como João de Deus e Manuel Faustino",
        explanation: "Muitos dos principais líderes e artesãos envolvidos exerciam o ofício de alfaiate em Salvador."
      },
      {
        question: "Qual levante externo vitorioso serviu de forte inspiração para os participantes da Conjuração Baiana?",
        options: [
          "A Revolução e Independência do Haiti (levante vitorioso de escravizados contra os franceses)",
          "A Revolução Meiji no Japão",
          "A Unificação da Itália",
          "A Guerra dos Cem Anos"
        ],
        correctAnswer: "A Revolução e Independência do Haiti (levante vitorioso de escravizados contra os franceses)",
        explanation: "A revolta de escravizados no Haiti (1791) inspirou os negros e pardos baianos a lutarem pelo fim do cativeiro e pela igualdade."
      },
      {
        question: "Qual médico e político baiano foi responsável por redigir e confeccionar panfletos revolucionários colados nas portas das igrejas de Salvador?",
        options: ["Cipriano Barata", "Tiradentes", "Joaquim Silvério dos Reis", "Tomás Antônio Gonzaga"],
        correctAnswer: "Cipriano Barata",
        explanation: "Cipriano Barata redigiu manifestos e panfletos republicanos afixados nas igrejas e locais públicos da capital baiana."
      },
      {
        question: "Como o governo colonial baiano agiu contra os líderes da Conjuração Baiana?",
        options: [
          "Prendeu os panfleteiros antes do ato concreto e condenou os quatro líderes populares à forca e ao esquartejamento público em 1799",
          "Aceitou todas as propostas e declarou a república na Bahia",
          "Permitiu que todos fugissem para a Inglaterra sem punição",
          "Ofereceu cargos de ministros a todos os alfaiates"
        ],
        correctAnswer: "Prendeu os panfleteiros antes do ato concreto e condenou os quatro líderes populares à forca e ao esquartejamento público em 1799",
        explanation: "A Coroa agiu com violência desmedida contra os líderes negros e pardos pobres, enforcando-os na Praça da Piedade para intimidar a população."
      },

      // --- BLOCO D: O PERÍODO NAPOLEÔNICO (1799-1815) ---
      {
        question: "Quais são as três fases cronológicas em que se divide o Período Napoleônico?",
        options: [
          "Consulado (1799-1804), Império Napoleônico (1804-1815) e Governo dos Cem Dias (1815)",
          "Monarquia Absoluta, República Jacobina e Diretório",
          "Primeiro Reinado, Período Regencial e Segundo Reinado",
          "Idade Antiga, Média e Moderna"
        ],
        correctAnswer: "Consulado (1799-1804), Império Napoleônico (1804-1815) e Governo dos Cem Dias (1815)",
        explanation: "O Período Napoleônico se organiza em Consulado (1799-1804), Império (1804-1815) e o Governo dos Cem Dias (1815)."
      },
      {
        question: "Qual acontecimento em 1799 encerrou o Diretório da Revolução Francesa e levou Napoleão Bonaparte ao poder?",
        options: [
          "Golpe do 18 de Brumário",
          "Tomada da Bastilha",
          "Batalha de Waterloo",
          "Congresso de Viena"
        ],
        correctAnswer: "Golpe do 18 de Brumário",
        explanation: "No 18 de Brumário (9 de novembro de 1799), a burguesia apoiou Napoleão para estabilizar a França e conter rebeliões."
      },
      {
        question: "Durante a fase do Consulado, quais importantes medidas foram implementadas por Napoleão Bonaparte?",
        options: [
          "Criação do Código Civil, acordo com a Igreja Católica, fim de privilégios da nobreza e reforma agrária",
          "Restauração do absolutismo medieval e queima de todas as leis",
          "Fechamento de todas as universidades francesas",
          "Entrega do governo francês para a rainha da Inglaterra"
        ],
        correctAnswer: "Criação do Código Civil, acordo com a Igreja Católica, fim de privilégios da nobreza e reforma agrária",
        explanation: "Napoleão pacificou as relações com a Igreja, consolidou a igualdade jurídica burguesa no Código Civil e modernizou o Estado."
      },
      {
        question: "Em 1804, Napoleão consolidou ainda mais seu poder com qual ato solene na Catedral de Notre-Dame?",
        options: [
          "Autocoroou-se Imperador dos Franceses",
          "Renunciou ao exército e virou bispo",
          "Restaurou a dinastia de Luís XVI",
          "Proclamou a dissolução da França"
        ],
        correctAnswer: "Autocoroou-se Imperador dos Franceses",
        explanation: "Em 1804, Napoleão coroou a si mesmo e a sua esposa Josefina na presença do Papa Pio VII, inaugurando o Império."
      },
      {
        question: "Qual famosa batalha naval em 1805 impediu a invasão francesa da Inglaterra ao demonstrar a superioridade da marinha britânica?",
        options: ["Batalha de Trafalgar", "Batalha de Waterloo", "Batalha de Leipzig", "Batalha de Valmy"],
        correctAnswer: "Batalha de Trafalgar",
        explanation: "A Marinha Real Britânica, comandada pelo Almirante Horatio Nelson, destruiu a esquadra franco-espanhola na Batalha de Trafalgar."
      },
      {
        question: "Como Napoleão Bonaparte reagiu à incapacidade de invadir a Inglaterra por via marítima?",
        options: [
          "Decretou o Bloqueio Continental para enfraquecer a economia britânica pelo comércio",
          "Assinou um tratado de paz perpétua com Londres",
          "Doou as terras da França para a Espanha",
          "Desistiu do comando militar e exilou-se"
        ],
        correctAnswer: "Decretou o Bloqueio Continental para enfraquecer a economia britânica pelo comércio",
        explanation: "Sem supremacia naval, Napoleão tentou a guerra econômica por meio do Bloqueio Continental (1806)."
      },
      {
        question: "Qual país europeu furou o Bloqueio Continental em 1810, motivando a desastrosa invasão francesa em 1812?",
        options: ["Rússia", "Itália", "Alemanha", "Estados Unidos"],
        correctAnswer: "Rússia",
        explanation: "A Rússia do czar Alexandre I voltou a comercializar com os ingleses, sofrendo a invasão napoleônica de 1812 que dizimou a Grande Armada francesa."
      },
      {
        question: "Após a derrota na Rússia e o colapso de suas forças em 1814, para qual ilha no mar Mediterrâneo Napoleão foi exilado pela primeira vez?",
        options: ["Ilha de Elba", "Ilha de Santa Helena", "Ilha de Madagascar", "Ilha de Marajó"],
        correctAnswer: "Ilha de Elba",
        explanation: "Napoleão abdicou e foi levado para a Ilha de Elba, de onde conseguiu escapar em março de 1815."
      },
      {
        question: "O que caracterizou o chamado 'Governo dos Cem Dias' (março a julho de 1815)?",
        options: [
          "O breve retorno de Napoleão ao poder na França após sua fuga do exílio na Ilha de Elba",
          "O período em que D. João VI governou Salvador antes de ir ao Rio",
          "O tempo de duração do julgamento dos inconfidentes mineiros",
          "A duração do Bloqueio Continental"
        ],
        correctAnswer: "O breve retorno de Napoleão ao poder na França após sua fuga do exílio na Ilha de Elba",
        explanation: "Napoleão reassumiu o trono francês por cerca de cem dias até sua derrota final."
      },
      {
        question: "Em qual célebre batalha militar de 1815 Napoleão foi definitivamente derrotado pelas forças aliadas comandadas pelos ingleses?",
        options: ["Batalha de Waterloo", "Batalha de Trafalgar", "Batalha de Stalingrado", "Batalha de Guararapes"],
        correctAnswer: "Batalha de Waterloo",
        explanation: "Na Batalha de Waterloo (na atual Bélgica), as forças do Duque de Wellington derrotaram de vez as tropas de Napoleão."
      },
      {
        question: "Para onde Napoleão foi enviado após a derrota em Waterloo, onde permaneceu preso até falecer em 1821?",
        options: [
          "Ilha de Santa Helena (no Oceano Atlântico Sul)",
          "Ilha de Elba (no Mediterrâneo)",
          "Palácio de Versalhes em Paris",
          "Vila Rica em Minas Gerais"
        ],
        correctAnswer: "Ilha de Santa Helena (no Oceano Atlântico Sul)",
        explanation: "Napoleão foi exilado na remota Ilha de Santa Helena, no meio do Atlântico Sul, onde morreu em maio de 1821."
      },
      {
        question: "Qual foi o objetivo principal do Congresso de Viena (1814–1815) organizado pelas potências absolutistas vencedoras?",
        options: [
          "Restaurar o equilíbrio monárquico e conter as transformações revolucionárias na Europa pós-Napoleão",
          "Expandir as leis da Revolução Francesa para a Ásia e África",
          "Apoiar as revoltas republicanas na América Latina",
          "Declarar a independência de todas as colônias portuguesas"
        ],
        correctAnswer: "Restaurar o equilíbrio monárquico e conter as transformações revolucionárias na Europa pós-Napoleão",
        explanation: "O Congresso de Viena buscou restaurar dinastias do Antigo Regime (Princípio da Legitimidade) e restabelecer as fronteiras europeias."
      },
      {
        question: "Quem assumiu o trono francês após a queda de Napoleão, instaurando uma monarquia constitucional?",
        options: ["Luís XVIII", "Luís XVI", "Robespierre", "Dom Pedro I"],
        correctAnswer: "Luís XVIII",
        explanation: "Luís XVIII, irmão de Luís XVI, assumiu o trono sob o modelo de monarquia constitucional limitada."
      }
    ]
  },

  // =========================================================================
  // QUIZ 2: MATEMÁTICA (SISTEMAS, PLANO CARTESIANO E TRIÂNGULOS)
  // =========================================================================
  {
    id: 'matematica-sistemas-triangulos',
    title: 'Matemática: Sistemas de Equações, Plano Cartesiano & Triângulos',
    subject: 'Matemática',
    description: 'Método da Substituição, Método da Adição, Problemas de 1º Grau, Quadrantes e Coordenadas, Classificação de Triângulos e Desigualdade Triangular.',
    icon: 'fa-square-root-variable',
    badgeColor: 'bg-blue-600',
    questions: [
      {
        question: "No Método da Substituição em sistemas do 1º grau, qual é o primeiro passo mais adequado?",
        options: [
          "Isolar na equação a incógnita com coeficiente 1 e sinal positivo",
          "Multiplicar todas as equações por zero",
          "Somar os números sem isolar nenhuma letra",
          "Elevar os dois lados ao cubo"
        ],
        correctAnswer: "Isolar na equação a incógnita com coeficiente 1 e sinal positivo",
        explanation: "Isolar a incógnita multiplicada por 1 (e positiva) simplifica o cálculo e evita frações desnecessárias."
      },
      {
        question: "Na equação 'x + y = 10', se isolarmos a incógnita y, temos:",
        options: ["y = 10 - x", "y = 10 + x", "y = x - 10", "y = 10 / x"],
        correctAnswer: "y = 10 - x",
        explanation: "Passando o +x para o outro lado da igualdade, invertemos a operação: y = 10 - x."
      },
      {
        question: "No Método da Adição, que característica os coeficientes de uma das incógnitas devem ter para serem eliminados?",
        options: [
          "Valores numéricos iguais em módulo e sinais opostos (ex: +1y e -1y)",
          "Ambos serem números pares positivos",
          "Ambos serem iguais a zero",
          "Não possuírem letras juntas"
        ],
        correctAnswer: "Valores numéricos iguais em módulo e sinais opostos (ex: +1y e -1y)",
        explanation: "Para anular uma incógnita na adição membro a membro, os coeficientes devem ser simétricos (opostos)."
      },
      {
        question: "Resolva o sistema { 3x + y = 13 , 2x - y = 2 }. Quais são os valores de x e y?",
        options: ["x = 3 e y = 4", "x = 4 e y = 3", "x = 5 e y = 2", "x = 2 e y = 7"],
        correctAnswer: "x = 3 e y = 4",
        explanation: "Somando: 5x = 15 => x = 3. Substituindo: 2(3) - y = 2 => 6 - y = 2 => y = 4."
      },
      {
        question: "Resolva o sistema { x + 2y = 10 , x - 2y = 2 }. Qual a solução?",
        options: ["x = 6 e y = 2", "x = 4 e y = 3", "x = 2 e y = 6", "x = 8 e y = 1"],
        correctAnswer: "x = 6 e y = 2",
        explanation: "Somando: 2x = 12 => x = 6. Substituindo: 6 + 2y = 10 => 2y = 4 => y = 2."
      },
      {
        question: "Qual o resultado do sistema { 4x + y = 17 , 4x - y = 7 }?",
        options: ["x = 3 e y = 5", "x = 5 e y = 3", "x = 4 e y = 1", "x = 2 e y = 9"],
        correctAnswer: "x = 3 e y = 5",
        explanation: "Somando: 8x = 24 => x = 3. Substituindo: 4(3) + y = 17 => 12 + y = 17 => y = 5."
      },
      {
        question: "Em um cinema, o ingresso de adulto custa R$ 20,00 e o infantil R$ 10,00. Uma família comprou 5 ingressos e gastou R$ 100,00. Quantos ingressos de cada tipo foram comprados?",
        options: [
          "5 ingressos de adulto e 0 infantis",
          "3 ingressos de adulto e 2 infantis",
          "4 ingressos de adulto e 1 infantil",
          "2 ingressos de adulto e 3 infantis"
        ],
        correctAnswer: "5 ingressos de adulto e 0 infantis",
        explanation: "{ x + y = 5 , 20x + 10y = 100 } => 20(5 - y) + 10y = 100 => 100 - 10y = 100 => y = 0 e x = 5."
      },
      {
        question: "A soma de dois números é 18 e a diferença entre eles é 6. Quais são esses números?",
        options: ["12 e 6", "10 e 8", "14 e 4", "15 e 3"],
        correctAnswer: "12 e 6",
        explanation: "{ x + y = 18 , x - y = 6 } => 2x = 24 => x = 12. Substituindo: y = 6."
      },
      {
        question: "No plano cartesiano, como são chamados o eixo horizontal e o vertical, respectivamente?",
        options: [
          "Eixo X (abscissas) e Eixo Y (ordenadas)",
          "Eixo Y (abscissas) e Eixo X (ordenadas)",
          "Eixo linear e Eixo angular",
          "Eixo real e Eixo imaginário"
        ],
        correctAnswer: "Eixo X (abscissas) e Eixo Y (ordenadas)",
        explanation: "Horizontal = Eixo X (abscissas) e Vertical = Eixo Y (ordenadas)."
      },
      {
        question: "Quais são os sinais das coordenadas (x, y) de um ponto no 2º Quadrante?",
        options: ["(–x, +y)", "(+x, +y)", "(–x, –y)", "(+x, –y)"],
        correctAnswer: "(–x, +y)",
        explanation: "No 2º Quadrante (superior esquerdo), o x é negativo e o y é positivo."
      },
      {
        question: "Em qual quadrante está localizado o ponto C(–3, –4)?",
        options: ["3º Quadrante", "1º Quadrante", "2º Quadrante", "4º Quadrante"],
        correctAnswer: "3º Quadrante",
        explanation: "Ambas as coordenadas são negativas (-x, -y), caracterizando o 3º Quadrante."
      },
      {
        question: "Quanto aos lados, como se classifica um triângulo com 3 lados de mesma medida?",
        options: ["Triângulo Equilátero", "Triângulo Isósceles", "Triângulo Escaleno", "Triângulo Retângulo"],
        correctAnswer: "Triângulo Equilátero",
        explanation: "Triângulos equiláteros têm 3 lados congruentes e três ângulos internos de 60°."
      },
      {
        question: "Quanto aos lados, como se classifica um triângulo com medidas 5 cm, 7 cm e 8 cm?",
        options: ["Triângulo Escaleno", "Triângulo Isósceles", "Triângulo Equilátero", "Triângulo Retângulo"],
        correctAnswer: "Triângulo Escaleno",
        explanation: "Como todos os 3 lados têm medidas diferentes, ele é classificado como escaleno."
      },
      {
        question: "Quanto aos ângulos, como se classifica um triângulo que possui um ângulo interno de 90°?",
        options: ["Triângulo Retângulo", "Triângulo Acutângulo", "Triângulo Obtusângulo", "Triângulo Isósceles"],
        correctAnswer: "Triângulo Retângulo",
        explanation: "O triângulo com um ângulo reto (90°) é chamado de triângulo retângulo."
      },
      {
        question: "Qual é a Condição de Existência de um triângulo em relação às medidas dos seus lados?",
        options: [
          "A soma de quaisquer dois lados deve ser sempre MAIOR que o terceiro lado (a + b > c)",
          "A soma de dois lados deve ser igual ao terceiro lado",
          "O produto de todos os lados deve ser 180",
          "O maior lado deve ser o dobro do menor lado"
        ],
        correctAnswer: "A soma de quaisquer dois lados deve ser sempre MAIOR que o terceiro lado (a + b > c)",
        explanation: "A desigualdade triangular exige que a soma de dois lados seja estritamente maior que o terceiro."
      },
      {
        question: "É possível construir um triângulo com segmentos medindo 2 cm, 4 cm e 8 cm?",
        options: [
          "Não, pois 2 + 4 = 6, que é menor que 8 cm",
          "Sim, pois todos são números pares",
          "Sim, será um triângulo escaleno",
          "Sim, pois 8 - 4 = 4"
        ],
        correctAnswer: "Não, pois 2 + 4 = 6, que é menor que 8 cm",
        explanation: "Como 2 + 4 = 6 < 8, a condição de existência é violada e o triângulo não fecha."
      },
      {
        question: "É possível construir um triângulo com lados 3 cm, 7 cm e 10 cm?",
        options: [
          "Não, pois 3 + 7 = 10 (a soma é igual ao terceiro lado, formando uma linha reta)",
          "Sim, pois 3 + 7 é exatamente igual a 10",
          "Sim, será um triângulo retângulo",
          "Sim, pois 10 é maior que 7"
        ],
        correctAnswer: "Não, pois 3 + 7 = 10 (a soma é igual ao terceiro lado, formando uma linha reta)",
        explanation: "A condição exige que seja estritamente maior (>). Se for igual, os pontos ficam alinhados em reta."
      },
      {
        question: "Qual a soma dos ângulos internos de qualquer triângulo?",
        options: ["Sempre 180°", "Sempre 360°", "Sempre 90°", "Varia conforme o tipo de triângulo"],
        correctAnswer: "Sempre 180°",
        explanation: "Na geometria plana, a soma dos 3 ângulos internos de qualquer triângulo é sempre 180°."
      }
    ]
  },

  // =========================================================================
  // QUIZ 3: ARTES (BIOGRAFIAS DE GRANDES ARTISTAS)
  // =========================================================================
  {
    id: 'artes-biografias',
    title: 'Artes: Biografias (Rousseau, Djanira, Heitor dos Prazeres & Vitalino)',
    subject: 'Artes',
    description: 'Trajetórias, obras-primas, técnicas e contextos históricos de Henri Rousseau, Djanira da Motta e Silva, Heitor dos Prazeres e Mestre Vitalino.',
    icon: 'fa-palette',
    badgeColor: 'bg-purple-600',
    questions: [
      {
        question: "A qual movimento artístico pertenceu Henri Rousseau, pintor que iniciou sua carreira tardiamente por volta dos 40 anos?",
        options: [
          "Pós-Impressionismo / Arte Naïf (ingênua)",
          "Barroco Mineiro",
          "Renascimento Italiano",
          "Realismo Clássico"
        ],
        correctAnswer: "Pós-Impressionismo / Arte Naïf (ingênua)",
        explanation: "Rousseau foi rotulado como pintor 'ingênuo' (naïf) e foi pioneiro das vanguardas e do surrealismo."
      },
      {
        question: "De onde vinha a principal inspiração de Henri Rousseau para pintar suas famosas cenas de selva?",
        options: [
          "De suas visitas ao Jardim Botânico de Paris",
          "De uma viagem real ao interior do México",
          "De fotos na floresta Amazônica",
          "De safáris no deserto do Saara"
        ],
        correctAnswer: "De suas visitas ao Jardim Botânico de Paris",
        explanation: "Rousseau nunca esteve no México; inspirava-se na flora e estufas do Jardim Botânico de Paris."
      },
      {
        question: "Qual célebre artista espanhol descobriu uma obra de Rousseau na rua em 1908 e realizou o banquete 'Le Banquet Rousseau'?",
        options: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco de Goya"],
        correctAnswer: "Pablo Picasso",
        explanation: "Picasso comprou a tela de Rousseau na rua e organizou uma célebre celebração em seu ateliê."
      },
      {
        question: "Onde e em que circunstância a brasileira Djanira da Motta e Silva fez seu primeiro desenho artístico no final da década de 1930?",
        options: [
          "Internada com tuberculose no sanatório de São José dos Campos",
          "Durante um curso universitário em Nova Iorque",
          "Trabalhando na colheita de café em Avaré",
          "Em uma viagem para a Europa"
        ],
        correctAnswer: "Internada com tuberculose no sanatório de São José dos Campos",
        explanation: "Djanira descobriu o desenho enquanto se recuperava da tuberculose em São José dos Campos."
      },
      {
        question: "Qual obra histórica de Djanira a tornou a primeira artista latino-americana com tela no Museu do Vaticano?",
        options: ["Sant'Ana de Pé", "Candomblé", "Santa Bárbara", "Pierrô Apaixonado"],
        correctAnswer: "Sant'Ana de Pé",
        explanation: "Com 'Sant'Ana de Pé', Djanira ingressou no acervo permanente do Museu do Vaticano."
      },
      {
        question: "Qual famosa composição carnavalesca Heitor dos Prazeres compôs em parceria com Noel Rosa?",
        options: ["Pierrô Apaixonado", "Não Adianta Chorar", "Aquarela do Brasil", "Pelo Telefone"],
        correctAnswer: "Pierrô Apaixonado",
        explanation: "'Pierrô Apaixonado' é um dos grandes hinos carnavalescos, composto por Heitor e Noel Rosa."
      },
      {
        question: "Qual escola de samba Heitor dos Prazeres ajudou a fundar e deu as cores oficiais azul e branca?",
        options: ["Portela ('Vai Como Pode')", "Estação Primeira de Mangueira", "Império Serrano", "Mocidade Independente"],
        correctAnswer: "Portela ('Vai Como Pode')",
        explanation: "Heitor batizou o pavilhão azul e branco da Portela, campeã em 1929 com sua música 'Não Adianta Chorar'."
      },
      {
        question: "Onde nasceu Mestre Vitalino e com qual material ele se consagrou na arte popular brasileira?",
        options: [
          "Nasceu em Caruaru (PE) e consagrou-se na modelagem de barro / cerâmica figurativa",
          "Nasceu em Salvador (BA) e esculpia mármore importado",
          "Nasceu no Rio de Janeiro e pintava óleo sobre tela",
          "Nasceu em Avaré (SP) e entalhava madeira"
        ],
        correctAnswer: "Nasceu em Caruaru (PE) e consagrou-se na modelagem de barro / cerâmica figurativa",
        explanation: "Vitalino Pereira dos Santos nasceu em Caruaru e tornou-se mestre supremo da cerâmica figurativa em barro."
      },
      {
        question: "De onde Mestre Vitalino retirava o barro para suas esculturas desde a infância?",
        options: [
          "Das margens do Rio Ipojuca",
          "Das praias de Salvador",
          "Do Jardim Botânico de Paris",
          "Das montanhas de Ouro Preto"
        ],
        correctAnswer: "Das margens do Rio Ipojuca",
        explanation: "O barro vinha das margens do Rio Ipojuca, onde Vitalino brincava e moldava animais na infância."
      },
      {
        question: "Em qual famosa instituição paulista Mestre Vitalino teve uma grande exposição em 1949 que expandiu sua fama internacional?",
        options: ["MASP (Museu de Arte de São Paulo)", "Liceu de Artes e Ofícios", "Bienal do Ibirapuera", "Pinacoteca"],
        correctAnswer: "MASP (Museu de Arte de São Paulo)",
        explanation: "A exposição de janeiro de 1949 no MASP consagrou a arte do barro do Alto do Moura no Brasil e no exterior."
      }
    ]
  },

  // =========================================================================
  // QUIZ 4: LÍNGUA PORTUGUESA (2ª PROVA TRIMESTRAL)
  // =========================================================================
  {
    id: 'portugues-2a-prova',
    title: 'Língua Portuguesa: 2ª Prova Trimestral',
    subject: 'Português',
    description: 'Aposto e Vocativo, Adjunto Adverbial, Adjunto Adnominal, Conjunções Coordenativas/Subordinativas e Funções Sintáticas.',
    icon: 'fa-book-open',
    badgeColor: 'bg-emerald-600',
    questions: [
      {
        question: "Qual é a função sintática do termo em destaque: 'Mariana, venha almoçar agora!'?",
        options: ["Vocativo (chamamento isolado por vírgula)", "Aposto explicativo", "Sujeito simples", "Adjunto adnominal"],
        correctAnswer: "Vocativo (chamamento isolado por vírgula)",
        explanation: "'Mariana' é um chamamento direto ao interlocutor, configurando vocativo."
      },
      {
        question: "Na oração 'Brasília, capital do Brasil, foi fundada em 1960', qual é o aposto?",
        options: ["capital do Brasil", "Brasília", "foi fundada", "em 1960"],
        correctAnswer: "capital do Brasil",
        explanation: "'Capital do Brasil' é um aposto explicativo que detalha o substantivo 'Brasília'."
      },
      {
        question: "Qual circunstância adverbial expressa o termo em: 'Os alunos estudaram COM DEDICAÇÃO'?",
        options: ["Adjunto adverbial de modo", "Adjunto adverbial de tempo", "Adjunto adverbial de lugar", "Adjunto adverbial de causa"],
        correctAnswer: "Adjunto adverbial de modo",
        explanation: "'Com dedicação' indica a maneira, o modo como os alunos estudaram."
      },
      {
        question: "Em 'O carpinteiro cortou a madeira COM O SERROTE', o termo é adjunto adverbial de:",
        options: ["Instrumento", "Companhia", "Causa", "Tempo"],
        correctAnswer: "Instrumento",
        explanation: "'Com o serrote' expressa a ferramenta/instrumento utilizado na ação verbal."
      },
      {
        question: "Na oração: 'OS DOIS ALUNOS DEDICADOS venceram o concurso', 'Os', 'dois' e 'dedicados' são:",
        options: ["Adjuntos adnominais do substantivo 'alunos'", "Objetos diretos", "Predicativos do sujeito", "Adjuntos adverbiais"],
        correctAnswer: "Adjuntos adnominais do substantivo 'alunos'",
        explanation: "Artigo, numeral e adjetivo que qualificam ou determinam o núcleo do sujeito são adjuntos adnominais."
      },
      {
        question: "Na frase 'Estudou muito, MAS não passou', a conjunção 'mas' é:",
        options: [
          "Coordenativa adversativa (oposição/contraste)",
          "Coordenativa aditiva (soma)",
          "Coordenativa conclusiva",
          "Subordinativa causal"
        ],
        correctAnswer: "Coordenativa adversativa (oposição/contraste)",
        explanation: "'Mas, porém, contudo, todavia, entretanto' são conjunções adversativas de oposição."
      },
      {
        question: "Em 'SE fizer sol, iremos ao parque', a conjunção 'se' expressa:",
        options: ["Condição (subordinativa condicional)", "Causa", "Tempo", "Consequência"],
        correctAnswer: "Condição (subordinativa condicional)",
        explanation: "'Se' introduz uma condição para a ocorrência do fato da oração principal."
      },
      {
        question: "Na oração 'O cientista apresentou UM PROJETO INOVADOR', qual a função do termo em destaque?",
        options: ["Objeto Direto (sem preposição obrigatória)", "Objeto Indireto", "Complemento Nominal", "Agente da Passiva"],
        correctAnswer: "Objeto Direto (sem preposição obrigatória)",
        explanation: "Completa o sentido de um verbo transitivo direto sem exigência de preposição."
      }
    ]
  },

  // =========================================================================
  // QUIZ 5: INGLÊS (COUNTABLE/UNCOUNTABLE & ADJECTIVES)
  // =========================================================================
  {
    id: 'ingles-countable-adjectives',
    title: 'Inglês: Countable/Uncountable, Quantifiers & Adjectives',
    subject: 'Inglês',
    description: 'Substantivos contáveis e incontáveis, quantificadores (many, much, few, little) e graus dos adjetivos (comparatives & superlatives).',
    icon: 'fa-language',
    badgeColor: 'bg-red-500',
    questions: [
      {
        question: "Which of the following nouns is UNCOUNTABLE in English?",
        options: ["Water", "Apple", "Book", "Chair"],
        correctAnswer: "Water",
        explanation: "Liquids like 'water', 'milk', and abstract concepts are uncountable."
      },
      {
        question: "Which quantifier is used for UNCOUNTABLE nouns in large quantities?",
        options: ["Much", "Many", "Few", "A few"],
        correctAnswer: "Much",
        explanation: "'Much' is used with uncountable nouns (e.g., 'much water'), while 'many' is used with countable plural nouns."
      },
      {
        question: "What is the comparative form of the adjective 'fast'?",
        options: ["Faster than", "More fast than", "The fastest", "Fastest than"],
        correctAnswer: "Faster than",
        explanation: "Short adjectives add '-er' to form the comparative of superiority: 'faster than'."
      },
      {
        question: "What is the irregular comparative and superlative of 'GOOD'?",
        options: ["Better / The best", "Gooder / The goodest", "More good / The most good", "Best / The better"],
        correctAnswer: "Better / The best",
        explanation: "Good is irregular: comparative = 'better than', superlative = 'the best'."
      },
      {
        question: "Complete: 'She has ________ friends in London.' (countable plural noun)",
        options: ["many", "much", "little", "a little"],
        correctAnswer: "many",
        explanation: "'Friends' is a countable plural noun, so we use 'many'."
      }
    ]
  }
];

export function getQuizById(id: string): QuizTopic {
  const found = ALL_QUIZZES.find(q => q.id === id);
  return found || ALL_QUIZZES[0];
}
