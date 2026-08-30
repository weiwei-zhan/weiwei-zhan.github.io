export const scholarUrl =
  "https://scholar.google.com/citations?user=4qUWQVAAAAAJ&hl=en";

export const linkedInActivityUrl =
  "https://www.linkedin.com/in/weiwei-zhan-ph-d-5481541b6/recent-activity/all/";

export const navigation = [
  { label: "Research", href: "/research" },
  { label: "People", href: "/people" },
  { label: "Publications", href: "/publications" },
  { label: "Teaching", href: "/teaching" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Gallery", href: "/gallery" },
];

export const currentPeopleGroups = [
  {
    title: "Graduate Researchers",
    people: [
      { name: "Wenlong Yu", role: "Visiting Ph.D. Researcher", period: "2025.01–Present", image: "/images/people/wenlong.jpg", focus: "Landslide mechanisms and monitoring using UAV photogrammetry, LiDAR, and InSAR." },
      { name: "Osama Al-Tarawneh", role: "Ph.D. Researcher · Civil Engineering", period: "2025.08–Present", image: "/images/people/osama.jpg", focus: "Sinkhole detection and modeling through geophysics, remote sensing, and GeoAI." },
      { name: "Muhammed Jaseem P A", role: "Ph.D. Researcher · Civil Engineering", period: "2025.08–Present", image: "/images/people/jaseem.jpg", focus: "Compound rainfall–landscape hazards, spatial networks, and complex-systems analysis." },
      { name: "Bassam Nasir", role: "Ph.D. Researcher · Civil Engineering", period: "2025.08–Present", image: "/images/people/bassam.jpg", focus: "Marine geophysics, coastal resilience, remote sensing, and geohazard modeling." },
      { name: "Kishan Dhakal", role: "Ph.D. Researcher · Civil Engineering", period: "2025.08–Present", image: "/images/people/kishan.jpg", focus: "Landslide mapping and monitoring with InSAR, remote sensing, and artificial intelligence." },
    ],
  },
  {
    title: "Undergraduate Researchers",
    people: [
      { name: "Grayson Grady", role: "Undergraduate Research Assistant", period: "2025.08–Present", focus: "Undergraduate research in geosystems engineering and natural-hazard resilience." },
    ],
  },
  {
    title: "Co-advised Researchers",
    people: [
      { name: "Elise Helene Meyer", role: "Ph.D. Researcher · Tufts University", period: "2024–Present", focus: "Geospatial site terms and nonergodic ground-motion modeling." },
    ],
  },
];

export const alumniGroups = [
  {
    title: "Postdoctoral Alumni",
    people: [
      { name: "Bahareh Kalantarghorashi Harandi", role: "P3 Postdoctoral Fellow", period: "2025.01–2026.06", focus: "Remote sensing, spatial machine learning, and GeoAI for geohazard prediction and mitigation." },
    ],
  },
  {
    title: "Graduate Alumni",
    people: [
      { name: "Varun Singh", role: "M.S. · Civil Engineering", period: "2024.08–2026.05", image: "/images/people/varun.jpg", focus: "Field data analysis, geotechnical investigation, and engineering materials." },
      { name: "Sanidhya Sharma", role: "M.S. · Civil Engineering", period: "2024.08–2026.05", image: "/images/people/sanidhya.jpg", focus: "Big-data analytics, signal processing, and seismic-hazard assessment." },
      { name: "Matthew Davies", role: "Ph.D. Researcher · Co-advised", period: "2024.08–2025.12", focus: "Collaborative doctoral research in coastal and infrastructure systems." },
      { name: "Maggie Roberts", role: "Ph.D. Researcher · Tufts University", period: "2024–2026", focus: "Geospatial site amplification and nonergodic ground-motion modeling." },
    ],
  },
  {
    title: "Undergraduate Alumni",
    people: [
      { name: "Nathalia Carreno", role: "Undergraduate Research Assistant", period: "2024.08–2025.08", image: "/images/people/nathalia.jpg", focus: "Landslide mapping, climate-driven hazards, and sustainability." },
      { name: "Gustavo Flores", role: "Undergraduate Research Assistant · UCF EXCEL", period: "2025.01–2025.08", image: "/images/people/gustavo.jpg", focus: "Computational methods and data-driven analysis for coastal-erosion research." },
      { name: "Julia Manfrediz", role: "Undergraduate Research Assistant · UCF EXCEL", period: "2025.01–2025.08", image: "/images/people/julia.jpg", focus: "Landslide mapping and natural-hazard mitigation." },
      { name: "Olivia Tedeschi", role: "Undergraduate Research Assistant", period: "2024.08–2025.05", image: "/images/people/olivia.jpg", focus: "Coastal erosion, field investigation, and laboratory research." },
      { name: "Ma Alessandra Domingo", role: "Undergraduate Research Assistant", period: "2024.08–2025.03", image: "/images/people/alessandra.jpg", focus: "Florida sinkhole research and environmental engineering." },
      { name: "Jesllie Lopez Martinez", role: "Undergraduate Research Assistant", period: "2024.01–2024.05", image: "/images/people/jesllie.jpg", focus: "Undergraduate research in geotechnical engineering and natural hazards." },
    ],
  },
];

const imageRoot = "/images/gallery";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: "Fieldwork" | "Conferences" | "Team" | "Teaching" | "Visits";
  featured?: boolean;
};

