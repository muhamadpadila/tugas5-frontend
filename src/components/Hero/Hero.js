import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
            <div className={styles.hero__left}>
            <h2 className={styles.hero__title}>DJ viral 2023</h2>
            <h3 className={styles.hero___genre}>
            DJ CAMPURAN VIRAL TIK TOK 2023 JEDAG JEDUG FULL BASS TERBARU
            </h3>
        <p className={styles.hero__description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam cum accusamus quisquam earum velit ea nobis maiores exercitationem nam temporibus.
    </p>
<button className={styles.hero__button}>Watch</button>
</div>
<div className="hero_right">
<iframe className={styles.hero_image} width="1038" height="593" src="https://www.youtube.com/embed/19iLe2XhiDk" title="DJ CAMPURAN VIRAL TIK TOK 2023 JEDAG JEDUG FULL BASS TERBARU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>
</section>
</div>
);
}
export default Hero;