import axios from "axios";

export interface IProduct {
  name: string;
  icon: string;
}

export interface IQuestion {
  products: IProduct[];
  category: string;
  question: string;
  answers: IAnswer[];
}

interface IAnswer {
  answer: string;
  price: number;
}

export const Products = {
  Webdesign: {
    name: "Webdesign",
    icon: "globe",
  },
  API: {
    name: "API-ontwikkeling",
    icon: "cloud-meatball",
  },
  Webapplicatie: {
    name: "Webapplicatie",
    icon: "laptop-code",
  },
};

let questions: IQuestion[] = [
  {
    products: [Products.Webdesign, Products.Webapplicatie],
    category: "Hosting",
    question: "Wat zijn de verwachte bezoekersaantallen?",
    answers: [
      { answer: "Minder dan 100 bezoekers per maand", price: 10 },
      { answer: "100-1.000 bezoekers per maand", price: 20 },
      { answer: "1.000-10.000 bezoekers per maand", price: 30 },
    ],
  },
  {
    products: [Products.Webdesign, Products.Webapplicatie, Products.API],
    category: "Complexiteit",
    question: "Hoe complex zijn de gewenste functionaliteiten?",
    answers: [
      { answer: "Eenvoudig", price: 10 },
      { answer: "Beginnend", price: 20 },
      { answer: "Gemiddeld", price: 30 },
      { answer: "Complex", price: 40 },
    ],
  },
  {
    products: [Products.API],
    category: "Beveiliging",
    question: "Hoe goed moet de API beveiligd zijn?",
    answers: [
      { answer: "Niet", price: 10 },
      { answer: "Basis", price: 20 },
      { answer: "Hard", price: 30 },
    ],
  },

  {
    products: [Products.Webdesign, Products.Webapplicatie],
    category: "User Interface",
    question: "Hoe belangrijk is een intuïtieve gebruikersinterface?",
    answers: [
      { answer: "Niet belangrijk", price: 10 },
      { answer: "Redelijk belangrijk", price: 20 },
      { answer: "Belangrijk", price: 30 },
      { answer: "Heel belangrijk", price: 40 },
    ],
  },
  {
    products: [Products.Webdesign],
    category: "Ondersteuning",
    question: "Op hoeveel apparaten moet de app werken?",
    answers: [
      { answer: "Alleen op smartphones", price: 10 },
      { answer: "Smartphones en tablets", price: 20 },
      { answer: "Alle soorten apparaten", price: 30 },
    ],
  },
  {
    products: [Products.Webapplicatie, Products.API],
    category: "Gebruikersverkeer",
    question: "Verwacht u piekuren in het gebruikersverkeer?",
    answers: [
      { answer: "Nee, gelijkmatig verkeer", price: 10 },
      { answer: "Af en toe piekuren", price: 20 },
      { answer: "Frequente piekuren", price: 30 },
    ],
  },
];

export const fetchQuestionsFromAPI = async (): Promise<IQuestion[]> => {
  try {
    const response = await axios.get(
      "https://localhost:7279/Question/CallByType/url9999",
      {
        headers: {
          "X-Api-Key": `F244428FB88143F9A8FA93EFF965CE73`,
        },
      }
    );

    const apiQuestions = response.data;

    const transformedQuestions = apiQuestions.map((apiQuestion: any) => ({
      products: [Products.API],
      category: "API Category",
      question: apiQuestion.vraagtext,
      answers: [
        {
          answer: apiQuestion.antwoord1.text,
          price: apiQuestion.antwoord1.value,
        },
        {
          answer: apiQuestion.antwoord2.text,
          price: apiQuestion.antwoord2.value,
        },
        {
          answer: apiQuestion.antwoord3.text,
          price: apiQuestion.antwoord3.value,
        },
      ],
    }));

    return transformedQuestions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

(async () => {
  questions = await fetchQuestionsFromAPI();
  console.log("Questions fetched from API: ", questions);
})();

export default questions;
