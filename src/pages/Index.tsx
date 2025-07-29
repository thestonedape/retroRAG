import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { ChatInterface } from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Files, MessageSquare, Zap, Database } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'chat'>('upload');

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Cyberpunk Grid Background with Aurora Effect */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 scanlines pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-neon-cyan/30 backdrop-blur-sm cyber-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary neon-glow-cyan flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-heading font-black gradient-text-primary">
                  CYBER_RAG
                </h1>
                <p className="text-sm neon-text-green font-terminal">
                  NEURAL_NEXUS_INTELLIGENCE_CORE
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-sm neon-text-cyan font-terminal">
              <Database className="w-5 h-5" />
              <span className="terminal-line">NEURAL_NET_STATUS: ONLINE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <Button
              variant={activeTab === 'upload' ? 'default' : 'outline'}
              onClick={() => setActiveTab('upload')}
              className={`flex items-center gap-3 font-terminal text-lg px-6 py-4 ${
                activeTab === 'upload' 
                  ? 'neon-glow-cyan bg-primary hover:bg-primary text-primary-foreground' 
                  : 'cyber-border hover:neon-glow-cyan text-neon-cyan border-neon-cyan/50'
              }`}
            >
              <Files className="w-5 h-5" />
              DATA_UPLOAD
            </Button>
            <Button
              variant={activeTab === 'chat' ? 'default' : 'outline'}
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-3 font-terminal text-lg px-6 py-4 ${
                activeTab === 'chat' 
                  ? 'neon-glow-magenta bg-secondary hover:bg-secondary text-secondary-foreground' 
                  : 'cyber-border-magenta hover:neon-glow-magenta text-neon-magenta border-neon-magenta/50'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              NEURAL_INTERFACE
            </Button>
          </div>

          {/* Content Area */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Panel */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] cyber-card overflow-hidden">
                {activeTab === 'upload' ? (
                  <div className="p-6 h-full overflow-y-auto">
                    <FileUpload />
                  </div>
                ) : (
                  <ChatInterface />
                )}
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Status */}
              <Card className="p-6 cyber-card cyber-border neon-glow-cyan">
                <h3 className="text-xl font-heading font-bold neon-text-cyan mb-6">
                  SYSTEM_STATUS
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground font-terminal terminal-line">NEURAL_CORE</span>
                    <span className="text-sm neon-text-green font-terminal cyber-pulse">ACTIVE</span>
                  </div>
                  <Separator className="bg-neon-cyan/20" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground font-terminal terminal-line">DATA_MATRIX</span>
                    <span className="text-sm neon-text-cyan font-terminal">SYNCED</span>
                  </div>
                  <Separator className="bg-neon-cyan/20" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground font-terminal terminal-line">API_GATEWAY</span>
                    <span className="text-sm neon-text-purple font-terminal">STANDBY</span>
                  </div>
                </div>
              </Card>

              {/* Features */}
              <Card className="p-6 cyber-card cyber-border-magenta neon-glow-magenta">
                <h3 className="text-xl font-heading font-bold neon-text-magenta mb-6">
                  NEURAL_FEATURES
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-green rounded-full cyber-pulse"></div>
                    <span className="font-terminal text-foreground">PDF_QUANTUM_ANALYSIS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full cyber-pulse"></div>
                    <span className="font-terminal text-foreground">NEURAL_Q&A_INTERFACE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-purple rounded-full cyber-pulse"></div>
                    <span className="font-terminal text-foreground">REALTIME_PROCESSING</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-magenta rounded-full cyber-pulse"></div>
                    <span className="font-terminal text-foreground">CONTEXT_AI_ENGINE</span>
                  </div>
                </div>
              </Card>

              {/* Tips */}
              <Card className="p-6 cyber-card cyber-border-purple neon-glow-purple">
                <h3 className="text-xl font-heading font-bold neon-text-purple mb-6">
                  NEURAL_PROTOCOLS
                </h3>
                <div className="space-y-3 text-sm font-terminal">
                  <p className="terminal-line text-muted-foreground">UPLOAD_MULTIPLE_PDFS</p>
                  <p className="terminal-line text-muted-foreground">ASK_SPECIFIC_QUERIES</p>
                  <p className="terminal-line text-muted-foreground">USE_NATURAL_LANGUAGE</p>
                  <p className="terminal-line text-muted-foreground">EXPLORE_NEURAL_PATHS</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neon-cyan/30 mt-16 cyber-border">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center text-sm neon-text-cyan font-terminal">
            <p className="glitch-text">POWERED_BY_CYBERNETIC_NEURAL_NETWORKS • BUILT_FOR_THE_DIGITAL_FRONTIER</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;