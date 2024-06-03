import styles from './styles.module.scss';

export const metadata = {
  title: "RESTful-Countries-API",
  description: "Project by Igor Silva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={styles.body}>

        {children}

      </body>

    </html>
  );
}
