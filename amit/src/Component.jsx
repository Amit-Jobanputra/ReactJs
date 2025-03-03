import "./Amit.css";
import { InnerComponent } from "./InnerComponent";
export const Component = () => {
  return (
    <>
<div style={{ backgroundColor: 'white', marginTop: '50px' }}>
  <div>
    <h1 style={{ fontWeight: '600', fontSize: '1.875rem' }}>
      Learn on the Go: Programiz for iOS & Android
    </h1>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
        padding: '10px'
      }}
    >
      <div style={{ width: '300px', textAlign: 'justify', fontSize: '1.25rem' }}>
        <p>
          Take your learning on the go with our highly rated iOS and Android
          apps—perfect for practicing during your commute or coffee break.
        </p>

        <div style={{ display: 'flex' }}>
          <img src="/play.png" style={{ width: '130px', height: '35px' }} alt="Play Store" />
          <img src="/apps.png" style={{ width: '130px', height: '35px' }} alt="App Store" />
        </div>
      </div>

            <InnerComponent name="Learn Pthyon App" image="p.png"/>
            <InnerComponent name="Learn C Programming App" image="c.png"/>
            <InnerComponent name="Learn Java App" image="j.png"/>
            <InnerComponent name="Learn C++ App" image="c++.png"/>
          </div>
        </div>
      </div>
    </>
  );
};
