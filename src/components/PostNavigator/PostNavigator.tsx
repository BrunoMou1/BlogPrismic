import Link from 'next/link';

import styles from './styles.module.scss';

interface Post {
  title: string;
  uid: string;
}

type PostNavigatorProps = {
  previous?: Post;
  next?: Post;
};

export function PostNavigator({
  next,
  previous,
}: PostNavigatorProps): JSX.Element {
  return (
    <div className={styles.container}>
        {previous ? (
          <Link href={`/post/${previous.uid}`}>
            <a className={styles.left}>
              <span>{previous.title}</span>
              <p>Post anterior</p>
            </a>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/post/${next.uid}`}>
            <a className={styles.right}>
              <span>{next.title}</span>
              <p>Próximo post</p>
            </a>
          </Link>
        ) : (
          <div />
        )}
      </div>
  );
}