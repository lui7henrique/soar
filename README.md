# Soar Task

- **Form Handling**: Form validation using `react-hook-form` and `zod`.
- **Charts**: Interactive data visualizations with `recharts`.
- **Responsive Design**: Built with `tailwindcss` to ensure adaptability across devices.
- **Routing**: Navigation handled via `react-router-dom`.

## Future Enhancements

If this were a real-world application, the following improvements would be considered:

- **State Management**: Integrate `react-query` for API requests and `Context API` for authentication.
- **Testing**: Add unit tests with `vitest`, integration tests, and E2E tests with `playwright`.
- **Design System**: Implement a consolidated and tested design system.
- **Loading States**: Refine loading indicators for a better user experience.
- **Review Design**: Remove arbitrary values and align closely with the Figma designs.

## Requirements

- **Node.js**: >= 16.x
- **Package Manager**: pnpm

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd soar
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Application

#### Development Server:

```bash
pnpm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

#### Build for Production:

```bash
pnpm run build
```

#### Preview Production Build:

```bash
pnpm run preview
```

## Technical Stack

- **Framework**: React 18
- **Styling**: TailwindCSS
- **Form Validation**: react-hook-form, zod
- **Charts**: Recharts
- **Routing**: react-router-dom
- **Carousel**: Embla-carousel-react

## Development Notes

This application uses `vite` for its fast build process and development environment. TailwindCSS handles styling, and `react-hook-form` simplifies form validation. Ensure your Node.js version is compatible to avoid runtime issues.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `preview`: Previews the production build.
