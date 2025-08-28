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

  // Sample invoices data
  const invoices = [
    {
      id: 'INV-001',
      orderId: 'ORD-001',
      customer: 'Mario Rodriguez',
      amount: 45.00,
      status: 'paid',
      dueDate: '2024-08-22',
      paidDate: '2024-08-20',
      services: [
        { name: 'Standard Sharpening', quantity: 3, rate: 15.00, total: 45.00 }
      ]
    },
    {
      id: 'INV-002',
      orderId: 'ORD-002',
      customer: 'Sarah Chen',
      amount: 85.00,
      status: 'pending',
      dueDate: '2024-08-25',
      paidDate: null,
      services: [
        { name: 'Premium Sharpening', quantity: 5, rate: 12.00, total: 60.00 },
        { name: 'Handle Repair', quantity: 1, rate: 25.00, total: 25.00 }
      ]
    },
    {
      id: 'INV-003',
      orderId: 'ORD-003',
      customer: 'Restaurant Depot',
      amount: 180.00,
      status: 'overdue',
      dueDate: '2024-08-18',
      paidDate: null,
      services: [
        { name: 'Commercial Package', quantity: 12, rate: 15.00, total: 180.00 }
      ]
    }
  ]

  // Sample loyalty data
  const loyaltyStats = {
    totalMembers: 1247,
    activeMembers: 892,
    pointsIssued: 45230,
    rewardsRedeemed: 156,
    avgPointsPerCustomer: 385
  }

  const loyaltyTiers = [
    {
      name: 'Bronze',
      minPoints: 0,
      benefits: ['5% discount', 'Birthday reward', 'Priority booking'],
      members: 654,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      name: 'Silver',
      minPoints: 500,
      benefits: ['10% discount', 'Free sharpening every 10th visit', 'Express service'],
      members: 425,
      color: 'text-gray-600 bg-gray-100'
    },
    {
      name: 'Gold',
      minPoints: 1000,
      benefits: ['15% discount', 'Free pickup/delivery', 'VIP support', 'Exclusive offers'],
      members: 168,
      color: 'text-yellow-600 bg-yellow-100'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      customer: 'Mario Rodriguez',
      action: 'Points Earned',
      points: 45,
      description: 'Order #ORD-001 completed',
      date: '2024-08-22'
    },
    {
      id: 2,
      customer: 'Sarah Chen',
      action: 'Reward Redeemed',
      points: -100,
      description: 'Free sharpening service',
      date: '2024-08-21'
    },
    {
      id: 3,
      customer: 'Mike Thompson',
      action: 'Tier Upgraded',
      points: 0,
      description: 'Upgraded to Silver tier',
      date: '2024-08-20'
    }
  ]

  const referrals = [
    {
      id: 'REF-001',
      referrer: 'Sarah Chen',
      referred: 'Mike Thompson',
      status: 'completed',
      reward: 50,
      date: '2024-08-18'
    },
    {
      id: 'REF-002',
      referrer: 'Mario Rodriguez',
      referred: 'Lisa Wang',
      status: 'pending',
      reward: 50,
      date: '2024-08-20'
    }
  ]
  const paymentMethods = [
    {
      id: 'PM-001',
      type: 'Credit Card',
      details: '**** 4242',
      customer: 'Mario Rodriguez',
      amount: 45.00,
      date: '2024-08-20',
      status: 'completed'
    },
    {
      id: 'PM-002',
      type: 'Cash',
      details: 'In-person payment',
      customer: 'Local Customer',
      amount: 30.00,
      date: '2024-08-21',
      status: 'completed'
    }
  ]
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

  // Loyalty View Component
  const LoyaltyView = () => {
    const [activeTab, setActiveTab] = useState('program')

    const ProgramOverviewTab = () => (
      <div className="space-y-6">
        {/* Loyalty Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Total Members</div>
            <div className="text-2xl font-bold text-blue-600">{loyaltyStats.totalMembers}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Active Members</div>
            <div className="text-2xl font-bold text-green-600">{loyaltyStats.activeMembers}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Points Issued</div>
            <div className="text-2xl font-bold text-purple-600">{loyaltyStats.pointsIssued.toLocaleString()}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Rewards Redeemed</div>
            <div className="text-2xl font-bold text-orange-600">{loyaltyStats.rewardsRedeemed}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Avg Points</div>
            <div className="text-2xl font-bold text-gray-900">{loyaltyStats.avgPointsPerCustomer}</div>
          </div>
        </div>

        {/* Loyalty Tiers */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Loyalty Tiers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {loyaltyTiers.map((tier) => (
              <div key={tier.name} className="border rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tier.color}`}>
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{tier.name}</h4>
                    <p className="text-sm text-gray-600">{tier.minPoints}+ points</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Benefits:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{tier.members}</div>
                    <div className="text-sm text-gray-600">members</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Loyalty Activity</h3>
          </div>
          <div className="divide-y">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.action === 'Points Earned' ? 'bg-green-100' :
                      activity.action === 'Reward Redeemed' ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      {activity.action === 'Points Earned' ? (
                        <Plus className={activity.points > 0 ? 'text-green-600' : 'text-red-600'} size={20} />
                      ) : activity.action === 'Reward Redeemed' ? (
                        <Gift className="text-red-600" size={20} />
                      ) : (
                        <Star className="text-blue-600" size={20} />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{activity.customer}</div>
                      <div className="text-sm text-gray-600">{activity.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      activity.points > 0 ? 'text-green-600' : activity.points < 0 ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {activity.points > 0 ? '+' : ''}{activity.points !== 0 ? activity.points : activity.action}
                    </div>
                    <div className="text-sm text-gray-500">{activity.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

    const ReferralsTab = () => (
      <div className="space-y-6">
        {/* Referral Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Total Referrals</div>
            <div className="text-2xl font-bold text-blue-600">{referrals.length}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Completed</div>
            <div className="text-2xl font-bold text-green-600">
              {referrals.filter(r => r.status === 'completed').length}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Pending</div>
            <div className="text-2xl font-bold text-yellow-600">
              {referrals.filter(r => r.status === 'pending').length}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Rewards Paid</div>
            <div className="text-2xl font-bold text-green-600">
              ${referrals.filter(r => r.status === 'completed').reduce((sum, r) => sum + r.reward, 0)}
            </div>
          </div>
        </div>

        {/* Referrals List */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Referral History</h3>
          </div>
          <div className="divide-y">
            {referrals.map((referral) => (
              <div key={referral.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">{referral.referrer}</div>
                      <div className="text-sm text-gray-600">referred {referral.referred}</div>
                      <div className="text-xs text-gray-500">{referral.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      referral.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {referral.status}
                    </span>
                    <div className="text-right">
                      <div className="font-bold text-green-600">${referral.reward}</div>
                      <div className="text-xs text-gray-500">reward</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Program Setup */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Referral Program Settings</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referrer Reward
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="50"
                  />
                  <span className="text-gray-600">points</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Customer Reward
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25"
                  />
                  <span className="text-gray-600">points</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Update Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Loyalty & Referrals</h1>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Gift size={20} />
              <span>Award Points</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Users size={20} />
              <span>Track Referral</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'program', label: 'Loyalty Program', icon: Star },
            { id: 'referrals', label: 'Referrals', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'program' && <ProgramOverviewTab />}
        {activeTab === 'referrals' && <ReferralsTab />}
      </div>
    )
  }
    const colors = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      overdue: 'bg-red-100 text-red-800',
      draft: 'bg-gray-100 text-gray-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  // Payments View Component
  const PaymentsView = () => {
    const [activeTab, setActiveTab] = useState('invoices')

    const InvoicesTab = () => (
      <div className="space-y-6">
        {/* Invoices Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Total Outstanding</div>
            <div className="text-2xl font-bold text-red-600">$265</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Paid This Month</div>
            <div className="text-2xl font-bold text-green-600">$1,240</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Pending Invoices</div>
            <div className="text-2xl font-bold text-yellow-600">2</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Average Payment</div>
            <div className="text-2xl font-bold text-gray-900">$76</div>
          </div>
        </div>

        {/* Invoices List */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Invoices</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Plus size={20} />
                <span>New Invoice</span>
              </button>
            </div>
          </div>
          <div className="divide-y">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="font-semibold">{invoice.id}</div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getInvoiceStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div><strong>Customer:</strong> {invoice.customer}</div>
                      <div><strong>Order:</strong> {invoice.orderId}</div>
                      <div><strong>Due:</strong> {invoice.dueDate}</div>
                      {invoice.paidDate && (
                        <div><strong>Paid:</strong> {invoice.paidDate}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold">${invoice.amount}</div>
                      <div className="text-sm text-gray-500">
                        {invoice.services.length} service{invoice.services.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="View Invoice">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg" title="Edit Invoice">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Send Invoice">
                        <Mail size={18} />
                      </button>
                      {invoice.status === 'pending' && (
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg" title="Mark as Paid">
                          <DollarSign size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Services:</div>
                  {invoice.services.map((service, index) => (
                    <div key={index} className="flex justify-between text-sm text-gray-600">
                      <span>{service.name} (×{service.quantity})</span>
                      <span>${service.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

    const PaymentMethodsTab = () => (
      <div className="space-y-6">
        {/* Payment Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Today's Payments</div>
            <div className="text-2xl font-bold text-green-600">$75</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">This Week</div>
            <div className="text-2xl font-bold text-green-600">$540</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="text-sm text-gray-600">Processing Fees</div>
            <div className="text-2xl font-bold text-gray-600">$12.50</div>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Payments</h3>
          </div>
          <div className="divide-y">
            {paymentMethods.map((payment) => (
              <div key={payment.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">{payment.customer}</div>
                      <div className="text-sm text-gray-600">{payment.type} - {payment.details}</div>
                      <div className="text-xs text-gray-500">{payment.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">+${payment.amount}</div>
                    <div className="text-xs text-green-600 capitalize">{payment.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Setup */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Payment Processing Setup</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <DollarSign className="text-blue-600" size={24} />
                <div>
                  <div className="font-medium">Credit/Debit Cards</div>
                  <div className="text-sm text-gray-600">Accept Visa, MC, Amex, Discover</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">Active</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <DollarSign className="text-green-600" size={24} />
                <div>
                  <div className="font-medium">Cash Payments</div>
                  <div className="text-sm text-gray-600">Track in-person cash payments</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">Active</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-600" size={24} />
                <div>
                  <div className="font-medium">Digital Payments</div>
                  <div className="text-sm text-gray-600">Apple Pay, Google Pay, etc.</div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Payments & Invoicing</h1>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus size={20} />
              <span>Record Payment</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Edit size={20} />
              <span>New Invoice</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'invoices', label: 'Invoices', icon: Edit },
            { id: 'payments', label: 'Payments', icon: DollarSign }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'invoices' && <InvoicesTab />}
        {activeTab === 'payments' && <PaymentMethodsTab />}
      </div>
    )
  }
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
      case 'loyalty':
        return <LoyaltyView />
      case 'payments':
        return <PaymentsView />
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
