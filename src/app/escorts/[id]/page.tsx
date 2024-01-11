import { CardDetail } from "@/app/components/cardDetail"

type Props = {
    params: {
        id: string
    }
}
export default function Page( {params}: Props ) {
  return (
    <div className="container">
        <CardDetail />
    </div>
  )
}