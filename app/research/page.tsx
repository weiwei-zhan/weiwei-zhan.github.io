import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Research"
      title="Research"
      intro="Our research advances the understanding and modeling of complex geosystems-hazard-infrastructure interactions by integrating field observations, remote sensing, near-surface geophysics, process-based and data-driven modeling."
    >
      <div className="research-copy">

        <h2>Landslides and Slope Stability</h2>
        <p>
          Our landslide research connects slope processes with hazard assessment
          across local to regional scales. Published work spans coseismic
          landslide inventories, rock-avalanche mobility, landslide dams,
          progressive slope deformation, remote-sensing-based early detection,
          dynamic susceptibility mapping, and uncertainty-aware stability and
          reliability analysis.
        </p>
        <p>
          <a
            className="text-link"
            href="/publications#landslides-and-slope-stability"
          >
            Related publications →
          </a>
        </p>

        <figure className="research-figure research-figure--wide">
          <img
            src="/images/research/landslide-DGB.png"
            alt="Daguangbao landslide research and field investigation"
          />
          <figcaption>
            Landslide investigation across field, remote-sensing, and modeling
            scales.
          </figcaption>
        </figure>

        <h2>Earthquake Ground Motions</h2>
        <p>
          Our earthquake research examines how source, propagation path,
          subsurface geology, topography, and basin structure shape ground
          shaking. Published studies develop geospatial site-amplification
          models, measures of site-response complexity, HVSR- and Vs30-informed
          site terms, basin-effect assessments, and machine-learning ground-motion
          models for spatially variable and nonergodic applications.
        </p>
        <p>
          <a
            className="text-link"
            href="/publications#earthquake-ground-motions"
          >
            Related publications →
          </a>
        </p>

        <h2>Liquefaction Hazard Assessment</h2>
        <p>
          We develop methods to assess liquefaction occurrence and consequences
          before and after earthquakes. Research spans regional susceptibility
          and triggering models, accelerogram-based detection, lateral spreading
          and ground deformation, liquefaction-affected ground motions, and
          uncertainty-aware approaches that support rapid hazard assessment and
          infrastructure decisions.
        </p>
        <p>
          <a
            className="text-link"
            href="/publications#liquefaction-hazard-assessment"
          >
            Related publications →
          </a>
        </p>

        <figure className="research-figure research-figure--wide">
          <img
            src="/images/research/liq-detection-framework.png"
            alt="Framework for earthquake liquefaction detection and assessment"
          />
          <figcaption>
            Observation- and data-driven assessment of liquefaction hazards.
          </figcaption>
        </figure>

        <h2>Coastal Hazards and Resilience</h2>
        <p>
          We examine how hurricanes and other coastal storms reshape beaches,
          dunes, barrier islands, inlets, and adjacent infrastructure. By
          combining repeated LiDAR and satellite observations, field
          reconnaissance, geophysical and geotechnical measurements, and
          process-informed analytics, we seek to explain spatially variable
          impacts and improve coastal-hazard and resilience assessment.
        </p>
        <p>
          <a
            className="text-link"
            href="/publications#coastal-hazards-and-resilience"
          >
            Related publications →
          </a>
        </p>

        <h2>Sinkhole Science and Hazards</h2>
        <p>Coming soon.</p>

        <h2>Ecosystem Sustainability</h2>
        <p>Coming soon.</p>
      </div>
    </PageShell>
  );
}
