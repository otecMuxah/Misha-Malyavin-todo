import './footer.scss';
import { Navigation } from '../Navigation';
import { GetGeolocation } from '../GetGeolocation';

const navItems = ['Home', 'Gallery', 'About', 'Home'];

export const Footer = () =>
  (
    <footer className="footer">
      <Navigation nav={navItems} />
      <p>footer</p>
      <GetGeolocation />
    </footer>
  );
