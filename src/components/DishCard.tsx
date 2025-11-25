'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dish } from '@/data/dishes';
import styles from './DishCard.module.css';

interface DishCardProps {
    dish: Dish;
    index?: number;
}

export default function DishCard({ dish, index = 0 }: DishCardProps) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{dish.category}</span>
                <h3 className={styles.title}>{dish.name}</h3>
                <p className={styles.description}>{dish.description}</p>
                <div className={styles.footer}>
                    <Link href={`/yemek/${dish.id}`} className="btn btn-outline" style={{ width: '100%' }}>
                        Tarifi Gör
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
