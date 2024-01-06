import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.library.mobile",
  appName: "mobile",
  webDir: "./dist",
  server: {
    androidScheme: "https",
    iosScheme: "https"
  },
  android: {
    path: "target/android"
  },
  ios: {
    path: "target/ios"
  }
};

export default config;
