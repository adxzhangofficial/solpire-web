import { useEffect, useState } from "react"

export const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hideSpinner = () => {
      setTimeout(() => {
        setIsVisible(false)
      }, 500)
    }

    if (document.readyState === "complete") {
      hideSpinner()
    } else {
      window.addEventListener("load", hideSpinner)
    }

    return () => {
      window.removeEventListener("load", hideSpinner)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* LoadingSpinner */}
      <div id="loadingSpinner" className="loading-spinner">
        <div className="loading-spinner-backdrop" />
        <div className="loading-spinner-container">
          <div className="spinner-circle" />
        </div>
      </div>
    </>
  )
}
