import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DishCard from "@/components/DishCard";
import { getDishesWithStories } from "@/data/dishes";

export default function StoriesPage() {
    const stories = getDishesWithStories();

    return (
        <main>
            <Header />
            <div className="container" style={{ padding: '2rem 1rem' }}>
                <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Yemek Hikayeleri</h1>
                <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', color: '#aaa' }}>
                    Urfa mutfağının lezzetleri kadar hikayeleri de derindir. İşte efsanelere konu olmuş yemeklerimiz.
                </p>
                <div className="grid grid-cols-3">
                    {stories.map((dish, index) => (
                        <DishCard
                            key={dish.id}
                            dish={dish}
                            index={index}
                            buttonText="Hikayeyi Gör"
                            linkPrefix="/hikaye"
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
