import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DishCard from "@/components/DishCard";
import { getFeaturedDishes } from "@/data/dishes";
import styles from "./page.module.css";

export default function Home() {
  const featuredDishes = getFeaturedDishes();

  return (
    <main>
      <Header />
      <Hero />

      <section className={`container ${styles.featuredSection}`}>
        <h2 className={styles.sectionTitle}>Öne Çıkan Lezzetler</h2>
        <div className="grid grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
