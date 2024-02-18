import { LiFiWidget, WidgetConfig  } from '@lifi/widget';
import './App.css';

const widgetConfig: WidgetConfig = {
  containerStyle: {
    border: `1px solid rgb(234, 234, 234)`,
    borderRadius: '16px',
  },
  // It can be either default, expandable, or drawer
  variant: 'expandable',
  // It can be either default, split, or nft
  subvariant: 'split',
  integrator: 'COMAI Bridge',
  // chains: {
  //   allow: [1, 130] // ETHEREUM, SOLANA
  // }
  tokens: {
    featured: [
      {
        address: '0xc78B628b060258300218740B1A7a5b3c82b3bd9f',
        symbol: 'wCOMAI',
        decimals: 18,
        chainId: 1,
        name: 'Wrapped Commune AI',
        logoURI: 'https://assets.coingecko.com/coins/images/35013/standard/Wrapped_Commune_AI.png?1707103767'
      }
    ]
  }
};

function App() {
  return (
    <>
      <div className='widget-container'>
        <LiFiWidget
          config={widgetConfig}
          integrator="COMAI Bridge"
        />  
      </div>
    </>
  );
}

export default App;