import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryDetail from "@/components/StoryDetail";
import { getDishById, dishes } from "@/data/dishes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return dishes.filter(dish => dish.story).map((dish) => ({
        id: dish.id,
    }));
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const dish = getDishById(id);

    if (!dish || !dish.story) {
        notFound();
    }

    return (
        <main>
            <Header />
            <div className="container">
                <StoryDetail dish={dish} />
            </div>
            <Footer />
        </main>
    );
}
