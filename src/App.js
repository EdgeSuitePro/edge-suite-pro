import React, { useState, useRef } from 'react';
import { Camera, FileText, Users, DollarSign, Eye, Edit3, Check, Clock, Package, Mail, Calendar, Star, Gift, UserPlus, Settings, Send, Download, Phone, MapPin, Zap } from 'lucide-react';

const EdgeSuitePro = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [businessSettings, setBusinessSettings] = useState({
    businessName: 'Edge Suite Pro Sharpening',
    ownerName: 'John Sharpener',
    email: 'contact@edgesuitepro.com',
    phone: '(555) 123-EDGE',
    address: '123 Sharp Street, Blade City, BC 12345',
    website: 'www.edgesuitepro.com',
    googleReviewUrl: 'https://g.page/r/YourBusinessGoogleReview/review'
  });

  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      customerName: 'John Smith',
      customerEmail: 'john@email.com',
      customerPhone: '(555) 123-4567',
      knives: [
        { id: 1, type: 'Chef Knife', stage: 'received', beforePhoto: null, afterPhoto: null },
        { id: 2, type: 'Paring Knife', stage: 'inspection', beforePhoto: null, afterPhoto: null }
      ],
      totalAmount: 25.00,
      createdAt: '2024-08-20',
      status: 'in-progress',
      invoiceSent: false
    }
  ]);
  
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '(555) 123-4567', totalOrders: 3, loyaltyPoints: 45, tier: 'Silver' }
  ]);

  const [showInvoice, setShowInvoice] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const stages = [
    { key: 'received', label: 'Received', color: 'bg-blue-100 text-blue-800' },
    { key: 'inspection', label: 'Inspection', color: 'bg-yellow-100 text-yellow-800' },
    { key: 'sharpening', label: 'Sharpening', color: 'bg-orange-100 text-orange-800' },
    { key: 'finishing', label: 'Finishing', color: 'bg-purple-100 text-purple-800' },
    { key: 'complete', label: 'Complete', color: 'bg-green-100 text-green-800' }
  ];

  const fileInputRef = useRef(null);
  const [photoContext, setPhotoContext] = useState(null);

  const handlePhotoCapture = (event) => {
    const file = event.target.files[0];
    if (file && photoContext) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const { orderId, knifeId, photoType } = photoContext;
        setOrders(prev => prev.map(order => {
          if (order.id === orderId) {
            return {
              ...order,
              knives: order.knives.map(knife => {
                if (knife.id === knifeId) {
                  return { ...knife, [photoType]: e.target.result };
                }
                return knife;
              })
            };
          }
          return order;
        }));
      };
      reader.readAsDataURL(file);
      setPhotoContext(null);
    }
  };

  const triggerPhotoCapture = (orderId, knifeId, photoType) => {
    setPhotoContext({ orderId, knifeId, photoType });
    fileInputRef.current?.click();
  };

  const updateKnifeStage = (orderId, knifeId, newStage) => {
    setOrders(prev => prev.map(order => {
      if (order.id === orderId) {
        const updatedKnives = order.knives.map(knife => {
          if (knife.id === knifeId) {
            return { ...knife, stage: newStage };
          }
          return knife;
        });
        
        const allComplete = updatedKnives.every(knife => knife.stage === 'complete');
        return {
          ...order,
          knives: updatedKnives,
          status: allComplete ? 'ready' : 'in-progress'
        };
      }
      return order;
    }));
  };

  const generateInvoice = (order) => {
    const customer = customers.find(c => c.name === order.customerName);
    return {
      id: `INV-${order.id.split('-')[1]}`,
      orderId: order.id,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      items: order.knives.map(knife => ({
        description: `${knife.type} Sharpening`,
        quantity: 1,
        rate: 15.00
      })),
      total: order.totalAmount,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      createdDate: new Date().toLocaleDateString()
    };
  };

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-md">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$2,847</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-md">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-900">87</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-md">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Review Score</p>
              <p className="text-2xl font-semibold text-gray-900">4.9/5.0</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-md">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Customers</p>
              <p className="text-2xl font-semibold text-gray-900">234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const OrderCard = ({ order }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
          <p className="text-gray-600">{order.customerName}</p>
          <p className="text-sm text-gray-500">{order.createdAt}</p>
        </div>
        <div className="text-right">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            order.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {order.status === 'ready' ? 'Ready for Pickup' : 'In Progress'}
          </span>
          <p className="text-lg font-bold text-gray-900 mt-1">${order.totalAmount.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        {order.knives.map(knife => (
          <div key={knife.id} className="border rounded-lg p-3 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{knife.type}</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                stages.find(s => s.key === knife.stage)?.color || 'bg-gray-100 text-gray-800'
              }`}>
                {stages.find(s => s.key === knife.stage)?.label}
              </span>
            </div>
            
            <div className="flex gap-2 mb-2">
              {stages.map(stage => (
                <button
                  key={stage.key}
                  onClick={() => updateKnifeStage(order.id, knife.id, stage.key)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    knife.stage === stage.key 
                      ? stage.color 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {stage.label}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-1">Before Photo</p>
                {knife.beforePhoto ? (
                  <img src={knife.beforePhoto} alt="Before" className="w-16 h-16 object-cover rounded border" />
                ) : (
                  <button
                    onClick={() => triggerPhotoCapture(order.id, knife.id, 'beforePhoto')}
                    className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center hover:border-blue-400 transition-colors"
                  >
                    <Camera className="w-6 h-6 text-gray-400" />
                  </button>
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-1">After Photo</p>
                {knife.afterPhoto ? (
                  <img src={knife.afterPhoto} alt="After" className="w-16 h-16 object-cover rounded border" />
                ) : (
                  <button
                    onClick={() => triggerPhotoCapture(order.id, knife.id, 'afterPhoto')}
                    className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center hover:border-blue-400 transition-colors"
                    disabled={knife.stage !== 'complete'}
                  >
                    <Camera className="w-6 h-6 text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => setShowInvoice(generateInvoice(order))}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          View Invoice
        </button>
      </div>
    </div>
  );

  const InvoiceModal = ({ invoice, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Invoice {invoice.id}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">{businessSettings.businessName}</h3>
                <p className="text-gray-600">Professional Knife Sharpening Services</p>
                <p className="text-gray-600">{businessSettings.email}</p>
                <p className="text-gray-600">{businessSettings.phone}</p>
                <p className="text-gray-600">{businessSettings.address}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">Invoice Date: {invoice.createdDate}</p>
                <p className="text-gray-600">Due Date: {invoice.dueDate}</p>
                <p className="text-gray-600">Order: {invoice.orderId}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Bill To:</h4>
            <p className="font-medium">{invoice.customerName}</p>
            <p className="text-gray-600">{invoice.customerEmail}</p>
          </div>
          
          <div className="mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Description</th>
                  <th className="text-center py-2">Qty</th>
                  <th className="text-right py-2">Rate</th>
                  <th className="text-right py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{item.description}</td>
                    <td className="text-center py-2">{item.quantity}</td>
                    <td className="text-right py-2">${item.rate.toFixed(2)}</td>
                    <td className="text-right py-2">${(item.quantity * item.rate).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-end mb-6">
            <div className="text-right">
              <div className="text-xl font-bold border-t pt-2">
                Total: ${invoice.total.toFixed(2)}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600 mb-3">
              Payment is due within 7 days. Thank you for choosing {businessSettings.businessName}!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handlePhotoCapture}
        style={{ display: 'none' }}
        capture="environment"
      />
      
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Edit3 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edge Suite Pro</h1>
                <p className="text-sm text-gray-600">{businessSettings.businessName}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { key: 'dashboard', label: 'Dashboard', icon: Eye },
              { key: 'orders', label: 'Orders', icon: Package },
              { key: 'customers', label: 'Customers', icon: Users }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}

        {activeTab === 'orders' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {orders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'customers' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customers</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loyalty</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customers.map(customer => (
                    <tr key={customer.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{customer.email}</div>
                        <div className="text-sm text-gray-500">{customer.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.totalOrders}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{customer.loyaltyPoints} points</div>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {customer.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {showInvoice && (
        <InvoiceModal
          invoice={showInvoice}
          onClose={() => setShowInvoice(null)}
        />
      )}
    </div>
  );
};

export default EdgeSuitePro;
