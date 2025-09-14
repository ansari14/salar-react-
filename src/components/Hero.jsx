const Hero = ({ count, setCount }) => {
  return (
    <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-primary-600">Salar React</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern React application built with Tailwind CSS. Experience the power of 
            component-based architecture with beautiful, responsive design.
          </p>
          
          {/* Interactive Counter Demo */}
          <div className="card max-w-md mx-auto mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Interactive Counter Demo
            </h3>
            <div className="text-4xl font-bold text-primary-600 mb-4">
              {count}
            </div>
            <div className="space-x-4">
              <button
                onClick={() => setCount(count + 1)}
                className="btn-primary"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="btn-secondary"
              >
                Decrement
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Get Started
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
