"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  Star, 
  Truck, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  PackageX
} from "lucide-react";
import { getProducts } from "@/services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      
      {/* 1. TOP ANNOUNCEMENT BAR & NAV LINKS */}
      <div className="bg-black text-white text-xs py-2 text-center font-medium">
        🎉 Free delivery on orders over $50! • ⚡ Fast Support 24/7
      </div>
      
      <nav className="flex justify-center gap-8 py-4 border-b text-sm font-semibold text-gray-600 hover:text-gray-900 transition shadow-sm">
        <Link href="/product" className="hover:text-blue-600 transition">Products</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        <Link href="/help" className="hover:text-blue-600 transition">Help & Support</Link>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6 text-left">
            <span className="bg-blue-600 text-white text-xs uppercase px-3 py-1 rounded-full font-bold tracking-wider">
              New Season Drop
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Build Your Dream Store <span className="text-blue-400">at Best Prices</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Modern Next.js Ecommerce Platform with premium gadgets, fashion, and lifestyle products. Fast delivery, secure payments, and trusted worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product" className="bg-white text-black hover:bg-gray-100 px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 shadow-lg transition transform hover:-translate-y-0.5">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="border border-gray-500 hover:border-white px-8 py-3.5 rounded-xl font-semibold transition bg-white/5 backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Premium Product Banner"
              className="w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Truck size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Fast & Free Delivery</h3>
            <p className="text-gray-500 text-sm">Get products delivered within 24–48 hours anywhere with real-time tracking.</p>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
            <p className="text-gray-500 text-sm">Fully encrypted and safe payment system supporting all major credit cards.</p>
          </div>

          <div className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Top Quality Products</h3>
            <p className="text-gray-500 text-sm">Curated items from verified global brands with 100% authenticity guarantee.</p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION (WITH LOADING AND FALLBACK) */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Our Shop</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-1">🔥 Featured Products</h2>
            </div>
            <Link href="/product" className="text-blue-600 font-bold hover:underline flex items-center gap-1 text-sm">
              See All Products <ArrowRight size={16} />
            </Link>
          </div>

          {/* LOADING STATE (SKELETON ANIMATION) */}
          {loading && (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border bg-white rounded-2xl p-4 animate-pulse space-y-4">
                  <div className="bg-gray-200 h-48 w-full rounded-xl"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
                </div>
              ))}
            </div>
          )}

          {/* EMPTY / API ERROR STATE */}
          {!loading && products.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-gray-300 max-w-md mx-auto p-8 shadow-sm">
              <PackageX className="mx-auto text-gray-400 mb-4 animate-bounce" size={48} />
              <h3 className="text-xl font-bold text-gray-700">No Products Found</h3>
              <p className="text-gray-500 text-sm mt-2">
                Hamein afsos hai, is waqt API se products nahi aa rahe hain. Please check back later ya dummy data add karein.
              </p>
              <button onClick={() => window.location.reload()} className="mt-5 bg-black text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition">
                Retry Fetching
              </button>
            </div>
          )}

          {/* REAL PRODUCTS GRID */}
          {!loading && products.length > 0 && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((p) => (
                <div key={p._id} className="group border bg-white rounded-2xl p-4 hover:shadow-xl transition duration-300 relative">
                  <div className="overflow-hidden rounded-xl bg-gray-100 relative">
                    <img 
                      src={p.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30"} 
                      alt={p.title}
                      className="h-48 w-full object-cover group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="font-bold text-gray-800 text-lg line-clamp-1 group-hover:text-blue-600 transition">{p.title}</h3>
                    <p className="text-xl font-black text-gray-900">${p.price}</p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link
                      href={`/product/${p._id}`}
                      className="text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl font-semibold text-sm transition"
                    >
                      View Details
                    </Link>
                    <button className="bg-black hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm transition shadow-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">What Our Happy Customers Say</h2>
        <p className="text-center text-gray-500 max-w-md mx-auto mb-12">Real reviews from verified accounts who absolutely love our platform.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Ali Khan", text: "Amazing product quality and lightning-fast delivery service! Strongly recommended.", role: "Verified Buyer" },
            { name: "Sara Ahmed", text: "The client support was amazing. Product is exactly as described on the store.", role: "Premium Member" },
            { name: "Ahmed Raza", text: "Very smooth checkout process and sleek interface. Next.js speed is unmatched!", role: "Tech Enthusiast" }
          ].map((t, i) => (
            <div key={i} className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic">"{t.text}"</p>
              <div className="mt-6 border-t pt-4">
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <span className="text-xs text-gray-400">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE FAQ SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Aapke aam sawalaat ke tafseeli jawabaat yahan hain.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How fast is the delivery process?", a: "Standard delivery takes 24–48 hours depending on your city location. Express shipping option is also available at checkout." },
              { q: "Is my payment information secure?", a: "Yes, 100%. We use industry-standard SSL encryption and modern secure payment gateways like Stripe to protect your sensitive data." },
              { q: "What is your return and refund policy?", a: "We offer a hassle-free 7-day money-back guarantee. If you are not satisfied with the product, you can request a return directly from your dashboard." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border rounded-2xl overflow-hidden transition shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:bg-gray-50 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION (CTA) */}
      <section className="bg-black text-white text-center py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Start Your Shopping Journey Today</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Join thousands of happy customers and experience premium shopping experience like never before.
          </p>
          <Link
            href="/product"
            className="mt-4 inline-block bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition shadow-lg transform hover:scale-105"
          >
            Explore All Products
          </Link>
        </div>
      </section>

    </div>
  );
}