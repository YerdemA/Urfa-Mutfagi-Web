'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dish } from '@/data/dishes';
import styles from './StoryDetail.module.css';

interface StoryDetailProps {
    dish: Dish;
}

export default function StoryDetail({ dish }: StoryDetailProps) {
    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <span className={styles.category}>{dish.category}</span>
                <h1 className={styles.title}>{dish.name}</h1>
            </header>

            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    className={styles.image}
                    priority
                />
            </motion.div>

            <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {dish.description}
            </motion.p>

            {dish.story && (
                <motion.section
                    className={styles.storySection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className={styles.sectionTitle}>Hikayesi</h2>
                    <p className={styles.storyText}>{dish.story}</p>
                </motion.section>
            )}

            {dish.motifs && dish.motifs.length > 0 && (
                <motion.section
                    className={styles.motifsSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Kültürel Motifler</h2>
                    <div className={styles.motifsGrid}>
                        {dish.motifs.map((motif, index) => (
                            <div key={index} className={styles.motifCard}>
                                <div className={styles.motifImageContainer}>
                                    <Image
                                        src={motif}
                                        alt={`${dish.name} motifi ${index + 1}`}
                                        fill
                                        className={styles.motifImage}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            )}
        </article>
    );
}
