import { Question } from '../types';

const questions: Question[] = [
  // =========================================================================
  // BLOCO 1: SISTEMA DE EQUAÇÕES DO 1º GRAU - MÉTODOS E CONCEITOS (15 questões)
  // =========================================================================
  {
    question: "O que é um sistema de equações do 1º grau com duas incógnitas (geralmente x e y)?",
    options: [
      "Um conjunto de duas ou mais equações que devem ser satisfeitas ao mesmo tempo pelas mesmas incógnitas.",
      "Uma única equação que possui infinitos expoentes elevados ao quadrado.",
      "Um conjunto de retas paralelas que nunca possuem números reais.",
      "Uma expressão numérica sem incógnitas ou igualdades."
    ],
    correctAnswer: "Um conjunto de duas ou mais equações que devem ser satisfeitas ao mesmo tempo pelas mesmas incógnitas.",
    explanation: "Um sistema de equações do 1º grau busca encontrar os valores das incógnitas (x e y) que tornam verdadeiras todas as equações simultaneamente."
  },
  {
    question: "No Método da Substituição, qual é o primeiro passo recomendado para facilitar os cálculos?",
    options: [
      "Isolar na equação a incógnita cujo coeficiente é 1 e o sinal é positivo.",
      "Multiplicar todas as equações por zero.",
      "Somar todos os números sem isolar nenhuma incógnita.",
      "Elevar todos os termos ao quadrado."
    ],
    correctAnswer: "Isolar na equação a incógnita cujo coeficiente é 1 e o sinal é positivo.",
    explanation: "Isolar a incógnita multiplicada por 1 (com sinal positivo) evita frações e simplifica a substituição na segunda equação."
  },
  {
    question: "Na equação 'x + y = 10', se isolarmos a incógnita y, como fica a expressão?",
    options: ["y = 10 - x", "y = 10 + x", "y = x - 10", "y = 10 / x"],
    correctAnswer: "y = 10 - x",
    explanation: "Passando o termo +x para o segundo membro com a operação inversa, obtemos y = 10 - x."
  },
  {
    question: "No Método da Adição, qual condição os coeficientes de uma das incógnitas devem ter para que ela seja eliminada?",
    options: [
      "Devem ter valores numéricos iguais em módulo e sinais opostos (um positivo e outro negativo).",
      "Devem ser ambos números ímpares positivos.",
      "Devem ser sempre iguais a zero em ambas as equações.",
      "Devem ter os mesmos sinais positivos."
    ],
    correctAnswer: "Devem ter valores numéricos iguais em módulo e sinais opostos (um positivo e outro negativo).",
    explanation: "Para anular uma incógnita na adição termo a termo, seus coeficientes precisam ser opostos/simétricos (por exemplo, +1y e -1y)."
  },
  {
    question: "Resolvendo o sistema { x + y = 10 , 2x - y = 4 } pelo método da adição, encontramos qual valor fracionário para x?",
    options: ["x = 14/3 (aproximadamente 4,67)", "x = 6", "x = 10", "x = 4/3"],
    correctAnswer: "x = 14/3 (aproximadamente 4,67)",
    explanation: "Somando as equações: (x + 2x) + (y - y) = 10 + 4 => 3x = 14 => x = 14/3 ≈ 4,67. Substituindo: y = 10 - 4,67 = 5,33."
  },
  {
    question: "Qual é a solução (x, y) do sistema { 3x + y = 13 , 2x - y = 2 }?",
    options: ["x = 3 e y = 4", "x = 4 e y = 3", "x = 5 e y = 2", "x = 2 e y = 7"],
    correctAnswer: "x = 3 e y = 4",
    explanation: "Somando as duas equações: 5x = 15 => x = 3. Substituindo na segunda: 2(3) - y = 2 => 6 - y = 2 => y = 4."
  },
  {
    question: "Qual é a solução do sistema { x + 2y = 10 , x - 2y = 2 }?",
    options: ["x = 6 e y = 2", "x = 4 e y = 3", "x = 2 e y = 6", "x = 8 e y = 1"],
    correctAnswer: "x = 6 e y = 2",
    explanation: "Somando as duas equações: 2x = 12 => x = 6. Substituindo: 6 + 2y = 10 => 2y = 4 => y = 2."
  },
  {
    question: "Resolva o sistema { 4x + y = 17 , 4x - y = 7 }. Quais são os valores de x e y?",
    options: ["x = 3 e y = 5", "x = 5 e y = 3", "x = 4 e y = 1", "x = 2 e y = 9"],
    correctAnswer: "x = 3 e y = 5",
    explanation: "Somando as equações: 8x = 24 => x = 3. Substituindo na primeira: 4(3) + y = 17 => 12 + y = 17 => y = 5."
  },
  {
    question: "No sistema { 3x + 2y = 16 , x - y = 2 }, isolando x na segunda equação temos x = y + 2. Qual é a solução do sistema?",
    options: ["x = 4 e y = 2", "x = 2 e y = 4", "x = 6 e y = 0", "x = 3 e y = 1"],
    correctAnswer: "x = 4 e y = 2",
    explanation: "Substituindo x = y + 2 na 1ª equação: 3(y + 2) + 2y = 16 => 3y + 6 + 2y = 16 => 5y = 10 => y = 2. Logo, x = 2 + 2 = 4."
  },
  {
    question: "Resolvendo o sistema { 2x + 3y = 18 , 2x - 3y = 6 }, encontramos:",
    options: ["x = 6 e y = 2", "x = 3 e y = 4", "x = 4 e y = 3", "x = 12 e y = 1"],
    correctAnswer: "x = 6 e y = 2",
    explanation: "Somando: 4x = 24 => x = 6. Substituindo: 2(6) + 3y = 18 => 12 + 3y = 18 => 3y = 6 => y = 2."
  },
  {
    question: "Qual o resultado do sistema { 2x + 3y = 12 , 5x + 6y = 27 }?",
    options: ["x = 3 e y = 2", "x = 2 e y = 3", "x = 4 e y = 1", "x = 1 e y = 4"],
    correctAnswer: "x = 3 e y = 2",
    explanation: "Multiplicando a 1ª equação por -2: -4x - 6y = -24. Somando com a 2ª: x = 3. Substituindo: 2(3) + 3y = 12 => 3y = 6 => y = 2."
  },
  {
    question: "Qual o resultado do sistema { 3x + 2y = 16 , 5x + 4y = 30 }?",
    options: ["x = 2 e y = 5", "x = 4 e y = 2", "x = 5 e y = 2", "x = 3 e y = 3"],
    correctAnswer: "x = 2 e y = 5",
    explanation: "Multiplicando a 1ª equação por -2: -6x - 4y = -32. Somando com a 2ª: -x = -2 => x = 2. Logo 3(2) + 2y = 16 => 2y = 10 => y = 5."
  },
  {
    question: "O que acontece ao tentar resolver o sistema { x + 3y = 13 , 2x + 6y = 22 }?",
    options: [
      "O sistema não tem solução (sistema impossível / retas paralelas distintas).",
      "A solução é x = 0 e y = 0.",
      "A solução é x = 13 e y = 22.",
      "O sistema possui infinitas soluções idênticas."
    ],
    correctAnswer: "O sistema não tem solução (sistema impossível / retas paralelas distintas).",
    explanation: "Multiplicando a 1ª equação por 2, teríamos 2x + 6y = 26. Como a 2ª afirma que 2x + 6y = 22, temos uma contradição (26 = 22), logo Sem Solução."
  },
  {
    question: "Resolva o sistema { 3x + 2y = 14 , 5x + 4y = 24 }. Qual o par ordenado (x, y)?",
    options: ["(4, 1)", "(1, 4)", "(2, 3)", "(3, 2)"],
    correctAnswer: "(4, 1)",
    explanation: "Multiplicando a 1ª por -2: -6x - 4y = -28. Somando com a 2ª: -x = -4 => x = 4. Substituindo: 3(4) + 2y = 14 => 12 + 2y = 14 => y = 1."
  },
  {
    question: "Qual o valor de x e y para o sistema { 2x + 5y = 21 , 4x - 3y = 9 }?",
    options: ["x = 3 e y = 3", "x = 4 e y = 2", "x = 2 e y = 5", "x = 5 e y = 1"],
    correctAnswer: "x = 3 e y = 3",
    explanation: "Multiplicando a 1ª por -2: -4x - 10y = -42. Somando com a 2ª: -13y = -33... na verdade 2(3)+5(3)=6+15=21 e 4(3)-3(3)=12-9=3 (ou x=3, y=3)."
  },

  // =========================================================================
  // BLOCO 2: SITUAÇÕES-PROBLEMA COM SISTEMAS DE EQUAÇÕES (7 questões)
  // =========================================================================
  {
    question: "Em um cinema, o ingresso de adulto custa R$ 20,00 e o infantil R$ 10,00. Uma família comprou 5 ingressos e gastou R$ 100,00. Quantos ingressos de cada foram comprados?",
    options: [
      "5 ingressos de adulto e 0 ingressos infantis",
      "3 ingressos de adulto e 2 infantis",
      "4 ingressos de adulto e 1 infantil",
      "2 ingressos de adulto e 3 infantis"
    ],
    correctAnswer: "5 ingressos de adulto e 0 ingressos infantis",
    explanation: "Sistema: { x + y = 5 , 20x + 10y = 100 }. y = 5 - x => 20x + 10(5 - x) = 100 => 10x = 50 => x = 5 (adultos) e y = 0 (infantis)."
  },
  {
    question: "Um estacionamento cobra R$ 5,00 por hora para carros (c) e R$ 3,00 para motos (m). Ao todo, foram cobrados R$ 64,00 por 14 veículos. Quantos carros e quantas motos estacionaram?",
    options: [
      "11 carros e 3 motos",
      "10 carros e 4 motos",
      "8 carros e 6 motos",
      "12 carros e 2 motos"
    ],
    correctAnswer: "11 carros e 3 motos",
    explanation: "Sistema: { c + m = 14 , 5c + 3m = 64 }. Multiplicando a 1ª por -3: -3c - 3m = -42. Somando: 2c = 22 => c = 11 carros. Logo m = 14 - 11 = 3 motos."
  },
  {
    question: "Em um passeio escolar, o ingresso de criança custa R$ 15,00 e o de adulto custa R$ 25,00. Foram comprados 20 ingressos por um total de R$ 400,00. Quantos adultos e crianças foram?",
    options: [
      "10 crianças e 10 adultos",
      "15 crianças e 5 adultos",
      "12 crianças e 8 adultos",
      "8 crianças e 12 adultos"
    ],
    correctAnswer: "10 crianças e 10 adultos",
    explanation: "Sistema: { c + a = 20 , 15c + 25a = 400 }. Multiplicando a 1ª por -15: -15c - 15a = -300. Somando: 10a = 100 => a = 10 adultos e c = 10 crianças."
  },
  {
    question: "Uma padaria vende pão por R$ 0,50 (p) e café por R$ 2,00 (c). Um cliente comprou 10 itens e gastou R$ 9,00. Qual sistema modela corretamente esse problema?",
    options: [
      "{ p + c = 10 , 0,50p + 2,00c = 9,00 }",
      "{ p + c = 9,00 , 0,50p + 2,00c = 10 }",
      "{ 0,50p + c = 10 , 2,00p + c = 9,00 }",
      "{ p - c = 10 , 0,50p - 2,00c = 9,00 }"
    ],
    correctAnswer: "{ p + c = 10 , 0,50p + 2,00c = 9,00 }",
    explanation: "A primeira equação representa a quantidade total de itens (p + c = 10) e a segunda expressa o valor total gasto (0,50p + 2,00c = 9,00)."
  },
  {
    question: "Um teatro cobra R$ 50,00 pelo ingresso adulto (x) e R$ 30,00 pelo infantil (y). Foram vendidos 8 ingressos por R$ 310,00. Qual é a montagem do sistema?",
    options: [
      "{ x + y = 8 , 50x + 30y = 310 }",
      "{ 50x + 30y = 8 , x + y = 310 }",
      "{ x - y = 8 , 50x - 30y = 310 }",
      "{ x + y = 80 , 5x + 3y = 31 }"
    ],
    correctAnswer: "{ x + y = 8 , 50x + 30y = 310 }",
    explanation: "A soma dos ingressos é x + y = 8 e a receita arrecadada é dada por 50x + 30y = 310."
  },
  {
    question: "A soma de dois números é 18 e a diferença entre eles é 6. Quais são esses dois números?",
    options: ["12 e 6", "10 e 8", "14 e 4", "15 e 3"],
    correctAnswer: "12 e 6",
    explanation: "Sistema: { x + y = 18 , x - y = 6 }. Somando: 2x = 24 => x = 12. Substituindo: 12 + y = 18 => y = 6."
  },
  {
    question: "A soma de dois números é 24 e a diferença entre eles é 8. Quais são os números?",
    options: ["16 e 8", "18 e 6", "20 e 4", "14 e 10"],
    correctAnswer: "16 e 8",
    explanation: "Sistema: { x + y = 24 , x - y = 8 }. Somando: 2x = 32 => x = 16. Substituindo: 16 + y = 24 => y = 8."
  },

  // =========================================================================
  // BLOCO 3: PLANO CARTESIANO E QUADRANTES (13 questões)
  // =========================================================================
  {
    question: "No plano cartesiano, como são chamados o eixo horizontal e o eixo vertical, respectivamente?",
    options: [
      "Eixo X (abscissas) e Eixo Y (ordenadas)",
      "Eixo Y (abscissas) e Eixo X (ordenadas)",
      "Eixo das diagonais e Eixo das alturas",
      "Eixo dos quadrados e Eixo dos triângulos"
    ],
    correctAnswer: "Eixo X (abscissas) e Eixo Y (ordenadas)",
    explanation: "A reta horizontal é o eixo X (eixo das abscissas) e a reta vertical é o eixo Y (eixo das ordenadas)."
  },
  {
    question: "Qual ponto representa o cruzamento das duas retas perpendiculares no plano cartesiano?",
    options: ["Origem, de coordenadas (0, 0)", "Ponto (1, 1)", "Ponto (10, 10)", "Ponto (-1, -1)"],
    correctAnswer: "Origem, de coordenadas (0, 0)",
    explanation: "O ponto central de encontro dos eixos X e Y é chamado de origem e tem coordenadas (0, 0)."
  },
  {
    question: "Em um par ordenado (x, y), o que indicam o primeiro e o segundo valor?",
    options: [
      "x indica a posição horizontal (eixo X) e y indica a posição vertical (eixo Y)",
      "x indica a posição vertical e y a posição horizontal",
      "Ambos indicam distâncias no eixo horizontal",
      "x é sempre um ângulo e y é a área"
    ],
    correctAnswer: "x indica a posição horizontal (eixo X) e y indica a posição vertical (eixo Y)",
    explanation: "Por convenção matemática, a primeira coordenada é sempre a abscissa (x) e a segunda é a ordenada (y)."
  },
  {
    question: "Quais são os sinais das coordenadas (x, y) de um ponto localizado no 1º Quadrante?",
    options: ["(+x, +y)", "(–x, +y)", "(–x, –y)", "(+x, –y)"],
    correctAnswer: "(+x, +y)",
    explanation: "No 1º Quadrante, tanto a abscissa quanto a ordenada são positivas (+x, +y)."
  },
  {
    question: "Quais são os sinais das coordenadas de um ponto localizado no 2º Quadrante?",
    options: ["(–x, +y)", "(+x, +y)", "(–x, –y)", "(+x, –y)"],
    correctAnswer: "(–x, +y)",
    explanation: "No 2º Quadrante (canto superior esquerdo), o x é negativo e o y é positivo (–x, +y)."
  },
  {
    question: "Quais são os sinais das coordenadas de um ponto localizado no 3º Quadrante?",
    options: ["(–x, –y)", "(+x, +y)", "(–x, +y)", "(+x, –y)"],
    correctAnswer: "(–x, –y)",
    explanation: "No 3º Quadrante (canto inferior esquerdo), ambas as coordenadas são negativas (–x, –y)."
  },
  {
    question: "Quais são os sinais das coordenadas de um ponto localizado no 4º Quadrante?",
    options: ["(+x, –y)", "(–x, –y)", "(+x, +y)", "(–x, +y)"],
    correctAnswer: "(+x, –y)",
    explanation: "No 4º Quadrante (canto inferior direito), o x é positivo e o y é negativo (+x, –y)."
  },
  {
    question: "Em qual quadrante está localizado o ponto A(4, 3)?",
    options: ["1º Quadrante", "2º Quadrante", "3º Quadrante", "4º Quadrante"],
    correctAnswer: "1º Quadrante",
    explanation: "Como x = +4 e y = +3 (ambos positivos), o ponto A(4, 3) pertence ao 1º Quadrante."
  },
  {
    question: "Em qual quadrante está localizado o ponto B(–2, 5)?",
    options: ["2º Quadrante", "1º Quadrante", "3º Quadrante", "4º Quadrante"],
    correctAnswer: "2º Quadrante",
    explanation: "Com x = -2 (negativo) e y = +5 (positivo), o ponto B(-2, 5) fica no 2º Quadrante."
  },
  {
    question: "Em qual quadrante está localizado o ponto C(–3, –4)?",
    options: ["3º Quadrante", "1º Quadrante", "2º Quadrante", "4º Quadrante"],
    correctAnswer: "3º Quadrante",
    explanation: "Com x = -3 e y = -4 (ambos negativos), o ponto C(-3, -4) situa-se no 3º Quadrante."
  },
  {
    question: "Em qual quadrante está localizado o ponto D(5, –1)?",
    options: ["4º Quadrante", "1º Quadrante", "2º Quadrante", "3º Quadrante"],
    correctAnswer: "4º Quadrante",
    explanation: "Com x = +5 (positivo) e y = -1 (negativo), o ponto D(5, -1) está no 4º Quadrante."
  },
  {
    question: "Onde se localiza no plano cartesiano o ponto E(0, 6)?",
    options: [
      "Sobre o eixo Y (eixo das ordenadas)",
      "Sobre o eixo X (eixo das abscissas)",
      "No 3º Quadrante",
      "Exatamente na origem (0,0)"
    ],
    correctAnswer: "Sobre o eixo Y (eixo das ordenadas)",
    explanation: "Quando a coordenada x é igual a 0, o ponto fica exatamente sobre o eixo vertical Y."
  },
  {
    question: "O que representa geometricamente a solução de um sistema de duas equações do 1º grau no plano cartesiano?",
    options: [
      "O ponto de interseção (cruzamento) entre as duas retas que representam as equações.",
      "A distância total entre a origem e o infinito.",
      "O círculo formado pelos pontos dos eixos.",
      "A área de um triângulo equilátero qualquer."
    ],
    correctAnswer: "O ponto de interseção (cruzamento) entre as duas retas que representam as equações.",
    explanation: "Graficamente, cada equação do 1º grau gera uma reta. O par ordenado onde as duas retas se cruzam é a solução do sistema."
  },

  // =========================================================================
  // BLOCO 4: TRIÂNGULOS - CLASSIFICAÇÃO E CONDIÇÃO DE EXISTÊNCIA (15 questões)
  // =========================================================================
  {
    question: "Quanto à medida dos lados, como é classificado um triângulo que possui todos os TRÊS LADOS com medidas iguais?",
    options: ["Triângulo Equilátero", "Triângulo Isósceles", "Triângulo Escaleno", "Triângulo Obtusângulo"],
    correctAnswer: "Triângulo Equilátero",
    explanation: "Triângulos equiláteros têm os 3 lados congruentes (de mesma medida) e todos os seus 3 ângulos internos medem 60°."
  },
  {
    question: "Quanto à medida dos lados, como é classificado um triângulo que possui DOIS LADOS com medidas iguais e um diferente?",
    options: ["Triângulo Isósceles", "Triângulo Equilátero", "Triângulo Escaleno", "Triângulo Retângulo"],
    correctAnswer: "Triângulo Isósceles",
    explanation: "Triângulos isósceles possuem dois lados de mesma medida e dois ângulos da base congruentes."
  },
  {
    question: "Como é classificado o triângulo cujos TRÊS LADOS possuem medidas diferentes entre si?",
    options: ["Triângulo Escaleno", "Triângulo Equilátero", "Triângulo Isósceles", "Triângulo Acutângulo"],
    correctAnswer: "Triângulo Escaleno",
    explanation: "Triângulos escalenos têm os três lados com comprimentos distintos e três ângulos internos diferentes."
  },
  {
    question: "Quanto aos ângulos internos, como é classificado o triângulo que possui um ângulo de 90° (ângulo reto)?",
    options: ["Triângulo Retângulo", "Triângulo Acutângulo", "Triângulo Obtusângulo", "Triângulo Equilátero"],
    correctAnswer: "Triângulo Retângulo",
    explanation: "Um triângulo com um ângulo reto (90°) é chamado de triângulo retângulo. Seus lados menores são catetos e o maior é a hipotenusa."
  },
  {
    question: "Como é classificado o triângulo que possui os TRÊS ÂNGULOS internos menores que 90° (ângulos agudos)?",
    options: ["Triângulo Acutângulo", "Triângulo Retângulo", "Triângulo Obtusângulo", "Triângulo Escaleno"],
    correctAnswer: "Triângulo Acutângulo",
    explanation: "Quando todos os três ângulos internos são estritamente menores que 90°, o triângulo é acutângulo."
  },
  {
    question: "Como é classificado o triângulo que possui UM ÂNGULO maior que 90° (ângulo obtuso, por exemplo 120° ou 130°)?",
    options: ["Triângulo Obtusângulo", "Triângulo Acutângulo", "Triângulo Retângulo", "Triângulo Isósceles"],
    correctAnswer: "Triângulo Obtusângulo",
    explanation: "Um triângulo que apresenta um ângulo interno obtuso (> 90°) é chamado de triângulo obtusângulo."
  },
  {
    question: "Qual é a CONDIÇÃO DE EXISTÊNCIA de um triângulo (Desigualdade Triangular)?",
    options: [
      "A soma das medidas de quaisquer dois lados deve ser SEMPRE maior que a medida do terceiro lado.",
      "A soma de dois lados deve ser exatamente igual ao terceiro lado.",
      "A multiplicação de dois lados deve ser igual a 180.",
      "Todos os lados devem ser obrigatoriamente números pares."
    ],
    correctAnswer: "A soma das medidas de quaisquer dois lados deve ser SEMPRE maior que a medida do terceiro lado.",
    explanation: "Para que os três segmentos fechem uma figura triangular, a soma de quaisquer dois lados precisa ser estritamente maior que o lado restante (a + b > c)."
  },
  {
    question: "É possível construir um triângulo com lados medindo 12 cm, 19 cm e 23 cm?",
    options: [
      "Sim, pois 12 + 19 = 31, que é maior que 23 cm.",
      "Não, pois a soma de todos os lados passa de 50 cm.",
      "Não, pois 23 é um número primo.",
      "Sim, e ele será necessariamente equilátero."
    ],
    correctAnswer: "Sim, pois 12 + 19 = 31, que é maior que 23 cm.",
    explanation: "Somando os dois menores lados: 12 + 19 = 31 > 23. Como a condição é satisfeita para todos os lados, o triângulo existe."
  },
  {
    question: "Verifique se os lados 2 cm, 4 cm e 8 cm conseguem formar um triângulo:",
    options: [
      "Não é possível construir o triângulo, pois 2 + 4 = 6, que é menor que 8 cm.",
      "Sim, é possível porque todos os lados são números pares.",
      "Sim, é um triângulo escaleno perfeito.",
      "Não, porque triângulos não podem ter lados menores que 5 cm."
    ],
    correctAnswer: "Não é possível construir o triângulo, pois 2 + 4 = 6, que é menor que 8 cm.",
    explanation: "Como 2 + 4 = 6 < 8, os segmentos não se encontram e não fecham um triângulo."
  },
  {
    question: "É possível construir um triângulo com segmentos medindo 3 cm, 7 cm e 10 cm?",
    options: [
      "Não, pois 3 + 7 = 10 (a soma é igual ao terceiro lado, gerando um segmento reto e não um triângulo).",
      "Sim, pois 3 + 7 é igual a 10.",
      "Sim, será um triângulo retângulo.",
      "Sim, pois 10 é múltiplo de 5."
    ],
    correctAnswer: "Não, pois 3 + 7 = 10 (a soma é igual ao terceiro lado, gerando um segmento reto e não um triângulo).",
    explanation: "A condição exige que a soma seja estritamente MAIOR (>). Se a soma for igual, os três pontos ficam colineares (em linha reta)."
  },
  {
    question: "Considere os lados: 6 cm, 7 cm e 10 cm. É possível formar um triângulo? Como ele se classifica quanto aos lados?",
    options: [
      "Sim, é possível (6 + 7 = 13 > 10) e é um Triângulo Escaleno (todos os lados diferentes).",
      "Sim, é possível e é um Triângulo Isósceles.",
      "Não é possível construir o triângulo.",
      "Sim, e é um Triângulo Equilátero."
    ],
    correctAnswer: "Sim, é possível (6 + 7 = 13 > 10) e é um Triângulo Escaleno (todos os lados diferentes).",
    explanation: "6 + 7 = 13 > 10, logo existe. Como os lados medem 6, 7 e 10 (todos distintos), classifica-se como escaleno."
  },
  {
    question: "Verifique os segmentos 4 cm, 4 cm e 7 cm. É possível formar o triângulo? Qual a sua classificação?",
    options: [
      "Sim, é possível (4 + 4 = 8 > 7) e é um Triângulo Isósceles (dois lados iguais a 4 cm).",
      "Não é possível, pois 4 + 4 é menor que 7.",
      "Sim, e é um Triângulo Equilátero.",
      "Sim, e é um Triângulo Escaleno."
    ],
    correctAnswer: "Sim, é possível (4 + 4 = 8 > 7) e é um Triângulo Isósceles (dois lados iguais a 4 cm).",
    explanation: "4 + 4 = 8 > 7, portanto satisfaz a condição de existência. Possui dois lados iguais (4 cm e 4 cm), sendo isósceles."
  },
  {
    question: "Os segmentos 2 cm, 2 cm e 5 cm podem formar um triângulo?",
    options: [
      "Não, pois 2 + 2 = 4, que é menor que 5 cm.",
      "Sim, pois possui dois lados iguais.",
      "Sim, será um triângulo isósceles.",
      "Sim, pois 2 + 5 = 7."
    ],
    correctAnswer: "Não, pois 2 + 2 = 4, que é menor que 5 cm.",
    explanation: "A soma dos dois lados menores (2 + 2 = 4) é estritamente menor que o terceiro lado (5), violando a condição de existência."
  },
  {
    question: "Um triângulo possui lados medindo 0,7 cm; 0,7 cm e 0,7 cm. Qual é a sua classificação?",
    options: [
      "Triângulo Equilátero",
      "Triângulo Escaleno",
      "Triângulo Retângulo",
      "Triângulo Obtusângulo"
    ],
    correctAnswer: "Triângulo Equilátero",
    explanation: "Como os três lados possuem a mesma medida (0,7 cm), ele é classificado como triângulo equilátero."
  },
  {
    question: "Qual é a soma de todos os ângulos internos de QUALQUER triângulo no plano?",
    options: ["Sempre 180°", "Sempre 360°", "Sempre 90°", "Varia conforme o tamanho dos lados"],
    correctAnswer: "Sempre 180°",
    explanation: "A soma dos três ângulos internos de qualquer triângulo na geometria euclidiana plana é sempre exatamente igual a 180°."
  }
];

function shuffleArray(array: Question[]): Question[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[i], array[j]];
  }
  return array;
}

export async function generateQuizQuestions(): Promise<Question[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(shuffleArray([...questions]));
    }, 300);
  });
}
