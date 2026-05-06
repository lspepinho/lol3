import { Question } from '../types';

const hardQuestions: Question[] = [
  // ==========================================
  // 1. CINEMÁTICA E MOVIMENTO (12 questões)
  // ==========================================
  {
    question: "Um corpo percorre 240 km em 2 horas e, em seguida, dobra sua velocidade para o restante do percurso. Qual a velocidade média inicial e a nova velocidade?",
    options: ["120 km/h e 240 km/h", "100 km/h e 200 km/h", "60 km/h e 120 km/h", "120 km/h e 180 km/h"],
    correctAnswer: "120 km/h e 240 km/h",
    explanation: "Inicial: 240/2 = 120 km/h. Dobro: 120 x 2 = 240 km/h."
  },
  {
    question: "Sobre o referencial, se um passageiro caminha para a frente de um ônibus a 1 m/s e o ônibus se move a 20 m/s, qual a velocidade do passageiro para alguém na calçada?",
    options: ["19 m/s", "20 m/s", "21 m/s", "1 m/s"],
    correctAnswer: "21 m/s",
    explanation: "As velocidades se somam quando no mesmo sentido: 20 + 1 = 21 m/s."
  },
  {
    question: "Qual característica define a trajetória de um projétil lançado que não seja perfeitamente vertical?",
    options: ["Reta", "Curvilínea", "Estática", "Circular Uniforme"],
    correctAnswer: "Curvilínea",
    explanation: "A trajetória curvilínea ocorre quando a linha do movimento desenha uma curva no espaço."
  },
  {
    question: "A aceleração escalar é definida como a taxa de variação de qual grandeza ao longo do tempo?",
    options: ["Posição", "Referencial", "Velocidade", "Trajetória"],
    correctAnswer: "Velocidade",
    explanation: "Acelerar significa mudar o valor ou a direção da velocidade."
  },
  {
    question: "O 'Efeito Arghi!' em uma curva brusca demonstra qual conceito físico relacionado à velocidade?",
    options: ["Velocidade Escalar constante", "Aceleração por mudança de direção", "Repouso absoluto", "Falta de referencial"],
    correctAnswer: "Aceleração por mudança de direção",
    explanation: "Mudar a direção da velocidade, mesmo sem mudar o valor, é uma forma de aceleração."
  },
  {
    question: "Se um atleta olímpico mantém 10 m/s constantes, em quanto tempo ele completaria uma maratona de 42 km (aprox)?",
    options: ["42 segundos", "420 segundos", "70 minutos", "4200 segundos"],
    correctAnswer: "4200 segundos",
    explanation: "Tempo = Distância / Velocidade. 42.000 m / 10 m/s = 4.200 s (70 minutos)."
  },
  {
    question: "Uma formiga carrega uma folha por 10 m em 20 s. Qual sua velocidade em cm/s?",
    options: ["0,5 cm/s", "5 cm/s", "50 cm/s", "500 cm/s"],
    correctAnswer: "50 cm/s",
    explanation: "10 m = 1000 cm. 1000 / 20 = 50 cm/s."
  },
  {
    question: "Dois corpos estão na mesma direção (horizontal) mas sentidos opostos. Se v1 = 10 m/s e v2 = -10 m/s, o que o sinal negativo indica?",
    options: ["Que o corpo parou", "Que o corpo está voltando/sentido oposto", "Que a velocidade é imaginária", "Erro de cálculo"],
    correctAnswer: "Que o corpo está voltando/sentido oposto",
    explanation: "Na velocidade vetorial, o sinal indica o sentido em relação ao referencial positivo."
  },
  {
    question: "Um drone sobe 60 m em 12 s e depois desce 60 m em 10 s. Qual a velocidade média de subida?",
    options: ["5 m/s", "6 m/s", "12 m/s", "11 m/s"],
    correctAnswer: "5 m/s",
    explanation: "60 / 12 = 5 m/s."
  },
  {
    question: "Qual a unidade de aceleração no Sistema Internacional?",
    options: ["m/s", "km/h²", "m/s²", "m.s"],
    correctAnswer: "m/s²",
    explanation: "A aceleração mede a variação da velocidade (m/s) por unidade de tempo (s)."
  },
  {
    question: "Um skatista percorre 40 m em 8 s. Se ele triplicar a distância no mesmo tempo, qual será sua nova velocidade?",
    options: ["5 m/s", "10 m/s", "15 m/s", "3 m/s"],
    correctAnswer: "15 m/s",
    explanation: "Distância triplicada = 120 m. 120 / 8 = 15 m/s."
  },
  {
    question: "O repouso e o movimento são conceitos:",
    options: ["Absolutos", "Relativos", "Irrelevantes", "Estáticos"],
    correctAnswer: "Relativos",
    explanation: "Dependem inteiramente do referencial adotado para a observação."
  },

  // ==========================================
  // 2. METEOROLOGIA E CIÊNCIA ATMOSFÉRICA (12 questões)
  // ==========================================
  {
    question: "Nuvens Cirros são encontradas geralmente acima de qual altitude?",
    options: ["1.000m", "2.500m", "6.000m", "15.000m"],
    correctAnswer: "6.000m",
    explanation: "Cirros são nuvens de alta altitude, situadas acima de 6 km."
  },
  {
    question: "Qual o sinal meteorológico de nuvens do tipo 'Cúmulos'?",
    options: ["Tempestade severa", "Tempo firme e ensolarado", "Garoas leves e constantes", "Céu nublado e escuro"],
    correctAnswer: "Tempo firme e ensolarado",
    explanation: "Cúmulos são montículos de algodão branco associados a bom tempo."
  },
  {
    question: "A pressão atmosférica cai para níveis baixos e a umidade atinge 95%. Qual fenômeno é altamente provável?",
    options: ["Nevasca", "Tempestade com raios", "Céu limpo", "Seca severa"],
    correctAnswer: "Tempestade com raios",
    explanation: "Baixa pressão e alta umidade favorecem a convecção rápida e formação de Nimbos."
  },
  {
    question: "Qual a definição climatológica para a 'Personalidade' de uma região?",
    options: ["Tempo", "Clima", "Estação", "Altitude"],
    correctAnswer: "Clima",
    explanation: "O clima é a tendência duradoura baseada em décadas de observação."
  },
  {
    question: "O que o Barômetro mede especificamente?",
    options: ["A velocidade das partículas", "O peso da coluna de ar sobre a superfície", "O vapor d'água invisível", "A radiação solar"],
    correctAnswer: "O peso da coluna de ar sobre a superfície",
    explanation: "Pressão atmosférica é a força exercida pelo ar sobre a área."
  },
  {
    question: "A ciência que analisa as interações químicas da atmosfera com a superfície terrestre é uma ramificação da:",
    options: ["Geologia", "Meteorologia", "Biologia", "Física Nuclear"],
    correctAnswer: "Meteorologia",
    explanation: "Mencionado nas notas como o estudo do estado químico e interações da atmosfera."
  },
  {
    question: "A umidade relativa do ar é expressa em qual unidade?",
    options: ["Graus Celsius", "Milímetros (mm)", "Porcentagem (%)", "hPa"],
    correctAnswer: "Porcentagem (%)",
    explanation: "Indica quanto vapor existe em relação ao máximo que o ar suporta naquela temperatura."
  },
  {
    question: "Qual instrumento é fundamental para monitorar a quantidade de chuva para a agricultura?",
    options: ["Higrômetro", "Pluviômetro", "Anemógrafo", "Barômetro"],
    correctAnswer: "Pluviômetro",
    explanation: "Mede a precipitação pluvial, essencial para o planejamento agrícola."
  },
  {
    question: "Um 'Anemógrafo' difere de um Anemômetro comum por qual motivo?",
    options: ["Mede apenas a direção", "Mede e registra a velocidade do vento graficamente", "Funciona apenas em satélites", "É usado para medir pressão"],
    correctAnswer: "Mede e registra a velocidade do vento graficamente",
    explanation: "Instrumentos com sufixo 'grafo' registram os dados ao longo do tempo."
  },
  {
    question: "Por que o ar frio tende a descer nos Polos?",
    options: ["Porque é mais leve", "Porque é mais denso e pesado", "Devido à rotação da Terra", "Porque não há nuvens"],
    correctAnswer: "Porque é mais denso e pesado",
    explanation: "O resfriamento torna as moléculas mais próximas, aumentando a densidade do ar."
  },
  {
    question: "O monitoramento climático exige um período mínimo de quantos anos para definir o clima?",
    options: ["5 anos", "10 anos", "30 anos", "100 anos"],
    correctAnswer: "30 anos",
    explanation: "30 anos é o padrão da OMM para definir as normais climatológicas."
  },
  {
    question: "Satélites artificiais captam imagens que auxiliam o INMET. Qual órgão gerencia a previsão no Brasil?",
    options: ["IBGE", "INPE/CPTEC", "INMET", "NASA"],
    correctAnswer: "INMET",
    explanation: "O Instituto Nacional de Meteorologia é o órgão oficial citado nas notas."
  },

  // ==========================================
  // 3. ASTRONOMIA E MOVIMENTOS TERRESTRES (12 questões)
  // ==========================================
  {
    question: "Qual a velocidade aproximada de rotação da Terra na Linha do Equador?",
    options: ["100 km/h", "800 km/h", "1674 km/h", "29,78 km/s"],
    correctAnswer: "1674 km/h",
    explanation: "No Equador, a Terra gira a esta impressionante velocidade."
  },
  {
    question: "A duração exata da Rotação é de 23h 56min 4s e 9 centésimos. Como chamamos esse período?",
    options: ["Dia Solar", "Dia Sideral", "Ano Bissexto", "Equinócio"],
    correctAnswer: "Dia Sideral",
    explanation: "É o tempo que a Terra leva para completar um giro de 360° em relação às estrelas distantes."
  },
  {
    question: "Qual a velocidade orbital média da Terra durante a Translação?",
    options: ["1.674 km/h", "10.000 km/h", "29,78 km/s", "300.000 km/s"],
    correctAnswer: "29,78 km/s",
    explanation: "A Terra viaja no espaço a quase 30 quilômetros por segundo."
  },
  {
    question: "O 'Alfélio' é o ponto máximo de afastamento da Terra ao Sol. Qual a distância aproximada?",
    options: ["147,1 milhões de km", "149,6 milhões de km", "152,1 milhões de km", "200 milhões de km"],
    correctAnswer: "152,1 milhões de km",
    explanation: "O Afélio ocorre quando a Terra está mais distante do Sol."
  },
  {
    question: "As estações do ano ocorrem DEVIDO a qual combinação de fatores?",
    options: [
      "Distância do Sol + Rotação",
      "Inclinação do eixo (23,5°) + Translação",
      "Fases da Lua + Marés",
      "Atividade Solar + Albedo"
    ],
    correctAnswer: "Inclinação do eixo (23,5°) + Translação",
    explanation: "A distância não é o fator; a inclinação garante a incidência desigual de luz."
  },
  {
    question: "Qual o marco astronômico onde o Sol incide perpendicularmente sobre a Linha do Equador?",
    options: ["Solstício de Verão", "Solstício de Inverno", "Equinócio", "Periélio"],
    correctAnswer: "Equinócio",
    explanation: "Nos equinócios, ambos os hemisférios recebem luz com a mesma intensidade."
  },
  {
    question: "O Solstício (Sol Parado) marca o início das estações extremas. O que acontece com os dias no Verão?",
    options: ["São mais curtos", "Têm a mesma duração das noites", "São os mais longos do ano", "Param de existir"],
    correctAnswer: "São os mais longos do ano",
    explanation: "No solstício de verão, a luz atinge o trópico com inclinação máxima benéfica."
  },
  {
    question: "Em 2026, em que horário exato ocorrerá o Equinócio de Outono no Hemisfério Sul?",
    options: ["06h14", "11h45", "18h50", "21h05"],
    correctAnswer: "11h45",
    explanation: "De acordo com a tabela de dados móveis de 2026 fornecida nos materiais."
  },
  {
    question: "O 'Ano Bissexto' corrige uma sobra anual de aproximadamente quanto tempo?",
    options: ["24 horas", "12 horas", "6 horas", "1 hora"],
    correctAnswer: "6 horas",
    explanation: "365 dias e ~6h acumuladas geram 1 dia extra a cada 4 anos."
  },
  {
    question: "Por que o Hemisfério Norte vive estações opostas ao Sul?",
    options: [
      "Porque está mais perto do Sol",
      "Devido à rotação ser invertida",
      "Porque sua inclinação compensa a do Sul em relação à luz solar",
      "Porque o Sol só ilumina metade da Terra por vez"
    ],
    correctAnswer: "Porque sua inclinação compensa a do Sul em relação à luz solar",
    explanation: "Quando um hemisfério está inclinado para o Sol (Verão), o outro está afastado (Inverno)."
  },
  {
    question: "Qual a distância média da Terra ao Sol (Raio Médio)?",
    options: ["100 milhões de km", "149,6 milhões de km", "152,1 milhões de km", "384.000 km"],
    correctAnswer: "149,6 milhões de km",
    explanation: "Esta é a Unidade Astronômica (UA) média."
  },
  {
    question: "O inverno no Hemisfério Sul começa quando os raios solares incidem sobre qual trópico?",
    options: ["Equador", "Trópico de Capricórnio", "Trópico de Câncer", "Círculo Polar Ártico"],
    correctAnswer: "Trópico de Câncer",
    explanation: "No solstício de inverno do Sul, o Sol está no ápice sobre o Trópico de Câncer (Verão no Norte)."
  },

  // ==========================================
  // 4. LUA E ECLIPSES (12 questões)
  // ==========================================
  {
    question: "O Período Sinódico da Lua (Ciclo de Lunação) dura 29,5 dias. O Sideral dura quanto?",
    options: ["24 horas", "7 dias", "27,3 dias", "31 dias"],
    correctAnswer: "27,3 dias",
    explanation: "O mês sideral é o tempo de órbita real; o sinódico depende do alinhamento com o Sol."
  },
  {
    question: "Um eclipse SOLAR ocorre obrigatoriamente em qual fase lunar?",
    options: ["Lua Cheia", "Quarto Crescente", "Lua Nova", "Quarto Minguante"],
    correctAnswer: "Lua Nova",
    explanation: "A Lua deve estar entre o Sol e a Terra (Lua Nova)."
  },
  {
    question: "Por que os eclipses só ocorrem nos chamados 'Nós Orbitais'?",
    options: [
      "Porque a Lua para de girar",
      "Porque é onde os planos das órbitas da Terra e da Lua se cruzam",
      "Porque a Lua está mais longe",
      "Porque o Sol está em sua potência máxima"
    ],
    correctAnswer: "Porque é onde os planos das órbitas da Terra e da Lua se cruzam",
    explanation: "A inclinação de 5° impede eclipses mensais; eles exigem alinhamento nos nós."
  },
  {
    question: "No Eclipse Lunar, a cor avermelhada ('Lua de Sangue') é causada por:",
    options: [
      "Reflexão de vulcões terrestres",
      "Fogo na superfície lunar",
      "Raios solares filtrados pela atmosfera da Terra",
      "Falta total de luz no espaço"
    ],
    correctAnswer: "Raios solares filtrados pela atmosfera da Terra",
    explanation: "A atmosfera desvia a luz vermelha para a sombra da Terra."
  },
  {
    question: "Qual a diferença entre Umbra e Penumbra em um eclipse?",
    options: [
      "Umbra é sombra parcial; Penumbra é total",
      "Umbra é sombra total; Penumbra é sombra parcial",
      "São apenas nomes para fases da lua",
      "Umbra ocorre no Sol e Penumbra na Lua"
    ],
    correctAnswer: "Umbra é sombra total; Penumbra é sombra parcial",
    explanation: "Umbra é a região onde o Sol é completamente bloqueado."
  },
  {
    question: "O 'Eclipse Anular' (anel de fogo) ocorre quando:",
    options: [
      "A Lua está muito próxima da Terra",
      "A Lua está mais longe na órbita e não cobre todo o Sol",
      "A Terra está no Periélio",
      "A Lua entra na penumbra da Terra"
    ],
    correctAnswer: "A Lua está mais longe na órbita e não cobre todo o Sol",
    explanation: "A Lua parece menor e deixa as bordas do Sol visíveis."
  },
  {
    question: "Qual a duração aproximada de cada uma das quatro fases principais da Lua?",
    options: ["1 dia", "3 a 4 dias", "7 a 8 dias", "15 dias"],
    correctAnswer: "7 a 8 dias",
    explanation: "O ciclo total de ~29,5 dias dividido em 4 fases principais."
  },
  {
    question: "A Lua Nova nasce e se põe em quais horários aproximados?",
    options: [
      "Nasce às 18h e se põe às 6h",
      "Nasce às 6h e se põe às 18h",
      "Nasce ao meio-dia e se põe à meia-noite",
      "Nasce à meia-noite e se põe ao meio-dia"
    ],
    correctAnswer: "Nasce às 6h e se põe às 18h",
    explanation: "Ela acompanha o Sol no céu durante o dia."
  },
  {
    question: "O fenômeno do 'Lado Oculto' da Lua é consequência direta de quê?",
    options: [
      "A Lua não ter rotação",
      "A rotação da Lua ser síncrona/igual à sua revolução",
      "Sombra constante da Terra",
      "A Lua estar presa em um nó orbital"
    ],
    correctAnswer: "A rotação da Lua ser síncrona/igual à sua revolução",
    explanation: "Ela gira sobre si mesma no mesmo tempo em que orbita a Terra."
  },
  {
    question: "Qual o perigo indicado para observação solar sem proteção?",
    options: ["Queimaduras de pele", "Cegueira temporária", "Danos permanentes à retina", "Efeito Arghi!"],
    correctAnswer: "Danos permanentes à retina",
    explanation: "A luz solar concentrada queima as células sensíveis dos olhos."
  },
  {
    question: "Eclipses solares ocorrem na ordem: Sol -> Lua -> Terra. Qual a ordem do LUNAR?",
    options: ["Terra -> Sol -> Lua", "Sol -> Terra -> Lua", "Lua -> Terra -> Sol", "Sol -> Lua -> Terra"],
    correctAnswer: "Sol -> Terra -> Lua",
    explanation: "A Terra fica no meio, impedindo a luz de chegar à Lua."
  },
  {
    question: "Eclipses Lunares podem ser vistos de qual parte da Terra?",
    options: [
      "Lugar muito pequeno (embaixo da umbra)",
      "Qualquer lugar onde seja noite",
      "Apenas na Linha do Equador",
      "Somente do Polo Sul"
    ],
    correctAnswer: "Qualquer lugar onde seja noite",
    explanation: "Diferente do solar, o lunar é visível por todo um hemisfério noturno."
  },

  // ==========================================
  // 5. GEOPOLÍTICA E RELAÇÕES DE PODER (12 questões)
  // ==========================================
  {
    question: "O termo 'Cortina de Ferro' foi celebrizado para descrever qual divisão?",
    options: ["EUA vs China", "Capitalismo vs Socialismo na Europa", "Norte vs Sul Global", "Mundo Desenvolvido vs Emergente"],
    correctAnswer: "Capitalismo vs Socialismo na Europa",
    explanation: "Divisão ideológica e física liderada por Churchill para descrever a influência soviética."
  },
  {
    question: "O 'Soft Power' (Poder Suave) baseia-se primordialmente em:",
    options: ["Força militar", "Sanções econômicas", "Atração cultural, ideológica e tecnológica", "Conquista territorial"],
    correctAnswer: "Atração cultural, ideológica e tecnológica",
    explanation: "É o poder de convencer e atrair sem o uso de coação física."
  },
  {
    question: "Qual década marcou a desintegração da URSS e o fim da ordem bipolar?",
    options: ["1970", "1980", "1990", "2000"],
    correctAnswer: "1990",
    explanation: "A URSS desintegrou-se oficialmente em 1991."
  },
  {
    question: "A rivalidade atual entre EUA e China foca em qual campo de batalha geopolítico?",
    options: ["Controle de colônias na África", "Domínio tecnológico (IA, 5G) e econômico", "Disputa religiosa", "Guerra de trincheiras"],
    correctAnswer: "Domínio tecnológico (IA, 5G) e econômico",
    explanation: "A tecnologia de ponta é a base do poder geoeconômico moderno."
  },
  {
    question: "O que o grupo 'Brics' representa na transição multipolar?",
    options: [
      "Uma aliança militar de ataque",
      "A ascensão de potências emergentes do Sul Global",
      "Um tribunal de justiça internacional",
      "Um bloco de moedas digitais apenas"
    ],
    correctAnswer: "A ascensão de potências emergentes do Sul Global",
    explanation: "Países como Brasil e Índia buscam equilibrar o poder global."
  },
  {
    question: "Quais são os principais 'Atores Globais' citados além dos Estados?",
    options: ["Clubes de bairro", "Empresas Multinacionais e Blocos Econômicos", "Apenas as Forças Armadas", "Igrejas locais"],
    correctAnswer: "Empresas Multinacionais e Blocos Econômicos",
    explanation: "Eles possuem poder financeiro e político que atravessa fronteiras."
  },
  {
    question: "A Geopolítica Moderna prioriza o controle de fluxos. O que isso significa?",
    options: ["Controle de rios", "Controle de informações, finanças e tecnologia", "Controle de trânsito urbano", "Controle de oceanos apenas"],
    correctAnswer: "Controle de informações, finanças e tecnologia",
    explanation: "O poder hoje reside no controle de redes e dados globais."
  },
  {
    question: "O conceito de 'Guerra por Procuração' (Proxy Wars) foi comum em qual período?",
    options: ["Grandes Navegações", "Guerra Fria", "Primeira Guerra Mundial", "Era Digital"],
    correctAnswer: "Guerra Fria",
    explanation: "EUA e URSS lutavam através de aliados (ex: Vietnã, Coreia)."
  },
  {
    question: "Como os conflitos geopolíticos afetam o consumidor final no Brasil?",
    options: ["Não afetam", "Mudam apenas as notícias", "Alteram preços de commodities (petróleo, grãos)", "Muda a cor da bandeira"],
    correctAnswer: "Alteram preços de commodities (petróleo, grãos)",
    explanation: "Tensões afetam cadeias de suprimento e mercados energéticos globais."
  },
  {
    question: "A ordem mundial após a queda do Muro de Berlim passou por quais fases?",
    options: [
      "Sempre foi Bipolar",
      "Unipolar (EUA) -> Multipolar",
      "Multipolar -> Unipolar",
      "Desaparecimento dos Estados"
    ],
    correctAnswer: "Unipolar (EUA) -> Multipolar",
    explanation: "Houve um momento de hegemonia americana antes da ascensão chinesa e europeia."
  },
  {
    question: "A soberania dos países na globalização é descrita como:",
    options: ["Absoluta e Intocável", "Relativa e Interdependente", "Inexistente", "Apenas militar"],
    correctAnswer: "Relativa e Interdependente",
    explanation: "Os Estados precisam cooperar e dependem uns dos outros para sobreviver economicamente."
  },
  {
    question: "Qual o principal objetivo da Geopolítica ao estudar o território?",
    options: [
      "Desenhar mapas bonitos",
      "Entender a relação entre geografia física e estratégias de poder",
      "Contar o número de árvores",
      "Mudar o nome dos países"
    ],
    correctAnswer: "Entender a relação entre geografia física e estratégias de poder",
    explanation: "O território é o espaço onde o poder é exercido e disputado."
  }
];

function shuffleArray(array: Question[]): Question[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
}

export async function generateQuizQuestions(): Promise<Question[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(shuffleArray([...hardQuestions]));
    }, 500);
  });
}
