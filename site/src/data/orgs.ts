// Organizations from 00_NORTH_STAR.md Part B. `readings` are the "theory lens" suggestions from
// the North Star (reading numbers). They are suggestions, not the professor's mapping.
export const regions = [
  { slug: 'europe-atlantic', name: 'Europe and Atlantic' },
  { slug: 'asia-pacific', name: 'Asia-Pacific' },
  { slug: 'south-asia', name: 'South Asia' },
  { slug: 'africa', name: 'Africa' },
  { slug: 'middle-east-gulf', name: 'Middle East and Gulf' },
  { slug: 'americas', name: 'Americas' },
  { slug: 'global', name: 'Global or cross-regional' },
  { slug: 'unverified', name: 'Unverified names' },
] as const;
export type RegionSlug = (typeof regions)[number]['slug'];
export const regionBySlug = (s: string) => regions.find((r) => r.slug === s)!;

export const types = [
  { slug: 'security', name: 'Security and defense' },
  { slug: 'economic', name: 'Economic' },
  { slug: 'political', name: 'Political and mixed' },
  { slug: 'sectoral', name: 'Sectoral' },
  { slug: 'forum', name: 'Global or summit forum' },
  { slug: 'unknown', name: 'Unknown (name unverified)' },
] as const;
export type TypeSlug = (typeof types)[number]['slug'];
export const typeBySlug = (s: string) => types.find((t) => t.slug === s)!;

export type Org = {
  slug: string;
  /** File id in 01_FINAL_NOTES/topics/web/orgs (without .md). */
  file: string;
  acronym: string;
  name: string;
  region: RegionSlug;
  type: TypeSlug;
  founded: number | null;
  foundedNote?: string;
  reporter: string;
  /** false = the name itself is unconfirmed (see North Star open questions). */
  name_verified: boolean;
  readings: number[];
  predecessor?: string;
  successor?: string;
  story?: string;
};

