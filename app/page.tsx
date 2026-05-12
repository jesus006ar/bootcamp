import { Sprout, Microscope, Droplets, ArrowRight, FlaskConical, Shovel, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function BiotechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">

      {/* Hero Section */}
      <main className="flex w-full max-w-5xl flex-col items-center py-20 px-6 text-center sm:text-left">
        <div className="flex flex-col items-center gap-4 mb-8 sm:flex-row">
          <div className="p-3 bg-green-600 rounded-2xl text-white shadow-lg shadow-green-200 dark:shadow-none">
            <Sprout size={32} />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-green-600">BioAgro Tech 2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
          El futuro de tu cosecha <br /> empieza en el gen.
        </h1>

        <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10">
          Implementamos soluciones biotecnológicas para aumentar el rendimiento de tus cultivos,
          reduciendo el uso de químicos y optimizando la resistencia al clima.
        </p>

        <div className="flex flex-col gap-4 w-full sm:flex-row mb-20">
          <button className="flex h-14 items-center justify-center gap-2 rounded-full bg-green-600 px-8 text-white font-bold transition-all hover:bg-green-700 hover:scale-105 active:scale-95">
            Solicitar análisis de suelo <ArrowRight size={20} />
          </button>
          <button className="flex h-14 items-center justify-center rounded-full border-2 border-zinc-200 px-8 font-bold transition-all hover:bg-white dark:border-zinc-800 dark:hover:bg-zinc-900">
            Ver catálogo de semillas
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <FeatureCard
            icon={<Microscope className="text-emerald-500" />} // Cambiado de Microbe a Microscope
            title="Biofertilizantes"
            description="Microorganismos que fijan nitrógeno de forma natural, nutriendo la planta sin agotar la tierra."
          />
          <FeatureCard
            icon={<Droplets className="text-blue-500" />}
            title="Resistencia Hídrica"
            description="Variedades desarrolladas para prosperar en condiciones de sequía extrema y calor."
          />
          <FeatureCard
            icon={<FlaskConical className="text-purple-500" />}
            title="Control de Plagas"
            description="Biopesticidas específicos que protegen tu inversión sin dañar a los insectos polinizadores."
          />
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="w-full py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col items-center gap-4 text-sm text-zinc-500">
        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-1"><MapPin size={16} /> Almería, España</div>
          <div className="flex items-center gap-1"><Phone size={16} /> +34 600 000 000</div>
          <div className="flex items-center gap-1"><Mail size={16} /> contacto@bioagro.com</div>
        </div>
        <p>© 2026 BioAgro Solutions - Innovación para el campo.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center sm:text-left shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 flex justify-center sm:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}