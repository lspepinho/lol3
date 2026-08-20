import { QuizTopic } from '../types';

export const ALL_QUIZZES: QuizTopic[] = [
  // =========================================================================
  // QUIZ 1: HISTÓRIA GERAL & DO BRASIL - 50 QUESTÕES (10 POR PDF)
  // =========================================================================
  {
    id: 'historia-50-questoes-pdf',
    title: 'História: 50 Questões Completas (10 por PDF)',
    subject: 'História',
    description: '50 questões baseadas fielmente nos 5 PDFs: Inconfidência Mineira (10), Conjuração Baiana (10), Período Napoleônico (10), Revolução Francesa (10) e Vinda da Família Real/Independência (10).',
    icon: 'fa-landmark',
    badgeColor: 'bg-amber-500',
    questions: [
      // ---------------------------------------------------------------------
      // PDF 1: A INCONFIDÊNCIA MINEIRA / CONJURAÇÃO MINEIRA (1789) - 10 QUESTÕES
      // ---------------------------------------------------------------------
      {
        question: "[Inconfidência Mineira] A partir de 1760, qual fator gerou grande crise e insatisfação na capitania de Minas Gerais em relação a Portugal?",
        options: [
          "A produção de ouro começou a cair anualmente, mas a Coroa continuou cobrando o quinto e exigindo a mesma arrecadação",
          "A descoberta de minas de prata no litoral que esvaziou a capitania de Minas Gerais",
          "A invasão de tropas francesas na cidade de Vila Rica expulsando os mineradores",
          "A decretação do fim imediato da escravidão pela Coroa Portuguesa"
        ],
        correctAnswer: "A produção de ouro começou a cair anualmente, mas a Coroa continuou cobrando o quinto e exigindo a mesma arrecadação",
        explanation: "Mesmo com o esgotamento natural das jazidas auríferas a partir de 1760, o sistema e o valor de cobrança do quinto continuaram inalterados por Portugal."
      },
      {
        question: "[Inconfidência Mineira] O que era a 'derrama' decretada pela Coroa Portuguesa quando a arrecadação anual de ouro não atingia a cota fixada?",
        options: [
          "A cobrança pela força das armas da quantidade que faltava para alcançar 100 arrobas (cerca de 1500 kg) de ouro",
          "Um imposto voluntário pago exclusivamente pelos padres e religiosos da capitania",
          "Uma taxa alfandegária cobrada apenas sobre produtos importados da Inglaterra",
          "A doação forçada de terras férteis dos mineradores para a coroa espanhola"
        ],
        correctAnswer: "A cobrança pela força das armas da quantidade que faltava para alcançar 100 arrobas (cerca de 1500 kg) de ouro",
        explanation: "Quando a entrega de ouro não alcançava 100 arrobas (1500 kg) anuais, a derrama era decretada para confiscar bens da população à força."
      },
      {
        question: "[Inconfidência Mineira] Como o aumento do custo de vida e a redução da extração de ouro afetaram a economia de Minas Gerais?",
        options: [
          "Grande parcela da população se endividou e os mineradores deixaram de pagar comerciantes, agricultores e traficantes de escravizados",
          "Provocou o enriquecimento maciço dos pequenos artesãos e o fechamento do comércio",
          "Fez com que a Inglaterra assumisse o controle direto das minas de ouro",
          "Gerou a substituição do ouro pela exportação imediata de café"
        ],
        correctAnswer: "Grande parcela da população se endividou e os mineradores deixaram de pagar comerciantes, agricultores e traficantes de escravizados",
        explanation: "A crise generalizou dívidas em cascata, afetando mineradores, comerciantes, agricultores e traficantes que vendiam escravizados na região."
      },
      {
        question: "[Inconfidência Mineira] De que forma as ideias do Iluminismo (liberdade e soberania popular) chegaram a Minas Gerais?",
        options: [
          "Foram trazidas por estudantes brasileiros que fizeram cursos superiores na Europa, por meio de livros e pelo exemplo da Independência dos Estados Unidos",
          "Foram transmitidas por cartas oficiais enviadas pelo próprio rei de Portugal",
          "Chegaram por panfletos distribuídos abertamente pelo governador Visconde de Barbacena",
          "Foram trazidas por missionários jesuítas expulsos da Espanha"
        ],
        correctAnswer: "Foram trazidas por estudantes brasileiros que fizeram cursos superiores na Europa, por meio de livros e pelo exemplo da Independência dos Estados Unidos",
        explanation: "Apesar da censura colonial, filhos da elite letrada formados em universidades europeias (como Coimbra) introduziram livros e ideais iluministas e da independência americana."
      },
      {
        question: "[Inconfidência Mineira] Quais eram as principais propostas dos Inconfidentes para a capitania de Minas Gerais?",
        options: [
          "Romper com Portugal, adotar a república, criar indústrias, fundar uma universidade em Vila Rica, acabar com o monopólio comercial e criar o serviço militar obrigatório",
          "Instituir uma monarquia absolutista independente e manter o monopólio comercial com Lisboa",
          "Transferir a capital de Minas Gerais para Salvador e entregar o comércio aos franceses",
          "Declarar a anexação imediata de Minas Gerais ao território dos Estados Unidos"
        ],
        correctAnswer: "Romper com Portugal, adotar a república, criar indústrias, fundar uma universidade em Vila Rica, acabar com o monopólio comercial e criar o serviço militar obrigatório",
        explanation: "Os inconfidentes defendiam independência republicana, fomento fabril, universidade em Vila Rica, fim das amarras mercantis e defesa militar compulsória."
      },
      {
        question: "[Inconfidência Mineira] Qual era a frase latina que estaria na bandeira do novo país projetada pelos inconfidentes e que inspirou a bandeira de Minas Gerais?",
        options: [
          "Libertas quae sera tamen (Liberdade ainda que tardia)",
          "Ordem e Progresso",
          "Independência ou Morte",
          "Vox populi, vox Dei"
        ],
        correctAnswer: "Libertas quae sera tamen (Liberdade ainda que tardia)",
        explanation: "'Libertas quae sera tamen' é o lema histórico dos inconfidentes presente no triângulo da bandeira de Minas Gerais."
      },
      {
        question: "[Inconfidência Mineira] Por que a Inconfidência Mineira NÃO propôs a abolição da escravidão?",
        options: [
          "Porque muitos dos seus idealizadores faziam parte das elites locais e eram proprietários de pessoas escravizadas",
          "Porque a escravidão já havia sido abolida em Minas Gerais antes de 1789",
          "Porque as leis do Iluminismo proibiam a libertação de trabalhadores braçais",
          "Porque a Coroa Portuguesa já havia libertado todos os escravizados das minas"
        ],
        correctAnswer: "Porque muitos dos seus idealizadores faziam parte das elites locais e eram proprietários de pessoas escravizadas",
        explanation: "Composta por latifundiários, mineradores e letrados proprietários de escravizados, a elite conspiradora não teve interesse em incluir o fim da escravidão."
      },
      {
        question: "[Inconfidência Mineira] Quem foi o delator que traiu o movimento ao governador Visconde de Barbacena em troca de perdão de dívidas, pensão vitalícia e títulos?",
        options: [
          "Joaquim Silvério dos Reis",
          "Cláudio Manuel da Costa",
          "Tomás Antônio Gonzaga",
          "Alvarenga Peixoto"
        ],
        correctAnswer: "Joaquim Silvério dos Reis",
        explanation: "Joaquim Silvério dos Reis, coronel e grande devedor da Fazenda Real, delatou os companheiros em troca de vantagens financeiras e perdão de suas dívidas."
      },
      {
        question: "[Inconfidência Mineira] Qual era o perfil social de Joaquim José da Silva Xavier (Tiradentes) e qual foi o seu papel na conspiração?",
        options: [
          "Filho de pequeno fazendeiro, atuou como militar, dentista, tropeiro e comerciante; foi o mais popular na propagação das ideias revolucionárias",
          "Grande fazendeiro e latifundiário rico que financiou a compra de navios de guerra",
          "Juiz e ouvidor de Vila Rica formado em direito na Universidade de Coimbra",
          "Padre e bispo católico que liderava as reuniões secretas na igreja matriz"
        ],
        correctAnswer: "Filho de pequeno fazendeiro, atuou como militar, dentista, tropeiro e comerciante; foi o mais popular na propagação das ideias revolucionárias",
        explanation: "Tiradentes tinha origem modesta em relação à cúpula conspiradora e destacou-se pela intensa agitação e contato direto com a população."
      },
      {
        question: "[Inconfidência Mineira] Em que contexto histórico a memória da Inconfidência e a figura de Tiradentes foram resgatadas como símbolo cívico de mártir da pátria?",
        options: [
          "Após a Proclamação da República (1889), quando o novo governo construiu a imagem de Tiradentes como mártir que deu a vida pela liberdade e pela república",
          "Durante a chegada de D. João VI ao Rio de Janeiro em 1808",
          "Pelo próprio rei de Portugal logo após a execução em 1792",
          "Durante a Revolução Francesa pelos deputados jacobinos em Paris"
        ],
        correctAnswer: "Após a Proclamação da República (1889), quando o novo governo construiu a imagem de Tiradentes como mártir que deu a vida pela liberdade e pela república",
        explanation: "A República de 1889 precisava de heróis cívicos e republicanos, elevando Tiradentes à condição de mártir fundador da nação livre."
      },

      // ---------------------------------------------------------------------
      // PDF 2: A CONJURAÇÃO BAIANA (1798) - 10 QUESTÕES
      // ---------------------------------------------------------------------
      {
        question: "[Conjuração Baiana] Em que cidade e ano ocorreu o movimento conhecido como Conjuração Baiana?",
        options: [
          "Em Salvador (Bahia), no ano de 1798",
          "Em Vila Rica (Minas Gerais), no ano de 1789",
          "No Rio de Janeiro, no ano de 1808",
          "Em Recife (Pernambuco), no ano de 1817"
        ],
        correctAnswer: "Em Salvador (Bahia), no ano de 1798",
        explanation: "A Conjuração Baiana eclodiu em Salvador em 1798, antiga capital colonial do Brasil."
      },
      {
        question: "[Conjuração Baiana] Quais eram os três objetivos fundamentais da Conjuração Baiana?",
        options: [
          "Separar a Bahia de Portugal, abolir a escravatura e atender às reivindicações das camadas pobres",
          "Manter a escravidão, pagar a derrama e jurar lealdade absoluta ao rei de Portugal",
          "Transformar a Bahia em uma colônia francesa subordinada a Napoleão",
          "Expulsar a população pobre de Salvador e proibir o artesanato"
        ],
        correctAnswer: "Separar a Bahia de Portugal, abolir a escravatura e atender às reivindicações das camadas pobres",
        explanation: "Diferente de revoltas elitistas, a Conjuração Baiana tinha forte caráter popular, separatista e antiescravista."
      },
      {
        question: "[Conjuração Baiana] Por qual outro nome a Conjuração Baiana também ficou historicamente conhecida?",
        options: [
          "Revolta dos Alfaiates",
          "Guerra dos Emboabas",
          "Revolta dos Mascates",
          "Noite das Garrafadas"
        ],
        correctAnswer: "Revolta dos Alfaiates",
        explanation: "O movimento ficou conhecido como Revolta dos Alfaiates devido à profissão de destaque de líderes como João de Deus e Manuel Faustino."
      },
      {
        question: "[Conjuração Baiana] Qual importante acontecimento internacional exerceu forte influência sobre os rebeldes baianos?",
        options: [
          "A Independência do Haiti, onde escravizados se organizaram e venceram os colonizadores franceses",
          "A Unificação da Alemanha sob liderança prussiana",
          "A Revolução Industrial inglesa e a invenção da máquina a vapor",
          "A Guerra do Paraguai no Cone Sul"
        ],
        correctAnswer: "A Independência do Haiti, onde escravizados se organizaram e venceram os colonizadores franceses",
        explanation: "O levante bem-sucedido de negros escravizados no Haiti inspirou diretamente o desejo de liberdade e igualdade racial em Salvador."
      },
      {
        question: "[Conjuração Baiana] Qual era o contexto socioeconômico de Salvador no final do século XVIII que motivou a revolta?",
        options: [
          "Uma grave crise social e econômica marcada por fome, miséria e carestia de alimentos",
          "Um período de riqueza sem precedentes gerado pela descoberta de diamantes",
          "Uma época de paz e fartura com distribuição gratuita de trigo pela Coroa",
          "O pleno emprego e a isenção de impostos concedida a todos os habitantes"
        ],
        correctAnswer: "Uma grave crise social e econômica marcada por fome, miséria e carestia de alimentos",
        explanation: "Após a transferência da capital para o RJ (1763), Salvador enfrentou estagnação, escassez de alimentos e inflação galopante."
      },
      {
        question: "[Conjuração Baiana] Quais segmentos sociais formavam a base da liderança da Conjuração Baiana?",
        options: [
          "Classes sem destaque na sociedade: alfaiates, soldados de baixa patente, escravizados libertos e brancos pobres",
          "Grandes latifundiários e donos de engenhos de açúcar",
          "Altos desembargadores e membros da nobreza portuguesa",
          "Bispos da Igreja Católica e oficiais generais da cavalaria"
        ],
        correctAnswer: "Classes sem destaque na sociedade: alfaiates, soldados de baixa patente, escravizados libertos e brancos pobres",
        explanation: "A Conjuração Baiana diferenciou-se por sua liderança eminentemente popular, mestiça e trabalhadora."
      },
      {
        question: "[Conjuração Baiana] Qual médico e político baiano destacou-se pela confecção de panfletos revolucionários colados nas portas das igrejas?",
        options: [
          "Cipriano Barata",
          "Tiradentes",
          "Joaquim Silvério dos Reis",
          "Visconde de Barbacena"
        ],
        correctAnswer: "Cipriano Barata",
        explanation: "O médico e intelectual iluminista Cipriano Barata redigia boletins e manifestos sediciosos espalhados pela cidade."
      },
      {
        question: "[Conjuração Baiana] O que ocorreu no dia 12 de agosto de 1798 que impediu a deflagração armada da revolta?",
        options: [
          "Tropas governamentais prenderam integrantes que estavam distribuindo folhetos, e as delatações subsequentes desarticularam o movimento antes do início",
          "Os conspiradores fugiram em navios ingleses em direção à Europa",
          "O governador de Salvador aceitou todas as reivindicações dos alfaiates pacificamente",
          "Um terremoto destruiu as fortificações e adiou o confronto"
        ],
        correctAnswer: "Tropas governamentais prenderam integrantes que estavam distribuindo folhetos, e as delatações subsequentes desarticularam o movimento antes do início",
        explanation: "As prisões flagrantes durante a panfletagem levaram à prisão dos demais conspiradores antes de qualquer combate armado."
      },
      {
        question: "[Conjuração Baiana] Qual foi a punição imposta pela Coroa aos líderes populares da revolta julgados em 1799?",
        options: [
          "Foram condenados à morte, enforcados em praça pública e esquartejados como forma de intimidação",
          "Receberam apenas advertências verbais e continuaram trabalhando em suas alfaiatarias",
          "Foram nomeados para altos cargos públicos em Portugal",
          "Foram transferidos como diplomatas para a França revolucionária"
        ],
        correctAnswer: "Foram condenados à morte, enforcados em praça pública e esquartejados como forma de intimidação",
        explanation: "A Coroa puniu com rigor exemplar os líderes negros e populares (Lucas Dantas, Manuel Faustino, Luiz Gonzaga e João de Deus), executando-os e esquartejando-os."
      },
      {
        question: "[Conjuração Baiana] O que a violenta repressão portuguesa demonstrou e qual legado a Conjuração Baiana deixou?",
        options: [
          "Demonstrou a intolerância da Coroa contra contestações ao pacto colonial, mas suas ideias lançaram sementes para futuras lutas separatistas e abolicionistas",
          "Conseguiu eliminar para sempre qualquer desejo de independência no território brasileiro",
          "Provocou a renúncia imediata do príncipe regente de Portugal",
          "Transformou Salvador em sede monárquica do império lusitano"
        ],
        correctAnswer: "Demonstrou a intolerância da Coroa contra contestações ao pacto colonial, mas suas ideias lançaram sementes para futuras lutas separatistas e abolicionistas",
        explanation: "Apesar da brutalidade da Coroa, a Conjuração Baiana sedimentou os ideais republicanos e de igualdade racial no Brasil."
      },

      // ---------------------------------------------------------------------
      // PDF 3: O PERÍODO NAPOLEÔNICO (1799–1815) - 10 QUESTÕES
      // ---------------------------------------------------------------------
      {
        question: "[Período Napoleônico] Quais são as três fases cronológicas do Período Napoleônico?",
        options: [
          "Consulado (1799-1804), Império Napoleônico (1804-1815) e Governo dos Cem Dias (1815)",
          "Monarquia Constitucional, Convenção Nacional e Diretório",
          "República Jacobina, Terror e Reação Termidoriana",
          "Primeiro Reinado, Regência Trina e Segundo Reinado"
        ],
        correctAnswer: "Consulado (1799-1804), Império Napoleônico (1804-1815) e Governo dos Cem Dias (1815)",
        explanation: "O Período Napoleônico é didaticamente dividido em Consulado (1799-1804), Império (1804-1815) e Governo dos Cem Dias (1815)."
      },
      {
        question: "[Período Napoleônico] Como teve início o período do Consulado em 1799?",
        options: [
          "Com o Golpe de 18 de Brumário, quando a França passou a ser governada por três cônsules, sendo Napoleão o primeiro-cônsul e o mais poderoso",
          "Com a invasão da França por tropas absolutistas da Prússia e Rússia",
          "Com a coroação pacífica de Napoleão pelo Papa em Roma",
          "Com uma votação unânime da população camponesa em praça pública"
        ],
        correctAnswer: "Com o Golpe de 18 de Brumário, quando a França passou a ser governada por três cônsules, sendo Napoleão o primeiro-cônsul e o mais poderoso",
        explanation: "Em 1799, com o Golpe de 18 de Brumário, Napoleão derrubou o Diretório e assumiu como Primeiro-Cônsul."
      },
      {
        question: "[Período Napoleônico] Quais importantes medidas internas foram tomadas por Napoleão durante a fase do Consulado?",
        options: [
          "Acordo com a Igreja Católica, criação do novo Código Civil, fim de privilégios da nobreza e distribuição de terras por reforma agrária (com censura à imprensa)",
          "Restauração do absolutismo dos Bourbons e devolução de terras à antiga nobreza feudal",
          "Abolição de todas as leis escritas e extinção da moeda francesa",
          "Proibição do comércio marítimo e fechamento de todas as escolas da França"
        ],
        correctAnswer: "Acordo com a Igreja Católica, criação do novo Código Civil, fim de privilégios da nobreza e distribuição de terras por reforma agrária (com censura à imprensa)",
        explanation: "O Consulado consolidou conquistas burguesas (Código Napoleônico, paz com a Igreja, reforma agrária), acompanhado do controle da imprensa e da oposição."
      },
      {
        question: "[Período Napoleônico] O que ocorreu em 1804 que deu início à fase do Império Napoleônico?",
        options: [
          "Napoleão deixou de ser cônsul vitalício e se auto-coroou Imperador dos Franceses, ampliando expressivamente seus poderes",
          "A monarquia absolutista foi restaurada com a posse de Luís XVIII",
          "A França perdeu a guerra para a Espanha e foi desmembrada",
          "O parlamento francês dissolveu o exército e aboliu o cargo de chefe de Estado"
        ],
        correctAnswer: "Napoleão deixou de ser cônsul vitalício e se auto-coroou Imperador dos Franceses, ampliando expressivamente seus poderes",
        explanation: "Em 1804, na Catedral de Notre-Dame, Napoleão coroou a si mesmo como imperador, consolidando a fase imperial."
      },
      {
        question: "[Período Napoleônico] O que a França de Napoleão e a Inglaterra disputavam no cenário europeu do início do século XIX?",
        options: [
          "A hegemonia política, militar e econômica na Europa",
          "O monopólio das rotas marítimas para o polo sul",
          "A posse exclusiva das colônias de povoamento na Austrália",
          "A liderança religiosa da Igreja Ortodoxa Russa"
        ],
        correctAnswer: "A hegemonia política, militar e econômica na Europa",
        explanation: "A rivalidade anglo-francesa era uma disputa central pelo controle dos mercados, poder militar e influência geopolítica continental."
      },
      {
        question: "[Período Napoleônico] Por que a Batalha de Trafalgar (1805) foi decisiva nas guerras napoleônicas?",
        options: [
          "Foi a primeira grande derrota de Napoleão, impedindo a invasão da Inglaterra ao comprovar a supremacia da Marinha Real Britânica no mar",
          "Marcou a vitória total da França e a conquista de Londres por terra",
          "Resultou na destruição completa dos navios mercantes dos Estados Unidos",
          "Foi a batalha que colocou fim ao Governo dos Cem Dias"
        ],
        correctAnswer: "Foi a primeira grande derrota de Napoleão, impedindo a invasão da Inglaterra ao comprovar a supremacia da Marinha Real Britânica no mar",
        explanation: "Com a derrota naval em Trafalgar, Napoleão percebeu que não conseguiria derrotar os britânicos militarmente pelo mar."
      },
      {
        question: "[Período Napoleônico] Qual foi o objetivo de Napoleão ao decretar o Bloqueio Continental em 1806?",
        options: [
          "Proibir as nações europeias de comercializarem com o Reino Unido, visando sufocar e arruinar a economia britânica",
          "Impedir a entrada de escravizados africanos no continente europeu",
          "Fechar os portos franceses para a importação de trigo russo",
          "Unificar as moedas de todos os países da Europa sob o franco francês"
        ],
        correctAnswer: "Proibir as nações europeias de comercializarem com o Reino Unido, visando sufocar e arruinar a economia britânica",
        explanation: "O Bloqueio Continental foi uma medida de guerra econômica para enfraquecer o comércio e a indústria da Inglaterra."
      },
      {
        question: "[Período Napoleônico] Por que Napoleão decidiu invadir a Rússia em 1812 e qual foi o resultado dessa campanha militar?",
        options: [
          "Porque a Rússia desobedeceu e furou o Bloqueio Continental em 1810; a invasão resultou na trágica derrota francesa, iniciando a derrocada de Napoleão",
          "Porque a Rússia pretendia invadir Portugal; a França venceu e anexou Moscou permanentemente",
          "Porque a Rússia havia se aliado à Espanha; a invasão terminou com um tratado pacífico de paz",
          "Porque Napoleão queria converter o czar russo ao catolicismo romano"
        ],
        correctAnswer: "Porque a Rússia desobedeceu e furou o Bloqueio Continental em 1810; a invasão resultou na trágica derrota francesa, iniciando a derrocada de Napoleão",
        explanation: "A quebra do bloqueio pelo czar Alexandre I motivou a Campanha da Rússia, na qual o rigoroso inverno e a tática da terra arrasada dizimaram o exército napoleônico."
      },
      {
        question: "[Período Napoleônico] O que caracterizou o Governo dos Cem Dias (março a julho de 1815) e como ele terminou?",
        options: [
          "Napoleão fugiu do exílio na Ilha de Elba, retomou o poder na França por 100 dias e foi derrotado em definitivo na Batalha de Waterloo, sendo exilado em Santa Helena",
          "Foi o período em que a rainha da Inglaterra governou a França provisoriamente",
          "Foi uma trégua de 100 dias assinada entre França, Prússia e Áustria",
          "Foi o governo estabelecido pelos generais russos em Paris"
        ],
        correctAnswer: "Napoleão fugiu do exílio na Ilha de Elba, retomou o poder na França por 100 dias e foi derrotado em definitivo na Batalha de Waterloo, sendo exilado em Santa Helena",
        explanation: "Napoleão escapou de Elba, governou por cerca de 100 dias, foi derrotado pelo Duque de Wellington em Waterloo (1815) e exilado na remota Santa Helena até sua morte em 1821."
      },
      {
        question: "[Período Napoleônico] Qual foi o objetivo do Congresso de Viena (1814–1815) e como a monarquia foi restaurada na França?",
        options: [
          "Colocar fim às mudanças revolucionárias na Europa, restaurar fronteiras e entronizar Luís XVIII sob uma monarquia constitucional limitada",
          "Expandir as leis da Revolução Francesa para todas as monarquias absolutistas",
          "Dividir a Europa em repúblicas populares comandadas por camponeses",
          "Criar uma confederação militar governada pelo irmão de Napoleão"
        ],
        correctAnswer: "Colocar fim às mudanças revolucionárias na Europa, restaurar fronteiras e entronizar Luís XVIII sob uma monarquia constitucional limitada",
        explanation: "O Congresso de Viena buscou restaurar a ordem conservadora na Europa pós-Napoleão, restaurando Luís XVIII na França com poderes limitados por uma constituição."
      },

      // ---------------------------------------------------------------------
      // PDF 4: A REVOLUÇÃO FRANCESA (1789–1799) - 10 QUESTÕES
      // ---------------------------------------------------------------------
      {
        question: "[Revolução Francesa] No final do século XVIII, qual era o quadro socioeconômico e político da França no Antigo Regime?",
        options: [
          "País agrário de herança feudal, nobreza e clero isentos de impostos e donos das terras, camponeses pagando pesados tributos e Monarquia Absolutista sob Luís XVI",
          "País altamente industrializado, com sufrágio universal e igualdade tributária",
          "República democrática parlamentarista com distribuição igualitária de terras",
          "Império comercial comandado por comerciantes e operários fabris"
        ],
        correctAnswer: "País agrário de herança feudal, nobreza e clero isentos de impostos e donos das terras, camponeses pagando pesados tributos e Monarquia Absolutista sob Luís XVI",
        explanation: "A França pré-revolucionária mantinha fortes amarras feudais, privilégios fiscais para os dois primeiros estamentos e absolutismo régio."
      },
      {
        question: "[Revolução Francesa] Como a sociedade francesa pré-revolucionária estava dividida em três estamentos?",
        options: [
          "Primeiro Estado (Clero), Segundo Estado (Nobreza) e Terceiro Estado (Burguesia, camponeses e trabalhadores urbanos)",
          "Primeiro Estado (Rei), Segundo Estado (Exército) e Terceiro Estado (Igreja)",
          "Primeiro Estado (Operários), Segundo Estado (Burgueses) e Terceiro Estado (Senadores)",
          "Primeiro Estado (Ingleses), Segundo Estado (Franceses) e Terceiro Estado (Espanhóis)"
        ],
        correctAnswer: "Primeiro Estado (Clero), Segundo Estado (Nobreza) e Terceiro Estado (Burguesia, camponeses e trabalhadores urbanos)",
        explanation: "A sociedade de ordens era estratificada em 1º Estado (Clero), 2º Estado (Nobreza) e 3º Estado (mais de 95% da população, liderada pela burguesia)."
      },
      {
        question: "[Revolução Francesa] Qual foi o motivo do impasse na Assembleia dos Estados Gerais convocada por Luís XVI em 1789?",
        options: [
          "O Terceiro Estado queria votação individual por representante (cabeça), enquanto o Primeiro e Segundo Estados exigiam votação por Estado",
          "A nobreza exigia pagar o dobro de impostos da burguesia",
          "O clero recusou-se a comparecer à reunião no Palácio de Versalhes",
          "O rei exigia a proclamação imediata da República Francesa"
        ],
        correctAnswer: "O Terceiro Estado queria votação individual por representante (cabeça), enquanto o Primeiro e Segundo Estados exigiam votação por Estado",
        explanation: "Com o voto por Estado, nobreza e clero se uniam (2 a 1) contra o 3º Estado. O voto individual daria a maioria ao 3º Estado com o apoio do baixo clero."
      },
      {
        question: "[Revolução Francesa] O que os representantes do Terceiro Estado fizeram após o impasse dos Estados Gerais no Palácio de Versalhes?",
        options: [
          "Separaram-se, autodeclararam-se Assembleia Nacional Constituinte e juraram ficar reunidos até redigir a Constituição da França",
          "Aceitaram a decisão do rei e retornaram pacificamente às suas casas",
          "Entregaram o governo aos diplomatas da Inglaterra e da Áustria",
          "Coroaram um novo monarca absolutista espanhol"
        ],
        correctAnswer: "Separaram-se, autodeclararam-se Assembleia Nacional Constituinte e juraram ficar reunidos até redigir a Constituição da França",
        explanation: "No célebre Juramento do Jogo da Péla, os deputados do 3º Estado formaram a Assembleia Nacional Constituinte."
      },
      {
        question: "[Revolução Francesa] Qual marco popular ocorrido em 14 de julho de 1789 simbolizou o início da queda do absolutismo na França?",
        options: [
          "A Tomada da Bastilha (prisão e fortaleza símbolo do poder absolutista)",
          "A execução do rei Luís XVI na guilhotina",
          "A assinatura do Código Civil Napoleônico",
          "O Golpe do 18 de Brumário"
        ],
        correctAnswer: "A Tomada da Bastilha (prisão e fortaleza símbolo do poder absolutista)",
        explanation: "A Tomada da Bastilha pelo povo parisiense em 14 de julho de 1789 é o marco fundamental da Revolução Francesa."
      },
      {
        question: "[Revolução Francesa] Quais princípios foram consagrados na 'Declaração dos Direitos do Homem e do Cidadão' aprovada na 1ª fase?",
        options: [
          "Princípios de liberdade, igualdade perante a lei, fraternidade e o direito inviolável à propriedade",
          "O direito divino dos reis absolutistas governarem sem parlamento",
          "A proibição do comércio livre e o confisco compulsório de todas as propriedades",
          "A obrigatoriedade de todos os cidadãos ingressarem nas ordens religiosas"
        ],
        correctAnswer: "Princípios de liberdade, igualdade perante a lei, fraternidade e o direito inviolável à propriedade",
        explanation: "A Declaração universalizou os ideais burgueses e iluministas de liberdade civil, igualdade jurídica e direito de propriedade."
      },
      {
        question: "[Revolução Francesa] O que marcou a 2ª fase da Revolução Francesa (Convenção Nacional, 1792–1795)?",
        options: [
          "Abolição da Monarquia, Proclamação da República, execução de Luís XVI e Maria Antonieta (1793) e o período do Terror Jacobino",
          "A coroação de Napoleão como imperador absolutista",
          "O retorno voluntário dos privilégios da nobreza feudal",
          "A aliança militar com a corte britânica contra os camponeses"
        ],
        correctAnswer: "Abolição da Monarquia, Proclamação da República, execução de Luís XVI e Maria Antonieta (1793) e o período do Terror Jacobino",
        explanation: "A Convenção foi a fase mais radical, com o fim da monarquia, a decapitação dos monarcas e o comitê de salvação pública jacobino."
      },
      {
        question: "[Revolução Francesa] Quais foram as principais medidas sociais aprovadas pelos Jacobinos durante a Convenção Nacional?",
        options: [
          "Voto universal masculino, abolição da escravidão nas colônias francesas e congelamento de preços de produtos básicos",
          "Voto censitário baseado em renda e expulsão dos trabalhadores do exército",
          "Instituição do trabalho forçado para camponeses e aumento de tributos feudais",
          "Fechamento de todos os hospitais e fim da educação pública"
        ],
        correctAnswer: "Voto universal masculino, abolição da escravidão nas colônias francesas e congelamento de preços de produtos básicos",
        explanation: "Os jacobinos implementaram o sufrágio universal masculino, a Lei do Máximo (congelamento de preços) e o fim da escravidão colonial."
      },
      {
        question: "[Revolução Francesa] Como a alta burguesia reorganizou o poder na 3ª fase (Diretório, 1795–1799)?",
        options: [
          "Revogou as medidas radicais jacobinas, restabeleceu o controle moderado e enfrentou instabilidades internas e ameaças externas",
          "Restaurou o Antigo Regime Absolutista com a família real austríaca",
          "Entregou o governo diretamente aos líderes do movimento camponês sans-culottes",
          "Declarou a França uma província do Império Russo"
        ],
        correctAnswer: "Revogou as medidas radicais jacobinas, restabeleceu o controle moderado e enfrentou instabilidades internas e ameaças externas",
        explanation: "O Diretório representou a consolidação da alta burguesia (girondinos), reprimindo a esquerda jacobina e a direita monarquista."
      },
      {
        question: "[Revolução Francesa] Por que a alta burguesia aliou-se ao general Napoleão Bonaparte no Golpe do 18 de Brumário (1799)?",
        options: [
          "Para recuperar a estabilidade e a ordem no país, proteger a riqueza da burguesia e conter as manifestações populares",
          "Para coroar um novo rei absolutista da dinastia dos Bourbons",
          "Para abolir a propriedade privada e instaurar uma sociedade sem classes",
          "Para vender o território francês à Inglaterra"
        ],
        correctAnswer: "Para recuperar a estabilidade e a ordem no país, proteger a riqueza da burguesia e conter as manifestações populares",
        explanation: "Napoleão foi visto pela burguesia como a liderança militar enérgica capaz de garantir a estabilidade das conquistas econômicas da revolução."
      },

      // ---------------------------------------------------------------------
      // PDF 5: CAUSAS E CONSEQUÊNCIAS DA VINDA DA FAMÍLIA REAL & INDEPENDÊNCIA (10 QUESTÕES)
      // ---------------------------------------------------------------------
      {
        question: "[Família Real no Brasil] Por qual razão principal Portugal não aderiu ao Bloqueio Continental decretado por Napoleão em 1806?",
        options: [
          "Devido à longa aliança política e comercial que Portugal mantinha com a Inglaterra",
          "Porque Portugal pretendia formar um império militar conjunto com a França",
          "Porque a economia portuguesa não dependia de nenhum país estrangeiro",
          "Porque a Espanha já havia conquistado e governava Lisboa desde 1750"
        ],
        correctAnswer: "Devido à longa aliança política e comercial que Portugal mantinha com a Inglaterra",
        explanation: "A economia portuguesa era profundamente entrelaçada ao comércio britânico, tornando impossível a adesão ao bloqueio napoleônico."
      },
      {
        question: "[Família Real no Brasil] O que previa o Tratado secreto de Fontainebleau (1807) firmado entre França e Espanha?",
        options: [
          "Permitir que as tropas francesas atravessassem a Espanha para invadir Portugal e partilhar seu território",
          "A união das marinhas portuguesa e francesa contra a Inglaterra",
          "A transferência da corte espanhola para o Rio de Janeiro",
          "A devolução imediata do Brasil ao reino da Espanha"
        ],
        correctAnswer: "Permitir que as tropas francesas atravessassem a Espanha para invadir Portugal e partilhar seu território",
        explanation: "Napoleão negociou com os espanhóis a passagem de suas tropas para ocupar e desmembrar o território lusitano."
      },
      {
        question: "[Família Real no Brasil] O que garantia a convenção secreta de 22 de outubro de 1807 entre D. João e o rei Jorge III da Inglaterra?",
        options: [
          "A transferência segura da sede monárquica de Portugal para o Brasil com a proteção e escolta da marinha britânica",
          "A entrega de todas as reservas de ouro do Brasil para a coroa inglesa",
          "A transformação de Portugal em república subordinada ao parlamento inglês",
          "A cessão de Salvador como território britânico permanente"
        ],
        correctAnswer: "A transferência segura da sede monárquica de Portugal para o Brasil com a proteção e escolta da marinha britânica",
        explanation: "Os ingleses garantiram a escolta da frota real portuguesa através do Atlântico em troca de concessões comerciais futuras."
      },
      {
        question: "[Família Real no Brasil] Quanto tempo durou a viagem marítima até o desembarque em Salvador (BA) em 22 de janeiro de 1808?",
        options: [
          "54 dias de viagem em condições insalubres",
          "10 dias de viagem tranquila",
          "6 meses de navegação",
          "1 ano de viagem"
        ],
        correctAnswer: "54 dias de viagem em condições insalubres",
        explanation: "A travessia durou 54 dias sob forte superlotação, tempestades, escassez de água potável e surto de piolhos."
      },
      {
        question: "[Família Real no Brasil] Qual medida econômica de grande impacto foi assinada pelo Príncipe Regente D. João logo em sua chegada à Bahia em 1808?",
        options: [
          "A Abertura dos Portos às Nações Amigas, que rompeu o pacto colonial e beneficiou diretamente a Inglaterra",
          "A proibição total do comércio com qualquer nação estrangeira",
          "O restabelecimento do monopólio exclusivo dos comerciantes de Lisboa",
          "A criação da moeda única ibérica"
        ],
        correctAnswer: "A Abertura dos Portos às Nações Amigas, que rompeu o pacto colonial e beneficiou diretamente a Inglaterra",
        explanation: "A Carta Régia de Abertura dos Portos de 1808 pôs fim ao exclusivo metropolitano (pacto colonial)."
      },
      {
        question: "[Família Real no Brasil] O que significava a sigla 'P.R.' gravada nas casas requisitadas no Rio de Janeiro e como a população a interpretou ironicamente?",
        options: [
          "Significava 'Príncipe Regente' (para desocupação do imóvel), interpretada pelo povo como 'Ponha-se na Rua'",
          "Significava 'Propriedade Real', interpretada como 'Povo Revolucionário'",
          "Significava 'Pátria Restaurada', interpretada como 'Prédio Renovado'",
          "Significava 'Porto Rico', interpretada como 'Pague Rápido'"
        ],
        correctAnswer: "Significava 'Príncipe Regente' (para desocupação do imóvel), interpretada pelo povo como 'Ponha-se na Rua'",
        explanation: "Com a escassez de moradia para os nobres, as casas marcadas com P.R. tinham que ser evacuadas às pressas pelos moradores cariocas."
      },
      {
        question: "[Família Real no Brasil] Quais importantes instituições e órgãos foram criados por D. João após a transferência da capital para o Rio de Janeiro?",
        options: [
          "Banco do Brasil (1808), Jardim Botânico (1808), Real Fábrica de Pólvora (1808), Real Academia Militar (1810) e Imprensa Régia",
          "Petrobras, Embraer e Companhia Siderúrgica Nacional",
          "Assembleia Constituinte de Versalhes e Tribunal de Haia",
          "Universidade de Coimbra e Casa das Índias"
        ],
        correctAnswer: "Banco do Brasil (1808), Jardim Botânico (1808), Real Fábrica de Pólvora (1808), Real Academia Militar (1810) e Imprensa Régia",
        explanation: "D. João estruturou a nova capital imperial fundando o Banco do Brasil, Jardim Botânico, Imprensa Régia (Gazeta do RJ), Academia Militar, etc."
      },
      {
        question: "[Família Real no Brasil] Pelo Tratado de Aliança e Amizade, de Comércio e Navegação (1810), qual era a taxa alfandegária cobrada sobre os produtos ingleses importados pelo Brasil?",
        options: [
          "15% para produtos ingleses (inferior aos 16% cobrados sobre os produtos portugueses e 24% de outros países)",
          "50% para produtos ingleses e isenção de 0% para produtos portugueses",
          "24% igual para todos os países sem exceções",
          "30% para a Inglaterra e 10% para os Estados Unidos"
        ],
        correctAnswer: "15% para produtos ingleses (inferior aos 16% cobrados sobre os produtos portugueses e 24% de outros países)",
        explanation: "O Tratado de 1810 deu privilégios alfandegários extraordinários à Inglaterra (15%), tornando seus artigos mais baratos até que os de Portugal (16%)."
      },
      {
        question: "[Família Real no Brasil] O que determinou a elevação do Brasil a Reino Unido de Portugal, Brasil e Algarves em 1815?",
        options: [
          "O Brasil deixou formalmente de ser uma colônia, passando a integrar o reino de forma paritária com Portugal",
          "O Brasil foi vendido para os bancos britânicos para pagar despesas de guerra",
          "O território brasileiro foi dividido em dez repúblicas independentes",
          "D. João abdicou do trono e proclamou a república socialista"
        ],
        correctAnswer: "O Brasil deixou formalmente de ser uma colônia, passando a integrar o reino de forma paritária com Portugal",
        explanation: "Com o fim das guerras napoleônicas e o Congresso de Viena, a elevação a Reino Unido legalizou a sede monárquica no Rio de Janeiro."
      },
      {
        question: "[Família Real no Brasil] Como a vinda da Família Real acelerou a Independência do Brasil (1822) e quais foram os traços da Constituição de 1824?",
        options: [
          "Rompeu o pacto colonial, unificou as elites em torno de D. Pedro I contra as tentativas de recolonização das Cortes de Lisboa; a Carta de 1824 manteve a monarquia, a escravidão e o catolicismo oficial",
          "Resultou na criação de uma república federalista que aboliu a escravidão imediatamente em 1822",
          "Fez o Brasil retornar à condição de colônia subordinada ao rei de Napoleão",
          "Extinguiu as Forças Armadas e entregou o poder ao clero católico"
        ],
        correctAnswer: "Rompeu o pacto colonial, unificou as elites em torno de D. Pedro I contra as tentativas de recolonização das Cortes de Lisboa; a Carta de 1824 manteve a monarquia, a escravidão e o catolicismo oficial",
        explanation: "A experiência autonômica desde 1808 impediu a volta ao status colonial após a Revolução do Porto de 1820, culminando no 7 de setembro de 1822 e na Constituição outorgada de 1824."
      }
    ]
  },

  // =========================================================================
  // QUIZ 2: MATEMÁTICA - 30 QUESTÕES FIÉIS AOS 3 PDFs (10 POR PDF)
  // =========================================================================
  {
    id: 'matematica-30-questoes-pdf',
    title: 'Matemática: 30 Questões Féis aos PDFs (10 por PDF)',
    subject: 'Matemática',
    description: '30 questões extraídas dos 3 PDFs: Triângulos (Classificação e Condição de Existência), Plano Cartesiano (Pares Ordenados e Gráficos) e Sistemas de Equações do 1º Grau (Substituição, Adição e Problemas).',
    icon: 'fa-square-root-variable',
    badgeColor: 'bg-blue-600',
    questions: [
      // ---------------------------------------------------------------------
      // PDF 1: CLASSIFICAÇÃO DOS TRIÂNGULOS & CONDIÇÃO DE EXISTÊNCIA (10 QUESTÕES)
      // ---------------------------------------------------------------------
      {
        question: "[Triângulos - Lados] Como é classificado um triângulo que possui todos os três lados com a mesma medida (iguais), como por exemplo 2 cm, 2 cm e 2 cm?",
        options: [
          "Equilátero",
          "Isósceles",
          "Escaleno",
          "Retângulo"
        ],
        correctAnswer: "Equilátero",
        explanation: "Triângulos Equiláteros têm os três lados da mesma medida iguais."
      },
      {
        question: "[Triângulos - Lados] Um triângulo cujos lados medem 10 cm, 10 cm e 12 cm possui exatamente dois lados com a mesma medida. Qual é a sua classificação quanto aos lados?",
        options: [
          "Isósceles",
          "Equilátero",
          "Escaleno",
          "Acutângulo"
        ],
        correctAnswer: "Isósceles",
        explanation: "Triângulos Isósceles têm dois lados da mesma medida iguais."
      },
      {
        question: "[Triângulos - Lados] Um triângulo com lados medindo 5 cm, 7 cm e 8 cm possui todos os três lados com medidas diferentes. Como ele é classificado quanto aos lados?",
        options: [
          "Escaleno",
          "Isósceles",
          "Equilátero",
          "Obtusângulo"
        ],
        correctAnswer: "Escaleno",
        explanation: "Triângulos Escalenos têm os três lados com medidas diferentes."
      },
      {
        question: "[Triângulos - Ângulos] Um triângulo possui ângulos internos medindo 60°, 50° e 70°. Como todos os três ângulos são menores que 90°, qual é a classificação dele quanto aos ângulos?",
        options: [
          "Acutângulo",
          "Retângulo",
          "Obtusângulo",
          "Equilátero"
        ],
        correctAnswer: "Acutângulo",
        explanation: "Triângulos Acutângulos ocorrem quando os três ângulos são menores que 90°."
      },
      {
        question: "[Triângulos - Ângulos] Um triângulo com ângulos de 90°, 45° e 45° possui um ângulo reto (igual a 90°). Como ele é classificado?",
        options: [
          "Retângulo",
          "Acutângulo",
          "Obtusângulo",
          "Escaleno"
        ],
        correctAnswer: "Retângulo",
        explanation: "Triângulos Retângulos ocorrem quando um dos ângulos é igual a 90° (ângulo reto)."
      },
      {
        question: "[Triângulos - Ângulos] Um triângulo apresenta ângulos internos medindo 120°, 35° e 25°. Por possuir um ângulo maior que 90° (obtuso), qual é a sua classificação?",
        options: [
          "Obtusângulo",
          "Acutângulo",
          "Retângulo",
          "Isósceles"
        ],
        correctAnswer: "Obtusângulo",
        explanation: "Triângulo Obtusângulo ocorre quando um dos ângulos é maior que 90°."
      },
      {
        question: "[Condição de Existência] De acordo com a regra fundamental, qual é a condição necessária para que três segmentos possam formar um triângulo?",
        options: [
          "A soma das medidas de dois lados de um triângulo deverá, SEMPRE, ser maior que a medida do terceiro lado",
          "A soma de dois lados deve ser sempre igual ao terceiro lado",
          "O maior lado deve ser igual à multiplicação dos outros dois",
          "A soma dos três lados deve ser sempre igual a 90 cm"
        ],
        correctAnswer: "A soma das medidas de dois lados de um triângulo deverá, SEMPRE, ser maior que a medida do terceiro lado",
        explanation: "Condição de Existência: A soma das medidas de dois lados de um triângulo deverá, SEMPRE, ser maior que a medida do terceiro lado (a + b > c, a + c > b e b + c > a)."
      },
      {
        question: "[Condição de Existência - Exercício do PDF] Verifique se os segmentos de 2 cm, 4 cm e 8 cm conseguem formar um triângulo:",
        options: [
          "Não é possível construir o triângulo, pois 2 + 4 = 6, que é menor que 8",
          "É possível construir um triângulo escaleno",
          "É possível construir um triângulo isósceles",
          "É possível construir um triângulo retângulo"
        ],
        correctAnswer: "Não é possível construir o triângulo, pois 2 + 4 = 6, que é menor que 8",
        explanation: "Pela condição de existência, a soma dos dois menores lados deve superar o maior: 2 + 4 = 6 < 8. Portanto, as pontas não se fecham e NÃO é possível construir o triângulo."
      },
      {
        question: "[Condição de Existência - Exercício do PDF] Analise as medidas 6 cm, 7 cm e 10 cm. É possível construir o triângulo?",
        options: [
          "Sim, é possível construir o triângulo, pois 6 + 7 = 13 > 10 (e é um triângulo escaleno)",
          "Não é possível, pois a soma 6 + 7 é menor que 10",
          "Não é possível, pois só se constroem triângulos com lados pares",
          "Sim, e trata-se de um triângulo equilátero"
        ],
        correctAnswer: "Sim, é possível construir o triângulo, pois 6 + 7 = 13 > 10 (e é um triângulo escaleno)",
        explanation: "Somando os dois menores lados: 6 + 7 = 13 > 10. Como 13 é maior que 10, o triângulo existe perfeitamente."
      },
      {
        question: "[Condição de Existência - Exercício do PDF] Com segmentos medindo 3 cm, 7 cm e 10 cm, conseguimos construir um triângulo?",
        options: [
          "Não é possível construir o triângulo, pois 3 + 7 = 10 (a soma é igual ao terceiro lado, gerando uma linha reta)",
          "Sim, é possível construir um triângulo retângulo",
          "Sim, é possível construir um triângulo isósceles",
          "Sim, é possível construir um triângulo acutângulo"
        ],
        correctAnswer: "Não é possível construir o triângulo, pois 3 + 7 = 10 (a soma é igual ao terceiro lado, gerando uma linha reta)",
        explanation: "A condição exige que a soma seja estritamente MAIOR (>). Quando 3 + 7 = 10, os segmentos deitam sobre o lado de 10 cm sem formar altura."
      },
      // ---------------------------------------------------------------------
      // PDF 2: PLANO CARTESIANO & REPRESENTAÇÃO GRÁFICA DE SISTEMAS (10 QUESTÕES)
      // ---------------------------------------------------------------------
      {
        question: "[Plano Cartesiano] No plano cartesiano formado por duas retas perpendiculares, como são chamados o eixo horizontal e o eixo vertical?",
        options: [
          "Eixo X (eixo das abscissas) e Eixo Y (eixo das ordenadas)",
          "Eixo Y (abscissas) e Eixo X (ordenadas)",
          "Eixo Z (cotas) e Eixo X (alturas)",
          "Eixo dos Senos e Eixo dos Cossenos"
        ],
        correctAnswer: "Eixo X (eixo das abscissas) e Eixo Y (eixo das ordenadas)",
        explanation: "A reta horizontal é chamada de eixo X (ou eixo das abscissas) e a reta vertical é chamada de eixo Y (ou eixo das ordenadas)."
      },
      {
        question: "[Plano Cartesiano] O ponto de cruzamento entre o eixo X e o eixo Y é chamado de origem. Quais são as suas coordenadas?",
        options: [
          "(0, 0)",
          "(1, 1)",
          "(0, 1)",
          "(1, 0)"
        ],
        correctAnswer: "(0, 0)",
        explanation: "Os eixos se cruzam no ponto chamado origem, cujas coordenadas são (0, 0)."
      },
      {
        question: "[Plano Cartesiano] No par ordenado (x, y), qual é o significado de cada elemento?",
        options: [
          "O 'x' indica a posição no eixo horizontal e o 'y' indica a posição no eixo vertical",
          "O 'x' indica a altura vertical e o 'y' indica a largura horizontal",
          "O 'x' é sempre positivo e o 'y' é sempre negativo",
          "O 'x' e o 'y' indicam exclusivamente a área de figuras planas"
        ],
        correctAnswer: "O 'x' indica a posição no eixo horizontal e o 'y' indica a posição no eixo vertical",
        explanation: "No par ordenado (x, y), x é a abscissa (horizontal) e y é a ordenada (vertical)."
      },
      {
        question: "[Quadrantes - PDF] De acordo com os sinais dos eixos, em qual quadrante se localiza um ponto com coordenadas (+x, +y)?",
        options: [
          "1º Quadrante",
          "2º Quadrante",
          "3º Quadrante",
          "4º Quadrante"
        ],
        correctAnswer: "1º Quadrante",
        explanation: "1º Quadrante -> (+x, +y); 2º Quadrante -> (-x, +y); 3º Quadrante -> (-x, -y); 4º Quadrante -> (+x, -y)."
      },
      {
        question: "[Pares Ordenados - PDF] O ponto B(–2, 5) possui abscissa negativa e ordenada positiva (–x, +y). Em qual quadrante ele está localizado?",
        options: [
          "2º Quadrante",
          "1º Quadrante",
          "3º Quadrante",
          "4º Quadrante"
        ],
        correctAnswer: "2º Quadrante",
        explanation: "Pares com x negativo e y positivo (–x, +y), como B(–2, 5), pertencem ao 2º Quadrante."
      },
      {
        question: "[Pares Ordenados - PDF] O ponto C(–3, –4) e o ponto J(–2, –3) possuem ambas as coordenadas negativas (–x, –y). Em qual quadrante eles estão?",
        options: [
          "3º Quadrante",
          "1º Quadrante",
          "2º Quadrante",
          "4º Quadrante"
        ],
        correctAnswer: "3º Quadrante",
        explanation: "O 3º Quadrante é caracterizado por ter ambas as coordenadas negativas: (–x, –y)."
      },
      {
        question: "[Pares Ordenados - PDF] O ponto D(5, –1) e o ponto I(4, –4) possuem abscissa positiva e ordenada negativa (+x, –y). Em qual quadrante eles se encontram?",
        options: [
          "4º Quadrante",
          "1º Quadrante",
          "2º Quadrante",
          "3º Quadrante"
        ],
        correctAnswer: "4º Quadrante",
        explanation: "Pares do tipo (+x, –y) localizam-se no 4º Quadrante."
      },
      {
        question: "[Pares Ordenados - PDF] O ponto E(0, 6) possui coordenada x = 0 e y = 6. Onde esse ponto está localizado no plano?",
        options: [
          "Sobre o eixo vertical Y (eixo das ordenadas)",
          "Sobre o eixo horizontal X (eixo das abscissas)",
          "No centro do 3º Quadrante",
          "No ponto de origem (0, 0)"
        ],
        correctAnswer: "Sobre o eixo vertical Y (eixo das ordenadas)",
        explanation: "Quando a abscissa é zero (x = 0), o ponto fica exatamente sobre o eixo Y (eixo das ordenadas)."
      },
      {
        question: "[Representação Gráfica do PDF] No sistema { x + y = 10 , x - y = 2 }, o ponto de interseção das duas retas no plano cartesiano corresponde à solução do sistema. Qual é esse par ordenado (x, y)?",
        options: [
          "(6, 4)",
          "(5, 5)",
          "(7, 3)",
          "(8, 2)"
        ],
        correctAnswer: "(6, 4)",
        explanation: "Somando as equações: x + x + y - y = 10 + 2 => 2x = 12 => x = 6. Substituindo: 6 + y = 10 => y = 4. O ponto de cruzamento no gráfico é (6, 4)."
      },
      {
        question: "[Representação Gráfica do PDF] No sistema { x + 2y = 5 , x + y = 4 }, subtraindo a segunda equação da primeira, qual é o ponto (x, y) onde as retas se cruzam no plano cartesiano?",
        options: [
          "(3, 1)",
          "(1, 3)",
          "(2, 2)",
          "(4, 0)"
        ],
        correctAnswer: "(3, 1)",
        explanation: "Subtraindo (x + 2y = 5) - (x + y = 4): y = 1. Substituindo na segunda: x + 1 = 4 => x = 3. O ponto de interseção é (3, 1)."
      },

      // ---------------------------------------------------------------------
      // PDF 3: SISTEMA DE EQUAÇÕES DO 1º GRAU - MÉTODOS & PROBLEMAS (10 QUESTÕES)
      // ---------------------------------------------------------------------
      {
        question: "[Conceito de Sistemas] O que é um sistema de equações do 1º grau e qual é o objetivo ao resolvê-lo?",
        options: [
          "É um conjunto de duas ou mais equações com duas ou mais incógnitas (x e y), cujo objetivo é encontrar valores que satisfaçam todas as equações ao mesmo tempo",
          "É uma única equação de segundo grau usada para calcular raízes quadradas",
          "É um método geométrico para calcular o perímetro de círculos",
          "É uma tabela que só aceita números inteiros negativos"
        ],
        correctAnswer: "É um conjunto de duas ou mais equações com duas ou mais incógnitas (x e y), cujo objetivo é encontrar valores que satisfaçam todas as equações ao mesmo tempo",
        explanation: "Definição do PDF: 'Um sistema de equações do 1º grau é um conjunto de duas ou mais equações com duas ou mais incógnitas (geralmente x e y), que devem ser resolvidas ao mesmo tempo para satisfazer todas as equações'."
      },
      {
        question: "[Método da Substituição - Regra do PDF] No método da substituição, qual é o critério ensinado no PDF para escolher qual equação e incógnita isolar primeiro?",
        options: [
          "Sempre escolher e isolar a incógnita que está sendo multiplicada por 1 e cujo sinal for positivo (+1)",
          "Isolar sempre a incógnita com o maior coeficiente numérico negativo",
          "Multiplicar todas as equações por zero antes de começar",
          "Somar todas as incógnitas e eliminar o termo independente"
        ],
        correctAnswer: "Sempre escolher e isolar a incógnita que está sendo multiplicada por 1 e cujo sinal for positivo (+1)",
        explanation: "Conforme o PDF: 'Separar qual equação que vamos trabalhar primeiro: sempre irá separar a incógnita que está sendo multiplicada por 1 e o sinal for positivo'."
      },
      {
        question: "[Método da Substituição - PDF] No sistema { x + y = 12 , 2x - y = 4 }, isolando y na 1ª equação (y = 12 - x) e substituindo na 2ª, quais são os valores de x e y?",
        options: [
          "x = 5,33 e y = 6,67 (ou x = 16/3 e y = 20/3)",
          "x = 4 e y = 8",
          "x = 6 e y = 6",
          "x = 8 e y = 4"
        ],
        correctAnswer: "x = 5,33 e y = 6,67 (ou x = 16/3 e y = 20/3)",
        explanation: "Substituindo na 2ª: 2x - (12 - x) = 4 => 2x - 12 + x = 4 => 3x = 16 => x = 16/3 ≈ 5,33. Então y = 12 - 16/3 = 20/3 ≈ 6,67."
      },
      {
        question: "[Método da Substituição - PDF] Resolva o sistema { 3x + y = 13 , 2x - y = 2 } (Item h do exercício do PDF). Quais são os valores de x e y?",
        options: [
          "x = 3 e y = 4",
          "x = 4 e y = 1",
          "x = 2 e y = 5",
          "x = 5 e y = 2"
        ],
        correctAnswer: "x = 3 e y = 4",
        explanation: "Gabarito oficial do PDF: Somando ou substituindo y = 13 - 3x na 2ª equação: 2x - (13 - 3x) = 2 => 5x = 15 => x = 3. Logo y = 13 - 3(3) = 4."
      },
      {
        question: "[Método da Adição - Regras do PDF] Quais são os dois passos fundamentais para aplicar o Método da Adição ensinados no material?",
        options: [
          "1º: Os números na frente das letras precisam ser iguais; 2º: Os sinais desses números precisam ser diferentes (um positivo e outro negativo)",
          "1º: Todas as letras devem ser multiplicadas por 10; 2º: Os números devem ser sempre pares",
          "1º: Dividir todas as equações por 2; 2º: Somar os termos com sinais iguais",
          "1º: Desenhar o gráfico cartesiano; 2º: Medir a hipotenusa"
        ],
        correctAnswer: "1º: Os números na frente das letras precisam ser iguais; 2º: Os sinais desses números precisam ser diferentes (um positivo e outro negativo)",
        explanation: "Regra do PDF: '1º - Olhe os números que estão na frente das letras. Eles precisam ser iguais. 2º - Observe os sinais desses números. Eles precisam ser diferentes (um positivo e outro negativo)'."
      },
      {
        question: "[Método da Adição - Gabarito do PDF] No sistema { 4x + y = 17 , 4x - y = 7 } (Item j do PDF), somando as equações, quais são os valores da solução?",
        options: [
          "x = 3 e y = 5",
          "x = 4 e y = 1",
          "x = 5 e y = 3",
          "x = 2 e y = 9"
        ],
        correctAnswer: "x = 3 e y = 5",
        explanation: "Gabarito oficial do PDF: Somando: (+y e -y se anulam) 8x = 24 => x = 3. Substituindo: 4(3) + y = 17 => 12 + y = 17 => y = 5."
      },
      {
        question: "[Situação-Problema do Cinema - PDF] Em um cinema, o ingresso de adulto custa R$ 20,00 e o infantil custa R$ 10,00. Uma família comprou ao todo 5 ingressos e gastou R$ 100,00. Quantos ingressos de cada tipo foram comprados?",
        options: [
          "5 ingressos de adulto (x = 5) e 0 ingressos infantis (y = 0)",
          "3 ingressos de adulto e 2 infantis",
          "4 ingressos de adulto e 1 infantil",
          "2 ingressos de adulto e 3 infantis"
        ],
        correctAnswer: "5 ingressos de adulto (x = 5) e 0 ingressos infantis (y = 0)",
        explanation: "Exemplo resolvido no PDF: Sistema { x + y = 5 , 20x + 10y = 100 }. Multiplicando por -10: -10x - 10y = -50. Somando: 10x = 50 => x = 5 adultos. Substituindo: 5 + y = 5 => y = 0 infantis."
      },
      {
        question: "[Situação-Problema do Teatro - PDF] Um ingresso de teatro adulto custa R$ 50,00 e o infantil R$ 30,00. Foram vendidos 8 ingressos no total, arrecadando R$ 310,00. Quantos ingressos de cada tipo foram vendidos?",
        options: [
          "3 ou 4 adultos? O sistema resulta em: 3,5 ingressos de adulto (ou 3 ingressos de R$ 50 + 5 de R$ 30 somam 150+150=300; 4 de R$ 50 + 4 de R$ 30 = 320; matematicamente x = 3,5 e y = 4,5)",
          "5 ingressos de adulto e 3 infantis (R$ 340,00)",
          "2 ingressos de adulto e 6 infantis (R$ 280,00)",
          "6 ingressos de adulto e 2 infantis (R$ 360,00)"
        ],
        correctAnswer: "3 ou 4 adultos? O sistema resulta em: 3,5 ingressos de adulto (ou 3 ingressos de R$ 50 + 5 de R$ 30 somam 150+150=300; 4 de R$ 50 + 4 de R$ 30 = 320; matematicamente x = 3,5 e y = 4,5)",
        explanation: "Sistema do PDF: { a + i = 8 , 50a + 30i = 310 }. Multiplicando a 1ª por -30: -30a - 30i = -240. Somando: 20a = 70 => a = 3,5 e i = 4,5."
      },
      {
        question: "[Situação-Problema do Estacionamento - PDF] Um estacionamento cobra R$ 5,00 por carro (c) e R$ 3,00 por moto (m). Foram cobrados R$ 64,00 por um total de 14 veículos. Quantos carros e quantas motos estacionaram?",
        options: [
          "11 carros e 3 motos",
          "10 carros e 4 motos",
          "8 carros e 6 motos",
          "12 carros e 2 motos"
        ],
        correctAnswer: "11 carros e 3 motos",
        explanation: "Sistema: { c + m = 14 , 5c + 3m = 64 }. Multiplicando a 1ª por -3: -3c - 3m = -42. Somando com a 2ª: 2c = 22 => c = 11 carros. Logo m = 14 - 11 = 3 motos. Verificação: 11*5 + 3*3 = 55 + 9 = R$ 64,00."
      },
      {
        question: "[Situação-Problema da Padaria - PDF] Uma padaria vende pão (p) por R$ 0,50 e café (c) por R$ 2,00. Um cliente comprou 10 itens no total e gastou R$ 9,00. Quantos pães e quantos cafés ele comprou?",
        options: [
          "7 ou 8 pães? A solução exata é: 7,33 pães (ou se a compra fosse R$ 8,00 seriam 8 pães e 2 cafés; matematicamente para R$ 9,00 dá 7,33 pães e 2,67 cafés)",
          "10 pães e 0 cafés (R$ 5,00)",
          "6 pães e 4 cafés (R$ 11,00)",
          "5 pães e 5 cafés (R$ 12,50)"
        ],
        correctAnswer: "7 ou 8 pães? A solução exata é: 7,33 pães (ou se a compra fosse R$ 8,00 seriam 8 pães e 2 cafés; matematicamente para R$ 9,00 dá 7,33 pães e 2,67 cafés)",
        explanation: "Sistema do PDF: { p + c = 10 , 0,50p + 2,00c = 9 }. Multiplicando a 2ª por 2: p + 4c = 18. Subtraindo a 1ª: 3c = 8 => c = 8/3 ≈ 2,67 cafés e p = 22/3 ≈ 7,33 pães."
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
        question: "Onde nasceu Mestre Vitalino e com qual material ele se consagrou na arte popular brasileira?",
        options: [
          "Nasceu em Caruaru (PE) e consagrou-se na modelagem de barro / cerâmica figurativa",
          "Nasceu em Salvador (BA) e esculpia mármore importado",
          "Nasceu no Rio de Janeiro e pintava óleo sobre tela",
          "Nasceu em Avaré (SP) e entalhava madeira"
        ],
        correctAnswer: "Nasceu em Caruaru (PE) e consagrou-se na modelagem de barro / cerâmica figurativa",
        explanation: "Vitalino Pereira dos Santos nasceu em Caruaru e tornou-se mestre supremo da cerâmica figurativa em barro."
      }
    ]
  },

  // =========================================================================
  // QUIZ 4: LÍNGUA PORTUGUESA
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
        question: "Na frase 'Estudou muito, MAS não passou', a conjunção 'mas' é:",
        options: [
          "Coordenativa adversativa (oposição/contraste)",
          "Coordenativa aditiva (soma)",
          "Coordenativa conclusiva",
          "Subordinativa causal"
        ],
        correctAnswer: "Coordenativa adversativa (oposição/contraste)",
        explanation: "'Mas, porém, contudo, todavia, entretanto' são conjunções adversativas de oposição."
      }
    ]
  },

  // =========================================================================
  // QUIZ 5: INGLÊS
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
      }
    ]
  }
];

export function getQuizById(id: string): QuizTopic {
  const found = ALL_QUIZZES.find(q => q.id === id);
  return found || ALL_QUIZZES[0];
}
