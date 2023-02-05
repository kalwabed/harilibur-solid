// @refresh reload
import { Routes } from '@solidjs/router'
import { Suspense } from 'solid-js'
import { Body, Link, FileRoutes, Head, Html, Meta, Scripts, Title } from 'solid-start'
import { ErrorBoundary } from 'solid-start/error-boundary'
import RootLayout from './components/layout/root-layout'

const canonicalURL = 'https://harilibur.vercel.app/'

export default function Root() {
  return (
    <Html lang="id">
      <Head>
        <Title>Hari libur nasional dan hari besar di Indonesia</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Daftar hari libur nasional di Indonesia." />
        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Link rel="canonical" href={canonicalURL} />
        <Meta property="og:url" content={canonicalURL} />
        <Meta property="og:description" content="Daftar hari libur nasional di Indonesia." />
        <Meta property="og:title" content={canonicalURL} />
        <Meta property="og:type" content="website" />
        <Meta property="og:locale" content="id-ID" />
        <Meta name="robots" content="index,follow" />
        <Meta property="og:site_name" content="harilibur.vercel.app" />
        <Meta name="keywords" content="hari libur, libur, hari libur indonesia" />
        <Meta property="twitter:card" content="summary_large_image" />
        <Meta property="twitter:url" content={canonicalURL} />
        <Meta property="twitter:title" content="Hari libur nasional dan hari besar di Indonesia" />
        <Meta property="twitter:description" content="Daftar hari libur nasional di Indonesia." />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <RootLayout>
              <Routes>
                <FileRoutes />
              </Routes>
            </RootLayout>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
