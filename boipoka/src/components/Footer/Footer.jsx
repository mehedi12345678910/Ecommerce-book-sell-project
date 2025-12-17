import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-base-100 text-base-content border-t border-base-300">
      {/* Upper Section: Animated Gradient Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Identity Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-primary p-2 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
              </div>
              <span className="text-3xl font-black tracking-tighter italic">ACME.</span>
            </div>
            <p className="text-base-content/60 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences that matter. We combine design, technology, and strategy to build products that scale.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'github'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask mask-squircle opacity-80"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links with Animation */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Explore</h3>
            <ul className="space-y-4">
              {['Branding', 'Design', 'Marketing', 'Advertisement'].map((item) => (
                <li key={item}>
                  <a className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Support</h3>
            <ul className="space-y-4">
              {['Documentation', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter with Glassmorphism */}
          <div className="bg-base-200/50 p-6 rounded-3xl border border-white/5 shadow-inner">
            <h3 className="text-lg font-bold mb-2">Join Our List</h3>
            <p className="text-xs text-base-content/60 mb-4">Get the latest updates and news directly in your inbox.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="hello@world.com" 
                className="input input-bordered w-full rounded-2xl bg-base-100 focus:outline-primary transition-all shadow-sm" 
              />
              <button className="btn btn-primary rounded-2xl shadow-lg shadow-primary/20">
                Subscribe Now
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="divider opacity-10 my-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50 font-medium">
          <p>© {new Date().getFullYear()} ACME Industries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Cookies</span>
            <div className="badge badge-outline badge-sm opacity-50 px-3 py-2">V2.4.0</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer