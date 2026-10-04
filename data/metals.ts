import type { MetalDefinition, MetalId, SpotKey } from "@/types/metal";

/**
 * Static metal definitions: purities and payout factors.
 * Market prices are NOT stored here — they come from the market data provider
 * (see lib/market/provider.ts).
 */
export const METALS: MetalDefinition[] = [
  {
    id: "gold",
    name: "Gold",
    symbol: "Au",
    spotKey: "XAU",
    payoutFactor: 0.96,
    swatch: "#E2B238",
    referenceLabel: "Feingold 999",
    purities: [
      { id: "999", fineness: 999, label: "Feingold · 24 Karat", short: "24 K" },
      { id: "986", fineness: 986, label: "Dukatengold · 23,7 Karat", short: "23,7 K" },
      { id: "916", fineness: 916, label: "22 Karat", short: "22 K" },
      { id: "900", fineness: 900, label: "Münzgold · 21,6 Karat", short: "21,6 K" },
      { id: "750", fineness: 750, label: "18 Karat", short: "18 K" },
      { id: "585", fineness: 585, label: "14 Karat", short: "14 K" },
      { id: "375", fineness: 375, label: "9 Karat", short: "9 K" },
      { id: "333", fineness: 333, label: "8 Karat", short: "8 K" },
    ],
  },
  {
    id: "zahngold",
    name: "Zahngold",
    symbol: "Au",
    spotKey: "XAU",
    payoutFactor: 0.9,
    swatch: "#D8B872",
    referenceLabel: "Hochgoldhaltig",
    purities: [
      { id: "750", fineness: 750, label: "Hochgoldhaltig · ca. 75 % Au", short: "hochg." },
      { id: "500", fineness: 500, label: "Goldreduziert · ca. 50 % Au", short: "reduz." },
      { id: "200", fineness: 200, label: "Palladiumbasis · ca. 20 % Au", short: "Pd-Basis" },
    ],
  },
  {
    id: "silber",
    name: "Silber",
    symbol: "Ag",
    spotKey: "XAG",
    payoutFactor: 0.9,
    swatch: "#D5D8DD",
    referenceLabel: "Feinsilber 999",
    purities: [
      { id: "999", fineness: 999, label: "Feinsilber", short: "fein" },
      { id: "925", fineness: 925, label: "Sterlingsilber", short: "Sterling" },
      { id: "900", fineness: 900, label: "Münzsilber", short: "Münze" },
      { id: "835", fineness: 835, label: "Silber 835", short: "835" },
      { id: "800", fineness: 800, label: "Silber 800", short: "800" },
    ],
  },
  {
    id: "platin",
    name: "Platin",
    symbol: "Pt",
    spotKey: "XPT",
    payoutFactor: 0.94,
    swatch: "#B9BDC5",
    referenceLabel: "Feinplatin 999",
    purities: [
      { id: "999", fineness: 999, label: "Feinplatin", short: "fein" },
      { id: "950", fineness: 950, label: "Platin 950", short: "950" },
      { id: "900", fineness: 900, label: "Platin 900", short: "900" },
    ],
  },
  {
    id: "palladium",
    name: "Palladium",
    symbol: "Pd",
    spotKey: "XPD",
    payoutFactor: 0.94,
    swatch: "#A2A7AF",
    referenceLabel: "Feinpalladium 999",
    purities: [
      { id: "999", fineness: 999, label: "Feinpalladium", short: "fein" },
      { id: "950", fineness: 950, label: "Palladium 950", short: "950" },
      { id: "500", fineness: 500, label: "Palladium 500", short: "500" },
    ],
  },
];

export const METAL_IDS = METALS.map((m) => m.id) as MetalId[];

/** Metals shown in the compact live ticker (market instruments only). */
export const TICKER_KEYS: { key: SpotKey; label: string }[] = [
  { key: "XAU", label: "Gold" },
  { key: "XAG", label: "Silber" },
  { key: "XPT", label: "Platin" },
  { key: "XPD", label: "Palladium" },
];

export const SPOT_LABELS: Record<SpotKey, string> = {
  XAU: "Feingold 999",
  XAG: "Feinsilber 999",
  XPT: "Feinplatin 999",
  XPD: "Feinpalladium 999",
};
