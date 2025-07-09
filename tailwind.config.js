module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - Authority foundation, psychological depth and focus
        secondary: "#00FFFF", // cyan-400 - Digital precision, clarity and innovation signals
        accent: "#FFA500", // orange-400 - Urgency catalyst, action triggers without aggression
        
        // Background Colors
        background: "#0A0A0A", // gray-950 - Subtle depth, reduces eye strain for extended use
        surface: "#1A1A1A", // gray-900 - Component separation, creates hierarchy without borders
        
        // Text Colors
        'text-primary': "#FFFFFF", // white - Maximum readability, professional clarity on dark backgrounds
        'text-secondary': "#CCCCCC", // gray-300 - Information hierarchy, secondary content that doesn't compete
        
        // Status Colors
        success: "#00FF00", // green-500 - Achievement celebration, dopamine reward for completed actions
        warning: "#FFA500", // orange-400 - Attention direction, guides without creating panic
        error: "#FF69B4", // pink-400 - Helpful concern, stands out while maintaining brand personality
        
        // Neon Variants
        'neon-cyan': "#00FFFF", // cyan-400 - Digital precision
        'neon-orange': "#FFA500", // orange-400 - Urgency catalyst
        'neon-green': "#00FF00", // green-500 - Success indicator
        'neon-pink': "#FF69B4", // pink-400 - Error state
      },
      fontFamily: {
        // Headlines - Geometric precision that suggests technological sophistication
        'orbitron': ['Orbitron', 'sans-serif'],
        // Body - Optimized readability for extended engagement
        'inter': ['Inter', 'sans-serif'],
        // CTAs - Condensed urgency that creates action momentum
        'rajdhani': ['Rajdhani', 'sans-serif'],
        // Accents - Futuristic personality for data points and metrics
        'electrolize': ['Electrolize', 'sans-serif'],
        // Default sans
        'sans': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'black': 900,
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
        'neon-orange': '0 0 5px #FFA500, 0 0 10px #FFA500, 0 0 15px #FFA500',
        'neon-green': '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00',
        'neon-pink': '0 0 5px #FF69B4, 0 0 10px #FF69B4, 0 0 15px #FF69B4',
        'subtle': '0 4px 20px rgba(0, 255, 255, 0.1)',
        'hover': '0 8px 30px rgba(0, 255, 255, 0.2)',
        'success': '0 4px 20px rgba(0, 255, 0, 0.1)',
        'warning': '0 4px 20px rgba(255, 165, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-in-out',
        'pulse-neon': 'pulseNeon 2s infinite',
        'magnetic': 'magnetic 250ms ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '50%': { boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
        magnetic: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}