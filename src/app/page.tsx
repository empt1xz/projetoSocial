import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="card">
        <section>
          <FaStar color="orange" className="star" size={20}/>
        </section>
        <article> 
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated! to help us improve our offering!</p>
        </article>
      </div>
    </main>
  );
}
