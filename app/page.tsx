import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moody Plumbing | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for Moody Plumbing Inc. Family owned and operated since 1987 in Coral Springs, FL.",
  robots: "noindex, nofollow",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-50">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io" className="underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-9 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">Moody Plumbing</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </div>
            <a href="tel:954-972-1079" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base whitespace-nowrap">
              📞 (954) 972-1079
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-blue-200 text-lg mb-4">Serving South Florida Since 1987</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Don&apos;t Get Mad,<br />
              <span className="text-amber-400">Get Moody!</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Family owned and operated for over 37 years. Quality plumbing service at reasonable prices in Broward, Dade, and Palm Beach Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:954-972-1079" className="bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition shadow-lg">
                Call Now: (954) 972-1079
              </a>
              <a href="#services" className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition border border-white/30">
                View Services
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we handle it all for residential and commercial properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🔧", title: "Leak Detection & Repair", desc: "Advanced leak detection and fast repairs to protect your property." },
              { icon: "🚿", title: "Piping Repairs & Replacement", desc: "Expert repair and replacement of damaged or aging pipes." },
              { icon: "🔥", title: "Water Heater Services", desc: "Installation, repair, and replacement of all water heater types." },
              { icon: "🏠", title: "Sewer & Water Main", desc: "Complete sewer and water main replacement services." },
              { icon: "📹", title: "Camera Inspections", desc: "Video camera inspections for accurate diagnosis of sewer lines." },
              { icon: "💧", title: "Drain Cleaning", desc: "High-pressure jetting and drain cleaning services." },
              { icon: "🚽", title: "Fixture Installation", desc: "New faucets, toilets, and fixture installation." },
              { icon: "🏢", title: "Commercial Plumbing", desc: "Full service for apartments, industrial, and commercial buildings." },
              { icon: "🛡️", title: "Backflow Prevention", desc: "Testing, repair, and installation of backflow devices." },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Company, Local Friends
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Moody Plumbing, Inc. is family owned and operated, and we have been serving our neighbors in Broward, Dade, and Palm Beach Counties since 1987.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We take great pride in satisfying our customers and providing the high-quality, prompt, and reliable services that you can trust for any residential and commercial plumbing requirement.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our professional technicians complete extensive and ongoing training, and we are fully licensed and insured for your protection.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">37+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
                  <div className="text-gray-600">BBB Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Moody?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Family owned & operated since 1987</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>24/7 emergency service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Free estimates when work is performed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Affordable & competitive rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Fully licensed & insured (CFC1431144)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Superior customer service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Serving the Tri-County Area</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Coral Springs • Boca Raton • Fort Lauderdale • Hollywood • Pompano Beach • Deerfield Beach • 
            West Palm Beach • Parkland • Tamarac • Margate • Miramar • Pembroke Pines • and all of Broward, Dade & Palm Beach Counties
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-3xl">★</span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Moody Plumbing has been our go-to for years. Always professional, always fair pricing. The team really treats you like family!", author: "Sarah M." },
              { text: "Had an emergency leak at 2am and they were here within the hour. Fixed it fast and the price was very reasonable. Highly recommend!", author: "Mike T." },
              { text: "Best plumbers in South Florida! They diagnosed our issue quickly and fixed it right the first time. No upselling, just honest work.", author: "Jennifer R." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <p className="font-bold text-gray-900">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Plumbing Emergency? Call Anytime!
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            We offer 24/7 emergency service. Don&apos;t wait — get the help you need now!
          </p>
          <a href="tel:954-972-1079" className="inline-block bg-white text-amber-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-lg">
            📞 (954) 972-1079
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to schedule service? Have questions? Reach out and our friendly team will help you right away.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📞</div>
                  <div>
                    <div className="font-bold text-gray-900">Phone</div>
                    <a href="tel:954-972-1079" className="text-blue-600 text-lg">(954) 972-1079</a>
                    <div className="text-gray-500">or 877-40-MOODY</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📧</div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <a href="mailto:admin@moodyplumbing.com" className="text-blue-600 text-lg">admin@moodyplumbing.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <div className="font-bold text-gray-900">Address</div>
                    <div className="text-gray-600">4100 NW 120th Ave</div>
                    <div className="text-gray-600">Coral Springs, FL 33065</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">🕐</div>
                  <div>
                    <div className="font-bold text-gray-900">Hours</div>
                    <div className="text-gray-600">24/7 Emergency Service</div>
                    <div className="text-gray-600">Office: Mon-Fri 8am-5pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600">
                  <option>Select Service Type</option>
                  <option>Emergency Repair</option>
                  <option>Drain Cleaning</option>
                  <option>Water Heater</option>
                  <option>Leak Repair</option>
                  <option>New Installation</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Describe your plumbing issue..." rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
                  Request Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold">Moody Plumbing</span>
              </div>
              <p className="text-gray-400">
                Family owned and operated since 1987. Quality plumbing service you can trust.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(954) 972-1079</li>
                <li>admin@moodyplumbing.com</li>
                <li>License #CFC1431144</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Moody Plumbing, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
