export default function Sustainability() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Sustainability</span> First
            </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our research focuses on developing sustainable materials and processes that minimize environmental impact while maximizing regenerative potential.
              </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Responsible Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're researching and testing materials that prioritize sustainability, durability, and environmental impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plant-Based Paper</h3>
              <p className="text-gray-600 mb-4">
                We're researching plant-based paper materials sourced from responsibly managed forests and agricultural waste.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Exploring FSC-certified sourcing options</li>
                <li>• Testing chlorine-free processing methods</li>
                <li>• Researching optimal biodegradability</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Seed Capsules</h3>
              <p className="text-gray-600 mb-4">
                We're developing heat-resistant, biodegradable capsules that will contain native plant seeds for local ecosystems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Testing heat resistance up to 95°C</li>
                <li>• Researching native species selection</li>
                <li>• Optimizing germination rates</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Water-Based Inks</h3>
              <p className="text-gray-600 mb-4">
                We're researching non-toxic, biodegradable printing inks that won't compromise the cup's compostability.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Testing non-toxic and food-safe options</li>
                <li>• Developing biodegradable formulations</li>
                <li>• Researching color vibrancy and durability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modular Design
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're designing cups with modularity in mind. Our goal is to create parts that can be replaced instead of discarded, 
                extending product life and reducing waste generation throughout the entire lifecycle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Replaceable Components</h4>
                    <p className="text-gray-600 text-sm">Individual parts can be swapped out as needed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Extended Lifespan</h4>
                    <p className="text-gray-600 text-sm">Targeting extended use compared to traditional cups</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Maintenance</h4>
                    <p className="text-gray-600 text-sm">Simple repair process for all components</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Lifecycle Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manufacturing</h4>
                    <p className="text-gray-600 text-sm">Sustainable production with renewable energy</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Use Phase</h4>
                    <p className="text-gray-600 text-sm">Modular design allows for repairs and upgrades</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">End-of-Life</h4>
                    <p className="text-gray-600 text-sm">Composting and seed germination</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regeneration</h4>
                    <p className="text-gray-600 text-sm">New plant growth and ecosystem support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-of-Life Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              End-of-Life Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're developing a take-back program to ensure true circularity, where every cup can return to the cycle of renewal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Planned Collection Program</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Drop-off</h4>
                    <p className="text-gray-600 text-sm">Planning convenient collection points at partner locations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pickup Service</h4>
                    <p className="text-gray-600 text-sm">Developing scheduled collection for bulk returns</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">♻️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Processing</h4>
                    <p className="text-gray-600 text-sm">Researching composting and seed preparation methods</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Goals</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-600">Compostable materials target</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">0</div>
                  <p className="text-gray-600">Waste to landfill goal</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                  <p className="text-gray-600">Growth potential through seeds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Environmental Impact
            </h2>
            <p className="text-green-100 text-xl max-w-3xl mx-auto">
              Measurable positive impact on our planet through every Growing Cup
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-green-100 font-medium">Compostable</p>
              <p className="text-green-200 text-sm">Within 6 months</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">0</div>
              <p className="text-green-100 font-medium">Waste to Landfill</p>
              <p className="text-green-200 text-sm">Designed for circularity</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <p className="text-green-100 font-medium">Growth Potential</p>
              <p className="text-green-200 text-sm">Every cup plants seeds</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">🌱</div>
              <p className="text-green-100 font-medium">Regeneration</p>
              <p className="text-green-200 text-sm">Turning waste into life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're working toward certifications and standards that verify our commitment to sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FSC Certification</h3>
              <p className="text-gray-600 text-sm">Targeting responsible forest management</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ASTM D6400</h3>
              <p className="text-gray-600 text-sm">Working toward compostable materials standard</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 14001</h3>
              <p className="text-gray-600 text-sm">Planning environmental management system</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">BPI Certification</h3>
              <p className="text-gray-600 text-sm">Targeting biodegradable products institute</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
