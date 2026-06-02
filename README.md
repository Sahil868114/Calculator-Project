# Calculate Me! 🧮

A modern, secure, and responsive web calculator with advanced features designed for everyday use.

## ✨ Features

### Core Features
- ✅ **Safe Math Engine** - No eval(), secure calculation parser
- ✅ **Keyboard Support** - Full keyboard integration (numbers, operators, Enter, Backspace)
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Dark/Light Theme** - Toggle between themes (auto-saved preference)
- ✅ **Calculation History** - View last 10 calculations with click-to-use
- ✅ **Copy Result** - One-click copy to clipboard
- ✅ **Accessibility** - ARIA labels and semantic HTML

### Operations
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷)
- Percentage (%)
- Decimal support

## 🚀 Quick Start

### No Installation Needed
Simply open `index.html` in any modern web browser.

### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd Calculator-Project

# Open in browser
open index.html
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter digits |
| `.` | Decimal point |
| `+`, `-`, `*`, `/` | Operations |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |
| `C` | Clear all |
| `T` | Toggle theme |

## 🎨 Theme Toggle

Click the moon/sun icon in the top-right corner to switch between:
- **Light Mode** (default on first visit)
- **Dark Mode** (easier on the eyes)

Your theme preference is automatically saved in local storage.

## 📱 Responsive Features

- **Mobile-Optimized** - Larger touch targets on smaller screens
- **Flexible Layout** - Adapts to any screen size
- **Modern UI** - Smooth animations and transitions
- **Touch-Friendly** - Easy to use on phones and tablets

## 🔒 Security

- ✅ Replaced dangerous `eval()` with safe math parser
- ✅ Input validation to prevent injection attacks
- ✅ All calculations performed client-side
- ✅ No data sent to external servers

## 💾 Data Storage

- **History** - Saved in browser's LocalStorage (last 10 calculations)
- **Theme** - Saved preference persists across sessions
- **No Cloud Sync** - All data stays on your device

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid
- **Vanilla JavaScript** - No external dependencies
- **LocalStorage API** - For persistence
- **Clipboard API** - For copy functionality

## 📂 Project Structure

```
Calculator-Project/
├── index.html      # Main HTML structure
├── script.js       # Calculator logic (SafeCalculator class)
├── style.css       # Modern styling with themes
├── utils.css       # Utility classes
└── README.md       # This file
```

## 🎯 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

Potential features for v2.0:
- Scientific calculator mode (sin, cos, tan, sqrt, etc.)
- Unit converter
- Currency converter
- Graph mode for expressions
- Voice input
- PWA support for offline use

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for fast, secure calculations.

---

**Enjoy using Calculate Me!** For issues or suggestions, please open an issue on GitHub.
