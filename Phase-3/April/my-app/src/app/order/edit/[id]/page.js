"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck, RefreshCw, MapPin, Phone, User, Package, Info, Tag } from "lucide-react";
import formatPrice from "@/utils/formatPrice";
import Swal from "sweetalert2";

import { getOrders, getOrdersAdmin, updateOrder } from "@/services/orderService"; 

export default function EditOrderPage({ params }) {
  const unwrappedParams = use(params);
  const orderId = unwrappedParams.id;
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [isAdminUser, setIsAdminUser] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("Pakistan");
  const [status, setStatus] = useState("pending");
  const [orderNotes, setOrderNotes] = useState("");
  
  // Custom Admin Discount Control
  const [discount, setDiscount] = useState(0); 
  
  // Products quantities
  const [productQuantities, setProductQuantities] = useState([]);

  useEffect(() => {
    fetchSingleOrderContext();
  }, [orderId]);

  const fetchSingleOrderContext = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const isAdmin = user.role === "admin";
    setIsAdminUser(isAdmin);

    try {
      const res = isAdmin ? await getOrdersAdmin(token) : await getOrders(token);
      
      if (res.success) {
        const targetedOrder = res.orders.find((o) => o._id === orderId);
        
        if (targetedOrder) {
          if (targetedOrder.status !== "pending" && !isAdmin) {
            Swal.fire("Access Denied", "Only pending status orders can be edited by clients.", "error");
            router.push("/order"); 
            return;
          }

          setOrderData(targetedOrder);
          setFullName(targetedOrder.shippingAddress?.fullName || "");
          setPhone(targetedOrder.shippingAddress?.phone || "");
          setAddress(targetedOrder.shippingAddress?.address || "");
          setCity(targetedOrder.shippingAddress?.city || "");
          setPostalCode(targetedOrder.shippingAddress?.postalCode || "");
          setCountry(targetedOrder.shippingAddress?.country || "Pakistan");
          setStatus(targetedOrder.status || "pending");
          setOrderNotes(targetedOrder.orderNotes || "");
          
          const initialQuantities = targetedOrder.products?.map(p => ({
            productId: p.productId,
            title: p.title, 
            image: p.image, 
            quantity: p.quantity || 1,
            price: p.price || 0
          })) || [];
          setProductQuantities(initialQuantities);

        } else {
          throw new Error("Order trace not found inside database registries.");
        }
      }
    } catch (err) {
      Swal.fire("Fetch Error", err.message, "error");
      router.push("/order"); 
    } finally {
      setLoading(false);
    }
  };

  const handleQtyChange = (prodId, newQty) => {
    setProductQuantities(prev => 
      prev.map(item => item.productId === prodId ? { ...item, quantity: Math.max(1, Number(newQty)) } : item)
    );
  };

  // 🔥 Dynamically calculates subtotal minus the custom administrator discount
  const calculateLiveTotal = () => {
    const subtotal = productQuantities.reduce((acc, current) => acc + (current.price * current.quantity), 0);
    return Math.max(0, subtotal - Number(discount)); 
  };

  const handleUpdateOrderSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    const token = localStorage.getItem("token");

    const payload = {
      products: productQuantities.map(p => ({ productId: p.productId, quantity: p.quantity })),
      totalPrice: calculateLiveTotal(), // Sends discounted price directly
      status: status,
      orderNotes: orderNotes,
      shippingAddress: {
        fullName,
        phone,
        address,
        city,
        postalCode,
        country
      }
    };

    try {
      const res = await updateOrder(orderId, payload, token);
      if (res.success) {
        await Swal.fire({
          title: "Order Processed!",
          text: "Database registers updated successfully.",
          icon: "success",
          confirmButtonColor: "#2563eb"
        });
        router.push("/order"); // Redirect match complete
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
        
        <button onClick={() => router.push("/order")} className="inline-flex items-center gap-2 text-xs font-black uppercase text-blue-700 tracking-wider hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Discard & Return
        </button>

        <div className="bg-white rounded-[36px] shadow-2xl border border-gray-100 p-8 sm:p-10">
          <div className="border-b pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 text-gray-950">
                <Package className="w-6 h-6 text-blue-600" /> Modify Order Details
              </h1>
              <p className="text-[10px] font-mono font-bold text-gray-400 uppercase mt-1">Order UID: {orderId}</p>
            </div>
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1.5 border rounded-xl bg-amber-50 text-amber-800 border-amber-200 self-start sm:self-center">
              Active Status: {orderData?.status}
            </span>
          </div>

          <form onSubmit={handleUpdateOrderSubmit} className="space-y-6">
            
            {/* PRODUCT LIST ENGINE */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-4">
              <label className="text-[11px] font-black uppercase tracking-wider text-blue-800 block">
                Products Inventory (One-By-One Control)
              </label>
              
              {productQuantities.map((product) => (
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
                    value={product.quantity} 
                    onChange={(e) => handleQtyChange(product.productId, e.target.value)}
                    className="w-20 text-center font-mono font-black text-xs p-2 border rounded-lg bg-gray-50 outline-none focus:border-blue-500 transition" 
                  />
                </div>
              ))}
            </div>

            {/* LIFECYCLE CONTROLLER */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5">
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-500 block mb-1.5">
                Mutate Lifecycle State
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                disabled={!isAdminUser}
                className="w-full text-xs font-bold p-3.5 rounded-xl border bg-white shadow-sm outline-none cursor-pointer focus:border-blue-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>

            {/* 🔥 DISCOUNT SECTION FOR ADMIN */}
            {isAdminUser && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <label className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-4 h-4" /> Grant Special Order Discount ($)
                </label>
                <input 
                  type="number" 
                  min="0"
                  value={discount}
                  onChange={(e) => setDiscount(Math.max(0, Number(e.target.value)))}
                  placeholder="Enter custom discount amount..." 
                  className="w-full text-xs font-semibold p-3.5 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:border-emerald-500 transition font-mono font-bold"
                />
              </div>
            )}

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
                  <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full text-xs font-semibold pl-9 pr-4 py-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
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

            {/* COUNTRY SELECTION */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">Country</label>
              <input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} className="w-full text-xs font-semibold p-3 rounded-xl border bg-gray-50 focus:bg-white outline-none focus:border-blue-500 transition" />
            </div>

            {/* TOTAL PRICE AND ACTION BUTTON */}
            <div className="pt-4 border-t flex justify-between items-center gap-4">
              <div>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Final Total Payable</span>
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