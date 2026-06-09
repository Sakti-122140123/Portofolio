# Sakti Mujahid Imani — Personal Portfolio

> Informatics student bridging web development, documentation, and project coordination.

A professional portfolio website built to showcase my background in web-based information systems, project documentation, and cross-functional coordination — targeting opportunities in project management support, IT internships, and junior developer roles.

## ✨ Live Demo

🔗 **[portofolio-sakti-three.vercel.app](https://portofolio-sakti-three.vercel.app)**

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| Framer Motion | Smooth scroll animations |
| Lucide React | Icons |

## 📂 Project Structure

```
src/
├── components/
│   ├── icons/
│   │   └── SocialIcons.jsx       # Shared brand icons (GitHub, LinkedIn)
│   ├── layout/
│   │   ├── Navbar.jsx            # Sticky navigation bar
│   │   └── Footer.jsx            # Page footer
│   └── sections/
│       ├── Hero.jsx              # Hero / landing section
│       ├── About.jsx             # About me section
│       ├── RoleFit.jsx           # Why Me — targeted for DBS PM Intern
│       ├── Skills.jsx            # Skills by category
│       ├── Projects.jsx          # Featured projects with expandable cards
│       ├── Experience.jsx        # Work & org experience timeline
│       ├── Education.jsx         # Academic background
│       ├── Certificates.jsx      # Certificates & programs
│       └── Contact.jsx           # Contact CTA section
├── data/
│   ├── profile.js                # Personal info, headline, about, links
│   ├── projects.js               # Featured projects data
│   ├── experience.js             # Experience entries
│   └── skills.js                 # Skills categories & certificates
├── App.jsx                       # Main app component
├── main.jsx                      # Entry point
└── index.css                     # Design system & Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sakti-122140123/Portofolio.git

# Navigate to project directory
cd Portofolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173/`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📝 Customization

All content data is stored in `src/data/` for easy editing:

- **Profile & About**: `src/data/profile.js`
- **Projects**: `src/data/projects.js`
- **Experience**: `src/data/experience.js`
- **Skills & Certificates**: `src/data/skills.js`

## 📬 Contact

- **Email**: saktimujahid.9b@gmail.com
- **LinkedIn**: [linkedin.com/in/saktimujahid](https://www.linkedin.com/in/saktimujahid/)
- **GitHub**: [github.com/Sakti-122140123](https://github.com/Sakti-122140123)

---

Built with React & Tailwind CSS.
