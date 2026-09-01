import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { publicationItems } from "@/content/publications";
import { scholarUrl } from "@/content/site-data";

export const metadata: Metadata = { title: "Publications" };

const topicOrder = [
  "Landslides and Slope Stability",
  "Earthquake Ground Motions",
  "Liquefaction Hazard Assessment",
  "Coastal Hazards and Resilience",
  "Sinkhole Science and Hazards",
  "Ecosystem Sustainability",
] as const;

type ResearchTopic = (typeof topicOrder)[number];
type PublicationItem = (typeof publicationItems)[number];

function topicId(topic: string) {
  return topic
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function alignedTopic(item: PublicationItem): ResearchTopic | null {
  if (topicOrder.includes(item.topic as ResearchTopic)) {
    return item.topic as ResearchTopic;
  }

  const text = item.text.toLowerCase();

  if (item.topic === "Landslides & slope systems") {
    return "Landslides and Slope Stability";
  }

  if (item.topic === "Coastal hazards & infrastructure") {
    return "Coastal Hazards and Resilience";
  }

  if (item.topic === "Subsurface & infrastructure systems") {
    return text.includes("sinkhole") ? "Sinkhole Science and Hazards" : null;
  }

  if (item.topic === "GeoAI, sensing & geospatial methods") {
    if (text.includes("aquatic vegetation") || text.includes("phosphogypsum")) {
      return "Ecosystem Sustainability";
    }
    if (text.includes("granular flow")) {
      return "Landslides and Slope Stability";
    }
    if (text.includes("basin effects")) {
      return "Earthquake Ground Motions";
    }
    if (text.includes("natural hazard modeling")) {
      return "Liquefaction Hazard Assessment";
    }
    return null;
  }

  if (item.topic === "Earthquake engineering & ground failure") {
    if (text.includes("nonlinear site response")) {
      return "Earthquake Ground Motions";
    }
    if (
      text.includes("liquefaction") ||
      text.includes("lateral spreading") ||
      text.includes("lateral displacement") ||
      text.includes("ground failure models")
    ) {
      return "Liquefaction Hazard Assessment";
    }
    return "Earthquake Ground Motions";
  }

  return null;
}

export default function PublicationsPage() {
  const alignedItems = publicationItems
    .map((item) => ({ ...item, alignedTopic: alignedTopic(item) }))
    .filter(
      (item): item is typeof item & { alignedTopic: ResearchTopic } =>
        item.alignedTopic !== null,
    );
  const visibleTopics = topicOrder.filter((topic) =>
    alignedItems.some((item) => item.alignedTopic === topic),
  );

  return (
    <PageShell
      eyebrow="Publications"
      title="Publications"
      intro="Selected journal articles, conference papers, technical reports, and open datasets grouped by GeoSMART research topic."
    >
      <section className="publication-note">
        <p>
          For the full publication list, see{" "}
          <a href={scholarUrl} target="_blank" rel="noreferrer">
            Google Scholar ↗
          </a>
          .
        </p>
        <p className="publication-legend">
          <strong>Author notation:</strong> * corresponding author · # graduate
          student · + undergraduate student · x postdoc · o student or postdoc
          outside UCF
        </p>
      </section>

      <nav className="topic-nav" aria-label="Publication topics">
        {visibleTopics.map((topic) => (
          <a href={`#${topicId(topic)}`} key={topic}>
            {topic}
          </a>
        ))}
      </nav>

      {visibleTopics.map((topic) => {
        const items = alignedItems.filter(
          (item) => item.alignedTopic === topic,
        );

        return (
          <section className="publication-group" id={topicId(topic)} key={topic}>
            <header>
              <h2>{topic}</h2>
              <span>{items.length} items</span>
            </header>
            <ol className="publication-list">
              {items.map((item, index) => (
                <li key={`${item.text}-${index}`}>
                  <div className="publication-meta">
                    <span>{item.year}</span>
                    <span>{item.type}</span>
                  </div>
                  <p>{item.text}</p>
                  {item.href ? (
                    <a
                      className="publication-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open publication link"
                    >
                      <ExternalLink aria-hidden="true" />
                    </a>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </PageShell>
  );
}
