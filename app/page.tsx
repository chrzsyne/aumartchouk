import Image from 'next/image';
import Header from './components/Header';
import Section from './components/Section';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-[#1a202c] text-zinc-800 dark:text-white">
        {/* Home/About Section */}
        <section id="home" className="pt-20 pb-12 scroll-mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/d/1-qnv0-pf3xPUUM2a5Lbr3PNEVV5jSIJp"
                  alt="Aurèle Martchouk"
                  width={193}
                  height={242}
                  className="rounded-lg border-4 border-blue-500 dark:border-blue-400"
                  style={{ width: '51mm', height: '64mm' }}
                  priority
                  unoptimized
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white">
                  Aurèle Martchouk
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
                  Aspiring Financial/Economic Analyst | Data-Driven Financial Strategy
                </p>
                <p className="text-lg text-zinc-700 dark:text-white mb-8 max-w-2xl">
                  Passionate about turning complex economic and market data into clear, investment-ready insights, 
                  with hands-on experience in financial modeling, econometrics, and portfolio analytics using R, Python, and SQL
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="https://drive.google.com/file/d/1r89-6DhbusrBLmqAeHWpAPW2Io0G3VeQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Download Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aur%C3%A8le-martchouk-770346190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                  <a
                    href="https://medium.com/@aurele.martchouk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                    Medium
                  </a>
                  <a
                    href="https://github.com/martchoukaur-byte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="space-y-8">
            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Massachusetts Institute of Technology MITx
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    MicroMasters Finance
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  October 2025 - October 2026
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                EdX, Online · Equivalent to one full semester of MIT graduate coursework
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Sciences Po Paris
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    Bachelor's degree in Economics and Societies
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  2019 - April 2026
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                Paris, France · #11 for Economics department in Europe (RePEc Nov. 2025)
              </p>
              <p className="text-zinc-700 dark:text-white mb-3">
                <strong>GPA:</strong> 14.2/20 (Equivalent: 3.6 GPA US)
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                <strong>Relevant courses:</strong> Core Economics · International Trade and Finance · 
                Introduction to Econometrics · Intermediate Microeconomics: information, design and institutions
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                2020–2022: Pursued professional opportunities to develop independence and work experience
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                Degree requirement: 4-month international internship to complete studies
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Université Masaryk
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    Erasmus Exchange Semester
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  January 2025 - June 2025
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                Brno, Czech Republic
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                <strong>Master's level coursework:</strong> Corporate Finance (with Excel) · Portfolio Theory (with R software)
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Paris 1 Panthéon-Sorbonne
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    1st year of undergraduate studies in Mathematics
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  2019 - 2020
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                Paris, France
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                <strong>GPA:</strong> 15.6/20 (Equivalent: 3.6 GPA US)
              </p>
            </div>
          </div>
        </Section>

        {/* Professional Experience Section */}
        <Section id="experience" title="Professional Experience and Volunteering">
          <div className="space-y-6">
            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Independent Data Analysis for Finance Projects
                  </h3>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  November - December 2025
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Conducted multiple data analysis for finance projects for my GitHub account and improved skills in R software and finance.
              </p>
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-zinc-700 dark:text-white">
                    <strong>Tech Survivors Portfolio vs. NASDAQ-100: Long-Term Risk Analysis (1999-2025)</strong>
                  </p>
                  <a
                    href="https://github.com/martchoukaur-byte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2 text-sm"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div>
                  <p className="text-zinc-700 dark:text-white">
                    <strong>Portfolio Optimization: 2004 vs 2025 Market Leaders - A 21-Year Comparative Backtest</strong>
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">(with R software)</p>
                  <a
                    href="https://github.com/martchoukaur-byte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2 text-sm"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Teaching Assistant in French Language
                  </h3>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  January - June 2025
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                Brno, Czech Republic
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                Teaching Assistant in French Language at the Faculty of Economics and Administration in Masaryk University in Brno, Czech Republic. In parallel of Erasmus exchange semester.
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Volunteering and Social Policy Research
                  </h3>
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  July - August 2024
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-3">
                Rambouillet, France
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                Participated in the association's work. Conducted a research project on the association's social impact ("Les Restos du Coeur") and how to make economic policies more inclusive.
              </p>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Economic and Finance Projects">
          <div className="space-y-6">
            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Corporate Valuation & Financial Analysis: EssilorLuxottica Case Study
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Built DCF valuation model with DuPont and Kralicek analyses · Applied FCFF methodology and comparable multiples (P/E, P/BV ratios)
              </p>
              <a
                href="https://drive.google.com/file/d/1FlbatLGBgDFfWAI0Bjlw9Pox92_Y7i54/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
              >
                View Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Portfolio Optimization: 2004 vs 2025 Market Leaders - 21-Year Comparative Backtest
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Backtested portfolio optimization strategies with rolling-window CAPM and Markowitz optimization including transaction costs and inflation adjustment (R software)
              </p>
              <a
                href="https://github.com/martchoukaur-byte/Portfolio-Optimization-Historical-Retrospective-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
              >
                View on GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Research-Oriented Capstone Project
              </h3>
              <p className="text-zinc-700 dark:text-white mb-3">
                <strong>"The financing of a pension system branch by capitalization in France: a lever for investment, economic growth and poverty reduction"</strong>
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                For my bachelor's degree, completion in March 2025
              </p>
            </div>
          </div>
        </Section>

        {/* Core Capabilities Section */}
        <Section id="skills" title="Core Capabilities">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-white">Technical Skills</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Data & Analytics</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Excel</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">R</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Power BI</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Statistical Analysis</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Data Analytics</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Finance & Valuation</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Financial Modeling</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">DCF Valuation</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Portfolio Management</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">CAPM</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Backtesting</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Corporate Finance</span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Risk Management</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Econometrics & Research</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Econometrics</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Panel Data Analysis</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Time Series</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Regression Analysis</span>
                </div>
              </div>
            </div>

            {/* Business & Soft Skills Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-white">Business & Soft Skills</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Financial Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Financial Research</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Market Analysis</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Investment Research</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Economic Policy</span>
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Valuation Methods</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Analytical & Research</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Analytical Thinking</span>
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Problem-Solving</span>
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Research Methodology</span>
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Critical Analysis</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Communication & Writing</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Technical Writing</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Research Writing</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Presentation</span>
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Communication</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">French (Native)</span>
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">English (C1)</span>
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">German (A2)</span>
                  <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">Czech (Beginner)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8">
            <h3 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-white">Certifications</h3>
            <div className="space-y-4">
              <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-4 flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <p className="text-zinc-900 dark:text-white">Professional Certificate in Corporate Finance from Columbia University (edX)</p>
              </div>
              <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-4 flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <p className="text-zinc-900 dark:text-white">Bloomberg Market Concepts Certificate</p>
              </div>
              <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-4 flex items-center gap-4">
                <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <p className="text-zinc-900 dark:text-white">Financial Risk Manager (FRM) I Candidate - Global Association of Risk Professionals (GARP)</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Interests Section */}
        <Section id="about" title="Interest and Motivation">
          <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-6">
            <p className="text-zinc-700 dark:text-white mb-4">
              <strong>Economics & Social Theory:</strong> Passionate about Innovation Economics (Schumpeterian Growth, Philippe Aghion) 
              and Social Dynamics (Demography, Sociology of Education, Inequalities & Social Mobility). Financial markets.
            </p>
            <p className="text-zinc-700 dark:text-white mb-4">
              <strong>Research:</strong> Developing "Central Eastern European Investment Insights" on Medium—analyzing macroeconomic trends 
              and investment dynamics in Central/Eastern Europe
            </p>
            <a
              href="https://medium.com/@central_european_invest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2 mb-4"
            >
              View Research Blog on Medium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-zinc-700 dark:text-white mb-4">
              Fascinated by economics, finance and business. I am always eager to learn more.
            </p>
          </div>
        </Section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-zinc-900 dark:text-white text-center">
              Let's Work Together
            </h2>
            <div className="bg-zinc-100 dark:bg-[#2d3748] rounded-lg p-8 text-center">
              <p className="text-xl text-zinc-700 dark:text-white mb-8">
                Ready to drive your next financial transformation initiative? Let's connect and discuss how I can help your organization achieve its goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href="mailto:aurele.martchouk@sciencespo.fr"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  aurele.martchouk@sciencespo.fr
                </a>
                <a
                  href="https://drive.google.com/file/d/1r89-6DhbusrBLmqAeHWpAPW2Io0G3VeQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
              
              {/* Three Column Layout */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {/* LinkedIn Column */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/aur%C3%A8le-martchouk-770346190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Connect with me
                  </a>
                </div>

                {/* GitHub Column */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-zinc-700 dark:bg-zinc-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">GitHub</h3>
                  <a
                    href="https://github.com/martchoukaur-byte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View my projects
                  </a>
                </div>

                {/* Location Column */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Location</h3>
                  <p className="text-zinc-700 dark:text-white mb-2">Paris, France</p>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">Looking for international opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#1a202c] dark:bg-[#1a202c] text-zinc-300 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Aurèle Martchouk. All rights reserved.</p>
        </footer>
        <ScrollToTop />
      </main>
    </>
  );
}
