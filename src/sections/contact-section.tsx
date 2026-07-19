"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type ContactFormData } from "@/types/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Required" })
    .max(100, { message: "Name must not be longer than 100 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(1, { message: "Required" })
    .max(500, { message: "Message must not be longer than 500 characters." }),
});

export function ContactSection() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(contactFormData: ContactFormData) {
    startTransition(async () => {
      try {
        const response = await fetch("/api/contact-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactFormData),
        });

        if (!response.ok) {
          throw new Error("Invalid response");
        }

        form.reset();
        toast.success("Message sent successfully.");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <section className="site-shell section-space pt-12 md:pt-16">
      <div className="bg-accent text-accent-foreground grid overflow-hidden lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-6 lg:p-16"
        >
          <p className="text-accent-foreground/70 mb-8 text-xs font-semibold tracking-[0.16em] uppercase">
            Start a conversation
          </p>
          <h3 className="font-heading max-w-[11ch] text-5xl leading-none font-medium tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Have a space in mind?
          </h3>
          <p className="text-accent-foreground/75 mt-8 max-w-md text-base leading-relaxed">
            Tell me what you&apos;re working on, where it is and what you want
            the space to feel like. I&apos;ll get back to you as soon as I can.
          </p>

          <div className="border-accent-foreground/25 mt-12 space-y-4 border-t pt-6">
            <div className="flex items-center gap-3">
              <span className="text-accent-foreground/60 text-xs tabular-nums">
                01
              </span>
              <a
                href="mailto:jemmawedgwood01@gmail.com"
                className="text-accent-foreground/80 hover:text-accent-foreground min-h-11 py-2 transition-colors"
              >
                jemmawedgwood01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent-foreground/60 text-xs tabular-nums">
                02
              </span>
              <span className="text-accent-foreground/80">
                Cape Town, South Africa
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card text-card-foreground flex items-center p-7 sm:p-10 lg:col-span-6 lg:p-16"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="border-border focus-visible:border-accent h-12 rounded-none border-0 border-b bg-transparent px-0 text-base transition-colors focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-border focus-visible:border-accent h-12 rounded-none border-0 border-b bg-transparent px-0 text-base transition-colors focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        className="border-border focus-visible:border-accent min-h-32 resize-none rounded-none border-0 border-b bg-transparent px-0 py-3 text-base transition-colors focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPending}
                className="bg-foreground text-background hover:bg-foreground/85 mt-4 h-12 w-full rounded-none px-8 transition-all active:translate-y-px md:w-auto"
              >
                {isPending ? "Sending…" : "Send enquiry ↗"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
