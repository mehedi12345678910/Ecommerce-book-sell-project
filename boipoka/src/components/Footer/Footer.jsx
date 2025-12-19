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
                {/* Book Icon SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <span className="text-3xl font-black tracking-tighter italic text-primary">BOI-POKA.</span>
            </div>
            <p className="text-base-content/60 text-sm leading-relaxed max-w-xs">
              Apnar priyo boi gulo ekhon ekei thikanay. Golpo, kobita ba shikkhamulok—sob dhoroner boi paben amader kache shohoj mulle.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask mask-squircle opacity-80"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links: Book Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Boi-er Category</h3>
            <ul className="space-y-4">
              {['Golpo o Uponnyas', 'Shishu-Kishor', 'Academic Boi', 'Islamic Library', 'Best Sellers'].map((item) => (
                <li key={item}>
                  <a className="text-base-content/70 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Policy Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Information</h3>
            <ul className="space-y-4">
              {['How to Order', 'Replacement Policy', 'Shipping Charges', 'Privacy Policy', 'Affiliate Program'].map((item) => (
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
            <h3 className="text-lg font-bold mb-2">Discount Paben?</h3>
            <p className="text-xs text-base-content/60 mb-4">Amader notun boi ebong offer somporke jante subscribe korun.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="input input-bordered w-full rounded-2xl bg-base-100 focus:outline-primary transition-all shadow-sm" 
              />
              <button className="btn btn-primary rounded-2xl shadow-lg shadow-primary/20">
                Subscribe Korun
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="divider opacity-10 my-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50 font-medium">
          <p>© {new Date().getFullYear()} Boi-Poka Bookstore. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Contact Us</span>
            <span className="hover:text-primary cursor-pointer transition-colors">FAQ</span>
            <div className="badge badge-outline badge-sm opacity-50 px-3 py-2">Trusted by 10k+ Readers</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;