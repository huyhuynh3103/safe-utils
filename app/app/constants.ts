// TODO(sky-mavis): set BASE_URL to the Sky Mavis self-hosted safe-transaction-service.
// If the service uses ONE host with per-chain paths, keep this and use `${BASE_URL}/<chain>`.
// If it uses SEPARATE hostnames per chain, delete BASE_URL and inline full apiUrl strings.
export const BASE_URL = "https://<sky-mavis-safe-tx-host>";

export const NETWORKS = [
  {
    value: "ronin",
    label: "Ronin",
    chainId: 2020,
    gnosisPrefix: "ronin",
    logo: "networks/ronin.ico",
    apiUrl: `${BASE_URL}/ronin`, // TODO(sky-mavis): confirm URL for the chainId 2020 Tx Service
  },
  {
    value: "saigon",
    label: "Saigon Testnet",
    chainId: 202601, // authoritative Ronin testnet id — NOT the public "Saigon 2021"
    gnosisPrefix: "saigon",
    logo: "networks/ronin.ico", // shared icon with mainnet
    apiUrl: `${BASE_URL}/saigon`, // TODO(sky-mavis): confirm URL for the chainId 202601 Tx Service
  },
];


export const SAFE_VERSIONS = [
  "0.0.1",
  "0.1.0",
  "1.0.0",
  "1.1.0",
  "1.1.1",
  "1.2.0",
  "1.3.0",
  "1.4.1",
  "1.5.0",
];

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
