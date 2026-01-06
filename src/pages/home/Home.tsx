import { useState, useEffect } from "react"
import "./Home.css"
import { Calendar } from "../../components/calendar/Calendar"
import MeetingModal from "../../components/meeting-modal/MeetingModal"
import {
  CompanyIntro,
  PainPoints,
  Solutions,
  SectionDivider,
  SectionTitle,
  ServicesSection,
  PortfolioCarousel,
  TeamSection
} from "../../components/home"

export const Home = () => {
  const [selectedMeetingDate, setSelectedMeetingDate] = useState("")
  const [isMeetingModalOpen, setMeetingModalOpen] = useState(false)

  const handleDaySelect = (day: { date: string; label: string; description: string }) => {
    const formattedDate = `${day.date} (November ${day.label}, 2025)`
    setSelectedMeetingDate(formattedDate)
    setMeetingModalOpen(true)
  }

  const closeMeetingModal = () => {
    setMeetingModalOpen(false)
  }

  useEffect(() => {
    document.title = "Solpire - 首页";
  }, []);
     useEffect(() => {
    document.body.classList.add("home-body")
    return () => document.body.classList.remove("home-body")
  }, [])
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/src/assets/images/-------1.png"
            alt="Background"
            className="hero-bg-image"
          />
        </div>
        <div className="container mt-lg-30">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="hero-content text-center">
                <div className="hero-title-wrap">
                  <h1 className="hero-title">GeoOptix</h1>
                  <img
                    src="/src/assets/images/logo--1--1.png"
                    alt="GeoOptix Logo"
                    className="hero-logo"
                  />
                </div>
                <h2 className="hero-subtitle">
                  AI零件智研软件
                </h2>
                <p className="hero-tagline">
                  加速推动三维数字化资产管理与智能制造转型
                </p>
                <div className="hero-divider" />
                <span className="hero-version">
                  2.3.6a 版本开发进行中
                </span>
                <a
                  href="/"
                  className="cta-button"
                  style={{ textDecoration: "none", display: "inline-block" }}
                  data-testid="link-learn-more"
                >
                  <span>进一步了解</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Button */}
      <div className="container mt-8">
        <div className="row">
          <div className="col-12">
            <div className="chat-btn">
              <button className="chat-button" data-testid="button-chat-agent">
                <div className="chat-button-inner">
                  <span className="chat-text">和我们Agent聊聊</span>
                </div>
              </button>
              <img
                src="/src/assets/images/line-7.svg"
                alt="Line"
                className="chat-line"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container-fluid mt-7">
        <div className="row">
          <div className="col-12">
            <div className="line-flex">
              <div className="geooptix-line1" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Pain Points Section */}
      <PainPoints />

      {/* Solutions Section */}
      <Solutions />

      {/* Divider */}
      <SectionDivider />
      <SectionTitle title="将AI算法研发交给我们" variant="outsource" />

      {/* Services Section */}
      <SectionTitle title="解决方案介绍" variant="solutions" />
      <ServicesSection />

      {/* Portfolio Cards */}
      <PortfolioCarousel />

      {/* Team Section */}
      <SectionTitle title="关于我们" variant="about" />
      <SectionDivider variant="image" imageSrc="src/assets/images/line-2.svg" imageClassName="divider divider-6" />
      <TeamSection />

      {/* Contact Section */}
      <section id="support">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-8">
              <img
                src="/src/assets/images/-----1.png"
                alt="Decorative"
                className="decoration-graph"
                style={{ display: "inline" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Component Here */}
      <Calendar onDaySelect={handleDaySelect} />

      <MeetingModal
        isOpen={isMeetingModalOpen}
        selectedDate={selectedMeetingDate}
        onClose={closeMeetingModal}
      />
    </>
  )
}
