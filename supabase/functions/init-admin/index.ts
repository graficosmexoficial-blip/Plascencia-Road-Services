import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "POST only" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const body = await req.json();
    const email = body?.email ?? "adminroad@plascencia.local";
    const password = body?.password ?? "plascencia123";

    const { data: createData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createError) {
      if (createError.message?.includes("already") || createError.message?.includes("exists")) {
        const { data: listData } = await supabaseAdmin.auth.admin.listUsers();
        const existing = listData.users.find((u: { email?: string }) => u.email === email);
        if (existing) {
          return new Response(JSON.stringify({
            success: true,
            email,
            password,
            message: "Usuario ya existia, estos son los datos:",
            userId: existing.id,
          }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }
      }
      return new Response(JSON.stringify({ error: createError.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({
      success: true,
      email,
      password,
      message: "Usuario admin creado exitosamente. Usa estos datos para iniciar sesion:",
      userId: createData.user?.id,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});