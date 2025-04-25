import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const currentUrl = loc.url.href;

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={currentUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta property="og:url" content={currentUrl} />
      <meta charset="utf-8" />
      <meta
        property="og:description"
        content="Daftar hari libur nasional di Indonesia."
      />
      <meta property="og:title" content={head.title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id-ID" />
      <meta name="robots" content="index,follow" />
      <meta property="og:site_name" content="Hari Libur Nasional Indonesia" />
      <meta name="keywords" content="hari libur, libur, hari libur indonesia" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={head.title} />
      <meta
        property="twitter:description"
        content="Daftar hari libur nasional di Indonesia."
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
