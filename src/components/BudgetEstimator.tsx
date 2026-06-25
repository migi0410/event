'use client';

import { useState, useEffect, useRef } from 'react';

interface BudgetEstimatorProps {
  onEstimateBook: (message: string) => void;
}

export default function BudgetEstimator({ onEstimateBook }: BudgetEstimatorProps) {
  const [eventType, setEventType] = useState<{ label: string; rate: number }>({
    label: 'Gala & Hội Nghị Doanh Nghiệp',
    rate: 1.2,
  });
  const [guests, setGuests] = useState<number>(200);
  const [stageChecked, setStageChecked] = useState<boolean>(true);
  const [avChecked, setAvChecked] = useState<boolean>(true);
  const [prChecked, setPrChecked] = useState<boolean>(false);
  const [displayPrice, setDisplayPrice] = useState<number>(0);

  const prevPriceRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  const costPerGuest = 250000;
  const stageCost = 25000000;
  const avCost = 40000000;
  const prCost = 15000000;

  // Calculate current target price
  const baseCost = guests * costPerGuest * eventType.rate;
  let addonCost = 0;
  if (stageChecked) addonCost += stageCost;
  if (avChecked) addonCost += avCost;
  if (prChecked) addonCost += prCost;

  const targetPrice = baseCost + addonCost;

  // Animate from previous price to new target price
  useEffect(() => {
    const duration = 800; // ms
    const startTime = performance.now();
    const startPrice = prevPriceRef.current;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(startPrice + (targetPrice - startPrice) * ease);
      
      setDisplayPrice(currentVal);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        prevPriceRef.current = targetPrice;
      }
    };

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetPrice]);

  const formatVND = (number: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
      .format(number)
      .replace('₫', 'đ');
  };

  const handleBook = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = `Tôi muốn nhận báo giá chi tiết cho sự kiện "${eventType.label}" quy mô ${guests} khách. Ước tính ngân sách hiển thị: ${formatVND(targetPrice)}.`;
    onEstimateBook(msg);
  };

  return (
    <div className="estimator-card glass-card fade-in-up appear">
      <h3 className="estimator-title">Bảng Dự Toán Chi Phí</h3>
      
      {/* Event Type Selector */}
      <div className="input-group">
        <label className="input-label">Loại hình sự kiện</label>
        <div className="event-type-grid">
          <button
            type="button"
            className={`type-btn ${eventType.rate === 1.2 ? 'active' : ''}`}
            onClick={() => setEventType({ label: 'Gala & Hội Nghị Doanh Nghiệp', rate: 1.2 })}
          >
            <i className="fa-solid fa-building"></i>
            <span>Gala & Hội Nghị</span>
          </button>
          <button
            type="button"
            className={`type-btn ${eventType.rate === 1.4 ? 'active' : ''}`}
            onClick={() => setEventType({ label: 'Giải Đấu Thể Thao (Golf/Pickleball)', rate: 1.4 })}
          >
            <i className="fa-solid fa-trophy"></i>
            <span>Giải Đấu Thể Thao</span>
          </button>
          <button
            type="button"
            className={`type-btn ${eventType.rate === 1.5 ? 'active' : ''}`}
            onClick={() => setEventType({ label: 'Lễ Khai Trương / Ra Mắt', rate: 1.5 })}
          >
            <i className="fa-solid fa-rocket"></i>
            <span>Khai Trương / Ra Mắt</span>
          </button>
        </div>
      </div>

      {/* Slider for Guests */}
      <div className="input-group">
        <div className="slider-header">
          <label className="input-label">Số lượng khách mời</label>
          <span className="slider-val" id="guestCountVal">{guests} khách</span>
        </div>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={guests}
          className="custom-range"
          id="guestRange"
          onChange={(e) => setGuests(parseInt(e.target.value))}
        />
      </div>

      {/* Toggle Options */}
      <div className="input-group">
        <label className="input-label">Dịch vụ kỹ thuật yêu cầu</label>
        <div className="checkbox-list">
          <label className="check-container">
            <input
              type="checkbox"
              id="chkStage"
              checked={stageChecked}
              onChange={(e) => setStageChecked(e.target.checked)}
            />
            <span className="checkmark"></span>
            Thiết kế & Thi công sân khấu 3D chuyên sâu
          </label>
          <label className="check-container">
            <input
              type="checkbox"
              id="chkAV"
              checked={avChecked}
              onChange={(e) => setAvChecked(e.target.checked)}
            />
            <span className="checkmark"></span>
            Âm thanh & Ánh sáng biểu diễn cao cấp
          </label>
          <label className="check-container">
            <input
              type="checkbox"
              id="chkPR"
              checked={prChecked}
              onChange={(e) => setPrChecked(e.target.checked)}
            />
            <span className="checkmark"></span>
            Truyền thông báo chí & Ekip Quay phim chụp ảnh
          </label>
        </div>
      </div>

      <hr className="divider" />

      {/* Result Display */}
      <div className="estimator-result">
        <span className="result-label">Ước tính chi phí tổ chức:</span>
        <h2 className="result-price" id="totalEstimate">{formatVND(displayPrice)}</h2>
        <p className="result-note">*Đây là mức chi phí dự kiến tham khảo, chưa bao gồm VAT và địa điểm.</p>
      </div>

      <button onClick={handleBook} className="btn btn-primary btn-block text-center" id="btnBookFromEstimator" style={{ border: 'none' }}>
        Nhận báo giá chi tiết
      </button>
    </div>
  );
}
