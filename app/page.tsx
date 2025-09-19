export default function Home() {
    return (
        'use client'

import { motion } from 'framer-motion'
import { Rocket, Brain, Shield, ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function Home() {
    return (
        <div>
            {/* Navigation Header */}
            <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <Zap className="w-8 h-8 text-blue-400" />
                            <span className="text-xl font-bold text-white">Velocity.ai</span>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:flex items-center space-x-8"
                        >
                            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                                Get Started
                            </button>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="min-h-screen relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-grid-white/5"></div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 pt-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto text-center"
                    >
                        {/* Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm mb-8"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            AI-Powered Future is Here
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
                        >
                            Velocity<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">.ai</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                        >
                            Accelerate your business with cutting-edge AI solutions. 
                            Transform workflows, enhance productivity, and unlock unprecedented growth.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center shadow-2xl shadow-blue-500/25"
                            >
                                Start Your Journey
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm"
                            >
                                Watch Demo
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="py-24 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Powerful AI Features
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Discover how our AI-powered platform transforms your business operations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Rocket,
                                title: "Lightning Fast Deployment",
                                description: "Deploy AI solutions in minutes with our streamlined platform. No complex setup required.",
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: Brain,
                                title: "Intelligent Analytics",
                                description: "Advanced machine learning algorithms provide deep insights and predictive analytics.",
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: Shield,
                                title: "Enterprise Security",
                                description: "Bank-level security with 99.9% uptime guarantee. Your data is always protected.",
                                color: "from-green-500 to-emerald-500"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group relative p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                
                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                                    {feature.title}
                                </h3>
                                
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300 -z-10"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
    )
}