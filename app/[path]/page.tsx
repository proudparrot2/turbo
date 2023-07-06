'use client';
import '../../styles/proxy.css';
import Script from 'next/script'



export default function Proxy({ params }: { params: { path: string } }) {
    function refresh() {
        const tab = {
            name: document.getElementById('tab-name'),
            img: document.getElementById('tab-img'),
        }
        const input = document.querySelector("input")
        if (!input) return;
        const url = `/service/${params.path}` || btoa(input.value)
        
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js', { scope: '/service' })
    }
    var frame = document.querySelector("iframe")
    if (!frame) return;

    frame.src = `/service/${params.path}`

    return (
       <>   
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
       </>
    )
}