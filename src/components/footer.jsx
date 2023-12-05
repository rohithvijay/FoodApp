const AppFooter = () => {
  const copyRightYear = new Date().getFullYear();
  return (
    <nav className="navbar navbar-expand-sm app-theme footer">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav header-menu">
          <li className="nav-item">
            <a className="nav-link" href="#">
              CopyRight &copy; {copyRightYear} . All Rights Reserved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppFooter;
