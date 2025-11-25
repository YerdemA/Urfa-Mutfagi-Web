'use client';

import Image from 'next/image';
import { Dish } from '@/data/dishes';
import styles from './RecipeDetail.module.css';
import { Clock, Users, CookingPot, CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

interface RecipeDetailProps {
    dish: Dish;
}

export default function RecipeDetail({ dish }: RecipeDetailProps) {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.header}>
                <motion.h1
                    className={styles.title}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {dish.name}
                </motion.h1>
                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Clock size={20} />
                        <span>Hazırlama: {dish.recipe.prepTime}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <CookingPot size={20} />
                        <span>Pişirme: {dish.recipe.cookTime}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Users size={20} />
                        <span>Porsiyon: {dish.recipe.servings}</span>
                    </div>
                </div>
            </div>

            <motion.div
                className={styles.imageContainer}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    className={styles.image}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 800px) 100vw, 800px"
                    priority
                />
            </motion.div>

            <div className={styles.content}>
                <motion.div
                    className={styles.ingredients}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className={styles.sectionTitle}>Malzemeler</h3>
                    <ul className={styles.ingredientsList}>
                        {dish.recipe.ingredients.map((ingredient, index) => (
                            <motion.li
                                key={index}
                                className={styles.ingredientItem}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + (index * 0.05) }}
                            >
                                <CheckCircle className={styles.checkIcon} weight="fill" />
                                {ingredient}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className={styles.instructions}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className={styles.sectionTitle}>Hazırlanışı</h3>
                    <ol className={styles.instructionsList}>
                        {dish.recipe.instructions.map((step, index) => (
                            <motion.li
                                key={index}
                                className={styles.instructionItem}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                            >
                                <p>{step}</p>
                            </motion.li>
                        ))}
                    </ol>
                </motion.div>
            </div>

            {dish.story && (
                <motion.div
                    className={styles.story}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className={styles.sectionTitle} style={{ borderBottom: 'none', marginBottom: '0.5rem' }}>Hikayesi</h3>
                    <p>{dish.story}</p>
                </motion.div>
            )}
        </motion.div>
    );
}
