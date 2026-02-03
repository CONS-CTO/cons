// 简化版静态图片显示组件
import React from 'react';

interface ImageCarouselProps {
  images: string[];
  height?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  height = 'h-[400px]'
}) => {
  if (!images || images.length === 0) {
    return (
      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 p-8 text-center">
        <p className="text-gray-400">没有可用的图片</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
      {/* 图片容器 */}
      <div className={`w-full ${height} relative overflow-hidden rounded-lg bg-gray-900 flex items-center justify-center`}>
        <img
          src={images[0]} // 只显示第一张图片
          alt="霸天虎图片"
          className="w-full h-full object-contain"
          style={{ 
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>

      {/* 简单的图片计数 */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-orange-500' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;