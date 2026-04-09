import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const lenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
