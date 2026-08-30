import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Research"
      title="Research"
      intro="Our overarching goal is to understand how Earth systems respond to earthquakes, storms, climate extremes, and human activity—and to turn that understanding into better engineering decisions."
    >
      <div className="research-copy">
        <p>
          We combine geospatial sensing, geophysics, physical modeling, and data analytics to observe change across scales, explain the processes that produce hazards, and quantify uncertainty in prediction and risk assessment. Natural hazards form the scientific foundation of GeoSMART, while the same capabilities are increasingly applied to infrastructure, subsurface systems, and GeoResources.
        </p>

        <p><strong>Landslides and slope systems.</strong> We study earthquake- and rainfall-induced landslides through event mapping, initiation and mobility modeling, field monitoring, and long-term risk assessment. Particular interests include multimodal satellite mapping, event-to-event model generalization, cascading mountain hazards, and the interaction between slope failure and infrastructure.</p>

        <figure className="research-figure research-figure--left">
          <img src="/images/research/landslide-DGB.png" alt="Daguangbao landslide research and field investigation" />
          <figcaption>Landslide investigation across field, remote-sensing, and modeling scales.</figcaption>
        </figure>

        <p><strong>Earthquake ground motion, site response, and liquefaction.</strong> Our work links observations, empirical models, numerical simulation, and machine learning to characterize spatially variable shaking and soil response. We are interested in nonergodic ground-motion modeling, physics-guided learning, uncertainty-aware site response, and regional detection of liquefaction effects.</p>

        <p><strong>Sinkholes, subsidence, and concealed ground instability.</strong> We integrate geophysical sensing, remote observation, spatial modeling, and geotechnical assessment to identify and characterize evolving subsurface hazards. Current directions include GPR, InSAR, UAV-based sensing, data fusion, and defensible validation under incomplete or uncertain ground truth.</p>

        <figure className="research-figure research-figure--right">
          <img src="/images/gallery/egx-tunnel-scan.jpg" alt="Subsurface geophysical sensing demonstration" />
          <figcaption>Geophysical sensing for concealed subsurface and infrastructure conditions.</figcaption>
        </figure>

        <p><strong>Coastal and storm hazards.</strong> We examine storm-driven erosion, changing coastal morphology, compound hazards, and spatially variable impacts on communities and transportation systems. Repeated LiDAR, satellite observations, field data, and process-informed models help explain why neighboring coastal segments can experience very different outcomes during the same storm.</p>

        <p><strong>Multimodal Earth sensing.</strong> We use optical and radar satellites, InSAR, LiDAR, UAVs, GPR, seismic observations, and distributed fiber sensing. A central challenge is to determine what each observation truly constrains, how different measurements can be combined, and how sensing capability can be translated into reliable scientific or engineering information.</p>

        <figure className="research-figure research-figure--wide">
          <img src="/images/gallery/gbsar-slope.jpg" alt="Ground-based remote sensing equipment deployed at a mountain slope" />
          <figcaption>Field sensing and monitoring of active Earth systems.</figcaption>
        </figure>

        <p><strong>GeoAI and physical modeling.</strong> We develop machine-learning, statistical, and numerical approaches that remain interpretable, uncertainty-aware, and grounded in physical process. Research themes include multimodal fusion, physics-guided learning, spatial validation, transfer across regions and events, and models that support decisions rather than only retrospective classification.</p>

        <p><strong>Infrastructure and GeoResources.</strong> Emerging GeoSMART work transfers this sensing–modeling framework to infrastructure health, smart cities, buried utilities, subsurface characterization, environmental monitoring, and critical-mineral prospectivity. These applications share a common goal: extracting actionable Earth information from incomplete, multiscale observations.</p>

        <h2>… and more.</h2>
      </div>
    </PageShell>
  );
}
