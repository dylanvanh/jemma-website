import { sendMessageToChat } from "@/lib/send-telegram-message";
import { type ContactFormData } from "@/types/contact-form";

export async function POST(request: Request) {
  const data = (await request.json()) as ContactFormData;

  if (data.name == null || data.message == null || data.email == null) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
    });
  }

  try {
    const formattedMessage = `You have a new message:\n "${data.message}"\n from: ${data.name}\n email: ${data.email}`;
    await sendMessageToChat(formattedMessage);
  } catch (e) {
    console.error("Error sending telegram message:\n", e);
    return new Response(null, { status: 500 });
  }
  return new Response(null, { status: 200 });
}
