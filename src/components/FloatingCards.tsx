import FloatingCard from './FloatingCard';

export default function FloatingCards() {
  return (
    <div className="relative h-[650px] w-full">
      
      {/* Card 1: AI Suggestion - Top Right */}
      <FloatingCard
        className="absolute top-0 right-0 w-80 z-30"
        delay="0s"
        rotation={-2}
      >
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E8A765] to-[#d89555] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">AI Suggestion</span>
          </div>
          <p className="text-[#1A1A2E] font-semibold mb-3">Smart Questions to Ask:</p>
          <ul className="space-y-2 text-sm text-[#1A1A2E]/80">
            <li className="flex items-start gap-2">
              <span className="text-[#3DBFB3] mt-0.5">•</span>
              <span>Ask about stretch percentage preference</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DBFB3] mt-0.5">•</span>
              <span>Clarify weight requirements (8-14oz)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3DBFB3] mt-0.5">•</span>
              <span>Confirm delivery timeline</span>
            </li>
          </ul>
        </div>
      </FloatingCard>

      {/* Card 2: Deal Pipeline - Center Left */}
      <FloatingCard
        className="absolute top-44 left-0 w-[340px] z-20"
        delay="0.5s"
        rotation={2}
      >
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[#1A1A2E]">Active Deals</h3>
            <span className="text-xs text-[#64748B]">Q1 2025</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3DBFB3]" />
              <span className="text-sm text-[#1A1A2E] font-medium">Nike Spring Collection</span>
              <span className="ml-auto text-sm font-semibold text-[#3DBFB3]">$245K</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#E8A765]" />
              <span className="text-sm text-[#1A1A2E] font-medium">Zara Denim Line</span>
              <span className="ml-auto text-sm font-semibold text-[#E8A765]">$180K</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#64748B]" />
              <span className="text-sm text-[#1A1A2E] font-medium">H&M Basics</span>
              <span className="ml-auto text-sm font-semibold text-[#64748B]">$92K</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#64748B]">Pipeline Total</span>
              <span className="text-sm font-semibold text-[#1A1A2E]">$517K</span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Relationship Health - Bottom Right */}
      <FloatingCard
        className="absolute bottom-4 right-8 w-80 z-10"
        delay="1s"
        rotation={-1}
      >
        <div className="bg-white rounded-xl p-6 shadow-2xl">
          <h3 className="text-base font-semibold text-[#1A1A2E] mb-4">Customer Health</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-[#3DBFB3] mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1A1A2E]">Nike</p>
                <p className="text-xs text-[#64748B]">Last contact: 2 days ago</p>
                <p className="text-xs text-[#3DBFB3] mt-1">✓ Follow up on samples</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E8A765] mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1A1A2E]">Zara</p>
                <p className="text-xs text-[#64748B]">Last contact: 12 days ago</p>
                <p className="text-xs text-[#E8A765] mt-1">⚡ Share Fall collection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1A1A2E]">H&M</p>
                <p className="text-xs text-[#64748B]">Last contact: 45 days ago</p>
                <p className="text-xs text-red-500 mt-1">⚠️ URGENT - Re-engage now</p>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

    </div>
  );
}
