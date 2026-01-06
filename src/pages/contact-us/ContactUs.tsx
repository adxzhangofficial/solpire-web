import { useEffect } from "react"


export function ContactUs() {
  useEffect(() => {
    document.body.classList.add("contactus-body")
    return () => document.body.classList.remove("contactus-body")
  }, [])

    useEffect(() => {
    document.title = "Solpire - 联系我们";
  }, []);
  return (
<>
  {/* Main Contact Us Content */}
  <div className="contact-us-container">
    {/* Contact Us Image */}
    <div className="contact-image-box">
      <img src="src/assets/images/contact_us.png" alt="Contact Us" />
    </div>
    {/* Get in Touch Title */}
    <h1 className="get-in-touch-title">
      Get in Touch
      <br />
      联系我们
    </h1>
    {/* Form Container */}
    <div className="contact-form-container">
      <form>
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label htmlFor="subject">主题</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="请输入主题"
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="type">类型</label>
            <select id="type" name="type">
              <option value="">请选择类型</option>
              <option value="consultation">咨询</option>
              <option value="cooperation">合作</option>
              <option value="support">技术支持</option>
              <option value="other">其他</option>
            </select>
          </div>
        </div>
        <div className="contact-form-group">
          <label htmlFor="message">详细信息</label>
          <textarea
            id="message"
            name="message"
            placeholder="请输入详细信息..."
            defaultValue={""}
          />
        </div>
      </form>
    </div>

  </div>
</>

  )
}
