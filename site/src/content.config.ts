import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// The site reads the notes in place. 01_FINAL_NOTES stays the single source of truth.
const notes = (base: string) => defineCollection({ loader: glob({ base, pattern: '*.md' }) });

export const collections = {
  webReadings: notes('../01_FINAL_NOTES/topics/web/readings'),
  webOrgs: notes('../01_FINAL_NOTES/topics/web/orgs'),
  topicNotes: notes('../01_FINAL_NOTES/topics'),
  stories: notes('../01_FINAL_NOTES/topics/simplified'),
};
