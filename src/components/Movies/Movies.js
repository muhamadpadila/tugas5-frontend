import styles from "./Movies.module.css"

function Movies() {
    return (
        <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>My Film </h2>
            <div className={styles.movie__container}>
                <div className={styles.movie}>
                <iframe className={styles.movie__image} width="942" height="539" src="https://www.youtube.com/embed/dDI8CPyI6S4" title="GATOT JADI SAKIT BANGET PAKE ITEM INI!!! - Mobile Legends" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className={styles.movie__title}>GATOT JADI SAKIT BANGET PAKE ITEM INI!!! - Mobile Legends</h3>
                    <p className={styles.movie__date}></p>
                </div>
                <div className={styles.movie}>
                <iframe className={styles.movie__image} width="942" height="539" src="https://www.youtube.com/embed/A_613QwVcTs" title="Gendong Duo Exp R7 &amp; Antimage Pake Hero Efic yang Jadi Kejutan di MPL!! - Mobile Legends" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className={styles.movie__title}>Gendong Duo Exp R7 & Antimage Pake Hero Efic yang Jadi Kejutan di MPL!! - Mobile Legends</h3>
                    <p className={styles.movie__date}></p>
                </div>
                <div className={styles.movie}>
                <iframe className={styles.movie__image} width="942" height="539" src="https://www.youtube.com/embed/YiXcSxR2bzI" title="Challenge KAIRI Maen LING Tanpa Skill 1, Kalo Kalah CINCIN MPL Buat Gw!! - Mobile Legends" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className={styles.movie__title}>Challenge KAIRI Maen LING Tanpa Skill 1, Kalo Kalah CINCIN MPL Buat Gw!! - Mobile Legends</h3>
                    <p className={styles.movie__date}></p>
                </div>
                <div className={styles.movie}>
                <iframe  className={styles.movie__image} width="1904" height="786" src="https://www.youtube.com/embed/3Wa_AeM2d1c" title="Challenge SANZ Maen LYLIA Tanpa Ulti, Langsung Keluar Mode Juara MPL!! - Mobile Legends" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className={styles.movie__title}>Challenge SANZ Maen LYLIA Tanpa Ulti, Langsung Keluar Mode Juara MPL!! - Mobile Legends</h3>
                    <p className={styles.movie__date}></p>
                </div>
                <div className={styles.movie}>
                <iframe className={styles.movie__image} width="465" height="827" src="https://www.youtube.com/embed/iQwHYCCb_io" title="Tampilan Franco Old yang bikin kalian Nostalgia 🧟" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className={styles.movie__title}>Tampilan Franco Old yang bikin kalian Nostalgia 🧟</h3>
                    <p className={styles.movie__date}></p>
                </div>
                <div className={styles.movie}>
                <iframe className={styles.movie__image} width="1904" height="786" src="https://www.youtube.com/embed/N76IfyiLcA4" title="Full MCL Bersama Ayang &amp; RRQ! Final MCL Rasa MPL!! Hardgame 30 Menit!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h3 className={styles.movie__title}>Full MCL Bersama Ayang & RRQ! Final MCL Rasa MPL!! Hardgame 30 Menit!!</h3>
                    <p className={styles.movie__date}></p>
                </div>
               
                {

                }

            </div>

        </section>
        </div>
    )
}
export default Movies;