import {IQuestions} from "../Types";
import axios from "axios";

class QuestionService {

  async fetchQuestions(): Promise<IQuestions> {
    try {
      const response = await axios({
        url: `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`,
        method: 'get'
      });
      return response.data
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new QuestionService()