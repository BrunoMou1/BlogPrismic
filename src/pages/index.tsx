import { GetStaticProps } from 'next';
import Link from 'next/link'
import { useState } from 'react';
import { FiUser, FiCalendar } from 'react-icons/fi'

import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  preview: boolean
  postsPagination: PostPagination;
}

export default function Home({ postsPagination, preview }: HomeProps) {

  const [posts, setPosts] = useState(postsPagination.results)
  const [nextPage, setNextPage] = useState(postsPagination.next_page)

  async function handleClickLoadPost() {
    if (nextPage === null) {
      return
    }

    const response = await fetch(`${nextPage}`).then(r => r.json())

    const resultsNextPage = response.results.map(post => {
      return {
        uid: post.uid,
        first_publication_date: post.first_publication_date,
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author
        }
      }
    })

    setNextPage(response.next_page)
    setPosts([...posts, ...resultsNextPage])

  }

  return (
    <>
      <main className={styles.container}>
        {posts.map(post => (
          <Link key={post.uid} href={`/post/${post.uid}`}>
            <a>
              <h1>{post.data.title}</h1>
              <p>{post.data.subtitle}</p>
              <div>
                <FiCalendar />
                {format(
                  new Date(post.first_publication_date),
                  'dd MMM yyyy',
                  {
                    locale: ptBR
                  }
                )}
                <FiUser />
                {post.data.author}
              </div>
            </a>
          </Link>
        ))}
        {nextPage && (
          <button
            type='button'
            onClick={handleClickLoadPost}
          >
            Carregar mais posts
          </button>)}
        {preview && (
          <aside className={styles.preview}>
            <Link href="/api/exitPreview">
              <a>Sair do modo Preview</a>
            </Link>
          </aside>
        )}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    ref: previewData?.ref ?? null,
    fetch: ['post.title', 'post.subtitle', 'post.author'],
    pageSize: 1
  });

  const results = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author
      }
    }
  })

  const postsPagination = {
    results,
    next_page: postsResponse.next_page
  }

  return {
    props: {
      postsPagination,
      preview
    },
    revalidate: 60 * 60 * 6 // 6 horas
  }

};
