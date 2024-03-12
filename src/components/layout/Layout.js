import Header from "../pages/Home/Header";
import Footer from "../pages/Home/Footer";
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>

    </>
  );
};

export default Layout;
