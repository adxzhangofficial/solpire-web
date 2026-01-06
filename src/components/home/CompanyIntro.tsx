interface CompanyIntroProps {
  decorImage?: string
  companyImage?: string
  description?: string
  id?: string
}

const defaultDescription = `深圳溯湃科技是以⼈⼯智能⾰新为核⼼的初创科技企业，位于深圳南山科技园中心，由5位AI领域资深研究者联合创⽴。我们专注于开发⾼价值、可落地的企业级AI解决⽅案，以多模态⼤模型、机器学习数据预测分析、机器视觉、机器人毫⽶级空间建模、⾼精度3D感知及数据预测分析等AI核心技术为根基，致⼒于打造赋能千⾏百业的智能化⽣产与管理引擎——助⼒企业实现产品管理"零缺陷"管控、优化生产开发流程、压缩成本，驱动全⾯数智化升级。`

export function CompanyIntro({
  decorImage = "/src/assets/images/-----20250704155956-40-1.png",
  companyImage = "/src/assets/images/----.png",
  description = defaultDescription,
  id = "about"
}: CompanyIntroProps) {
  return (
    <section id={id} className="company-intro" data-testid="section-company-intro">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="company-top">
              <img
                src={decorImage}
                alt="Decorative"
                className="decoration-image"
              />
              <img
                src={companyImage}
                alt="Company Image"
                className="company-image"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <p className="company-text" data-testid="text-company-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
