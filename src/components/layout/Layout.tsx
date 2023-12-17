import Navbar from "../navbar/Navbar";

interface I_Props {
  children: React.ReactNode;
}

const Layout = ({ children }: I_Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
