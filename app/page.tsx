import { Button } from "components/Button/Button";
import Logotype from "components/Logotype";
import FooterLogo  from "components/FooterLogo";
import { FileDown } from "lucide-react";
import dataSlider from "app/data/slider-data.json";
import FeaturesView from "./FeaturesView";




export default function MainPage() {
  return (
    <main className="main-page">
      <div className="container mx-auto h-svh lg:h-96 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center ">
          <Logotype className="w-72 h-30  md:w-56 mx-auto" />

          <div className="relative z-20 mt-8">

            <div className="shiny-bg absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
            <Button as={'button'}>
              <FileDown className="w-5 h-5 mr-2" />
              Установить приложение
            </Button>
          </div>

          <p className="description w-80">
            Только Android. После скачивания необходимо разрешить установку из непроверенных источников.
          </p>
        </div>
      </div>
      <div className="info-card__title px-2 text-balance lg:pl-80">Легкий способ  наблюдать за главным</div>
      <div className="info-card__content px-2 py-3 lg:pl-80">Откройте для себя систему мониторинга вашего флота </div>
      <div className="relative px-2 pb-2 py-2 lg:pl-80">
        <FeaturesView data={dataSlider} />
      </div>
      <footer className="text-primary-textColor px-2 pt-8 pb-2 lg:pl-80 flex items-center space-x-2">
  <FooterLogo className="mx-auto"/>
  <span>СИР Технологии 2024</span>
</footer>
    </main>
  );
}
