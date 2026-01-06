type CalendarDay = {
  date: string
  label: string
  description: string
  status?: "available" | "occupied" | "na"
}

type CalendarProps = {
  onDaySelect?: (day: CalendarDay) => void
}

const calendarDays: CalendarDay[] = [
  { date: "2025-11-01", label: "1", description: "可以安排会议" },
  { date: "2025-11-02", label: "2", description: "可以安排会议" },
  { date: "2025-11-03", label: "3", description: "可以安排会议" },
  { date: "2025-11-04", label: "4", description: "可以安排会议" },
  { date: "2025-11-05", label: "5", description: "可以安排会议" },
  { date: "2025-11-06", label: "6", description: "可以安排会议" },
  { date: "2025-11-07", label: "7", description: "可以安排会议" },
  { date: "2025-11-08", label: "8", description: "可以安排会议" },
  { date: "2025-11-09", label: "9", description: "可以安排会议" },
  { date: "2025-11-10", label: "10", description: "可以安排会议" },
  { date: "2025-11-11", label: "11", description: "可以安排会议" },
  { date: "2025-11-12", label: "12", description: "已占用", status: "occupied" },
  { date: "2025-11-13", label: "13", description: "可以安排会议" },
  { date: "2025-11-14", label: "14", description: "已占用", status: "occupied" },
  { date: "2025-11-15", label: "15", description: "可以安排会议" },
  { date: "2025-11-16", label: "16", description: "不可用", status: "na" },
  { date: "2025-11-17", label: "17", description: "可以安排会议" },
  { date: "2025-11-18", label: "18", description: "可以安排会议" },
  { date: "2025-11-19", label: "19", description: "已占用", status: "occupied" },
  { date: "2025-11-20", label: "20", description: "可以安排会议" },
  { date: "2025-11-21", label: "21", description: "可以安排会议" },
  { date: "2025-11-22", label: "22", description: "已占用", status: "occupied" },
  { date: "2025-11-23", label: "23", description: "可以安排会议" },
  { date: "2025-11-24", label: "24", description: "可以安排会议" },
  { date: "2025-11-25", label: "25", description: "可以安排会议" },
  { date: "2025-11-26", label: "26", description: "已占用", status: "occupied" },
  { date: "2025-11-27", label: "27", description: "可以安排会议" },
  { date: "2025-11-28", label: "28", description: "可以安排会议" },
  { date: "2025-11-29", label: "29", description: "可以安排会议" },
  { date: "2025-11-30", label: "30", description: "可以安排会议" },
]

export const Calendar: React.FC<CalendarProps> = ({ onDaySelect }) => {
  const handleDayClick = (day: CalendarDay) => {
    if (day.status === "occupied" || day.status === "na") {
      return
    }

    onDaySelect?.(day)
  }

  return (
    <section className="calendar mb-15">
      <div className="calendar-header">
        <h2 className="month-title">有项目想法吗？让我们开个会</h2>
        <p className="month-description">可以安排会议</p>
      </div>
      <ul className="calendar-days">
        {calendarDays.map((day) => {
          const dayClass = [
            "day",
            day.status === "occupied" ? "already-occupied" : "",
            day.status === "na" ? "na" : "",
          ]
            .filter(Boolean)
            .join(" ")

          return (
            <li key={day.date} className={dayClass} onClick={() => handleDayClick(day)}>
              <time dateTime={day.date}>{day.label}</time>
              {day.description}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
