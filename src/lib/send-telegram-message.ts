import TelegramBot from "node-telegram-bot-api";
import { env } from "@/env.mjs";

const token = env.TELEGRAM_BOT_API_TOKEN;

const bot: TelegramBot = new TelegramBot(token, { polling: false });

export async function sendMessageToChat(message: string) {
  await bot.sendMessage(env.JEMMA_TELEGRAM_CHAT_ID, message);
}