export const galleryItems: readonly GalleryItem[] = [
  { src: `${imageRoot}/gbsar-slope.jpg`, alt: "Researchers operating ground-based sensing equipment at a mountain slope", caption: "Slope-monitoring fieldwork", category: "Fieldwork", featured: true },
  { src: `${imageRoot}/dgb-front%20view.jpg`, alt: "Field view of the Daguangbao landslide", caption: "Daguangbao landslide investigation", category: "Fieldwork" },
  { src: `${imageRoot}/conf-georisk2023.jpg`, alt: "Geo-Risk 2023 conference participants", caption: "Geo-Risk 2023", category: "Conferences" },
  { src: `${imageRoot}/seminar-usgs.jpg`, alt: "Research seminar at the United States Geological Survey", caption: "USGS research seminar", category: "Visits" },
  { src: `${imageRoot}/confOsaka.jpg`, alt: "Conference presentation in Osaka, Japan", caption: "Earthquake engineering conference in Osaka", category: "Conferences" },
  { src: `${imageRoot}/visitERI.jpg`, alt: "Research visit to the Earthquake Research Institute", caption: "Earthquake Research Institute visit", category: "Visits" },
  { src: `${imageRoot}/visit-csm-wildfire.jpg`, alt: "Field visit examining wildfire-affected terrain", caption: "Post-wildfire field visit", category: "Fieldwork" },
  { src: `${imageRoot}/people-tuftsteam.jpg`, alt: "Collaborative research team at Tufts University", caption: "Research collaboration at Tufts", category: "Team" },
  { src: `${imageRoot}/clemson-mentor-undergrad.jpg`, alt: "Mentoring undergraduate researchers", caption: "Undergraduate research mentoring", category: "Teaching" },
  { src: `${imageRoot}/teach-ucf-geotech.jpg`, alt: "Geotechnical engineering teaching activity at UCF", caption: "Geotechnical engineering at UCF", category: "Teaching" },
  { src: `${imageRoot}/dgb-deposit.jpg`, alt: "Landslide deposit observed during a field investigation", caption: "Documenting landslide deposits", category: "Fieldwork" },
  { src: `${imageRoot}/conf-geoshanghai.jpg`, alt: "GeoShanghai conference gathering", caption: "GeoShanghai conference", category: "Conferences" },
  { src: `${imageRoot}/visit-kyoto.jpg`, alt: "Academic visit in Kyoto, Japan", caption: "Research visit in Kyoto", category: "Visits" },
  { src: `${imageRoot}/clemson-graduation.jpg`, alt: "Graduation ceremony at Clemson University", caption: "Graduation milestone", category: "Team" },
  { src: `${imageRoot}/egx-tunnel-scan.jpg`, alt: "Geophysical scanning demonstration in a tunnel", caption: "Subsurface sensing demonstration", category: "Fieldwork" },
  { src: `${imageRoot}/conf-peer2023.jpg`, alt: "Participants at a 2023 earthquake engineering event", caption: "PEER 2023", category: "Conferences" },
  { src: `${imageRoot}/visit-fiu.jpg`, alt: "Research visit to Florida International University", caption: "Research visit to FIU", category: "Visits" },
  { src: `${imageRoot}/clemsonTeach.jpg`, alt: "Geotechnical engineering teaching at Clemson University", caption: "Teaching geotechnical engineering", category: "Teaching" },
];

export const galleryCategories = [
  "All",
  "Fieldwork",
  "Conferences",
  "Team",
  "Teaching",
  "Visits",
] as const;
