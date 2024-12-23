const Blogs = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Blogs
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4">
          <div className="p-6 border border-neutral-700 rounded-xl hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-gradient-to-r from-orange-500 to-red-400">
              The AI revolution and its Economic impact
            </h3>
            <p className="text-neutral-400 font-semibold">
              Author: Aryan Shashi Mishra
            </p>
            <p className="text-neutral-400 font-semibold mb-6">
              Source: Goldman Sachs Newsletter
            </p>
            <p className="text-neutral-400 mb-6">
            <h4 className="text-[#5D3A00] ">Nvidia and the AI Revolution</h4>
              <br />
              <p className=" mb-1">Nvidia CEO Jensen Huang emphasized how AI infrastructure has transformed industries like computer graphics, robotics, and drug discovery. <br/>By investing in high-performance chips, companies can achieve exponential efficiency gains. Huang explains:</p>
              <ul className="list-disc list-inside mb-1">
                <li>For every one pixel computed, AI infers 32 more with minimal energy, significantly reducing processing costs and time.</li>
                <li>This investment yields 10x savings, as computational speed increases while costs remain manageable.</li>
              </ul>
              For investors, Nvidia’s role as a backbone for AI-driven industries underscores its strong position in the market, providing substantial ROI (Return on Investment).
            </p>
            <p className="text-neutral-400 mb-6">
              <h4 className="text-[#5D3A00]">Political Uncertainty in France and Market Reactions</h4>
              <br />
              <p className=" mb-1">France’s political volatility — highlighted by the fall of Prime Minister Michel Barnier’s government — led to short-term turbulence. Key observations:</p>
              <ul className="list-disc list-inside mb-1">
                <li>French domestic stocks initially fell but rebounded quickly.</li>
                <li>Bond yields widened, particularly the gap between French and German 10-year bonds, though this has narrowed.</li>
                <li>Hedge funds capitalized on low valuations, driving a swift recovery.</li>
              </ul>
              From an investment standpoint, while risks remain, markets are signaling confidence in a resolution. Short-term uncertainty offers entry opportunities for savvy investors.
            </p>
            <p className="text-neutral-400 mb-6">
            <h4 className="text-[#5D3A00]">Impact of Higher Tariffs on Inflation and Interest Rates</h4>
              <br />
              <p className=" mb-1">Concerns about tariffs driving inflation and forcing central banks to hike interest rates are nuanced. Goldman Sachs economist David Mericle explains:</p>
              <ul className="list-disc list-inside mb-1">
                <li>The inflation impact of tariffs is small and typically a one-time shock, not a trend.</li>
                <li>Historical precedent (e.g., 2019 tariffs) shows the Fed prioritized growth risks over inflation.</li>
              </ul>
              For investors, the key takeaway is that while tariffs pose challenges, their impact on interest rates may not be as severe as feared.
            </p>
            <p className="text-neutral-400 mb-6">
            <h4 className="text-[#5D3A00]">India’s Economic Resilience Amid Global Shocks</h4>
              <br />
              <p className=" mb-1">India is expected to remain insulated from global disruptions, driven by favorable demographics and stable governance. Key projections:</p>
              <ul className="list-disc list-inside mb-1">
                <li>GDP growth of 6.3% in 2025 (slightly below consensus) due to fiscal consolidation and slower credit growth.</li>
                <li>Indian equities remain attractive long-term, but short-term valuations and weak earnings revisions could cap gains.</li>
                <li>NIFTY target: 27,000 by end-2025.</li>
              </ul>
              Investors should focus on India’s structural growth story, balancing short-term caution with long-term confidence.
            </p>
            <p className="text-neutral-400 mb-6">
              <h4 className="text-[#5D3A00]">Investment Outlook for 2025</h4>
              <br />
              <p className=" mb-1">Goldman Sachs outlines key investment themes for the year ahead:</p>
              <ul className="list-disc list-inside mb-1">
                <li>Bonds: Attractive as central banks ease rates; focus on sovereign bonds and investment-grade credit.</li>
                <li>Equities: Broader returns are expected beyond tech giants, favoring diversification into small caps, international markets, and dividend-paying businesses.</li>
                <li>Private Equity: A more stable environment for buyouts and exits; venture capital firms may require more capital for late-stage growth.</li>
              </ul>
              The bottom line for investors is to recalibrate portfolios, emphasizing high-quality assets and diversification.
            </p>
            <p className="text-neutral-400 mb-6">
            <h4 className="text-[#5D3A00]">Growth in Women’s Sports and Changing Investments</h4>
              <br />
              <p className=" mb-1">The business of sports, particularly women’s sports, is undergoing a significant transformation:</p>
              <ul className="list-disc list-inside mb-1">
                <li>New stadium investments (e.g., $2.4B Intuit Dome) are reshaping fan experiences with state-of-the-art facilities.</li>
                <li>Women’s sports are benefiting from increased sponsorship dollars, fan engagement, and media rights growth.</li>
              </ul>
              Investors are seeing opportunities to align capital and governance for sustainable growth in this evolving sector.
            </p>
            <p className="text-neutral-400 mb-6">
              <h4 className="text-[#5D3A00]">Conclusion: Key Takeaways for Investors</h4>
              <br />
              <ul className="list-disc list-inside mb-1">
                <li>AI revolution: Invest in companies driving AI infrastructure (e.g., Nvidia) for long-term gains.</li>
                <li>Geopolitical risks: Use volatility in markets like France as tactical opportunities.</li>
                <li>India: Maintain confidence in its structural growth story despite near-term challenges.</li>
                <li>2025 investment strategy: Diversify across bonds, broader equities, and private markets.</li>
                <li>Sports investments: Pay attention to emerging opportunities in women’s sports and infrastructure.</li>
              </ul>
              Investors are advised to remain agile, focus on high-quality assets, and leverage diversification to navigate the dynamic economic landscape of 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;