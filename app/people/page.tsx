import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { alumniGroups, currentPeopleGroups, linkedInActivityUrl, scholarUrl } from "@/content/site-data";

export const metadata: Metadata = { title: "People" };

type Person = {
  name: string;
  role: string;
  period: string;
  focus: string;
  image?: string;
};

function PersonCard({ person }: { person: Person }) {
  const initials = person.name.split(" ").map((part) => part[0]).slice(0, 2).join("");
  return (
    <article className="person-card">
      {person.image ? (
        <img className="person-card__photo" src={person.image} alt={person.name} />
      ) : (
        <div className="person-card__monogram" aria-label={`Photo coming soon for ${person.name}`}>{initials}</div>
      )}
      <div>
        <p className="person-card__period">{person.period}</p>
        <h3>{person.name}</h3>
        <p className="person-card__role">{person.role}</p>
        <p>{person.focus}</p>
      </div>
    </article>
  );
}

function PeopleSection({ title, people }: { title: string; people: readonly Person[] }) {
  return (
    <section className="people-group">
      <header><h2>{title}</h2></header>
      <div className="people-grid">
        {people.map((person) => <PersonCard person={person} key={person.name} />)}
      </div>
    </section>
  );
}

export default function PeoplePage() {
  return (
    <PageShell eyebrow="People" title="People" intro="GeoSMART@UCF brings together civil engineers, geologists, geophysicists, remote-sensing scientists, and computing researchers across field observation, modeling, and data science.">
      <section className="pi-card">
        <img src="/images/profile.JPG" alt="Weiwei Zhan" />
        <div>
          <p className="eyebrow">Principal investigator · 2023.08–Present</p>
          <h2>Weiwei Zhan, Ph.D.</h2>
          <p className="pi-card__role">Assistant Professor · Director, GeoSMART@UCF</p>
          <p>Dr. Zhan develops interdisciplinary approaches that combine remote sensing, geophysical sensing, GeoAI, and geomechanics to study natural hazards and their impacts on infrastructure and environmental systems.</p>
          <div className="inline-links">
            <a href="mailto:weiwei.zhan@ucf.edu">Email</a>
            <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar ↗</a>
            <a href={linkedInActivityUrl} target="_blank" rel="noreferrer">LinkedIn Activity ↗</a>
          </div>
        </div>
      </section>

      <div className="roster-heading"><p className="eyebrow">Current team</p></div>
      {currentPeopleGroups.map((group) => <PeopleSection title={group.title} people={group.people} key={group.title} />)}

      <div className="roster-heading roster-heading--alumni"><p className="eyebrow">Former members</p><h2>Alumni</h2></div>
      {alumniGroups.map((group) => <PeopleSection title={group.title} people={group.people} key={group.title} />)}

      <section className="join-panel">
        <div><p className="eyebrow">Join the team</p><h2>Bring your perspective to GeoSMART@UCF.</h2><p>Research opportunities are shared through News and LinkedIn Activity.</p></div>
        <a className="button button--dark" href="/news">View News</a>
      </section>
    </PageShell>
  );
}
