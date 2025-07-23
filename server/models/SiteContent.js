
const mongoose = require('mongoose');

// This default structure is used by Mongoose if no data is provided on creation.
// It ensures that the database document always has the correct shape.
const defaultSiteContent = {
  branding: {
    logoUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1751848854/Brands_Designs_1_yismag.svg",
    splashScreen: {
      brandName: "Kaste Brands & Designs",
      description: "Building Bold Brands & Smart Solutions",
    },
    colors: {
      primary: '#0A777B',
      secondary: '#F5B841',
      background: '#1A1A1A',
      surface: '#2A2A2A',
      lightText: '#F9F9F9',
      grayText: '#EDEDED',
      darkText: '#1A1A1A',
    }
  },
  header: {
    cyclingContent: [
      { id: 'cc_1', icon: 'Sparkles', text: "Creative Solutions" },
      { id: 'cc_2', icon: 'TrendingUp', text: "Digital Growth" },
      { id: 'cc_3', icon: 'BrainCircuit', text: "AI-Powered Innovation" },
      { id: 'cc_4', icon: 'Brush', text: "Strategic Branding" },
    ],
    contact: {
      phone: '+254795071901',
      whatsapp: '254795071901',
    }
  },
  footer: {
    tagline: 'Building bold brands and smart solutions for the digital age.',
    contact: {
      email: 'info@kastebrands.co.ke',
      location: 'Nairobi, Kenya',
    },
    navLinks: [
        { id: 'footer_nav_home', label: 'Home', url: '/' },
        { id: 'footer_nav_about', label: 'About', url: '/about' },
        { id: 'footer_nav_services', label: 'Services', url: '/services' },
        { id: 'footer_nav_contact', label: 'Contact', url: '/contact' },
    ],
    socialLinks: [
      { id: 'sl_linkedin', url: "https://linkedin.com/company/kaste-brands", label: "LinkedIn", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228294/linkedin_ltqxuy.svg" },
      { id: 'sl_twitter', url: "https://twitter.com/kastebrands", label: "X (Twitter)", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228294/twitter_itf6wp.svg" },
      { id: 'sl_instagram', url: "https://instagram.com/kastebrands", label: "Instagram", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228456/instagram_wd9tua.svg" },
      { id: 'sl_tiktok', url: "https://www.tiktok.com/@kastebrands", label: "TikTok", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228295/tiktok_avr92v.svg" },
      { id: 'sl_behance', url: "https://www.behance.net/kastebrands", label: "Behance", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228293/behance_jcdldl.svg" },
      { id: 'sl_github', url: "https://github.com/kastebrands", label: "GitHub", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228293/github_agymjn.svg" },
      { id: 'sl_facebook', url: "https://facebook.com/KasteBrands", label: "Facebook", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753228337/facebook-color_xx6keh.svg" },
      { id: 'sl_whatsapp', url: "https://wa.me/254795071901", label: "WhatsApp", iconUrl: "https://res.cloudinary.com/dwwvh34yi/image/upload/v1753226530/whatsapp-svgrepo-com_tdqmtd.svg" },
    ]
  },
  homepage: {
    hero: {
      title: 'Build Bold.<br />Operate Smart.<br />Scale Fast.',
      subtitle: 'Fueling brands with bold digital energy. We help businesses thrive in the digital era through intelligent tech solutions and creative branding that drives growth.',
      backgroundImageUrl: 'https://res.cloudinary.com/dwwvh34yi/image/upload/v1753291053/hero_section_1_rnglfv.png',
    },
    featuredServices: {
      title: 'Featured Services',
      subtitle: 'Expertise to elevate every facet of your brand.',
      serviceIds: ['web-designs', 'ai-systems', 'brand-identity'],
    },
    clientMarquee: {
      title: 'Trusted by Industry Innovators',
      clients: [
        [
          { id: 'client_nexus', name: 'NEXUS', logoUrl: 'https://res.cloudinary.com/dwwvh34yi/image/upload/v1753313001/client-logos/nexus_white.svg' },
          { id: 'client_quantum', name: 'Quantum', logoUrl: 'https://res.cloudinary.com/dwwvh34yi/image/upload/v1753313002/client-logos/quantum_white.svg' },
        ],
        [
          { id: 'client_helios', name: 'Helios', logoUrl: 'https://res.cloudinary.com/dwwvh34yi/image/upload/v1753313011/client-logos/helios_white.svg' },
          { id: 'client_odyssey', name: 'Odyssey', logoUrl: 'https://res.cloudinary.com/dwwvh34yi/image/upload/v1753313012/client-logos/odyssey_white.svg' },
        ]
      ],
    },
    tabsSection: {
      title: 'Our Innovation Hub',
      subtitle: "A glimpse into the technologies we master and the projects we're building.",
      tabs: [
        { id: 'ai', label: 'AI Tools', icon: 'BrainCircuit', items: [
            { id: 'tab_ai_gemini', icon: { type: 'custom', value: 'GeminiIcon'}, title: 'Gemini & GPT Models', description: 'For advanced text generation, summarization, and analysis.' },
        ]},
        { id: 'stack', label: 'Our Stack', icon: 'Code', items: [
            { id: 'tab_stack_react', icon: { type: 'custom', value: 'ReactIcon'}, title: 'React & Next.js', description: 'For building scalable and performant web applications.' },
        ]},
        { id: 'projects', label: 'In The Works', icon: 'Loader', items: [
            { id: 'tab_proj_content', icon: { type: 'lucide', value: 'Lightbulb' }, title: 'AI-Powered Content Platform', description: 'Developing a SaaS for automated content creation and optimization.', iconClassName: "text-yellow-400"},
        ]},
      ],
    },
    stats: {
        title: 'Data-Driven Success',
        subtitle: 'Our track record, by the numbers.',
        items: [
            { id: 'stat_projects', icon: 'Briefcase', value: '75+', label: 'Projects Delivered' },
        ]
    }
  },
  about: {
      hero: {
          title: "We're Not Just an Agency.",
          highlightedText: "We're Your Growth Partner.",
          subtitle: "Kaste Brands & Designs was born from a simple belief: audacious ideas deserve brilliant execution."
      },
      mission: {
          title: "Where Vision Meets Velocity",
          body: "We're not just service providers; we are your strategic partners in digital evolution.",
          imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
          points: [
              { id: 'mission_point_strat', icon: 'Target', title: 'Strategic Precision', text: 'Every design, every line of code, is crafted with purpose to achieve your business objectives.'},
          ]
      },
      principles: {
          title: "Our Guiding Principles",
          subtitle: "This is the ethos that drives our work and our relationships.",
          items: [
              { id: 'principle_partner', icon: 'HeartHandshake', title: 'Radical Partnership', text: 'No black boxes. No jargon. We operate as a true extension of your team.'},
          ]
      },
      cta: {
          title: "Ready to build something extraordinary?",
          subtitle: "Let's challenge the status quo together. Tell us about your vision.",
          buttonText: "Start the Conversation"
      }
  },
  contact: {
      hero: {
          title: "Get In Touch",
          subtitle: "Have a project in mind or just want to say hello? We'd love to hear from you."
      },
      details: {
          email: 'info@kastebrands.co.ke',
          phone: '+254 795 071 901',
          location: 'Nairobi, Kenya (Remote First)'
      }
  },
  popup: {
    enabled: false,
    type: 'announcement',
    icon: 'Megaphone',
    title: 'New Announcement!',
    message: 'Check out our latest news or special offers. You can customize this message in the admin panel.',
    ctaText: 'Learn More',
    ctaLink: '/about',
    imageUrl: '',
  },
  services: [
    {
        id: 'web-designs',
        title: 'Web Designs',
        description: 'We build bold, responsive websites that captivate users and drive business growth with style.',
        longDescription: "Your website is your digital storefront. We don't just build pages; we architect experiences.",
        imageUrl: 'https://res.cloudinary.com/dwwvh34yi/image/upload/v1753214408/website_peview_yamyba.png',
    }
  ],
  projects: [
    {
        id: 'proj_ecommerce_vortex',
        serviceId: 'web-designs',
        status: 'live',
        title: 'E-commerce Platform "Vortex"',
        description: 'A scalable and responsive e-commerce site with a custom CMS and payment gateway integration.',
        imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
        demoLink: '#/demo/vortex-web',
    }
  ],
};


const SiteContentSchema = new mongoose.Schema({
    content: {
        type: mongoose.Schema.Types.Mixed,
        default: defaultSiteContent
    }
}, {
    // Add timestamps to track when the content was last updated.
    timestamps: true,
    // Minimize 'false' saves empty objects, which we don't want.
    minimize: false
});

module.exports = mongoose.model('SiteContent', SiteContentSchema);
