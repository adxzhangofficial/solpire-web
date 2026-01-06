import { useEffect } from "react"


export function LearnMore() {


        useEffect(() => {
        document.title = "了解更多";
      }, []);

  return (
<>
  {/* Hero Section */}
  <section className="learn-hero">
    <div className="learn-hero-content">
      <h1>GeoOptix AI零件智研软件 - 深入了解</h1>
      <p>
        基于人工智能的三维数字化资产管理平台，革新制造业的设计、分析与生产流程
      </p>
    </div>
  </section>
  {/* Section Divider */}
  <div className="section-divider" />
  {/* Product Features Section */}
  <section className="feature-section">
    <div className="container">
      <h2>核心功能特性</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI智能识别</h3>
          <p>
            基于深度学习的3D零件自动识别与分类系统，支持多种CAD格式，识别准确率高达98%以上
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>智能数据分析</h3>
          <p>
            实时分析零件几何特征、材料属性、加工工艺参数，提供优化建议和预测性维护方案
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>高精度3D建模</h3>
          <p>
            毫米级精度的三维空间建模技术，完美还原实物细节，支持多角度查看和尺寸测量
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>实时协作</h3>
          <p>
            云端协同工作平台，支持多人同时在线编辑、批注和审核，提升团队协作效率
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>质量管控</h3>
          <p>AI驱动的质量检测系统，自动识别缺陷和误差，实现"零缺陷"生产目标</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>版本管理</h3>
          <p>
            完整的版本控制和历史记录追踪，随时回溯设计变更，确保数据安全可靠
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Section Divider */}
  <div className="section-divider" />
  {/* Technical Specifications Section */}
  <section className="specs-section">
    <div className="container">
      <h2>技术规格参数</h2>
      <div className="specs-grid">
        <div className="spec-card">
          <h4>支持格式</h4>
          <p>
            STEP, IGES, STL, OBJ, FBX, CATIA, SolidWorks,
            AutoCAD等30+种主流3D格式
          </p>
        </div>
        <div className="spec-card">
          <h4>识别精度</h4>
          <p>
            几何特征识别准确率 ≥ 98%
            <br />
            尺寸测量误差 ≤ ±0.01mm
            <br />
            表面质量检测精度 ≤ 0.05mm
          </p>
        </div>
        <div className="spec-card">
          <h4>处理能力</h4>
          <p>
            单个文件大小：最大5GB
            <br />
            并发用户数：10,000+
            <br />
            模型复杂度：百万级三角面片
          </p>
        </div>
        <div className="spec-card">
          <h4>AI模型</h4>
          <p>
            视觉识别模型：ResNet-152 + Transformer
            <br />
            语言理解：GPT架构多模态大模型
            <br />
            预测分析：XGBoost + LSTM
          </p>
        </div>
        <div className="spec-card">
          <h4>部署方式</h4>
          <p>
            云端SaaS服务
            <br />
            私有化本地部署
            <br />
            混合云架构
            <br />
            API接口集成
          </p>
        </div>
        <div className="spec-card">
          <h4>安全认证</h4>
          <p>
            ISO 27001 信息安全认证
            <br />
            SOC 2 Type II 合规
            <br />
            数据加密：AES-256
            <br />
            支持SSO单点登录
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Section Divider */}
  <div className="section-divider" />
  {/* Benefits Section */}
  <section className="benefits-section">
    <div className="container">
      <h2>核心优势与价值</h2>
      <div className="benefits-grid">
        <div className="benefit-item">
          <div className="benefit-number">60%</div>
          <h4>提升设计效率</h4>
          <p>AI辅助设计，自动化重复性工作，显著缩短产品开发周期</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-number">85%</div>
          <h4>降低生产成本</h4>
          <p>优化工艺流程，减少材料浪费，精准控制生产质量</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-number">99%</div>
          <h4>质量合格率</h4>
          <p>AI驱动的质量检测，实时监控生产过程，确保产品品质</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-number">50%</div>
          <h4>缩短交付时间</h4>
          <p>智能协作平台，打通设计-生产-交付全流程，加速项目落地</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-number">50%</div>
          <h4>缩短交付时间</h4>
          <p>智能协作平台，打通设计-生产-交付全流程，加速项目落地</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-number">50%</div>
          <h4>缩短交付时间</h4>
          <p>智能协作平台，打通设计-生产-交付全流程，加速项目落地</p>
        </div>
      </div>
    </div>
  </section>
  {/* Section Divider */}
  <div className="section-divider" />
  {/* Use Cases Section */}
  <section className="use-cases-section">
    <div className="container">
      <h2>应用场景</h2>
      <div className="use-case-grid">
        <div className="use-case-card">
          <div className="use-case-image">✈️</div>
          <div className="use-case-content">
            <h4>航空航天</h4>
            <p>
              复杂零部件的精密建模与分析，满足航空级质量标准，支持轻量化设计优化，提升飞行器性能与安全性
            </p>
          </div>
        </div>
        <div className="use-case-card">
          <div className="use-case-image">🚗</div>
          <div className="use-case-content">
            <h4>汽车制造</h4>
            <p>
              车身零件智能管理，工艺流程优化，质量追溯系统，助力新能源汽车快速迭代与批量生产
            </p>
          </div>
        </div>
        <div className="use-case-card">
          <div className="use-case-image">⚙️</div>
          <div className="use-case-content">
            <h4>机械设备</h4>
            <p>
              工业设备零部件数字化管理，预测性维护方案，延长设备寿命，降低运维成本
            </p>
          </div>
        </div>
        <div className="use-case-card">
          <div className="use-case-image">🏭</div>
          <div className="use-case-content">
            <h4>智能制造</h4>
            <p>
              数字孪生工厂建设，生产过程可视化监控，实现工业4.0智能制造转型升级
            </p>
          </div>
        </div>
        <div className="use-case-card">
          <div className="use-case-image">🔬</div>
          <div className="use-case-content">
            <h4>科研教育</h4>
            <p>
              3D模型库建设，教学演示与仿真实验，为高校和研究机构提供先进的数字化工具
            </p>
          </div>
        </div>
        <div className="use-case-card">
          <div className="use-case-image">🏥</div>
          <div className="use-case-content">
            <h4>医疗器械</h4>
            <p>精密医疗器械建模与质检，符合医疗行业严格标准，保障患者安全</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section Divider */}
  <div className="section-divider" />
  {/* Demo Section */}
  <section className="demo-section">
    <div className="container">
      <div className="demo-container">
        <h2 style={{ textAlign: "center", marginBottom: 50 }}>
          产品演示与截图
        </h2>
        <div className="demo-showcase">
          <div className="demo-image-placeholder">
            <p>
              📸 产品界面演示
              <br />
              实时3D建模 | AI智能分析 | 协作工作台
            </p>
          </div>
          <h3 style={{ fontSize: 24, marginBottom: 20, color: "#000" }}>
            立即体验 GeoOptix AI零件智研软件
          </h3>
          <p
            style={{
              fontSize: 16,
              color: "rgba(0, 0, 0, 0.7)",
              marginBottom: 30,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            预约免费试用，专业团队将为您提供一对一演示服务，深度体验AI智能制造解决方案
          </p>
          <button className="demo-cta">预约演示</button>
        </div>
      </div>
    </div>
  </section>
  {/* Section Divider */}
  <div className="section-divider" />
</>

  )
}
