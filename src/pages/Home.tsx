import React from 'react';

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

  return (
    <div>
       {/* 头部 */}
      <header className="py-10 text-center border-b-4 border-gray-800 relative overflow-hidden min-h-[400px] flex items-center justify-center">
        {/* 背景图 */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=ultra%20high%20definition%20milky%20way%20galaxy%20center%20with%20bright%20vibrant%20stars%20and%20spiral%20arms%20clear%20details%20in%20deep%20space%20science%20fiction%20futuristic%20sharp%20focus%20bright%20colors&sign=d1476be9f81f057e53f2a8ab0aacc909" 
            alt="高清银河系背景" 
            className="w-full h-full object-cover opacity-95"
            style={{objectPosition: 'center'}}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-gray-900/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <img 
               src="https://lf-code-agent.coze.cn/obj/x-ai-cn/293538880770/attachment/Screenshot_20251228_162143_com.huawei.photos_20251230003929.png" 
               alt="霸天虎代币图标" 
               className="w-48 h-48 mx-auto rounded-full shadow-xl border-4 border-orange-500/50"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            霸天虎代币(CONS)
          </h1>
          <p className="text-xl font-semibold text-orange-300">
            完全社区自治 · 强共识驱动 · 基金会治理
          </p>
        </div>
      </header>

      {/* 顶部功能导航 */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 py-4">
            <a href="#announcementSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm md:text-base">
              <i className="fab fa-telegram mr-2"></i> 社区公告
            </a>
            <a href="#riskSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm md:text-base">
              <i className="fas fa-exclamation-triangle mr-2"></i> 风险提示
            </a>
            <a href="#tokenInfoSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm md:text-base">
              <i className="fas fa-cogs mr-2"></i> 代币机制
            </a>
            <a href="#tokenInfoSection" className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm md:text-base">
              <i className="fas fa-file-contract mr-2"></i> 智能合约
            </a>
            <a 
              href="https://lvswap.app/?p=0x2428919286ea441c5ee4d74652474bcae8a2ba47&in=USDT&out=0x5164a7d758a499764219bdf1384e7c2c11545733" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm md:text-base"
            >
              <i className="fas fa-chart-line mr-2"></i> 购买并查看行情
            </a>
          </div>
        </div>
      </div>

      {/* 图片平铺区域 */}
      <div className="container mx-auto px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">霸天虎社区核心理念</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 group flex flex-col h-[400px]"
            >
              {/* 图片容器 */}
              <div className="relative flex-grow overflow-hidden h-[350px] flex items-center justify-center">
                {/* 渐变叠加层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                
                {/* 图片 */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-contain w-full h-full"
                />
                
                {/* 图片内容文字 */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{image.title}</h3>
                  <p className="text-lg text-orange-300 drop-shadow-md">{image.description}</p>
                </div>
              </div>
              
              {/* 底部装饰条 */}
              <div className="h-2 bg-gradient-to-r from-orange-500 to-purple-500"></div>
            </div>
          ))}
        </div>
      </div>

       {/* 社区公告 */}
      <div id="announcementSection" className="container mx-auto px-4 py-6">
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
                警惕诈骗，认准唯一霸天虎社区
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            </div>

            <p className="text-gray-200 mb-4 text-center text-sm">
              亲爱的霸天虎成员：
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              近期我们发现有外部人员冒充"霸天虎"名义，以所谓"新项目""仿盘"等形式进行宣传，甚至通过私信、虚假链接等方式诱导用户授权、转账。在此，霸天虎社区郑重声明：
            </p>

            {/* 第1点 */}
            <div className="mb-4">
              <div className="flex items-start">
                <div className="text-lg font-bold text-purple-400 mr-2 mt-1">
                  1️⃣
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">我们只有一个，绝无分盘或新项目</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    霸天虎社区长期建设，从未推出、也不会开盘任何所谓"新项目"。任何以"霸天虎"名义发起的新盘、投资计划、代币销售等均为诈骗行为，请勿轻信。
                  </p>
                </div>
              </div>
            </div>

            {/* 第2点 */}
            <div className="mb-4">
              <div className="flex items-start">
                <div className="text-lg font-bold text-purple-400 mr-2 mt-1">
                  2️⃣
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">谨防私信与链接诈骗</h3>
                  <ul className="text-gray-300 space-y-1 ml-6 list-disc leading-relaxed text-sm">
                    <li>所有通过QQ群私信主动联系您，自称"管理员""客服"并发送链接的，均为骗子。</li>
                    <li>切勿点击不明链接，切勿授权陌生网站，切勿向任何陌生人转账或提供私钥、助记词。</li>
                    <li>社区公告仅通过官方群组发布，不会私信索取个人信息或要求操作资产。</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 第3点 */}
            <div className="mb-4">
              <div className="flex items-start">
                <div className="text-lg font-bold text-purple-400 mr-2 mt-1">
                  3️⃣
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">官方验证渠道</h3>
                  <p className="text-gray-300 mb-1 text-sm">如有任何疑问，欢迎通过以下方式核实：</p>
                  <ul className="text-gray-300 space-y-1 ml-6 list-disc leading-relaxed text-sm">
                    <li>加入唯一官方QQ群；</li>
                    <li>参与定期召开的腾讯会议（会议号以群公告为准）。</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 第4点 */}
            <div className="mb-4">
              <div className="flex items-start">
                <div className="text-lg font-bold text-purple-400 mr-2 mt-1">
                  4️⃣
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">自我保护，共同监督</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    请广大成员提高警惕，互相提醒。如发现可疑行为，请第一时间向群管理举报。
                  </p>
                </div>
              </div>
            </div>

            {/* 结尾 */}
            <div className="text-center mt-6 text-gray-300 italic text-sm">
              <p className="mb-1">霸天虎社区的发展离不开每一位成员的支持与信任。让我们保持清醒，共同维护安全、健康的社区环境！</p>
              <p className="font-bold mt-3">—— 霸天虎社区 官方团队</p>
              <p className="text-xs mt-1 text-gray-400">(本公告长期有效，请随时查阅官网提示)</p>
            </div>
          </div>
         </div>
       </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 代币基本信息 */}
          <div id="tokenInfoSection" className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 shadow-lg">
            <h2 className="text-orange-400 text-2xl font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <i className="fas fa-coins mr-3"></i> 代币基本信息
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">代币符号</div>
                <div className="text-2xl font-bold text-orange-400 mt-1">CONS</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">发行总量</div>
                <div className="text-2xl font-bold text-orange-400 mt-1">100万</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">已销毁</div>
                <div className="text-2xl font-bold text-orange-400 mt-1">47万+</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-400">流通量</div>
                <div className="text-2xl font-bold text-orange-400 mt-1">&lt;53万</div>
              </div>
            </div>
            
            <div className="mt-6 bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="font-bold mb-2">
                <i className="fas fa-exclamation-circle mr-2"></i> 交易税收机制：每笔买卖交易征收1.5%的税
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="text-orange-400 font-bold">1%</span> 永久销毁（自动执行进入黑洞地址）
                </li>
                <li>
                  <span className="text-orange-400 font-bold">0.5%</span> 进入营销钱包（用于基金会成员分红、市值管理及营销代币奖励）
                </li>
              </ul>
            </div>
            
            {/* 安全保障信息 */}
            <div className="mt-6 bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="font-bold mb-2">
                <i className="fas fa-shield-alt mr-2"></i> 安全保障
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  合约已<span className="text-green-400 font-bold">开源</span>，公开透明
                </li><li>
                  LP底池已打入<span className="text-green-400 font-bold">黑洞</span>，安全可靠
                </li>
              </ul>
            </div>
          </div>
          
          {/* 社区与基金会 */}
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 shadow-lg">
            <h2 className="text-orange-400 text-2xl font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <i className="fas fa-users mr-3"></i> 社区自治与基金会
            </h2>
            
            <p className="mb-4">
              霸天虎代币是完全的社区自治项目，无传统意义上的项目方，由社区强共识驱动。
            </p>
            
            <p className="mb-4 break-all">
              代币合约地址：
              <span id="contractAddressDisplay" className="text-orange-400 font-bold underline decoration-dotted inline-block break-all">
                0x5164a7d758a499764219bdf1384e7c2c11545733
              </span>
            </p>
            
            <h3 className="text-xl text-orange-400 font-semibold mt-6 mb-3">
              基金会结构
            </h3>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                基金会成员：<span className="text-orange-400 font-bold">50名</span>
              </li>
            </ul>
            
            <p className="mb-4 mt-4 break-all">
              基金会地址：
              <span id="foundationAddressDisplay" className="text-orange-400 font-bold underline decoration-dotted inline-block break-all">
                0xe554e53017051e88a42bed98b62bf9ffa7c66f82
              </span>
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                基金会负责：营销钱包管理、市值维护、社区发展
              </li>
            </ul>
            <h3 className="text-xl text-orange-400 font-semibold mt-6 mb-3">
              基金会招募团队长
            </h3>
            
            <p>
              我们正在寻找有热情、有能力的社区成员加入基金会，共同推动霸天虎生态发展。
            </p>
          </div>
          
          {/* 如何加入基金会 */}
          <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 shadow-lg">
            <h2 className="text-orange-400 text-2xl font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <i className="fas fa-door-open mr-3"></i> 如何加入基金会
            </h2>
            
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                准备 <span className="text-orange-400 font-bold">1400个</span> 霸天虎代币(CONS)
              </li>
              <li>
                将 <span className="text-orange-400 font-bold">900个</span> CONS转入基金会钱包地址
              </li>
              <li>
                保留 <span className="text-orange-400 font-bold">500个</span> CONS在个人钱包（这500个代币软锁仓）
              </li>
              <li>
                转入的900个CONS将根据市值高度陆续释放
              </li>
            </ol>
            
            <div className="mt-6 bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="font-bold mb-2">成员义务：</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  积极参与社区布道，推广霸天虎代币
                </li>
                <li>
                  准时参加基金会会议
                </li>
                <li>
                  听从基金会统一指挥和安排
                </li>
                <li>
                  为社区发展和代币价值提升贡献力量
                </li>
              </ul>
            </div>
          </div>
          
          {/* 联系方式 */}
          <div id="qqGroupsSection" className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-500 shadow-lg">
            <h2 className="text-orange-400 text-2xl font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <i className="fas fa-comments mr-3"></i> 社区联系方式
            </h2>
            
            <p className="mb-4">
              加入我们的QQ群，参与社区讨论：
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <i className="fab fa-qq text-2xl text-orange-400 mb-2"></i>
                <div className="text-sm text-gray-300">霸天虎官方一群</div>
                <span className="text-xl font-bold text-orange-400 mt-1">
                  693226961
                </span>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <i className="fab fa-qq text-2xl text-orange-400 mb-2"></i>
                <div className="text-sm text-gray-300">霸天虎官方二群</div>
                <span className="text-xl font-bold text-orange-400 mt-1">
                  144494521
                </span>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-gray-400">
              请注意：我们只在QQ群进行官方沟通，谨防其他渠道的诈骗信息。
            </p>
          </div>
        </div>
      </div>
      
      {/* 风险提示 */}
      <div className="container mx-auto px-4 py-6">
        <div id="riskSection" className="bg-red-900/10 border-2 border-red-500 rounded-lg p-6">
          <h2 className="text-red-500 text-2xl font-bold mb-4 flex items-center">
            <i className="fas fa-exclamation-triangle mr-3"></i>
            风险提示
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-red-300">
              加密货币投资具有高风险性，价格波动剧烈，可能造成本金损失
            </li>
            <li className="text-red-300">
              霸天虎代币(CONS)是完全社区自治项目，无中心化项目方控制
            </li>
            <li className="text-red-300">
              加入基金会需要自愿锁仓代币，请谨慎评估个人风险承受能力
            </li>
            <li className="text-red-300">
              代币交易税收机制由智能合约自动执行，不可更改
            </li>
            <li className="text-red-300">
              请勿轻信任何承诺收益的宣传，投资决策需独立判断
            </li>
            <li className="text-red-300">
              请注意网络安全，保管好个人钱包私钥，谨防诈骗
            </li>
            <li className="text-red-300">
              警惕仿盘，谨防诈骗！霸天虎社区无任何新项目，任何"新盘"均为骗局
            </li>
            <li className="text-red-300">
              请勿点击任何私信链接！严防冒充管理员的诈骗，绝不授权、不转账
            </li>
            <li className="text-red-300">
              请勿向合约地址转账，用户转账后，资金将无法退回，转账前请确认接受地址是否正确。
            </li>
            <li className="text-red-300">
              一切疑问请通过官方QQ群或腾讯会议核实，勿信其他渠道。保护好个人资产！
            </li>
          </ul>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="mt-16 py-8 border-t border-gray-800 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="text-lg">
            霸天虎代币(CONS) - 社区自治项目
          </p>
          <p className="mt-2 text-sm">
            本页面仅提供项目信息展示，不构成任何投资建议
          </p>
          
          <p className="mt-8 text-sm">
            © 2025 霸天虎社区. 社区自治驱动.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;