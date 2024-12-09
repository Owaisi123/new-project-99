
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import HotProduct from "./components/hotProducts";
import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
