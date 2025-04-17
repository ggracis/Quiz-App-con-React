import Cultura from "/cultura.png";
import Esportes from "/esportes.png";
import Gastronomia from "/gastronomia.png";
import Geografia from "/geografia.png";
import História from "/história.png";
import Natureza from "/natureza.png";

export const imgs = [
  Cultura,
  Esportes,
  Gastronomia,
  Geografia,
  História,
  Natureza,
];

export const categories = {
  cultura: "Cultura",
  esportes: "Esportes",
  gastronomia: "Gastronomia",
  geografia: "Geografia",
  história: "História",
  natureza: "Natureza",
};

const { cultura, esportes, gastronomia, geografia, história, natureza } =
  categories;

export const questions = [
  // Cultura - Argentina
  {
    id: 101,
    question: "Que instrumento é fundamental no tango argentino?",
    category: cultura,
    correct_answer: "Bandoneón",
    incorrect_answers: ["Guitarra", "Piano", "Violino"],
  },
  {
    id: 102,
    question: "Qual escritor argentino escreveu 'Ficções'?",
    category: cultura,
    correct_answer: "Jorge Luis Borges",
    incorrect_answers: [
      "Julio Cortázar",
      "Adolfo Bioy Casares",
      "Ernesto Sabato",
    ],
  },
  {
    id: 103,
    question:
      "Como se chama o famoso teatro de Buenos Aires conhecido por sua acústica?",
    category: cultura,
    correct_answer: "Teatro Colón",
    incorrect_answers: [
      "Teatro San Martín",
      "Teatro Cervantes",
      "Teatro Gran Rex",
    ],
  },
  {
    id: 104,
    question: "Qual bebida tradicional é símbolo da cultura argentina?",
    category: cultura,
    correct_answer: "Mate",
    incorrect_answers: ["Café", "Chá", "Suco de laranja"],
  },
  {
    id: 105,
    question: "Qual festividade argentina celebra as tradições gaúchas?",
    category: cultura,
    correct_answer: "Día de la Tradición",
    incorrect_answers: ["Carnaval", "Fiesta de la Vendimia", "Semana Santa"],
  },

  // Cultura - Brasil
  {
    id: 106,
    question:
      "Qual ritmo musical é originário do Brasil e conhecido mundialmente?",
    category: cultura,
    correct_answer: "Samba",
    incorrect_answers: ["Tango", "Cúmbia", "Reggaeton"],
  },
  {
    id: 107,
    question: "Qual é o maior e mais famoso carnaval do Brasil?",
    category: cultura,
    correct_answer: "Carnaval do Rio de Janeiro",
    incorrect_answers: [
      "Carnaval de Salvador",
      "Carnaval de Recife",
      "Carnaval de São Paulo",
    ],
  },
  {
    id: 108,
    question: "Quem é o músico brasileiro famoso por 'Garota de Ipanema'?",
    category: cultura,
    correct_answer: "Tom Jobim",
    incorrect_answers: ["Caetano Veloso", "Gilberto Gil", "Roberto Carlos"],
  },
  {
    id: 109,
    question: "Qual dança brasileira se originou como uma forma de luta?",
    category: cultura,
    correct_answer: "Capoeira",
    incorrect_answers: ["Samba", "Forró", "Frevo"],
  },
  {
    id: 110,
    question: "Que expressão brasileira é usada para uma festa animada?",
    category: cultura,
    correct_answer: "Farra",
    incorrect_answers: ["Feijoada", "Siesta", "Churrasco"],
  },

  // Esportes - Argentina
  {
    id: 111,
    question:
      "Quantas Copas do Mundo a seleção argentina de futebol venceu até 2022?",
    category: esportes,
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"],
  },
  {
    id: 112,
    question:
      "Quem é considerado o maior jogador de futebol argentino da história junto com Messi?",
    category: esportes,
    correct_answer: "Diego Maradona",
    incorrect_answers: [
      "Juan Román Riquelme",
      "Gabriel Batistuta",
      "Carlos Tevez",
    ],
  },
  {
    id: 113,
    question: "Qual esporte é tradicionalmente associado à elite argentina?",
    category: esportes,
    correct_answer: "Polo",
    incorrect_answers: ["Hóquei", "Tênis", "Golfe"],
  },
  {
    id: 114,
    question: "Qual clube argentino é conhecido como 'El Millonario'?",
    category: esportes,
    correct_answer: "River Plate",
    incorrect_answers: ["Boca Juniors", "San Lorenzo", "Independiente"],
  },
  {
    id: 115,
    question:
      "Qual cidade argentina sediou os Jogos Olímpicos da Juventude em 2018?",
    category: esportes,
    correct_answer: "Buenos Aires",
    incorrect_answers: ["Rosario", "Córdoba", "Mendoza"],
  },

  // Esportes - Brasil
  {
    id: 116,
    question:
      "Quantas Copas do Mundo a seleção brasileira de futebol venceu até 2022?",
    category: esportes,
    correct_answer: "5",
    incorrect_answers: ["4", "3", "6"],
  },
  {
    id: 117,
    question: "Quem é conhecido como 'O Rei do Futebol'?",
    category: esportes,
    correct_answer: "Pelé",
    incorrect_answers: ["Zico", "Romário", "Neymar"],
  },
  {
    id: 118,
    question:
      "Em que cidade brasileira foram realizados os Jogos Olímpicos de 2016?",
    category: esportes,
    correct_answer: "Rio de Janeiro",
    incorrect_answers: ["São Paulo", "Brasília", "Belo Horizonte"],
  },
  {
    id: 119,
    question: "Qual é o nome do estádio do Maracanã?",
    category: esportes,
    correct_answer: "Estádio Jornalista Mário Filho",
    incorrect_answers: [
      "Estádio do Pacaembu",
      "Estádio Beira-Rio",
      "Arena Corinthians",
    ],
  },
  {
    id: 120,
    question:
      "Qual jogador brasileiro ficou famoso pelo 'gol de cobertura' na final da Copa de 2002?",
    category: esportes,
    correct_answer: "Ronaldinho Gaúcho",
    incorrect_answers: ["Ronaldo", "Kaká", "Roberto Carlos"],
  },

  // Gastronomia - Argentina
  {
    id: 121,
    question:
      "Qual é o nome do prato argentino feito com carne grelhada, geralmente preparado em churrasqueiras?",
    category: gastronomia,
    correct_answer: "Asado",
    incorrect_answers: ["Empanada", "Milanesa", "Chimichurri"],
  },
  {
    id: 122,
    question:
      "Qual é a bebida tradicional argentina feita com folhas de erva-mate?",
    category: gastronomia,
    correct_answer: "Mate",
    incorrect_answers: ["Chá verde", "Café", "Tereré"],
  },
  {
    id: 123,
    question:
      "Como se chama o doce argentino à base de leite, açúcar e baunilha, muito usado em sobremesas?",
    category: gastronomia,
    correct_answer: "Dulce de leche",
    incorrect_answers: ["Doce de leite", "Leche condensada", "Alfajor"],
  },
  {
    id: 124,
    question:
      "Qual é o nome do doce típico argentino composto por duas bolachas recheadas com doce de leite?",
    category: gastronomia,
    correct_answer: "Alfajor",
    incorrect_answers: ["Chocotorta", "Brigadeiro", "Panettone"],
  },
  {
    id: 125,
    question:
      "Qual é o nome da torta gelada feita com biscoitos de chocolate e doce de leite, muito popular na Argentina?",
    category: gastronomia,
    correct_answer: "Chocotorta",
    incorrect_answers: ["Tiramisu", "Torta de ricota", "Torta alfajor"],
  },

  // Gastronomia - Brasil
  {
    id: 126,
    question:
      "Qual é o prato brasileiro feito com feijão-preto e carnes variadas?",
    category: gastronomia,
    correct_answer: "Feijoada",
    incorrect_answers: ["Moqueca", "Vatapá", "Picanha"],
  },
  {
    id: 127,
    question:
      "Qual é o doce brasileiro feito com leite condensado, chocolate e granulado?",
    category: gastronomia,
    correct_answer: "Brigadeiro",
    incorrect_answers: ["Beijinho", "Cajuzinho", "Quindim"],
  },
  {
    id: 128,
    question:
      "Qual é o prato típico da Bahia preparado com peixe, leite de coco e dendê?",
    category: gastronomia,
    correct_answer: "Moqueca",
    incorrect_answers: ["Feijoada", "Pamonha", "Farofa"],
  },
  {
    id: 129,
    question: "Qual é o nome do pão de queijo típico de Minas Gerais?",
    category: gastronomia,
    correct_answer: "Pão de queijo",
    incorrect_answers: ["Coxinha", "Tapioca", "Pastel de vento"],
  },
  {
    id: 130,
    question: "Qual é o nome da bebida feita com cachaça, limão e açúcar?",
    category: gastronomia,
    correct_answer: "Caipirinha",
    incorrect_answers: ["Batida", "Margarita", "Piña colada"],
  },

  // Geografia - Argentina
  {
    id: 131,
    question: "Qual é a capital da Argentina?",
    category: geografia,
    correct_answer: "Buenos Aires",
    incorrect_answers: ["Córdoba", "Rosário", "Mendoza"],
  },
  {
    id: 132,
    question: "Qual é o ponto mais alto da Argentina?",
    category: geografia,
    correct_answer: "Aconcágua",
    incorrect_answers: ["Fitz Roy", "Cerro Torre", "Lanín"],
  },
  {
    id: 133,
    question: "Qual rio forma a fronteira natural entre Argentina e Uruguai?",
    category: geografia,
    correct_answer: "Rio Uruguai",
    incorrect_answers: ["Rio Paraná", "Rio da Prata", "Rio Paraguai"],
  },
  {
    id: 134,
    question:
      "Qual é a região da Argentina conhecida por seus vinhos e pela Cordilheira dos Andes?",
    category: geografia,
    correct_answer: "Mendoza",
    incorrect_answers: ["Salta", "Santa Fé", "La Rioja"],
  },
  {
    id: 135,
    question:
      "Como se chama a região no sul da Argentina conhecida por suas paisagens frias e montanhosas?",
    category: geografia,
    correct_answer: "Patagônia",
    incorrect_answers: ["Pampas", "Chaco", "Mesopotâmia"],
  },

  // Geografia - Brasil
  {
    id: 136,
    question: "Qual é a capital do Brasil?",
    category: geografia,
    correct_answer: "Brasília",
    incorrect_answers: ["Rio de Janeiro", "São Paulo", "Belo Horizonte"],
  },
  {
    id: 137,
    question: "Qual é o maior rio do Brasil em volume de água?",
    category: geografia,
    correct_answer: "Rio Amazonas",
    incorrect_answers: ["Rio São Francisco", "Rio Tocantins", "Rio Paraná"],
  },
  {
    id: 138,
    question:
      "Qual estado brasileiro é conhecido por suas dunas e pelo Parque Nacional dos Lençóis Maranhenses?",
    category: geografia,
    correct_answer: "Maranhão",
    incorrect_answers: ["Piauí", "Ceará", "Pará"],
  },
  {
    id: 139,
    question: "Qual é o ponto mais alto do Brasil?",
    category: geografia,
    correct_answer: "Pico da Neblina",
    incorrect_answers: [
      "Pico das Agulhas Negras",
      "Pico do Itatiaia",
      "Monte Roraima",
    ],
  },
  {
    id: 140,
    question:
      "Qual bioma brasileiro cobre grande parte do centro-oeste e é conhecido por sua biodiversidade?",
    category: geografia,
    correct_answer: "Cerrado",
    incorrect_answers: ["Amazônia", "Caatinga", "Pampa"],
  },

  // História - Argentina
  {
    id: 141,
    question: "Em que ano a Argentina declarou sua independência?",
    category: história,
    correct_answer: "1816",
    incorrect_answers: ["1810", "1820", "1806"],
  },
  {
    id: 142,
    question:
      "Quem foi o líder da independência argentina conhecido como 'El Libertador'? ",
    category: história,
    correct_answer: "José de San Martín",
    incorrect_answers: ["Simón Bolívar", "Juan Manuel de Rosas", "Dom Pedro I"],
  },
  {
    id: 143,
    question: "Qual foi o conflito entre Argentina e Reino Unido em 1982?",
    category: história,
    correct_answer: "Guerra das Malvinas",
    incorrect_answers: [
      "Guerra do Pacífico",
      "Guerra do Chaco",
      "Guerra da Tríplice Aliança",
    ],
  },
  {
    id: 144,
    question:
      "Quem foi a primeira-dama argentina famosa por seu papel social e político?",
    category: história,
    correct_answer: "Eva Perón",
    incorrect_answers: ["Cristina Kirchner", "Isabel Perón", "Juliana Awada"],
  },
  {
    id: 145,
    question:
      "Quem governou a Argentina por vários períodos entre 1946 e 1974?",
    category: história,
    correct_answer: "Juan Domingo Perón",
    incorrect_answers: ["Raúl Alfonsín", "Leopoldo Galtieri", "Carlos Menem"],
  },

  // História - Brasil
  {
    id: 146,
    question: "Em que ano o Brasil proclamou sua independência?",
    category: história,
    correct_answer: "1822",
    incorrect_answers: ["1808", "1889", "1831"],
  },
  {
    id: 147,
    question: "Quem foi o primeiro imperador do Brasil?",
    category: história,
    correct_answer: "Dom Pedro I",
    incorrect_answers: ["Dom Pedro II", "Tiradentes", "Getúlio Vargas"],
  },
  {
    id: 148,
    question: "Qual evento marcou o fim da monarquia no Brasil?",
    category: história,
    correct_answer: "Proclamação da República",
    incorrect_answers: ["Independência", "Golpe Militar", "Revolução de 1930"],
  },
  {
    id: 149,
    question:
      "Quem foi o presidente do Brasil durante a criação da CLT e o Estado Novo?",
    category: história,
    correct_answer: "Getúlio Vargas",
    incorrect_answers: [
      "Juscelino Kubitschek",
      "João Goulart",
      "Tancredo Neves",
    ],
  },
  {
    id: 150,
    question: "Qual cidade foi a capital do Brasil antes de Brasília?",
    category: história,
    correct_answer: "Rio de Janeiro",
    incorrect_answers: ["São Paulo", "Salvador", "Belo Horizonte"],
  },

  // Natureza - Argentina
  {
    id: 171,
    question: "Qual é a montanha mais alta da Argentina?",
    category: natureza,
    correct_answer: "Aconcágua",
    incorrect_answers: ["Fitz Roy", "Lanín", "Tupungato"],
  },
  {
    id: 172,
    question: "Em que região da Argentina se encontram as Cataratas do Iguaçu?",
    category: natureza,
    correct_answer: "Misiones",
    incorrect_answers: ["Salta", "Mendoza", "Tucumán"],
  },
  {
    id: 173,
    question: "Qual deserto ocupa grande parte do sul da Argentina?",
    category: natureza,
    correct_answer: "Patagônia",
    incorrect_answers: ["Atacama", "Monte", "Chaco"],
  },
  {
    id: 174,
    question: "Qual é o maior lago da Argentina?",
    category: natureza,
    correct_answer: "Lago Argentino",
    incorrect_answers: [
      "Lago Nahuel Huapi",
      "Lago Viedma",
      "Lago Buenos Aires",
    ],
  },
  {
    id: 175,
    question: "Qual animal é símbolo da fauna da Patagônia argentina?",
    category: natureza,
    correct_answer: "Guanaco",
    incorrect_answers: ["Puma", "Lhama", "Condor"],
  },

  // Natureza - Brasil
  {
    id: 176,
    question: "Qual é o maior rio do Brasil?",
    category: natureza,
    correct_answer: "Rio Amazonas",
    incorrect_answers: ["Rio São Francisco", "Rio Paraná", "Rio Tocantins"],
  },
  {
    id: 177,
    question: "Qual bioma cobre a maior parte do território brasileiro?",
    category: natureza,
    correct_answer: "Amazônia",
    incorrect_answers: ["Cerrado", "Mata Atlântica", "Caatinga"],
  },
  {
    id: 178,
    question: "Qual é a maior cachoeira do Brasil em volume de água?",
    category: natureza,
    correct_answer: "Cataratas do Iguaçu",
    incorrect_answers: [
      "Cachoeira do Caracol",
      "Salto do Yucumã",
      "Cachoeira da Fumaça",
    ],
  },
  {
    id: 179,
    question: "Qual estado brasileiro abriga o Pantanal?",
    category: natureza,
    correct_answer: "Mato Grosso do Sul",
    incorrect_answers: ["Amazonas", "Bahia", "Paraná"],
  },
  {
    id: 180,
    question:
      "Qual é o nome do famoso arquipélago brasileiro conhecido por sua biodiversidade?",
    category: natureza,
    correct_answer: "Fernando de Noronha",
    incorrect_answers: ["Ilhabela", "Abrolhos", "Marajó"],
  },
];
