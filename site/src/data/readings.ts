import type { ClusterSlug } from './clusters';

// Numbers follow 00_NORTH_STAR.md: 1-18 = A1 (covered in class), 19-29 = A2 (not presented yet).
// `notes` says where our note came from: class slides, the reviewer PDF, or outside research.
export type Reading = {
  num: number;
  slug: string;
  author: string;
  year: number;
  title: string;
  cluster: ClusterSlug;
  covered: 'class' | 'not-yet';
  notes: 'slides' | 'reviewer-pdf' | 'web';
  /** Extra topic notes in 01_FINAL_NOTES/topics/ (file id without .md). */
  topicNote?: string;
  /** Simplified story file id in topics/simplified/. */
  story?: string;
};

export const readings: Reading[] = [
  { num: 1, slug: 'haas-1970', author: 'Haas, Ernst B.', year: 1970, title: 'The Study of Regional Integration: Reflections on the Joy and Anguish of Pretheorizing', cluster: 'neo-functionalism', covered: 'class', notes: 'slides', topicNote: 'haas_pretheorizing', story: 'haas_story' },
  { num: 2, slug: 'mitrany-1966', author: 'Mitrany, David', year: 1966, title: 'A Working Peace System', cluster: 'functionalism', covered: 'class', notes: 'web' },
  { num: 3, slug: 'etzioni-1963', author: 'Etzioni, Amitai', year: 1963, title: 'The Epigenesis of Political Communities at the International Level', cluster: 'transactionalism', covered: 'class', notes: 'web' },
  { num: 4, slug: 'balassa-1961', author: 'Balassa, Bela', year: 1961, title: 'The Theory of Economic Integration', cluster: 'economic-integration', covered: 'class', notes: 'reviewer-pdf', topicNote: 'balassa_economic_integration', story: 'balassa_story' },
  { num: 5, slug: 'caporaso-1998', author: 'Caporaso, James', year: 1998, title: 'Regional Integration Theory: Understanding Our Past and Anticipating Our Future', cluster: 'critique-and-measurement', covered: 'class', notes: 'web' },
  { num: 6, slug: 'rosamond-2008', author: 'Rosamond, Ben', year: 2008, title: 'Rethinking Classical Integration Theory', cluster: 'critique-and-measurement', covered: 'class', notes: 'web' },
  { num: 7, slug: 'warleigh-lack-2006', author: 'Warleigh-Lack, Alex', year: 2006, title: 'Towards a Conceptual Framework for Regionalisation: Bridging "New Regionalism" and "Integration Theory"', cluster: 'crisis-and-new-regionalism', covered: 'class', notes: 'web' },
  { num: 8, slug: 'schmitter-1970', author: 'Schmitter, Philippe C.', year: 1970, title: 'A Revised Theory of Regional Integration', cluster: 'neo-functionalism', covered: 'class', notes: 'web' },
  { num: 9, slug: 'hansen-1969', author: 'Hansen, Roger D.', year: 1969, title: 'Regional Integration: Reflections on a Decade of Theoretical Efforts', cluster: 'critique-and-measurement', covered: 'class', notes: 'web' },
  { num: 10, slug: 'butorina-borko-2022', author: 'Butorina, Olga V., and Yuri A. Borko', year: 2022, title: 'Benefits of Regional Integration: Redefining the Concept', cluster: 'economic-integration', covered: 'class', notes: 'web' },
  { num: 11, slug: 'deutsch-1957', author: 'Deutsch, Karl W., et al.', year: 1957, title: 'Political Community and the North Atlantic Area', cluster: 'transactionalism', covered: 'class', notes: 'web' },
  { num: 12, slug: 'puchala-1968', author: 'Puchala, Donald J.', year: 1968, title: 'The Pattern of Contemporary Regional Integration', cluster: 'transactionalism', covered: 'class', notes: 'web' },
  { num: 13, slug: 'galtung-1968', author: 'Galtung, Johan', year: 1968, title: 'A Structural Theory of Integration', cluster: 'critique-and-measurement', covered: 'class', notes: 'web' },
  { num: 14, slug: 'stone-sweet-sandholtz-1997', author: 'Stone Sweet, Alec, and Wayne Sandholtz', year: 1997, title: 'European Integration and Supranational Governance', cluster: 'institutions-and-governance', covered: 'class', notes: 'web' },
  { num: 15, slug: 'gehring-1996', author: 'Gehring, Thomas', year: 1996, title: 'Integrating Integration Theory: Neo-functionalism and International Regimes', cluster: 'institutions-and-governance', covered: 'class', notes: 'web' },
  { num: 16, slug: 'schimmelfennig-2018', author: 'Schimmelfennig, Frank', year: 2018, title: 'European Integration (Theory) in Times of Crisis: A Comparison of the Euro and Schengen Crises', cluster: 'crisis-and-new-regionalism', covered: 'class', notes: 'web' },
  { num: 17, slug: 'nye-1968', author: 'Nye, Joseph S.', year: 1968, title: 'Comparative Regional Integration: Concept and Measurement', cluster: 'critique-and-measurement', covered: 'class', notes: 'web' },
  { num: 18, slug: 'mattli-1999', author: 'Mattli, Walter', year: 1999, title: 'Explaining Regional Integration Outcomes', cluster: 'institutions-and-governance', covered: 'class', notes: 'web' },
  { num: 19, slug: 'soderbaum-2009', author: 'Soderbaum, Fredrik', year: 2009, title: 'Comparative Regional Integration and Regionalism', cluster: 'crisis-and-new-regionalism', covered: 'not-yet', notes: 'web' },
  { num: 20, slug: 'lindberg-1970', author: 'Lindberg, Leon N.', year: 1970, title: 'Political Integration as a Multidimensional Phenomenon Requiring Multivariate Measurement', cluster: 'neo-functionalism', covered: 'not-yet', notes: 'web', topicNote: 'lindberg_multidimensional', story: 'lindberg_story' },
  { num: 21, slug: 'puchala-1970', author: 'Puchala, Donald J.', year: 1970, title: 'International Transactions and Regional Integration', cluster: 'transactionalism', covered: 'not-yet', notes: 'web' },
  { num: 22, slug: 'nye-1970', author: 'Nye, Joseph S.', year: 1970, title: 'Comparing Common Markets: A Revised Neo-Functionalist Model', cluster: 'neo-functionalism', covered: 'not-yet', notes: 'web' },
  { num: 23, slug: 'hayward-1970', author: 'Hayward, F. M.', year: 1970, title: 'Continuities and Discontinuities between Studies of National and International Political Integration', cluster: 'critique-and-measurement', covered: 'not-yet', notes: 'web' },
  { num: 24, slug: 'nye-1965', author: 'Nye, Joseph S.', year: 1965, title: 'Patterns and Catalysts in Regional Integration', cluster: 'neo-functionalism', covered: 'not-yet', notes: 'web' },
  { num: 25, slug: 'barrera-haas-1969', author: 'Barrera, Mario, and Ernst B. Haas', year: 1969, title: 'The Operationalization of Some Variables Related to Regional Integration: A Research Note', cluster: 'neo-functionalism', covered: 'not-yet', notes: 'web' },
  { num: 26, slug: 'borzel-risse-2019', author: 'Borzel, Tanja A., and Thomas Risse', year: 2019, title: 'Grand Theories of Integration and the Challenges of Comparative Regionalism', cluster: 'crisis-and-new-regionalism', covered: 'not-yet', notes: 'web' },
  { num: 27, slug: 'gibb-2009', author: 'Gibb, Richard', year: 2009, title: "Regional Integration and Africa's Development Trajectory: Meta-theories, Expectations and Reality", cluster: 'crisis-and-new-regionalism', covered: 'not-yet', notes: 'web' },
  { num: 28, slug: 'clark-1995', author: 'Clark, Mark T.', year: 1995, title: 'The Trouble with Collective Security', cluster: 'collective-security', covered: 'not-yet', notes: 'web' },
  { num: 29, slug: 'tarzi-1997', author: 'Tarzi, Shah M.', year: 1997, title: 'The Dilemma of Collective Security: A Theoretical Critique', cluster: 'collective-security', covered: 'not-yet', notes: 'web' },
];

export const readingByNum = (n: number) => readings.find((r) => r.num === n)!;
export const readingBySlug = (s: string) => readings.find((r) => r.slug === s)!;
export const pad = (n: number) => String(n).padStart(2, '0');
