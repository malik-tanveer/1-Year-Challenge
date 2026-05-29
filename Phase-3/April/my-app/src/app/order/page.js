"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // 👈 Next.js Router for Page Navigation
import { Package, ShieldAlert, Trash2, RefreshCw, User, Edit3 } from "lucide-react";
import formatPrice from "@/utils/formatPrice";
import Swal from "sweetalert2";

// Import your dedicated order service channels
import { getOrders, getOrdersAdmin, updateOrder, deleteOrder } from "@/services/orderService"; 

export default function OrdersPage() {
  const router = useRouter(); // 👈 Initializing Router
  const [myOrders, setMyOrders] = useState([]);
  const [adminOrders, setAdminOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("user"); // user OR admin
  const [userRole, setUserRole] = useState("user");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
    setUserRole(user.role || "user");
    fetchOrdersPipeline();
  }, []);

  const fetchOrdersPipeline = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")) || {};

    try {
      // 1. Fetch Logged-in User's Orders via Service
      const resMy = await getOrders(token);
      if (resMy.success) setMyOrders(resMy.orders);

      // 2. If Profile is Admin, Fetch All System Orders via Service
      if (user.role === "admin") {
        const resAdmin = await getOrdersAdmin(token);
        if (resAdmin.success) setAdminOrders(resAdmin.orders);
      }
    } catch (error) {
      console.error("Logistics stream error:", error);
      Swal.fire("Fetch Error", "Could not load order registries.", "error");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 ADMIN STATUS UPDATE DISPATCHER (Using Service)
  const handleUpdateStatus = async (orderId, newStatus) => {
    const token = localStorage.getItem("token");
    try {
      const res = await updateOrder(orderId, { status: newStatus }, token);
      if (res.success) {
        Swal.fire({
          title: "Status Mutated!",
          text: `Order verification signature set to: ${newStatus}`,
          icon: "success",
          confirmButtonColor: "#2563eb"
        });
        fetchOrdersPipeline(); // Refresh UI data arrays
      }
    } catch (error) {
      Swal.fire("Action Halted", error.response?.data?.message || "Status update failed", "error");
    }
  };

  // 🗑️ DELETE ORDER WITH STOCK RESTORATION (Using Service)
  const handleDeleteOrder = async (orderId) => {
    const token = localStorage.getItem("token");
    
    Swal.fire({
      title: "Are you sure?",
      text: "This will completely delete the order record and restore product inventory levels!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, execute deletion!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteOrder(orderId, token);
          if (res.success) {
            Swal.fire("Deleted!", "Order record destroyed and stock rolled back.", "success");
            fetchOrdersPipeline(); // Sync tables immediately
          }
        } catch (error) {
          Swal.fire("Deletion Refused", error.response?.data?.message || "Failed to drop data node", "error");
        }
      }
    });
  };

  const getStatusStyle = (status) => {
    const mapping = {
      pending: "bg-amber-100 text-amber-800 border-amber-200",
      paid: "bg-blue-100 text-blue-800 border-blue-200",
      shipped: "bg-indigo-100 text-indigo-800 border-indigo-200",
      delivered: "bg-emerald-100 text-emerald-800 border-emerald-200",
    };
    return `text-[10px] uppercase font-black tracking-widest px-2.5 py-1 border rounded-md ${mapping[status] || "bg-gray-100 text-gray-800"}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  const currentDisplayList = activeTab === "admin" ? adminOrders : myOrders;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* MANAGEMENT PANEL BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b pb-6">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-950 flex items-center gap-3">
              <Package className="w-8 h-8 text-blue-600" /> Logistics Ledger
            </h1>
            <p className="text-xs font-bold text-gray-400 uppercase mt-1">Unified orders processing matrix</p>
          </div>

          {/* ADMIN TOGGLE SWAPPER */}
          {userRole === "admin" && (
            <div className="flex bg-gray-200 p-1.5 rounded-2xl border shadow-inner">
              <button onClick={() => setActiveTab("user")} className={`text-xs font-black uppercase px-5 py-2.5 rounded-xl transition ${activeTab === "user" ? "bg-white text-blue-600 shadow-md" : "text-gray-500 hover:text-gray-900"}`}>My Dashboard</button>
              <button onClick={() => setActiveTab("admin")} className={`text-xs font-black uppercase px-5 py-2.5 rounded-xl transition flex items-center gap-2 ${activeTab === "admin" ? "bg-white text-red-600 shadow-md" : "text-gray-500 hover:text-gray-900"}`}><ShieldAlert className="w-4 h-4" /> Admin Console</button>
            </div>
          )}
        </div>

        {/* COMPONENT CARDS */}
        {currentDisplayList.length === 0 ? (
          <div className="bg-white rounded-[32px] border p-12 text-center shadow-sm">
            <h2 className="text-lg font-black text-gray-400 uppercase">No active transaction structures logged</h2>
          </div>
        ) : (
          <div className="space-y-6">
            {currentDisplayList.map((order) => (
              <div key={order._id} className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* META METRICS COL */}
                <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r pb-6 lg:pb-0 lg:pr-6 border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase">UID: {order._id}</span>
                    <span className={getStatusStyle(order.status)}>{order.status}</span>
                  </div>
                  
                  {activeTab === "admin" && (
                    <div className="bg-slate-50 rounded-xl p-3 border text-xs font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-bold text-gray-950">{order.shippingAddress?.fullName || "Guest Account"}</p>
                        <p className="text-[10px] text-gray-400">Secure Client Node</p>
                      </div>
                    </div>
                  )}

                  <div className="text-xs text-gray-500 space-y-1 font-medium">
                    <p><strong className="text-gray-900">Destination:</strong> {order.shippingAddress?.address}, {order.shippingAddress?.city}</p>
                    <p><strong className="text-gray-900">Phone Reference:</strong> {order.shippingAddress?.phone}</p>
                    <p><strong className="text-gray-900">Payment Channel:</strong> <span className="underline font-bold text-blue-600">{order.paymentMethod}</span></p>
                    {order.orderNotes && <p className="bg-amber-50 text-amber-800 border border-amber-100 p-2 rounded-xl text-[11px] mt-2 italic">"{order.orderNotes}"</p>}
                  </div>
                </div>

                {/* PRODUCT LIST MATRIX */}
                <div className="lg:col-span-5 space-y-3 divide-y divide-gray-50">
                  {order.products?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 pt-3 first:pt-0">
                      <img src={item.image} alt={item.title} className="w-10 h-10 object-contain rounded-lg bg-gray-50 border p-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-black text-gray-900 truncate tracking-tight">{item.title}</h4>
                        <p className="text-[10px] font-bold font-mono text-gray-400 uppercase">{formatPrice(item.price)} × {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* MODIFIER STATIONS CONTROLLERS */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full lg:text-right gap-4 lg:pl-6 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Settlement Aggregation</span>
                    <span className="text-2xl font-black font-mono text-gray-950 block mt-1">{formatPrice(order.totalPrice)}</span>
                  </div>

                  {/* ADMIN ACTION ZONE */}
                  {activeTab === "admin" ? (
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-wider text-gray-400 block lg:text-right">Mutate Lifecycle State</label>
                      <div className="flex items-center gap-2 justify-end">
                        <select 
                          value={order.status} 
                          onChange={(e) => handleUpdateStatus(order._id, e.target.value)} 
                          className="text-xs font-bold p-2 rounded-xl border bg-gray-50 outline-none cursor-pointer w-full"
                        >
                          <option value="pending">Pending</option>
                          <option value="paid">Paid</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                        </select>
                        
                        {/* Admin Side Edit Button */}
                        <button 
                          onClick={() => router.push(`/order/edit/${order._id}`)}
                          className="p-2 bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 rounded-xl transition shadow-sm"
                          title="Edit Order Properties"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button 
                          onClick={() => handleDeleteOrder(order._id)} 
                          className="p-2 bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 rounded-xl transition shadow-sm"
                          title="Execute Rollback Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* USER CONTROL ZONE */
                    order.status === "pending" && (
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 justify-end">
                        {/* User Side Edit Button */}
                        <button 
                          onClick={() => router.push(`/order/edit/${order._id}`)}
                          className="w-full lg:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100 py-2.5 px-4 rounded-xl transition tracking-wide uppercase"
                        >
                          <Edit3 className="w-3.5 h-3.5" /> Edit Details
                        </button>
                        
                        <button 
                          onClick={() => handleDeleteOrder(order._id)} 
                          className="w-full lg:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 py-2.5 px-4 rounded-xl transition tracking-wide uppercase"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Cancel Order
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}