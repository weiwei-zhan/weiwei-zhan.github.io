import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ResourcesDirectory } from "@/components/resources-directory";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <PageShell eyebrow="Resources" title="Resources" intro="A focused collection of admissions information, undergraduate research opportunities, educational materials, and research tools useful to current and prospective students.">
      <ResourcesDirectory />
    </PageShell>
  );
}
