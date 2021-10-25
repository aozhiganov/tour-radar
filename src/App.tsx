import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Challenge1 } from './components/Challenge1/Challenge1';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Challenge2 } from './components/Challenge2/Challenge2';

const useStyles = createUseStyles({
  content: {
    padding: 15,
  },
  header: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerLink: {
    display: 'inline-block',
    marginRight: 10,
  },
});

const CHALLENGE_1 = 'challenge_1';
const CHALLENGE_2 = 'challenge_2';

function App() {
  const styles = useStyles();
  const [challenge, setChallenge] = useState(CHALLENGE_1);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className={styles.header}>
        <div>
          <a
            href="#"
            className={styles.headerLink}
            onClick={() => setChallenge(CHALLENGE_1)}
          >
            Challenge 1
          </a>
          <a
            href="#"
            className={styles.headerLink}
            onClick={() => setChallenge(CHALLENGE_2)}
          >
            Challenge 2
          </a>
        </div>
        <div>
          <label htmlFor="language">Language </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </div>
      <div className={styles.content}>
        {challenge === CHALLENGE_1 && <Challenge1 />}
        {challenge === CHALLENGE_2 && <Challenge2 />}
      </div>
    </I18nextProvider>
  );
}

export default App;
