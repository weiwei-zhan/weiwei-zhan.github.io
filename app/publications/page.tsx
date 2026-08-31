import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { publicationItems } from "@/content/publications";
import { scholarUrl } from "@/content/site-data";

export const metadata: Metadata = { title: "Publications" };

const topicOrder = [
  "Landslides & slope systems",
  "Earthquake Ground Motions and Site Response",
  "Soil Liquefaction Assessment",
  "Coastal Hazards Reconnaissance and Modeling",
  "Remote Sensing and GeoAI",
  "Near-Surface Geophysics",
] as const;

function topicId(topic: string) {
  return topic.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function PublicationsPage() {
  return (
    <PageShell eyebrow="Publications" title="Publications" intro="Selected journal articles, conference papers, technical reports, and open datasets grouped by GeoSMART research topic.">
      <section className="publication-note">
        <p>Full list of publications see <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar ↗</a>.</p>
        <p className="publication-legend"><strong>Author notation:</strong> * corresponding author · # graduate student · + undergraduate student · x postdoc · o student or postdoc outside UCF</p>
      </section>

      <nav className="topic-nav" aria-label="Publication topics">
        {topicOrder.map((topic) => <a href={`#${topicId(topic)}`} key={topic}>{topic}</a>)}
      </nav>

      {topicOrder.map((topic) => {
        const items = publicationItems.filter((item) => item.topic === topic);
        return (
          <section className="publication-group" id={topicId(topic)} key={topic}>
            <header>
              <h2>{topic}</h2>
              <span>{items.length} items</span>
            </header>
            <ol className="publication-list">
              {items.map((item, index) => (
                <li key={`${item.text}-${index}`}>
                  <div className="publication-meta"><span>{item.year}</span><span>{item.type}</span></div>
                  <p>{item.text}</p>
                  {item.href ? <a className="publication-link" href={item.href} target="_blank" rel="noreferrer" aria-label="Open publication link"><ExternalLink aria-hidden="true" /></a> : null}
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </PageShell>
  );
}
