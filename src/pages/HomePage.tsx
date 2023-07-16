import { Page } from '../components/Page/Page';
import { useRouter } from '../router/RouterContext';

export const HomePage = () => {
  const {navigate} = useRouter()
  return (
    <Page>
      <blockquote>
        <p>
          Everything written symbols can say has already passed by. They are
          like tracks left by animals. That is why the masters of meditation
          refuse to accept that writings are final. The aim is to reach true
          being by means of those tracks, those letters, those signs - but
          reality itself is not a sign, and it leaves no tracks. It doesn’t come
          to us by way of letters or words. We can go towards it, by following
          those words and letters back to what they came from. But so long as we
          are preoccupied with symbols, theories and opinions, we will fail to
          reach the principle.
        </p>
        <p>
          But when we give up symbols and opinions, aren’t we left with the
          utter nothingness of being?
        </p>
        <p>Yes.</p>
      </blockquote>
      <figcaption>
        — Kimura Kyuho,{' '}
        <cite>
          Kenjutsu Fushigi Hen [On the Mysteries of Swordsmanship], 1768
        </cite>
      </figcaption>
      <button onClick={() => navigate('/react')}>React home page</button>
    </Page>
  );
};
