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
    name: "API",
    icon: "cloud-meatball",
  },
  Webapplicatie: {
    name: "Webapplicatie",
    icon: "laptop-code",
  },
};

let questions: IQuestion[] = [];

export const fetchQuestionsFromAPI = async (selectedProduct: string): Promise<IQuestion[]> => {
  try {
    const response = await axios.get(
      "https://localhost:7279/Question/CallByType?webUrl=testWebUrl&product=" + selectedProduct,
      {
        headers: {
          "X-Api-Key": `F244428FB88143F9A8FA93EFF965CE73`,
        },
      }
    );

    const apiQuestions = response.data;

    const transformedQuestions = apiQuestions.map((apiQuestion: any) => ({
      category: apiQuestion.category,
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
    console.log("Fetched Questions from API: ");
    console.log(transformedQuestions);
    return transformedQuestions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};

export default questions;
