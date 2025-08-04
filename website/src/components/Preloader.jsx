// components/Preloader.tsx
import Logo from '../assets/logos/KlyftigFirst.svg';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-klyftig-dark">
      <img
        src={Logo}
        alt="Loading..."
        className="w-15 h-15 animate-glow animate-bounce"
      />
    </div>
  );
};

export default Preloader;
