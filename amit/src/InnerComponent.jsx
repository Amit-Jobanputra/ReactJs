import "./Amit.css";
export const InnerComponent = (porps) => {
    return (
        <>
<div
  style={{
    backgroundColor: 'white',
    padding: '4px',
    width: '150px',
    margin: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    borderRadius: '4px',
    display: 'inline-block',
    
  }}
  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)'}
  onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'}
>
  <div>
    <img
      src={porps.image}
      style={{ width: '30px', height: '24px', paddingTop: '4px', marginTop: '8px' }}
      alt=""
    />
  </div>
  <div
    style={{
      paddingTop: '12px',
      fontSize: '1.125rem',
      color: '#121334',
      fontWeight: '600',
      height: '120px',
    }}
  >
    <h4>{porps.name}</h4>
  </div>
  <div style={{ textAlign: 'justify', fontSize: '1rem', color: '#121334' }}>
    <a href="#" style={{ color: '#0f62fe' }}>Learn More -&gt;</a>
  </div>
</div>


        </>
    );
}