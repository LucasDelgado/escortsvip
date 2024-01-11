import { Card } from './components/card'

export default function Home() {
  return (
    <div className="container">
      <section className="grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} />
        ))}
      </section>  
    </div>  
  )
}
