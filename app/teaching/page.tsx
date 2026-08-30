import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Teaching" };

const teaching = [
  { institution: "University of Central Florida", unit: "Department of Civil, Environmental, and Construction Engineering", courses: ["Instructor · Geotechnical Engineering I · Fall 2023", "Instructor · Soil Dynamics · Spring 2024"] },
  { institution: "Clemson University", unit: "Glenn Department of Civil Engineering", courses: ["Instructor · CE3211 Soil Mechanics Laboratory · 2019–2020", "Teaching Assistant · CE3210 Geotechnical Engineering · Spring 2020", "Teaching Assistant · CE4240/6240 Earth Slopes and Retaining Structures · Fall 2018–2019", "Teaching Assistant · CE4210/6210 Geotechnical Design · Spring 2019"] },
  { institution: "RESA Center", unit: "Clemson University and American International Group", courses: ["Teaching Assistant · CE8580 Fundamentals of Risk Engineering · Spring 2017", "Teaching Assistant · CE8570 Uncertainty Modeling in Risk Engineering · Spring 2018", "Teaching Assistant · CE8450 Data Mining for System Analytics · Fall 2018"] },
];

export default function TeachingPage() {
  return (
    <PageShell eyebrow="Teaching" title="Teaching" intro="GeoSMART teaching connects geotechnical fundamentals, hazard mechanics, uncertainty, and data-centered methods with real engineering decisions.">
      <div className="teaching-list">
        {teaching.map((item, index) => (
          <section key={item.institution}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><p className="eyebrow">{item.unit}</p><h2>{item.institution}</h2><ul>{item.courses.map((course) => <li key={course}>{course}</li>)}</ul></div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
