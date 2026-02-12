
import React, { useState, useEffect } from 'react';
import { EXPERIENCES, SKILLS, PROJECTS, CERTIFICATIONS, REFERENCES } from './constants';
import { askBrianAI } from './services/geminiService';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('darkMode') === 'enabled';
  });
  const [showContactPanel, setShowContactPanel] = useState<boolean>(false);
  const [aiInput, setAiInput] = useState<string>('');
  const [aiOutput, setAiOutput] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    const answer = await askBrianAI(aiInput);
    setAiOutput(answer || '');
    setIsAiLoading(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#1c2c33] rounded-[32px] shadow-2xl overflow-hidden transition-colors duration-200 p-6 sm:p-10">
        
        {/* Top Bar: Toggle & Basic Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-2 border-[#eef2f6] dark:border-[#2f4a52] pb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0a2c3d] dark:text-[#e2eef1] leading-tight">Nthiga Brian</h1>
              <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-800">
                <i className="fas fa-briefcase mr-1"></i> Business Analyst · ERP & Agile
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
             <div className="flex justify-end mb-2">
                <button 
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm bg-teal-50 dark:bg-[#1d4552] text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-700 hover:bg-teal-500 hover:text-white transition-all"
                >
                  <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
             </div>
             <div className="bg-[#f5faff] dark:bg-[#1d4552] px-4 py-3 rounded-2xl border border-teal-100 dark:border-teal-800 text-sm font-medium text-slate-700 dark:text-slate-200 flex flex-wrap gap-4 shadow-sm">
                <span className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-teal-500"></i> Nairobi, Kenya</span>
                <a href="mailto:bmurithi979@gmail.com" className="flex items-center gap-2 hover:text-teal-500 transition-colors"><i className="fas fa-envelope text-teal-500"></i> bmurithi979@gmail.com</a>
                <a href="tel:+254799247956" className="flex items-center gap-2 hover:text-teal-500 transition-colors"><i className="fas fa-phone-alt text-teal-500"></i> (+254) 799 247 956</a>
             </div>
          </div>
        </div>

        {/* Call to Action & AI Assistant */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
             <button 
                onClick={() => setShowContactPanel(!showContactPanel)}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-3xl shadow-lg shadow-teal-500/20 flex items-center justify-center gap-3 transform transition hover:-translate-y-1"
              >
                <i className="fas fa-handshake text-xl"></i>
                Get in Touch
              </button>
              
              {showContactPanel && (
                <div className="bg-teal-50 dark:bg-[#1d4552] rounded-3xl p-6 border-l-8 border-teal-500 border border-teal-100 dark:border-teal-800 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-teal-700 dark:text-teal-300">Contact Options</h3>
                    <button onClick={() => setShowContactPanel(false)} className="text-teal-500 hover:text-teal-700">
                      <i className="fas fa-times-circle text-xl"></i>
                    </button>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:bmurithi979@gmail.com" className="block p-3 rounded-xl bg-white dark:bg-slate-800 border border-teal-100 dark:border-teal-700 hover:shadow-md transition">
                      <i className="fas fa-envelope mr-3 text-teal-500"></i> bmurithi979@gmail.com
                    </a>
                    <a href="tel:+254799247956" className="block p-3 rounded-xl bg-white dark:bg-slate-800 border border-teal-100 dark:border-teal-700 hover:shadow-md transition">
                      <i className="fas fa-phone-alt mr-3 text-teal-500"></i> +254 799 247 956
                    </a>
                    <a href="https://www.linkedin.com/in/brian-nthiga-03a35b12a" target="_blank" rel="noopener" className="block p-3 rounded-xl bg-white dark:bg-slate-800 border border-teal-100 dark:border-teal-700 hover:shadow-md transition">
                      <i className="fab fa-linkedin mr-3 text-teal-500"></i> LinkedIn Profile
                    </a>
                  </div>
                </div>
              )}
          </div>

          {/* AI Assistant Module */}
          <div className="lg:col-span-2 bg-gradient-to-r from-teal-500 to-teal-700 p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                  <i className="fas fa-robot text-teal-100"></i> Ask Brian's AI Assistant
                </h3>
                <p className="text-teal-50 text-sm mb-4">Inquire about experience, projects, or specific skills.</p>
                <form onSubmit={handleAskAI} className="flex gap-2">
                  <input 
                    type="text" 
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    placeholder="e.g. What were Brian's key achievements at Abno?" 
                    className="flex-1 px-4 py-2 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
                  />
                  <button 
                    type="submit" 
                    disabled={isAiLoading}
                    className="bg-white text-teal-600 px-6 py-2 rounded-xl font-bold hover:bg-teal-50 transition flex items-center gap-2 disabled:opacity-50"
                  >
                    {isAiLoading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
                    Ask
                  </button>
                </form>
                {aiOutput && (
                  <div className="mt-4 p-4 bg-teal-900/30 rounded-2xl border border-teal-400/30 text-sm animate-in zoom-in-95 duration-200 whitespace-pre-line">
                    {aiOutput}
                  </div>
                )}
             </div>
             {/* Decorative Background Icon */}
             <i className="fas fa-brain absolute -bottom-8 -right-8 text-teal-400/10 text-9xl"></i>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gradient-to-r from-[#f9fcff] to-[#f1f7fd] dark:from-[#1a333b] dark:to-[#132e36] p-8 rounded-3xl mb-12 border-l-8 border-teal-500 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-teal-600 mb-4 flex items-center gap-3">
            <i className="fas fa-user-check"></i> Professional Summary
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
            IT graduate and Business Analyst with expertise in testing, updating, and designing features for ERP products and solutions. 
            Having also worked as a Customer Success Engineer and Technical Support Engineer, I bring a strong combination of 
            technical, analytical, and problem-solving skills to streamline operations and achieve organizational goals.
          </p>
        </div>

        {/* Main Content: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <section>
            <div className="flex items-center gap-3 border-b-4 border-teal-100 dark:border-teal-900 pb-2 mb-8">
              <i className="fas fa-briefcase text-2xl text-teal-500"></i>
              <h2 className="font-display text-2xl font-bold text-teal-600">Work Experience</h2>
            </div>
            
            <div className="space-y-10">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-teal-200 dark:border-teal-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-[#1c2c33]"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-teal-700 dark:text-teal-400">{exp.role}</h3>
                    <span className="mt-1 sm:mt-0 px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-xs font-bold">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-600 dark:text-slate-300 mb-3">{exp.company}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <i className="fas fa-circle-check mt-1 text-teal-400 text-[10px]"></i>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievements && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.achievements.map((ach, i) => (
                        <span key={i} className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-lg text-xs font-bold border-l-4 border-amber-400 shadow-sm">
                          <i className="fas fa-award mr-1"></i> {ach}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.keyStats && (
                    <div className="mt-3 bg-teal-50/50 dark:bg-teal-900/10 p-3 rounded-xl border border-teal-100 dark:border-teal-900 text-xs font-medium text-teal-800 dark:text-teal-300 flex items-center gap-2">
                      <i className="fas fa-bolt text-amber-500"></i> {exp.keyStats}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills & Projects Column */}
          <section className="space-y-12">
            
            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 border-b-4 border-teal-100 dark:border-teal-900 pb-2 mb-6">
                <i className="fas fa-code text-2xl text-teal-500"></i>
                <h2 className="font-display text-2xl font-bold text-teal-600">Core Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 rounded-2xl text-sm font-medium border shadow-sm transition-all hover:scale-105 ${
                      skill.isSoft 
                        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800 text-amber-700 dark:text-amber-300' 
                        : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600'
                    }`}
                  >
                    {skill.icon && <i className={`fas ${skill.icon} mr-2 ${skill.isSoft ? 'text-amber-500' : 'text-teal-500 hover:text-white'}`}></i>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <div className="flex items-center gap-3 border-b-4 border-teal-100 dark:border-teal-900 pb-2 mb-6">
                <i className="fas fa-rocket text-2xl text-teal-500"></i>
                <h2 className="font-display text-2xl font-bold text-teal-600">Key Projects</h2>
              </div>
              <div className="space-y-4">
                {PROJECTS.map((proj, i) => (
                  <div key={i} className="bg-[#f5faff] dark:bg-[#1e3f4a] p-5 rounded-2xl border border-teal-100 dark:border-teal-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <i className={`fas ${proj.icon} text-teal-500 text-lg`}></i>
                      <h3 className="font-bold text-teal-700 dark:text-teal-300">{proj.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{proj.description}</p>
                    {proj.metric && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-teal-500 text-white uppercase tracking-wider">
                        <i className="fas fa-check-double mr-1"></i> {proj.metric}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 border-b-4 border-teal-100 dark:border-teal-900 pb-2 mb-6">
                <i className="fas fa-certificate text-2xl text-teal-500"></i>
                <h2 className="font-display text-2xl font-bold text-teal-600">Certifications</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert, i) => (
                  <a 
                    key={i} 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener"
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                  >
                    <i className={`fas ${cert.icon} text-teal-500`}></i>
                    {cert.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 border-b-4 border-teal-100 dark:border-teal-900 pb-2 mb-6">
                <i className="fas fa-graduation-cap text-2xl text-teal-500"></i>
                <h2 className="font-display text-2xl font-bold text-teal-600">Education</h2>
              </div>
              <div className="bg-teal-50 dark:bg-[#1d414b] p-6 rounded-2xl border border-teal-100 dark:border-teal-800 shadow-sm">
                <h4 className="font-bold text-teal-700 dark:text-teal-300">Diploma in Information Technology</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Meru National Polytechnic · Jan 2020 – Dec 2023</p>
                <hr className="my-3 border-teal-100 dark:border-teal-800" />
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Allidina Visham High School — KCSE (2015–2019)</p>
              </div>
            </div>
          </section>
        </div>

        {/* References Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 border-b-4 border-teal-100 dark:border-teal-900 pb-2 mb-8">
            <i className="fas fa-user-tie text-2xl text-teal-500"></i>
            <h2 className="font-display text-2xl font-bold text-teal-600">References</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REFERENCES.map((ref, i) => (
              <div key={i} className="p-5 bg-white dark:bg-[#1f3e47] rounded-2xl border border-teal-100 dark:border-teal-800 border-l-4 border-l-teal-500 shadow-sm">
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{ref.name}</h4>
                <p className="text-xs text-teal-600 dark:text-teal-400 font-medium mb-3">{ref.title}</p>
                <div className="text-xs space-y-1 text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2"><i className="fas fa-phone-alt"></i> {ref.phone}</div>
                  <div className="flex items-center gap-2"><i className="fas fa-envelope"></i> {ref.email}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-dashed border-teal-200 dark:border-teal-900 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-4">
            <span>400+ Bugs Resolved</span>
            <span>60+ Developments</span>
            <span>13% Sprint Optimization</span>
            <span>28% System Efficiency</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            📁 Portfolio based on CV – Business Analyst / ERP specialist. 
            Built with React & Gemini AI.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
