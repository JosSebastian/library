import { createClient } from "@supabase/supabase-js";

export const useClientStore = defineStore("client", () => {
  const config = useRuntimeConfig();
  const client = createClient(config.public.databaseURL, config.public.databaseKEY);
  return {
    client
  };
});
