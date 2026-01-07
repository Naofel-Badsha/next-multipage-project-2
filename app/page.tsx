import About from "./_Components/About";
import Banner from "./_Components/Banner";
import IndentifyMarket from "./_Components/IndentifyMarket";
import RoomQuality from "./_Components/RoomQuality";
import TheFirstStep from "./_Components/TheFirstStep";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <RoomQuality />
      <IndentifyMarket />
      <TheFirstStep />
    </div>
  );
}
