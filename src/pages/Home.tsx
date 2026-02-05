import React, { useEffect } from 'react';

const Home: React.FC = () => {
  // 图片数据 - 添加对应的文字说明
  const images = [
    {
      src: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/293538880770/attachment/微信图片_20251229114639_20251229143925.jpg',
      alt: '霸天虎图片 1',
      title: '霸天虎(CONS)',
      description: '区块链社区的革命者'
    },
    {
      src: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/293538880770/attachment/微信图片_20251231101915_20251231101936.jpg',
      alt: '霸天虎图片 2',
      title: '社区自治(CTO)',
      description: '去中心化的社区治理模式'
    },
    {
      src: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/293538880770/attachment/微信图片_20251229114643_20251229143925.jpg',
      alt: '霸天虎图片 3',
      title: '共识驱动',
      description: '社区强共识推动发展'
    },
    {
      src: 'https://lf-code-agent.coze.cn/obj/x-ai-cn/293538880770/attachment/微信图片_20251229114644_20251229143925.jpg',
      alt: '霸天虎图片 4',
      title: '基金会治理',
      description: '透明公正的基金会管理'
    }
  ];

  // 复制功能实现
  const copyToClipboard = (text: string) => {
    // 创建临时文本区域
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    
    // 选择并复制文本
    tempTextArea.select();
    document.execCommand('copy');
    
    // 移除临时文本区域
    document.body.removeChild(tempTextArea);
    
    // 显示复制成功提示
    const toast = document.getElementById('copyToast');
    if (toast) {
      toast.classList.add('show');
      
      // 2秒后隐藏提示
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }
  };

  // 检测设备类型
  const isMobileDevice = () => {
    return window.innerWidth <= 768;
  };

  // 添加淡入动画效果
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      {/* 复制成功提示框 */}
      <div id="copyToast" className="copy-toast">
        复制成功！
      </div>

         {/* 头部 */}
      <header className="py-16 text-center border-b-4 border-gray-800 relative overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* 背景图 */}
         <div className="absolute inset-0 z-0">
           <img 
             src="https://lf-code-agent.coze.cn/obj/x-ai-cn/293538880770/attachment/白_20260203140236.jpg" 
             alt="霸天虎代币背景" 
             className="w-full h-full object-cover opacity-80"
             style={{objectPosition: 'center'}}
           />
           <div className="absolute inset-0 bg-black/30"></div>
         </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
            霸天虎代币<span className="text-orange-500">(CONS)</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-orange-300 max-w-2xl mx-auto">
            完全社区自治 · 强共识驱动 · 基金会治理
          </p>
          
          {/* 快速操作按钮 */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
               href="https://lvswap.app/?p=0x2428919286ea441c5ee4d74652474bcae8a2ba47&in=USDT&out=待公布" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-gradient-orange hover:opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover-card"
            >
              <i className="fas fa-chart-line mr-2"></i> 购买并查看行情
            </a>
            <a 
              href="#announcementSection" 
              className="bg-gray-800 hover:bg-gray-700 text-orange-400 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover-card"
            >
              <i className="fas fa-bullhorn mr-2"></i> 查看公告
            </a>
          </div>
        </div>
      </header>

      {/* 顶部功能导航 */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 py-4">
            <a href="#announcementSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300">
              <i className="fab fa-telegram mr-2"></i> 社区公告
            </a>
            <a href="#riskSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300">
              <i className="fas fa-exclamation-triangle mr-2"></i> 风险提示
            </a>
            <a href="#tokenInfoSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300">
              <i className="fas fa-cogs mr-2"></i> 代币机制
            </a>
            <a href="#tokenInfoSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300">
              <i className="fas fa-file-contract mr-2"></i> 智能合约
            </a>
            <a href="#qqGroupsSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300">
              <i className="fas fa-users mr-2"></i> 加入社区
            </a>
          </div>
        </div>
      </div>

      {/* 图片平铺区域 */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center animate-on-scroll">
          <h2 className="text-4xl font-bold text-white mb-3">霸天虎社区核心理念</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* 桌面端网格布局，移动端横向滚动 */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group flex flex-col h-[450px] hover-card animate-on-scroll"
                style={{transitionDelay: `${index * 100}ms`}}
              >
                {/* 图片容器 */}
                <div className="relative flex-grow overflow-hidden h-[400px] flex items-center justify-center">
                  {/* 渐变叠加层 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  
                  {/* 图片 */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* 图片内容文字 */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-30">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">{image.title}</h3>
                    <p className="text-lg text-orange-300 drop-shadow-md">{image.description}</p>
                  </div>
                </div>
                
                {/* 底部装饰条 */}
                <div className="h-3 bg-gradient-to-r from-orange-500 to-purple-500"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 移动端横向滚动布局 */}
        <div className="md:hidden mobile-scroll-container">
          <div className="mobile-scroll-content py-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group flex flex-col h-[400px] min-w-[300px] mx-2 hover-card animate-on-scroll"
              >
                <div className="relative flex-grow overflow-hidden h-[350px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  <img src={image.src} alt={image.alt} className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{image.title}</h3>
                    <p className="text-lg text-orange-300 drop-shadow-md">{image.description}</p>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-orange-500 to-purple-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* 社区公告 */}
      <div id="announcementSection" className="container mx-auto px-4 py-16">
        {/* 社区公告标头 */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-bold text-white mb-3 announcement-header">
            社区公告
          </h2>
        </div>
        
        {/* 公告内容 */}
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-6 md:p-8 border-2 border-purple-500/50 shadow-xl relative overflow-hidden mb-12 hover-card animate-on-scroll">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                警惕诈骗，认准唯一霸天虎社区
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-gray-200 mb-6 text-center text-base md:text-lg">
              亲爱的霸天虎成员：
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
              近期我们发现有外部人员冒充"霸天虎"名义，以所谓"新项目""仿盘"等形式进行宣传，甚至通过私信、虚假链接等方式诱导用户授权、转账。在此，霸天虎社区郑重声明：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl hover-card">
                <div className="flex items-start">
                  <div className="text-xl font-bold text-purple-400 mr-3 mt-1">
                    1️⃣
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">我们只有一个，绝无分盘或新项目</h3>
                    <p className="text-gray-300 leading-relaxed">
                      霸天虎社区长期建设，从未推出、也不会开盘任何所谓"新项目"。任何以"霸天虎"名义发起的新盘、投资计划、代币销售等均为诈骗行为，请勿轻信。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl hover-card">
                <div className="flex items-start">
                  <div className="text-xl font-bold text-purple-400 mr-3 mt-1">
                    2️⃣
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">谨防私信与链接诈骗</h3>
                    <ul className="text-gray-300 space-y-2 ml-6 list-disc leading-relaxed">
                      <li>所有通过QQ群私信主动联系您，自称"管理员""客服"并发送链接的，均为骗子。</li>
                      <li>切勿点击不明链接，切勿授权陌生网站，切勿向任何陌生人转账或提供私钥、助记词。</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl hover-card">
                <div className="flex items-start">
                  <div className="text-xl font-bold text-purple-400 mr-3 mt-1">
                    3️⃣
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">官方验证渠道</h3>
                    <p className="text-gray-300 mb-2">如有任何疑问，欢迎通过以下方式核实：</p>
                    <ul className="text-gray-300 space-y-2 ml-6 list-disc leading-relaxed">
                      <li>加入唯一官方QQ群；</li>
                      <li>参与定期召开的腾讯会议（会议号以群公告为准）。</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl hover-card">
                <div className="flex items-start">
                  <div className="text-xl font-bold text-purple-400 mr-3 mt-1">
                    4️⃣
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">自我保护，共同监督</h3>
                    <p className="text-gray-300 leading-relaxed">
                      请广大成员提高警惕，互相提醒。如发现可疑行为，请第一时间向群管理举报。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 text-gray-300 italic text-base md:text-lg max-w-3xl mx-auto">
              <p className="mb-2">霸天虎社区的发展离不开每一位成员的支持与信任。让我们保持清醒，共同维护安全、健康的社区环境！</p>
              <p className="font-bold mt-4 text-white">—— 霸天虎社区 官方团队</p>
              <p className="text-sm mt-2 text-gray-400">(本公告长期有效，请随时查阅官网提示)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 代币基本信息 */}
          <div id="tokenInfoSection" className="bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-xl hover-card animate-on-scroll">
            <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-6 pb-3 border-b border-gray-800 flex items-center">
              <i className="fas fa-coins mr-3"></i> 代币基本信息
            </h2>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-gray-800 p-5 rounded-xl text-center hover-card">
                <div className="text-sm text-gray-400">代币符号</div>
                <div className="text-3xl font-bold text-orange-400 mt-2">CONS</div>
              </div>
              <div className="bg-gray-800 p-5 rounded-xl text-center hover-card">
                <div className="text-sm text-gray-400">发行总量</div>
                <div className="text-3xl font-bold text-orange-400 mt-2">100万</div>
              </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center hover-card">
                  <div className="text-sm text-gray-400">已销毁</div>
                  <div className="text-3xl font-bold text-orange-400 mt-2">38万+</div>
                </div>
                <div className="bg-gray-800 p-5 rounded-xl text-center hover-card">
                  <div className="text-sm text-gray-400">流通量</div>
                  <div className="text-3xl font-bold text-orange-400 mt-2">&lt;62万</div>
                </div>
            </div>
            
            <div className="mt-8 bg-orange-900/20 border-l-4 border-orange-500 p-5 rounded-r-xl hover-card">
               <p className="font-bold mb-3 text-lg">
                 <i className="fas fa-exclamation-circle mr-2"></i> 交易税收机制
               </p>
                <ul className="list-disc pl-6 space-y-2">
                 <li>
                   买税：<span className="text-orange-400 font-bold">3%</span>
                   <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li><span className="text-orange-400 font-bold">1%</span> 永久销毁<span className="ml-2 whitespace-nowrap">（链上自动执行进入黑洞地址）</span></li>
                     <li><span className="text-orange-400 font-bold">1%</span> 营销红包</li>
                        <li><span className="text-orange-400 font-bold">1%</span> LP底池分红<span className="ml-2 whitespace-nowrap">（链上自动执行进入个人钱包）</span></li>
                   </ul>
                 </li>
                 <li className="mt-3">
                   卖税：<span className="text-orange-400 font-bold">4%</span>
                   <ul className="list-circle pl-6 mt-2 space-y-2">
                       <li><span className="text-orange-400 font-bold">1%</span> 永久销毁<span className="ml-2 whitespace-nowrap">（链上自动执行进入黑洞地址）</span></li>
                      <li><span className="text-orange-400 font-bold">1%</span> 营销红包</li>
                        <li><span className="text-orange-400 font-bold">2%</span> LP底池分红<span className="ml-2 whitespace-nowrap">（链上自动执行进入个人钱包）</span></li>
                   </ul>
                 </li>
               </ul>
            </div>
            
            {/* 安全保障信息 */}
            <div className="mt-8 bg-green-900/20 border-l-4 border-green-500 p-5 rounded-r-xl hover-card">
              <p className="font-bold mb-3 text-lg">
                <i className="fas fa-shield-alt mr-2"></i> 安全保障
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  合约已<span className="text-green-400 font-bold">开源</span>，公开透明
                </li>
                <li>
                  LP底池已打入<span className="text-green-400 font-bold">黑洞</span>，安全可靠
                </li>
              </ul>
            </div>
          </div>
          
          {/* 社区与基金会 */}
          <div className="bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-xl hover-card animate-on-scroll" style={{transitionDelay: '100ms'}}>
            <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-6 pb-3 border-b border-gray-800 flex items-center">
              <i className="fas fa-users mr-3"></i> 社区自治与基金会
            </h2>
            
            <p className="mb-6 text-lg">
              霸天虎代币是完全的社区自治项目，无传统意义上的项目方，由社区强共识驱动。
            </p>
            
            <div className="bg-gray-800/80 p-4 rounded-xl mb-6 hover-card">
              <p className="mb-3 text-gray-300">
                代币合约地址：
              </p>
               <p id="contractAddressDisplay" className="text-orange-400 font-bold text-lg md:text-xl break-all cursor-pointer hover:text-orange-300 transition-colors" onClick={() => copyToClipboard('0x41bfb247acc8e600174c20b0ec9df148b9d967a8')}>
                 0x41bfb247acc8e600174c20b0ec9df148b9d967a8
               </p>
            </div>
            
            <h3 className="text-xl text-orange-400 font-semibold mt-8 mb-4">
              基金会结构
            </h3>
            
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className="text-lg">
                基金会成员：<span className="text-orange-400 font-bold">50名</span>
              </li>
            </ul>
            
            <div className="bg-gray-800/80 p-4 rounded-xl mb-6 hover-card">
              <p className="mb-3 text-gray-300">
                基金会地址：
              </p>
              <p id="foundationAddressDisplay" className="text-orange-400 font-bold text-lg md:text-xl break-all cursor-pointer hover:text-orange-300 transition-colors" onClick={() => copyToClipboard('待公布')}>
                待公布
              </p>
            </div>
            
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li className="text-lg">
                基金会负责：营销钱包管理、市值维护、社区发展
              </li>
            </ul>
            
            <div className="bg-gradient-to-r from-orange-900/30 to-purple-900/30 p-5 rounded-xl mt-8 hover-card">
              <h3 className="text-xl text-orange-400 font-semibold mb-4">
                基金会招募团队长
              </h3>
              
              <p className="text-lg">
                我们正在寻找有热情、有能力的社区成员加入基金会，共同推动霸天虎生态发展。
              </p>
            </div>
          </div>
          
          {/* 如何加入基金会 */}
          <div className="bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-xl hover-card animate-on-scroll" style={{transitionDelay: '200ms'}}>
            <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-6 pb-3 border-b border-gray-800 flex items-center">
              <i className="fas fa-door-open mr-3"></i> 如何加入基金会
            </h2>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl mb-8 hover-card">
              <ol className="list-decimal pl-8 space-y-4">
                <li className="text-lg">
                  准备 <span className="text-orange-400 font-bold">2000个</span> 霸天虎代币(CONS)
                </li>
                <li className="text-lg">
                  将 <span className="text-orange-400 font-bold">500个</span> CONS转入基金会钱包地址
                </li>
                <li className="text-lg">
                  保留 <span className="text-orange-400 font-bold">1500个</span> CONS在个人钱包（这1500个代币软锁仓）
                </li>
              </ol>
            </div>
            
            <div className="mt-8 bg-orange-900/20 border-l-4 border-orange-500 p-5 rounded-r-xl hover-card">
              <p className="font-bold mb-3 text-lg">成员义务：</p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-lg">
                  积极参与社区布道，推广霸天虎代币
                </li>
                <li className="text-lg">
                  准时参加基金会会议
                </li>
                <li className="text-lg">
                  听从基金会统一指挥和安排
                </li>
                <li className="text-lg">
                  为社区发展和代币价值提升贡献力量
                </li>
              </ul>
            </div>
          </div>
          
          {/* 联系方式 */}
          <div id="qqGroupsSection" className="bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-xl hover-card animate-on-scroll" style={{transitionDelay: '300ms'}}>
            <h2 className="text-orange-400 text-2xl md:text-3xl font-bold mb-6 pb-3 border-b border-gray-800 flex items-center">
              <i className="fas fa-comments mr-3"></i> 社区联系方式
            </h2>
            
            <p className="mb-6 text-lg">
              加入我们的QQ群，参与社区讨论：
            </p>
            
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
               <div className="bg-gray-800 p-6 rounded-xl text-center hover-card glow-effect">
                  <i className="fab fa-qq text-3xl text-orange-400 mb-3"></i>
                  <div className="text-lg text-gray-300 font-medium mb-2">霸天虎官方一群</div>
                  <span id="qqGroup3Display" className="text-2xl font-bold text-orange-400 cursor-pointer hover:text-orange-300 transition-colors" onClick={() => copyToClipboard('693226961')}>
                    693226961
                  </span>
               </div>
               <div className="bg-gray-800 p-6 rounded-xl text-center hover-card glow-effect">
                  <i className="fab fa-qq text-3xl text-orange-400 mb-3"></i>
                   <div className="text-lg text-gray-300 font-medium mb-2">霸天虎官方二群</div>
                   <span id="qqGroup3Display2" className="text-2xl font-bold text-orange-400 cursor-pointer hover:text-orange-300 transition-colors" onClick={() => copyToClipboard('685447165')}>
                     685447165
                   </span>
               </div>
             </div>
            
            <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 p-5 rounded-xl">
               <p className="text-lg text-center text-yellow-300">
                 请注意：我们只在QQ群进行官方沟通，谨防其他渠道的诈骗信息。
               </p>
             </div>
             
             {/* 腾讯会议信息 */}
             <div className="mt-8 bg-blue-900/20 border border-blue-500/30 p-5 rounded-xl">
               <h3 className="text-xl font-bold text-blue-400 mb-4">24小时腾讯会议</h3>
               <div className="space-y-4">
                 <div className="bg-gray-800/50 p-4 rounded-lg">
                   <p className="text-white font-medium mb-2">霸天虎1号腾讯会议室</p>
                   <p className="text-blue-300 text-lg cursor-pointer hover:underline" onClick={() => copyToClipboard('673-258-2643')}>
                     673-258-2643
                   </p>
                 </div>
                 <div className="bg-gray-800/50 p-4 rounded-lg">
                   <p className="text-white font-medium mb-2">霸天虎2号腾讯会议室</p>
                   <p className="text-blue-300 text-lg cursor-pointer hover:underline" onClick={() => copyToClipboard('728-216-6488')}>
                     728-216-6488
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 风险提示 */}
      <div className="container mx-auto px-4 py-16">
        <div id="riskSection" className="bg-red-900/10 border-2 border-red-500 rounded-2xl p-6 md:p-8 shadow-xl hover-card animate-on-scroll">
          <h2 className="text-red-500 text-3xl font-bold mb-6 text-center">
            <i className="fas fa-exclamation-triangle mr-3"></i>
            风险提示
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "加密货币投资具有高风险性，价格波动剧烈，可能造成本金损失",
              "霸天虎代币(CONS)是完全社区自治项目，无中心化项目方控制",
              "加入基金会需要自愿锁仓代币，请谨慎评估个人风险承受能力",
              "代币交易税收机制由智能合约自动执行，不可更改",
              "请勿轻信任何承诺收益的宣传，投资决策需独立判断",
              "请注意网络安全，保管好个人钱包私钥，谨防诈骗",
              "警惕仿盘，谨防诈骗！霸天虎社区无任何新项目，任何\"新盘\"均为骗局",
              "请勿点击任何私信链接！严防冒充管理员的诈骗，绝不授权、不转账",
              "请勿向合约地址转账，用户转账后，资金将无法退回，转账前请确认接受地址是否正确。",
              "一切疑问请通过官方QQ群或腾讯会议核实，勿信其他渠道。保护好个人资产！"
            ].map((risk, index) => (
              <div key={index} className="flex items-start bg-red-900/5 p-4 rounded-xl">
                <div className="text-red-500 mt-1 mr-3">
                  <i className="fas fa-circle-exclamation"></i>
                </div>
                <p className="text-red-300">{risk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}<footer className="mt-20 py-12 border-t border-gray-800 text-center text-gray-500 bg-gray-900/50">
        <div className="container mx-auto px-4">

          
          <p className="text-xl font-bold text-white mb-4">
            霸天虎代币(CONS) - 社区自治项目
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#announcementSection" className="text-orange-400 hover:text-orange-300 transition-colors">
              <i className="fas fa-bullhorn text-xl"></i>
            </a>
            <a href="#tokenInfoSection" className="text-orange-400 hover:text-orange-300 transition-colors">
              <i className="fas fa-coins text-xl"></i>
            </a>
            <a href="#qqGroupsSection" className="text-orange-400 hover:text-orange-300 transition-colors">
              <i className="fas fa-users text-xl"></i>
            </a>
            <a href="#riskSection" className="text-orange-400 hover:text-orange-300 transition-colors">
              <i className="fas fa-shield-alt text-xl"></i>
            </a>
          </div>
          
          <p className="mt-4 text-sm">
            本页面仅提供项目信息展示，不构成任何投资建议
          </p>
          
          <p className="mt-8 text-sm">
            © 2025 霸天虎社区. 社区自治驱动.
          </p>
        </div>
      </footer>

      {/* 复制成功提示 - 绿色背景 */}
      <style jsx>{`
        .copy-toast {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(16, 185, 129, 0.95);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: bold;
          font-size: 16px;
        }
        
        .copy-toast.show {
          opacity: 1;
        }
        
        /* 社区公告标题样式增强 */
        .announcement-header {
          position: relative;
          padding-bottom: 15px;
        }
        
        .announcement-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, rgba(234,88,12,1) 0%, rgba(168,85,247,1) 100%);
          border-radius: 2px;
        }
        
        /* 移动端图片横向滚动容器 */
        .mobile-scroll-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        
        .mobile-scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .mobile-scroll-content {
          display: flex;
          gap: 16px;
          padding-bottom: 20px;
        }
        
        .mobile-scroll-content > div {
          min-width: 300px;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;