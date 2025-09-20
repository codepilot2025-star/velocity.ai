"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Minimize2, Star, Calendar, CreditCard, MessageCircle, Zap, Shield, Globe, BarChart3, CheckCircle, Clock, Heart, Users } from 'lucide-react';

interface Message {
    id: string;
    content: string;
    isUser: boolean;
    timestamp: Date;
    type?: string;
    metadata?: Record<string, string | number | boolean>;
}

interface QuickAction {
    id: string;
    label: string;
    icon: React.ReactNode;
    message: string;
    type: 'question' | 'action';
}

const SuperchargedChatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: "👋 Hi! I'm VelocityAI. I help business owners get their time back so they can focus on what matters most - like family time! What type of business do you run?",
            isUser: false,
            timestamp: new Date(),
        }
    ]);

    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);
    const [userIndustry, setUserIndustry] = useState('');
    const [isClient, setIsClient] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const quickActions: QuickAction[] = [
        { id: '1', label: 'Time Savings', icon: <Clock className="w-4 h-4" />, message: 'How much time can I save?', type: 'question' },
        { id: '2', label: 'Demo', icon: <Star className="w-4 h-4" />, message: 'Show me a demo', type: 'action' },
        { id: '3', label: 'Family Time', icon: <Heart className="w-4 h-4" />, message: 'How do you help with work-life balance?', type: 'question' },
        { id: '4', label: 'My Industry', icon: <Users className="w-4 h-4" />, message: 'Do you work with my industry?', type: 'question' },
    ];

    const getIndustrySpecificResponse = (industry: string, context: string) => {
        const industries: Record<string, any> = {
            restaurant: {
                examples: "taking orders at 2 AM, handling dietary questions, processing delivery requests",
                timeBack: "4-6 hours daily",
                scenario: "While you're having dinner with your daughter, I'm taking orders, answering menu questions, and scheduling catering consultations",
                pain: "no more staying up late taking phone orders or missing family dinners"
            },
            dental: {
                examples: "booking appointments, insurance verification, emergency triage",
                timeBack: "3-5 hours daily",
                scenario: "During your child's soccer game, I'm scheduling cleanings, handling insurance questions, and triaging emergency calls",
                pain: "no more after-hours appointment calls interrupting family time"
            },
            law: {
                examples: "initial client screening, appointment booking, case information gathering",
                timeBack: "5-7 hours daily",
                scenario: "While you're reading bedtime stories, I'm qualifying potential clients and scheduling consultations",
                pain: "no more weekend calls from prospects interrupting precious family moments"
            },
            retail: {
                examples: "product questions, order tracking, return processing",
                timeBack: "2-4 hours daily",
                scenario: "During your family vacation, I'm handling customer inquiries and processing orders",
                pain: "no more constant notifications pulling you away from quality time with loved ones"
            },
            default: {
                examples: "customer inquiries, appointment booking, order processing",
                timeBack: "3-5 hours daily",
                scenario: "While you're focused on what matters most - your family - I'm handling the routine tasks that used to steal your evenings",
                pain: "no more work following you home and robbing time with your loved ones"
            }
        };

        return industries[industry] || industries.default;
    };

    const getAIResponse = (message: string): { content: string; type?: string; metadata?: Record<string, string | number | boolean> } => {
        const lowerMessage = message.toLowerCase();

        // Industry detection
        if (!userIndustry) {
            if (lowerMessage.includes('restaurant') || lowerMessage.includes('food')) {
                setUserIndustry('restaurant');
                return {
                    content: "Perfect! Restaurant owners are some of our happiest clients. Here's what VelocityAI does for restaurants:\n\n🍕 **Takes orders 24/7** - Even when you're closed\n📞 **Handles dietary questions** - Allergies, modifications, specials\n🚗 **Manages delivery** - Coordinates with drivers, tracks orders\n📅 **Books reservations** - Syncs with your calendar\n\n**Time back with family:** 4-6 hours daily\n\n**Imagine:** While you're having dinner with your daughter, I'm taking orders, answering menu questions, and booking tomorrow's reservations. \n\nNo more choosing between business success and family time! 👨‍👧",
                    metadata: { industry: 'restaurant' }
                };
            }
            if (lowerMessage.includes('dental') || lowerMessage.includes('medical') || lowerMessage.includes('doctor')) {
                setUserIndustry('dental');
                return {
                    content: "Excellent! Medical practices see incredible results with VelocityAI:\n\n🦷 **24/7 appointment booking** - Patients book anytime\n🏥 **Insurance verification** - Instant eligibility checks\n🚨 **Emergency triage** - Prioritizes urgent cases\n📋 **Pre-visit paperwork** - Collected automatically\n\n**Time back with family:** 3-5 hours daily\n\n**Picture this:** During your child's soccer game, I'm scheduling cleanings, handling insurance questions, and triaging emergency calls.\n\nYou focus on being present for the goal - I'll handle the calls! ⚽👨‍👧‍👦",
                    metadata: { industry: 'dental' }
                };
            }
        }

        // Time savings questions
        if (lowerMessage.includes('time') || lowerMessage.includes('save') || lowerMessage.includes('hours')) {
            const industryData = getIndustrySpecificResponse(userIndustry, 'time');
            return {
                content: `Here's the beautiful truth about getting your time back:\n\n⏰ **${industryData.timeBack}** returned to you every single day\n📞 **90% of routine calls** handled automatically\n🌙 **After-hours inquiries** captured (never miss opportunities)\n🎯 **Only important calls** reach you\n\n**Real impact:** That's 20+ hours per week back with your family!\n\n**Parent testimonial:** *"I used to miss bedtime stories taking customer calls. Now I'm fully present for my kids while VelocityAI handles business. Best decision I ever made."* - Sarah, Restaurant Owner\n\nReady to reclaim your evenings and weekends? 👨‍👧‍👦💙`,
                metadata: { context: 'time_savings' }
            };
        }

        // Family/work-life balance
        if (lowerMessage.includes('family') || lowerMessage.includes('balance') || lowerMessage.includes('daughter') || lowerMessage.includes('kids')) {
            const industryData = getIndustrySpecificResponse(userIndustry, 'family');
            return {
                content: `This is exactly why VelocityAI exists! 💙\n\n**The Dad/Mom Struggle is REAL:**\n• Work calls during dinner\n• Missing school events for \"urgent\" customer questions  \n• Choosing between business growth and family time\n\n**With VelocityAI:**\n🏠 **Family time is sacred** - Work stays at work\n📱 **No more business calls** during precious moments\n⚽ **Never miss another game/recital** \n🛏️ **Bedtime stories uninterrupted**\n\n${industryData.scenario}\n\n**Bottom line:** Your little girl will remember you being PRESENT, not busy on the phone. That's priceless.\n\nWant to see exactly how this works for your business? 👨‍👧`,
                metadata: { context: 'family_focus' }
            };
        }

        // Demo requests
        if (lowerMessage.includes('demo') || lowerMessage.includes('show') || lowerMessage.includes('see')) {
            return {
                content: `I'd love to show you exactly how this works! You're already talking to VelocityAI right now. 😊\n\n**This conversation shows:**\n✅ Industry-specific responses (I adapted to your business)\n✅ Emotional intelligence (I understand your family priorities)\n✅ Natural conversation flow\n✅ Lead qualification (gathering your needs)\n\n**The full platform adds:**\n🔗 **Integration** with your booking/payment systems\n📊 **Analytics** showing time saved and revenue captured\n📱 **Multi-channel** (WhatsApp, SMS, website, Facebook)\n🎨 **Your branding** (customers think it's your staff)\n\nShall I schedule a 15-minute personalized demo? I can show you the exact automation for your specific business! 📅`,
                type: 'action',
                metadata: { action: 'schedule_demo' }
            };
        }

        // Industry-specific questions
        if (lowerMessage.includes('industry') || lowerMessage.includes('business type')) {
            return {
                content: `VelocityAI works beautifully across industries because every business owner wants the same thing: **More time with family!**\n\n**Top Industries:**\n🍕 **Restaurants** - Orders, reservations, dietary questions\n🦷 **Medical/Dental** - Appointments, insurance, triage\n⚖️ **Legal** - Client screening, consultations, case info\n🏠 **Real Estate** - Property inquiries, showings, pre-qualification\n💅 **Personal Services** - Booking, service explanations\n🔧 **Contractors** - Quotes, scheduling, emergency calls\n\n**The magic:** Same powerful AI, but it learns YOUR business language and processes.\n\nWhat matters isn't your industry - it's getting home in time for dinner! 🍽️👨‍👧‍👦\n\nTell me your business type and I'll show specific examples!`,
                metadata: { context: 'industry_overview' }
            };
        }

        // Pricing
        if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
            return {
                content: `**Here's our simple pricing - because parents don't have time for complexity:**\n\n💼 **Professional** - $149/month *(Most Popular)*\n• 5,000 conversations/month\n• Multi-channel (WhatsApp, SMS, Website)\n• Industry-specific training\n• Order processing + payments\n• Analytics dashboard\n\n🚀 **Business** - $299/month\n• Unlimited conversations  \n• White-label options\n• API access\n• Priority support\n\n**ROI Reality Check:**\n• Saves 20+ hours/week\n• Your time = $50/hour? That's $1,000+ in value monthly\n• Plus captured leads you'd normally miss\n\n**Parent Special:** First 100 customers get 50% off for 6 months!\n\n*Think about it: What's quality family time worth?* 👨‍👧‍👦💙`,
                metadata: { context: 'pricing_family_focused' }
            };
        }

        // Default response
        return {
            content: `That's a great question! Here's what I know for sure:\n\n**You're here because** work is stealing time from what matters most - your family.\n\n**VelocityAI's promise:** Handle the routine stuff so you can focus on the important stuff.\n\n**Quick question:** What's the biggest time-waster in your business right now? Phone calls? Booking appointments? Taking orders?\n\nTell me, and I'll show you exactly how to get that time back! ⏰👨‍👧‍👦`,
            metadata: { context: 'family_focused_fallback' }
        };
    };

    const sendMessage = async (messageText?: string) => {
        const text = messageText || inputValue.trim();
        if (!text) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: text,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getAIResponse(text);
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: response.content,
                isUser: false,
                timestamp: new Date(),
                type: response.type || 'text',
                metadata: response.metadata,
            };

            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const TypingIndicator = () => (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center space-x-2 p-3 bg-gray-100 rounded-2xl rounded-bl-md max-w-xs"
        >
            <Bot className="w-4 h-4 text-purple-600" />
            <div className="flex space-x-1">
                {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-purple-600 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay }}
                    />
                ))}
            </div>
        </motion.div>
    );

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {!isMinimized ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl border w-96 h-[500px] flex flex-col overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">VelocityAI ⚡</h3>
                                    <p className="text-xs opacity-90">Get your time back!</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMinimized(true)}
                                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <Minimize2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex items-start space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'bg-purple-600' : 'bg-white border-2 border-purple-200'
                                            }`}>
                                            {message.isUser ? (
                                                <User className="w-4 h-4 text-white" />
                                            ) : (
                                                <Bot className="w-4 h-4 text-purple-600" />
                                            )}
                                        </div>
                                        <div className={`rounded-2xl p-3 ${message.isUser
                                                ? 'bg-purple-600 text-white rounded-br-md'
                                                : 'bg-white shadow-sm rounded-bl-md border'
                                            }`}>
                                            <div className="text-sm whitespace-pre-line">{message.content}</div>
                                            <div className={`text-xs mt-1 opacity-70 ${message.isUser ? 'text-purple-100' : 'text-gray-500'}`}>
                                                {isClient ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <TypingIndicator />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {messages.length <= 2 && (
                            <div className="p-3 bg-white border-t">
                                <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.id}
                                            onClick={() => sendMessage(action.message)}
                                            className="flex items-center space-x-2 p-2 bg-purple-50 text-purple-700 rounded-lg text-xs hover:bg-purple-100 transition-colors"
                                        >
                                            {action.icon}
                                            <span>{action.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="p-4 bg-white border-t">
                            <div className="flex space-x-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Ask me anything..."
                                    className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    disabled={isTyping}
                                />
                                <button
                                    onClick={() => sendMessage()}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMinimized(false)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow relative"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                        />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function VelocityAILandingPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
                {isClient && (
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full"
                                style={{
                                    width: Math.random() * 4 + 2,
                                    height: Math.random() * 4 + 2,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                )}

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl font-bold mb-6"
                        >
                            VelocityAI ⚡
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl mb-4 opacity-90"
                        >
                            Get Your Time Back With Family
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl opacity-80 mb-8 leading-relaxed"
                        >
                            Stop missing bedtime stories for business calls. Our AI handles customer service,
                            orders, and appointments 24/7 - so you can focus on what matters most:
                            <span className="text-yellow-300 font-semibold"> being present for your family.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="grid grid-cols-3 gap-6 mb-8"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold">24/7</div>
                                <div className="opacity-80 text-sm">Never Miss a Call</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">5hrs</div>
                                <div className="opacity-80 text-sm">Daily Time Saved</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">∞</div>
                                <div className="opacity-80 text-sm">Family Moments</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 }}
                            className="space-y-4"
                        >
                            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg mr-4">
                                Try The Demo Below →
                            </button>
                            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg">
                                See Success Stories
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <Heart className="w-6 h-6 mr-2 text-red-400" />
                                For Parents Who Want More
                            </h3>
                            <p className="text-white/80 mb-4">
                                Try our family-focused AI assistant. Ask about time savings, work-life balance,
                                or how to make money while spending quality time with loved ones.
                            </p>
                            <div className="flex items-center space-x-2 text-white/60 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Live Demo Ready - Ask About Your Industry!</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                                <Clock className="w-8 h-8 text-yellow-400 mb-2" />
                                <h4 className="font-semibold text-white">Time Freedom</h4>
                                <p className="text-white/80 text-sm">20+ hours back weekly</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                                <Heart className="w-8 h-8 text-red-400 mb-2" />
                                <h4 className="font-semibold text-white">Family First</h4>
                                <p className="text-white/80 text-sm">Never miss important moments</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                                <Globe className="w-8 h-8 text-blue-400 mb-2" />
                                <h4 className="font-semibold text-white">Always Working</h4>
                                <p className="text-white/80 text-sm">Makes money while you sleep</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                                <Users className="w-8 h-8 text-purple-400 mb-2" />
                                <h4 className="font-semibold text-white">Any Industry</h4>
                                <p className="text-white/80 text-sm">Adapts to your business</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <SuperchargedChatbot />
        </div>
    );
}