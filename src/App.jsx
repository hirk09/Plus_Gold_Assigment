import './App.css';
import AppDownloadComponent from './components/app-download-component';
import BenefitsComponent from './components/benefits-component';
import FooterContent from './components/footer-content';
import FooterTag from './components/footer-tag';
import Header from './components/header';
import HowItsWorkComponent from './components/how-its-work-component';
import IntroGoldGiftComponent from './components/intro-gold-gift-component';
import MoneySecureComponent from './components/money-secure-component';
import PictureGold from './components/picture-gold';
import SavingPlusGoldComponent from './components/saving-plus-gold-component';
import WhyGoldSafeComponent from './components/why-gold-safe-component';

function App() {
  return (
    <div className="app">
     <Header />
     <PictureGold />
     <BenefitsComponent />
     <HowItsWorkComponent />
     <WhyGoldSafeComponent />
     <SavingPlusGoldComponent />
     <IntroGoldGiftComponent />
     <AppDownloadComponent />
     <MoneySecureComponent />
     <FooterContent />
     <FooterTag />
    </div>
  );
}

export default App;
