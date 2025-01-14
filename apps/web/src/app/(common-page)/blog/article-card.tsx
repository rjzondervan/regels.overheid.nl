import { resolveCmsImage } from '@/common/resolve-cms-image';
import { Card } from '@/components/card';
import { Pill } from '@/components/pill';
import { getEntityFiles } from '@/prisma/get-entity-files';
import { IconClockHour2 } from '@tabler/icons-react';
import TimeAgo from 'javascript-time-ago';
import nl from 'javascript-time-ago/locale/nl';
import Image from 'next/image';
import Link from 'next/link';

TimeAgo.addDefaultLocale(nl);

const timeAgo = new TimeAgo('nl-NL');

interface Props {
  id: number;
  url: string;
  date: Date;
  title: string;
  category: string;
}

export const BlogArticleCard: React.FC<Props> = async ({ id, title, category, url, date }) => {
  const [coverFile] = await getEntityFiles('api::blog-article.blog-article', id);

  return (
    <Card component="article" className="group flex w-full flex-col overflow-hidden border-l border-t">
      <Link href={url} className="flex h-full flex-col">
        <figure className="relative -ml-3 -mr-3 -mt-4 mb-2 aspect-[308/140] overflow-hidden">
          {coverFile.files?.ext && coverFile.files.hash && (
            <Image
              fill
              className="object-cover"
              src={resolveCmsImage({ ext: coverFile.files.ext, hash: coverFile.files.hash, width: 720 })}
              alt={coverFile.files?.alternative_text || title}
            />
          )}
        </figure>
        <div className="flex flex-1 flex-col gap-y-3">
          <h5 className="font-bold group-hover:underline">{title}</h5>
          <div className="mt-auto flex flex-col items-center">
            <Pill label={category} className="self-start" />
            <span className="mt-2 flex items-center text-sm font-bold text-primary-dark underline">
              <IconClockHour2 className="mr-2" />
              {timeAgo.format(date)}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};
