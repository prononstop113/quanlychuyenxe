import ava from '../img/undraw_profile.svg'

export default function User() {
  return (
    <ul className="navbar-nav ml-auto">
      <div className="topbar-divider d-none d-sm-block" />
      
      <li className="nav-item dropdown no-arrow">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
            Douglas McGee
          </span>
          <img className="img-profile rounded-circle" src={ava} alt='ava' />
        </a>
      </li>
    </ul>
  );
}
