import type { Project, ProjectId } from '~/types/project';

export const projectsById: Record<ProjectId, Project> = {
  'energy-data-platform': {
    id: 'energy-data-platform',
    heading: 'Energy Data Platform',
    tagline: 'Data Processing & Integrations',
    summary:
      'A platform centralising and processing electricity and gas consumption data from multiple external sources for customer-facing and internal applications.',
    technologies: ['Vue 3', 'AdonisJS', 'PostgreSQL'],
    projectImage: 'energy-data-platform-thumbnail.jpg',
    overview:
      'Instead of relying on separate external services to store and process consumption data, the platform centralises millions of electricity and gas readings from multiple sources. It links customers with their meters, processes the incoming data and makes the results available to customer-facing graphs, dashboards and internal tools.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'PostgreSQL'],
    role: 'I joined the project relatively early and later became its sole developer, taking responsibility for its ongoing architecture, development and maintenance. I work across the Vue admin application and AdonisJS backend, integrating external data sources and building processing flows for electricity, gas and calculated consumption data. My work includes converting cumulative readings into interval data, scheduled processing and batched database writes for larger ingestion workloads. When production data does not match expected values, I trace the source data and processing path, confirm the required behaviour with the relevant teams and implement the fix.',
  },
  'sales-administration-platform': {
    id: 'sales-administration-platform',
    heading: 'Sales Administration Platform',
    tagline: 'Sales Operations',
    summary:
      'An internal application for managing energy contracts after the sale, giving finance, compliance and administration staff one place to handle tasks, commissions, complaints, meter information and changes of energy supplier.',
    technologies: ['Vue 3', 'GraphQL', 'AdonisJS'],
    projectImage: 'sales-admin-thumbnail.png',
    overview:
      'The platform provided a focused workspace for managing energy contracts after the sale while continuing to use shared customer and sales data from the wider business systems. Staff could bring existing sales records into the application, work through each contract’s administrative stages, manage customer and meter information, communicate with customers and suppliers, and track follow-up activity. It became the new administration system for around 50 staff.',
    structure: ['Vue 3', 'TypeScript', 'GraphQL', 'Hasura', 'AdonisJS', 'PostgreSQL'],
    role: 'I set up the application and was its sole developer through the first usable MVP. I built the authentication, routing, dashboard, task and administration workflows, event feed and API integration needed to bring existing sales records into the application. As the product grew, I added functionality around meter management, commissions, complaints, customer and supplier communications, comments and tracking changes of energy supplier. I integrated the application with the existing shared backend and data systems, and I continued extending and supporting it as development became collaborative.',
  },
  'customer-portal': {
    id: 'customer-portal',
    heading: 'Customer Portal',
    tagline: 'Customer Self-Service & Account Workflows',
    summary:
      'A customer self-service portal for managing energy meters, documents and account information, with consumption insights and integrations with internal sales and support systems.',
    technologies: ['Vue 3', 'AdonisJS', 'Socket.IO'],
    projectImage: 'industrion-thumbnail.png',
    overview:
      'The portal acted as the customer-facing layer for several account and energy-management workflows. During onboarding, customers could look up and confirm electricity and gas meter information, while established users could access documents, update account details and view consumption data over time. Those journeys connected back to internal sales and support systems, allowing customer activity and account information to feed into the workflows used by staff.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'Socket.IO', 'PostgreSQL'],
    role: 'I initially worked on responsive and mobile frontend improvements before my role expanded into substantial full-stack development across the existing portal. Later, I carried out a major frontend redesign based on project specifications, rebuilding key meter, document, profile, administration and mobile experiences and integrating previously separate consumption-analysis functionality directly into the portal. On the backend, I worked on meter lookup and onboarding routes, customer and account operations, consumption calculations, authenticated WebSockets and integration with the internal sales CRM. I also added automated tests and continued maintaining the portal as these features were released and supported in production.',
    deployLink: 'https://portal.industrion.io/',
  },
  'sales-crm': {
    id: 'sales-crm',
    heading: 'Sales CRM',
    tagline: 'Sales Pipeline & Integrations',
    summary:
      'A shared sales CRM supporting lead management, sales pipelines and customer workflows, with integrations across internal systems and customer-facing applications.',
    technologies: ['Vue 3', 'GraphQL', 'Hasura'],
    projectImage: 'astra-thumbnail.jpg',
    overview:
      'Used by around 200 staff, the CRM brought together the day-to-day process of turning prospects into active sales while keeping customer information and related activity in one place. Staff could manage leads through staged pipelines, work with quotes and sales, update customer and meter information, attach supporting files and follow ongoing activity. It also connected with other internal and customer-facing systems, making it a central shared application rather than a standalone sales tool.',
    structure: ['Vue 3', 'TypeScript', 'GraphQL', 'Hasura', 'AdonisJS'],
    role: 'I was a primary contributor to the CRM’s main sales pipeline. I built and extended pipeline behaviour for moving prospects and sales through stages, including quote validation, checklist and submission logic, campaign assignments and handling lost opportunities. My work also covered customer and meter workflows, file attachments, customer-portal integrations and real-time updates. I continued developing and maintaining these areas within the CRM’s established architecture, working alongside other developers on a shared production system.',
  },
  'prospecting-tool': {
    id: 'prospecting-tool',
    heading: 'Prospecting Tool',
    tagline: 'Lead Generation & CRM Integration',
    summary:
      'An internal lead-generation tool for finding and enriching business prospects, organising campaigns and importing selected prospects into a central sales CRM for follow-up and sales management.',
    technologies: ['Vue 3', 'TypeScript', 'Pinia'],
    projectImage: 'shado-thumbnail.png',
    overview:
      'The application gave staff a structured workspace for reviewing prospect data in more detail, with saved filters, prospect views, timelines and campaign management to organise potential leads. Campaign data could also be uploaded and managed inside the tool, while CRM checks helped staff identify whether a prospect already existed before importing it. Together, these workflows connected early-stage prospecting with the company’s existing sales process without requiring staff to manage the work across separate tools.',
    structure: ['Vue 3', 'TypeScript', 'Pinia', 'AdonisJS'],
    role: 'I carried out a full-stack rebuild of the application, refactoring the frontend architecture and rebuilding key search, results and prospect workflows. I reorganised API handling and state management, expanded the filtering and preset system, and built out the campaign functionality across its pages, prospect views and data-upload workflows. I also worked on the CRM validation and import flow, alongside prospect information, timeline and enrichment-related UI. I continued maintaining and improving the application after the rebuild while it was being used in production for lead generation.',
  },
  'auction-platform': {
    id: 'auction-platform',
    heading: 'Auction Platform',
    tagline: 'Real-Time Supplier Bidding',
    summary:
      'An auction platform where energy suppliers could submit competing quotes for customer energy contracts, with real-time bidding, quote management and live status updates.',
    technologies: ['Vue 3', 'AdonisJS', 'Socket.IO'],
    projectImage: 'adapt-thumbnail.png',
    overview:
      'The platform was designed to let customers compare competing energy-supply quotes while staff managed the auction process behind the scenes. Customers could follow bids and quote changes in real time, while staff could manage suppliers, quotes, auction progress and the information linked to each customer’s meters.',
    structure: ['Vue 3', 'TypeScript', 'AdonisJS', 'Socket.IO', 'PostgreSQL'],
    role: 'I substantially reworked both the customer-facing frontend and supporting backend of the existing full-stack application. On the frontend, I rebuilt responsive layouts, auction and quote views, progress tracking and real-time interactions. I also refactored the application’s real-time architecture so normal application state was loaded through HTTP requests, with WebSockets reserved for live auction events and updates rather than carrying the whole state model. On the backend, I worked on authentication, auction and quote behaviour, socket handling and the supporting booking and meter-linked workflows.',
  },
};

export const featuredProjects: Project[] = [
  projectsById['energy-data-platform'],
  projectsById['sales-administration-platform'],
];

export const secondaryProjects: Project[] = [
  projectsById['customer-portal'],
  projectsById['sales-crm'],
  projectsById['prospecting-tool'],
  projectsById['auction-platform'],
];
