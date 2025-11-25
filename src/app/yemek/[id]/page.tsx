import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeDetail from "@/components/RecipeDetail";
import { getDishById, dishes } from "@/data/dishes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return dishes.map((dish) => ({
        id: dish.id,
    }));
}

export default async function DishPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const dish = getDishById(id);

    if (!dish) {
        notFound();
    }

    return (
        <main>
            <Header />
            <div className="container">
                <RecipeDetail dish={dish} />
            </div>
            <Footer />
        </main>
    );
}
