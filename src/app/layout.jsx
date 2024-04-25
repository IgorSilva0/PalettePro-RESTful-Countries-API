import styles from './styles.module.scss';
import Header from "./components/header/header.jsx";
import Data from './util/data.jsx'

export const metadata = {
  title: "PalettePro-RESTful-Countries-API",
  description: "Project by Igor Silva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={styles.body}>
        <Header/>
          {children}
        <Data/>
      </body>
      
    </html>
  );
}
