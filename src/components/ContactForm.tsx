'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ContactFormProps {
  initialMessage: string;
  onSuccess: () => void;
}

export default function ContactForm({ initialMessage, onSuccess }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Update message when initialMessage changes from budget calculator
  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
      
      // Focus name input
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }

      // Scroll to contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          message,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        onSuccess();
        
        // Clear Form
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
      } else {
        alert(resData.error || 'Có lỗi xảy ra khi gửi yêu cầu. Vui lòng liên hệ qua hotline hoặc Zalo.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Không thể kết nối đến máy chủ. Vui lòng thử lại sau hoặc liên hệ trực tiếp hotline/Zalo.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper glass-card fade-in-up appear">
      <h3 className="form-title">Đăng Ký Nhận Tư Vấn</h3>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="input-container">
            <input
              type="text"
              id="txtName"
              ref={nameInputRef}
              required
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="txtName">Họ và tên *</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              id="txtEmail"
              required
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="txtEmail">Email liên hệ *</label>
          </div>
          <div className="input-container">
            <input
              type="tel"
              id="txtPhone"
              required
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="txtPhone">Số điện thoại *</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="txtCompany"
              placeholder=" "
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="txtCompany">Tên doanh nghiệp</label>
          </div>
        </div>

        <div className="input-container message-container">
          <textarea
            id="txtMessage"
            rows={4}
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="txtMessage">Mô tả ngắn gọn về sự kiện của bạn...</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-submit"
          disabled={submitting}
          style={{ border: 'none', pointerEvents: submitting ? 'none' : 'auto', opacity: submitting ? 0.8 : 1 }}
        >
          {submitting ? (
            <>
              <span>Đang xử lý yêu cầu...</span>
              <i className="fa-solid fa-spinner fa-spin"></i>
            </>
          ) : (
            <>
              <span>Gửi yêu cầu ngay</span>
              <i className="fa-solid fa-paper-plane"></i>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
