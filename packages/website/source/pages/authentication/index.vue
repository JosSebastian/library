<template>
  <div class="flex grow items-center justify-center">
    <UCard v-if="sign" class="w-96">
      <div
        class="flex flex-col items-center gap-3 p-1.5"
        @keyup.esc="handleCancel"
        @keydown.enter="handleConfirm"
      >
        <div class="m-1.5">
          <h1 class="text-3xl">
            Sign
            {{ sign.at(0)?.toUpperCase() + sign.slice(1) }}
          </h1>
        </div>

        <div v-if="sign === 'up'" class="flex w-full flex-col gap-6">
          <UDivider />
          <div class="flex flex-col gap-3">
            <div class="flex gap-3">
              <div class="flex flex-col">
                <label>First Name</label>
                <UInput v-model="creadentials.name.first" />
              </div>
              <div class="flex flex-col">
                <label>Last Name</label>
                <UInput v-model="creadentials.name.last" />
              </div>
            </div>
            <div class="flex flex-col">
              <label>Email</label>
              <UInput v-model="creadentials.email" type="email" />
            </div>
            <div class="flex flex-col">
              <label>Password</label>
              <UInput v-model="creadentials.password" type="password" />
            </div>
          </div>
          <UDivider />
        </div>

        <div v-if="sign === 'in'" class="flex w-full flex-col gap-6">
          <UDivider />
          <div class="flex flex-col gap-3">
            <div class="flex flex-col">
              <label>Email</label>
              <UInput v-model="creadentials.email" type="email" />
            </div>
            <div class="flex flex-col">
              <label>Password</label>
              <UInput v-model="creadentials.password" type="password" />
            </div>
          </div>
          <UDivider />
        </div>

        <div v-if="sign === 'out'" class="flex w-full flex-col gap-6">
          <UDivider />
        </div>

        <div class="m-3 flex flex-col items-center gap-1.5">
          <div class="flex gap-1.5">
            <UButton
              variant="soft"
              label="Cancel"
              icon="i-heroicons-x-mark-16-solid"
              @click="handleCancel"
            />
            <UButton
              variant="solid"
              label="Confirm"
              icon="i-heroicons-check-16-solid"
              @click="handleConfirm"
            />
          </div>
          <div v-if="sign !== 'out'">
            <ULink
              v-if="sign === 'in'"
              class="outline-primary hover:text-primary focus:text-primary rounded p-1 text-sm underline opacity-50 outline outline-0 hover:opacity-100 hover:outline-1 focus:opacity-100 focus:outline-1"
              @click="toggleSign"
            >
              Sign Up?
            </ULink>
            <ULink
              v-if="sign === 'up'"
              class="outline-primary hover:text-primary focus:text-primary rounded p-1 text-sm underline opacity-50 outline outline-0 hover:opacity-100 hover:outline-1 focus:opacity-100 focus:outline-1"
              @click="toggleSign"
            >
              Sign In?
            </ULink>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication"
});

const router = useRouter();

const userStore = useUserStore();
const creadentials = computed(() => userStore.creadentials);

const signs = ["up", "in", "out"];
const sign = useState(() => {
  const sign = router.currentRoute.value.query.sign as (typeof signs)[0];
  return signs.includes(sign) ? sign : signs[0];
});
const toggleSign = () => {
  switch (sign.value) {
    case "up":
      router.push({
        query: {
          sign: "in"
        }
      });
      sign.value = "in";
      break;
    case "in":
      router.push({
        query: {
          sign: "up"
        }
      });
      sign.value = "up";
      break;
  }
};

const handleCancel = () => {
  userStore.creadentials = {
    name: {
      first: "",
      last: ""
    },
    email: "",
    password: ""
  };
  router.push({
    path: "/"
  });
};
const handleConfirm = () => {
  switch (sign.value) {
    case "up":
      userStore.signUp();
      break;
    case "in":
      userStore.signIn();
      break;
    case "out":
      userStore.signOut();
      break;
  }
};
</script>
