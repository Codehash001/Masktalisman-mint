import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { getDefaultWallets, RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig, useAccount } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { Chain, mainnet, polygon , polygonMumbai } from 'wagmi/chains';


const { provider, chains } = configureChains(
  [polygonMumbai, mainnet],
  [
    jsonRpcProvider({
      rpc: chain => ({process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL}),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  jsonRpcUrl: {process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL},
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
});

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 100})
  }, []);
  
  return (
   
    <div>
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
  <Component {...pageProps} />
  </RainbowKitProvider>
      </WagmiConfig>
  </div>
  
  )
}