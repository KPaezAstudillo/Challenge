import { Provider } from "react-redux";
import RootLayout from "@/app/layout";
import "@/app/globals.css";
import { AppProps } from "next/app";
import { store } from "@/app/store/store";
import { AuthProvider } from "./auth/auth";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
