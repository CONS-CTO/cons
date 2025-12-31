import React from 'react';

interface AnnouncementProps {
  title: string;
  content: React.ReactNode;
}

const Announcement: React.FC<AnnouncementProps> = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-4 border-2 border-purple-500/50 shadow-lg relative overflow-hidden mb-8">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* 公告内容 */}
      <div className="relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        {content}
      </div>
    </div>
  );
};

export default Announcement;