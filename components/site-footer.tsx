import Link from "next/link";
import { linkedInActivityUrl, scholarUrl } from "@/content/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link className="footer-brand" href="/" aria-label="GeoSMART at UCF home">GeoSMART@UCF</Link>
          <p>GeoSystems Intelligence Lab · Earth intelligence for natural hazards and resilient systems.</p>
        </div>
        <div className="footer-affiliation">
          <strong>University of Central Florida</strong>
          <span>Department of Civil, Environmental, and Construction Engineering</span>
          <span>Orlando, Florida</span>
        </div>
        <nav className="footer-links" aria-label="External links">
          <a href="mailto:weiwei.zhan@ucf.edu">Email</a>
          <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar ↗</a>
          <a href={linkedInActivityUrl} target="_blank" rel="noreferrer">LinkedIn Activity ↗</a>
          <a href="https://orcid.org/0000-0002-9266-4466" target="_blank" rel="noreferrer">ORCID ↗</a>
        </nav>
      </div>
      <div className="site-footer__copyright">© {new Date().getFullYear()} GeoSMART@UCF · Weiwei Zhan · University of Central Florida</div>
    </footer>
  );
}
