import { DollarSign, CreditCard, Receipt, TrendingUp, Download } from 'lucide-react';

const Financials = () => {
  const transactions = [
    { id: "INV-001", description: "Mathematics Course", amount: 2500, date: "Jan 15, 2024", status: "Paid" },
    { id: "INV-002", description: "Physics Course", amount: 2800, date: "Dec 20, 2023", status: "Paid" },
    { id: "INV-003", description: "Chemistry Course", amount: 2600, date: "Nov 10, 2023", status: "Paid" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Financials</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <DollarSign className="text-white" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">৳7,900</p>
            <p className="text-slate-400 text-sm">Total Spent</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Receipt className="text-white" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">3</p>
            <p className="text-slate-400 text-sm">Total Invoices</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <CreditCard className="text-white" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">All Paid</p>
            <p className="text-slate-400 text-sm">Payment Status</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Receipt className="text-cyan-400" size={28} />
              Transaction History
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="text-left p-4 text-slate-400 font-semibold">Invoice ID</th>
                  <th className="text-left p-4 text-slate-400 font-semibold">Description</th>
                  <th className="text-left p-4 text-slate-400 font-semibold">Amount</th>
                  <th className="text-left p-4 text-slate-400 font-semibold">Date</th>
                  <th className="text-left p-4 text-slate-400 font-semibold">Status</th>
                  <th className="text-left p-4 text-slate-400 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index} className="border-t border-slate-800 hover:bg-slate-800/30 transition-all">
                    <td className="p-4 text-cyan-400 font-medium">{tx.id}</td>
                    <td className="p-4 text-white">{tx.description}</td>
                    <td className="p-4 text-white font-bold">৳{tx.amount}</td>
                    <td className="p-4 text-slate-400">{tx.date}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-emerald-500/20 text-emerald-400">
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all">
                        <Download size={16} />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;