import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { TypewriterText } from './TypewriterText';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Cyberpunk-themed responses
  const cyberResponses = [
    "NEURAL_SCAN_COMPLETE: Your document has been processed through quantum data matrices. Extracting semantic patterns from digital neural pathways...",
    "DATA_STREAM_ANALYSIS: The cybernetic processing unit has decoded your PDF's information architecture. Accessing knowledge vectors...",
    "QUANTUM_PARSE_INITIATED: Your document's binary essence has been integrated into the cognitive mesh. Retrieving contextual data...",
    "DIGITAL_CONSCIOUSNESS_SYNC: The AI core has absorbed your document's knowledge structure. Processing through synthetic neurons...",
    "CYBER_MATRIX_ACCESS: Your PDF has been uploaded to the distributed knowledge network. Executing semantic queries...",
  ];

  const handleSendMessage = async () => {
    if (!input.trim() || isGenerating) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    // Simulate API delay
    setTimeout(() => {
      const randomResponse = cyberResponses[Math.floor(Math.random() * cyberResponses.length)];
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-16">
            <Bot className="w-20 h-20 mx-auto mb-6 neon-text-cyan cyber-pulse" />
            <h3 className="text-2xl font-heading font-black gradient-text-primary mb-4">CYBERRAG_NEXUS</h3>
            <div className="text-lg font-terminal space-y-2">
              <p className="terminal-line neon-text-green">UPLOAD_PDF_DOCUMENT → ASK_QUESTIONS</p>
              <p className="terminal-line neon-text-purple">NEURAL_ANALYSIS_THROUGH_DIGITAL_MATRIX</p>
            </div>
          </div>
        )}
        
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <Card className={`max-w-[80%] p-5 ${
              message.type === 'user' 
                ? 'cyber-border-magenta neon-glow-magenta bg-secondary/90 text-secondary-foreground' 
                : 'cyber-border neon-glow-cyan bg-card/95 text-card-foreground'
            }`}>
              <div className="flex items-start gap-4">
                {message.type === 'assistant' && (
                  <Bot className="w-6 h-6 mt-1 neon-text-cyan cyber-pulse" />
                )}
                <div className="flex-1">
                  {message.type === 'assistant' ? (
                    <TypewriterText 
                      text={message.content}
                      speed={25}
                      className="text-sm leading-relaxed font-terminal text-foreground"
                    />
                  ) : (
                    <p className="text-sm leading-relaxed font-terminal text-foreground">{message.content}</p>
                  )}
                </div>
                {message.type === 'user' && (
                  <User className="w-6 h-6 mt-1 neon-text-magenta" />
                )}
              </div>
            </Card>
          </div>
        ))}

        {isGenerating && (
          <div className="flex justify-start">
            <Card className="max-w-[80%] p-5 cyber-border neon-glow-cyan bg-card/95">
              <div className="flex items-center gap-4">
                <Bot className="w-6 h-6 neon-text-cyan cyber-pulse" />
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse cyber-pulse"></div>
                  <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse cyber-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse cyber-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-sm font-terminal neon-text-cyan">NEURAL_PROCESSING...</span>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-neon-cyan/30 p-6 cyber-border">
        <div className="flex gap-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="ENTER_NEURAL_QUERY_ABOUT_PDF_MATRIX..."
            className="flex-1 min-h-[70px] max-h-[200px] bg-input cyber-border focus:border-neon-cyan focus:shadow-neon-cyan font-terminal text-foreground placeholder:neon-text-purple/60 text-lg p-4"
            disabled={isGenerating}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isGenerating}
            className="px-8 py-4 neon-glow-cyan bg-primary hover:bg-primary text-primary-foreground font-terminal text-lg"
          >
            <Send className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};