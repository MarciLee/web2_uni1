import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@/styles/globals.css";
import SidebarMenu from "@/components/SidebarMenu";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SidebarMenu /> {}
      <Component {...pageProps} /> {}
    </>
  );
}
