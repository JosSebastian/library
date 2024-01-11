import type { User } from "@supabase/supabase-js";

export const useUserStore = defineStore("user", () => {
  const clientStore = useClientStore();
  const client = clientStore.client;

  const user = useState<User | undefined>();
  const getUser = async () => {
    const { data, error } = await client.auth.getSession();
    if (error) {
      throw error;
    }
    user.value = data?.session?.user ?? undefined;
    return user.value;
  };
  getUser();

  const creadentials = useState<{
    name: { first: string; last: string };
    email: string;
    password: string;
  }>(() => {
    return {
      name: { first: "", last: "" },
      email: "",
      password: ""
    };
  });
  const resetCreadentials = () => {
    creadentials.value = {
      name: { first: "", last: "" },
      email: "",
      password: ""
    };
  };

  const signUp = async () => {
    try {
      const { data, error } = await client.auth.signUp({
        email: creadentials.value.email,
        password: creadentials.value.password,
        options: {
          data: {
            name: creadentials.value.name
          }
        }
      });
      if (error) {
        throw error;
      }
      user.value = data?.user ?? undefined;
      resetCreadentials();
      return user.value;
    } catch (error) {
      console.error(error);
      creadentials.value.password = "";
    }
  };
  const signIn = async () => {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email: creadentials.value.email,
        password: creadentials.value.password
      });
      if (error) {
        throw error;
      }
      user.value = data?.user ?? undefined;
      resetCreadentials();
      return user.value;
    } catch (error) {
      console.error(error);
      creadentials.value.password = "";
    }
  };
  const signOut = async () => {
    try {
      const { error } = await client.auth.signOut();
      if (error) {
        throw error;
      }
      user.value = undefined;
      return user.value;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    getUser,
    creadentials,
    signUp,
    signIn,
    signOut
  };
});
