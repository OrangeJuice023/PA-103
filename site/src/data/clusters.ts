// Draft grouping from 00_NORTH_STAR.md A3. Confirm against the professor's slides.
export const clusters = [
  { slug: 'functionalism', name: 'Functionalism', color: '#b45309', blurb: 'Cooperation on technical tasks builds peace.' },
  { slug: 'neo-functionalism', name: 'Neo-functionalism', color: '#4f46e5', blurb: 'Spillover pushes integration forward.' },
  { slug: 'transactionalism', name: 'Transactionalism', color: '#0891b2', blurb: 'Communication and community drive integration.' },
  { slug: 'economic-integration', name: 'Economic integration', color: '#15803d', blurb: 'Stages from free trade area to full union.' },
  { slug: 'critique-and-measurement', name: 'Critique and measurement', color: '#be185d', blurb: 'Can integration be defined and measured?' },
  { slug: 'institutions-and-governance', name: 'Institutions and governance', color: '#7c3aed', blurb: 'Supranational rules and regimes.' },
  { slug: 'crisis-and-new-regionalism', name: 'Crisis and new regionalism', color: '#c2410c', blurb: 'Beyond Europe, beyond old theory.' },
  { slug: 'collective-security', name: 'Collective security', color: '#475569', blurb: 'Limits of security-based cooperation.' },
] as const;

export type ClusterSlug = (typeof clusters)[number]['slug'];
export const clusterBySlug = (s: string) => clusters.find((c) => c.slug === s)!;

export const fiveQuestions = [
  'What is "integration"?',
  'What drives it?',
  'Who are the actors?',
  'How is it measured or tested?',
  'Builds on or argues against?',
];
