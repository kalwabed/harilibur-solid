// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import RootLayout from "./components/layout/root-layout";

const canonicalURL = "https://harilibur.vercel.app/";

export default function Root() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Hari libur nasional dan hari besar di Indonesia</Title>
          <Suspense>
            <RootLayout>{props.children}</RootLayout>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
    // <Html lang="id">
    //   <Head>
    //     <Title>Hari libur nasional dan hari besar di Indonesia</Title>
    //     <Meta charset="utf-8" />
    //     <Meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <Meta
    //       name="description"
    //       content="Daftar hari libur nasional di Indonesia."
    //     />
    //     <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    //     <Link rel="canonical" href={canonicalURL} />
    //     <Meta property="og:url" content={canonicalURL} />
    //     <Meta
    //       property="og:description"
    //       content="Daftar hari libur nasional di Indonesia."
    //     />
    //     <Meta property="og:title" content={canonicalURL} />
    //     <Meta property="og:type" content="website" />
    //     <Meta property="og:locale" content="id-ID" />
    //     <Meta name="robots" content="index,follow" />
    //     <Meta property="og:site_name" content="harilibur.vercel.app" />
    //     <Meta
    //       name="keywords"
    //       content="hari libur, libur, hari libur indonesia"
    //     />
    //     <Meta property="twitter:card" content="summary_large_image" />
    //     <Meta property="twitter:url" content={canonicalURL} />
    //     <Meta
    //       property="twitter:title"
    //       content="Hari libur nasional dan hari besar di Indonesia"
    //     />
    //     <Meta
    //       property="twitter:description"
    //       content="Daftar hari libur nasional di Indonesia."
    //     />
    //   </Head>
    //   <Body>
    //     <Suspense>
    //       <ErrorBoundary>
    //         <RootLayout>
    //           <Routes>
    //             <FileRoutes />
    //           </Routes>
    //         </RootLayout>
    //       </ErrorBoundary>
    //     </Suspense>
    //     <Scripts />
    //   </Body>
    // </Html>
  );
}
