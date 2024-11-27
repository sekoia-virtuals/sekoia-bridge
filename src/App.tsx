import WormholeConnect, {
  WormholeConnectConfig,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

// wormhole connect 1.x
const config: WormholeConnectConfig = {
  network: "Mainnet",
  ui: {
    title: "sekoia by Virtuals",
    defaultInputs: {
      fromChain: "Base",
      toChain: "Solana",
      tokenKey: "SEKOIA",
      toTokenKey: "SEKOIA",
    },
    showHamburgerMenu: false,
  },
  rpcs: {
    Base: "https://base-rpc.publicnode.com",
    Solana: "https://solana-rpc.publicnode.com",
  },
  chains: ["Base", "Solana"],
  tokens: ["SEKOIA"],
  tokensConfig: {
    SEKOIA: {
      key: "SEKOIA",
      symbol: "SEKOIA",
      nativeChain: "Base",
      tokenId: {
        chain: "Base",
        address: "0x1185cB5122Edad199BdBC0cbd7a0457E448f23c7",
      },
      coinGeckoId: "sekoia-by-virtuals",
      icon: "/logo.jpg",
      decimals: 18,
      displayName: "sekoia by Virtuals",
    },
  },
  wrappedTokens: {
    SEKOIA: {
      Solana: "7F2fAnAr2fSVz43EVUGgYDkQxyc4jdqXcBnUMVxU1RnY",
    },
  },
};

const theme: WormholeConnectTheme = { mode: "dark" };

function App() {
  return (
    <>
      <WormholeConnect config={config} theme={theme} />
    </>
  );
}

export default App;