export const orgs: Org[] = [
  { slug: 'eu', file: 'eu', acronym: 'EU', name: 'European Union', region: 'europe-atlantic', type: 'political', founded: 1993, foundedNote: 'Maastricht 1993; roots in 1951 and 1957', reporter: 'Martinez, Verbo', name_verified: true, readings: [1, 8, 14, 22] },
  { slug: 'nato', file: 'nato', acronym: 'NATO', name: 'North Atlantic Treaty Organization', region: 'europe-atlantic', type: 'security', founded: 1949, reporter: 'Calope, Dumadag', name_verified: true, readings: [28, 29, 11] },
  { slug: 'comecon', file: 'comecon', acronym: 'COMECON', name: 'Council for Mutual Economic Assistance', region: 'europe-atlantic', type: 'economic', founded: 1949, foundedNote: 'dissolved 1991', reporter: 'Montero', name_verified: true, readings: [4] },
  { slug: 'asean', file: 'asean', acronym: 'ASEAN', name: 'Association of Southeast Asian Nations', region: 'asia-pacific', type: 'political', founded: 1967, reporter: 'Gumobao', name_verified: true, readings: [7, 3, 11, 19] },
  { slug: 'apec', file: 'apec', acronym: 'APEC', name: 'Asia-Pacific Economic Cooperation', region: 'asia-pacific', type: 'economic', founded: 1989, reporter: 'Siapno (may change to WAICO)', name_verified: true, readings: [7, 19] },
  { slug: 'seato', file: 'seato', acronym: 'SEATO', name: 'Southeast Asia Treaty Organization', region: 'asia-pacific', type: 'security', founded: 1954, foundedNote: 'Manila Pact; dissolved 1977', reporter: 'Dino', name_verified: true, readings: [28, 29] },
  { slug: 'maphilindo', file: 'maphilindo', acronym: 'Maphilindo', name: 'Maphilindo (Malaya, Philippines, Indonesia)', region: 'asia-pacific', type: 'political', founded: 1963, reporter: 'Santos', name_verified: true, readings: [3, 11] },
  { slug: 'pif', file: 'pif', acronym: 'PIF', name: 'Pacific Islands Forum', region: 'asia-pacific', type: 'political', founded: 1971, foundedNote: 'as the South Pacific Forum', reporter: 'Uy', name_verified: true, readings: [19, 7] },
  { slug: 'iora', file: 'iora', acronym: 'IORA', name: 'Indian Ocean Rim Association', region: 'asia-pacific', type: 'economic', founded: 1997, reporter: 'Diaz', name_verified: true, readings: [7, 19] },
  { slug: 'sco', file: 'sco', acronym: 'SCO', name: 'Shanghai Cooperation Organization', region: 'asia-pacific', type: 'security', founded: 2001, foundedNote: 'grew from the Shanghai Five, 1996', reporter: 'Barrameda, Gonzales', name_verified: true, readings: [26, 19, 28] },
  { slug: 'saarc', file: 'saarc', acronym: 'SAARC', name: 'South Asian Association for Regional Cooperation', region: 'south-asia', type: 'political', founded: 1985, reporter: 'Dela Cruz, J. E.; Dela Cruz, P. J.', name_verified: true, readings: [18, 26] },
  { slug: 'au', file: 'au', acronym: 'AU', name: 'African Union', region: 'africa', type: 'political', founded: 2002, predecessor: 'OAU (1963)', reporter: 'Reyes', name_verified: true, readings: [27] },
  { slug: 'eac', file: 'eac', acronym: 'EAC', name: 'East African Community', region: 'africa', type: 'economic', founded: 2000, foundedNote: 'revived 2000; HQ Arusha', reporter: 'Agaloos', name_verified: true, readings: [4, 27] },
  { slug: 'nile-basin-initiative', file: 'nile_basin_initiative', acronym: 'NBI', name: 'Nile Basin Initiative', region: 'africa', type: 'sectoral', founded: 1999, reporter: 'Corado', name_verified: true, readings: [2], story: 'nile_basin_initiative_story' },
  { slug: 'arab-league', file: 'arab_league', acronym: 'Arab League', name: 'League of Arab States', region: 'middle-east-gulf', type: 'political', founded: 1945, foundedNote: 'Cairo', reporter: 'Caro', name_verified: true, readings: [3, 11] },
  { slug: 'gcc', file: 'gcc', acronym: 'GCC', name: 'Gulf Cooperation Council', region: 'middle-east-gulf', type: 'political', founded: 1981, reporter: 'Vergara', name_verified: true, readings: [4, 28] },
  { slug: 'opec', file: 'opec', acronym: 'OPEC', name: 'Organization of the Petroleum Exporting Countries', region: 'middle-east-gulf', type: 'sectoral', founded: 1960, reporter: 'Cual', name_verified: true, readings: [2] },
  { slug: 'caricom', file: 'caricom', acronym: 'CARICOM', name: 'Caribbean Community', region: 'americas', type: 'economic', founded: 1973, foundedNote: 'Treaty of Chaguaramas', reporter: 'Enriquez', name_verified: true, readings: [4, 19] },
  { slug: 'mercosur', file: 'mercosur', acronym: 'Mercosur', name: 'Southern Common Market', region: 'americas', type: 'economic', founded: 1991, foundedNote: 'Treaty of Asuncion', reporter: 'Sandoval', name_verified: true, readings: [4, 18] },
  { slug: 'lafta', file: 'lafta', acronym: 'LAFTA', name: 'Latin American Free Trade Association', region: 'americas', type: 'economic', founded: 1960, foundedNote: 'Treaty of Montevideo; replaced by LAIA in 1980', successor: 'LAIA (1980)', reporter: 'Lopera', name_verified: true, readings: [4, 18] },
  { slug: 'league-of-nations', file: 'league_of_nations', acronym: 'League of Nations', name: 'League of Nations', region: 'global', type: 'security', founded: 1920, foundedNote: 'Geneva; ended 1946, replaced by the UN', reporter: 'Antolin', name_verified: true, readings: [28, 29] },
  { slug: 'brics', file: 'brics', acronym: 'BRICS', name: 'BRICS', region: 'global', type: 'forum', founded: null, foundedNote: 'expanded in 2024; see note', reporter: 'Inciong', name_verified: true, readings: [26, 19] },
  { slug: 'g20', file: 'g20', acronym: 'G20', name: 'Group of Twenty', region: 'global', type: 'forum', founded: 1999, foundedNote: 'leaders’ summits since 2008', reporter: 'Meim', name_verified: true, readings: [26] },
  { slug: 'meca', file: 'meca', acronym: 'MECA', name: 'MECA (full name unconfirmed)', region: 'unverified', type: 'unknown', founded: null, reporter: 'Saludo', name_verified: false, readings: [] },
  { slug: 'waico', file: 'waico', acronym: 'WAICO', name: 'WAICO (full name unconfirmed)', region: 'unverified', type: 'unknown', founded: null, reporter: 'Siapno', name_verified: false, readings: [] },
];

export const orgBySlug = (s: string) => orgs.find((o) => o.slug === s)!;
export const orgsForReading = (n: number) => orgs.filter((o) => o.readings.includes(n));
