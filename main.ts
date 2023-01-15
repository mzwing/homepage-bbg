import { serveListener } from "https://deno.land/std@0.172.0/http/server.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

const serveFiles = (req: Request) =>
  staticFiles("./")({
    request: req,
    respondWith: (r: Response) => r,
  });

const listener = Deno.listen({ port: 443 });

console.log("Server is running at port 443.");

await serveListener(listener, (req) => serveFiles(req));
