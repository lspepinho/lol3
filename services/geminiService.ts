import { Question } from '../types';

const questions: Question[] = [
  // =========================================================================
  // ASSUNTO 1: BASES DA REPRODUÇÃO DOS SERES VIVOS (ASSEXUADA E SEXUADA) - 10 Questões
  // =========================================================================
  {
    question: "Qual é a principal função biológica da reprodução para os seres vivos?",
    options: [
      "Garantir a continuidade da espécie e a sobrevivência ao longo das gerações",
      "Aumentar o tamanho corporal individual de cada organismo adulto",
      "Impedir que ocorram quaisquer mutações genéticas nas populações",
      "Transformar seres unicelulares obrigatoriamente em seres pluricelulares"
    ],
    correctAnswer: "Garantir a continuidade da espécie e a sobrevivência ao longo das gerações",
    explanation: "A reprodução é a função vital pela qual os seres vivos originam novos indivíduos semelhantes a si mesmos, assegurando a perpetuação da espécie."
  },
  {
    question: "O que caracteriza fundamentalmente a reprodução assexuada?",
    options: [
      "Ocorre a partir de um único indivíduo, sem a participação de gametas e sem fecundação",
      "Exige sempre a união de dois indivíduos de sexos diferentes com troca de gametas",
      "Gera descendentes com grande variabilidade genética entre si",
      "Depende exclusivamente da polinização por insetos e aves"
    ],
    correctAnswer: "Ocorre a partir de um único indivíduo, sem a participação de gametas e sem fecundação",
    explanation: "Na reprodução assexuada, apenas um progenitor gera novos indivíduos idênticos a ele (clones), sem o envolvimento de gametas ou fecundação."
  },
  {
    question: "Qual é a principal vantagem evolutiva da reprodução sexuada?",
    options: [
      "Promover a variabilidade genética, aumentando as chances de adaptação e sobrevivência da espécie",
      "Ser um processo extremamente rápido e sem nenhum gasto energético",
      "Permitir a formação de clones idênticos ao organismo original",
      "Dispensar a necessidade de encontro entre células reprodutivas"
    ],
    correctAnswer: "Promover a variabilidade genética, aumentando as chances de adaptação e sobrevivência da espécie",
    explanation: "A reprodução sexuada mistura o material genético dos genitores, gerando descendentes diversos, o que favorece a adaptação frente a mudanças ambientais."
  },
  {
    question: "Como é denominado o tipo de reprodução assexuada em que uma célula se divide em duas menores e idênticas, comum em bactérias e amebas?",
    options: [
      "Divisão binária (ou bipartição)",
      "Brotamento",
      "Esporulação",
      "Enxertia"
    ],
    correctAnswer: "Divisão binária (ou bipartição)",
    explanation: "A bipartição ou divisão binária é a divisão de uma célula-mãe em duas células-filhas geneticamente idênticas, típica de bactérias e protozoários."
  },
  {
    question: "O brotamento é um processo de reprodução assexuada observado com frequência em:",
    options: [
      "Leveduras, hidras e esponjas",
      "Mamíferos e aves",
      "Gimnospermas e angiospermas exclusivamente",
      "Peixes com fecundação externa"
    ],
    correctAnswer: "Leveduras, hidras e esponjas",
    explanation: "No brotamento, formam-se gemas ou brotos no corpo do organismo que crescem e podem se destacar para viver de forma independente, como na hidra e levedura."
  },
  {
    question: "A capacidade de uma planária ou estrela-do-mar originar um novo ser a partir de pedaços de seu corpo é exemplo de:",
    options: [
      "Fragmentação e regeneração",
      "Fecundação interna",
      "Polinização anemófila",
      "Alternância de gerações obrigatória"
    ],
    correctAnswer: "Fragmentação e regeneração",
    explanation: "Na fragmentação/regeneração, pedaços do corpo cortados ou separados reconstroem um indivíduo completo e idêntico ao original."
  },
  {
    question: "Plantas que se reproduzem a partir de tubérculos (batata), estolhos (morangueiro) e rizomas realizam:",
    options: [
      "Propagação vegetativa (multiplicação vegetativa)",
      "Fecundação cruzada externa",
      "Esporulação por meiose floral",
      "Metamorfose incompleta"
    ],
    correctAnswer: "Propagação vegetativa (multiplicação vegetativa)",
    explanation: "A propagação vegetativa é uma forma de reprodução assexuada das plantas a partir de suas partes vegetativas (caules, raízes ou folhas)."
  },
  {
    question: "Por que as briófitas (musgos) e pteridófitas (samambaias) ainda dependem diretamente da água para sua reprodução sexuada?",
    options: [
      "Porque o gameta masculino (anterozoide) é flagelado e precisa nadar até a oosfera",
      "Porque elas não produzem esporos em nenhuma etapa do seu ciclo",
      "Porque suas sementes precisam de água para serem polinizadas pelo vento",
      "Porque os frutos só amadurecem quando submersos em rios e lagos"
    ],
    correctAnswer: "Porque o gameta masculino (anterozoide) é flagelado e precisa nadar até a oosfera",
    explanation: "Em briófitas e pteridófitas, os anterozoides possuem flagelos e nadam através de uma fina camada de água até encontrar o gameta feminino (oosfera)."
  },
  {
    question: "Nas plantas angiospermas, quais estruturas são as grandes responsáveis pela reprodução sexuada e pela atração de polinizadores?",
    options: [
      "As flores (que produzem pólen e óvulos) e os frutos (que protegem as sementes)",
      "Os rizomas subterrâneos e os báculos enrolados",
      "Os soros nas folhas e os prótalos microscópicos",
      "As raízes tuberosas e os caules lenhosos sem folhas"
    ],
    correctAnswer: "As flores (que produzem pólen e óvulos) e os frutos (que protegem as sementes)",
    explanation: "As angiospermas possuem flores com órgãos reprodutivos masculinos e femininos e frutos que protegem e dispersam as sementes fecundadas."
  },
  {
    question: "Quanto ao desenvolvimento embrionário dos animais, os seres vivíparos são aqueles em que:",
    options: [
      "O embrião se desenvolve completamente no interior do corpo materno, recebendo alimento e oxigênio da mãe",
      "O embrião se desenvolve fora do corpo materno dentro de um ovo com casca calcária",
      "O ovo fica retido na fêmea apenas até a eclosão sem nenhuma troca nutritiva com a mãe",
      "O filhote nasce como larva e passa obrigatoriamente por metamorfose completa"
    ],
    correctAnswer: "O embrião se desenvolve completamente no interior do corpo materno, recebendo alimento e oxigênio da mãe",
    explanation: "Nos animais vivíparos (como os seres humanos e a maioria dos mamíferos), os filhotes se desenvolvem no útero materno antes de nascerem formados."
  },

  // =========================================================================
  // ASSUNTO 2: ANATOMIA DOS SISTEMAS GENITAIS MASCULINO E FEMININO - 10 Questões
  // =========================================================================
  {
    question: "Nos homens, qual é a função primordial dos testículos?",
    options: [
      "Produzir os espermatozoides e sintetizar o hormônio testosterona",
      "Armazenar a urina vinda dos rins antes da micção",
      "Produzir o líquido alcalino que neutraliza a acidez da vagina",
      "Promover a ereção através do preenchimento com sangue arterial"
    ],
    correctAnswer: "Produzir os espermatozoides e sintetizar o hormônio testosterona",
    explanation: "Os testículos contêm milhares de túbulos seminíferos onde ocorre a espermatogênese e células que fabricam a testosterona."
  },
  {
    question: "Por que os testículos ficam alojados na bolsa escrotal (escroto) fora da cavidade abdominal?",
    options: [
      "Para manter uma temperatura de 1 ºC a 2 ºC abaixo da corporal, ideal para a formação dos espermatozoides",
      "Para facilitar o transporte direto da urina para o canal deferente",
      "Para proteger a glândula tireoide de possíveis infecções bacterianas",
      "Para evitar o contato da testosterona com a corrente sanguínea"
    ],
    correctAnswer: "Para manter uma temperatura de 1 ºC a 2 ºC abaixo da corporal, ideal para a formação dos espermatozoides",
    explanation: "A espermatogênese humana necessita de uma temperatura ligeiramente menor que a do abdômen, garantida pelo escroto."
  },
  {
    question: "Qual estrutura do sistema genital masculino funciona como centro de armazenamento e maturação dos espermatozoides, onde eles adquirem mobilidade?",
    options: [
      "Epidídimo",
      "Próstata",
      "Vesícula seminal",
      "Uretra"
    ],
    correctAnswer: "Epidídimo",
    explanation: "No epidídimo, os espermatozoides recém-formados amadurecem e ganham a capacidade de movimentar sua cauda para nadar."
  },
  {
    question: "Qual é o trajeto correto percorrido pelos espermatozoides desde a produção até a eliminação pelo pênis?",
    options: [
      "Túbulos seminíferos (testículo) -> Epidídimo -> Ductos Deferentes -> Uretra",
      "Bexiga -> Próstata -> Epidídimo -> Ureter",
      "Vesícula seminal -> Testículo -> Epidídimo -> Uretra",
      "Uretra -> Ductos Deferentes -> Testículos -> Epidídimo"
    ],
    correctAnswer: "Túbulos seminíferos (testículo) -> Epidídimo -> Ductos Deferentes -> Uretra",
    explanation: "Os espermatozoides são formados nos túbulos seminíferos dos testículos, passam pelo epidídimo, seguem pelos ductos deferentes e saem pela uretra."
  },
  {
    question: "Qual é a função conjunta das glândulas seminais e da próstata no homem?",
    options: [
      "Produzir secreções que nutrem os espermatozoides e neutralizam a acidez da uretra e da vagina",
      "Produzir os gametas masculinos e femininos em períodos alternados",
      "Filtrar o sangue para eliminar o excesso de ureia e sais minerais",
      "Estimular diretamente a descamação mensal do endométrio"
    ],
    correctAnswer: "Produzir secreções que nutrem os espermatozoides e neutralizam a acidez da uretra e da vagina",
    explanation: "As vesículas seminais produzem líquidos nutritivos (com açúcares) e a próstata secreta um fluido alcalino leitoso que protege os gametas da acidez."
  },
  {
    question: "Quais são as gônadas femininas responsáveis pela produção de ovócitos (óvulos) e dos hormônios estrógeno e progesterona?",
    options: [
      "Ovários",
      "Tubas uterinas",
      "Útero",
      "Lábios maiores"
    ],
    correctAnswer: "Ovários",
    explanation: "Os ovários são as glândulas sexuais femininas que guardam e amadurecem os folículos com ovócitos e secretam estrógeno e progesterona."
  },
  {
    question: "Em qual órgão do sistema genital feminino ocorre normalmente o encontro do espermatozoide com o óvulo (fecundação)?",
    options: [
      "Tubas uterinas (trompas de Falópio)",
      "Interior da cavidade do útero",
      "Canal vaginal",
      "Bolsa amniótica"
    ],
    correctAnswer: "Tubas uterinas (trompas de Falópio)",
    explanation: "A fertilização do ovócito secundário pelo espermatozoide ocorre no terço inicial das tubas uterinas."
  },
  {
    question: "Como se chama a camada muscular e a parede interna vascularizada do útero onde o embrião se implanta?",
    options: [
      "Endométrio",
      "Miocárdio",
      "Pericárdio",
      "Prótalo"
    ],
    correctAnswer: "Endométrio",
    explanation: "O endométrio é o tecido ricamente vascularizado que reveste o interior do útero, preparando-se a cada ciclo para acolher o embrião."
  },
  {
    question: "O conjunto dos órgãos genitais externos femininos é chamado de:",
    options: [
      "Pudendo feminino (ou Vulva), composto por grandes lábios, pequenos lábios e clitóris",
      "Vagina, composta por endométrio e miométrio",
      "Hímen e colo do útero exclusivamente",
      "Tuba de Falópio e canal cervical"
    ],
    correctAnswer: "Pudendo feminino (ou Vulva), composto por grandes lábios, pequenos lábios e clitóris",
    explanation: "A vulva (ou pudendo feminino) engloba as estruturas externas: lábios maiores e menores, monte pubiano, abertura da uretra, entrada vaginal e clitóris."
  },
  {
    question: "Sobre a uretra na anatomia humana, assinale a relação correta entre homens e mulheres:",
    options: [
      "No homem a uretra transporta tanto urina quanto sêmen; na mulher a uretra é exclusiva do sistema urinário",
      "Na mulher a uretra e a vagina são o mesmo canal de eliminação e cópula",
      "No homem a uretra se conecta apenas à bexiga, não recebendo esperma",
      "Em ambos os sexos a uretra desempenha exatamente as mesmas funções reprodutivas"
    ],
    correctAnswer: "No homem a uretra transporta tanto urina quanto sêmen; na mulher a uretra é exclusiva do sistema urinário",
    explanation: "No homem, a uretra é uma via urogenital compartilhada. Na mulher, o óstio da uretra é totalmente separado da abertura vaginal."
  },

  // =========================================================================
  // ASSUNTO 3: AÇÃO DOS HORMÔNIOS E SISTEMA ENDÓCRINO - 10 Questões
  // =========================================================================
  {
    question: "O que são hormônios e como eles atuam no corpo humano?",
    options: [
      "São mensageiros químicos produzidos por glândulas endócrinas que viajam pelo sangue até células-alvo específicas",
      "São células de defesa produzidas pela medula óssea para combater bactérias",
      "São enzimas digestivas lançadas apenas no estômago através de ductos",
      "São impulsos elétricos transmitidos pelos nervos motores periféricos"
    ],
    correctAnswer: "São mensageiros químicos produzidos por glândulas endócrinas que viajam pelo sangue até células-alvo específicas",
    explanation: "Hormônios são substâncias químicas lançadas na corrente sanguínea que atuam coordenando funções corporais em células que possuem receptores específicos."
  },
  {
    question: "Qual é a diferença fundamental entre glândulas exócrinas e glândulas endócrinas?",
    options: [
      "Exócrinas possuem ductos e liberam substâncias em cavidades ou superfícies; endócrinas não têm ductos e lançam hormônios no sangue",
      "Endócrinas produzem apenas suor e saliva; exócrinas produzem insulina e testosterona",
      "Exócrinas funcionam no cérebro; endócrinas atuam somente no sistema muscular",
      "Não há diferença funcional, sendo apenas sinônimos anatômicos"
    ],
    correctAnswer: "Exócrinas possuem ductos e liberam substâncias em cavidades ou superfícies; endócrinas não têm ductos e lançam hormônios no sangue",
    explanation: "Glândulas exócrinas (como salivares e sudoríparas) usam canais condutores; glândulas endócrinas liberam suas secreções direto no sangue."
  },
  {
    question: "Por que o pâncreas é classificado biologicamente como uma glândula mista (ou anfícrina)?",
    options: [
      "Porque tem função exócrina (libera suco digestivo no intestino) e função endócrina (libera insulina e glucagon no sangue)",
      "Porque produz simultaneamente testosterona e estrógeno em quantidades iguais",
      "Porque fabrica tanto espermatozoides quanto óvulos maduros",
      "Porque atua ao mesmo tempo como músculo voluntário e osso de sustentação"
    ],
    correctAnswer: "Porque tem função exócrina (libera suco digestivo no intestino) e função endócrina (libera insulina e glucagon no sangue)",
    explanation: "O pâncreas produz enzimas digestivas que vão ao tubo digestivo (porção exócrina) e hormônios que controlam a glicose sanguínea (porção endócrina)."
  },
  {
    question: "Como funciona a 'gangorra do açúcar' regulada pela insulina e pelo glucagon?",
    options: [
      "A insulina reduz a glicose no sangue após as refeições, enquanto o glucagon aumenta a glicose no sangue em jejum",
      "A insulina aumenta a taxa de açúcar no sangue e o glucagon elimina o açúcar pelos pulmões",
      "Ambos os hormônios atuam sempre diminuindo a taxa de glicose até zerá-la",
      "O glucagon atua apenas durante o sono profundo destruindo as células do fígado"
    ],
    correctAnswer: "A insulina reduz a glicose no sangue após as refeições, enquanto o glucagon aumenta a glicose no sangue em jejum",
    explanation: "A insulina facilita a entrada de glicose nas células baixando a glicemia; em jejum, o glucagon estimula o fígado a liberar glicose no sangue."
  },
  {
    question: "O conceito de homeostase refere-se a:",
    options: [
      "A capacidade do organismo de manter o equilíbrio e a estabilidade do seu meio interno",
      "O aumento contínuo da temperatura corporal durante a prática esportiva",
      "O processo exclusivo de multiplicação celular descontrolada em tecidos lesionados",
      "A interrupção total das atividades metabólicas dos órgãos vitais"
    ],
    correctAnswer: "A capacidade do organismo de manter o equilíbrio e a estabilidade do seu meio interno",
    explanation: "Homeostase é o equilíbrio dinâmico e harmonioso mantido pelos sistemas nervoso e endócrino para garantir a sobrevivência."
  },
  {
    question: "A glândula tireoide, localizada no pescoço, produz os hormônios T3 e T4 com o objetivo de:",
    options: [
      "Regular a velocidade do metabolismo do corpo (o ritmo com que queimamos combustível)",
      "Produzir os glóbulos vermelhos que transportam oxigênio",
      "Filtrar as toxinas ingeridas através da alimentação",
      "Controlar a dilatação exclusiva dos alvéolos pulmonares"
    ],
    correctAnswer: "Regular a velocidade do metabolismo do corpo (o ritmo com que queimamos combustível)",
    explanation: "Os hormônios da tireoide (tiroxina e tri-iodotironina) ditam o ritmo e a taxa metabólica basal de todas as células do corpo humano."
  },
  {
    question: "O que acontece no hipotireoidismo e no hipertireoidismo, respectivamente?",
    options: [
      "No hipotireoidismo há produção insuficiente de hormônios (fadiga, ganho de peso); no hipertireoidismo há produção excessiva (aceleração, perda de peso)",
      "No hipotireoidismo a pessoa fica acelerada; no hipertireoidismo a pessoa sente frio e lentidão",
      "Ambos causam sempre a interrupção imediata da produção de insulina pelo pâncreas",
      "O hipotireoidismo atinge apenas homens e o hipertireoidismo atinge apenas recém-nascidos"
    ],
    correctAnswer: "No hipotireoidismo há produção insuficiente de hormônios (fadiga, ganho de peso); no hipertireoidismo há produção excessiva (aceleração, perda de peso)",
    explanation: "Hipo significa baixa atividade (metabolismo lento, cansaço); hiper significa produção exagerada (metabolismo acelerado, agitação e perda de peso)."
  },
  {
    question: "Por que se diz que a ação hormonal obedece à 'regra da chave e fechadura' (ou encaixe perfeito)?",
    options: [
      "Porque o hormônio só consegue agir na célula que possui o receptor químico específico compatível com ele",
      "Porque todos os hormônios do corpo abrem os mesmos canais da membrana plasmática",
      "Porque o hormônio só entra no núcleo se houver presença de gordura vegetal",
      "Porque os hormônios precisam de chaves mecânicas produzidas pelo cérebro"
    ],
    correctAnswer: "Porque o hormônio só consegue agir na célula que possui o receptor químico específico compatível com ele",
    explanation: "Mesmo circulando por todo o sangue, o hormônio só ativa as células-alvo que possuem receptores específicos com encaixe molecular exato."
  },
  {
    question: "Quais são os principais hormônios sexuais produzidos pelas gônadas masculinas e femininas, respectivamente?",
    options: [
      "Testosterona (nos testículos) e Estrogênio/Progesterona (nos ovários)",
      "Insulina (nos testículos) e Glucagon (nos ovários)",
      "Adrenalina (nas vesículas) e Cortisol (no útero)",
      "Melatonina (no pênis) e Tiroxina (na vagina)"
    ],
    correctAnswer: "Testosterona (nos testículos) e Estrogênio/Progesterona (nos ovários)",
    explanation: "A testosterona é o hormônio sexual masculino dos testículos, e o estrogênio/progesterona são os hormônios sexuais femininos dos ovários."
  },
  {
    question: "Qual glândula localizada na base do encéfalo é conhecida como glândula-mestra por comandar o funcionamento de outras glândulas, incluindo as gônadas sexuais?",
    options: [
      "Hipófise (ou glândula pituitária)",
      "Glândula sudorípara",
      "Próstata",
      "Glândula salivar parótida"
    ],
    correctAnswer: "Hipófise (ou glândula pituitária)",
    explanation: "A hipófise recebe sinais do hipotálamo e secreta hormônios tróficos (como FSH e LH) que regulam os ovários, testículos e tireoide."
  },

  // =========================================================================
  // ASSUNTO 4: INTERAÇÃO ENTRE SISTEMAS NERVOSO E ENDÓCRINO NA PUBERDADE - 10 Questões
  // =========================================================================
  {
    question: "O que é a puberdade?",
    options: [
      "O período de transição biológica da infância para a idade adulta, marcado por transformações hormonais e aquisição da capacidade reprodutiva",
      "A fase inicial da vida que vai do nascimento até os dois anos de idade",
      "O momento em que a mulher encerra definitivamente suas ovulações (menopausa)",
      "Uma alteração psicológica transitória sem qualquer manifestação biológica ou corporal"
    ],
    correctAnswer: "O período de transição biológica da infância para a idade adulta, marcado por transformações hormonais e aquisição da capacidade reprodutiva",
    explanation: "A puberdade é o processo biológico de maturação sexual em que o corpo infantil se transforma e adquire fertilidade sob estímulo hormonal."
  },
  {
    question: "Qual é o mecanismo neuroendócrino que dá início à puberdade em meninos e meninas?",
    options: [
      "O hipotálamo estimula a hipófise a produzir hormônios que ativam os testículos e ovários a secretar hormônios sexuais",
      "A tireoide para de funcionar, forçando os músculos a produzirem testosterona",
      "O pâncreas libera altas doses de bile que estimulam o crescimento dos ossos",
      "As glândulas salivares começam a produzir óvulos e espermatozoides"
    ],
    correctAnswer: "O hipotálamo estimula a hipófise a produzir hormônios que ativam os testículos e ovários a secretar hormônios sexuais",
    explanation: "A ativação do eixo hipotálamo-hipófise envia sinais às gônadas, disparando a liberação de testosterona nos rapazes e estrogênio nas garotas."
  },
  {
    question: "Qual é a diferença entre características sexuais primárias e secundárias?",
    options: [
      "Primárias são os órgãos reprodutores presentes desde o nascimento; secundárias são as mudanças corporais que surgem na puberdade",
      "Primárias surgem na velhice; secundárias estão presentes apenas nos primeiros meses de vida",
      "Primárias são exclusivas dos homens; secundárias são exclusivas das mulheres",
      "Primárias referem-se à altura; secundárias referem-se apenas à cor dos olhos"
    ],
    correctAnswer: "Primárias são os órgãos reprodutores presentes desde o nascimento; secundárias são as mudanças corporais que surgem na puberdade",
    explanation: "As características primárias são os órgãos genitais inatos (pênis, testículos / vagina, útero, ovários). As secundárias surgem na puberdade."
  },
  {
    question: "São exemplos de características sexuais secundárias masculinas desencadeadas pela testosterona na puberdade:",
    options: [
      "Crescimento de pelos faciais e corporais, engrossamento da voz, desenvolvimento muscular e aumento do pomo de Adão",
      "Alargamento acentuado dos quadris e início das menstruações mensais",
      "Desenvolvimento mamário e redução da massa muscular geral",
      "Parada total da produção de espermatozoides nos testículos"
    ],
    correctAnswer: "Crescimento de pelos faciais e corporais, engrossamento da voz, desenvolvimento muscular e aumento do pomo de Adão",
    explanation: "A testosterona estimula o engrossamento das cordas vocais, pelos na face e corpo, aumento ósseo/muscular e maturação genital masculina."
  },
  {
    question: "São exemplos de características sexuais secundárias femininas impulsionadas pelo estrogênio na puberdade:",
    options: [
      "Desenvolvimento dos seios (broto mamário), alargamento dos quadris, pelos pubianos e axilares e a primeira menstruação",
      "Crescimento de barba espessa e engrossamento acentuado da voz",
      "Aumento exponencial da produção de espermatozoides no útero",
      "Desaparecimento completo do endométrio uterino"
    ],
    correctAnswer: "Desenvolvimento dos seios (broto mamário), alargamento dos quadris, pelos pubianos e axilares e a primeira menstruação",
    explanation: "O estrogênio e a progesterona estimulam o desenvolvimento das mamas, redistribuição de gordura nos quadris e início dos ciclos menstruais."
  },
  {
    question: "Qual costuma ser o primeiro sinal físico visível do início da puberdade em meninas e em meninos, respectivamente?",
    options: [
      "Surgimento do broto mamário nas meninas e aumento do volume dos testículos nos meninos",
      "Menarca imediata nas meninas e calvície nos meninos",
      "Engrossamento da voz nas meninas e aumento dos quadris nos meninos",
      "Crescimento dos dentes sisos em ambos os sexos simultaneamente"
    ],
    correctAnswer: "Surgimento do broto mamário nas meninas e aumento do volume dos testículos nos meninos",
    explanation: "Nas meninas, o primeiro sinal habitual é o broto mamário (telarca, ~8-13 anos); nos meninos, é o aumento testicular (~9-14 anos)."
  },
  {
    question: "Como se chama a primeira menstruação na vida de uma mulher?",
    options: [
      "Menarca",
      "Menopausa",
      "Nidação",
      "Gametogênese"
    ],
    correctAnswer: "Menarca",
    explanation: "A menarca é o nome biológico dado à primeira menstruação, marcando o início da vida reprodutiva fértil da mulher."
  },
  {
    question: "O que é polução noturna e primeira ejaculação nos meninos durante a puberdade?",
    options: [
      "Um evento fisiológico natural em que ocorre eliminação involuntária de sêmen durante o sono, indicando início da produção de esperma",
      "Uma doença infecciosa grave causada por vírus que exige cirurgia de emergência",
      "Uma inflamação dos rins decorrente da ingestão excessiva de água",
      "Um defeito congênito nos ductos deferentes que impede a fertilidade"
    ],
    correctAnswer: "Um evento fisiológico natural em que ocorre eliminação involuntária de sêmen durante o sono, indicando início da produção de esperma",
    explanation: "A primeira ejaculação e as poluções noturnas são processos completamente normais que sinalizam o início da maturidade reprodutiva masculina."
  },
  {
    question: "Quais transformações psicossociais e emocionais são comuns e esperadas durante a adolescência e puberdade?",
    options: [
      "Oscilações de humor causadas pelas variações hormonais, busca por autonomia e maior identificação com grupos de amigos",
      "Isolamento mental permanente e perda de todas as habilidades de memória",
      "Regressão comportamental completa aos padrões de recém-nascido",
      "Ausência total de qualquer sentimento de dúvida ou ansiedade"
    ],
    correctAnswer: "Oscilações de humor causadas pelas variações hormonais, busca por autonomia e maior identificação com grupos de amigos",
    explanation: "A puberdade envolve intensas adaptações cerebrais e emocionais, tornando comum a busca de identidade, novas amizades e variações emocionais."
  },
  {
    question: "Por que a maturidade biológica alcançada na puberdade não significa necessariamente prontidão para a paternidade ou maternidade?",
    options: [
      "Porque criar um filho exige maturidade psicológica, emocional, social e financeira que ainda estão em formação na adolescência",
      "Porque o corpo adolescente perde a capacidade de produzir gametas após o primeiro mês",
      "Porque os métodos contraceptivos são proibidos por lei para adolescentes",
      "Porque o útero de uma adolescente não é capaz de realizar a fecundação"
    ],
    correctAnswer: "Porque criar um filho exige maturidade psicológica, emocional, social e financeira que ainda estão em formação na adolescência",
    explanation: "Embora haja capacidade biológica fértil, a gravidez na adolescência traz desafios complexos nos âmbitos psicológico, educacional e financeiro."
  },

  // =========================================================================
  // ASSUNTO 5: FASES DO CICLO MENSTRUAL, OVULAÇÃO E ENDOMÉTRIO - 10 Questões
  // =========================================================================
  {
    question: "Qual é a duração média do ciclo menstrual na mulher e qual evento marca o seu primeiro dia (Dia 1)?",
    options: [
      "Dura em média 28 dias e tem início no primeiro dia de sangramento menstrual",
      "Dura 14 dias e começa no momento exato da fecundação",
      "Dura 40 semanas e tem início quando o folículo se transforma em placenta",
      "Dura exatamente 7 dias e começa quando os ovários param de funcionar"
    ],
    correctAnswer: "Dura em média 28 dias e tem início no primeiro dia de sangramento menstrual",
    explanation: "O ciclo menstrual médio dura cerca de 28 dias (podendo variar normalmente entre 21 e 35 dias), iniciando-se no 1º dia da menstruação."
  },
  {
    question: "O que acontece biologicamente no útero durante a fase menstrual (menstruação)?",
    options: [
      "Como não houve fecundação, as taxas hormonais caem e o endométrio espessado se desprende e é eliminado pela vagina com sangue",
      "O endométrio se funde à bexiga para produzir urina rica em glicose",
      "O óvulo fertilizado se fixa na parede muscular para dar início ao parto",
      "Ocorre a liberação simultânea de milhares de espermatozoides pelo colo uterino"
    ],
    correctAnswer: "Como não houve fecundação, as taxas hormonais caem e o endométrio espessado se desprende e é eliminado pela vagina com sangue",
    explanation: "Sem gravidez, os níveis de estrógeno e progesterona despencam, fazendo o endométrio descamar e ser expelido pela vagina."
  },
  {
    question: "O que é a ovulação e em que momento do ciclo padrão de 28 dias ela normalmente ocorre?",
    options: [
      "É o momento em que o folículo ovariano maduro se rompe e libera o ovócito na tuba uterina, ocorrendo por volta do 14º dia",
      "É o desprendimento do endométrio com sangue, ocorrendo sempre no 1º dia do ciclo",
      "É a expulsão da placenta pelo útero materno ao final dos 9 meses de gestação",
      "É o transporte dos espermatozoides do epidídimo até a uretra masculina"
    ],
    correctAnswer: "É o momento em que o folículo ovariano maduro se rompe e libera o ovócito na tuba uterina, ocorrendo por volta do 14º dia",
    explanation: "A ovulação é a liberação do gameta feminino pelo ovário, acontecendo aproximadamente na metade do ciclo menstrual (dia 14 em ciclos de 28 dias)."
  },
  {
    question: "O que se entende por 'período fértil' da mulher?",
    options: [
      "O intervalo de cerca de 3 dias antes até 3 dias depois da ovulação, onde as chances de engravidar são máximas",
      "Os primeiros 5 dias de sangramento menstrual em que o útero está descamando",
      "Os meses imediatamente seguintes à entrada na menopausa",
      "O período de 40 semanas durante o qual o feto se desenvolve no útero"
    ],
    correctAnswer: "O intervalo de cerca de 3 dias antes até 3 dias depois da ovulação, onde as chances de engravidar são máximas",
    explanation: "Como os espermatozoides podem sobreviver dias no trato feminino e o óvulo vive cerca de 24h, a janela ao redor da ovulação é o período fértil."
  },
  {
    question: "Qual é o papel do hormônio progesterona na segunda metade do ciclo menstrual (fase lútea / secretora)?",
    options: [
      "Manter o endométrio espesso, macio e vascularizado, preparando o útero para acolher um possível embrião",
      "Destruir a mucosa uterina para acelerar o início de uma nova menstruação",
      "Impedir que os ovários produzam qualquer quantidade de líquido folicular",
      "Transformar os ovócitos secundários em células musculares estriadas"
    ],
    correctAnswer: "Manter o endométrio espesso, macio e vascularizado, preparando o útero para acolher um possível embrião",
    explanation: "Produzida pelo corpo lúteo no ovário, a progesterona mantém a parede uterina nutrida e pronta para a nidação do embrião."
  },
  {
    question: "O que acontece com o corpo lúteo e com as taxas hormonais se o óvulo NÃO for fecundado?",
    options: [
      "O corpo lúteo regride, as taxas de estrógeno e progesterona caem drasticamente e o endométrio descama",
      "O corpo lúteo cresce indefinidamente e se transforma em placenta no ovário",
      "A hipófise começa a secretar leite materno imediatamente pelos seios",
      "As taxas de progesterona sobem a níveis máximos impedindo a menstruação"
    ],
    correctAnswer: "O corpo lúteo regride, as taxas de estrógeno e progesterona caem drasticamente e o endométrio descama",
    explanation: "Sem fecundação, o corpo lúteo degenera, cessando o suporte hormonal ao endométrio, o que resulta na descamação (menstruação)."
  },
  {
    question: "Qual exame preventivo de rotina é fundamental para a saúde da mulher, coletando células do colo do útero para detectar infecções e prevenir o câncer precocemente?",
    options: [
      "Papanicolaou (preventivo do colo do útero)",
      "Hemograma de rotina apenas",
      "Audiometria ocupacional",
      "Eletrocardiograma de esforço"
    ],
    correctAnswer: "Papanicolaou (preventivo do colo do útero)",
    explanation: "O Papanicolaou analisa células da mucosa cervical uterina, identificando lesões provocadas pelo HPV ou sinais precoces de câncer."
  },
  {
    question: "Qual exame de imagem por raio-X é indicado como ferramenta essencial para o rastreamento e detecção precoce do câncer de mama?",
    options: [
      "Mamografia",
      "Endoscopia digestiva",
      "Ressonância magnética da tireoide",
      "Ultrassom da próstata"
    ],
    correctAnswer: "Mamografia",
    explanation: "A mamografia é o exame padrão capaz de identificar microcalcificações e tumores milimétricos nas mamas muito antes de serem palpáveis."
  },
  {
    question: "Durante a fase proliferativa (após a menstruação e antes da ovulação), que hormônio estimula a reconstrução e o crescimento do endométrio?",
    options: [
      "Estrógeno (estrogênio)",
      "Adrenalina",
      "Tiroxina (T4)",
      "Glucagon"
    ],
    correctAnswer: "Estrógeno (estrogênio)",
    explanation: "O estrogênio liberado pelos folículos ovarianos em crescimento faz a mucosa do endométrio se regenerar e aumentar de espessura."
  },
  {
    question: "O que é o corrimento fisiológico normal na mulher e como ele difere de uma infecção ginecológica?",
    options: [
      "O muco normal é claro/transparente, sem cheiro forte e sem dor; infecções causam secreção com cor alterada, coceira, odor e queimação",
      "Qualquer tipo de muco na mulher é sinal grave de doença incurável",
      "O corrimento normal tem cor esverdeada brilhante e causa sangramento",
      "Infecções genitais nunca provocam sintomas visíveis ou perceptíveis"
    ],
    correctAnswer: "O muco normal é claro/transparente, sem cheiro forte e sem dor; infecções causam secreção com cor alterada, coceira, odor e queimação",
    explanation: "A secreção lubrificante normal varia conforme o ciclo (fica mais elástica na ovulação); coceiras, cheiro forte e cores amareladas indicam infecção."
  },

  // =========================================================================
  // ASSUNTO 6: PROCESSO DE FECUNDAÇÃO NA TUBA UTERINA E FORMAÇÃO DO ZIGOTO - 10 Questões
  // =========================================================================
  {
    question: "Onde ocorre exatamente o processo de fecundação na espécie humana?",
    options: [
      "Na tuba uterina (terço inicial / trompa de Falópio)",
      "No canal da vagina próximo à vulva",
      "No fundo do ovário antes da ovulação",
      "Na cavidade da bexiga urinária"
    ],
    correctAnswer: "Na tuba uterina (terço inicial / trompa de Falópio)",
    explanation: "Após a ovulação, o óvulo é captado pelas fímbrias da tuba uterina e é ali que os espermatozoides que subiram pelo útero o encontram."
  },
  {
    question: "O que é o acrossomo presente na cabeça do espermatozoide e qual é o seu papel na fecundação?",
    options: [
      "Uma vesícula repleta de enzimas digestivas que perfuram e abrem caminho através das membranas protetoras do óvulo",
      "O motor celular formado por mitocôndrias que bate o flagelo",
      "A estrutura que armazena a urina durante a passagem pela uretra",
      "A cauda proteica responsável por absorver o oxigênio da mãe"
    ],
    correctAnswer: "Uma vesícula repleta de enzimas digestivas que perfuram e abrem caminho através das membranas protetoras do óvulo",
    explanation: "O acrossomo libera enzimas que dissolvem a barreira gelatinosa em torno do óvulo, permitindo que a cabeça do espermatozoide penetre."
  },
  {
    question: "Como funciona a 'Regra de Um' (bloqueio da poliespermia) assim que o primeiro espermatozoide toca a membrana do óvulo?",
    options: [
      "O óvulo desencadeia uma reação química imediata em sua membrana que impede a entrada de qualquer outro espermatozoide",
      "Todos os outros espermatozoides se transformam em células da placenta",
      "O óvulo se divide em dez partes para receber um espermatozoide em cada uma",
      "A tuba uterina se fecha cirurgicamente para expulsar o excesso de sêmen"
    ],
    correctAnswer: "O óvulo desencadeia uma reação química imediata em sua membrana que impede a entrada de qualquer outro espermatozoide",
    explanation: "A despolarização e a reação cortical na membrana do óvulo criam uma barreira química impenetrável contra os outros milhões de espermatozoides."
  },
  {
    question: "O que é o zigoto (ou célula-ovo)?",
    options: [
      "A primeira célula do novo ser humano, resultante da união do material genético do espermatozoide com o do óvulo",
      "O gameta feminino maduro antes de sofrer qualquer fecundação",
      "A membrana que envolve o líquido amniótico no nono mês de gestação",
      "O canal muscular que conduz a urina até o meio externo"
    ],
    correctAnswer: "A primeira célula do novo ser humano, resultante da união do material genético do espermatozoide com o do óvulo",
    explanation: "O zigoto é a célula diploide única e totipotente formada pela fusão dos núcleos haploides do espermatozoide e do ovócito."
  },
  {
    question: "Quantos cromossomos possui cada gameta humano (haploide - n) e quantos possui o zigoto formado (diploide - 2n)?",
    options: [
      "Cada gameta possui 23 cromossomos e o zigoto possui 46 cromossomos (23 pares)",
      "Cada gameta possui 46 cromossomos e o zigoto possui 92 cromossomos",
      "Cada gameta possui 10 cromossomos e o zigoto possui 20 cromossomos",
      "O espermatozoide tem 46 e o óvulo não possui nenhum cromossomo"
    ],
    correctAnswer: "Cada gameta possui 23 cromossomos e o zigoto possui 46 cromossomos (23 pares)",
    explanation: "O espermatozoide (n=23) e o óvulo (n=23) se fundem na fecundação, restaurando o número diploide característico da espécie humana (2n=46)."
  },
  {
    question: "Qual parte do espermatozoide é rica em mitocôndrias e fornece a energia (ATP) necessária para o movimento da cauda?",
    options: [
      "Peça intermediária",
      "Acrossomo",
      "Núcleo com DNA",
      "Ponta do flagelo distal"
    ],
    correctAnswer: "Peça intermediária",
    explanation: "A peça intermediária aloja uma espiral de mitocôndrias que atuam como usinas de energia para impulsionar o batimento do flagelo."
  },
  {
    question: "Comparando os dois gametas humanos, o óvulo e o espermatozoide distinguem-se porque:",
    options: [
      "O óvulo é volumoso, esférico, imóvel e rico em nutrientes; o espermatozoide é pequeno, aerodinâmico e muito móvel",
      "O espermatozoide é 1000 vezes maior que o óvulo e não possui cauda",
      "Ambos são idênticos em formato esférico e flutuam sem movimento próprio",
      "O óvulo possui três caudas e o espermatozoide não tem núcleo celular"
    ],
    correctAnswer: "O óvulo é volumoso, esférico, imóvel e rico em nutrientes; o espermatozoide é pequeno, aerodinâmico e muito móvel",
    explanation: "A estratégia do óvulo foca em tamanho e nutrientes de reserva; a do espermatozoide baseia-se em alta velocidade, mobilidade e quantidade."
  },
  {
    question: "O que acontece logo após a fusão dos núcleos (cariogamia) do espermatozoide e do óvulo?",
    options: [
      "O zigoto inicia uma série de divisões celulares sucessivas (mitoses / clivagens) enquanto desce pela tuba uterina em direção ao útero",
      "O óvulo é imediatamente expelido pelo canal vaginal na menstruação",
      "O zigoto para de se dividir até o momento do nascimento da criança",
      "O cordão umbilical conecta o zigoto instantaneamente ao ovário"
    ],
    correctAnswer: "O zigoto inicia uma série de divisões celulares sucessivas (mitoses / clivagens) enquanto desce pela tuba uterina em direção ao útero",
    explanation: "O zigoto unicelular divide-se em 2, 4, 8, 16 células por mitose, migrando impulsionado por cílios da tuba uterina até alcançar o útero."
  },
  {
    question: "Qual é o tempo médio que o espermatozoide leva para nadar da vagina até a tuba uterina para realizar a fecundação?",
    options: [
      "De algumas horas até poucos dias após a relação sexual",
      "Exatamente 9 meses completos",
      "Cerca de 28 dias após a menstruação",
      "Menos de um milésimo de segundo"
    ],
    correctAnswer: "De algumas horas até poucos dias após a relação sexual",
    explanation: "Os espermatozoides mais rápidos levam de poucas horas para alcançar a tuba uterina e podem sobreviver até 3 a 5 dias no aparelho feminino."
  },
  {
    question: "O que é a chamada 'gravidez ectópica'?",
    options: [
      "Quando o embrião se fixa e começa a se desenvolver fora do útero, geralmente na própria tuba uterina, exigindo intervenção médica imediata",
      "Uma gestação normal em que nascem gêmeos univitelinos perfeitos",
      "A gestação de um bebê que dura exatamente 50 semanas sem intercorrências",
      "O desenvolvimento do feto dentro do estômago materno"
    ],
    correctAnswer: "Quando o embrião se fixa e começa a se desenvolver fora do útero, geralmente na própria tuba uterina, exigindo intervenção médica imediata",
    explanation: "A gravidez ectópica tubária é perigosa porque a tuba não se dilata como o útero, podendo romper e causar hemorragias graves."
  },

  // =========================================================================
  // ASSUNTO 7: ETAPAS EMBRIONÁRIAS INICIAIS: MÓRULA, BLASTOCISTO E NIDAÇÃO - 10 Questões
  // =========================================================================
  {
    question: "Na embriogênese humana, o que é a 'Mórula' formada cerca de 3 a 4 dias após a fecundação?",
    options: [
      "Uma esfera maciça de células compactadas (de 16 a 64 células), semelhante ao formato de uma amora",
      "A primeira membrana oca que preenche o líquido amniótico da placenta",
      "O órgão fetal responsável por bombear sangue com oxigênio para a mãe",
      "O canal muscular que conduz o óvulo até a vulva externa"
    ],
    correctAnswer: "Uma esfera maciça de células compactadas (de 16 a 64 células), semelhante ao formato de uma amora",
    explanation: "A palavra mórula vem do latim 'morum' (amora), devido à aparência do aglomerado compacto de blastômeros resultantes das clivagens."
  },
  {
    question: "O que diferencia o Blastocisto da Mórula quando o embrião chega ao útero?",
    options: [
      "O blastocisto é uma esfera oca contendo uma cavidade preenchida por líquido e uma massa celular interna",
      "A mórula já possui braços, pernas e batimentos cardíacos autônomos",
      "O blastocisto é formado por apenas uma única célula com 92 cromossomos",
      "A mórula possui placenta e cordão umbilical totalmente desenvolvidos"
    ],
    correctAnswer: "O blastocisto é uma esfera oca contendo uma cavidade preenchida por líquido e uma massa celular interna",
    explanation: "O blastocisto (ou blástula) absorve líquido e forma a cavidade interna (blastocele), preparando-se para fixar-se no endométrio."
  },
  {
    question: "O que é o processo biológico de NIDAÇÃO?",
    options: [
      "A fixação e implantação do blastocisto na parede interna do útero (endométrio), marcando o início da gravidez",
      "A união do espermatozoide com o ovócito na tuba uterina",
      "O rompimento da bolsa d'água no momento de dar à luz",
      "A eliminação do sangue menstrual pela vagina no 1º dia do ciclo"
    ],
    correctAnswer: "A fixação e implantação do blastocisto na parede interna do útero (endométrio), marcando o início da gravidez",
    explanation: "A nidação ocorre quando o blastocisto se instala no endométrio ricamente vascularizado, por volta do 6º ao 7º dia pós-fecundação."
  },
  {
    question: "Em qual momento do desenvolvimento embrionário ocorre a nidação no corpo da mulher?",
    options: [
      "Ao final da primeira semana (cerca de 6 a 7 dias) após a fecundação",
      "Exatamente 40 semanas após o parto",
      "No momento exato em que a menina atinge a menarca aos 12 anos",
      "Nas primeiras 2 horas após a ejaculação no canal vaginal"
    ],
    correctAnswer: "Ao final da primeira semana (cerca de 6 a 7 dias) após a fecundação",
    explanation: "O zigoto leva cerca de 3 a 4 dias para descer a tuba uterina até o útero e implanta-se no endométrio ao final da primeira semana."
  },
  {
    question: "O que são células-tronco embrionárias presentes no blastocisto inicial?",
    options: [
      "Células capazes de se dividir e se transformar em praticamente qualquer tipo de tecido especializado do corpo humano",
      "Células mortas que formam a camada protetora da pele do recém-nascido",
      "Células responsáveis exclusivamente por produzir urina no feto",
      "Células musculares que se contraem durante a ejaculação"
    ],
    correctAnswer: "Células capazes de se dividir e se transformar em praticamente qualquer tipo de tecido especializado do corpo humano",
    explanation: "As células-tronco embrionárias são pluripotentes, tendo o potencial de originar todos os tecidos e órgãos do corpo humano."
  },
  {
    question: "Qual hormônio é produzido pelas células embrionárias após a nidação e é detectado nos testes de gravidez de urina e de sangue?",
    options: [
      "hCG (Gonadotrofina Coriônica Humana)",
      "Insulina pancreática",
      "Tiroxina tireoidiana (T4)",
      "Melatonina pineal"
    ],
    correctAnswer: "hCG (Gonadotrofina Coriônica Humana)",
    explanation: "O hCG é produzido pelo tecido embrionário logo após a implantação, mantendo o corpo lúteo ativo para não haver menstruação."
  },
  {
    question: "Qual é a sequência cronológica correta dos eventos do início da vida humana?",
    options: [
      "Ovulação -> Fecundação -> Zigoto -> Mórula -> Blastocisto -> Nidação",
      "Nidação -> Parto -> Fecundação -> Mórula -> Ovulação",
      "Mórula -> Ovulação -> Blastocisto -> Fecundação -> Zigoto",
      "Parto -> Nidação -> Fecundação -> Zigoto -> Menstruação"
    ],
    correctAnswer: "Ovulação -> Fecundação -> Zigoto -> Mórula -> Blastocisto -> Nidação",
    explanation: "O óvulo é liberado na ovulação, fecundado na tuba, forma o zigoto, divide-se em mórula, transforma-se em blastocisto e implanta-se (nidação)."
  },
  {
    question: "Se o endométrio não estiver adequadamente espesso e nutrido pela progesterona, o que ocorre com o blastocisto?",
    options: [
      "Ele não consegue realizar a nidação, sendo eliminado, e não se estabelece a gestação",
      "Ele se transforma em um gêmeo idêntico dentro da bexiga",
      "Ele migra para os pulmões da mulher e começa a respirar ar",
      "Ele produz testosterona para forçar a formação de ossos"
    ],
    correctAnswer: "Ele não consegue realizar a nidação, sendo eliminado, e não se estabelece a gestação",
    explanation: "Um endométrio receptivo e vascularizado é indispensável para que ocorra a fixação (nidação) e nutrição inicial do embrião."
  },
  {
    question: "Durante as primeiras clivagens do zigoto até a mórula na tuba uterina, o que acontece com o tamanho total do embrião?",
    options: [
      "O número de células aumenta rapidamente por mitose, mas o volume total do embrião quase não cresce pois as células ficam menores",
      "O embrião cresce até atingir 30 centímetros já no 2º dia pós-fecundação",
      "O embrião perde todas as suas células até virar um líquido homogêneo",
      "O embrião se transforma em placenta antes de fazer qualquer divisão celular"
    ],
    correctAnswer: "O número de células aumenta rapidamente por mitose, mas o volume total do embrião quase não cresce pois as células ficam menores",
    explanation: "Nas clivagens iniciais, a célula-ovo divide-se em células progressivamente menores (blastômeros) contidas na zona pelúcida original."
  },
  {
    question: "A diferenciação celular que começa a ocorrer na fase de blastocisto dará origem a:",
    options: [
      "O embrioblasto (que formará o corpo do bebê) e o trofoblasto (que formará os anexos embrionários e a placenta)",
      "Apenas o cordão umbilical, pois o bebê é gerado diretamente pelo ovário",
      "Duas células idênticas que serão eliminadas no próximo ciclo menstrual",
      "Células adultas já envelhecidas e sem capacidade reprodutiva"
    ],
    correctAnswer: "O embrioblasto (que formará o corpo do bebê) e o trofoblasto (que formará os anexos embrionários e a placenta)",
    explanation: "A massa celular interna (embrioblasto) origina os tecidos do feto, enquanto a camada externa (trofoblasto) ajuda na nidação e na placenta."
  },

  // =========================================================================
  // ASSUNTO 8: ANEXOS EMBRIONÁRIOS, GESTAÇÃO, PARTO E ALEITAMENTO - 10 Questões
  // =========================================================================
  {
    question: "Qual é a função vital da placenta durante a gravidez?",
    options: [
      "Permitir as trocas de nutrientes e oxigênio da mãe para o feto, eliminar excretas do feto para a mãe e produzir hormônios",
      "Armazenar a urina do bebê até o nono mês de gestação",
      "Impedir que o embrião receba sangue ou oxigênio da circulação",
      "Substituir o coração fetal nos primeiros batimentos autônomos"
    ],
    correctAnswer: "Permitir as trocas de nutrientes e oxigênio da mãe para o feto, eliminar excretas do feto para a mãe e produzir hormônios",
    explanation: "A placenta é o órgão temporário que nutre, oxigena, recolhe resíduos metabólicos do feto por difusão e secreta hormônios gestacionais."
  },
  {
    question: "O sangue materno e o sangue fetal se misturam diretamente no interior da placenta?",
    options: [
      "Não, eles não se misturam diretamente; as trocas de nutrientes, gases e resíduos ocorrem por difusão através dos capilares",
      "Sim, todo o sangue da mãe passa por dentro dos vasos do feto como uma única artéria contínua",
      "Sim, o feto doa todo o seu sangue para a mãe a cada batimento cardíaco",
      "Não, porque o feto não possui sangue até o momento exato do corte do cordão"
    ],
    correctAnswer: "Não, eles não se misturam diretamente; as trocas de nutrientes, gases e resíduos ocorrem por difusão através dos capilares",
    explanation: "A barreira placentária impede a mistura direta das correntes sanguíneas, permitindo apenas a troca seletiva de substâncias por difusão."
  },
  {
    question: "Qual é o papel da bolsa amniótica (âmnio) e do líquido amniótico?",
    options: [
      "Proteger o embrião contra choques mecânicos, impactos, variações térmicas e desidratação, permitindo sua movimentação",
      "Produzir os espermatozoides que fecundarão o útero na gestação",
      "Conectar os pulmões do bebê diretamente ao estômago da mãe",
      "Eliminar o cordão umbilical antes do segundo trimestre"
    ],
    correctAnswer: "Proteger o embrião contra choques mecânicos, impactos, variações térmicas e desidratação, permitindo sua movimentação",
    explanation: "O saco amniótico cheio de líquido serve como um amortecedor hidráulico de proteção contra impactos físicos e choques."
  },
  {
    question: "O cordão umbilical é a via de conexão entre o feto e a placenta. O que o umbigo representa no corpo de uma pessoa adulta?",
    options: [
      "Uma cicatriz biológica que marca o local exato onde o cordão umbilical esteve conectado durante a gestação",
      "O local por onde o adulto continua recebendo oxigênio durante a noite",
      "A entrada anatômica dos hormônios tireoidianos para o estômago",
      "Um vestígio inútil originado da quebra do fêmur no parto"
    ],
    correctAnswer: "Uma cicatriz biológica que marca o local exato onde o cordão umbilical esteve conectado durante a gestação",
    explanation: "Após o nascimento, o cordão umbilical é cortado e a extremidade seca e cai, deixando como marca permanente a cicatriz umbilical (umbigo)."
  },
  {
    question: "Em qual marco do desenvolvimento o embrião humano passa a ser oficialmente chamado de 'Feto'?",
    options: [
      "Ao final da 8ª semana de gestação (cerca de 2 meses), quando os principais órgãos já estão formados e ele tem aparência reconhecidamente humana",
      "No momento da fecundação na tuba uterina",
      "Aos 9 meses, somente após o nascimento e o primeiro choro",
      "Quando o blastocisto se divide em 16 células maciças"
    ],
    correctAnswer: "Ao final da 8ª semana de gestação (cerca de 2 meses), quando os principais órgãos já estão formados e ele tem aparência reconhecidamente humana",
    explanation: "A partir da 8ª semana (cerca de 2,5 cm, coração batendo e órgãos esboçados), a fase embrionária dá lugar ao período fetal."
  },
  {
    question: "Quanto tempo dura, em média, a gestação humana completa?",
    options: [
      "Cerca de 38 a 40 semanas (aproximadamente 280 dias ou 9 meses)",
      "Exatamente 14 semanas (cerca de 90 dias)",
      "Cerca de 60 semanas (aproximadamente 1 ano e meio)",
      "Exatamente 28 dias, coincidindo com o ciclo menstrual"
    ],
    correctAnswer: "Cerca de 38 a 40 semanas (aproximadamente 280 dias ou 9 meses)",
    explanation: "A gestação humana dura em média 38 semanas (contadas da fecundação) ou 40 semanas / 280 dias (contadas da última menstruação)."
  },
  {
    question: "Quais são as três etapas fundamentais do processo de parto normal?",
    options: [
      "1) Contrações uterinas e dilatação do colo com rompimento da bolsa; 2) Nascimento/expulsão do bebê pela vagina; 3) Expulsão da placenta",
      "1) Menstruação; 2) Nidação; 3) Ovulação",
      "1) Fecundação; 2) Clivagem celular; 3) Formação do zigoto",
      "1) Amamentação; 2) Puberdade; 3) Menarca"
    ],
    correctAnswer: "1) Contrações uterinas e dilatação do colo com rompimento da bolsa; 2) Nascimento/expulsão do bebê pela vagina; 3) Expulsão da placenta",
    explanation: "O parto inicia com contrações e dilatação (rompimento do âmnio), segue com a passagem do bebê e conclui com a saída da placenta."
  },
  {
    question: "O que marca a independência respiratória do bebê ('o primeiro fôlego') logo após o nascimento?",
    options: [
      "Com o corte do cordão umbilical, encerra-se o suprimento de oxigênio da mãe e o bebê expande os próprios pulmões para respirar",
      "A placenta assume a respiração mecânica dentro do berço",
      "O leite materno entra nos pulmões para oxigenar o sangue",
      "O coração do bebê para de bater por 5 minutos para descansar"
    ],
    correctAnswer: "Com o corte do cordão umbilical, encerra-se o suprimento de oxigênio da mãe e o bebê expande os próprios pulmões para respirar",
    explanation: "Ao ser separado da placenta, o aumento de gás carbônico estimula o centro respiratório no cérebro do bebê, iniciando o choro e a respiração pulmonar."
  },
  {
    question: "Por que substâncias como álcool e fumo são extremamente perigosas para a gestante e o bebê?",
    options: [
      "O fumo reduz a oxigenação fetal e o álcool atravessa a placenta podendo causar a Síndrome Alcoólica Fetal com malformações graves",
      "O álcool endurece o cordão umbilical tornando-o uma estrutura óssea rígida",
      "O fumo acelera o crescimento do bebê fazendo-o nascer com mais de 10 kg",
      "Essas substâncias não causam qualquer efeito pois a placenta bloqueia 100% dos químicos"
    ],
    correctAnswer: "O fumo reduz a oxigenação fetal e o álcool atravessa a placenta podendo causar a Síndrome Alcoólica Fetal com malformações graves",
    explanation: "Toxinas do fumo e álcool atravessam a barreira placentária, prejudicando o cérebro, oxigenação, crescimento e órgãos em formação."
  },
  {
    question: "Por que o aleitamento materno (leite materno) é considerado o melhor e mais completo alimento para o recém-nascido?",
    options: [
      "Fornece nutrientes em proporções ideais, anticorpos essenciais para a imunidade e fortalece o vínculo afetivo mãe-filho",
      "Porque substitui a necessidade de qualquer vacinação obrigatória na infância",
      "Porque transforma o sangue do bebê diretamente em células de gordura",
      "Porque é o único alimento que impede que a criança entre na puberdade"
    ],
    correctAnswer: "Fornece nutrientes em proporções ideais, anticorpos essenciais para a imunidade e fortalece o vínculo afetivo mãe-filho",
    explanation: "O leite materno contém água, proteínas, gorduras, sais e anticorpos maternos (imunoglobulinas) que protegem o bebê contra infecções."
  },

  // =========================================================================
  // ASSUNTO 9: GÊMEOS MONOZIGÓTICOS (UNIVITELINOS) E DIZIGÓTICOS (FRATERNOS) - 10 Questões
  // =========================================================================
  {
    question: "Como são formados os gêmeos monozigóticos (também chamados de idênticos ou univitelinos)?",
    options: [
      "A partir de 1 único óvulo fecundado por 1 único espermatozoide, cujo zigoto/massa celular se divide em dois embriões",
      "A partir de 2 óvulos fecundados por 2 espermatozoides diferentes simultaneamente",
      "A partir de 1 óvulo fecundado por 2 espermatozoides ao mesmo tempo",
      "A partir de 2 espermatozoides que se fundem sem a presença de um óvulo"
    ],
    correctAnswer: "A partir de 1 único óvulo fecundado por 1 único espermatozoide, cujo zigoto/massa celular se divide em dois embriões",
    explanation: "Gêmeos monozigóticos (uni = um, vitelino = óvulo) derivam de um único zigoto que se bipartiu nos estágios iniciais da gestação."
  },
  {
    question: "Como são formados os gêmeos dizigóticos (também chamados de fraternos ou bivitelinos)?",
    options: [
      "A partir de 2 óvulos diferentes liberados no mesmo ciclo, fecundados individualmente por 2 espermatozoides distintos",
      "A partir de 1 único zigoto que se dividiu em duas metades idênticas",
      "Pela fusão de quatro células-tronco no interior da placenta",
      "A partir de um único espermatozoide que fecunda dois óvulos fundidos"
    ],
    correctAnswer: "A partir de 2 óvulos diferentes liberados no mesmo ciclo, fecundados individualmente por 2 espermatozoides distintos",
    explanation: "Gêmeos dizigóticos (di = dois) resultam de dupla ovulação, com dois espermatozoides fecundando óvulos diferentes de forma independente."
  },
  {
    question: "Em relação ao patrimônio genético (DNA), como se comparam os gêmeos monozigóticos e os dizigóticos?",
    options: [
      "Monozigóticos são geneticamente idênticos (mesmo DNA); dizigóticos são geneticamente diferentes como irmãos comuns",
      "Dizigóticos são clones perfeitos; monozigóticos possuem 0% de genes em comum",
      "Ambos os tipos de gêmeos possuem exatamente o mesmo DNA em 100% dos casos",
      "Gêmeos nunca compartilham nenhum material genético com os pais"
    ],
    correctAnswer: "Monozigóticos são geneticamente idênticos (mesmo DNA); dizigóticos são geneticamente diferentes como irmãos comuns",
    explanation: "Monozigóticos vieram do mesmo zigoto (clones naturais com 100% de DNA igual); dizigóticos vieram de combinações gaméticas distintas (~50% de similaridade)."
  },
  {
    question: "Em relação ao sexo biológico dos bebês, o que é biologicamente OBRIGATÓRIO para gêmeos monozigóticos?",
    options: [
      "Eles são OBRIGATORIAMENTE do mesmo sexo (dois meninos ou duas meninas)",
      "Eles são obrigatoriamente de sexos diferentes (um menino e uma menina)",
      "Eles não possuem determinação de sexo cromossômico",
      "O sexo de um é masculino e o do outro é sempre indeterminado"
    ],
    correctAnswer: "Eles são OBRIGATORIAMENTE do mesmo sexo (dois meninos ou duas meninas)",
    explanation: "Como possuem exatamente o mesmo DNA (inclusive os cromossomos sexuais XX ou XY), gêmeos monozigóticos são sempre do mesmo sexo."
  },
  {
    question: "Gêmeos dizigóticos (fraternos) podem ser de sexos diferentes (um menino e uma menina)?",
    options: [
      "Sim, pois resultam de fecundações independentes com espermatozoides que podem carregar cromossomo X ou Y",
      "Não, gêmeos nascidos no mesmo parto são obrigatoriamente do mesmo sexo",
      "Apenas se forem gerados em úteros artificiais de laboratório",
      "Não, porque a mãe só pode produzir óvulos com cromossomo Y"
    ],
    correctAnswer: "Sim, pois resultam de fecundações independentes com espermatozoides que podem carregar cromossomo X ou Y",
    explanation: "Por serem duas fecundações separadas, os espermatozoides podem ser X ou Y, podendo gerar menino-menina, menino-menino ou menina-menina."
  },
  {
    question: "Avalie a afirmação: 'Gêmeos idênticos ocorrem quando dois espermatozoides fecundam o mesmo óvulo.' Essa afirmativa é:",
    options: [
      "FALSA, pois se dois espermatozoides entrassem no mesmo óvulo ocorreria uma anomalia genética letal; gêmeos idênticos vêm de 1 óvulo e 1 espermatozoide",
      "VERDADEIRA, pois cada espermatozoide forma um dos gêmeos dentro do mesmo óvulo",
      "VERDADEIRA, sendo esse o mecanismo padrão de todas as gestações humanas",
      "FALSA, porque são necessários três espermatozoides para formar gêmeos univitelinos"
    ],
    correctAnswer: "FALSA, pois se dois espermatozoides entrassem no mesmo óvulo ocorreria uma anomalia genética letal; gêmeos idênticos vêm de 1 óvulo e 1 espermatozoide",
    explanation: "A poliespermia gera aberração cromossômica (triploidia) incompatível com a vida. Gêmeos idênticos surgem da divisão pós-zigótica de uma fecundação única."
  },
  {
    question: "Mesmo tendo o mesmo código genético, gêmeos idênticos possuem impressões digitais diferentes. Por que isso acontece?",
    options: [
      "Porque fatores ambientais e forças físicas no útero (como contato com a bolsa e líquido amniótico) influenciam a formação dos desenhos dos dedos",
      "Porque um dos gêmeos perde o DNA dos dedos ao nascer",
      "Porque as digitais são transmitidas apenas pelo cordão umbilical",
      "Porque as impressões digitais só se formam após os 18 anos de idade"
    ],
    correctAnswer: "Porque fatores ambientais e forças físicas no útero (como contato com a bolsa e líquido amniótico) influenciam a formação dos desenhos dos dedos",
    explanation: "As impressões digitais dependem não só do DNA, mas de microvariações de pressão e fluxo de líquido amniótico durante o desenvolvimento fetal."
  },
  {
    question: "Como se formam os chamados gêmeos siameses (ou xifópagos)?",
    options: [
      "Quando o embrião de gêmeos monozigóticos não se separa completamente durante a divisão celular inicial, nascendo unidos por alguma parte do corpo",
      "Quando dois óvulos se fundem dentro da vagina após o parto",
      "Quando uma mulher engravida de trigêmeos e perde um deles no nascimento",
      "Por infecção bacteriana adquirida no momento da ovulação"
    ],
    correctAnswer: "Quando o embrião de gêmeos monozigóticos não se separa completamente durante a divisão celular inicial, nascendo unidos por alguma parte do corpo",
    explanation: "Os gêmeos siameses são monozigóticos cuja clivagem do disco embrionário ocorreu tardiamente e de forma incompleta."
  },
  {
    question: "Em uma maternidade nasceram dois bebês gêmeos: um menino e uma menina. Com certeza biológica podemos afirmar que eles são:",
    options: [
      "Gêmeos dizigóticos (fraternos / bivitelinos)",
      "Gêmeos monozigóticos (univitelinos / idênticos)",
      "Clones geneticamente perfeitos um do outro",
      "Originados de um único zigoto que sofreu mutação no parto"
    ],
    correctAnswer: "Gêmeos dizigóticos (fraternos / bivitelinos)",
    explanation: "Como gêmeos idênticos têm sempre o mesmo sexo, gêmeos de sexos opostos (menino e menina) são obrigatoriamente dizigóticos."
  },
  {
    question: "Qual fator genético/familiar influencia com maior frequência a probabilidade de uma mulher ter gêmeos dizigóticos (fraternos)?",
    options: [
      "A tendência hereditária materna de liberar mais de um óvulo em um mesmo ciclo menstrual (hiperovulação)",
      "A velocidade com que os espermatozoides do pai se movem na uretra",
      "O tipo sanguíneo exclusivo do pai",
      "O uso regular de preservativos de látex antes da gestação"
    ],
    correctAnswer: "A tendência hereditária materna de liberar mais de um óvulo em um mesmo ciclo menstrual (hiperovulação)",
    explanation: "A predisposição genética para poliovulação (liberar dois ou mais óvulos no mesmo ciclo) é uma característica herdada do lado materno."
  },

  // =========================================================================
  // ASSUNTO 10: MÉTODOS CONTRACEPTIVOS, PREVENÇÃO DE ISTS E HIV/AIDS - 10 Questões
  // =========================================================================
  {
    question: "Qual é o ÚNICO método contraceptivo que previne simultaneamente uma gravidez não planejada e as Infecções Sexualmente Transmissíveis (ISTs)?",
    options: [
      "Preservativo (camisinha masculina ou feminina)",
      "Pílula anticoncepcional oral combinada",
      "Dispositivo Intrauterino (DIU de cobre)",
      "Método da tabelinha (Ogino-Knaus)"
    ],
    correctAnswer: "Preservativo (camisinha masculina ou feminina)",
    explanation: "A camisinha atua como uma barreira física impermeável, sendo o único método cientificamente comprovado que protege contra gravidez e contra ISTs."
  },
  {
    question: "O que é a estratégia da 'Dupla Proteção' na saúde reprodutiva?",
    options: [
      "O uso combinado do preservativo (para evitar ISTs) junto com outro método de alta eficácia contraceptiva (como pílula ou DIU)",
      "Tomar duas pílulas anticoncepcionais no mesmo horário todos os dias",
      "Utilizar duas camisinhas masculinas sobrepostas ao mesmo tempo",
      "Fazer abstinência sexual apenas nos fins de semana"
    ],
    correctAnswer: "O uso combinado do preservativo (para evitar ISTs) junto com outro método de alta eficácia contraceptiva (como pílula ou DIU)",
    explanation: "A dupla proteção alia a barreira contra patógenos (camisinha) à segurança reprodutiva de um método contraceptivo complementar."
  },
  {
    question: "Como funcionam as pílulas anticoncepcionais hormonais comuns tomadas diariamente?",
    options: [
      "Inibem os hormônios da hipófise (FSH e LH), impedindo a maturação do folículo e a ovulação",
      "Matam os espermatozoides mecanicamente dentro do pênis",
      "Destroem permanentemente os ovários da mulher",
      "Bloqueiam a passagem de urina pela uretra feminina"
    ],
    correctAnswer: "Inibem os hormônios da hipófise (FSH e LH), impedindo a maturação do folículo e a ovulação",
    explanation: "Com níveis mantidos de estrógeno e progestagênio sintéticos, a hipófise não libera o pico de FSH/LH, bloqueando a ovulação."
  },
  {
    question: "Quais são os principais métodos contraceptivos cirúrgicos (definitivos) realizados no homem e na mulher, respectivamente?",
    options: [
      "Vasectomia (nos homens) e Laqueadura / Ligadura de trompas (nas mulheres)",
      "Uretrotomia (nos homens) e Cesariana (nas mulheres)",
      "Biópsia prostática (nos homens) e Papanicolaou (nas mulheres)",
      "Circuncisão (nos homens) e Histeroscopia (nas mulheres)"
    ],
    correctAnswer: "Vasectomia (nos homens) e Laqueadura / Ligadura de trompas (nas mulheres)",
    explanation: "A vasectomia corta/liga os ductos deferentes impedindo espermatozoides no sêmen; a laqueadura corta/amarra as tubas uterinas."
  },
  {
    question: "Por que métodos comportamentais como o 'coito interrompido' e a 'tabelinha' são considerados pouco eficazes e perigosos?",
    options: [
      "Porque o líquido pré-ejaculatório já pode conter espermatozoides, o ciclo menstrual varia com frequência e nenhum deles previne ISTs",
      "Porque exigem intervenções cirúrgicas hospitalares de alto risco",
      "Porque aumentam a produção de testosterona na mulher",
      "Porque destroem os anticorpos do sistema imunológico"
    ],
    correctAnswer: "Porque o líquido pré-ejaculatório já pode conter espermatozoides, o ciclo menstrual varia com frequência e nenhum deles previne ISTs",
    explanation: "O coito interrompido e a tabelinha têm altas taxas de falha (ciclos irregulares, secreções prévias) e não oferecem proteção contra infecções."
  },
  {
    question: "O que é a 'Pílula do Dia Seguinte' e qual é a sua correta forma de uso?",
    options: [
      "Um método hormonal emergencial com alta dosagem, que deve ser tomado em até 72h após relação desprotegida, não devendo ser usado de rotina",
      "Um comprimido vitamínico diário para ser tomado antes de todas as refeições",
      "Uma vacina preventiva definitiva contra o vírus do HIV e da sífilis",
      "Um medicamento de uso obrigatório semanal para todas as adolescentes"
    ],
    correctAnswer: "Um método hormonal emergencial com alta dosagem, que deve ser tomado em até 72h após relação desprotegida, não devendo ser usado de rotina",
    explanation: "A pílula de emergência tem altas doses hormonais para retardar a ovulação ou impedir a nidação, perdendo eficácia com o passar das horas."
  },
  {
    question: "Qual é a diferença científica fundamental entre HIV e AIDS?",
    options: [
      "HIV é o vírus (agente causador) que ataca as células de defesa; AIDS é a síndrome e estágio avançado quando o sistema imune está debilitado",
      "HIV e AIDS são dois tipos de bactérias que afetam apenas o sistema digestivo",
      "HIV é a doença terminal e AIDS é o exame de sangue que detecta a cura",
      "AIDS é transmitida por toalhas e o HIV é transmitido apenas pelo ar"
    ],
    correctAnswer: "HIV é o vírus (agente causador) que ataca as células de defesa; AIDS é a síndrome e estágio avançado quando o sistema imune está debilitado",
    explanation: "O HIV é o vírus da imunodeficiência humana. Uma pessoa pode ser portadora do HIV (soropositiva) e viver saudável sem desenvolver AIDS com o tratamento."
  },
  {
    question: "Com os tratamentos antirretrovirais modernos, o que significa o conceito médico 'Indetectável = Intransmissível' (I = I)?",
    options: [
      "Com o tratamento regular, a carga viral no sangue fica tão baixa (indetectável) que a pessoa com HIV não transmite o vírus por via sexual",
      "Significa que o vírus desaparece do corpo em menos de 24 horas",
      "Significa que a pessoa pode parar de tomar todos os remédios para sempre",
      "Significa que o vírus se transformou espontaneamente em bactéria benéfica"
    ],
    correctAnswer: "Com o tratamento regular, a carga viral no sangue fica tão baixa (indetectável) que a pessoa com HIV não transmite o vírus por via sexual",
    explanation: "Pessoas vivendo com HIV em tratamento com carga viral indetectável há pelo menos 6 meses não transmitem o vírus sexualmente."
  },
  {
    question: "Assinale a alternativa que relaciona corretamente ISTs e seus respectivos agentes causadores (bactérias, vírus e fungos):",
    options: [
      "Sífilis e Gonorreia são causadas por bactérias; HPV, Herpes e AIDS por vírus; Candidíase por fungos",
      "Todas as ISTs conhecidas são causadas exclusivamente pelo mesmo fungo",
      "A Sífilis é causada por um vírus e o HPV é causado por um protozoário intestinal",
      "A Gonorreia é causada por um verme platelminto parasita"
    ],
    correctAnswer: "Sífilis e Gonorreia são causadas por bactérias; HPV, Herpes e AIDS por vírus; Candidíase por fungos",
    explanation: "Sífilis (Treponema pallidum) e Gonorreia são bacterianas; HPV, Herpes e HIV são virais; Candidíase (Candida albicans) é fúngica."
  },
  {
    question: "Qual é a principal manifestação inicial da sífilis primária na região genital?",
    options: [
      "Uma ferida ou úlcera indolor com bordas endurecidas (cancro duro) que pode desaparecer espontaneamente mesmo sem cura",
      "Coceira intensa com secreção verde e febre hemorrágica imediata",
      "Aparecimento de dentes extras na cavidade bucal",
      "Engrossamento instantâneo da voz masculina"
    ],
    correctAnswer: "Uma ferida ou úlcera indolor com bordas endurecidas (cancro duro) que pode desaparecer espontaneamente mesmo sem cura",
    explanation: "O cancro duro da sífilis primária é uma ferida indolor de bordas duras; mesmo que ela suma, a bactéria continua no organismo exigindo antibiótico."
  }
];

export async function generateQuizQuestions(): Promise<Question[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...questions]);
    }, 200);
  });
}
