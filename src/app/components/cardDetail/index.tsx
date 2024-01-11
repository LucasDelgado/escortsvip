'use client'
import { Carousel } from "../carousel"
import { NavTab } from "../navTab"
import { FooterDetail } from "./footer"
import './style.css'

export const CardDetail = () => {
    return (
        <article className="card-detail">
            <p className="card-detail__breadcumb">Inicio - Buenos Aires - CABA</p>
            <div className="card-detail__main">
                <span  className="card-detail__main__flag">🇨🇴</span>
                <h2 className="card-detail__main__name">Juliana</h2>
            </div>
            <div className="card-images">
                <Carousel />
            </div>
            <NavTab />
            <FooterDetail />
        </article>
    )
}