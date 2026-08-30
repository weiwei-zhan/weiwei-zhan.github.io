import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <PageShell eyebrow="Gallery" title="Gallery" intro="Explore selected moments from field investigations, research visits, conferences, seminars, teaching, and collaboration.">
      <GalleryGrid />
    </PageShell>
  );
}
