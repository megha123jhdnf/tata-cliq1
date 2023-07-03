import React from 'react';
import ReactDOM from 'react-dom/client';


function Navbar(){
    class MyHeader extends React.Component {
        render() {
          return (
            <div>
               <h1>navi</h1>

            </div>
          );
        }
      }
      const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyHeader />);
}
export default Navbar;