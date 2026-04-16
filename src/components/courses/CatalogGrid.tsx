import { Reveal } from "@/components/ui/Reveal";
import type { Course } from "@/data/courses";
import { CourseCard } from "./CourseCard";

type CatalogGridProps = {
  courses: Course[];
};

export function CatalogGrid({ courses }: CatalogGridProps) {
  return (
    <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <Reveal key={course.id} delay={(i % 6) * 0.06} as="li">
          <CourseCard course={course} />
        </Reveal>
      ))}
    </ul>
  );
}
