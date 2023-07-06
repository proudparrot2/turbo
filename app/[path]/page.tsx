'use client';
import '../../styles/proxy.css';



export default function Proxy({ params }: { params: { path: string } }) {
    function refresh() {
        const tab = {
            name: document.getElementById('tab-name'),
            img: document.getElementById('tab-img'),
        }
        
    }

    return (
       <section className="proxy">
            <div className="url-bar">
                <div className="tab-info">
                    <img className="tab-img" src="https://via.placeholder.com/150" id="tab-img" />
                    <p id="tab-name">{params.path}</p>
                </div>

                <input id="input" type="text" />
            </div>

            <iframe onLoad={refresh}></iframe>
       </section>
    )
}