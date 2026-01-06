
export const Navbar = () => (
  <>
    {/* Navigation Bar */}
    <nav className="navbar">
      <div className="navbar-container">
        <a
          href="/"
          className="navbar-logo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src="/src/assets/images/---2.png"
            alt="Logo Icon"
            className="logo-icon"
          />
          <p className="nav-company-title">S O L P I R E</p>
        </a>
        <ul className="nav-menu d-none d-lg-flex">
          <li className="nav-item has-dropdown" id="productsNavItem">
            <div className="nav-link">
              产品
            </div>
            <div className="products-dropdown" id="productsDropdown">
              <div className="products-dropdown-content">
                <div className="products-menu">
                  <div className="products-category">
                    <a href="#geooptix" className="products-category-title">
                      GEOoptix数字资产管理
                    </a>
                  </div>
                  <div className="products-category">
                    <a href="#horizon" className="products-category-title">
                      Horizon 未来计划
                    </a>
                    <div className="products-subitems">
                      <a href="#autovad" className="products-subitem">
                        AutoVAD 智能工厂AI视觉异常监控
                      </a>
                      <a href="#aiminspector" className="products-subitem">
                        AIMInspector 大模型视觉AOI
                      </a>
                      <a href="#corpnexus" className="products-subitem">
                        CorpNexus 企业大模型应用
                      </a>
                    </div>
                  </div>
                  <div className="products-category">
                    <a
                      href="#innovation-lab"
                      className="products-category-title"
                    >
                      创新实验室
                    </a>
                    <div className="products-subitems">
                      <a href="#exactroute" className="products-subitem">
                        ExactRoute 精确导航算法开发
                      </a>
                      <a href="#gameforge" className="products-subitem">
                        GameForge AI生成游戏&amp;交互式小说平台
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown" id="aboutNavItem">
            <div className="nav-link">
              关于我们
            </div>
            <div className="about-dropdown" id="aboutDropdown">
              <div className="about-dropdown-content">
                <div className="about-menu">
                  <div className="about-category">
                    <a href="/about-us" className="about-category-title">
                      公司介绍
                    </a>
                  </div>
                  <div className="about-category">
                    <a href="/" className="about-category-title">
                      团队成员
                    </a>
                  </div>
                  <div className="about-category">
                    <a href="/" className="about-category-title">
                      企业文化
                    </a>
                  </div>
                  <div className="about-category">
                    <a href="/contact-us" className="about-category-title">
                      联系方式
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown" id="cooperationNavItem">
            <div className="nav-link">
              技术合作
            </div>
            <div className="cooperation-dropdown" id="cooperationDropdown">
              <div className="cooperation-dropdown-content">
                <div className="cooperation-menu">
                  <div className="cooperation-category">
                    <a href="#ai-ml" className="cooperation-category-title">
                      AI与机器学习
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#large-model" className="cooperation-subitem">
                        大模型宇宙
                      </a>
                      <a
                        href="#computer-vision"
                        className="cooperation-subitem"
                      >
                        计算机视觉
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#engineering-simulation"
                      className="cooperation-category-title"
                    >
                      工程与仿真
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#3d-structure" className="cooperation-subitem">
                        3D结构编码解析
                      </a>
                      <a href="#cfd-fem" className="cooperation-subitem">
                        CFD/有限元仿真
                      </a>
                      <a
                        href="#structure-optimization"
                        className="cooperation-subitem"
                      >
                        结构优化
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#robotics-positioning"
                      className="cooperation-category-title"
                    >
                      机器人与定位
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#slam" className="cooperation-subitem">
                        SLAM导航定位系统
                      </a>
                      <a href="#sensor-fusion" className="cooperation-subitem">
                        传感器融合
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#edge-tools"
                      className="cooperation-category-title"
                    >
                      边缘计算与工具
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#edge-computing" className="cooperation-subitem">
                        边缘计算架构
                      </a>
                      <a href="#industry-tools" className="cooperation-subitem">
                        行业赋能工具
                      </a>
                      <a
                        href="#automation-test"
                        className="cooperation-subitem"
                      >
                        自动化测试平台
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#solution-cases"
                      className="cooperation-category-title"
                    >
                      解决方案实例
                    </a>
                    <div className="cooperation-subitems">
                      <a
                        href="#structure-management"
                        className="cooperation-subitem"
                      >
                        结构件管理软件
                      </a>
                      <a href="#ai-monitoring" className="cooperation-subitem">
                        AI设备监控预研
                      </a>
                      <a href="#industry-llm" className="cooperation-subitem">
                        行业大模型应用
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#cooperation-process"
                      className="cooperation-category-title"
                    >
                      合作流程
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#requirement" className="cooperation-subitem">
                        需求对齐
                      </a>
                      <a
                        href="#solution-design"
                        className="cooperation-subitem"
                      >
                        方案设计
                      </a>
                      <a href="#implementation" className="cooperation-subitem">
                        实施交付
                      </a>
                      <a href="#operation" className="cooperation-subitem">
                        运维服务
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#data-security"
                      className="cooperation-category-title"
                    >
                      数据安全承诺
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#infrastructure" className="cooperation-subitem">
                        基础设施安全
                      </a>
                      <a
                        href="#data-governance"
                        className="cooperation-subitem"
                      >
                        数据治理
                      </a>
                      <a href="#audit" className="cooperation-subitem">
                        透明审计
                      </a>
                    </div>
                  </div>
                  <div className="cooperation-category">
                    <a
                      href="#contact-cooperation"
                      className="cooperation-category-title"
                    >
                      联系技术合作
                    </a>
                    <div className="cooperation-subitems">
                      <a href="#registration" className="cooperation-subitem">
                        需求登记
                      </a>
                      <a href="#meeting" className="cooperation-subitem">
                        会议预定
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown" id="supportNavItem">
            <div className="nav-link">
              技术支持
            </div>
            <div className="support-dropdown" id="supportDropdown">
              <div className="support-dropdown-content">
                <div className="support-menu">
                  <div className="support-category">
                    <a href="/support-community" className="support-category-title">
                      社区
                    </a>
                  </div>
                  <div className="support-category">
                    <a href="/" className="support-category-title">
                      激活状况
                    </a>
                  </div>
                  <div className="support-category">
                    <a href="/technical-support" className="support-category-title">
                      Q&amp;A 问答
                    </a>
                  </div>
                  <div className="support-category">
                    <a
                      href="/"
                      className="support-category-title"
                    >
                      Troubleshooting 问题自查
                    </a>
                  </div>
                  <div className="support-category">
                    <a href="/" className="support-category-title">
                      技术资源文档
                    </a>
                  </div>
                  <div className="support-category">
                    <a
                      href="/"
                      className="support-category-title"
                    >
                      联系技术支持
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="nav-icons d-flex align-items-center">
          <button className="icon-btn" id="searchBtn" aria-label="Search">
            <svg
              width={29}
              height={29}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="icon-btn" id="languageBtn" aria-label="Language">
            <svg
              width={25}
              height={25}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={2} y1={12} x2={22} y2={12} />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          <button className="icon-btn" id="userBtn" aria-label="Users">
            <svg
              width={23}
              height={23}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </button>
          <div className="user-dropdown" id="userDropdown">
            <div className="user-dropdown-content">
              <div className="user-menu">
                <div className="user-category">
                  <a href="/registration" className="user-category-title">
                    注册
                  </a>
                </div>
                <div className="user-category">
                  <a href="/signin" className="user-category-title">
                    登录
                  </a>
                </div>
                <div className="user-category">
                  <a
                    href="/"
                    className="user-category-title"
                  >
                    账号信息
                  </a>
                </div>
                <div className="user-category">
                  <a
                    href="/"
                    className="user-category-title"
                  >
                    激活状况
                  </a>
                </div>
                <div className="user-category">
                  <a href="#logout" className="user-category-title">
                    登出
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="mobile-menu-toggle d-lg-none"
            id="mobileMenuToggle"
            aria-label="Menu"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    {/* Mobile Navigation Menu */}
    <div className="mobile-nav-panel" id="mobileNavPanel">
      <div className="mobile-nav-header">
        <span className="mobile-nav-title">菜单</span>
        <button className="mobile-nav-close" id="mobileNavClose">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </button>
      </div>
      <div className="mobile-nav-content">
        {/* Products Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="products">
            <span>产品</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-products">
            <a href="#geooptix" className="mobile-nav-link">
              GEOoptix数字资产管理
            </a>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">Horizon 未来计划</span>
              <a href="#autovad" className="mobile-nav-sublink">
                AutoVAD 智能工厂AI视觉异常监控
              </a>
              <a href="#aiminspector" className="mobile-nav-sublink">
                AIMInspector 大模型视觉AOI
              </a>
              <a href="#corpnexus" className="mobile-nav-sublink">
                CorpNexus 企业大模型应用
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">创新实验室</span>
              <a href="#exactroute" className="mobile-nav-sublink">
                ExactRoute 精确导航算法开发
              </a>
              <a href="#gameforge" className="mobile-nav-sublink">
                GameForge AI生成游戏&amp;交互式小说平台
              </a>
            </div>
          </div>
        </div>
        {/* About Us Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="about">
            <span>关于我们</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-about">
            <a href="/about-us" className="mobile-nav-link">
              公司介绍
            </a>
            <a href="/" className="mobile-nav-link">
              团队成员
            </a>
            <a href="/" className="mobile-nav-link">
              企业文化
            </a>
            <a href="/contact-us" className="mobile-nav-link">
              联系方式
            </a>
          </div>
        </div>
        {/* Cooperation Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="cooperation">
            <span>技术合作</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-cooperation">
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">人工智能集群技术栈</span>
              <a href="#large-model" className="mobile-nav-sublink">
                大模型宇宙
              </a>
              <a href="#computer-vision" className="mobile-nav-sublink">
                计算机视觉
              </a>
              <a href="#3d-structure" className="mobile-nav-sublink">
                3D结构编码解析
              </a>
              <a href="#cfd-fem" className="mobile-nav-sublink">
                CFD/有限元仿真
              </a>
              <a href="#structure-optimization" className="mobile-nav-sublink">
                结构优化
              </a>
              <a href="#slam" className="mobile-nav-sublink">
                SLAM导航定位系统
              </a>
              <a href="#sensor-fusion" className="mobile-nav-sublink">
                传感器融合
              </a>
              <a href="#edge-computing" className="mobile-nav-sublink">
                边缘计算架构
              </a>
              <a href="#industry-tools" className="mobile-nav-sublink">
                行业赋能工具
              </a>
              <a href="#automation-test" className="mobile-nav-sublink">
                自动化测试平台
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">解决方案实例</span>
              <a href="#structure-management" className="mobile-nav-sublink">
                结构件管理软件
              </a>
              <a href="#ai-monitoring" className="mobile-nav-sublink">
                AI设备监控预研
              </a>
              <a href="#industry-llm" className="mobile-nav-sublink">
                行业大模型应用
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">合作流程</span>
              <a href="#requirement" className="mobile-nav-sublink">
                需求对齐
              </a>
              <a href="#solution-design" className="mobile-nav-sublink">
                方案设计
              </a>
              <a href="#implementation" className="mobile-nav-sublink">
                实施交付
              </a>
              <a href="#operation" className="mobile-nav-sublink">
                运维服务
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">数据安全承诺</span>
              <a href="#infrastructure" className="mobile-nav-sublink">
                基础设施安全
              </a>
              <a href="#data-governance" className="mobile-nav-sublink">
                数据治理
              </a>
              <a href="#audit" className="mobile-nav-sublink">
                透明审计
              </a>
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-group-title">联系技术合作</span>
              <a href="#registration" className="mobile-nav-sublink">
                需求登记
              </a>
              <a href="#meeting" className="mobile-nav-sublink">
                会议预定
              </a>
            </div>
          </div>
        </div>
        {/* Support Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="support">
            <span>技术支持</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-support">
            <a href="/support-community" className="mobile-nav-link">
              社区
            </a>
            <a href="/" className="mobile-nav-link">
              激活状况
            </a>
            <a href="/technical-support" className="mobile-nav-link">
              Q&amp;A 问答
            </a>
            <a href="/" className="mobile-nav-link">
              Troubleshooting 问题自查
            </a>
            <a href="/" className="mobile-nav-link">
              技术资源文档
            </a>
            <a href="/" className="mobile-nav-link">
              联系技术支持
            </a>
          </div>
        </div>
        {/* User Section */}
        <div className="mobile-nav-section">
          <button className="mobile-nav-item" data-toggle="user">
            <span>用户</span>
            <svg
              className="mobile-nav-arrow"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="mobile-nav-dropdown" id="mobile-user">
            <a href="/registration" className="mobile-nav-link">
              注册
            </a>
            <a href="/signin" className="mobile-nav-link">
              登录
            </a>
            <a href="/" className="mobile-nav-link">
              账号信息
            </a>
            <a
              href="/"
              className="mobile-nav-link"
            >
              激活状况
            </a>
            <a href="#logout" className="mobile-nav-link">
              登出
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Nav Backdrop */}
    <div className="mobile-nav-backdrop" id="mobileNavBackdrop" />
  </>
)
