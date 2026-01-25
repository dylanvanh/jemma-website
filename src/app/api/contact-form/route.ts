import { after } from "next/server";
import { sendMessageToChat } from "@/lib/send-telegram-message";
import { type ContactFormData } from "@/types/contact-form";

export async function POST(request: Request) {
  const data = (await request.json()) as ContactFormData;

  if (data.name == null || data.message == null || data.email == null) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
    });
  }

  const formattedMessage = `You have a new message:\n "${data.message}"\n from: ${data.name}\n email: ${data.email}`;

  after(async () => {
    try {
      await sendMessageToChat(formattedMessage);
    } catch (e) {
      console.error("Error sending telegram message:\n", e);
    }
  });

  return new Response(null, { status: 200 });
}
