import { GetStaticPaths, GetStaticProps } from 'next';
import { FiClock, FiCalendar, FiUser } from 'react-icons/fi'
import Link from 'next/link'

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import { RichText } from "prismic-dom"

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import styles from './post.module.scss';
import { useRouter } from 'next/router';

import Comments from '../../components/Comments'
import { PostNavigator } from '../../components/PostNavigator/PostNavigator'

interface Post {
  first_publication_date: string | null;
  last_publication_date: string | null;
  uid: string,
  data: {
    title: string;
    banner: {
      url: string | null
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
  previousPost?: {
    uid: string;
    title: string;
  };
  nextPost?: {
    uid: string;
    title: string;
  };
  preview: boolean
}

export default function Post({ post, preview, previousPost, nextPost }: PostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <h1>
        Carregando...
      </h1>
    )
  }

  const publicatedAt = format(
    new Date(post.first_publication_date),
    'dd MMM yyyy',
    {
      locale: ptBR
    }
  )

  const updatedAt = format(
    new Date(post.last_publication_date),
    'dd MMM yyyy',
    {
      locale: ptBR
    }
  )

  const updatedAtHours = format(
    new Date(post.last_publication_date),
    "kk:mm",
    {
      locale: ptBR
    }
  )

  const wordsNumber = post.data.content.map(item => {
    const text = RichText.asText(item.body)
    const aux = []
    const arr = text.split(' ')
    const arrConcat = aux.concat(arr).length
    return arrConcat
  })

  const readTime = wordsNumber.reduce((acc, item) => {
    const total = acc + item
    const time = Math.ceil(total / 200)
    return time
  }, 0)

  return (
    <>
      <div className={styles.banner}>
        <img src={post.data.banner.url} alt="banner" />
      </div>
      <main className={styles.container}>
        <h1>{post.data.title}</h1>
        <section>
          <FiCalendar />
          {publicatedAt}
          <FiUser />
          {post.data.author}
          <FiClock />
          {readTime} min
        </section>
        {updatedAt !== publicatedAt && (
          <p className={styles.updatedAt}>
            * editado em {updatedAt}, às {updatedAtHours}
          </p>
        )}
        {post.data.content.map(item => {
          return (
            <article className={styles.content} key={item.heading}>
              <h2>{item.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(item.body) }} />
            </article>
          )
        })}
        <div className={styles.wrapper}/>
        <PostNavigator previous={previousPost} next={nextPost} />
        <Comments />
        {preview && (
          <aside>
            <Link href="/api/exit-preview">
              <a>Sair do modo Preview</a>
            </Link>
          </aside>
        )}
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ]);

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid
      }
    }
  })

  return {
    paths,
    fallback: true
  }
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const prismic = getPrismicClient();
  const { slug } = params
  const response = await prismic.getByUID('post', String(slug), {
    ref: previewData?.ref ?? null,
  });
  const post: Post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    last_publication_date: response.last_publication_date,
    data: {
      title: response.data.title,
      author: response.data.author,
      banner: {
        url: response.data.banner.url,
      },
      content: response.data.content.map(content => {
        return {
          heading: content.heading,
          body: [...content.body]
        }
      })
    },
  }

  let previousPost = null;
  let nextPost = null;
  const responsePreviousPost = await prismic.query(
    [
      Prismic.predicates.at('document.type', 'post'),
      Prismic.predicates.dateAfter(
        'document.first_publication_date',
        post.first_publication_date
      ),
    ],
    {
      fetch: ['posts.title'],
      pageSize: 1,
      page: 1,
    }
  );

  if (responsePreviousPost.results.length) {
    previousPost = {
      uid: responsePreviousPost.results[0].uid,
      title: responsePreviousPost.results[0].data?.title,
    };
  }

  const responseNextPost = await prismic.query(
    [
      Prismic.predicates.at('document.type', 'post'),
      Prismic.predicates.dateBefore(
        'document.first_publication_date',
        post.first_publication_date
      ),
    ],
    {
      fetch: ['posts.title'],
      pageSize: 1,
      page: 1,
    }
  );

  if (responseNextPost.results.length) {
    nextPost = {
      uid: responseNextPost.results[0].uid,
      title: responseNextPost.results[0].data?.title,
    };
  }


  return {
    props: {
      post,
      previousPost,
      nextPost,
      preview
    }
  }
};
