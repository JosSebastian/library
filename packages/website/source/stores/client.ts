import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/types/database";

export const useClientStore = defineStore("client", () => {
  const config = useRuntimeConfig();
  const client = createClient<Database>(config.public.databaseURL, config.public.databaseKEY);
  return {
    client
  };
});
