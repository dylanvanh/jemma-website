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
import { toast } from "@/components/ui/use-toast";
import { type ContactFormData } from "@/types/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Required",
    })
    .max(100, {
      message: "Message must not be longer than 50 characters.",
    }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, {
      message: "Required",
    })
    .max(250, {
      message: "Message must not be longer than 250 characters.",
    }),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(contactFormData: ContactFormData) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormData),
      });

      if (!response.ok) {
        throw new Error("Invalid response");
      }

      form.reset();

      toast({
        description: "Your message has been sent.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="container my-16 flex w-2/3 flex-col items-center justify-center md:w-1/2">
        <p className="pb-5 text-slate-500 dark:text-slate-400">
          Have a question or want to work together?
        </p>
        <Form {...form}>
          <form
            onSubmit={() => form.handleSubmit(onSubmit)}
            className="w-full space-y-5 text-center"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="mx-auto w-full xl:w-2/3"
                      placeholder="Your name"
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="mx-auto w-full xl:w-2/3"
                      type="email"
                      placeholder="Your Email"
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="mx-auto w-full xl:w-2/3"
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-2/3 md:w-1/2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </section>
    </>
  );
}
