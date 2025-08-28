import React, { useState } from 'react'
import { Package, Users, Calendar, DollarSign, Camera, BarChart3, Settings, Bell, Menu, X, Plus, Home, Scissors } from 'lucide-react'

export default function EdgeSuitePro() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const currentUser = {
    name: 'John Smith',
    role: 'admin',
    business: 'Sharp Edge Pro'
  }

  const orders = [
    { id: 'ORD-001', customer: 'Mario Rodriguez', status: 'Receiving', knives: 3, service: 'Standard Sharpening', date: '2024-08-22', total: 45.00 },
    { id: 'ORD-002', customer: 'Sarah Chen', status: 'Sharpening', knives: 5, service: 'Premium + Repair', date: '2024-08-21', total: 85.00 },
    { id: 'ORD-003', customer: 'Restaurant Depot', status: 'Finishing', knives: 12, service: 'Commercial Package', date: '2024-08-20', total: 180.00 }
  ]

  const customers = [
    { id: 'CUST-001', name: 'Mario Rodriguez', segment: 'Home Cook', loyaltyTier: 'Silver', points: 450, totalOrders: 8 },
    { id: 'CUST-002', name: 'Sarah Chen', segment: 'Restaurant Chef', loyaltyTier: 'Gold', points: 1250, totalOrders: 23 }
  ]

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'payments', label: 'Payments', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status) => {
    if (status === 'Receiving') return 'bg-blue-100 text-blue-800'
    if (status === 'Sharpening') return 'bg-orange-100 text-orange-800'
    if (status === 'Finishing') return 'bg-purple-100 text-purple-800'
    return 'bg-gray-100 text-gray-800'
  }

  const DashboardView = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {currentUser.name}</p>
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
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$540</p>
            </div>
            <DollarSign className="text-green-600" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Orders</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <Package className="text-orange-600" size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Customer Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
            </div>
            <Users className="text-yellow-500" size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>
        <div className="divide-y">
          {orders.map((order) => (
            <div key={order.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="font-medium">{order.id}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
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

  const OrdersView = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="divide-y">
          {orders.map((order) => (
            <div key={order.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-lg">{order.id}</div>
                  <div className="mt-2 text-gray-600">
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-sm">{order.knives} knives • {order.service}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">${order.total}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
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
      <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
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
                    <div className="font-semibold text-yellow-600">{customer.loyaltyTier}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Points</div>
                    <div className="font-semibold">{customer.points}</div>
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
    if (currentView === 'dashboard') return <DashboardView />
    if (currentView === 'orders') return <OrdersView />
    if (currentView === 'customers') return <CustomersView />
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
        </h2>
        <p className="text-gray-500">This module is coming soon!</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
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

      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button onClick={() => setIsMobileMenuOpen(false)} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Scissors className="w-8 h-8 text-blue-600" />
                <div className="ml-3">
                  <h1 className="text-lg font-semibold text-gray-900">Edge Suite Pro</h1>
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
                      className="text-gray-600 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
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

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="px-4 border-r border-gray-200 text-gray-500 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex"></div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                  {currentUser.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3 hidden md:block">
                  <div className="text-sm font-medium text-gray-700">{currentUser.name}</div>
                  <div className="text-xs text-gray-500">{currentUser.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {renderCurrentView()}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
