
export default function Navigation(props){

    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/user">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">QL chuyến xe</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Lịch sử đặt chuyến
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/user/Pay" >
            <i className="fas fa-fw fa-table" />
            <span>Chuyến đã hoàn thành</span>
          </a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Đặt xe
        </div>
        {/* Nav Item - Bus */}
        <li className={ props.toggleNav.bus ? ("nav-item active") : ("nav-item")}>
          <a className="nav-link" href="/user/booking">
            <i className="fas fa-fw fa-bus" />
            <span>Đặt chuyến mới</span></a>
        </li>
        <li className={ props.toggleNav.bus ? ("nav-item active") : ("nav-item")}>
          <a className="nav-link" href="/user/checkout">
            <i className="fas fa-fw fa-bus" />
            <span>Thanh toán</span></a>
        </li>
        <li className={ props.toggleNav.bus ? ("nav-item active") : ("nav-item")}>
          <a className="nav-link" href="/user/confirm">
            <i className="fas fa-fw fa-bus" />
            <span>xác nhận</span></a>
        </li>
      </ul>
    );
}