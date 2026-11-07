# Post-render: keep /pitchdeck/ pages reachable by link but out of search.
# Removes them from sitemap.xml and adds a robots noindex tag to each page.
import os
import pathlib
import re

out = pathlib.Path(os.environ.get('QUARTO_PROJECT_OUTPUT_DIR', 'docs'))
NOINDEX = '<meta name="robots" content="noindex, nofollow">'

sitemap = out / 'sitemap.xml'
if sitemap.exists():
    xml = sitemap.read_text(encoding='utf-8')
    stripped = re.sub(r'\s*<url>\s*<loc>[^<]*/pitchdeck/[^<]*</loc>[\s\S]*?</url>', '', xml)
    if stripped != xml:
        sitemap.write_text(stripped, encoding='utf-8')

for page in (out / 'pitchdeck').glob('*.html'):
    html = page.read_text(encoding='utf-8')
    if 'name="robots"' not in html:
        page.write_text(re.sub(r'<head([^>]*)>', lambda m: f'<head{m.group(1)}>\n{NOINDEX}', html, count=1), encoding='utf-8')
