const pages = {
  home: { path: "/", name: "HOME", toComponent: "Home" },
  about: { path: "/about", name: "ABOUT", toComponent: "PageNotFound" },
  menu: { path: "/menu", name: "MENU", toComponent: "PageNotFound" },
  reservations: {
    path: "/reservations",
    name: "RESERVATIONS",
    toComponent: "Home",
  },
  orderOnline: {
    path: "/orderOnline",
    name: "ORDER ONLINE",
    toComponent: "PageNotFound",
  },
  login: { path: "/login", name: "LOGIN", toComponent: "PageNotFound" },
};

export default pages;
