import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components-v1/layout/Header";
import { Footer } from "@/components-v1/layout/Footer";
import { CourseHero } from "@/components-v1/course/CourseHero";
import { CourseStructure } from "@/components-v1/course/CourseStructure";
import { CourseVideos } from "@/components-v1/course/CourseVideos";
import { CourseCertificationPath } from "@/components-v1/course/CourseCertificationPath";
import { CourseAxes } from "@/components-v1/course/CourseAxes";
import { CourseInstructor } from "@/components-v1/course/CourseInstructor";
import { CourseAudience } from "@/components-v1/course/CourseAudience";
import { CourseOutcomes } from "@/components-v1/course/CourseOutcomes";
import { CourseSyllabus } from "@/components-v1/course/CourseSyllabus";
import { CoursePricing } from "@/components-v1/course/CoursePricing";
import { CourseFaq } from "@/components-v1/course/CourseFaq";
import { courses } from "@/data/courses";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/v1/courses/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.subtitle,
    openGraph: {
      title: `${course.title} | המרכז הרב-תחומי להכשרות Ai`,
      description: course.subtitle,
      locale: "he_IL",
      type: "article",
    },
  };
}

export default async function CoursePage(props: PageProps<"/v1/courses/[slug]">) {
  const { slug } = await props.params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <CourseHero course={course} />
        <CourseStructure course={course} />
        <CourseVideos course={course} />
        <CourseCertificationPath course={course} />
        <CourseAxes course={course} />
        <CourseInstructor course={course} />
        <CourseAudience course={course} />
        <CourseOutcomes course={course} />
        <CourseSyllabus course={course} />
        <CoursePricing course={course} />
        <CourseFaq course={course} />
      </main>
      <Footer />
    </>
  );
}
