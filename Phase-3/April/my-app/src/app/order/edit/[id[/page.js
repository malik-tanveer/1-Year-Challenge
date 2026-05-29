"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, RefreshCw, MapPin, Phone, User, Package } from "lucide-react";
import formatPrice from "@/utils/formatPrice";
import Swal from "sweetalert2";

// Import your dedicated order service channels
import { getOrders, updateOrder } from "@/services/orderService"; 

export default function EditOrderPage({ params }) {
  const unwrappedParams = use(params);
  const orderId = unwrappedParams.id;
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [orderData, setOrderData] = useState(null);

  // Shipping information form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  
  // Products quantities handling state array
  const [productQuantities, setProductQuantities] = useState([]);

  useEffect(() => {
    fetchSingleOrderContext();
  }, [orderId]);

  const fetchSingleOrderContext = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await getOrders(token);
      if (res.success) {
        const targetedOrder = res.orders.find((o) => o._id === orderId);
        
        if (targetedOrder) {
          if (targetedOrder.status !== "pending") {
            Swal.fire("Access Denied", "Only pending status orders can be edited.", "error");
            router.push("/orders");
            return;
          }
          setOrderData(targetedOrder);
          setFullName(targetedOrder.shippingAddress?.fullName || "");
          setPhone(targetedOrder.shippingAddress?.phone || "");
          setAddress(targetedOrder.shippingAddress?.address || "");
          setCity(targetedOrder.shippingAddress?.city || "");
          setPostalCode(targetedOrder.shippingAddress?.postalCode || "");
          
          // Map all existing order items quantity map
          const initialQuantities = targetedOrder.products?.map(p => ({
            productId: p.productId,
            quantity: p.quantity || 1,
            price: p.price || 0
          })) || [];
          setProductQuantities(initialQuantities);

        } else {
          throw new Error("Order trace not found inside pipeline.");
        }
      }
    } catch (err) {
      Swal.fire("Fetch Error", err.message, "error");
      router.push("/orders");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Dynamically manage specific item quantities updates
  const handleQtyChange = (prodId, newQty) => {
    setProductQuantities(prev => 
      prev.map(item => item.productId === prodId ? { ...item, quantity: Math.max(1, Number(newQty)) } : item)
    );
  };

  // 🔥 Calculate total updated price based on changed states
  const calculateLiveTotal = () => {
    return productQuantities.reduce((acc, current) => acc + (current.price * current.quantity), 0);
  };

  const handleUpdateOrderSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    const token = localStorage.getItem("token");

    const payload = {
      products: productQuantities.map(p => ({ productId: p.productId, quantity: p.quantity })),
      totalPrice: calculateLiveTotal(),
      shippingAddress: {
        ...orderData.shippingAddress,
        fullName,
        phone,
        address,
        city,
        postalCode
      }
    };

    try {
      const res = await updateOrder(orderId, payload, token);
      if (res.success) {
        await Swal.fire({
          title: "Order Processed!",
          text: "Quantities and profile saved successfully.",
          icon: "success",
          confirmButtonColor: "#2563eb"
        });
        router.push("/orders");
      }
    } catch (error) {
      Swal.fire("Mutation Error", error.response?.data?.message || "Failed saving payload", "error");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-6 font-sans text-gray-900">
      <div className="max-w-3xl mx-auto">
        
        <button onClick={() => router.push("/orders")} className="inline-flex items-center gap-2 text-xs font-black uppercase text-blue-700 tracking-wider hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Discard & Return
        </button>

        <div className="bg-white rounded-[36px] shadow-2xl border border-gray-100 p-8 sm:p-10">
          <div className="border-b pb-6 mb-8">
            <h1 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-gray-950">
              <Package className="w-6 h-6 text-blue-600" /> Modify Order Details
            </h1>
            <p className="text-[10px] font-mono font-bold text-gray-400 uppercase mt-1">Order UID Context: {orderId}</p>
          </div>

          <form onSubmit={handleUpdateOrderSubmit} className="space-y-6">
            
            {/* DYNAMIC MULTI-PRODUCT QUANTITY CONTROLLERS */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-4">
              <label className="text-[11px] font-black uppercase tracking-wider text-blue-800 block">
                Products Inventory (itna nahi to itna)
              </label>
              
              {orderData?.products?.map((product) => {
                const currentQtyState = productQuantities.find(p => p.productId === product.productId)?.quantity || 1;
                return (
                  <div key={product.productId} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-blue-100/50">
                    <img src={product.image} alt={product.title} className="w-12 h-12 object-contain bg-gray-50 rounded-lg p-1 border" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-gray-900 truncate">{product.title}</p>
                      <p className="text-[10px] font-bold text-gray-400 font-mono uppercase mt-0.5">
                        {formatPrice(product.price)} Each
                      </p>
                    </div>
                    <input 
                      type="number" 
                      min="1" 
                      required
                      value={currentQtyState} 
                      onChange={(e) => handleQtyChange(product.productId, e.target.value)}
                      className="w-20 text-center font-mono font-black text-xs p-2 border rounded-lg bg-gray-50 outline-none focus:border-blue-500 transition" 
                    />
                  </div>
                );
              })}
            </div>

            {/* IDENTITY TARGETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                  <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full text-xs font-semibold pl-9 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">Contact Phone</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                  <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full text-xs font-semibold pl-9 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
                </div>
              </div>
            </div>

            {/* GEOGRAPHIC TARGET DETAILS */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">Street Address</label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
                <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} className="w-full text-xs font-semibold pl-9 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">City</label>
                <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} className="w-full text-xs font-semibold p-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">Postal Code</label>
                <input type="text" required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="w-full text-xs font-semibold p-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
              </div>
            </div>

            {/* TOTAL PRICE AND ACTION BUTTON */}
            <div className="pt-4 border-t flex justify-between items-center gap-4">
              <div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Recalculated Total</span>
                <span className="text-xl font-black font-mono text-gray-950 block">
                  {formatPrice(calculateLiveTotal())}
                </span>
              </div>

              <button
                type="submit"
                disabled={updating}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-md transition ${updating ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                <ShieldCheck className="w-4 h-4" /> {updating ? "Saving Changes..." : "Save Order Changes"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}