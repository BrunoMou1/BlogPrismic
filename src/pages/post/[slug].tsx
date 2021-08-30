import { GetStaticPaths, GetStaticProps } from 'next';
import { FiClock, FiCalendar, FiUser } from 'react-icons/fi'

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import { RichText } from "prismic-dom"

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import styles from './post.module.scss';
import { useRouter } from 'next/router';

interface Post {
  first_publication_date: string | null;
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
}

export default function Post({ post }: PostProps) {

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
        {post.data.content.map(item => {
          return (
              <article className={styles.content} key={item.heading}>
                <h2>{item.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(item.body) }} />
              </article>
          )
        })}
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

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params
  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
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

  return {
    props: {
      post
    }
  }
};
