import { useAuth } from '../../hooks/UseAuth';
import {Link} from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          Phonebook
        </Link>
      )}
    </nav>
  );
};

export default Navigation;