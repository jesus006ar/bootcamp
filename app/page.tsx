import Image from "next/image";

export default function Home() {
  return (
    // Se agregó 'min-h-screen' para que ocupe toda la pantalla
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">

      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-24 px-8 bg-white shadow-sm dark:bg-zinc-900 rounded-2xl sm:items-start">

        {/* Logo de Next.js */}
        <Image
          className="dark:invert mb-8"
          src="https://nextjs.org/icons/next.svg" // URL externa para que funcione sin archivos locales
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Bienvenido a mi sitio web
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Este es un componente de Next.js listo para usar. Puedes empezar editando
            <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded"> page.tsx </code>
            para ver los cambios en tiempo real.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subir a Vercel
          </a>

          <a
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer Documentación
          </a>
        </div>
      </main>
    </div>
  );
}
