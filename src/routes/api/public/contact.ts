import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email").max(320),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input" },
            { status: 400 },
          );
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            name: parsed.data.name,
            email: parsed.data.email,
            message: parsed.data.message,
          });

        if (error) {
          console.error("contact_submissions insert failed:", error);
          return Response.json({ error: "Could not save message" }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
