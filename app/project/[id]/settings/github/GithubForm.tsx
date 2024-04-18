"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { githubFormSchema } from "@/utils/types";
import { Input } from "@/components/ui/input";
import { UpdateIcon } from "@radix-ui/react-icons";
import { saveGithubUrl } from "@/lib/actions";

export default function GithubForm({ id, url }: { id: number; url: string }) {
  const form = useForm<z.infer<typeof githubFormSchema>>({
    resolver: zodResolver(githubFormSchema),
    defaultValues: {
      githubUrl: url,
    },
  });

  async function onSubmit(values: z.infer<typeof githubFormSchema>) {
    await saveGithubUrl(id, values.githubUrl);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <div className=" flex flex-row items-center justify-center gap-2">
              <UpdateIcon className=" animate-spin" />
              <span>Loading</span>
            </div>
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </Form>
  );
}
