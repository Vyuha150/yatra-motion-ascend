
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'doors-opening': {
					'0%': { transform: 'scaleX(1)', opacity: '1' },
					'50%': { transform: 'scaleX(0.8)', opacity: '0.8' },
					'100%': { transform: 'scaleX(1)', opacity: '1' }
				},
				'doors-closing': {
					'0%': { transform: 'scaleX(1)', opacity: '1' },
					'100%': { transform: 'scaleX(0)', opacity: '0' }
				},
				'floor-up': {
					'0%': { transform: 'translateY(100vh)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'floor-down': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'led-flicker': {
					'0%, 100%': { 
						opacity: '1',
						textShadow: '0 0 10px hsl(45 95% 70%), 0 0 20px hsl(45 95% 70%)'
					},
					'50%': { 
						opacity: '0.8',
						textShadow: '0 0 5px hsl(45 95% 70%), 0 0 10px hsl(45 95% 70%)'
					}
				},
				'button-pulse': {
					'0%, 100%': { boxShadow: '0 4px 20px hsla(210 80% 60% / 0.3)' },
					'50%': { boxShadow: '0 4px 25px hsla(210 80% 60% / 0.5)' }
				},
				'cabin-hum': {
					'0%, 100%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(-1px)' },
					'75%': { transform: 'translateY(1px)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'elevator-ding': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'doors-opening': 'doors-opening 2s ease-out',
				'doors-closing': 'doors-closing 2s ease-in',
				'floor-up': 'floor-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'floor-down': 'floor-down 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'led-flicker': 'led-flicker 2s ease-in-out infinite',
				'button-pulse': 'button-pulse 2s ease-in-out infinite',
				'cabin-hum': 'cabin-hum 4s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'elevator-ding': 'elevator-ding 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
