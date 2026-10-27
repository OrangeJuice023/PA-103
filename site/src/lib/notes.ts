import { getCollection, render } from 'astro:content';
import { pad, type Reading } from '../data/readings';
import type { Org } from '../data/orgs';

const find = async (col: 'webReadings' | 'webOrgs' | 'topicNotes' | 'stories', test: (id: string) => boolean) =>
  (await getCollection(col)).find((e) => test(e.id));

export async function renderEntry(entry?: { body?: string } & Parameters<typeof render>[0]) {
  if (!entry) return null;
  const { Content } = await render(entry);
  return Content;
}

export async function readingNotes(r: Reading) {
  const web = await find('webReadings', (id) => id.startsWith(`read${pad(r.num)}`));
  const topic = r.topicNote ? await find('topicNotes', (id) => id === r.topicNote) : undefined;
  const story = r.story ? await find('stories', (id) => id === r.story) : undefined;
  return { web, topic, story };
}

export async function orgNotes(o: Org) {
  const note = await find('webOrgs', (id) => id === o.file);
  const story = o.story ? await find('stories', (id) => id === o.story) : undefined;
  return { note, story };
}

/** Pulls the "**1. ...?**" answers out of a web reading note, for the five-question matrix. */
export function fiveAnswers(body = ''): (string | null)[] {
  return [1, 2, 3, 4, 5].map((n) => {
    const m = body.match(new RegExp(`\\*\\*${n}\\.[^\\n]*\\*\\*\\s*\\n([\\s\\S]*?)(?=\\n\\s*\\n\\*\\*(?:\\d\\.|Cluster)|$)`));
    return m ? m[1].replace(/\s+/g, ' ').trim() : null;
  });
}
