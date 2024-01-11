import { WhatsAppSVG } from "@/app/utils/svg"

export const FooterDetail = () => {
    return (
        <div className="card-detail__footer">
            <p className="card-detail__footer__price">u$s400</p>
            <a className="card-detail__footer__wapp" href="#"> <WhatsAppSVG /> </a>
            <p className="card-detail__footer__week">Lun a Dom <br/> 10hs a 22hs </p>
        </div>
    )
}