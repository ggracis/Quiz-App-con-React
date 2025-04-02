import Cultura from "./assets/cultura.png";
import Esportes from "./assets/esportes.png";
import Gastronomia from "./assets/gastronomia.png";
import Geografia from "./assets/geografia.png";
import Historia from "./assets/história.png";
import Natureza from "./assets/natureza.png";

export const imgs = [
  Cultura,
  Esportes,
  Gastronomia,
  Geografia,
  Historia,
  Natureza,
];

export const categories = {
  cultura: "Cultura",
  esportes: "Esportes",
  gastronomia: "Gastronomia",
  geografia: "Geografia",
  historia: "História",
  natureza: "Natureza",
};

const { cultura, esportes, gastronomia, geografia, historia, natureza } =
  categories;

export const questions = [
  // Cultura
  {
    id: 1,
    question: "Quem é o autor de 'Cem Anos de Solidão'?",
    category: cultura,
    correct_answer: "Gabriel García Márquez",
    incorrect_answers: ["Jorge Amado", "Machado de Assis", "Clarice Lispector"],
  },
  {
    id: 2,
    question: "Qual é o estilo musical argentino conhecido mundialmente?",
    category: cultura,
    correct_answer: "Tango",
    incorrect_answers: ["Samba", "Cumbia", "Milonga"],
  },
  {
    id: 3,
    question: "Qual é o nome do famoso teatro em Buenos Aires?",
    category: cultura,
    correct_answer: "Teatro Colón",
    incorrect_answers: [
      "Teatro San Martín",
      "Teatro Cervantes",
      "Teatro Gran Rex",
    ],
  },
  {
    id: 4,
    question: "Qual é o prato típico argentino feito com carne?",
    category: cultura,
    correct_answer: "Asado",
    incorrect_answers: ["Empanada", "Churrasco", "Feijoada"],
  },
  {
    id: 5,
    question: "Qual é o nome do famoso escritor argentino autor de 'O Aleph'?",
    category: cultura,
    correct_answer: "Jorge Luis Borges",
    incorrect_answers: [
      "Julio Cortázar",
      "Adolfo Bioy Casares",
      "Ernesto Sabato",
    ],
  },
  {
    id: 6,
    question:
      "Qual é o nome da dança típica gaúcha que virou febre no TikTok em 2023?",
    category: cultura,
    correct_answer: "Vanerão",
    incorrect_answers: ["Funk", "Carimbó", "Axé"],
  },
  {
    id: 7,
    question:
      "Qual artista brasileiro tem uma música chamada 'Chega de Saudade'?",
    category: cultura,
    correct_answer: "Tom Jobim",
    incorrect_answers: ["Roberto Carlos", "Caetano Veloso", "Anitta"],
  },
  {
    id: 8,
    question:
      "Qual é o nome do bloco de carnaval que desfila com temas de videogame?",
    category: cultura,
    correct_answer: "Bloco do Mario",
    incorrect_answers: [
      "Galo da Madrugada",
      "Cordão da Bola Preta",
      "Timbalada",
    ],
  },
  {
    id: 9,
    question: "Qual dessas NÃO é uma lenda urbana brasileira?",
    category: cultura,
    correct_answer: "Pé Grande",
    incorrect_answers: ["Loira do Banheiro", "Chupa-Cabra", "Mula sem Cabeça"],
  },
  {
    id: 10,
    question:
      "Qual é o nome do famoso movimento artístico brasileiro dos anos 1920?",
    category: cultura,
    correct_answer: "Semana de Arte Moderna",
    incorrect_answers: ["Tropicália", "Bossa Nova", "Concretismo"],
  },

  // Esportes
  {
    id: 11,
    question: "Qual é o esporte mais popular na Argentina?",
    category: esportes,
    correct_answer: "Futebol",
    incorrect_answers: ["Rugby", "Hóquei", "Tênis"],
  },
  {
    id: 12,
    question: "Qual jogador argentino é conhecido como 'El Pibe de Oro'?",
    category: esportes,
    correct_answer: "Diego Maradona",
    incorrect_answers: [
      "Lionel Messi",
      "Gabriel Batistuta",
      "Juan Román Riquelme",
    ],
  },
  {
    id: 13,
    question: "Qual é o nome do famoso estádio de futebol em Buenos Aires?",
    category: esportes,
    correct_answer: "La Bombonera",
    incorrect_answers: ["Monumental", "El Cilindro", "Nuevo Gasómetro"],
  },
  {
    id: 14,
    question: "Qual clube argentino tem o apelido de 'Los Millonarios'?",
    category: esportes,
    correct_answer: "River Plate",
    incorrect_answers: ["Boca Juniors", "Racing Club", "Independiente"],
  },
  {
    id: 15,
    question:
      "Qual é o nome do torneio de futebol mais importante da América do Sul?",
    category: esportes,
    correct_answer: "Copa Libertadores",
    incorrect_answers: ["Copa América", "Copa Sudamericana", "Recopa"],
  },
  {
    id: 16,
    question: "Qual esporte usa uma 'bocha'?",
    category: esportes,
    correct_answer: "Bocha",
    incorrect_answers: ["Vôlei", "Tênis de Mesa", "Golfe"],
  },
  {
    id: 17,
    question: "Qual é o nome do estádio de futebol mais famoso do Brasil?",
    category: esportes,
    correct_answer: "Maracanã",
    incorrect_answers: ["Morumbi", "Mineirão", "Beira-Rio"],
  },
  {
    id: 18,
    question: "Qual é o esporte nacional do Brasil?",
    category: esportes,
    correct_answer: "Futebol",
    incorrect_answers: ["Vôlei", "Basquete", "Tênis"],
  },
  {
    id: 19,
    question:
      "Qual é o nome do famoso jogador brasileiro conhecido como 'Fenômeno'?",
    category: esportes,
    correct_answer: "Ronaldo",
    incorrect_answers: ["Ronaldinho", "Pelé", "Neymar"],
  },
  {
    id: 20,
    question: "Qual time de futebol tem uma 'Gaviões da Fiel' como torcida?",
    category: esportes,
    correct_answer: "Corinthians",
    incorrect_answers: ["Flamengo", "Palmeiras", "São Paulo"],
  },

  // Gastronomia
  {
    id: 21,
    question: "Qual é o doce típico argentino feito com leite condensado?",
    category: gastronomia,
    correct_answer: "Dulce de leche",
    incorrect_answers: ["Brigadeiro", "Alfajor", "Churros"],
  },
  {
    id: 22,
    question:
      "Qual é o nome da bebida tradicional argentina feita com erva-mate?",
    category: gastronomia,
    correct_answer: "Mate",
    incorrect_answers: ["Chimarrão", "Tereré", "Café"],
  },
  {
    id: 23,
    question:
      "Qual é o nome do famoso doce argentino com recheio de doce de leite?",
    category: gastronomia,
    correct_answer: "Alfajor",
    incorrect_answers: ["Churros", "Empanada", "Medialuna"],
  },
  {
    id: 24,
    question: "Qual é o prato típico argentino servido em churrascos?",
    category: gastronomia,
    correct_answer: "Chorizo",
    incorrect_answers: ["Picanha", "Linguiça", "Costela"],
  },
  {
    id: 25,
    question: "Qual é o nome do famoso vinho produzido na Argentina?",
    category: gastronomia,
    correct_answer: "Malbec",
    incorrect_answers: ["Cabernet Sauvignon", "Merlot", "Chardonnay"],
  },
  {
    id: 26,
    question: "Qual é o estado brasileiro famoso pelo chimarrão?",
    category: gastronomia,
    correct_answer: "Rio Grande do Sul",
    incorrect_answers: ["Paraná", "Santa Catarina", "São Paulo"],
  },

  // Geografia
  {
    id: 27,
    question: "Qual é a capital da Argentina?",
    category: geografia,
    correct_answer: "Buenos Aires",
    incorrect_answers: ["Córdoba", "Rosário", "Mendoza"],
  },
  {
    id: 28,
    question: "Qual é o nome da famosa geleira na Patagônia argentina?",
    category: geografia,
    correct_answer: "Perito Moreno",
    incorrect_answers: ["Upsala", "Viedma", "Spegazzini"],
  },
  {
    id: 29,
    question: "Qual é o nome da montanha mais alta da Argentina?",
    category: geografia,
    correct_answer: "Aconcágua",
    incorrect_answers: ["Fitz Roy", "Tupungato", "Lanín"],
  },
  {
    id: 30,
    question: "Qual é o nome da região famosa por seus vinhedos na Argentina?",
    category: geografia,
    correct_answer: "Mendoza",
    incorrect_answers: ["Salta", "San Juan", "La Rioja"],
  },
  {
    id: 31,
    question: "Qual é o nome da famosa região de lagos no sul da Argentina?",
    category: geografia,
    correct_answer: "Bariloche",
    incorrect_answers: ["El Calafate", "Ushuaia", "Puerto Madryn"],
  },
  {
    id: 32,
    question: "Qual é o bioma predominante no estado do Mato Grosso?",
    category: geografia,
    correct_answer: "Pantanal",
    incorrect_answers: ["Amazônia", "Cerrado", "Caatinga"],
  },

  // Historia
  {
    id: 33,
    question: "Quem foi o líder da independência da Argentina?",
    category: historia,
    correct_answer: "José de San Martín",
    incorrect_answers: [
      "Simón Bolívar",
      "Manuel Belgrano",
      "Juan Manuel de Rosas",
    ],
  },
  {
    id: 34,
    question:
      "Qual é o nome da famosa guerra entre Argentina e Reino Unido em 1982?",
    category: historia,
    correct_answer: "Guerra das Malvinas",
    incorrect_answers: [
      "Guerra do Chaco",
      "Guerra do Pacífico",
      "Guerra do Prata",
    ],
  },
  {
    id: 35,
    question:
      "Qual é o nome do famoso movimento político liderado por Juan Perón?",
    category: historia,
    correct_answer: "Peronismo",
    incorrect_answers: ["Radicalismo", "Federalismo", "Unitarismo"],
  },
  {
    id: 36,
    question:
      "Qual é o nome da esposa de Juan Perón conhecida por seu trabalho social?",
    category: historia,
    correct_answer: "Eva Perón",
    incorrect_answers: ["Isabel Perón", "Cristina Kirchner", "Juliana Awada"],
  },
  {
    id: 37,
    question:
      "Qual é o nome da famosa praça em Buenos Aires conhecida por protestos históricos?",
    category: historia,
    correct_answer: "Praça de Maio",
    incorrect_answers: [
      "Praça San Martín",
      "Praça do Congresso",
      "Praça Itália",
    ],
  },
  {
    id: 38,
    question:
      "Qual é o nome do famoso tratado que dividiu as terras entre Portugal e Espanha?",
    category: historia,
    correct_answer: "Tratado de Tordesilhas",
    incorrect_answers: [
      "Tratado de Madri",
      "Tratado de Utrecht",
      "Tratado de Lisboa",
    ],
  },
  {
    id: 39,
    question: "Qual é o nome do famoso líder da Inconfidência Mineira?",
    category: historia,
    correct_answer: "Tiradentes",
    incorrect_answers: ["Dom Pedro I", "Getúlio Vargas", "José Bonifácio"],
  },

  // Natureza
  {
    id: 40,
    question:
      "Qual é o nome da famosa cachoeira compartilhada entre Argentina e Brasil?",
    category: natureza,
    correct_answer: "Cataratas do Iguaçu",
    incorrect_answers: [
      "Cataratas Vitória",
      "Cataratas do Niágara",
      "Salto Ángel",
    ],
  },
  {
    id: 41,
    question: "Qual é o nome do famoso parque nacional na Patagônia argentina?",
    category: natureza,
    correct_answer: "Parque Nacional Los Glaciares",
    incorrect_answers: [
      "Parque Nacional Nahuel Huapi",
      "Parque Nacional Lanín",
      "Parque Nacional Iguazú",
    ],
  },
  {
    id: 42,
    question:
      "Qual é o nome do famoso animal encontrado na Patagônia argentina?",
    category: natureza,
    correct_answer: "Guanaco",
    incorrect_answers: ["Lhama", "Vicunha", "Alpaca"],
  },
  {
    id: 43,
    question: "Qual é o nome da famosa floresta subtropical na Argentina?",
    category: natureza,
    correct_answer: "Selva Missioneira",
    incorrect_answers: ["Mata Atlântica", "Floresta Amazônica", "Cerrado"],
  },
  {
    id: 44,
    question: "Qual é o nome do famoso lago na região de Bariloche?",
    category: natureza,
    correct_answer: "Lago Nahuel Huapi",
    incorrect_answers: ["Lago Argentino", "Lago Viedma", "Lago Fagnano"],
  },
  {
    id: 45,
    question:
      "Qual é o nome do famoso arquipélago brasileiro conhecido por sua biodiversidade?",
    category: natureza,
    correct_answer: "Fernando de Noronha",
    incorrect_answers: [
      "Ilha Grande",
      "Ilha do Mel",
      "Arquipélago de Abrolhos",
    ],
  },
  {
    id: 46,
    question:
      "Qual é o nome do famoso naturalista que estudou a biodiversidade brasileira?",
    category: natureza,
    correct_answer: "Charles Darwin",
    incorrect_answers: [
      "Alexander von Humboldt",
      "Fritz Müller",
      "Carl Linnaeus",
    ],
  },
  {
    id: 47,
    question:
      "Qual é o nome do famoso cientista brasileiro conhecido por suas pesquisas sobre o câncer?",
    category: natureza,
    correct_answer: "Carlos Chagas",
    incorrect_answers: ["Oswaldo Cruz", "Vital Brazil", "Adolfo Lutz"],
  },
];
