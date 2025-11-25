import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DishCard from "@/components/DishCard";
import { dishes } from "@/data/dishes";

export default function RecipesPage() {
    return (
        <main>
            <Header />
            <div className="container" style={{ padding: '2rem 1rem' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Tüm Tarifler</h1>
                <div className="grid grid-cols-3">
                    {dishes.map((dish, index) => (
                        <DishCard key={dish.id} dish={dish} index={index} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
