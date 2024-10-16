
const LefpBar = () => {
  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Admin </div>
</a>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <a className="nav-link" href="/admin">
        <i className="fas bi bi-caret-right-fill"></i>
        <span>Dashboard</span></a>
</li>

<hr className="sidebar-divider"/>
<div className="sidebar-heading">
Product list
</div>

<li className="nav-item">
<a className="nav-link" href="/admin/list">
        <i className="fas fa-fw fa-table"></i>
        <span>List</span>
        </a>
</li>
<li className="nav-item">
    <a className="nav-link" href="charts.html">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>User</span></a>
</li>

<li className="nav-item">
    <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table"></i>
        <span>Comment</span></a>
</li>
</ul>
    </div>
  )
}

export default LefpBar