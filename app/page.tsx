export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl font-bold text-white mb-6">
                    Velocity<span className="text-blue-400">.ai</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Accelerate your business with cutting-edge AI solutions.
                    Transform your workflows, enhance productivity, and unlock unprecedented growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        Get Started
                    </button>
                    <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Fast Deployment</h3>
                    <p className="text-gray-300">Deploy AI solutions in minutes, not months</p>
                </div>

                <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl mb-4">🧠</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Analytics</h3>
                    <p className="text-gray-300">Gain insights with advanced AI-powered analytics</p>
                </div>

                <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl mb-4">🔒</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
                    <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
                </div>
            </div>
        </main>
    )
}