import styles from "./main.module.css";
import foto from "./img1.svg";
import foto2 from "./img2.svg";

function Main() {
  return (
    <main>
      <div className={styles.group}>
        <div className={styles.text}>
          <h1>Covid ID</h1>
          <a href=".">Monitoring Perkembangan Covid</a>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
          <div>
            <button className={styles.button}>Vaccine</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={foto} alt="img1" />
        </div>
      </div>
      <div className={styles.group2}>
        <div className={styles.text1}>
          <h1>Indonesia</h1>
          <a href=".">Data Covid Berdasarkan Indonesia</a>
        </div>
        <div className={styles.cardgroup}>
          <div className={styles.card}>
            <h2>Confirmed</h2>
            <div className={styles.fgreen}>605.646</div>
          </div>
          <div className={styles.card}>
            <h2>Recovered</h2>
            <div className={styles.p2}>90.000</div>
          </div>
          <div className={styles.card}>
            <h2>Death</h2>
            <div className={styles.p3}>5.000</div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1>Provinsi</h1>
        <a href=".">Data Covid Berdasarkan Provinsi</a>
        <table>
          <tr className={styles.fgreen}>
            <th>No</th>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Dirawat</th>
            <th>Meninggal</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Aceh</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bandung</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Depok</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jakarta</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Medan</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <div className={styles.containers}>
        <div class={styles.content}>
          <div className={styles.images}>
            <img src={foto2} alt="img2" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.form}>
            <h1>Form Covid</h1>
            <form>
              <label for="provinsi">Provinsi:</label>
              <input id="provinsi" />
              <label for="status">Status:</label>
              <input id="status" />
              <label for="jumlah">Jumlah:</label>
              <input id="jumlah" />
              <div>
                <button className={styles.buttons}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
