import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BlogContextProvider } from "../utils/BlogContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </BlogContextProvider>
  );
}

export default MyApp;
