import HistorySection from '../../components/history-section/history-section.tsx'
import TextSection from '../../components/text-section/text-section.tsx'

function App() {
  return (
    <main className="min-h-screen relative px-6 flex flex-col items-center justify-center w-full grid-cols-1 md:grid-cols-2 gap-10">
      
      <div className="flex justify-between space-x-50">
        <div className="space-y-6 w-2/3 p-4 motion-preset-slide-right motion-duration-1000">
          <TextSection commonText={'Salut! Je suis'} gradientText={'web-développeur'}/>
        </div>

        {/* Image Section */}
        <div className="w-auto p-4 motion-preset-slide-left motion-duration-1000">
          <div className="m-auto motion-preset-slide-left w-96 h-96 rounded-full bg-[url('./../img/personal_photo.webp')] bg-cover bg-center bg-no-repeat shadow-inner border-2 border-gray-300 hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 motion-preset-expand  motion-duration-1000">
        <HistorySection/>
      </div>

    </main>
  );
}

export default App;