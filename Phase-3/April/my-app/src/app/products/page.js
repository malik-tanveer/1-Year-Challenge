"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Sparkles,
  Layers,
  PlusCircle,
  ShoppingCart
} from "lucide-react";
import { getProducts } from "@/services/productService";
import formatPrice from "@/utils/formatPrice";
import Swal from "sweetalert2";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data on client mount smoothly
  useEffect(() => {
    async function loadInventory() {
      try {
        const data = await getProducts();
        setProducts(data.products || data || []);
      } catch (err) {
        console.error("Failed to stream layout indices via productService:", err);
      } finally {
        setLoading(false);
      }
    }
    loadInventory();
  }, []);

  // Temporary Client Side Cart Storage handler
  const handleAddToCart = (product) => {
    // 🚨 STAGE 1: STOCK VALIDATION CONSTRAINT CHECK
    if (product.stock <= 0) {
      Swal.fire({
        title: "Out of Stock",
        text: "Sorry, this validation matrix node currently holds no active physical units.",
        icon: "error",
        confirmButtonColor: "#ef4444"
      });
      return;
    }

    // Reading previous cart entries from localStorage or initializing empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if item is already added
    const isExist = existingCart.find((item) => item._id === product._id);
    
    if (isExist) {
      Swal.fire({
        title: "Already in Cart!",
        text: `${product.title} has already been added to your shopping cart setup.`,
        icon: "info",
        confirmButtonColor: "#2563eb",
        customClass: { popup: "rounded-3xl font-sans" }
      });
      return;
    }

    // Pushing product entry node into layout array
    existingCart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // 🔥 DISPATCH CUSTOM EVENT TO UPDATE NAVBAR COUNTER INSTANTLY
    window.dispatchEvent(new Event("cartUpdated"));

    // Success confirmation popup
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.title} added successfully.`,
      icon: "success",
      confirmButtonColor: "#2563eb",
      customClass: { popup: "rounded-3xl font-sans" }
    });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-black text-blue-600 animate-pulse tracking-widest uppercase">Streaming Global Inventory Archive...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans antialiased text-gray-900">
      
      {/* HERO BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 shadow-sm px-5 py-2 rounded-full text-xs font-black uppercase text-blue-700 tracking-wider mb-6">
            <Sparkles className="w-4 h-4" /> Global Inventory Stream
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight uppercase">
            Explore Core
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Product Archive
            </span>
          </h1>
          
          {/* VIEW CART FLOATING BUTTON */}
          <div className="mt-8">
            <Link href="/cart" className="inline-flex items-center gap-2 bg-gray-950 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-gray-800 transition shadow-lg">
              <ShoppingCart className="w-4 h-4 text-blue-400" /> Open Shopping Cart
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS DISPLAY GRID */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Active Stock Indices</h2>
              <p className="text-xs text-gray-400 font-bold mt-0.5">Fetched smoothly via localized service architecture</p>
            </div>
            
            <Link 
              href="/products/create"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition"
            >
              <PlusCircle className="w-4 h-4" /> Seed New Inventory
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              // Precompute checking flag for modularity
              const isOutOfStock = (product.stock ?? 0) <= 0;

              return (
                <article
                  key={product._id}
                  className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 border border-gray-200/60 flex flex-col hover:-translate-y-1.5"
                >
                  <div className="h-56 bg-gray-50 border-b border-gray-100 flex items-center justify-center relative group p-6">
                    <img 
                      src={product.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30"} 
                      alt={product.title} 
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-102"
                    />
                    
                    {/* 🚨 DYNAMIC BADGE OVERLAY */}
                    <div className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md text-white ${isOutOfStock ? "bg-red-600 animate-pulse" : "bg-gray-950"}`}>
                      {isOutOfStock ? "Out of Stock" : (product.category || "Hardware")}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        <Layers className="w-3.5 h-3.5 text-blue-500" />
                        <span>Stock Units: <span className={`font-mono font-black ${isOutOfStock ? "text-red-500" : "text-gray-900"}`}>{product.stock ?? 0}</span></span>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 tracking-tight line-clamp-1">{product.title}</h3>
                      <p className="text-xs text-gray-400 font-semibold leading-relaxed line-clamp-3">{product.description}</p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Pipeline Valuation</p>
                        <p className="text-lg font-black text-gray-950 mt-0.5">{formatPrice(product.price)}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/products/${product._id}`}
                          className="text-xs font-black uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-700 px-3 py-2.5 rounded-xl hover:bg-gray-100 transition"
                        >
                          Inspect
                        </Link>
                        
                        {/* 🚨 DISABLED IF OUT OF STOCK CONTROLLER */}
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={isOutOfStock}
                          className={`text-xs font-black uppercase tracking-wider px-3 py-2.5 rounded-xl transition flex items-center gap-1 shadow-sm ${isOutOfStock ? "bg-gray-100 text-gray-400 cursor-not-allowed border" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                        >
                          <ShoppingCart className="w-3.5 h-3.5" /> {isOutOfStock ? "Sold Out" : "+Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {products.length === 0 && (
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-200 p-16 text-center mt-6 max-w-2xl mx-auto">
              <ShoppingBag className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">No Active Products</h2>
              <p className="text-sm text-gray-500 max-w-sm mx-auto mt-2 font-semibold">Service endpoint array is currently empty.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}