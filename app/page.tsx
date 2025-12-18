import Image from 'next/image';
import Header from './components/Header';
import Section from './components/Section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
        {/* Home/About Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 scroll-mt-20">
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/d/1-qnv0-pf3xPUUM2a5Lbr3PNEVV5jSIJp"
                  alt="Aurèle Martchouk"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-blue-500 dark:border-blue-400"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white">
                  Aurèle Martchouk
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-6">
                  Economics & Social Policy Researcher | Financial Analyst
                </p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
                  Passionate about Innovation Economics, Social Dynamics, and Financial Markets. 
                  Developing expertise in econometric analysis, corporate finance, and investment research 
                  with a focus on Central Eastern European markets.
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="space-y-8">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Sciences Po Paris
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    Bachelor's degree in Economics and Societies
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                  September 2019 - 2026
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                #4 worldwide for Politics and International Relations (QS Ranking 2025)
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                <strong>GPA:</strong> 14.19/20 (Upper Second to First Class Honours UK / 3.5-3.7 US)
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                <strong>Relevant courses:</strong> Initiation aux méthodes quantitatives en sociologie sur R · 
                Comparative Social Policy in Europe · Core Economics · International Trade and Finance · 
                Introduction to Econometrics · Intermediate Microeconomics: information, design and institutions
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                2020–2022: Pursued professional opportunities (Agriculture, Services) to develop independence and work experience
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Université Masaryk
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    Erasmus Exchange Semester
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                  January 2025 - June 2025
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                <strong>Master's level:</strong> Europe in the Global Economy · Labour Market and Employment Policy · 
                Corporate Finance (with Excel) · Portfolio Theory (with R software)
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong>Bachelor's level:</strong> History of Economic Thought · Introduction to Population Studies · Labour Economics
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    University of Angers
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    2nd year of undergraduate studies in Mathematics
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                  2025 - 2026
                </span>
              </div>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    University of Paris 1 Panthéon-Sorbonne
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    1st year of undergraduate studies in Mathematics
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                  2019 - 2020
                </span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                <strong>GPA:</strong> 15.6/20 (Upper Second to First Class Honours UK / 3.5-3.7 US)
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    CFA Institute
                  </h3>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300">
                    CFA Level I Candidate
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                  August 2026
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Research Section */}
        <Section id="research" title="Advanced Economic Research">
          <div className="space-y-6">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Research-oriented Capstone Project
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                <strong>"France's Capitalized Pension Financing: A Lever for Investment, Economic Growth, and Poverty Reduction"</strong>
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Hybrid pension reform combining pay-as-you-go and capitalization to enhance welfare state sustainability, 
                increase employment and growth potential; grounded in Philippe Aghion's endogenous growth model and financial theory; 
                addresses poverty reduction through inclusive economic policy.
              </p>
              <a
                href="https://medium.com/@aurele.martchouk/capstone-project-frances-capitalized-pension-financing-a-lever-for-investment-economic-growth-d26fc4adec17?postPublishedType=initial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
              >
                Read on Medium
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Econometrics Research
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                <strong>"Is there a cause-and-effect relationship between standard of living and fertility?"</strong>
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Panel data analysis showing declining correlation over 30 years
              </p>
              <a
                href="https://medium.com/@aurele.martchouk/econometrics-research-paper-c6f5ee6a88ec?postPublishedType=initial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
              >
                Read on Medium
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Economic History Research
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Comparative analysis of Western and emerging economies' structural advantages and long-term growth dynamics 
                (Master's level coursework, Université Masaryk)
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Volunteering - Les Restos du Coeur - and Social Policy Research
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-3">
                July-August 2024
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Conducted research project on the association's social impact and inclusive economic policy design
              </p>
              <a
                href="https://medium.com/@aurele.martchouk/social-and-economic-policy-research-paper-a681b7ebd5e0?postPublishedType=repub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
              >
                Read on Medium
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Book Review & Critical Analysis
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                <strong>"Inequality: What Can Be Done?" by Anthony B. Atkinson</strong>
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Sciences Po Paris
              </p>
              <a
                href="https://medium.com/@aurele.martchouk/book-review-critical-analysis-inequality-what-can-be-done-by-anthony-b-atkinson-77b7335286fd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
              >
                Read on Medium
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Personal Quantitative Financial Analysis Projects">
          <div className="space-y-6">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Corporate Valuation & Financial Analysis: EssilorLuxottica Case Study
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
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

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
                Portfolio Optimization: 2004 vs 2025 Market Leaders - 21-Year Comparative Backtest
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
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
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Languages and Skills">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Languages</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-700 dark:text-zinc-300">French</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Native</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-700 dark:text-zinc-300">English</span>
                    <span className="text-zinc-600 dark:text-zinc-400">C1 (Fluent)</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-700 dark:text-zinc-300">German</span>
                    <span className="text-zinc-600 dark:text-zinc-400">A2 (Goethe Certificate)</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-700 dark:text-zinc-300">Czech</span>
                    <span className="text-zinc-600 dark:text-zinc-400">Beginner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Advanced Excel</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">SQL (Intermediate)</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">R (Advanced)</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Power BI (Beginner)</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white mt-6">Certifications</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Professional Certificate in Corporate Finance from Columbia University (edX)</li>
                <li>• Bloomberg Market Concepts Certificate</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Interests Section */}
        <Section id="about" title="Interests and Motivation">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6">
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              <strong>Economics & Social Theory:</strong> Passionate about Innovation Economics (Schumpeterian Growth, Philippe Aghion) 
              and Social Dynamics (Demography, Sociology of Education, Inequalities & Social Mobility). Financial markets.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              <strong>Research:</strong> Developing "Central Eastern European Investment Insights" on Medium—analyzing macroeconomic trends 
              and investment dynamics in Central/Eastern Europe
            </p>
            <a
              href="https://medium.com/@central_european_invest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2 mt-4"
            >
              View Research Blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Let's Work Together">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-center">
            <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-8">
              I'm always open to discussing new opportunities, research collaborations, or interesting projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:aurele.martchouk@sciencespo.fr"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/aur%C3%A8le-martchouk-770346190/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
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
            <div className="mt-8 pt-8 border-t border-zinc-300 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong>Location:</strong> Paris, France
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong>Phone:</strong> +33 6 11 16 72 95
              </p>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-zinc-900 dark:bg-black text-zinc-400 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Aurèle Martchouk. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
