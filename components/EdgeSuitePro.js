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
  Mail
} from 'lucide-react'

export default function EdgeSuitePro() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [currentDate, setCurrentDate] = useState(new Date())
  
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

  // Sample appointments data
  const appointments = [
    {
      id: 'APT-001',
      customer: 'Mario Rodriguez',
      service: 'Standard Sharpening',
      date: '2024-08-22',
      time: '10:00 AM',
      duration: 30,
      status: 'confirmed',
      notes: '3 kitchen knives',
      phone: '(555) 123-4567'
    },
    {
      id: 'APT-002',
      customer: 'Sarah Chen',
      service: 'Premium Package',
      date: '2024-08-22',
      time: '2:00 PM',
      duration: 60,
      status: 'confirmed',
      notes: 'Restaurant chef - 5 knives + repair',
      phone: '(555) 987-6543'
    },
    {
      id: 'APT-003',
      customer: 'Mike Thompson',
      service: 'Consultation',
      date: '2024-08-23',
      time: '9:00 AM',
      duration: 15,
      status: 'pending',
      notes: 'First time customer',
      phone: '(555) 456-7890'
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

  const getAppointmentColor = (status) => {
    const colors = {
      confirmed: 'bg-green-100 border-green-500 text-green-800',
      pending: 'bg-yellow-100 border-yellow-500 text-yellow-800',
      completed: 'bg-blue-100 border-blue-500 text-blue-800',
      cancelled: 'bg-red-100 border-red-500 text-red-800'
    }
    return colors[status] || 'bg-gray-100 border-gray-500 text-gray-800'
  }

  // Get appointments for selected date
  const getAppointmentsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0]
    return appointments.filter(apt => apt.date === dateStr)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Calendar View Component
  const CalendarView = () => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Calendar & Appointments</h1>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <div className="flex rounded-lg border">
              {['month', 'week', 'day'].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 text-sm font-medium capitalize ${
                    type === 'month'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } ${type === 'month' ? 'rounded-l-lg' : type === 'day' ? 'rounded-r-lg' : ''}`}
                >
                  {type}
                </button>
              ))}
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus size={20} />
              <span>New Appointment</span>
            </button>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                Today
              </button>
              <button 
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                →
              </button>
            </div>
          </div>

          {/* Mini Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i - 6)
              const isCurrentMonth = date.getMonth() === currentDate.getMonth()
              const isToday = date.toDateString() === new Date().toDateString()
              const hasAppointments = getAppointmentsForDate(date).length > 0
              
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(date)}
                  className={`p-2 text-sm rounded-lg relative ${
                    isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                  } ${
                    isToday ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
                  } ${
                    selectedDate.toDateString() === date.toDateString() && !isToday
                      ? 'bg-blue-100 text-blue-700'
                      : ''
                  }`}
                >
                  {date.getDate()}
                  {hasAppointments && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Appointments for Selected Date */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">
              Appointments for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
          </div>
          <div className="divide-y">
            {getAppointmentsForDate(selectedDate).length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Calendar size={48} className="mx-auto mb-3 text-gray-300" />
                <p>No appointments scheduled for this date</p>
                <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm">
                  Schedule an appointment
                </button>
              </div>
            ) : (
              getAppointmentsForDate(selectedDate).map((appointment) => (
                <div key={appointment.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="font-semibold text-lg">{appointment.time}</div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border-l-4 ${getAppointmentColor(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium">{appointment.customer}</div>
                        <div className="text-sm text-gray-600">{appointment.service}</div>
                        <div className="text-sm text-gray-600">Duration: {appointment.duration} minutes</div>
                        {appointment.notes && (
                          <div className="text-sm text-gray-600">Notes: {appointment.notes}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                        <CheckCircle size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3">
              <Clock className="text-blue-600" size={24} />
              <div>
                <div className="font-semibold">Today's Schedule</div>
                <div className="text-sm text-gray-600">
                  {getAppointmentsForDate(new Date()).length} appointments
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3">
              <AlertCircle className="text-yellow-600" size={24} />
              <div>
                <div className="font-semibold">Pending Confirmations</div>
                <div className="text-sm text-gray-600">
                  {appointments.filter(apt => apt.status === 'pending').length} pending
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3">
              <Calendar className="text-green-600" size={24} />
              <div>
                <div className="font-semibold">This Week</div>
                <div className="text-sm text-gray-600">
                  {appointments.length} total appointments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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

  const OrdersView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus size={20} />
            <span>New Order</span>
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
        {['All', 'Receiving', 'Inspection', 'Sharpening', 'Finishing', 'Delivery'].map((stage) => (
          <button
            key={stage}
            className="px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap bg-white text-gray-700 hover:bg-gray-50"
          >
            {stage}
          </button>
        ))}
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
                  </div>
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
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Plus size={20} />
            <span>Add Customer</span>
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
        {['All', 'Home Cooks', 'Restaurant Chefs', 'Hunters', 'Fishermen'].map((segment) => (
          <button
            key={segment}
            className="px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap bg-white text-gray-700 hover:bg-gray-50"
          >
            {segment}
          </button>
        ))}
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
      case 'calendar':
        return <CalendarView />
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h2>
            <p className="text-gray-500">This module is coming in Phase 2!</p>
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
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
