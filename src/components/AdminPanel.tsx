import React, { useState, useEffect } from 'react';
import { ConsultationInquiry } from '../types';
import { INITIAL_INQUIRIES } from '../data';
import { X, Trash2, CheckCircle2, UserCheck, RefreshCw, Download, FileText } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [inquiries, setInquiries] = useState<ConsultationInquiry[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }
  }, [isOpen]);

  const loadInquiries = () => {
    const stored = localStorage.getItem('tat_consultation_inquiries');
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        setInquiries(INITIAL_INQUIRIES);
      }
    } else {
      localStorage.setItem('tat_consultation_inquiries', JSON.stringify(INITIAL_INQUIRIES));
      setInquiries(INITIAL_INQUIRIES);
    }
  };

  if (!isOpen) return null;

  const updateStatus = (id: string, newStatus: 'new' | 'contacted' | 'resolved') => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        return { ...inq, status: newStatus };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('tat_consultation_inquiries', JSON.stringify(updated));
  };

  const deleteInquiry = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa lượt đăng ký tư vấn này?')) {
      const updated = inquiries.filter(inq => inq.id !== id);
      setInquiries(updated);
      localStorage.setItem('tat_consultation_inquiries', JSON.stringify(updated));
    }
  };

  const resetToDefault = () => {
    if (window.confirm('Bạn có chắc chắn muốn khôi phục về danh sách mẫu ban đầu?')) {
      localStorage.setItem('tat_consultation_inquiries', JSON.stringify(INITIAL_INQUIRIES));
      setInquiries(INITIAL_INQUIRIES);
    }
  };

  const exportToCSV = () => {
    const headers = 'ID,Họ và Tên,Số điện thoại,Doanh nghiệp,Yêu cầu,Ngày đăng ký,Trạng thái\n';
    const rows = inquiries.map(inq => 
      `"${inq.id}","${inq.fullName}","${inq.phone}","${inq.company}","${inq.request.replace(/"/g, '""')}","${inq.createdAt}","${inq.status}"`
    ).join('\n');
    
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `TAT_Media_Bookings_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = inquiries.filter(inq => {
    if (filterStatus === 'all') return true;
    return inq.status === filterStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-primary/95 backdrop-blur-md" onClick={onClose} />

      {/* Main Panel */}
      <div className="relative bg-[#0a162b] w-full max-w-5xl h-[85vh] border border-white/10 flex flex-col z-10 text-white">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#081223]">
          <div>
            <span className="font-display font-bold text-[9px] tracking-[0.4em] text-secondary uppercase block mb-1">
              — TAT LEAD MANAGEMENT ENGINE
            </span>
            <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
              Quản lý Yêu cầu Tư vấn
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="border border-white/10 hover:border-secondary hover:bg-secondary text-white p-2 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="p-6 border-b border-white/5 bg-[#0a162b] flex flex-wrap gap-4 justify-between items-center">
          {/* Status Filters */}
          <div className="flex gap-2 bg-primary p-1 border border-white/5">
            {['all', 'new', 'contacted', 'resolved'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 text-xs font-display font-bold uppercase transition-all tracking-wider ${
                  filterStatus === status 
                    ? 'bg-secondary text-white' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {status === 'all' && 'Tất cả'}
                {status === 'new' && 'Mới nhận'}
                {status === 'contacted' && 'Đã liên hệ'}
                {status === 'resolved' && 'Hoàn thành'}
              </button>
            ))}
          </div>

          {/* Admin Operations */}
          <div className="flex gap-3">
            <button
              onClick={exportToCSV}
              className="border border-white/10 hover:border-white hover:bg-white/5 text-white text-xs font-display font-bold px-4 py-2.5 flex items-center gap-2 tracking-wider uppercase cursor-pointer"
            >
              <Download className="w-4 h-4 text-secondary" />
              <span>Xuất danh sách (CSV)</span>
            </button>
            <button
              onClick={resetToDefault}
              className="border border-white/10 hover:border-white hover:bg-white/5 text-white/70 text-xs font-display font-bold px-4 py-2.5 flex items-center gap-2 tracking-wider uppercase cursor-pointer"
              title="Khôi phục danh sách đăng ký mẫu"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Khôi phục mẫu</span>
            </button>
          </div>
        </div>

        {/* Leads Table / List Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {filtered.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-white/40 space-y-4">
              <FileText className="w-16 h-16 opacity-30 stroke-1" />
              <p className="font-display font-bold text-sm tracking-widest uppercase">Không tìm thấy yêu cầu tư vấn nào</p>
              <p className="text-xs text-white/30 font-sans">Đăng ký mới ngoài trang chủ để xem cập nhật thời gian thực ở đây!</p>
            </div>
          ) : (
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 font-display font-bold text-[10px] tracking-widest uppercase text-white/40">
                    <th className="pb-4 font-semibold">Khách Hàng</th>
                    <th className="pb-4 font-semibold">Liên Hệ</th>
                    <th className="pb-4 font-semibold">Doanh Nghiệp</th>
                    <th className="pb-4 font-semibold">Yêu Cầu Chi Tiết</th>
                    <th className="pb-4 font-semibold">Thời Gian</th>
                    <th className="pb-4 font-semibold text-right">Hành Động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm font-sans">
                  {filtered.map((inq) => (
                    <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-4">
                        <p className="font-display font-bold text-white tracking-wide">{inq.fullName}</p>
                        <span className={`inline-block text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 mt-1 border ${
                          inq.status === 'new' ? 'border-amber-500/30 text-amber-500 bg-amber-500/5' :
                          inq.status === 'contacted' ? 'border-sky-500/30 text-sky-500 bg-sky-500/5' :
                          'border-emerald-500/30 text-emerald-500 bg-emerald-500/5'
                        }`}>
                          {inq.status === 'new' && 'MỚI'}
                          {inq.status === 'contacted' && 'ĐÃ LIÊN HỆ'}
                          {inq.status === 'resolved' && 'HOÀN THÀNH'}
                        </span>
                      </td>
                      <td className="py-4 pr-4 text-white/80 tabular-nums">
                        {inq.phone}
                      </td>
                      <td className="py-4 pr-4 text-white/80 font-medium">
                        {inq.company}
                      </td>
                      <td className="py-4 pr-4 max-w-xs text-xs text-white/60 leading-relaxed truncate" title={inq.request}>
                        {inq.request}
                      </td>
                      <td className="py-4 pr-4 text-xs text-white/40 tabular-nums">
                        {new Date(inq.createdAt).toLocaleString('vi-VN')}
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex gap-2 justify-end">
                          {inq.status === 'new' && (
                            <button
                              onClick={() => updateStatus(inq.id, 'contacted')}
                              className="bg-sky-600 hover:bg-sky-500 text-white p-2 border-0 transition-colors cursor-pointer"
                              title="Đánh dấu đã liên hệ"
                            >
                              <UserCheck className="w-4 h-4" />
                            </button>
                          )}
                          {inq.status !== 'resolved' && (
                            <button
                              onClick={() => updateStatus(inq.id, 'resolved')}
                              className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 border-0 transition-colors cursor-pointer"
                              title="Đánh dấu hoàn thành giải quyết"
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            className="bg-rose-950/40 hover:bg-rose-700 text-rose-300 p-2 border border-rose-500/20 hover:border-transparent transition-colors cursor-pointer"
                            title="Xóa yêu cầu"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Mobile representation */}
          <div className="md:hidden space-y-4">
            {filtered.map((inq) => (
              <div key={inq.id} className="p-4 border border-white/5 bg-primary/40 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-white">{inq.fullName}</h4>
                    <p className="text-xs text-white/40 font-mono mt-0.5">{inq.company}</p>
                  </div>
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border ${
                    inq.status === 'new' ? 'border-amber-500/30 text-amber-500' :
                    inq.status === 'contacted' ? 'border-sky-500/30 text-sky-500' :
                    'border-emerald-500/30 text-emerald-500'
                  }`}>
                    {inq.status === 'new' ? 'MỚI' : inq.status === 'contacted' ? 'ĐÃ LIÊN HỆ' : 'HOÀN THÀNH'}
                  </span>
                </div>
                <div className="text-xs text-white/70 space-y-1 font-sans">
                  <p><strong>SĐT/Zalo:</strong> {inq.phone}</p>
                  <p className="line-clamp-3 text-white/60"><strong>Yêu cầu:</strong> {inq.request}</p>
                  <p className="text-[10px] text-white/30">{new Date(inq.createdAt).toLocaleString('vi-VN')}</p>
                </div>
                <div className="flex gap-2 pt-2 border-t border-white/5 justify-end">
                  {inq.status === 'new' && (
                    <button
                      onClick={() => updateStatus(inq.id, 'contacted')}
                      className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-3 py-1.5 font-display font-bold tracking-wider uppercase border-0 cursor-pointer"
                    >
                      Liên hệ
                    </button>
                  )}
                  {inq.status !== 'resolved' && (
                    <button
                      onClick={() => updateStatus(inq.id, 'resolved')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 font-display font-bold tracking-wider uppercase border-0 cursor-pointer"
                    >
                      Xong
                    </button>
                  )}
                  <button
                    onClick={() => deleteInquiry(inq.id)}
                    className="bg-rose-900/30 text-rose-300 text-xs px-3 py-1.5 font-display font-bold tracking-wider uppercase border border-rose-500/20 cursor-pointer"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
