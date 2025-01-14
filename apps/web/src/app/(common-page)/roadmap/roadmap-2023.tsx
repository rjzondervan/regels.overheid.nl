import { Link } from '@/components/link';
import { RoadmapQuarterCardProps } from './roadmap-quarter-card';

export const roadmap2023: RoadmapQuarterCardProps['items'][] = [
  [
    ['content management', 'Capabilities toets CMS & Next.js / MDX'],
    ['devops', 'CI/CD pipeline & release process irt scrum sprints'],
    ['devops', '100% internet.nl test'],
    ['legal', 'Low Code Widget voor annotatie deployed bij UBR'],
  ],
  [
    ['content management', 'ReSpec documentatie publicatie proces'],
    [
      'content management',
      <>
        Capabilities toets{' '}
        <Link component="a" href="https://regels.dexcat.nl/api">
          Regelregister
        </Link>
      </>,
    ],
  ],
  [
    [
      'linked data',
      <>
        XML import{' '}
        <Link component="a" href="https://linkeddata.overheid.nl/front/portal/">
          LiDO
        </Link>
      </>,
    ],
    ['linked data', 'Apache Jena Fuseki SPARQL server'],
  ],
  [
    ['devops', 'Multistack website én regelbank obv Gemeenschappelijke datacatalogus (GDC)'],
    ['devops', 'Definitieve cloud architectuur'],
    [
      'devops',
      <>
        Migratie{' '}
        <Link component="a" href="https://regelbeheer.pleio.nl/">
          regelbeheer.pleio.nl
        </Link>
      </>,
    ],
  ],
];
