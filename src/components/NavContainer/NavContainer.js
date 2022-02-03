function NavContainer(props) {
  if (props.mobileWidth) {
    return <div className="navigation__container">{props.children}</div>;
  }
  return props.children;
}

export default NavContainer;