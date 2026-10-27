import { defineConfig } from 'astro/config';

// The notes start with "# Reading 2 ..." / "# Organization ..." headings. The page template
// already prints the title, so drop the first H1 from the rendered note.
function stripFirstH1() {
  return (tree) => {
    const i = tree.children.findIndex((n) => n.type === 'heading' && n.depth === 1);
    if (i >= 0) tree.children.splice(i, 1);
  };
}

// The notes carry a "**Status:** WEB ..." line. The page already shows the WEB badge,
// so drop that line from the rendered note (the source file is untouched).
function stripWebStatus() {
  return (tree) => {
    tree.children = tree.children.filter((n) => {
      if (n.type !== 'paragraph') return true;
      const [a, b] = n.children;
      return !(a?.type === 'strong' && a.children?.[0]?.value === 'Status:' && /^\s*WEB/.test(b?.value ?? ''));
    });
  };
}

export default defineConfig({
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { remarkPlugins: [stripFirstH1, stripWebStatus] },
});
