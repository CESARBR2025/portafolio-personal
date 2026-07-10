import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { timelineData } from "@/lib/data";

export default function Journey() {
  return (
    <section id="trayectoria" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Trayectoria"
          subtitle="Mi camino profesional, logros académicos y experiencia colaborativa."
        />

        <div className="max-w-2xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
