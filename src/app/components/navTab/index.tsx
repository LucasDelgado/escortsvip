import { useState } from 'react';

export const NavTab = () => {
    const [activeIndex, setActiveIndex] = useState('detalles');

    const info = {
        'detalles': <div className='detail'>
                        <div className="card-detail__age">
                            <p>Edad</p>
                            <p>19 años</p>
                        </div>
                        
                        <div className="card-detail__height">
                            <p>Estatura</p>
                            <p>166cm</p>
                        </div>
                        <div className="card-detail__type">
                            <p>Profesion</p>
                            <p>Masajista</p>
                        </div>
                       <div>
                        <p>Especiales</p>
                        <ul className="card-detail__tags">
                            <li>BDSM</li>
                            <li>Roles</li>
                            <li>trios</li>
                        </ul>
                       </div>
                    </div>,
        'quienSoy': <div className='quien_soy'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus amet eaque illum odio
                            quis fuga. Reiciendis quibusdam laboriosam eligendi quos consequatur veniam, hic ad numquam,
                            porro dolore animi nulla sequi.
                        </p>
                    </div>
    }

    const menu = [
        {
            title: 'Detalles',
            index: 'detalles'
        },
        {
            title: 'Quien soy',
            index: 'quienSoy'
        }
    ]

    return (
        <div className="card-detail__navTab">
            <ul className="card-detail__navTab__menu">
                {
                    menu.map((item, i) => (
                        <li key={i} 
                            className={`card-detail__navTab__menu__item ${activeIndex === item.index ? 'active' : ''}`} 
                            onClick={() => setActiveIndex(item.index)}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
            <div className="card-detail__navTab__descrip">
                { info[activeIndex] }
            </div>
        </div>
    )
}