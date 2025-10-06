import styles from './styles.module.css';

export default function Page() {
  return (
    <section className={styles.credits}>
      <header>
        <h1 className={styles.h1}>
          proyecto<em className={styles.em}> de </em>Cali
        </h1>
      </header>

      <dl className={styles.creditsSingle}>
        <dt className={styles.dt}>Directed by</dt>
        <dd className={styles.dd}>Marge Longskin</dd>
        <dt className={styles.dt}>Written by</dt>
        <dd className={styles.dd}>Sally Peeps</dd>
        <dt className={styles.dt}>Director of Photography</dt>
        <dd className={styles.dd}>Benjarmin Külksteedér</dd>
        <dt className={styles.dt}>Executive Producer</dt>
        <dd className={styles.dd}>Filbert Montery</dd>
      </dl>

      <h2 className={styles.h2}>Cast</h2>
      <dl className={styles.creditsDouble}>
        <dt className={styles.dt}>Carol</dt>
        <dd className={styles.dd}>Jane Closter</dd>
        <dt className={styles.dt}>Jimmy Stickbürger</dt>
        <dd className={styles.dd}>George Farmstand</dd>
        <dt className={styles.dt}>Steweart Pinkbelly</dt>
        <dd className={styles.dd}>Ed “Singin’ Ed” Butters</dd>
        <dt className={styles.dt}>The Corn Bucket Gang</dt>
        <dd className={styles.dd}>Steve Sugarbean</dd>
        <dd className={styles.dd}>Kelly Kelen</dd>
        <dd className={styles.dd}>Carl Whereist</dd>
        <dd className={styles.dd}>Tom Guyman</dd>
        <dt className={styles.dt}>Random Dude</dt>
        <dd className={styles.dd}>Scott Oilier</dd>
        <dt className={styles.dt}>Awful Co&#8209;Worker</dt>
        <dd className={styles.dd}>Jeff MacAfloat</dd>
        <dt className={styles.dt}>@replier</dt>
        <dd className={styles.dd}>Manny Splain</dd>
      </dl>

      <h2 className={styles.h2}>Crew</h2>
      <dl className={styles.creditsDouble}>
        <dt className={styles.dt}>Grip</dt>
        <dd className={styles.dd}>Roberto Chinwaggon</dd>
        <dt className={styles.dt}>Sound Mixer</dt>
        <dd className={styles.dd}>Laura Palmn</dd>
        <dt className={styles.dt}>Rain Manager</dt>
        <dd className={styles.dd}>Larry Presstown</dd>
        <dt className={styles.dt}>Stunt Coordinator</dt>
        <dd className={styles.dd}>Jeorge Chuckles</dd>
        <dt className={styles.dt}>Deer Attendant</dt>
        <dd className={styles.dd}>Tobias Freemason</dd>
        <dt className={styles.dt}>Foley Artist</dt>
        <dd className={styles.dd}>Dave Lamason</dd>
        <dt className={styles.dt}>Craft Services</dt>
        <dd className={styles.dd}>Peas, Peas & Peas</dd>
        <dd className={styles.dd}>Lobster Shoppe West</dd>
        <dt className={styles.dt}>Dental Services</dt>
        <dd className={styles.dd}>The Freelance Dentist</dd>
        <dt className={styles.dt}>Cat Council</dt>
        <dd className={styles.dd}>Fergus</dd>
        <dd className={styles.dd}>Francy</dd>
      </dl>

      <h2 className={styles.h2}>Special Thanks</h2>
      <ul className={styles.creditsInline}>
        <li className={styles.li}>Baywood Woester</li>
        <li className={styles.li}>Friend & Friend Associates</li>
        <li className={styles.li}>The Dimestore</li>
        <li className={styles.li}>Gill & Falinda Bates</li>
        <li className={styles.li}>The Staple Factory</li>
        <li className={styles.li}>Sink & Bath Metalworks</li>
        <li className={styles.li}>The “Car” Store</li>
        <li className={styles.li}>Steam Floaters</li>
        <li className={styles.li}>Billy Williams</li>
        <li className={styles.li}>The Wax Store</li>
        <li className={styles.li}>Rock Murphy</li>
        <li className={styles.li}>Salmon Dean</li>
        <li className={styles.li}>Sherraden Hogworth</li>
        <li className={styles.li}>Philip Converse</li>
      </ul>

      <h2 className={styles.h2}>Music</h2>
      <div className={styles.creditsMusic}>
        <dl className={styles.dl}>
          <dt className={styles.dt}>The Earth Ate my Butt</dt>
          <dd className={styles.dd}>
            <em className={styles.em}>Performed by</em> Lamp Toast Esquire
          </dd>
          <dd className={styles.dd}>
            <em className={styles.em}>Written by</em> Sammy Syrup
          </dd>
        </dl>
        <dl className={styles.dl}>
          <dt className={styles.dt}>It’s All Pun and Games</dt>
          <dd className={styles.dd}>
            <em className={styles.em}>Performed by</em> Lake Pond
          </dd>
          <dd className={styles.dd}>
            <em className={styles.em}>Written by</em> Kathy Steam
          </dd>
        </dl>
        <dl className={styles.dl}>
          <dt className={styles.dt}>
            Seriously, Where’s (I Can’t Find my Socks)
          </dt>
          <dd className={styles.dd}>
            <em className={styles.em}>Performed by</em> Ed “Singin’ Ed” Butters
          </dd>
          <dd className={styles.dd}>
            <em className={styles.em}>Written by</em> Ed “Singin’ Ed” Butters
          </dd>
        </dl>
        <dl className={styles.dl}>
          <dt className={styles.dt}>Follow me to the Bread Store</dt>
          <dd className={styles.dd}>
            <em className={styles.em}>Performed by</em> Elemeno Pea
          </dd>
          <dd className={styles.dd}>
            <em className={styles.em}>Written by</em> Carla Carrot
          </dd>
        </dl>
        <dl className={styles.dl}>
          <dt className={styles.dt}>Pink Butter</dt>
          <dd className={styles.dd}>
            <em className={styles.em}>Performed by</em> DJ Shrimpz
          </dd>
          <dd className={styles.dd}>
            <em className={styles.em}>Written by</em> DJ Shrimpz
          </dd>
        </dl>
      </div>

      <p className={styles.p}>
        Original Soundtrack available on My Brother’s Speaker Records
      </p>

      <footer className={styles.footer}>
        <h3 className={styles.h3}>Adopt Don’t Shop</h3>
        <h4 className={styles.h4}>
          &copy<span className={styles.smcaps}>MCMXVIII</span> Kmart Parking Lot
          Pictures
        </h4>
      </footer>
    </section>
  );
}
