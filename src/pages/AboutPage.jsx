import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
        </div>
        <p>
          <Link to='/' >Back To Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage