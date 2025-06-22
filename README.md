# Spotify 2.0 Clone

A modern, feature-rich Spotify clone built with React.js, featuring music streaming, playlists, search functionality, and enhanced user experience.

## Features

### **Core Music Features**
- **Music Player**: Full-featured audio player with play/pause, previous/next controls
- **Seek Bar**: Interactive progress bar with real-time updates
- **Volume Control**: Adjustable audio levels with visual slider
- **Shuffle & Repeat**: Multiple playback modes (off/all/one)
- **Queue Management**: Sidebar queue with next-up songs

### **User Interface**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Theme**: Modern Spotify-inspired dark interface
- **Smooth Animations**: Hover effects and transitions throughout
- **Grid Layouts**: Spotify-style card grids for albums and songs

### **Navigation & Discovery**
- **Search Functionality**: Real-time search across songs and albums
- **Genre Browsing**: Categorized music by genres
- **Music Library**: All songs in detailed list format
- **Podcasts Section**: Dedicated podcast browsing
- **Recently Played**: Track listening history

### **Enhanced Features**
- **Fullscreen Player**: Immersive full-screen music experience
- **Mini Player**: Compact floating player
- **User Authentication**: Login/signup system with persistent sessions
- **Lyrics Display**: Song lyrics with timing information
- **Personal Library**: User's saved music collection

### **Player Modes**
- **Main Player**: Bottom player bar with all controls
- **Fullscreen Mode**: Large album art with complete controls
- **Mini Player**: Floating compact player in corner

## Live Demo

[View Live Demo](https://your-vercel-deployment-url.vercel.app)

## Tech Stack

- **Frontend**: React.js, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Audio**: HTML5 Audio API
- **Icons & Assets**: Custom SVG icons
- **Deployment**: Vercel

## Installation

1. **Clone the repository**
   ```bash
git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
```

2. **Install dependencies**
   ```bash
npm install
```

3. **Start development server**
   ```bash
npm run dev
```

4. **Open in browser**
   ```
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Player.jsx      # Main audio player
│   ├── Display.jsx     # Main content area
│   ├── Sidebar.jsx     # Navigation sidebar
│   ├── Queue.jsx       # Music queue
│   ├── Search.jsx      # Search functionality
│   ├── Login.jsx       # Authentication
│   └── ...
├── context/            # React Context providers
│   ├── PlayerContext.jsx
│   └── AuthContext.jsx
├── assets/             # Images, icons, audio files
└── App.jsx            # Main app component
```


### **Deployment on Vercel**

1. **Push to GitHub**
   ```bash
git add .
   git commit -m "Ready for deployment"
   git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Star this repository if you found it helpful!**