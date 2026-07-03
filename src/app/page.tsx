import { Cta } from "./_components/cta";
import { FeaturesGate } from "./_components/features-box";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesGate />
      <Cta />
    </main>
  );
}
