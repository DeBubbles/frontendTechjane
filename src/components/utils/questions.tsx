export enum Product {
  Webdesign,
  API,
  Webapplicaties,
}

export interface IQuestion {
  products: Product[];
  category: string;
  question: string;
  answers: IAnswer[];
}

interface IAnswer {
  answer: string;
  price: number;
}

const questions: IQuestion[] = [
  {
    products: [Product.Webdesign, Product.Webapplicaties],
    category: "Hosting",
    question: "Wat zijn de verwachte bezoekersaantallen?",
    answers: [
      { answer: "Minder dan 100 bezoekers per maand", price: 10 },
      { answer: "100-1.000 bezoekers per maand", price: 20 },
      { answer: "1.000-10.000 bezoekers per maand", price: 30 },
    ],
  },
  {
    products: [Product.Webdesign, Product.Webapplicaties, Product.API],
    category: "Complexiteit",
    question: "Hoe complex zijn de gewenste functionaliteiten?",
    answers: [
      { answer: "Eenvoudig", price: 10 },
      { answer: "Beginnend", price: 20 },
      { answer: "Gemiddeld", price: 30 },
      { answer: "Complex", price: 30 },
    ],
  },
  {
    products: [Product.API],
    category: "Beveiliging",
    question: "Hoe goed moet de API beveiligd zijn?",
    answers: [
      { answer: "Niet", price: 10 },
      { answer: "Basis", price: 20 },
      { answer: "Hard", price: 30 },
    ],
  },
];

export default questions;
