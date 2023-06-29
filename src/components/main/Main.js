import styles from "./main.module.css";
import foto from "./img1.svg";
import foto2 from "./img2.svg";
import { useState } from "react";

function Main() {
  const [data, setData] = useState([
    {
      no: 1,
      provinsi: "aceh",
      positif: 0,
      sembuh: 0,
      dirawat: 0,
      meninggal: 0,
    },
    {
      no: 2,
      provinsi: "bandung",
      positif: 0,
      sembuh: 0,
      dirawat: 0,
      meninggal: 0,
    },
    {
      no: 3,
      provinsi: "depok",
      positif: 0,
      sembuh: 0,
      dirawat: 0,
      meninggal: 0,
    },
    {
      no: 4,
      provinsi: "jakarta",
      positif: 0,
      sembuh: 0,
      dirawat: 0,
      meninggal: 0,
    },
    {
      no: 5,
      provinsi: "medan",
      positif: 0,
      sembuh: 0,
      dirawat: 0,
      meninggal: 0,
    },
  ]);

  const [newProvinsi, setNewProvinsi] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newJumlah, setNewJumlah] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!newProvinsi || !newStatus || !newJumlah) {
      alert("Semua field harus diisi");
      return;
    }

    const existingData = data.find(
      (item) => item.provinsi === newProvinsi.toLowerCase()
    );

    if (existingData) {
      const updatedData = data.map((item) =>
        item.provinsi === newProvinsi.toLowerCase()
          ? {
              ...item,
              positif:
                newStatus === "Positif"
                  ? item.positif + parseInt(newJumlah)
                  : item.positif,
              sembuh:
                newStatus === "Sembuh"
                  ? item.sembuh + parseInt(newJumlah)
                  : item.sembuh,
              dirawat:
                newStatus === "Dirawat"
                  ? item.dirawat + parseInt(newJumlah)
                  : item.dirawat,
              meninggal:
                newStatus === "Meninggal"
                  ? item.meninggal + parseInt(newJumlah)
                  : item.meninggal,
            }
          : item
      );

      setData(updatedData);
    } else {
      const newData = {
        no: data.length + 1,
        provinsi: newProvinsi,
        positif: newStatus === "Positif" ? parseInt(newJumlah) : 0,
        sembuh: newStatus === "Sembuh" ? parseInt(newJumlah) : 0,
        dirawat: newStatus === "Dirawat" ? parseInt(newJumlah) : 0,
        meninggal: newStatus === "Meninggal" ? parseInt(newJumlah) : 0,
      };

      setData((prevData) => [...prevData, newData]);
    }

    setNewProvinsi("");
    setNewStatus("");
    setNewJumlah("");
  };

  const provinsiChange = (event) => {
    setNewProvinsi(event.target.value);
  };

  const statusChange = (event) => {
    setNewStatus(event.target.value);
  };

  const jumlahChange = (event) => {
    setNewJumlah(event.target.value);
  };
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
          <thead>
            <tr className={styles.fgreen}>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({ no, provinsi, positif, sembuh, dirawat, meninggal }) => (
                <tr key={no}>
                  <td>{no}</td>
                  <td>{provinsi}</td>
                  <td>{positif}</td>
                  <td>{sembuh}</td>
                  <td>{dirawat}</td>
                  <td>{meninggal}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.containers}>
        <div className={styles.content}>
          <div className={styles.images}>
            <img src={foto2} alt="img2" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.form}>
            <h1>Form Covid</h1>
            <form onSubmit={handleFormSubmit}>
              <label>Provinsi:</label>
              <input
                type="text"
                value={newProvinsi}
                onChange={provinsiChange}
              />
              <label>Status:</label>
              <select value={newStatus} onChange={statusChange}>
                <option value="">Pilih Status</option>
                <option value="Positif">Positif</option>
                <option value="Sembuh">Sembuh</option>
                <option value="Dirawat">Dirawat</option>
                <option value="Meninggal">Meninggal</option>
              </select>
              <label>Jumlah:</label>
              <input type="number" value={newJumlah} onChange={jumlahChange} />
              <div>
                <button className={styles.buttons} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
