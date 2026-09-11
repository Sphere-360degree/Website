import React from 'react';
import {
  Compass,
  Zap,
  PhoneCall,
  MessageSquareText,
  FileText,
  BrainCircuit,
  GraduationCap,
  Layers,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Clock,
  Check,
  ShieldCheck,
  ChevronRight,
  Briefcase,
  Users,
  Target,
  BarChart3,
  Bot,
  Sliders,
  Send,
  X,
  RefreshCw,
  Search,
  ExternalLink,
  MessageCircleQuestion,
  Lightbulb
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = 'w-5 h-5', size }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className={className} size={size} />,
    Zap: <Zap className={className} size={size} />,
    PhoneCall: <PhoneCall className={className} size={size} />,
    MessageSquareText: <MessageSquareText className={className} size={size} />,
    FileText: <FileText className={className} size={size} />,
    BrainCircuit: <BrainCircuit className={className} size={size} />,
    GraduationCap: <GraduationCap className={className} size={size} />,
    Layers: <Layers className={className} size={size} />,
    Cpu: <Cpu className={className} size={size} />,
    Sparkles: <Sparkles className={className} size={size} />,
    ArrowRight: <ArrowRight className={className} size={size} />,
    CheckCircle2: <CheckCircle2 className={className} size={size} />,
    HelpCircle: <HelpCircle className={className} size={size} />,
    Clock: <Clock className={className} size={size} />,
    Check: <Check className={className} size={size} />,
    ShieldCheck: <ShieldCheck className={className} size={size} />,
    ChevronRight: <ChevronRight className={className} size={size} />,
    Briefcase: <Briefcase className={className} size={size} />,
    Users: <Users className={className} size={size} />,
    Target: <Target className={className} size={size} />,
    BarChart3: <BarChart3 className={className} size={size} />,
    Bot: <Bot className={className} size={size} />,
    Sliders: <Sliders className={className} size={size} />,
    Send: <Send className={className} size={size} />,
    X: <X className={className} size={size} />,
    RefreshCw: <RefreshCw className={className} size={size} />,
    Search: <Search className={className} size={size} />,
    ExternalLink: <ExternalLink className={className} size={size} />,
    MessageCircleQuestion: <MessageCircleQuestion className={className} size={size} />,
    Lightbulb: <Lightbulb className={className} size={size} />,
  };

  return <>{iconMap[name] || <Sparkles className={className} size={size} />}</>;
};
