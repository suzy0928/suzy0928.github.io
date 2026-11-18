export type PublicationType =
  | "journal"
  | "international"
  | "domestic";

export interface Publication {
  id: string;
  year: number;
  type: PublicationType;
  title: string;
  authors: string[];
  selfIndex: number;
  venue: string;
  details: string;
  url?: string;
  award?: string;
}

export const publications: Publication[] = [
  {
    id: "griv-2026",
    year: 2026,
    type: "journal",
    title:
      "GRIV: Gateway-Based Report Integrity Verification against Report Concealment Attacks in Distributed IoT IDS",
    authors: ["Su-ji Park", "Yeon-woo Lee", "Il-Gu Lee"],
    selfIndex: 0,
    venue: "Computers, Materials & Continua (CMC)",
    details: "Published online November 17, 2026",
    url: "https://doi.org/10.32604/cmc.2026.092071",
  },
  {
    id: "civ-ebision-2026",
    year: 2026,
    type: "international",
    title:
      "CIV: Content Integrity Verification for Distributed Intrusion Detection Systems",
    authors: ["Su-ji Park", "Yeon-woo Lee", "Il-Gu Lee"],
    selfIndex: 0,
    venue:
      "The 2nd IFIP WG 8.4 International Symposium on E-Business Information Systems Evolution (EBISION 2026)",
    details: "Seoul, South Korea, July 2026",
    award: "Innovation Paper Award",
  },
  {
    id: "synchronization-ebision-2026",
    year: 2026,
    type: "international",
    title:
      "An Energy-Efficient Synchronization Scheme Using Exponential Moving Average-Based Drift Compensation and Adaptive Reception Window for Wireless Sensor Networks",
    authors: ["Yeon-woo Lee", "Su-ji Park", "Il-Gu Lee"],
    selfIndex: 1,
    venue:
      "The 2nd IFIP WG 8.4 International Symposium on E-Business Information Systems Evolution (EBISION 2026)",
    details: "Seoul, South Korea, July 2026",
  },
  {
    id: "p300-fgs-2026",
    year: 2026,
    type: "domestic",
    title:
      "Visual and Auditory P300 EEG-Based Authentication System Ensuring Revocability in Biometrics",
    authors: ["Su-ji Park", "Yeon-Ji Lee", "Il-Gu Lee"],
    selfIndex: 0,
    venue:
      "The 9th Workshop on Fifth Generation Network Security (FGS'26)",
    details: "Yeosu, Republic of Korea, April 2026",
  },
  {
    id: "flow-ask-2026",
    year: 2026,
    type: "domestic",
    title:
      "Selective Protection of Network Flow Features for Balancing Privacy and Intrusion Detection Utility",
    authors: ["Gawon Moon", "Su-ji Park", "Il-Gu Lee"],
    selfIndex: 1,
    venue: "Proceedings of ASK 2026 (Annual Symposium of KIPS)",
    details:
      "vol. 33, no. 1, pp. 213–215, Gangneung, Republic of Korea, May 2026",
  },
  {
    id: "p300-wisa-2025",
    year: 2025,
    type: "international",
    title:
      "A Revocable Multi-modal EEG Authentication Paradigm Using P300 Responses",
    authors: ["Suji Park", "Yeon-Ji Lee", "Il-Gu Lee"],
    selfIndex: 0,
    venue:
      "The 24th World Conference on Information Security Applications (WISA)",
    details: "August 2025",
  },
  {
    id: "watermark-mobisec-2025",
    year: 2025,
    type: "international",
    title:
      "Hidden in the Noise: Noise-Embedded Watermarking for Black-Box Image Classifiers",
    authors: [
      "Yeon-Ji Lee",
      "Hye-Yeon Shim",
      "Yeon-Woo Lee",
      "Su-Ji Park",
      "Il-Gu Lee",
    ],
    selfIndex: 3,
    venue:
      "The 9th International Conference on Mobile Internet Security (MobiSec)",
    details: "Sapporo, Japan, December 2025",
  },
];