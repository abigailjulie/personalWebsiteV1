import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Error() {
   return (
    <div className="flex flex-col gap-2">
    <h1> 401 NOT Found</h1>
    <Link to='/home'>Home from Link</Link>
    </div>
   ) 
}