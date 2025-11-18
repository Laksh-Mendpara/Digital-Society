# Rajasthan: The Living Museum - Design Guidelines

## Design Approach
**Reference-Based:** Inspired by Neal.fun's smooth parallax storytelling, Amar Chitra Katha's bold line art, and Japanese vertical scroll narratives. This is an immersive cultural journey, not a traditional website.

## Visual Identity

### Color Palette
- **Shekhawati Fresco Palette:** Dusty pinks (#E89BA3, #F4C2C2), deep indigos (#4A5899, #2E3A8C), terracotta (#D4846A, #C96449)
- **Desert Neutrals:** Warm sand (#EDD5B3), golden sandstone (#D4AF6A), soft whites (#F9F6F1)
- **Region-Specific Accents:** Blue for Jodhpur (#2B4C7E), white/aqua for Udaipur lakes, golden for Jaisalmer dunes

### Typography
- **Headings:** Bold, hand-drawn feel (Google Fonts: Spectral or Merriweather) - 2.5rem to 4rem
- **Museum Labels:** Serif, elegant (Crimson Text) - 1.25rem, uppercase tracking
- **Comic Captions:** Clean sans-serif (Inter or Source Sans) - 1rem, high readability
- **Body Text:** 1.125rem, max-width 65ch for historical/cultural content

## Layout System

### Spacing
Use Tailwind units: **8, 16, 24, 32** (py-8, py-16, py-24, py-32)
- Section padding: py-24 (desktop), py-16 (mobile)
- Content blocks: mb-16 between major elements
- Comic panels: gap-8 in grid layouts

### Scroll Structure
- **Vertical Parallax:** Each section occupies 100-150vh, allowing breathing room
- **Progressive Reveal:** Elements fade/slide in at scroll thresholds (60-80% viewport entry)
- **Background Transitions:** Gradual color shifts between sections using CSS gradients

## Component Library

### 1. Hero/Intro Section
- Full viewport height (100vh)
- Warm gradient background (sand to terracotta)
- Animated drifting sand particles (CSS keyframes, subtle movement)
- Centered title with Rajasthani motifs (mandala, camel, sun symbols) as decorative SVG overlays
- Single-line sarangi audio trigger button (play icon, no background)

### 2. Regional Story Sections (11 sections)
Each section contains:
- **Section Header:** Region name + subtitle, museum-style label treatment
- **Background:** Region-specific gradient or texture (stepwell blues, fresco pinks, marble whites)
- **Comic Panel Grid:** 3-5 panels in responsive grid (grid-cols-1 md:grid-cols-3, gap-8)
  - Panel style: Bordered frames with subtle shadow, aspect ratio 4:3
  - Illustrations: Line art with bold color fills (Amar Chitra Katha style)
  - Captions: Overlaid or below panels, italic serif font
- **Ambient Audio Toggle:** Floating button (top-right of section) with waveform icon
- **Historical Context Card:** Max-width prose container, bg-white/10 backdrop-blur
- **Cultural Insights:** Bullet list with decorative Rajasthani border motifs

### 3. Animated Elements (Section-Specific)
- **Bundi Stepwells:** CSS shimmer effect on water illustration (repeating gradient animation)
- **Barmer Puppets:** Subtle swing animation using transform rotate (-2deg to 2deg)
- **Shekhawati Frescoes:** Fade-in reveal with slight scale (0.95 to 1)
- **Jaisalmer Dunes:** Horizontal parallax on background layers
- **Udaipur Mirrors:** Flash/glint effects using opacity keyframes

### 4. Closing Tapestry
- All regional icons/elements arranged in decorative grid
- Fade-in cascade animation (stagger delay: 0.1s per element)
- Final message centered, generous padding (py-32)

## Interaction Design

### Scroll Behavior
- Smooth scroll with `scroll-behavior: smooth`
- Intersection Observer API for triggering animations at 70% viewport visibility
- Parallax backgrounds move at 0.5x scroll speed (CSS transform translateY)

### Audio Integration
- Toggle buttons per section (muted by default)
- Only one audio track plays at a time (pause others on new activation)
- Fade in/out transitions (1s duration)
- Visual indicator: pulsing icon when active

## Accessibility
- All interactive elements keyboard navigable
- Audio controls have ARIA labels ("Play ambient sound for [Region]")
- Sufficient color contrast for all text (WCAG AA minimum)
- Reduced motion support: disable parallax/animations if `prefers-reduced-motion`

## Images
**Illustrations Required (Vector/PNG):**
1. **Intro:** Desert motifs (camel silhouette, mandala patterns, sun symbol)
2. **Each Region:** 3-5 comic panel illustrations per section (line art style)
3. **Cultural Objects:** Stepwell cross-section, kathputli puppets, frescoes, palace outlines, marble pillars, lotus flowers, shields/swords
4. **Closing Tapestry:** Composite arrangement of all regional icons

**Style:** Hand-drawn line art with flat color fills, Amar Chitra Katha influence. Use placeholder colored rectangles with `<!-- ILLUSTRATION: [description] -->` comments during development.

## Performance Notes
- Lazy load images below fold
- Use CSS animations over JavaScript where possible
- Debounce scroll listeners
- Compress audio files (MP3, 128kbps max)

**Overall Experience:** An elegant, museum-quality digital scroll that balances visual richness with readability, honoring Rajasthan's cultural depth through thoughtful design restraint and purposeful animation.