import { Settings, Cable, MessageCirclePlus, ClipboardPlus, ChartCandlestick, Bell, ListOrdered , User, CalendarHeart, Stethoscope   } from 'lucide-react';
import healthData from '../data/healthData.js';
import upcomingAppointments from '../data/appointments.js';
import calendarData from '../data/calenderData.js';

const navLinks = [
  { id: 1, name: 'Dashboard', icon: <User className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 2, name: 'History', icon: <ListOrdered className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 3, name: 'Calendar', icon: <CalendarHeart className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 4, name: 'Appointments', icon: <Stethoscope className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 5, name: 'Statistics', icon: <ChartCandlestick className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 6, name: 'Tests', icon: <ClipboardPlus className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 7, name: 'Chat', icon: <MessageCirclePlus className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 8, name: 'Support', icon: <Cable className="h-5 sm:h-5 w-5 sm:w-5" /> },
  { id: 9, name: 'Setting', icon: <Settings className="h-5 sm:h-5 w-5 sm:w-5" /> },
];

function Sidebar({ links }) {
  return (
    <aside className="fixed top-18 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-100 p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">General :</h2>
      <nav>
        {links.map((link) => (
          <div key={link.id} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

function AnatomySection({ healthData }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Health Overview</h3>
      <img
        src="https://thumbs.dreamstime.com/z/hologram-human-body-health-care-future-high-tech-diagnostic-panel-modern-medical-science-future-d-illustration-d-181469135.jpg"
        alt="Anatomical illustration"
        className="w-full h-64 object-contain mb-4"
      />
      <div className="grid grid-cols-2 gap-4">
        {healthData.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <span className={`h-3 w-3 rounded-full bg-${item.color.split('-')[1]}-500`}></span>
            <span className={item.color}>{item.name}: {item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthStatusCards({ healthData }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {healthData.slice(1).map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-500">Last checked: 10/01/2021</p>
          <p className={item.color}>{item.status}</p>
        </div>
      ))}
    </div>
  );
}

function CalendarView({ calendar }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{calendar.month}</h3>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-semibold text-gray-700">{day}</div>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
          const appointment = calendar.appointments.find((appt) => appt.day === day);
          return (
            <div key={day} className="p-2 bg-gray-50 rounded">
              {day}
              {appointment && (
                <div className="text-xs text-blue-500">
                  {appointment.times.map((time) => (
                    <div key={time}>{time}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        {calendar.details.map((detail) => (
          <div key={detail.id} className="bg-gray-50 p-3 rounded mb-2">
            <p className="font-semibold">{detail.type}</p>
            <p className="text-sm text-gray-500">{detail.time} with {detail.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-2">
      <span>{appointment.icon}</span>
      <div>
        <p className="font-semibold">{appointment.title}</p>
        <p className="text-sm text-gray-500">{appointment.time}</p>
      </div>
    </div>
  );
}

function UpcomingSchedule({ appointments }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
      {appointments.map((day) => (
        <div key={day.day} className="mb-4">
          <h4 className="font-semibold text-gray-700">{day.day}</h4>
          {day.appointments.map((appt) => (
            <SimpleAppointmentCard key={appt.id} appointment={appt} />
          ))}
        </div>
      ))}
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Activity</h3>
      <p className="text-sm text-gray-500 mb-4">3 appointments on this week</p>
      <div className="flex space-x-2">
        {[40, 60, 20, 80, 50, 30, 70].map((height, index) => (
          <div
            key={index}
            className="bg-blue-500 w-8 rounded"
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function DashboardMainContent({ healthData, calendar, appointments }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <AnatomySection healthData={healthData} />
      </div>
      <HealthStatusCards healthData={healthData} />
      <CalendarView calendar={calendar} />
      <UpcomingSchedule appointments={appointments} />
      <ActivityFeed />
    </div>
  );
}

function HealthcareDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar links={navLinks} />
        <main className="ml-64 flex-1">
          <DashboardMainContent
            healthData={healthData}
            calendar={calendarData}
            appointments={upcomingAppointments}
          />
        </main>
      </div>
    </div>
  );
}

export default HealthcareDashboard;