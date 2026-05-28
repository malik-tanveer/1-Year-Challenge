"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Trash2, ShieldCheck, Eye, Plus, Minus } from "lucide-react";
import formatPrice from "@/utils/formatPrice";
import Swal from "sweetalert2";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Update counter payload safely
  const updateQuantity = (id, amount) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        const newQuantity = (item.quantity || 1) + amount;
        // Keep constraints bounded between 1 and total stock allocation available
        return { ...item, quantity: Math.max(1, Math.min(newQuantity, item.stock || 10)) };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // Sync navbar count
  };

  const handleRemoveItem = (id, title) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    Swal.fire({
      title: "Removed!",
      text: `${title} drop operational parameter successful.`,
      icon: "success",
      confirmButtonColor: "#2563eb",
    });
  };

  // Matrix accumulation aggregation formula ($ Summation)
  const cartTotalValue = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  const handleMockCheckoutProcess = () => {
    Swal.fire({
      title: "Staging Framework Locked!",
      text: "Cart parameters are configured correctly. Moving to order microservice connection pipeline...",
      icon: "info",
      confirmButtonColor: "#2563eb",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans text-gray-900 antialiased py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase text-blue-700 tracking-wider hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Return to Catalog Stream
        </Link>

        <div className="bg-white rounded-[36px] shadow-2xl border border-gray-100 p-8 sm:p-12 overflow-hidden">
          <div className="border-b pb-6 mb-6">
            <h1 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-blue-600" /> Staging Cart
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 animate-bounce" />
              <h2 className="text-xl font-black text-gray-400 uppercase">Cart is Empty</h2>
              <Link href="/products" className="inline-block bg-blue-600 text-white text-xs font-black uppercase px-6 py-3.5 rounded-xl tracking-wider shadow-md mt-2">Browse Products</Link>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 first:pt-0 last:pb-0 gap-4">
                    
                    {/* PRODUCT OVERVIEW */}
                    <div className="flex items-center gap-4">
                      <Link href={`/products/${item._id}`} className="shrink-0 block group relative">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-xl bg-gray-50 p-2 border border-gray-100" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/5 rounded-xl"><Eye className="w-4 h-4 text-gray-700" /></div>
                      </Link>

                      <div>
                        <Link href={`/products/${item._id}`} className="font-black text-gray-900 tracking-tight text-base hover:text-blue-600 transition line-clamp-1">{item.title}</Link>
                        <span className="text-[10px] bg-slate-100 font-bold uppercase tracking-widest text-slate-500 px-2 py-0.5 rounded-md mt-1 inline-block">{item.category}</span>
                      </div>
                    </div>

                    {/* QUANTITY CONSOLES & INTERACTION TOOLS */}
                    <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto border-t sm:border-0 pt-4 sm:pt-0">
                      
                      {/* QUANTITY MUTATOR SELECTOR COUNTER */}
                      <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1.5 bg-gray-50/50">
                        <button onClick={() => updateQuantity(item._id, -1)} className="p-1 rounded-md bg-white hover:bg-gray-100 text-gray-600 transition border shadow-sm"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="w-8 text-center font-mono font-black text-sm text-gray-950">{item.quantity || 1}</span>
                        <button onClick={() => updateQuantity(item._id, 1)} className="p-1 rounded-md bg-white hover:bg-gray-100 text-gray-600 transition border shadow-sm"><Plus className="w-3.5 h-3.5" /></button>
                      </div>

                      {/* SUB-AGGREGATION VALUE CALCULATIONS PROFILE */}
                      <div className="flex items-center gap-4">
                        <p className="font-mono font-black text-gray-950 text-sm min-w-[70px] text-right">{formatPrice(item.price * (item.quantity || 1))}</p>
                        <button onClick={() => handleRemoveItem(item._id, item.title)} className="text-red-500 hover:text-red-700 p-2 rounded-xl bg-red-50 border border-red-100 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* TOTAL ALLOCATION BOARD */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Aggregated Inventory Value</p>
                  <p className="text-2xl font-black text-gray-950 font-mono">{formatPrice(cartTotalValue)}</p>
                </div>
                
                <button onClick={handleMockCheckoutProcess} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition">
                  <ShieldCheck className="w-4 h-4" /> Proceed to Order Stage
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}