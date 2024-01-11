import Image from 'next/image'
import './style.css'
import Link from 'next/link'
export const Card = () => {
    return (
        <Link href="/escorts/[id]" as={`/escorts/${123}`}>
            <article className='card'>
                {/* <Image src='https://picsum.photos/221/320' width={221} height={320} alt="sd" /> */}
                <div className="card__gradient"></div>
                <div className="card__descrip">
                    <h3 className="card__name">Juliana</h3>
                    <p className="card__address">Puerto Madero</p>
                    <p className="card__age">19 años</p>
                    <p className='card__price'> <span>u$s</span>400</p>
                </div>
            </article>
        </Link>
    )
}