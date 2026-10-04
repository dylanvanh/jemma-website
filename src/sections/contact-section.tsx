"use client";

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
import { ArrowUpRight } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(contactFormData: ContactFormData) {
    setStatus("idle");
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
        setStatus("success");
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      }
    });
  }

  return (
    <section
      id="contact"
      className="site-shell contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-intro">
        <p className="eyebrow">Let’s make room for something good</p>
        <h2 id="contact-title">
          Your space.
          <br />
          Let’s talk<span className="accent-dot">.</span>
        </h2>
        <p>
          Have a project in mind? Tell me about your space and what you want it
          to feel like.
        </p>
        <a href="mailto:jemmawedgwood01@gmail.com" className="contact-email">
          jemmawedgwood01@gmail.com{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="contact-form"
          aria-label="Project enquiry"
          aria-busy={isPending}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="contact-field">
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name and surname"
                    autoComplete="name"
                    maxLength={100}
                    disabled={isPending}
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
              <FormItem className="contact-field">
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    spellCheck={false}
                    disabled={isPending}
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
              <FormItem className="contact-field">
                <FormLabel>A little about your project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="The space, the location, the idea…"
                    maxLength={500}
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="contact-form-bottom">
            <button type="submit" className="pill-link" disabled={isPending}>
              {isPending ? "Sending…" : "Send enquiry"}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <p>
              Based in Cape Town,
              <br />
              South Africa.
            </p>
          </div>
          <div
            role="status"
            aria-live="polite"
            className="contact-status"
            data-error={status === "error"}
          >
            {status === "success" &&
              "Thank you. Your enquiry has been received."}
            {status === "error" &&
              "Your enquiry could not be sent. Please try again or use the email link."}
          </div>
        </form>
      </Form>
    </section>
  );
}
