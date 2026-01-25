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
        toast.success("Message sent successfully!");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </p>
          <h3 className="mb-6 font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Let&apos;s create something beautiful together
          </h3>
          <p className="max-w-md text-muted-foreground">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Fill out the form and I&apos;ll get back to you as soon as
            possible.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-accent" />
              <a
                href="mailto:jemmawedgwood01@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                jemmawedgwood01@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-accent" />
              <span className="text-muted-foreground">
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
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="border-0 border-b border-border bg-transparent px-0 py-3 text-base transition-colors focus-visible:border-accent focus-visible:ring-0"
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
                    <FormLabel className="text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-0 border-b border-border bg-transparent px-0 py-3 text-base transition-colors focus-visible:border-accent focus-visible:ring-0"
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
                    <FormLabel className="text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        className="min-h-32 resize-none border-0 border-b border-border bg-transparent px-0 py-3 text-base transition-colors focus-visible:border-accent focus-visible:ring-0"
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
                className="mt-4 w-full bg-accent text-accent-foreground transition-all hover:bg-accent/90 md:w-auto md:px-12"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
