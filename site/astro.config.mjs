import { defineConfig } from 'astro/config';

// The notes start with "# Reading 2 ..." / "# Organization ..." headings. The page template
// already prints the title, so drop the first H1 from the rendered note.
function stripFirstH1() {
  return (tree) => {
    const i = tree.children.findIndex((n) => n.type === 'heading' && n.depth === 1);
    if (i >= 0) tree.children.splice(i, 1);
  };
}

export default defineConfig({
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { remarkPlugins: [stripFirstH1] },
});
