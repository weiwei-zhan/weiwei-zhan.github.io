import Link from "next/link";
import { linkedInActivityUrl, scholarUrl } from "@/content/site-data";

const missions = [
  {
    title: "Sensing",
    description: "Observe and monitor surface and subsurface changes using multidisplinary technologies.",
    tone: "blue",
  },
  {
    title: "Understanding",
    description: "Identify the physical processes and controlling patterns of extreme changes.",
    tone: "green",
  },
  {
    title: "Predicting",
    description: "Combine physics, data, and AI to foresee unseen future.",
    tone: "purple",
  },
  {
    title: "Translating",
    description: "Translate observations and models into actionable decision-support.",
    tone: "gold",
  },
] as const;

export default function Home() {
  return (
    <main className="classic-container home-layout">
      <section className="home-main">
        <p className="home-kicker">GeoSystems Intelligence Lab</p>
        <h1>Welcome to GeoSMART@UCF Lab!</h1>
        <p className="home-lead">
          We are an interdisciplinary research group at the <strong>University of Central Florida</strong> advancing Geosystems Sensing, Modeling, Analytics, Reliability, and Translation to address emerging resilience and sustainability challenges.
        </p>

        <figure className="mission-figure">
          <img src="/images/mission/GeoSMART-Missions.png" alt="GeoSMART mission: observe, understand, predict, and support decisions" />
          <figcaption>Our work moves from multimodal observation to actionable decision-support.</figcaption>
        </figure>

        <div className="mission-list" aria-label="GeoSMART mission areas">
          {missions.map((mission, index) => (
            <article className={`mission-item mission-item--${mission.tone}`} key={mission.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{mission.title}</h2>
                <p>{mission.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="home-sidebar" aria-label="GeoSMART updates">
        <section>
          <p className="eyebrow">Latest news</p>
          <h2>Research in motion</h2>
          <p><strong>[2025/06/04] Conference Presentation</strong></p>
          <p>GeoSMART shared recent work on geohazard sensing, modeling, and AI with the research community.</p>
          <Link className="text-link" href="/news">Read lab news →</Link>
        </section>

        <section>
          <p className="eyebrow">Research themes</p>
          <ul>
            <li>Natural Hazards Engineering</li>
            <li>Remote Sensing and GeoAI</li>
            <li>Near-Surface Geophysics</li>
            <li>Geomechanics</li>
          </ul>
          <Link className="text-link" href="/research">Explore research →</Link>
        </section>

        <section className="home-pi">
          <img src="/images/profile.JPG" alt="Weiwei Zhan" />
          <div>
            <p className="eyebrow">Principal investigator</p>
            <h2>Weiwei Zhan, Ph.D.</h2>
            <p><strong>Assistant Professor</strong><br />Civil, Environmental, and Construction Engineering<br />University of Central Florida</p>
            <p>Director of GeoSMART@UCF</p>
            <div className="home-pi__links">
              <a href="mailto:weiwei.zhan@ucf.edu">Email</a>
              <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar ↗</a>
              <a href={linkedInActivityUrl} target="_blank" rel="noreferrer">LinkedIn Activity ↗</a>
            </div>
          </div>
        </section>
      </aside>
    </main>
  );
}
