(() => {
  if (new URLSearchParams(location.search).has('preview')) return;

  const sharedSystem = 'SF Pro Display / SF Pro Text / system-ui';
  const specs = {
    'eclipse-toggle.html': {
      title: 'Appearance Toggle', tone: 'Elegant · Soft utility',
      sections: {
        Spacing: [['Canvas inset', '16 px minimum'], ['Settings stack gap', '12 px'], ['Row padding', '0 16 px'], ['Label stack gap', '6 px']],
        Typography: [['Family', sharedSystem], ['Setting label', '15 px / 15 px · 600'], ['Status label', '9 px / 9 px · 700 Mono'], ['Hero label', '36–52 px · 800']],
        Component: [['Settings row', '360 × 72 px'], ['Compact switch', '88 × 44 px'], ['Minimum touch target', '44 × 44 px'], ['Hero group', '76% width · 6% gap']],
        Surface: [['Row radius', '18 px'], ['Track radius', '999 px'], ['Track stroke', '2–3 px'], ['Row stroke', '1 px #ECECEF']],
        Motion: [['State transition', '520 ms'], ['Language transition', '620 ms'], ['Easing', 'cubic-bezier(.22,.9,.28,1)']]
      }
    },
    'checkbox.html': {
      title: 'Journal Checkbox', tone: 'Intimate · Matter-of-fact',
      sections: {
        Spacing: [['Canvas inset', '16 px minimum'], ['Row stack gap', '10 px'], ['Row padding', '0 22 px'], ['Control-to-copy gap', '16 px']],
        Typography: [['Family', sharedSystem], ['Row label', '14.5 px / 14.5 px · 600'], ['Tracking', '−0.015 em']],
        Component: [['Stack width', '356 px'], ['Row', '356 × 66 px'], ['Checkbox', '30 × 30 px'], ['Focus offset', '9 px']],
        Surface: [['Row radius', '16 px'], ['Checkbox radius', '32% → 50%'], ['Control stroke', '1.5 px'], ['Row stroke', '1 px / 8% black']],
        Motion: [['Check draw', '300–420 ms'], ['Row reorder', '560 ms'], ['Easing', 'cubic-bezier(.22,.9,.28,1)']]
      }
    },
    'radio.html': {
      title: 'Age Range Radio', tone: 'Playful · Approachable',
      sections: {
        Spacing: [['Stage gap', '24 px'], ['Panel padding', '8 px'], ['Option padding', '14 px'], ['Option content gap', '14 px']],
        Typography: [['Family', sharedSystem], ['Intro title', '16 px · 700'], ['Supporting copy', '13 px / 18.85 px'], ['Option label', '14.5 px / 14.5 px · 600']],
        Component: [['Panel width', '320 px'], ['Radio', '26 × 26 px'], ['Illustration', '58 px wide'], ['Minimum touch target', '44 × 44 px']],
        Surface: [['Panel radius', '20 px'], ['Option radius', '13 px'], ['Radio stroke', '1.5 px'], ['Divider', '1 px / 8% black']],
        Motion: [['Selection', '380 ms'], ['Hover reveal', '240–300 ms'], ['Easing', 'cubic-bezier(.34,1.56,.64,1)']]
      }
    },
    'discover.html': {
      title: 'Pets Discovery', tone: 'Playful · Editorial',
      sections: {
        Spacing: [['Screen inset', '20 px'], ['Masonry gap', '10 px'], ['Card vertical gap', '12 px'], ['Chip gap', '8 px']],
        Typography: [['Family', sharedSystem], ['Page title', '26 px · 800'], ['Search', '16 px'], ['Chip', '13.5 px · 600'], ['Card title', '12.5 px / 15.6 px · 600']],
        Component: [['Artboard', '402 × 874 px'], ['Status bar', '54 px high'], ['Search field', '44 px high'], ['Detail sheet', '90% screen height']],
        Surface: [['Device radius', '54 px'], ['Search radius', '22 px'], ['Chip radius', '17 px'], ['Sheet radius', '28 px top corners']],
        Motion: [['Sheet entrance', '550 ms'], ['Content stagger', '120 ms'], ['Easing', 'cubic-bezier(.22,1,.32,1)']]
      }
    },
    'prep.html': {
      title: 'Puppy Prep', tone: 'Energetic · Encouraging',
      sections: {
        Spacing: [['Screen inset', '20 px'], ['Header bottom gap', '14 px'], ['Task content gap', '12 px'], ['Section gap', '18 px']],
        Typography: [['Family', sharedSystem], ['Page title', '26 px · 800'], ['Task title', '14.5 px / 18.85 px · 600'], ['Task detail', '11.5 px / 14.95 px'], ['Tag', '10.5 px · 700']],
        Component: [['Artboard', '402 × 874 px'], ['Status bar', '54 px high'], ['CTA', '46 px high'], ['Minimum touch target', '44 × 44 px']],
        Surface: [['Device radius', '54 px'], ['CTA radius', '14 px'], ['Tag radius', '10 px'], ['Tag stroke', '1 px']],
        Motion: [['Task completion', '300–600 ms'], ['Celebration entrance', 'spring scale'], ['Reduced motion', 'Supported']]
      }
    },
    'match.html': {
      title: 'Find Your Match', tone: 'Warm · Playful',
      sections: {
        Spacing: [['Screen inset', '20 px'], ['Question gap', '10 px'], ['Option content gap', '12 px'], ['CTA inset', '20 px']],
        Typography: [['Family', sharedSystem], ['Page title', '26 px · 800'], ['Question', '17 px / 22.1 px · 800'], ['Option title', '14.5 px / 18.85 px · 700'], ['Option detail', '11.5 px / 15.5 px']],
        Component: [['Artboard', '402 × 874 px'], ['Status bar', '54 px high'], ['CTA', '362 × 52 px'], ['Minimum touch target', '44 × 44 px']],
        Surface: [['Device radius', '54 px'], ['CTA radius', '16 px'], ['Skip radius', '12 px'], ['Option stroke', '1 px']],
        Motion: [['Selection feedback', '240–350 ms'], ['CTA press', '0.98 scale'], ['Reduced motion', 'Supported']]
      }
    },
    'mood.html': {
      title: 'Mood Switch', tone: 'Quirky · Energetic',
      sections: {
        Spacing: [['Stage padding', '40 × 24 px'], ['Stage gap', '30 px'], ['Caption stack gap', '8 px'], ['Title padding', '6 × 16 px']],
        Typography: [['Family', 'VT323 / Space Mono'], ['Title', '46 px / 46 px'], ['Caption', '32 px'], ['Eyebrow', '22 px · 0.26 em tracking'], ['Hint', '18 px · 0.2 em tracking']],
        Component: [['Switch', '340 × 170 px max'], ['Thumb', '46% × 88%'], ['Face', '60% × 60%'], ['Drag threshold', '50% track']],
        Surface: [['Track radius', '999 px'], ['Track stroke', '3 px'], ['Thumb stroke', '3 px'], ['Hard shadow', '8 px / 0 blur']],
        Motion: [['Toggle', '720 ms'], ['Color', '650 ms'], ['Easing', 'cubic-bezier(.4,-.1,.25,1.35)']]
      }
    },
    'glitch-check.html': {
      title: 'Pixel Checklist', tone: 'Edgy · Raw',
      sections: {
        Spacing: [['Stage padding', '38 × 24 px'], ['Stage gap', '20 px'], ['List gap', '12 px'], ['Task padding', '12 × 14 px']],
        Typography: [['Family', 'VT323 / Space Mono'], ['Title', '40 px / 40 px'], ['Task label', '26 px / 26 px'], ['Metadata', '14 px · 0.18 em tracking'], ['Action', '22 px']],
        Component: [['Stage width', '440 px max'], ['Checkbox', '28 × 28 px'], ['Tick', '18 × 18 px'], ['Minimum touch target', '44 × 44 px']],
        Surface: [['Task stroke', '2.5 px'], ['Control stroke', '2.5 px'], ['Hard shadow', '5 px / 0 blur'], ['Corner radius', '0 px']],
        Motion: [['Pixel dissolve', '600–800 ms'], ['Press offset', '2 px'], ['Timing', 'stepped + cubic-bezier(.22,1,.32,1)']]
      }
    },
    'glitch-radio.html': {
      title: 'Pixel Select', tone: 'Edgy · Futuristic',
      sections: {
        Spacing: [['Stage padding', '38 × 24 px'], ['Stage gap', '20 px'], ['List gap', '12 px'], ['Option padding', '12 × 14 px']],
        Typography: [['Family', 'VT323 / Space Mono'], ['Title', '40 px / 40 px'], ['Option label', '26 px / 26 px'], ['Metadata', '14 px · 0.18 em tracking'], ['Action', '22 px']],
        Component: [['Stage width', '460 px max'], ['Radio', '28 × 28 px'], ['Selected dot', '8 × 8 px'], ['Minimum touch target', '44 × 44 px']],
        Surface: [['Option stroke', '2.5 px'], ['Radio stroke', '2.5 px'], ['Hard shadow', '5 px / 0 blur'], ['Radio radius', '50%']],
        Motion: [['Selection reveal', '220–300 ms'], ['Press offset', '2 px'], ['Scan/glitch', 'stepped timing']]
      }
    },
    'engage.html': {
      title: 'Engage', tone: 'Luxurious · Futuristic',
      sections: {
        Spacing: [['Stage padding', '48 × 24 px'], ['Stage gap', '28 px'], ['Status gap', '6 px'], ['Side label inset', '22 px']],
        Typography: [['Display', 'Instrument Serif'], ['UI', 'Inter / system-ui'], ['Title', '46 px / 46 px · 400 italic'], ['State', '24 px · italic'], ['Hint', '10 px · 0.35 em tracking']],
        Component: [['Switch', '300 × 150 px'], ['Thumb', '44% × 84%'], ['Minimum touch target', '44 × 44 px'], ['Ray field', '800 × 800 px']],
        Surface: [['Track radius', '999 px'], ['Border', 'None'], ['Thumb radius', '50%'], ['Track fill', '#E4E4E8 → space gradient']],
        Motion: [['Toggle', '650 ms'], ['Ray rotation', '40 s linear'], ['Easing', 'cubic-bezier(.22,1,.32,1)']]
      }
    },
    'engage-check.html': {
      title: 'Engage Check', tone: 'Futuristic · Monumental',
      sections: {
        Spacing: [['Canvas padding', '40 px'], ['Control gap', '28 px'], ['Tick optical inset', '22 px'], ['Focus offset', '6 px']],
        Typography: [['Family', 'No visible labels'], ['Accessible name', 'Required per control']],
        Component: [['Checkbox', '84 × 84 px'], ['Tick', '40 × 40 px'], ['Ray field', '260 × 260 px'], ['Minimum touch target', '84 × 84 px']],
        Surface: [['Box radius', '22 px'], ['Border', 'None'], ['Inactive fill', '#E4E4E8'], ['Active fill', 'Space gradient']],
        Motion: [['Fill transition', '650 ms'], ['Tick draw', '400 ms'], ['Easing', 'cubic-bezier(.4,0,.2,1)']]
      }
    },
    'engage-radio.html': {
      title: 'Engage Select', tone: 'Futuristic · Serene',
      sections: {
        Spacing: [['Canvas padding', '40 px'], ['Control gap', '28 px'], ['Inner dot inset', '33%'], ['Focus offset', '6 px']],
        Typography: [['Family', 'No visible labels'], ['Accessible name', 'Required per option']],
        Component: [['Radio', '84 × 84 px'], ['Selected dot', '34% diameter'], ['Ray field', '260 × 260 px'], ['Minimum touch target', '84 × 84 px']],
        Surface: [['Control radius', '50%'], ['Border', 'None'], ['Inactive fill', '#E4E4E8'], ['Active fill', 'Space gradient']],
        Motion: [['Fill transition', '650 ms'], ['Dot scale', '350 ms'], ['Easing', 'cubic-bezier(.4,0,.2,1)']]
      }
    },
    'pixel-stepped-slider.html': {
      title: 'Brand Color Tuner', tone: 'Edgy · Commercial editorial', week: 'Week 4', back: 'week4.html',
      sections: {
        Spacing: [['Page padding', '72 × 24 px'], ['Panel alignment', 'Viewport center'], ['Control padding', '18 px'], ['Control gap', '16 px']],
        Typography: [['UI family', 'Inter'], ['Accent family', 'Space Mono'], ['Title', '34–46 px / 1.04'], ['Slider value', '24 px / 1'], ['Control label', '10–12 px']],
        Component: [['Workspace', '640 px max'], ['Control card', '640 px max · centered'], ['Steps', '6 labeled values'], ['Slider region', '64 px high'], ['Minimum target', '44 px']],
        Surface: [['Canvas', 'Pure white #FFFFFF'], ['Card stroke', '1 px charcoal'], ['Card radius', '14 px'], ['Track radius', '7 px'], ['Editorial shadow', '5 px hard + soft lift']],
        States: [['Hover', '−1 to −2 px elevation'], ['Pressed', 'Pink handle accent'], ['Drag', 'Handle pulse only'], ['Focus', '3 px blue ring']],
        Motion: [['Spectrum', 'Fixed'], ['Handle tracking', '80 ms linear'], ['Snap feedback', '360 ms'], ['Value refresh', '260 ms ease'], ['Preview refresh', '300 ms ease']]
      }
    },
    'pixel-continuous-slider.html': {
      title: 'Light Control', tone: 'Edgy · Commercial editorial', week: 'Week 4', back: 'week4.html',
      sections: {
        Spacing: [['Page padding', '72 × 24 px'], ['Panel alignment', 'Viewport center'], ['Panel padding', '16 px'], ['Section gap', '14–19 px']],
        Typography: [['UI family', 'Inter'], ['Accent family', 'Space Mono'], ['Value', '25 px / 1'], ['Labels', '8–10 px'], ['Tracking', '.025–.11 em']],
        Component: [['Panel', '440 px max'], ['Sliders', '3 simultaneous controls'], ['Slider region', '42 px high'], ['Handle', '22 × 22 px'], ['Minimum target', '38 px']],
        Surface: [['Canvas', 'Pure white #FFFFFF'], ['Panel stroke', '1 px charcoal'], ['Panel radius', '12 px'], ['Track', '8 px high / 3 px radius'], ['Hard shadow', '5 px / 0 blur']],
        States: [['Hover', '1.12× handle'], ['Pressed', 'Acid fill / .92×'], ['Drag', 'Pink stepped pulse'], ['Focus', '3 px blue ring']],
        Motion: [['Handle tracking', '70 ms linear'], ['Snap feedback', '320 ms'], ['Value refresh', '240 ms ease'], ['Controls', 'Independent state']]
      }
    },
    'glass-temperature-slider.html': {
      title: 'Glass Temperature', tone: 'Futuristic · Mysterious · Elegant', week: 'Week 4', back: 'week4.html',
      sections: {
        Spacing: [['Canvas', '1600 × 1000 reference'], ['Page padding', '72 × 24 px'], ['Panel padding', '28 × 30 px'], ['Header gap', '20 px']],
        Typography: [['Family', 'Inter / Space Mono'], ['Value', '38 px / 1'], ['Label', '12 px / .11 em'], ['Zone labels', '11 px / 1']],
        Component: [['Panel', '640 px max'], ['Track', '540 px reference / 6 px high'], ['Slider region', '126 px high'], ['Glass thumb', '46 × 46 px'], ['Minimum target', '46 px']],
        Surface: [['Canvas', 'Pure white #FFFFFF'], ['Panel radius', '20 px'], ['Panel stroke', '1 px / 15% white'], ['Backdrop blur', '24 px'], ['Glass layers', 'Smoked glass + inner highlights']],
        States: [['Hover', 'Edge highlight + halo'], ['Pressed', '.94× compression'], ['Drag', 'Off-axis glass motion'], ['Focus', '2 px cyan ring']],
        Motion: [['Range', '16–30°C / 0.5°C'], ['Magnetic threshold', '6 px'], ['Off-axis limit', '8 px'], ['Local refraction', '72 px radius'], ['Magnetic return', '220 ms / no oscillation']]
      }
    },
    'glass-outfit-slider.html': {
      title: 'Outfit Temperature', tone: 'Futuristic · Elegant · Practical', week: 'Week 4', back: 'week4.html',
      sections: {
        Spacing: [['Canvas', '1600 × 1000 reference'], ['Page padding', '72 × 24 px'], ['Panel padding', '28 × 30 px'], ['Header gap', '20 px'], ['Icon gap', '5 px']],
        Typography: [['Family', 'Inter / Space Mono'], ['Value', '36 px / 1'], ['Label', '12 px / .11 em'], ['Status', '10 px / .07 em'], ['Recommendation', '11 px']],
        Component: [['Panel', '640 px max'], ['Slider region', '174 px high'], ['Temperature steps', '6'], ['Clothing icons', '28 × 28 px'], ['Icon wells', '44 × 44 px'], ['Glass thumb', '44 × 44 px'], ['Minimum target', '44 px']],
        Surface: [['Canvas', 'Pure white #FFFFFF'], ['Panel radius', '20 px'], ['Panel stroke', '1 px / 15% white'], ['Icon well radius', '11 px'], ['Track', '6 px / full radius'], ['Glass layers', 'Smoked glass + inner highlights']],
        States: [['Hover', 'Glass highlight + halo'], ['Pressed', '.94× thumb compression'], ['Drag', 'Direct stepped tracking'], ['Selected', 'Icon lift + illuminated node'], ['Focus', '2 px cyan ring']],
        Motion: [['Range', '5–30°C / 6 steps'], ['Step transition', '260 ms spring'], ['Drag tracking', '80 ms linear'], ['State transition', '180–220 ms']]
      }
    },
    'soft-focus-stepped-slider.html': {
      title: 'Focus Duration', tone: 'Serene · Intimate · Matter-of-fact', week: 'Week 4', back: 'week4.html',
      sections: {
        Spacing: [['Page padding', '72 × 24 px'], ['Panel padding', '22 px'], ['Header gap', '24 px'], ['Footer gap', '14 px']],
        Typography: [['Family', 'SF Pro / system-ui'], ['Title', '16 px / 1 · 700'], ['Value', '28 px / 1 · 700'], ['Metadata', '9 px / 1 Mono'], ['Supporting copy', '12 px']],
        Component: [['Panel', '420 px max'], ['Slider region', '104 px high'], ['Duration steps', '5'], ['Thumb', '34 × 34 px'], ['Minimum target', '44 px']],
        Surface: [['Canvas', 'Pure white #FFFFFF'], ['Panel', '#F1F1F3'], ['Panel radius', '20 px'], ['Panel stroke', '1 px / 9% ink'], ['Track', '5 px / full radius']],
        States: [['Hover', '1.08× thumb + shadow'], ['Pressed', '.9× thumb'], ['Drag', '90 ms tracking'], ['Selected', 'Filled node + active label'], ['Focus', '1.5 px ink outline']],
        Motion: [['Range', '15–75 min / 15 min steps'], ['Step transition', '360 ms soft easing'], ['Ripple feedback', '520 ms'], ['Node pop', '300 ms spring']]
      }
    },
    'soft-ambient-continuous-slider.html': {
      title: 'Ambient Sound', tone: 'Serene · Intimate · Matter-of-fact', week: 'Week 4', back: 'week4.html',
      sections: {
        Spacing: [['Page padding', '72 × 24 px'], ['Panel padding', '22 px'], ['Header gap', '24 px'], ['Footer gap', '14 px']],
        Typography: [['Family', 'SF Pro / system-ui'], ['Title', '16 px / 1 · 700'], ['Value', '28 px / 1 · 700'], ['Metadata', '9 px / 1 Mono'], ['Supporting copy', '12 px']],
        Component: [['Panel', '420 px max'], ['Slider region', '104 px high'], ['Range', '0–100% continuous'], ['Thumb', '34 × 34 px'], ['Minimum target', '44 px']],
        Surface: [['Canvas', 'Pure white #FFFFFF'], ['Panel', '#F1F1F3'], ['Panel radius', '20 px'], ['Panel stroke', '1 px / 9% ink'], ['Track', '6 px / full radius']],
        States: [['Hover', '1.08× thumb + shadow'], ['Pressed', '.9× thumb'], ['Drag', 'Repeating ripple + direct tracking'], ['Focus', '1.5 px ink outline']],
        Motion: [['Range', '0–100% / 1% increments'], ['Handle tracking', '80 ms linear'], ['Ripple cycle', '760 ms'], ['Morph', '260 ms spring']]
      }
    },
    'buttons-serene.html': {
      title: 'Calm · Meditation App', tone: 'Serene · Soft utility, quiet confidence, slow breathing rhythm', week: 'Week 8', back: 'week8.html',
      sections: {
        Arrangement: [['Frame', '560 px · 4 : 3 · centered'], ['Row rhythm', '28 px vertical breathing gap'], ['Button spacing', '10 px — loose, unhurried'], ['Duration group', 'Flush segments · 12 px end caps'], ['Hierarchy flow', 'Primary → Secondary → Tertiary → Group → States']],
        Surface: [['Primary material', 'Frosted glass — #D4E5EF fill · 1 px diffuse shadow'], ['Secondary material', 'Matte fog — #F0F3F5 flat fill · no shadow'], ['Tertiary material', 'Transparent pane — 1 px #D4DDE3 inset border'], ['Roundness', '12 px — soft, pillowed corners'], ['Touch target', '40 px minimum height']],
        Typography: [['Family', 'SF Pro Display / system-ui'], ['Button label', '13 px · weight 500 · −0.01 em'], ['Section label', '9 px · weight 600 · 0.12 em uppercase'], ['State caption', '8 px · weight 500 · muted']],
        Palette: [['Action blue', '#3A6B8A text · #D4E5EF ground'], ['Quiet gray', '#6A8595 text · #F0F3F5 ground'], ['Border mist', '#D4DDE3 · #B8C8D2 hover'], ['Disabled wash', '#EDF2F5 ground · #B0C4D0 text'], ['Focus ring', '#7BAAC4 · 2 px · 2 px offset']],
        Interaction: [['Hover', 'Fill deepens one stop · shadow lifts to 8 px'], ['Press', 'Fill deepens two stops · scale(.96)'], ['Disabled', 'Faded fill · no shadow · cursor default'], ['Duration select', 'Tinted fill swap on active segment'], ['Transition', '.25s cubic-bezier(.22,1,.36,1) — slow exhale easing']]
      }
    },
    'buttons-playful.html': {
      title: 'Arcade · LED Icon System', tone: 'Playful · Neumorphic soft panels with a systematic LED pixel icon set — each icon is a distinct, meaningful symbol', week: 'Week 8', back: 'week8.html',
      sections: {
        Arrangement: [['Frame', '580 px · 4 : 3 · centered'], ['Row rhythm', '16 px gap'], ['Rows', 'Actions / Utilities / Options / Difficulty / States'], ['Difficulty group', 'Column · face icon above label · shared container'], ['Hierarchy flow', 'Primary → Secondary → Tertiary → Group → States']],
        'Icon System': [['Sword', '9×9 · amber #FFA726 · New Game'], ['Play ▶', '9×9 · blue #42A5F5 · Continue'], ['Heart', '9×8 · pink #EC407A · Lives'], ['Bag', '9×9 · brown #8D6E63 · Inventory'], ['Crown', '9×8 · gold #FFD54F · Scores'], ['Speaker', '9×7 · green #66BB6A · Sound'], ['? mark', '9×9 · blue #42A5F5 · Rules'], ['Power ⏻', '9×9 · red #EF5350 · Quit'], ['Gear', '9×7 · gray #78909C · Settings'], ['Faces ☺ 😐 😠', 'Green / Amber / Red · Easy / Normal / Hard']],
        Surface: [['Base', '#E0E5EC — unified neumorphic gray'], ['Primary', 'Raised — 5 px dual shadow (dark #B8BEC7 + light #FFF)'], ['Secondary', 'Soft raise — 3 px dual shadow'], ['Tertiary', 'Inset well — inset 2 px dual shadow'], ['Roundness', '14 px — soft, pillow corners'], ['Touch target', '44 px minimum']],
        'LED Rendering': [['Lit pixel', 'SVG circle r=0.34 · icon color · Gaussian glow filter'], ['Dim pixel', 'SVG circle r=0.18 · rgba(120,130,145,0.13) — unlit LED dot'], ['Glow filter', 'feGaussianBlur σ=0.35 + feMerge (blur behind sharp)'], ['Grid', 'Full bounding-box matrix · all positions rendered'], ['Rainbow cascade', 'HSL 0→320° by diagonal · 15 ms stagger per pixel']],
        Interaction: [['Hover', 'Shadow lifts · LED pixels cascade to rainbow with glow'], ['Press', 'Shadow inverts to inset · scale(.97)'], ['Disabled', 'Flat shadow · muted LED color (#90A4AE)'], ['States row', 'Same Play icon · LED color varies per state'], ['Transition', '.2s ease shadows · .3s ease LED fill']]
      }
    },
    'toolbar-amber-crt.html': {
      title: 'Amber CRT Toolbar', tone: 'Serene · Quiet phosphor glow, industrial calm, Alien Romulus-inspired retro-futuristic', week: 'Week 7', back: 'week7.html',
      sections: {
        Layout: [['Page', 'White bg · centered FUI container'], ['Container', '560 px · 4 : 3 · 8 px radius'], ['Grid', '34 px top · 36 px sides · 24 px bottom'], ['Viewport', '2 × 2 panels: Terrain · Heartrate · Biometric · Heading'], ['Scanlines', '2 px / 4 px · 10% opacity']],
        Typography: [['Body font', 'Share Tech Mono'], ['Label font', 'Press Start 2P'], ['Body size', '10 px · 0.05 em'], ['Label size', '5–6 px · 0.08–0.12 em'], ['BPM readout', '20 px mono · glow shadow']],
        Spacing: [['Button height', '24 px (h) · 28 px (v)'], ['Button padding', '0 8 px (h) · 0 (v)'], ['Button min-width', '24 px'], ['Separator', '1 × 14 px (h) · 18 × 1 px (v)']],
        Component: [['Icon size', '13 × 13 px'], ['Border', '1 px solid'], ['Roundness', '0 px (FUI) · 8 px (container)'], ['Corner brackets', '8 × 8 px · 1 px dim']],
        Colors: [['Background', '#0A0A06'], ['Panel', '#111108'], ['Amber', '#C8A030'], ['Amber dim', '#8A6E20'], ['Amber glow', '#E8C848'], ['Border', '#2A2510']],
        States: [['Default', 'Transparent bg · amber text'], ['Hover', 'rgba(200,160,48,.08) · dim border · 8 px glow'], ['Active', 'rgba(200,160,48,.15) · amber border · 12 px glow']]
      }
    },
    'toolbar-green-crt.html': {
      title: 'Green Phosphor Toolbar', tone: 'Mysterious · Mining ship terminal, Commodore 64 pixel grid, low-res monochrome display', week: 'Week 7', back: 'week7.html',
      sections: {
        Layout: [['Page', 'White bg · centered FUI container'], ['Container', '560 px · 4 : 3 · 8 px radius'], ['Grid', '32 px top · 34 px sides · 22 px bottom'], ['Viewport', '2 × 2 dashboard panels'], ['Scanlines', '1 px / 3 px · 10% opacity']],
        Typography: [['Primary font', 'Press Start 2P'], ['Mono font', 'Share Tech Mono'], ['Button size', '9 px pixel · 0.08 em'], ['Label size', '5 px pixel · 0.12 em'], ['Log size', '8 px mono']],
        Spacing: [['Button height', '22 px (h) · 26 px (v)'], ['Button padding', '0 7 px (h) · 0 (v)'], ['Button gap', '0 px (tight)'], ['Separator', '1 × 12 px (h) · 16 × 1 px (v)']],
        Component: [['Icon size', '12 × 12 px'], ['Border', '1 px solid'], ['Roundness', '0 px (FUI) · 8 px (container)'], ['Corner brackets', '7 × 7 px · 1 px dim'], ['Meter track', '5 px high']],
        Colors: [['Background', '#040A06'], ['Panel', '#081208'], ['Green', '#30C860'], ['Green dim', '#1A7838'], ['Green glow', '#50E880'], ['Border', '#0A2A12']],
        States: [['Default', 'Transparent bg · green text'], ['Hover', 'rgba(48,200,96,.06) · dim border · 10 px glow'], ['Active', 'rgba(48,200,96,.12) · green border · 16 px glow']]
      }
    }
  };

  const key = location.pathname.split('/').pop() || 'index.html';
  const spec = specs[key];
  if (!spec) return;

  class DesignSpecs extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      const sectionMarkup = Object.entries(spec.sections).map(([name, rows]) => `
        <section>
          <h3>${name}</h3>
          <dl>${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>
        </section>`).join('');
      root.innerHTML = `
        <style>
          :host { --ink:#171715; --paper:#fff; --muted:#70706b; --line:#e5e5e1; font-family:-apple-system,"SF Pro Text",system-ui,sans-serif; }
          * { box-sizing:border-box; }
          .back,.open,.close { -webkit-tap-highlight-color:transparent; }
          .back { position:fixed; z-index:2147483645; top:18px; left:18px; min-height:42px; display:inline-flex; align-items:center; padding:0 15px; border:1px solid rgba(23,23,21,.13); border-radius:999px; background:rgba(255,255,255,.94); color:var(--ink); box-shadow:0 8px 24px rgba(0,0,0,.1); backdrop-filter:blur(12px); font:650 13px/1 inherit; text-decoration:none; }
          .open { position:fixed; z-index:2147483645; right:18px; bottom:18px; min-width:112px; min-height:44px; padding:0 18px; border:1px solid rgba(255,255,255,.16); border-radius:999px; background:var(--ink); color:#fff; box-shadow:0 10px 28px rgba(0,0,0,.24); font:700 13px/1 inherit; letter-spacing:.01em; cursor:pointer; }
          .back:hover,.open:hover { transform:translateY(-2px); }
          .back:focus-visible,.open:focus-visible,.close:focus-visible { outline:3px solid #4f8cff; outline-offset:3px; }
          dialog { width:min(920px,calc(100vw - 28px)); max-height:min(820px,calc(100vh - 28px)); padding:0; border:0; border-radius:24px; background:var(--paper); color:var(--ink); box-shadow:0 28px 80px rgba(0,0,0,.32); overflow:hidden; }
          dialog::backdrop { background:rgba(13,13,12,.62); backdrop-filter:blur(8px); }
          .panel { max-height:min(820px,calc(100vh - 28px)); overflow:auto; overscroll-behavior:contain; }
          header { position:sticky; top:0; z-index:2; display:flex; align-items:flex-start; gap:24px; padding:28px 30px 22px; border-bottom:1px solid var(--line); background:rgba(255,255,255,.96); backdrop-filter:blur(14px); }
          .kicker { margin:0 0 8px; color:var(--muted); font:700 10px/1.2 "SF Mono",monospace; letter-spacing:.15em; text-transform:uppercase; }
          h2 { margin:0; font-size:30px; line-height:1.05; letter-spacing:-.035em; }
          .tone { margin:8px 0 0; color:var(--muted); font-size:13px; line-height:1.4; }
          .close { margin-left:auto; flex:0 0 auto; width:40px; height:40px; border:1px solid var(--line); border-radius:50%; background:transparent; color:var(--ink); font:400 22px/1 inherit; cursor:pointer; }
          .grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; padding:22px 30px 30px; }
          section { min-width:0; padding:19px; border:1px solid var(--line); border-radius:16px; background:rgba(255,255,255,.38); }
          h3 { margin:0 0 13px; font:750 11px/1.2 "SF Mono",monospace; letter-spacing:.12em; text-transform:uppercase; }
          dl { margin:0; }
          dl div { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.25fr); gap:16px; padding:10px 0; border-top:1px solid var(--line); }
          dt,dd { margin:0; font-size:12.5px; line-height:1.45; }
          dt { color:var(--muted); }
          dd { text-align:right; font-weight:650; font-variant-numeric:tabular-nums; overflow-wrap:anywhere; }
          .note { grid-column:1/-1; margin:0; padding:0 30px 28px; color:var(--muted); font-size:12px; line-height:1.55; }
          @media (max-width:640px) { .grid { grid-template-columns:1fr; padding:16px; } header { padding:22px 18px 18px; } h2 { font-size:25px; } .note { padding:0 18px 22px; } .back { top:12px; left:12px; } .open { right:12px; bottom:12px; } }
          @media (prefers-reduced-motion:reduce) { .back,.open { transition:none; } dialog::backdrop { backdrop-filter:none; } }
        </style>
        <a class="back" href="${spec.back || 'week3.html'}" aria-label="Back to ${spec.week || 'Week 3'}">← ${spec.week || 'Week 3'}</a>
        <button class="open" type="button">View specs</button>
        <dialog aria-labelledby="spec-title">
          <div class="panel">
            <header>
              <div><p class="kicker">${spec.week || 'Week 3'} · Design specification</p><h2 id="spec-title">${spec.title}</h2><p class="tone">${spec.tone}</p></div>
              <button class="close" type="button" aria-label="Close specifications">×</button>
            </header>
            <div class="grid">${sectionMarkup}</div>
            <p class="note">Implementation note: values describe the production CSS at the default desktop artboard. Responsive layouts preserve a minimum 44 × 44 px interactive target where the component permits it. Keyboard focus, semantic roles, accessible names, and reduced-motion preferences should remain supported.</p>
          </div>
        </dialog>`;
      const dialog = root.querySelector('dialog');
      const open = root.querySelector('.open');
      const close = root.querySelector('.close');
      open.addEventListener('click', () => dialog.showModal());
      close.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
      });
    }
  }

  customElements.define('design-specs', DesignSpecs);
  document.body.append(document.createElement('design-specs'));
})();
