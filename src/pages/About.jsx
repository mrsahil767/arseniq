import { Link } from 'react-router-dom';
import { Shield, Target, Eye, Info } from 'lucide-react';
import PrimaryButton from '../components/PrimaryButton';

export default function About() {
  return (
    <div className="w-full flex flex-col gap-20 pb-16">
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-arseniq-secondary border border-arseniq-border rounded-2xl overflow-hidden mt-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,12,0.4),rgba(11,15,12,1))] z-10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-arseniq-text tracking-widest text-xl uppercase font-heading">
            Arsenal Showcase Visual Placeholder
          </span>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h1 className="font-heading text-5xl md:text-6xl text-arseniq-text font-bold tracking-tight">
            Our Purpose.
          </h1>
          <p className="text-lg md:text-xl text-arseniq-lightOlive font-light leading-relaxed">
            ARSENIQ is a premium showcase dedicated to high-fidelity airsoft models and non-functional display collectibles. We curate engineering excellence for collectors, sport enthusiasts, and cinematic professionals.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-arseniq-secondary border border-arseniq-border rounded-xl p-8 md:p-12 flex flex-col gap-6 hover:border-arseniq-olive/30 transition-colors">
          <div className="h-12 w-12 rounded-full bg-arseniq-primary border border-arseniq-olive/30 flex items-center justify-center text-arseniq-olive">
            <Target size={24} />
          </div>
          <h2 className="font-heading text-3xl text-arseniq-text font-semibold">
            Precision & Design
          </h2>
          <p className="text-arseniq-muted leading-relaxed">
            We believe in uncompromising detail. Every piece in our catalog is selected for its authentic dimensions, material quality, and visual accuracy. From anodized alloy finishes to synthetic furniture, our collection represents the pinnacle of model manufacturing.
          </p>
        </div>

        <div className="bg-arseniq-secondary border border-arseniq-border rounded-xl p-8 md:p-12 flex flex-col gap-6 hover:border-arseniq-olive/30 transition-colors">
          <div className="h-12 w-12 rounded-full bg-arseniq-primary border border-arseniq-olive/30 flex items-center justify-center text-arseniq-olive">
            <Eye size={24} />
          </div>
          <h2 className="font-heading text-3xl text-arseniq-text font-semibold">
            Classification Standards
          </h2>
          <p className="text-arseniq-muted leading-relaxed">
            Transparency is core to our catalog. We strictly categorize our inventory into two clear classifications: 
            <strong className="text-arseniq-lightOlive font-medium mx-1">Airsoft Models</strong> designed for recreational sport, and 
            <strong className="text-arseniq-lightOlive font-medium mx-1">Display Models</strong> which are static, non-firing props meant exclusively for exhibition.
          </p>
        </div>
      </section>

      <section className="bg-arseniq-primary border border-arseniq-border rounded-xl p-8 md:p-16 flex flex-col items-center text-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-arseniq-olive to-transparent opacity-50" />
        <Shield size={48} strokeWidth={1} className="text-arseniq-olive" />
        
        <div className="max-w-4xl flex flex-col gap-4">
          <h2 className="font-heading text-3xl md:text-4xl text-arseniq-text font-bold">
            Responsible Display Policy
          </h2>
          <p className="text-lg text-arseniq-muted leading-relaxed">
            Our absolute commitment is to safety and legal compliance. ARSENIQ is a demonstration platform and collector's gallery. We do not sell real firearms, live ammunition, or functional weapon components. All items showcased are incapable of being converted to fire live ammunition.
          </p>
          <p className="text-lg text-arseniq-muted leading-relaxed">
            We advise all enthusiasts to adhere to their local regulations regarding the transport, display, and usage of airsoft models and display props.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center bg-arseniq-secondary border border-arseniq-border rounded-xl p-8 gap-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded bg-arseniq-primary flex items-center justify-center text-arseniq-lightOlive">
            <Info size={24} />
          </div>
          <div>
            <h3 className="font-heading text-xl text-arseniq-text font-semibold mb-1">ARSENIQ Showcase</h3>
            <p className="text-sm text-arseniq-muted">Demonstration Platform Version 1.0</p>
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <PrimaryButton className="w-full md:w-auto">
            <Link to="/catalog">View Catalog</Link>
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}