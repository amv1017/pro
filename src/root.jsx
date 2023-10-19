// @refresh reload
import { Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="description"
          content="Alexander Vinokurov - Frontend Developer"
        />
        <Meta
          name="keywords"
          content="Alexander, Vinokurov, Александр, Винокуров, javascript, js, typescript, frontend, developer, amv1017, react, redux, zustand, html, css, sass, tailwindcss, solidjs, solidstart, astro, svelte, sveltekit, vue, es2015, es2016, webpack, vite, esbuild, jest, cypress, mongodb, graphql, git, docker"
        />
        <Meta name="theme-color" content="#be3455" />
        {/*!import.meta.env.DEV && <script src="/registerSW.js"></script>*/}
        <Link rel="icon" href="/favicon.png" />
        <Link rel="manifest" href="/manifest.json" />
        <Title>
          Александр Винокуров &bull; Alexander Vinokurov &bull; Frontend
          разработчик &bull; Frontend developer
        </Title>
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
