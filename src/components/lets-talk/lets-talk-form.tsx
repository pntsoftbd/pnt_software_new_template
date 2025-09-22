"use client"

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  Typography,
} from "@/components/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { Paperclip } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z.email({ error: "Please enter a valid email" }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+]?[0-9\s\-()]{7,20}$/.test(val), {
      message: "Enter a valid phone number",
    }),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message must not exceed 1000 characters"),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export default function LetsTalkForm() {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormSchema) {
    console.log(values)
  }

  return (
    <div className="space-y-6 rounded-xl bg-white p-8 shadow-sm sm:p-10">
      <Typography variant="h3">Let’s Talk</Typography>
      <Typography variant={"mutedText"}>
        Every idea has the power to change the world! We’d love to hear yours.
      </Typography>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone:</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your phone no."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About Project:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Custom Attachment */}
          <div className="flex items-center gap-2 pt-1">
            <Paperclip className="text-destructive h-4 w-4" />
            <label className="cursor-pointer text-sm font-medium">
              Attachment
              <input type="file" hidden />
            </label>
          </div>

          <Button type="submit" className="mt-2">
            Message
          </Button>

          <p className="text-muted-foreground text-xs">
            By sending this, you are accepting our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:text-primary/80 underline"
            >
              privacy policy
            </Link>
          </p>
        </form>
      </Form>
    </div>
  )
}
