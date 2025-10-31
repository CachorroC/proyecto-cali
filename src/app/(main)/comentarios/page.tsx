import { Suspense } from 'react';
import layout from '#@/styles/layout.module.css';
import { Loader } from '#@/components/main-loader';
import { CommentForm } from './comment-form';
import { ListComments } from './list-comments';
import { FormListProvider } from '#@/app/context/comment-list-context';
import { unstable_cache } from 'next/cache';
import { contactoCollection } from '#@/lib/connection/collections';

const getCommentsCollection = unstable_cache(
  async () => {
    const arrayList = [];

    const collection = await contactoCollection();

    const listCollection = collection.find();

    for await (const element of listCollection) {
      const stringified = JSON.stringify(element);

      const parsed = JSON.parse(stringified);

      arrayList.push(parsed);
    }

    return arrayList;
  },
  ['comment'], // Needed if variables are not passed as parameters
  {
    tags: ['comment'],
  },
);

export default async function Page() {
  const comments = await getCommentsCollection();

  return (
    <FormListProvider initialComments={[...comments]}>
      <div className={layout.splitContainer}>
        <div className={layout.right}>
          <Suspense fallback={<Loader />}>
            <CommentForm />
          </Suspense>
        </div>
        <div className={layout.left}>
          <Suspense fallback={<Loader />}>
            <ListComments />
          </Suspense>
        </div>
      </div>
    </FormListProvider>
  );
}
