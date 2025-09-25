### Hotel Booking (React + Vite + TailwindCSS)

Modern, responsive hotel booking frontend showcasing rooms, details pages, and a booking form. Built with React, Vite, TailwindCSS, and common UI libraries.

---

### Tech Stack

- React 18, Vite
- TailwindCSS, PostCSS, Autoprefixer
- React Router DOM
- React Datepicker, Swiper, React Icons
- Context API for state management

---

### Project Structure

```
HotelBooking--React-Frontend/
├── public/
│   └── logo.png                 # Favicon (browser tab icon)
├── src/
│   ├── assets/                  # Images & SVGs (including logos and slider images)
│   │   └── index.js             # Centralized image & SVG exports
│   ├── components/              # Reusable UI components
│   │   ├── Header.jsx           # Top navigation with logo and links
│   │   ├── Footer.jsx           # Footer with logo and copyright
│   │   ├── HeroSlider.jsx       # Homepage hero image slider (Swiper)
│   │   ├── BookForm.jsx         # Booking form (dates, adults, kids)
│   │   ├── Rooms.jsx            # Rooms grid
│   │   └── Room.jsx             # Single room card
│   ├── constants/               # Static configuration/data
│   │   └── data.js              # Slider data, hotel rules, dropdown items
│   ├── context/                 # Global app state (Context API)
│   │   └── RoomContext.jsx      # Rooms, filters, loading state
│   ├── pages/                   # Page components
│   │   ├── Home.jsx             # Homepage (slider + booking + rooms)
│   │   ├── RoomDetails.jsx      # Single room details view
│   │   ├── About.jsx            # About page
│   │   ├── Services.jsx         # Services page
│   │   └── Contact.jsx          # Contact page
│   ├── style/                   # Styles
│   │   ├── datepicker.css       # Datepicker overrides
│   │   └── index.css            # Tailwind directives
│   ├── App.jsx                  # Router and layout shell
│   └── main.jsx                 # App entry, context provider setup
├── index.html                   # Root HTML template
├── package.json                 # Scripts & deps
├── tailwind.config.cjs          # Tailwind config
└── README.md                    # This file
```

---

### Features

- Responsive layout with TailwindCSS
- Hero image slider (Swiper)
- Booking form with date pickers and guest selectors
- Rooms listing with mock data and filtering
- Room details page with facilities and rules
- Global state via Context API (rooms, filters, loading)
- Client-side routing (Home, Room Details, About, Services, Contact)
- Optional WhatsApp deep link from booking form

---

### How It Works (brief)

- `RoomContext.jsx` loads the mock `roomData` and exposes filters, loading, and actions to components.
- `HeroSlider.jsx` reads slides from `constants/data.js` which references images from `assets/index.js`.
- `App.jsx` defines routes and wraps pages with `Header` and `Footer`.

---

### Run Locally

Prerequisites: Node.js 18+ and npm (or yarn)

1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm run dev
```
Visit `http://localhost:5173`.

3) Build for production (optional)
```bash
npm run build
npm run preview
```

---

### Customization Tips

- Change hero images: replace `src/assets/img/heroSlider/{1,2,3}.jpg` and/or update imports in `src/assets/index.js` and slide config in `src/constants/data.js`.
- Change logos: swap `src/assets/img/logo-dark.svg` and `src/assets/img/logo-white.svg` or update their exports in `src/assets/index.js`.
- Edit footer/header links: `src/components/Header.jsx`, `src/components/Footer.jsx`.
- Update room data and facilities: `src/db/data.js`.
- Styling: adjust Tailwind classes directly in components.

---

### Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

---

### License

For personal/learning use. Adapt as needed for your project.

