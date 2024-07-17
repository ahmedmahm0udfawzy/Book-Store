import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import Slider from "../../Components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <LatestProducts title="Lateset Books" />
      <LatestProducts title=" Books" />
    </div>
  );
}
