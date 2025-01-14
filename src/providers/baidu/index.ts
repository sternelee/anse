import {
  handlePrompt,
  handleRapidPrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const models = [
  { label: 'ERNIE-Bot 4.0', value: 'completions_pro' },
  { label: 'ERNIE-Bot-8K', value: 'ernie_bot_8k' },
  { label: 'ERNIE-Bot', value: 'completions' },
  { label: 'ERNIE-Bot-turbo', value: 'eb-instant' },
  { label: 'Qianfan-BLOOMZ-7B-compressed', value: 'qianfan_bloomz_7b_compressed' },
  { label: 'Qianfan-Chinese-Llama-2-7B', value: 'qianfan_chinese_llama_2_7b' },
  { label: 'Qianfan-Chinese-Llama-2-13B', value: 'qianfan_chinese_llama_2_13b' },
  { label: 'ChatLaw', value: 'chatlaw' },
  { label: 'XuanYuan-70B-Chat-4bit', value: 'xuanyuan_70b_chat' },
  { label: 'Llama-2-7b-chat', value: 'llama_2_7b' },
  { label: 'Llama-2-13b-chat', value: 'llama_2_13b' },
  { label: 'Llama-2-70b-chat', value: 'llama_2_70b' },
]

const providerBaidu = () => {
  const provider: Provider = {
    id: 'provider-baidu',
    icon: 'i-simple-icons-baidu', // @unocss-include https://icones.js.org/
    name: '文心一言',
    href: 'https://cloud.baidu.com/doc/WENXINWORKSHOP/s/yloieb01t',
    models,
    globalSettings: [
      {
        key: 'apiKey',
        name: 'ACCESS_TOKEN',
        type: 'api-key',
      },
      {
        key: 'model',
        name: 'Baidu model',
        description: 'Custom gpt model for Baidu API.',
        type: 'select',
        options: models,
        default: 'completions_pro',
      },
      {
        key: 'maxTokens',
        name: 'Max Tokens',
        description: 'The maximum number of tokens to generate in the completion.',
        type: 'slider',
        min: 0,
        max: 32768,
        default: 2048,
        step: 1,
      },
      {
        key: 'messageHistorySize',
        name: 'Max History Message Size',
        description: 'The number of retained historical messages will be truncated if the length of the message exceeds the MaxToken parameter.',
        type: 'slider',
        min: 1,
        max: 24,
        default: 10,
        step: 1,
      },
      {
        key: 'temperature',
        name: 'Temperature',
        type: 'slider',
        description: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
        min: 0,
        max: 2,
        default: 0.7,
        step: 0.01,
      },
      {
        key: 'top_p',
        name: 'Top P',
        description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
        type: 'slider',
        min: 0,
        max: 1,
        default: 1,
        step: 0.01,
      },
    ],
    bots: [
      {
        id: 'chat_continuous',
        type: 'chat_continuous',
        name: 'Continuous Chat',
        settings: [],
      },
      {
        id: 'chat_single',
        type: 'chat_single',
        name: 'Single Chat',
        settings: [],
      },
      {
        id: 'image_generation',
        type: 'image_generation',
        name: 'Stable-Diffusion-XL',
        settings: [],
      },
    ],
    handlePrompt,
    handleRapidPrompt,
  }
  return provider
}

export default providerBaidu
