import { FirstSection } from "./first-section";
import { SecondSection } from "./second-section";
import { ThirdSection } from "./third-section";
import { ContactSection } from "./contact-section";


export function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ContactSection />
    </div>
  );
}