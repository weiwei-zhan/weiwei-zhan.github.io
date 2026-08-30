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
      { name: "Osama Al-Tarawneh", role: "Ph.D. Student · Civil Engineering", period: "2025.08–Present", image: "/images/people/osama.jpg", focus: "Sinkhole, GeoAI, GPR, geophysics." },
      { name: "Muhammed Jaseem P A", role: "Ph.D. Student · Civil Engineering", period: "2025.08–Present", image: "/images/people/jaseem.jpg", focus: "Rainfall–induced landslides, hybrid modeling, complex-systems analysis." },
      { name: "Bassam Nasir", role: "Ph.D. Student · Civil Engineering", period: "2025.08–Present", image: "/images/people/bassam.jpg", focus: "Coastal resilience, geophysics." },
      { name: "Kishan Dhakal", role: "Ph.D. Student · Civil Engineering", period: "2025.08–Present", image: "/images/people/kishan.jpg", focus: "Slope stabibility, InSAR, GeoAI." },
      { name: "Polina Karpova", role: "MS Student (thesis) · Smart Cities", period: "2025.08–Present", image: "/images/people/polina.jpg", focus: "Coastal erosion, LiDAR." },
    ],
  },
  {
    title: "Undergraduate Researchers",
    people: [
      { name: "NEW Student", role: "Undergraduate Research Assistant", period: "2026.08–Present", focus: "Keywords" },
    ],
  },
];

export const alumniGroups = [
  {
    title: "Postdoctoral Alumni",
    people: [
      { name: "Bella Harandi", role: "Postdoctoral Fellow", period: "2025.01–2026.06", focus: "Remote sensing, GeoAI, Landslide, Wetland Vegetation" },
    ],
  },
  {
    title: "Graduate Alumni",
    people: [
      { name: "Varun Singh", role: "M.S. · Civil Engineering", period: "2024.08–2026.05", image: "/images/people/varun.jpg", focus: "Liquefaction-induced lateral spreading, CPT, geotechnics." },
      { name: "Sanidhya Sharma", role: "M.S. · Civil Engineering", period: "2024.08–2026.05", image: "/images/people/sanidhya.jpg", focus: "Site response assessment, big data analytics, signal processing." },
      { name: "Wenlong Yu", role: "Visiting Ph.D. Researcher", period: "2025.01–2026.01", image: "/images/people/wenlong.jpg", focus: "Landslide-river interaction, InSAR, engineering geology." },
      { name: "Matthew Davies", role: "Ph.D. · Co-advised with Dr. Nick Chen", period: "2024.08–2025.12", image: "/images/people/matthew.jpg", focus: "Shoaling dynamics, dredging analytics" },
    ],
  },
  {
    title: "Undergraduate Alumni",
    people: [
      { name: "Grayson Grady", role: "Undergraduate Research Assistant", period: "2025.08–2026.04", image: "/images/people/grayson.jpg",focus: "Sinkhole, CPT." },
      { name: "Nathalia Carreno", role: "Undergraduate Research Assistant", period: "2024.08–2025.08", image: "/images/people/nathalia.jpg", focus: "Landslide mapping, Google Earth Engine." },
      { name: "Gustavo Flores", role: "Undergraduate Research Assistant · UCF EXCEL", period: "2025.01–2025.08", image: "/images/people/gustavo.jpg", focus: "Shoreline erosion, CoastSat" },
      { name: "Julia Manfrediz", role: "Undergraduate Research Assistant · UCF EXCEL", period: "2025.01–2025.08", image: "/images/people/julia.jpg", focus: "Landslide mapping, Google Earth Engine." },
      { name: "Olivia Tedeschi", role: "Undergraduate Research Assistant", period: "2024.08–2025.05", image: "/images/people/olivia.jpg", focus: "Coastal erosion, LiDAR." },
      { name: "Ma Alessandra Domingo", role: "Undergraduate Research Assistant", period: "2024.08–2025.03", image: "/images/people/alessandra.jpg", focus: "Sinkhole, seismicity." },
      { name: "Jesllie Lopez Martinez", role: "Undergraduate Research Assistant", period: "2024.01–2024.05", image: "/images/people/jesllie.jpg", focus: "Sinkhole, CPT." },
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
  { src: `${imageRoot}/gbsar-slope.jpg`, alt: "GB-InSAR slope monitoring", caption: "GB-InSAR slope monitoring", category: "Fieldwork", featured: true },
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
