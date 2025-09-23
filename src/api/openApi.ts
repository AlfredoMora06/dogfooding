import {AxiosResponse} from 'axios'

// @ts-ignore
import api from "../libs/api"

export async function createOpenAIRequest(food: string): Promise<AxiosResponse> {
  return api({method: "post", url: `/openai/chat/completions`, data: {food}})
}