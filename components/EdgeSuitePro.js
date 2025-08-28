import React, { useState } from 'react'
import { 
  Package, 
  Users, 
  Calendar, 
  DollarSign, 
  Camera, 
  BarChart3, 
  Settings, 
  Bell,
  Menu,
  X,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  Gift,
  Target,
  Layers,
  User,
  Home,
  Scissors,
  Phone,
  Mail,
  Download,
  Upload
} from 'lucide-react'

export default function EdgeSuitePro() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showQRModal, setShowQRModal] = useState(null)
  
  const currentUser = {
    name: 'John Smith',
    role: 'admin',
    business: 'Sharp Edge Pro'
  }

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Mario Rodriguez',
      status: 'Receiving',
      knives: 3,
      service: 'Standard Sharpening',
      date: '2024-08-22',
      total: 45.00,
      priority: 'normal'
    },
    {
      id: 'ORD-002', 
      customer: 'Sarah Chen',
      status: 'Sharpening',
      knives: 5,
      service: 'Premium + Repair',
      date: '2024-08-21',
      total: 85.00,
      priority: 'high'
    },
    {
      id: 'ORD-003',
      customer: 'Restaurant Depot',
      status: 'Finishing',
      knives: 12,
      service: 'Commercial Package',
      date: '2024-08-20',
      total: 180.00,
      priority: 'high'
    }
  ]

  const customers = [
    {
      id: 'CUST-001',
      name: 'Mario Rodriguez',
      email: 'mario@email.com',
      phone: '(555) 123-4567',
      segment: 'Home Cook',
      loyaltyTier: 'Silver',
      points: 450,
      totalOrders: 8,
      lastOrder: '2024-08-22'
    },
    {
      id: 'CUST-002',
      name: 'Sarah Chen',
      email: 'sarah.chen@email.com', 
      phone: '(555) 987-6543',
      segment: 'Restaurant Chef',
      loyaltyTier: 'Gold',
      points: 1250,
      totalOrders: 23,
      lastOrder: '2024-08-21'
    }
  ]

  const pickupHistory = [
    {
      id: 'PICKUP-001',
      orderId: 'ORD-001',
      customer: 'Mario Rodriguez',
      confirmedAt: '2024-08-22 3:15 PM',
      method: 'QR Code Scan',
      customerRating: 5,
      feedback: 'Knives are incredibly sharp! Thank you!',
      loyaltyPointsAdded: 45
    }
  ]

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'payments', label: 'Payments', icon: DollarSign },
    { id: 'loyalty', label: 'Loyalty', icon: Gift },
    { id: 'marketing', label: 'Marketing', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'inventory', label: 'Inventory', icon: Layers },
    { id: 'staff', label: 'Staff', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Receiving': 'bg-blue-100 text-blue-800',
      'Inspection': 'bg-yellow-100 text-yellow-800', 
      'Sharpening': 'bg-orange-100 text-orange-800',
      'Finishing': 'bg-purple-100 text-purple-800',
      'Delivery': 'bg-green-100 text-green-800',
      'Pickup': 'bg-green-100 text-green-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const generateQRCode = (orderId, customerName) => {
    const qrId = `QR-${orderId}-${customerName.replace(/\s+/g, '').toUpperCase()}`
    const pickupUrl = `https://edge-suite-pro.vercel.app/pickup/${qrId}`
    return { qrId, pickupUrl }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {currentUser.name}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus size={20} />
            <span>New Order</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Orders</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
            <Package className="text-blue-600" size={24} />
          </div>
          <p className="text-sm text-green-600 mt-2">+2 from yesterday</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$540</p>
            </div>
            <DollarSign className="text-green-600" size={24} />
          </div>
          <p className="text-sm text-green-600 mt-2">+15% from yesterday</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Orders</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <Clock className="text-orange-600" size={24} />
          </div>
          <p className="text-sm text-gray-600 mt-2">Across all stages</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Customer Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
            </div>
            <Star className="text-yellow-500" size={24} />
          </div>
          <p className="text-sm text-green-600 mt-2">96% satisfaction</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>
        <div className="divide-y">
          {orders.slice(0, 5).map((order) => (
            <div key={order.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="font-medium">{order.id}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    {order.priority === 'high' && (
                      <AlertCircle className="text-red-500" size={16} />
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {order.customer} • {order.knives} knives • {order.service}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${order.total}</div>
                  <div className="text-sm text-gray-600">{order.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const QRCodeModal = ({ order }) => {
    const qrData = generateQRCode(order.id, order.customer)
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">QR Pickup Label</h3>
            <button 
              onClick={() => setShowQRModal(null)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="border-2 border-dashed border-gray-300 p-6 text-center bg-white shadow-sm">
              <div className="mb-4">
                <div className="w-24 h-24 bg-black mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-xs">QR CODE</span>
                </div>
              </div>
              
              <div className="space-y-1 text-sm">
                <div className="font-bold text-blue-600">Sharp Edge Pro</div>
                <div className="font-semibold">{order.customer}</div>
                <div className="text-gray-600">Order: {order.id}</div>
                <div className="text-gray-600">{order.knives} Knives</div>
                <div className="text-gray-600">{order.service}</div>
                <div className="text-xs text-gray-500 mt-2">Scan to Confirm Pickup</div>
                <div className="text-xs text-gray-400">{qrData.qrId}</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
              <div className="font-medium text-blue-800 mb-2">📱 Customer Experience:</div>
              <ul className="text-blue-700 space-y-1 text-xs list-disc list-inside">
                <li>Photo confirmation of pickup</li>
                <li>Instant 5-star rating request</li>
                <li>Automatic loyalty points</li>
                <li>Next service booking prompt</li>
              </ul>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2">
                <Download size={16} />
                <span>Print Label</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Copy URL
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const OrdersView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus size={20} />
            <span>New Order</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="divide-y">
          {orders.map((order) => (
            <div key={order.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="font-semibold text-lg">{order.id}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    {order.priority === 'high' && (
                      <AlertCircle className="text-red-600" size={18} />
                    )}
                  </div>
                  <div className="mt-2 text-gray-600">
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm">
                      {order.knives} knives • {order.service} • {order.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-bold text-lg">${order.total}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => setShowQRModal(order)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      title="Generate QR Pickup Label"
                    >
                      <Camera size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pickup History */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Pickup Confirmations</h3>
        </div>
        <div className="divide-y">
          {pickupHistory.map((pickup) => (
            <div key={pickup.id} className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{pickup.customer}</div>
                    <div className="text-sm text-gray-600">Rating: {pickup.customerRating}/5 ⭐</div>
                    <div className="text-xs text-gray-500">"{pickup.feedback}"</div>
                    <div className="text-xs text-blue-600">+{pickup.loyaltyPointsAdded} loyalty points added</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">Completed</div>
                  <div className="text-xs text-gray-500">{pickup.confirmedAt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CustomersView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus size={20} />
            <span>Add Customer</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="divide-y">
          {customers.map((customer) => (
            <div key={customer.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{customer.name}</div>
                      <div className="text-sm text-gray-600">{customer.segment}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Loyalty</div>
                    <div className={`font-semibold ${
                      customer.loyaltyTier === 'Gold' ? 'text-yellow-600' :
                      customer.loyaltyTier === 'Silver' ? 'text-gray-600' : 'text-orange-600'
                    }`}>
                      {customer.loyaltyTier}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Points</div>
                    <div className="font-semibold">{customer.points}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Orders</div>
                    <div className="font-semibold">{customer.totalOrders}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />
      case 'orders':
        return <OrdersView />
      case 'customers':
        return <CustomersView />
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h2>
            <p className="text-gray-500">This module is coming soon!</p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r">
            <div className="flex items-center flex-shrink-0 px-4">
              <Scissors className="w-8 h-8 text-blue-600" />
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-gray-900">Edge Suite Pro</h1>
                <p className="text-xs text-gray-500">{currentUser.business}</p>
              </div>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id)}
                      className={`${
                        currentView === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
                    >
                      <Icon className="mr-3 flex-shrink-0 h-5 w-5" />
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleMobileMenu} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMobileMenu}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Scissors className="w-8 h-8 text-blue-600" />
                <div className="ml-3">
                  <h1 className="text-lg font-semibold text-gray-900">Edge Suite Pro</h1>
                  <p className="text-xs text-gray-500">{currentUser.business}</p>
                </div>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentView(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`${
                        currentView === item.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full`}
                    >
                      <Icon className="mr-3 flex-shrink-0 h-5 w-5" />
                      {item.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex"></div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                      {currentUser.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className="text-sm font-medium text-gray-700">{currentUser.name}</div>
                    <div className="text-xs text-gray-500 capitalize">{currentUser.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {renderCurrentView()}
              {showQRModal && <QRCodeModal order={showQRModal} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
