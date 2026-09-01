import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { linkedInActivityUrl } from "@/content/site-data";

export const metadata: Metadata = { title: "News" };

const news = [
  {date: "2026/08/25",
    category: "Conference Presentation",
    tone: "conference",
    summary: "Bassam Nasir attended the NSF Near-Surface Geophysics Community Input Workshop at Albuquerque, New Mexico.",
  },
  {date: "2026/08/12",
    category: "Conference Presentation",
    tone: "conference",
    summary: "Bassam Nasir presented his work on LiDAR-based coastal erosion mapping at the 2026 IGARSS conference in Washington, DC.",
  },
   {date: "2026/03/27",
    category: "Conference Presentation",
    tone: "conference",
    summary: "Bassam Nasir presented his research and won the Judges’ Choice Award at UCF's Student Scholar Symposium.",
  },
  {
    date: "2025/05/17",
    category: "Invited Talk",
    tone: "talk",
    summary: "Dr. Weiwei Zhan presented a geospatial framework bridging site- and regional-scale seismic site-response assessment at the 5th Badong International Geohazards Symposium.",
  },
  {
    date: "2025/03/24",
    category: "Student Achievement",
    tone: "achievement",
    summary: "Varun Singh’s presented his poster on liquefaction deformation modeling and won theJudges’ Choice award at UCF's Student Scholar Symposium.",
  },
] as const;

export default function NewsPage() {
  return (
    <PageShell eyebrow="News" title="News" intro="Research updates, presentations, fieldwork, student achievements, and opportunities from GeoSMART@UCF.">
      <div className="news-list">
        {news.map((item) => (
          <article className="news-item" key={`${item.date}-${item.category}`}>
            <time dateTime={item.date.replaceAll("/", "-")}>[{item.date}]</time>
            <div>
              <span className={`news-tag news-tag--${item.tone}`}>{item.category}</span>
              <p>{item.summary}</p>
              <a href={linkedInActivityUrl} target="_blank" rel="noreferrer">Related activity <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
      <section className="news-follow">
        <h2>Follow ongoing activity</h2>
        <p>LinkedIn is the lab’s live stream for new research, fieldwork, publications, presentations, and opportunities.</p>
        <a className="button" href={linkedInActivityUrl} target="_blank" rel="noreferrer">View LinkedIn Activity ↗</a>
      </section>
    </PageShell>
  );
}
