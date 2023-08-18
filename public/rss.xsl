<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
  version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
>
  <xsl:output method="html" version="1.0" encoding="utf-8" indent="yes"></xsl:output>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
        <title><xsl:value-of select="/rss/channel/title" /></title>
        <meta name="description" content="{/rss/channel/description}" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <style type="text/css">
          body {
            color: #222;
            font-family: "Segoe UI", apple-system, BlinkMacSystemFont, Futura, Roboto, Arial,
              system-ui, sans-serif;
          }
          .container {
            align-item: center;
            display: flex;
            justify-content: center;
          }
          .item {
            max-width: 768px;
          }
          a {
            color: #4166f5;
            text-decoration: none;
          }
          a:visited {
            color: #3f00ff;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
        <script>
          for (const node of document.querySelectorAll('time')) {
            const time = node.innerText.trim();
            if (!time) continue;
            node.innerText = new Date(time).toLocaleDateString();
          }
          </script>
      </head>
      <body>
        <div class="container">
          <div class="item">
            <header>
              <h1>
                <xsl:value-of select="/rss/channel/title"></xsl:value-of>
              </h1>
              <h2>
                <xsl:value-of select="/rss/channel/description"></xsl:value-of>
              </h2>
              <a
                href="{/rss/channel/link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website &#x2192;
              </a>
            </header>
            <main>
              <h2>Recent Posts</h2>
              <xsl:for-each select="/rss/channel/item">
                <article>
                  <h3>
                    <a
                      href="{link}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <xsl:value-of select="title"></xsl:value-of>
                    </a>
                  </h3>
                  <footer>
                    Published:
                    <time datetime="{pubDate}">
                      <xsl:value-of select="pubDate"></xsl:value-of>
                    </time>
                  </footer>
                </article>
              </xsl:for-each>
            </main>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
