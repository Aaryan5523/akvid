'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Filter, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '@/data/products.json';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (selectedCategory === 'all') {
        setFilteredProducts(productsData.products);
      } else {
        setFilteredProducts(
          productsData.products.filter(
            (product) => product.category === selectedCategory
          )
        );
      }
      setIsLoading(false);
    }, 500);
  }, [selectedCategory]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of sanitary products
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Filter className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">
              Filter by Category
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* All */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              All Products
            </motion.button>

            {/* Categories */}
            {productsData.categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Loader */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={48} className="text-blue-600 animate-spin" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                  >
                    {/* IMAGE */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>

                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 size={48} className="text-blue-600 animate-spin" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
