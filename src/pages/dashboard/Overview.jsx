import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BrainCircuit, 
  History, 
  FileText, 
  Settings, 
  HelpCircle, 
  Menu, 
  X,
  Search,
  Bell,
  User,
  ChevronRight,
  TrendingUp,
  FileUp,
  Send,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'AI Tools', icon: BrainCircuit },
    { name: 'Results', icon: ChevronRight },
    { name: 'History', icon: History },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
    { name: 'Help', icon: HelpCircle },
  ];

  const stats = [
    { label: 'Analyses Run', value: '1,284', change: '+12%', color: 'text-purple-500' },
    { label: 'Confidence Avg', value: '94.2%', change: '+2.4%', color: 'text-cyan-500' },
    { label: 'Files Processed', value: '458', change: '+5.1%', color: 'text-magenta-500' },
  ];

  const handleProcess = () => {
    if (!inputText) return;
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="flex h-screen bg-[#0A0F1F] text-slate-300 font-inter overflow-hidden">
      
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-[#0D1425] border-r border-white/5 flex flex-col z-50 relative"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-magenta-500 flex items-center justify-center text-white font-bold">V</div>
                <span className="font-heading font-black text-white tracking-tighter text-xl">VERIMIND</span>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all relative group ${
                activeTab === item.name ? 'bg-purple-500/10 text-white' : 'hover:bg-white/5 text-slate-400'
              }`}
            >
              <item.icon size={20} className={activeTab === item.name ? 'text-purple-400' : 'group-hover:text-white'} />
              {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
              {activeTab === item.name && (
                <motion.div layoutId="active-pill" className="absolute left-0 w-1 h-6 bg-purple-500 rounded-r-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white font-bold">GK</div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Guntass Kaur</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Enterprise Pro</span>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Top Nav */}
        <header className="h-20 bg-[#0D1425]/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 relative z-40">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-96">
            <Search size={18} className="text-slate-500" />
            <input type="text" placeholder="Search analytics or reports..." className="bg-transparent border-none outline-none text-sm w-full text-white" />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-magenta-500 rounded-full border-2 border-[#0D1425]"></span>
            </button>
            <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-purple-500/20">
              <BrainCircuit size={18} /> New Analysis
            </button>
          </div>
        </header>

        {/* Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          
          {/* Hero/Welcome */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-heading font-black text-white tracking-tight">Intelligence Dashboard</h1>
            <p className="text-slate-400">Welcome back, Guntass. Here's what's happening with VeriMind today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-[32px] border-white/5 hover:border-white/10 transition-all group">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h2 className={`text-3xl font-black ${stat.color} tracking-tighter`}>{stat.value}</h2>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Input Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Input Card */}
            <div className="lg:col-span-2 glass-card p-8 rounded-[40px] border-white/5 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span> AI Submission Nexus
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><FileUp size={18} /></button>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Insert research text or data for verification..."
                  className="w-full h-48 bg-white/5 border border-white/10 rounded-[24px] p-6 text-white outline-none focus:border-purple-500/50 transition-all resize-none font-mono text-sm leading-relaxed"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-4">
                  <span className="text-[10px] text-slate-500 font-mono">{inputText.length} chars</span>
                  <button 
                    onClick={handleProcess}
                    disabled={!inputText || isProcessing}
                    className="bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:hover:bg-purple-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-purple-500/20"
                  >
                    {isProcessing ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
              </div>

              {/* Progress Indicator */}
              {isProcessing && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-magenta-500 to-cyan-400"
                />
              )}
            </div>

            {/* Helper Card */}
            <div className="glass-card p-8 rounded-[40px] border-white/5 bg-gradient-to-br from-purple-500/5 to-transparent">
              <h3 className="text-lg font-bold text-white mb-6">Nexus Tips</h3>
              <div className="space-y-6">
                {[
                  { title: 'Confidence Scoring', text: 'AI models use n-gram analysis for verification.' },
                  { title: 'Data Encryption', text: 'All inputs are hashed with AES-256 protocols.' },
                  { title: 'Batch Processing', text: 'Drag & Drop up to 50 files for concurrent analysis.' },
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-400 shrink-0 border border-white/10 italic font-black">?</div>
                    <div>
                      <p className="text-xs font-bold text-white mb-1 uppercase tracking-tight">{tip.title}</p>
                      <p className="text-[11px] text-slate-500 leading-normal">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Result Visualization Placeholder */}
          <div className="glass-card p-10 rounded-[48px] border-white/5 min-h-[400px] flex flex-col items-center justify-center text-center gap-6 border-dashed border-2">
             <div className="w-20 h-20 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center text-slate-600">
                <TrendingUp size={40} />
             </div>
             <div>
                <p className="text-xl font-bold text-white">No active visualization</p>
                <p className="text-sm text-slate-500 mt-2">Submit data to generate real-time AI confidence heatmaps and risk reports.</p>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
