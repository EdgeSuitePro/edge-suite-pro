// Updated
import React, { useState, useRef } from 'react';
import { Camera, FileText, Users, DollarSign, Eye, Edit3, Check, Clock, Package, Mail, Calendar, Star, Gift, UserPlus, Settings, Send, Download, Phone, MapPin, Zap, ExternalLink } from 'lucide-react';

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
      appointmentDate: '2024-08-23',
      appointmentTime: '10:00 AM',
      knives: [
        { id: 1, type: 'Chef Knife', stage: 'received', beforePhoto: null, afterPhoto: null },
        { id: 2, type: 'Paring Knife', stage: 'inspection', beforePhoto: null, afterPhoto: null }
      ],
      totalAmount: 25.00,
      pointsUsed: 0,
      createdAt: '2024-08-20',
      status: 'in-progress',
      invoiceSent: false,
      reviewRequested: false,
      reviewCompleted: false,
      estimatedCompletion: '2024-08-24'
    },
    {
      id: 'ORD-002',
      customerName: 'Sarah Johnson',
      customerEmail: 'sarah@email.com',
      customerPhone: '(555) 987-6543',
      appointmentDate: '2024-08-22',
      appointmentTime: '2:00 PM',
      knives: [
        { id: 3, type: 'Hunting Knife', stage: 'complete', beforePhoto: 'data:before', afterPhoto: 'data:after' }
      ],
      totalAmount: 15.00,
      pointsUsed: 0,
      createdAt: '2024-08-19',
      status: 'ready',
      invoiceSent: true,
      reviewRequested: true,
      reviewCompleted: false,
      estimatedCompletion: '2024-08-22'
    }
  ]);
  
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '(555) 123-4567', totalOrders: 3, loyaltyPoints: 45, tier: 'Silver', referrals: 1, birthday: '1980-05-15', lastService: '2024-08-20' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '(555) 987-6543', totalOrders: 1, loyaltyPoints: 15, tier: 'Bronze', referrals: 0, birthday: '1992-09-10', lastService: '2024-08-19' }
  ]);

  const [appointments, setAppointments] = useState([
    { id: 'APT-001', customerName: 'Mike Wilson', email: 'mike@email.com', phone: '(555) 555-5555', date: '2024-08-24', time: '11:00 AM', service: 'standard', knifeCount: 3, status: 'confirmed', notes: 'Needs pickup by 5 PM' },
    { id: 'APT-002', customerName: 'Lisa Chen', email: 'lisa@email.com', phone: '(555) 444-4444', date: '2024-08-25', time: '3:00 PM', service: 'premium', knifeCount: 2, status: 'pending', notes: '' }
  ]);

  const [emailTemplates] = useState({
    appointmentConfirmation: {
      subject: 'Appointment Confirmed - {{businessName}}',
      body: `Dear {{customerName}},

Your knife sharpening appointment has been confirmed!

📅 Date: {{date}}
🕐 Time: {{time}}
🔪 Service: {{service}}
📍 Location: {{address}}

What to bring:
- Your knives in a safe carrying case
- Any special instructions

We'll have your knives razor-sharp and ready for pickup!

Best regards,
{{ownerName}}
{{businessName}}
{{phone}}`
    },
    orderReady: {
      subject: 'Your Knives are Ready! - {{businessName}}',
      body: `Hi {{customerName}},

Great news! Your knives have been professionally sharpened and are ready for pickup.

Order #: {{orderId}}
Service Date: {{serviceDate}}
Total Amount: ${{totalAmount}}

📍 Pickup Location: {{address}}
📞 Call us: {{phone}}

Your knives are now razor-sharp and ready to perform! We've included before/after photos so you can see the amazing transformation.

{{loyaltyMessage}}

Thanks for trusting us with your blades!

{{ownerName}}
{{businessName}}`
    },
    reviewRequest: {
      subject: 'How was your experience? - {{businessName}}',
      body: `Hi {{customerName}},

Thank you for choosing {{businessName}} for your knife sharpening needs!

We hope you're thrilled with your razor-sharp knives. Your feedback helps us serve you better and helps other customers discover our services.

🌟 Leave a Google Review (earn 25 loyalty points!):
{{googleReviewUrl}}

🎁 Current Loyalty Points: {{loyaltyPoints}}
💎 Membership Level: {{membershipTier}}

Your next sharpening service could be FREE with our loyalty program!

Sharply yours,
{{ownerName}}
{{businessName}}`
    }
  });

  const [analytics] = useState({
    totalRevenue: 2847.50,
    totalOrders: 87,
    averageOrderValue: 32.73,
    customerRetentionRate: 68,
    reviewScore: 4.9,
    totalReviews: 156,
    activeCustomers: 234,
    appointmentBookings: 45
  });

  const [showEmailPreview, setShowEmailPreview] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    date: '',
    time: '',
    service: 'standard',
    knifeCount: 1,
    notes: ''
  });

  const [showInvoice, setShowInvoice] = useState(null);
  const [showBookingPortal, setShowBookingPortal] = useState(false);
  const [showLoyaltyPortal, setShowLoyaltyPortal] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [newOrderForm, setNewOrderForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    knives: [{ type: '', stage: 'received' }]
  });

  const loyaltyTiers = {
    Bronze: { min: 0, multiplier: 1, color: 'bg-orange-100 text-orange-800', benefits: '10% points earning rate' },
    Silver: { min: 30, multiplier: 1.5, color: 'bg-gray-100 text-gray-800', benefits: '15% points earning rate, priority booking' },
    Gold: { min: 100, multiplier: 2, color: 'bg-yellow-100 text-yellow-800', benefits: '20% points earning rate, priority booking, exclusive discounts' }
  };

  const services = {
    standard: { name: 'Standard Sharpening', price: 12, points: 10, description: 'Professional knife sharpening with hand finishing' },
    premium: { name: 'Premium Sharpening', price: 18, points: 15, description: 'Premium sharpening with polishing and edge alignment' },
    restoration: { name: 'Blade Restoration', price: 25, points: 20, description: 'Complete blade restoration including repair work' }
  };

  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const stages = [
    { key: 'received', label: 'Received', color: 'bg-blue-100 text-blue-800' },
    { key: 'inspection', label: 'Inspection', color: 'bg-yellow-100 text-yellow-800' },
    { key: 'sharpening', label: 'Sharpening', color: 'bg-orange-100 text-orange-800' },
    { key: 'finishing', label: 'Finishing', color: 'bg-purple-100 text-purple-800' },
    { key: 'complete', label: 'Complete', color: 'bg-green-100 text-green-800' }
  ];

  const fileInputRef = useRef(null);
  const [photoContext, setPhotoContext] = useState(null);

  const getCustomerTier = (points) => {
    if (points >= 100) return 'Gold';
    if (points >= 30) return 'Silver';
    return 'Bronze';
  };

  const addLoyaltyPoints = (customerId, points, reason) => {
    setCustomers(prev => prev.map(customer => {
      if (customer.id === customerId) {
        const newPoints = customer.loyaltyPoints + points;
        const newTier = getCustomerTier(newPoints);
        return { ...customer, loyaltyPoints: newPoints, tier: newTier };
      }
      return customer;
    }));
  };

  const redeemPoints = (customerId, pointsToRedeem) => {
    setCustomers(prev => prev.map(customer => {
      if (customer.id === customerId && customer.loyaltyPoints >= pointsToRedeem) {
        return { ...customer, loyaltyPoints: customer.loyaltyPoints - pointsToRedeem };
      }
      return customer;
    }));
  };

  const sendEmail = (customer, templateType, extraData = {}) => {
    const template = emailTemplates[templateType];
    if (!template) return;
    
    const data = {
      customerName: customer.name || extraData.customerName,
      businessName: businessSettings.businessName,
      ownerName: businessSettings.ownerName,
      phone: businessSettings.phone,
      address: businessSettings.address,
      googleReviewUrl: businessSettings.googleReviewUrl,
      loyaltyPoints: customer.loyaltyPoints || 0,
      membershipTier: customer.tier || 'Bronze',
      ...extraData
    };

    let emailBody = template.body;
    let emailSubject = template.subject;

    Object.keys(data).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      emailBody = emailBody.replace(regex, data[key]);
      emailSubject = emailSubject.replace(regex, data[key]);
    });

    if (templateType === 'orderReady') {
      const loyaltyMessage = customer.loyaltyPoints >= 120 
        ? "🎉 You have enough points for a FREE standard sharpening! Visit our loyalty portal to redeem."
        : `🎁 You have ${customer.loyaltyPoints} loyalty points. Earn ${120 - customer.loyaltyPoints} more for a FREE sharpening!`;
      emailBody = emailBody.replace('{{loyaltyMessage}}', loyaltyMessage);
    }

    setShowEmailPreview({ subject: emailSubject, body: emailBody, to: customer.email || extraData.email });
  };

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
        const newStatus = allComplete ? 'ready' : 'in-progress';
        
        if (newStatus === 'ready' && order.status !== 'ready') {
          const customer = customers.find(c => c.name === order.customerName);
          if (customer) {
            setTimeout(() => {
              sendEmail(customer, 'orderReady', {
                orderId: order.id,
                serviceDate: order.createdAt,
                totalAmount: order.totalAmount.toFixed(2)
              });
            }, 1000);
          }
        }
        
        return {
          ...order,
          knives: updatedKnives,
          status: newStatus
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
      customerPoints: customer?.loyaltyPoints || 0,
      items: order.knives.map(knife => ({
        description: `${knife.type} Sharpening`,
        quantity: 1,
        rate: knife.type.toLowerCase().includes('chef') ? 15.00 : 
              knife.type.toLowerCase().includes('hunting') ? 15.00 : 12.00
      })),
      total: order.totalAmount,
      pointsUsed: order.pointsUsed,
      finalAmount: order.totalAmount - (order.pointsUsed * 0.10),
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      createdDate: new Date().toLocaleDateString()
    };
  };

  const usePointsForPayment = (orderId, pointsToUse) => {
    const order = orders.find(o => o.id === orderId);
    const customer = customers.find(c => c.name === order.customerName);
    
    if (customer && customer.loyaltyPoints >= pointsToUse) {
      const discount = pointsToUse * 0.10;
      const maxDiscount = order.totalAmount;
      const actualPointsUsed = Math.min(pointsToUse, maxDiscount / 0.10);
      
      setOrders(prev => prev.map(o => 
        o.id === orderId ? { ...o, pointsUsed: actualPointsUsed } : o
      ));
      
      redeemPoints(customer.id, actualPointsUsed);
    }
  };

  const sendInvoice = (orderId) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, invoiceSent: true } : order
    ));
    alert('Invoice sent successfully!');
  };

  const requestReview = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    const customer = customers.find(c => c.name === order.customerName);
    
    setOrders(prev => prev.map(o => 
      o.id === orderId ? { ...o, reviewRequested: true } : o
    ));
    
    if (customer) {
      sendEmail(customer, 'reviewRequest');
    }
  };

  const markReviewCompleted = (orderId) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, reviewCompleted: true } : order
    ));
    
    const order = orders.find(o => o.id === orderId);
    const customer = customers.find(c => c.name === order.customerName);
    if (customer) {
      addLoyaltyPoints(customer.id, 25, 'Google Review');
    }
    
    alert('Review completed! Customer earned 25 loyalty points.');
  };

  const bookAppointment = () => {
    const newAppointment = {
      id: `APT-${String(appointments.length + 1).padStart(3, '0')}`,
      customerName: bookingForm.customerName,
      email: bookingForm.customerEmail,
      phone: bookingForm.customerPhone,
      date: bookingForm.date,
      time: bookingForm.time,
      service: bookingForm.service,
      knifeCount: bookingForm.knifeCount,
      status: 'confirmed',
      notes: bookingForm.notes
    };

    setAppointments(prev => [...prev, newAppointment]);
    
    const customerData = {
      name: bookingForm.customerName,
      email: bookingForm.customerEmail
    };
    
    sendEmail(customerData, 'appointmentConfirmation', {
      date: bookingForm.date,
      time: bookingForm.time,
      service: services[bookingForm.service].name
    });
    
    setBookingForm({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      date: '',
      time: '',
      service: 'standard',
      knifeCount: 1,
      notes: ''
    });
    
    setShowBookingPortal(false);
    alert('Appointment booked successfully! Confirmation email sent.');
  };

  const convertAppointmentToOrder = (appointment) => {
    const knives = Array.from({ length: appointment.knifeCount }, (_, i) => ({
      id: Date.now() + i,
      type: `Knife ${i + 1}`,
      stage: 'received',
      beforePhoto: null,
      afterPhoto: null
    }));

    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      customerName: appointment.customerName,
      customerEmail: appointment.email,
      customerPhone: appointment.phone,
      appointmentDate: appointment.date,
      appointmentTime: appointment.time,
      knives,
      totalAmount: services[appointment.service].price * appointment.knifeCount,
      pointsUsed: 0,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'in-progress',
      invoiceSent: false,
      reviewRequested: false,
      reviewCompleted: false,
      estimatedCompletion: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    setOrders(prev => [...prev, newOrder]);
    setAppointments(prev => prev.filter(apt => apt.id !== appointment.id));
    
    let customer = customers.find(c => c.name === appointment.customerName);
    if (!customer) {
      customer = {
        id: customers.length + 1,
        name: appointment.customerName,
        email: appointment.email,
        phone: appointment.phone,
        totalOrders: 1,
        loyaltyPoints: 0,
        tier: 'Bronze',
        referrals: 0,
        lastService: new Date().toISOString().split('T')[0]
      };
      setCustomers(prev => [...prev, customer]);
    }
    
    addLoyaltyPoints(customer.id, services[appointment.service].points, 'Service Completed');
    alert('Appointment converted to order successfully!');
  };

  const addNewOrder = () => {
    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      customerName: newOrderForm.customerName,
      customerEmail: newOrderForm.customerEmail,
      customerPhone: newOrderForm.customerPhone,
      knives: newOrderForm.knives.map((knife, index) => ({
        id: Date.now() + index,
        type: knife.type,
        stage: 'received',
        beforePhoto: null,
        afterPhoto: null
      })),
      totalAmount: newOrderForm.knives.length * 12.50,
      pointsUsed: 0,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'in-progress',
      invoiceSent: false,
      reviewRequested: false,
      reviewCompleted: false,
      estimatedCompletion: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    setOrders(prev => [...prev, newOrder]);
    setNewOrderForm({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      knives: [{ type: '', stage: 'received' }]
    });
    setActiveTab('orders');
  };

  const exportData = (type) => {
    let data, filename;
    
    switch(type) {
      case 'customers':
        data = customers.map(c => ({
          Name: c.name,
          Email: c.email,
          Phone: c.phone,
          'Total Orders': c.totalOrders,
          'Loyalty Points': c.loyaltyPoints,
          Tier: c.tier,
          'Last Service': c.lastService
        }));
        filename = 'customers.csv';
        break;
      case 'orders':
        data = orders.map(o => ({
          'Order ID': o.id,
          Customer: o.customerName,
          'Total Amount': o.totalAmount,
          Status: o.status,
          'Created Date': o.createdAt,
          'Invoice Sent': o.invoiceSent ? 'Yes' : 'No',
          'Review Completed': o.reviewCompleted ? 'Yes' : 'No'
        }));
        filename = 'orders.csv';
        break;
      case 'appointments':
        data = appointments.map(a => ({
          'Appointment ID': a.id,
          Customer: a.customerName,
          Date: a.date,
          Time: a.time,
          Service: services[a.service].name,
          'Knife Count': a.knifeCount,
          Status: a.status
        }));
        filename = 'appointments.csv';
        break;
      default:
        return;
    }
    
    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
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
              <p className="text-2xl font-semibold text-gray-900">${analytics.totalRevenue.toLocaleString()}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{analytics.totalOrders}</p>
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
              <p className="text-2xl font-semibold text-gray-900">{analytics.reviewScore}/5.0</p>
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
              <p className="text-2xl font-semibold text-gray-900">{analytics.activeCustomers}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {orders.slice(0, 5).map(order => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.customerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${order.totalAmount.toFixed(2)}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {appointments.slice(0, 5).map(appointment => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{appointment.customerName}</p>
                    <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{services[appointment.service].name}</p>
                    <p className="text-sm text-gray-500">{appointment.knifeCount} knives</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BusinessSettings = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Business Settings</h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
          <input
            type="text"
            value={businessSettings.businessName}
            onChange={(e) => setBusinessSettings(prev => ({ ...prev, businessName: e.target.value }))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name</label>
          <input
            type="text"
            value={businessSettings.ownerName}
            onChange={(e) => setBusinessSettings(prev => ({ ...prev, ownerName: e.target.value }))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={businessSettings.email}
            onChange={(e) => setBusinessSettings(prev => ({ ...prev, email: e.target.value }))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
<input
           type="tel"
           value={businessSettings.phone}
           onChange={(e) => setBusinessSettings(prev => ({ ...prev, phone: e.target.value }))}
           className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       
       <div className="md:col-span-2">
         <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
         <input
           type="text"
           value={businessSettings.address}
           onChange={(e) => setBusinessSettings(prev => ({ ...prev, address: e.target.value }))}
           className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       
       <div>
         <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
         <input
           type="url"
           value={businessSettings.website}
           onChange={(e) => setBusinessSettings(prev => ({ ...prev, website: e.target.value }))}
           className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       
       <div>
         <label className="block text-sm font-medium text-gray-700 mb-2">Google Review URL</label>
         <input
           type="url"
           value={businessSettings.googleReviewUrl}
           onChange={(e) => setBusinessSettings(prev => ({ ...prev, googleReviewUrl: e.target.value }))}
           className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="https://g.page/r/YourBusinessGoogleReview/review"
         />
         <p className="text-xs text-gray-500 mt-1">Find this in your Google Business Profile</p>
       </div>
     </div>
     
     <div className="mt-6 pt-6 border-t border-gray-200">
       <h4 className="text-md font-medium text-gray-900 mb-4">Email Templates</h4>
       <div className="space-y-4">
         {Object.entries(emailTemplates).map(([key, template]) => (
           <div key={key} className="border border-gray-200 rounded-lg p-4">
             <div className="flex justify-between items-center mb-2">
               <h5 className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h5>
               <button
                 onClick={() => setShowEmailPreview({ 
                   subject: template.subject, 
                   body: template.body,
                   to: 'customer@example.com',
                   type: key
                 })}
                 className="text-blue-600 hover:text-blue-800 text-sm"
               >
                 Preview
               </button>
             </div>
             <p className="text-sm text-gray-600">{template.subject}</p>
           </div>
         ))}
       </div>
     </div>
     
     <div className="mt-6 pt-6 border-t border-gray-200">
       <h4 className="text-md font-medium text-gray-900 mb-4">Data Export</h4>
       <div className="flex gap-4">
         <button
           onClick={() => exportData('customers')}
           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
         >
           <Download className="w-4 h-4" />
           Export Customers
         </button>
         <button
           onClick={() => exportData('orders')}
           className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
         >
           <Download className="w-4 h-4" />
           Export Orders
         </button>
         <button
           onClick={() => exportData('appointments')}
           className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
         >
           <Download className="w-4 h-4" />
           Export Appointments
         </button>
       </div>
     </div>
   </div>
 );

 const EmailPreview = ({ email, onClose }) => (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
     <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
       <div className="p-6">
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-2xl font-bold">Email Preview</h2>
           <button
             onClick={onClose}
             className="text-gray-500 hover:text-gray-700 text-xl font-bold"
           >
             ×
           </button>
         </div>
         
         <div className="border border-gray-200 rounded-lg overflow-hidden">
           <div className="bg-gray-50 p-4 border-b border-gray-200">
             <div className="text-sm text-gray-600">To: {email.to}</div>
             <div className="text-sm text-gray-600">From: {businessSettings.email}</div>
             <div className="text-lg font-medium mt-2">{email.subject}</div>
           </div>
           
           <div className="p-6">
             <div className="whitespace-pre-wrap text-gray-900">{email.body}</div>
           </div>
         </div>
         
         <div className="mt-6 flex gap-3">
           <button
             onClick={() => {
               alert('Email template saved!');
               onClose();
             }}
             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
           >
             <Send className="w-4 h-4" />
             Save Template
           </button>
           <button
             onClick={() => {
               alert('Test email sent!');
               onClose();
             }}
             className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
           >
             <Mail className="w-4 h-4" />
             Send Test
           </button>
         </div>
       </div>
     </div>
   </div>
 );

 const BookingPortal = () => (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
     <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
       <div className="p-6">
         <div className="flex justify-between items-center mb-6">
           <div>
             <h2 className="text-2xl font-bold text-gray-900">Book an Appointment</h2>
             <p className="text-gray-600">{businessSettings.businessName}</p>
           </div>
           <button
             onClick={() => setShowBookingPortal(false)}
             className="text-gray-500 hover:text-gray-700 text-xl font-bold"
           >
             ×
           </button>
         </div>
         
         <div className="mb-6 p-4 bg-blue-50 rounded-lg">
           <div className="flex items-start gap-3">
             <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
             <div>
               <p className="font-medium text-blue-900">{businessSettings.address}</p>
               <p className="text-blue-700 flex items-center gap-2 mt-1">
                 <Phone className="w-4 h-4" />
                 {businessSettings.phone}
               </p>
             </div>
           </div>
         </div>
         
         <div className="grid gap-4 md:grid-cols-2">
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
             <input
               type="text"
               value={bookingForm.customerName}
               onChange={(e) => setBookingForm(prev => ({ ...prev, customerName: e.target.value }))}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
             <input
               type="email"
               value={bookingForm.customerEmail}
               onChange={(e) => setBookingForm(prev => ({ ...prev, customerEmail: e.target.value }))}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
             <input
               type="tel"
               value={bookingForm.customerPhone}
               onChange={(e) => setBookingForm(prev => ({ ...prev, customerPhone: e.target.value }))}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
             <select
               value={bookingForm.service}
               onChange={(e) => setBookingForm(prev => ({ ...prev, service: e.target.value }))}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             >
               {Object.entries(services).map(([key, service]) => (
                 <option key={key} value={key}>{service.name} - ${service.price}</option>
               ))}
             </select>
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
             <input
               type="date"
               value={bookingForm.date}
               onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))}
               min={new Date().toISOString().split('T')[0]}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
             <select
               value={bookingForm.time}
               onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             >
               <option value="">Select a time</option>
               {availableTimes.map(time => (
                 <option key={time} value={time}>{time}</option>
               ))}
             </select>
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Number of Knives</label>
             <input
               type="number"
               min="1"
               max="10"
               value={bookingForm.knifeCount}
               onChange={(e) => setBookingForm(prev => ({ ...prev, knifeCount: parseInt(e.target.value) || 1 }))}
               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>
         </div>
         
         <div className="mt-4">
           <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
           <textarea
             value={bookingForm.notes}
             onChange={(e) => setBookingForm(prev => ({ ...prev, notes: e.target.value }))}
             rows="3"
             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             placeholder="Any special requirements or notes..."
           />
         </div>
         
         {bookingForm.service && (
           <div className="mt-6 p-4 bg-blue-50 rounded-lg">
             <h3 className="font-semibold text-blue-900 mb-2">Service Details</h3>
             <p className="text-sm text-blue-800 mb-2">{services[bookingForm.service].description}</p>
             <div className="flex justify-between items-center">
               <div>
                 <p className="text-2xl font-bold text-blue-900">
                   ${(services[bookingForm.service]?.price * bookingForm.knifeCount || 0).toFixed(2)}
                 </p>
                 <p className="text-sm text-blue-700">
                   You'll earn {services[bookingForm.service]?.points * bookingForm.knifeCount || 0} loyalty points!
                 </p>
               </div>
               <div className="text-right text-blue-800">
                 <p className="text-sm">Processing time:</p>
                 <p className="font-medium">24-48 hours</p>
               </div>
             </div>
           </div>
         )}
         
         <div className="mt-6">
           <button
             onClick={bookAppointment}
             disabled={!bookingForm.customerName || !bookingForm.customerEmail || !bookingForm.date || !bookingForm.time}
             className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
           >
             <Calendar className="w-4 h-4" />
             Book Appointment
           </button>
         </div>
       </div>
     </div>
   </div>
 );

 const LoyaltyPortal = ({ customer, onClose }) => (
   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
     <div className="bg-white rounded-lg max-w-lg w-full">
       <div className="p-6">
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-2xl font-bold text-gray-900">Loyalty Rewards</h2>
           <button
             onClick={onClose}
             className="text-gray-500 hover:text-gray-700 text-xl font-bold"
           >
             ×
           </button>
         </div>
         
         <div className="text-center mb-6">
           <div className="text-4xl font-bold text-blue-600 mb-2">{customer.loyaltyPoints}</div>
           <div className="text-gray-600">Available Points</div>
           <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${loyaltyTiers[customer.tier].color}`}>
             {customer.tier} Member
           </div>
         </div>
         
         <div className="space-y-4 mb-6">
           <div className="border rounded-lg p-4">
             <div className="flex justify-between items-center">
               <div>
                 <h3 className="font-semibold">Free Standard Sharpening</h3>
                 <p className="text-sm text-gray-600">120 points required</p>
               </div>
               <button 
                 disabled={customer.loyaltyPoints < 120}
                 onClick={() => {
                   if (customer.loyaltyPoints >= 120) {
                     redeemPoints(customer.id, 120);
                     alert('Free sharpening redeemed! We\'ll contact you to schedule.');
                     onClose();
                   }
                 }}
                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
               >
                 Redeem
               </button>
             </div>
           </div>
           
           <div className="border rounded-lg p-4">
             <div className="flex justify-between items-center">
               <div>
                 <h3 className="font-semibold">$5 Off Next Service</h3>
                 <p className="text-sm text-gray-600">50 points required</p>
               </div>
               <button 
                 disabled={customer.loyaltyPoints < 50}
                 onClick={() => {
                   if (customer.loyaltyPoints >= 50) {
                     redeemPoints(customer.id, 50);
                     alert('$5 discount applied to your account!');
                     onClose();
                   }
                 }}
                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
               >
                 Redeem
               </button>
             </div>
           </div>
           
           <div className="border rounded-lg p-4">
             <div className="flex justify-between items-center">
               <div>
                 <h3 className="font-semibold">Premium Service Upgrade</h3>
                 <p className="text-sm text-gray-600">80 points required</p>
               </div>
               <button 
                 disabled={customer.loyaltyPoints < 80}
                 onClick={() => {
                   if (customer.loyaltyPoints >= 80) {
                     redeemPoints(customer.id, 80);
                     alert('Premium upgrade applied to your next service!');
                     onClose();
                   }
                 }}
                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
               >
                 Redeem
               </button>
             </div>
           </div>
         </div>
         
         <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
           <h3 className="font-semibold mb-2 text-gray-800">Earn More Points</h3>
           <ul className="text-sm text-gray-600 space-y-1">
             <li className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-blue-500" />
               Service completed: +{services.standard.points}-{services.restoration.points} points
             </li>
             <li className="flex items-center gap-2">
               <Star className="w-4 h-4 text-yellow-500" />
               Leave Google review: +25 points
             </li>
             <li className="flex items-center gap-2">
               <UserPlus className="w-4 h-4 text-green-500" />
               Refer a friend: +50 points
             </li>
             <li className="flex items-center gap-2">
               <Gift className="w-4 h-4 text-purple-500" />
               Birthday bonus: +25 points
             </li>
           </ul>
           
           <div className="mt-3 pt-3 border-t border-gray-200">
             <p className="text-xs text-gray-500">
               Next tier: {customer.tier === 'Bronze' ? 'Silver (30 points)' : customer.tier === 'Silver' ? 'Gold (100 points)' : 'Gold (max tier)'}
             </p>
             {customer.tier !== 'Gold' && (
               <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                 <div 
                   className="bg-blue-600 h-2 rounded-full" 
                   style={{ 
                     width: `${customer.tier === 'Bronze' ? (customer.loyaltyPoints / 30) * 100 : ((customer.loyaltyPoints - 30) / 70) * 100}%` 
                   }}
                 />
               </div>
             )}
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
         {order.appointmentDate && (
           <p className="text-sm text-blue-600 flex items-center gap-1">
             <Calendar className="w-4 h-4" />
             {order.appointmentDate} at {order.appointmentTime}
           </p>
         )}
         {order.estimatedCompletion && (
           <p className="text-sm text-green-600 flex items-center gap-1">
             <Clock className="w-4 h-4" />
             Est. completion: {order.estimatedCompletion}
           </p>
         )}
       </div>
       <div className="text-right">
         <span className={`px-3 py-1 rounded-full text-sm font-medium ${
           order.status === 'ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
         }`}>
           {order.status === 'ready' ? 'Ready for Pickup' : 'In Progress'}
         </span>
         <p className="text-lg font-bold text-gray-900 mt-1">
           ${(order.totalAmount - (order.pointsUsed * 0.10)).toFixed(2)}
           {order.pointsUsed > 0 && (
             <span className="text-sm text-green-600 block">
               -{order.pointsUsed} points used
             </span>
           )}
         </p>
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
     
     <div className="flex gap-2 flex-wrap">
       <button
         onClick={() => setShowInvoice(generateInvoice(order))}
         className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
       >
         <Eye className="w-4 h-4" />
         View Invoice
       </button>
       {order.status === 'ready' && !order.invoiceSent && (
         <button
           onClick={() => sendInvoice(order.id)}
           className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
         >
           <Mail className="w-4 h-4" />
           Send Invoice
         </button>
       )}
       {order.status === 'ready' && order.invoiceSent && !order.reviewRequested && (
         <button
           onClick={() => requestReview(order.id)}
           className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2"
         >
           <Star className="w-4 h-4" />
           Request Review
         </button>
       )}
       {order.reviewRequested && !order.reviewCompleted && (
         <button
           onClick={() => markReviewCompleted(order.id)}
           className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
         >
           <Check className="w-4 h-4" />
           Mark Review Done
         </button>
       )}
     </div>
   </div>
 );

 const InvoiceModal = ({ invoice, onClose }) => {
   const customer = customers.find(c => c.name === invoice.customerName);
   const [pointsToUse, setPointsToUse] = useState(0);
   
   return (
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
             {customer && (
               <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                 <p className="text-sm text-blue-800 flex items-center gap-1">
                   <Gift className="w-4 h-4" />
                   Loyalty Points Available: {customer.loyaltyPoints} ({customer.tier} Member)
                 </p>
               </div>
             )}
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
           
           {customer && customer.loyaltyPoints > 0 && (
             <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
               <h4 className="font-semibold mb-2 text-yellow-800">Use Loyalty Points</h4>
               <div className="flex items-center gap-2">
                 <input
                   type="number"
                   min="0"
                   max={Math.min(customer.loyaltyPoints, invoice.total * 10)}
                   value={pointsToUse}
                   onChange={(e) => setPointsToUse(parseInt(e.target.value) || 0)}
                   className="border border-gray-300 rounded px-2 py-1 w-24"
                 />
                 <span className="text-sm text-gray-600">points = ${(pointsToUse * 0.10).toFixed(2)} discount</span>
                 <button
                   onClick={() => usePointsForPayment(invoice.orderId, pointsToUse)}
                   className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700"
                 >
                   Apply
                 </button>
               </div>
               <p className="text-xs text-gray-500 mt-1">1 point = $0.10 discount</p>
             </div>
           )}
           
           <div className="flex justify-end mb-6">
             <div className="text-right">
               <div className="text-lg">Subtotal: ${invoice.total.toFixed(2)}</div>
               {invoice.pointsUsed > 0 && (
                 <div className="text-green-600">Points Discount: -${(invoice.pointsUsed * 0.10).toFixed(2)}</div>
               )}
               <div className="text-xl font-bold border-t pt-2">
                 Total: ${invoice.finalAmount.toFixed(2)}
               </div>
             </div>
           </div>
           
           <div className="bg-gray-50 p-4 rounded">
             <p className="text-sm text-gray-600 mb-3">
               Payment is due within 7 days. Thank you for choosing {businessSettings.businessName}!
             </p>
             <div className="flex gap-2">
               <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                 <DollarSign className="w-4 h-4" />
                 Pay Now
               </button>
               <button 
                 onClick={() => setShowLoyaltyPortal(customer)}
                 className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors flex items-center gap-2"
               >
                 <Gift className="w-4 h-4" />
                 View Rewards
               </button>
               <button
                 onClick={() => window.print()}
                 className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
               >
                 <Download className="w-4 h-4" />
                 Print
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };

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
               onClick={() => setShowBookingPortal(true)}
               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
             >
               <Calendar className="w-4 h-4" />
               Book Appointment
             </button>
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
             { key: 'appointments', label: 'Appointments', icon: Calendar },
             { key: 'customers', label: 'Customers', icon: Users },
             { key: 'new-order', label: 'New Order', icon: DollarSign }
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
       {showSettings && <BusinessSettings />}
       
       {!showSettings && activeTab === 'dashboard' && <Dashboard />}

       {!showSettings && activeTab === 'orders' && (
         <div>
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
             <div className="text-sm text-gray-600">
               {orders.filter(o => o.status === 'in-progress').length} in progress, {orders.filter(o => o.status === 'ready').length} ready
             </div>
           </div>
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {orders.map(order => (
               <OrderCard key={order.id} order={order} />
             ))}
           </div>
         </div>
       )}

       {!showSettings && activeTab === 'appointments' && (
         <div>
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
             <button
               onClick={() => setShowBookingPortal(true)}
               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
             >
               <Calendar className="w-4 h-4" />
               New Appointment
             </button>
           </div>
           <div className="bg-white rounded-lg shadow overflow-hidden">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Knives</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {appointments.map(appointment => (
                   <tr key={appointment.id}>
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div>
                         <div className="text-sm font-medium text-gray-900">{appointment.customerName}</div>
                         <div className="text-sm text-gray-500">{appointment.email}</div>
                       </div>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                       {appointment.date} at {appointment.time}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                       {services[appointment.service]?.name}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                       {appointment.knifeCount}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap">
                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                         appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                       }`}>
                         {appointment.status}
                       </span>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm">
                       <button
                         onClick={() => convertAppointmentToOrder(appointment)}
                         className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                       >
                         Start Order
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       )}

       {!showSettings && activeTab === 'customers' && (
         <div>
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
             <button
               onClick={() => exportData('customers')}
               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
             >
               <Download className="w-4 h-4" />
               Export
             </button>
           </div>
           <div className="bg-white rounded-lg shadow overflow-hidden">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loyalty</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Service</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${loyaltyTiers[customer.tier].color}`}>
                         {customer.tier}
                       </span>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.lastService}</td>
                     <td className="px-6 py-4 whitespace-nowrap">
                       <button
                         onClick={() => setShowLoyaltyPortal(customer)}
                         className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700 flex items-center gap-1"
                       >
                         <Gift className="w-3 h-3" />
                         Rewards
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       )}

       {!showSettings && activeTab === 'new-order' && (
         <div>
           <h2 className="text-2xl font-bold text-gray-900 mb-6">New Order</h2>
           <div className="bg-white rounded-lg shadow p-6">
             <div className="grid gap-6 md:grid-cols-2">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                 <input
                   type="text"
                   value={newOrderForm.customerName}
                   onChange={(e) => setNewOrderForm(prev => ({ ...prev, customerName: e.target.value }))}
                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                 <input
                   type="email"
                   value={newOrderForm.customerEmail}
                   onChange={(e) => setNewOrderForm(prev => ({ ...prev, customerEmail: e.target.value }))}
                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                 <input
                   type="tel"
                   value={newOrderForm.customerPhone}
                   onChange={(e) => setNewOrderForm(prev => ({ ...prev, customerPhone: e.target.value }))}
                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
               </div>
             </div>
             
             <div className="mt-6">
               <label className="block text-sm font-medium text-gray-700 mb-2">Knives</label>
               {newOrderForm.knives.map((knife, index) => (
                 <div key={index} className="flex gap-2 mb-2">
                   <input
                     type="text"
                     placeholder="Knife type (e.g., Chef Knife, Paring Knife)"
                     value={knife.type}
                     onChange={(e) => {
                       const updatedKnives = [...newOrderForm.knives];
                       updatedKnives[index].type = e.target.value;
                       setNewOrderForm(prev => ({ ...prev, knives: updatedKnives }));
                     }}
                     className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                   />
                   <button
                     onClick={() => {
                       const updatedKnives = newOrderForm.knives.filter((_, i) => i !== index);
                       setNewOrderForm(prev => ({ ...prev, knives: updatedKnives }));
                     }}
                     className="px-3 py-2 text-red-600 hover:text-red-800"
                   >
                     Remove
                   </button>
                 </div>
               ))}
               <button
                 onClick={() => setNewOrderForm(prev => ({ 
                   ...prev, 
                   knives: [...prev.knives, { type: '', stage: 'received' }] 
                 }))}
                 className="text-blue-600 hover:text-blue-800 text-sm"
               >
                 + Add Another Knife
               </button>
             </div>
             
             <div className="mt-6">
               <button
                 onClick={addNewOrder}
                 disabled={!newOrderForm.customerName || !newOrderForm.customerEmail || newOrderForm.knives.some(k => !k.type)}
                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
               >
                 Create Order
               </button>
             </div>
           </div>
         </div>
       )}
     </main>

     {showBookingPortal && <BookingPortal />}
     {showInvoice && (
       <InvoiceModal
         invoice={showInvoice}
         onClose={() => setShowInvoice(null)}
       />
     )}
     {showLoyaltyPortal && (
       <LoyaltyPortal
         customer={showLoyaltyPortal}
         onClose={() => setShowLoyaltyPortal(null)}
       />
     )}
     {showEmailPreview && (
       <EmailPreview
         email={showEmailPreview}
         onClose={() => setShowEmailPreview(null)}
       />
     )}
   </div>
 );
};

export default EdgeSuitePro;
