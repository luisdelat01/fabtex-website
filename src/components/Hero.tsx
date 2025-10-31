import FloatingCards from './FloatingCards';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#2E1A47] via-[#3d2458] to-[#2E1A47] text-white overflow-hidden">
      
      {/* Subtle textile weave texture */}
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.2) 0px,
              transparent 1px,
              transparent 4px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.2) 0px,
              transparent 1px,
              transparent 4px
            )
          `,
          backgroundSize: '4px 4px'
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Content - Takes up 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The CRM Built for
              <br />
              <span>Textile Manufacturing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              AI-powered intelligence that helps your team sell smarter, makes your factory stand out with professional service, and shifts your operation from reactive to proactive.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3DBFB3]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#3DBFB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90">Get visibility into your sales operation so you can take action based on real data</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3DBFB3]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#3DBFB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90">AI coaches your reps to make smart selections and ask the right questions</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#3DBFB3]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#3DBFB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/90">Shift your team to proactive with AI prompts for who to contact and when</p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#demo" 
                className="inline-block bg-[#3DBFB3] hover:bg-[#35a89d] text-[#2E1A47] font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#3DBFB3]/30"
              >
                Book a Demo →
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Floating Cards - Takes up 7 columns */}
          <div className="lg:col-span-7 relative hidden lg:block">
            <FloatingCards />
          </div>

        </div>
      </div>
    </section>
  );
}
