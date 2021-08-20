import { Link } from "react-router-dom";
import "./Places.css";
const Places = ({ data }) => {
  const list = data.map((each) => {
    const url = `/places/${each.id}`;
    return (
      <tr className="table">
        <td>{each.id}</td>
        <td>
          <Link to={url}>
            <h5>{each.name}</h5>
          </Link>
        </td>
        <td>
          <a href={each.website_url}>{each.website_url}</a>
        </td>
        <td>{each.address}</td>
      </tr>
    );
  });
  return (
    <div className="places">
      <h1>Places Page</h1>
      <table className="business-container">
        <tr className="table">
          <th>Business ID</th>
          <th>Business Name</th>
          <th>Business URL</th>
          <th>Business Address</th>
        </tr>
        {list}
      </table>
    </div>
  );
};

export default Places;
