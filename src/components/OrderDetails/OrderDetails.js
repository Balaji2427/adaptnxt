import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SendIcon from "@mui/icons-material/Send";
import InputIcon from "@mui/icons-material/Input";
import CloseIcon from "@mui/icons-material/Close";

import "./OrderDetails.css";
import Sidebar from "../Sidebar";

const OrderDetails = () => (
  <div className="main-detail-container">
    <Sidebar />
    <button className="order-btn">
      Order <CloseIcon />
    </button>
    <div className="action-container">
      <p className="action-text pending">Pending</p>
      <p className="action-text">Accepted</p>
      <p className="action-text">AWB Created</p>
      <p className="action-text">Ready to Ship</p>
      <p className="action-text">Shipped</p>
      <p className="action-text">Completed</p>
      <p className="action-text">Cancelled</p>
    </div>
    <div className="detail-container">
      <div className="btn-container">
        <div className="btn-left">
          <button className="btn-detail">
            <InputIcon /> Import Orders
          </button>
          <button className="btn-detail" disabled>
            <SendIcon /> Accept
          </button>
          <button className="btn-detail" disabled>
            <PrintOutlinedIcon /> Print
          </button>
        </div>
        <button className="btn-refresh">
          <CachedOutlinedIcon /> Refresh
        </button>
      </div>
      <table className="table-container">
        <tr className="table-row table-start">
          <th className="plus-size"> </th>
          <th>
            <input type="checkbox" />
          </th>
          <th>Channel</th>
          <th>Order No</th>
          <th>Order Date</th>
          <th>City</th>
          <th>Customer Name</th>
          <th>Order Value</th>
          <th>Status</th>
          <th>Operation</th>
        </tr>
        <tr className="table-row">
          <td className="plus-size">
            <AddOutlinedIcon />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <img
              src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708279288/pngegg_aym63l.png"
              className="image-size"
              alt="shopify"
            />
          </td>
          <td>#TKN20203754</td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek Dixit</td>
          <td>0.00</td>
          <td style={{ backgroundColor: "lightgreen" }}>Pending</td>
          <td>Action</td>
        </tr>
        <tr className="table-row">
          <td className="plus-size">
            <AddOutlinedIcon />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <img
              src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708279288/pngegg_aym63l.png"
              className="image-size"
              alt="shopify"
            />
          </td>
          <td>#TKN20203754</td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek Dixit</td>
          <td>0.00</td>
          <td style={{ backgroundColor: "lightgreen" }}>Pending</td>
          <td>Action</td>
        </tr>
        <tr className="table-row">
          <td className="plus-size">
            <AddOutlinedIcon />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <img
              src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708279288/pngegg_aym63l.png"
              className="image-size"
              alt="shopify"
            />
          </td>
          <td>#TKN20203752</td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek Dixit</td>
          <td>0.00</td>
          <td style={{ backgroundColor: "lightgreen" }}>Pending</td>
          <td>Action</td>
        </tr>
      </table>
    </div>
  </div>
);

export default OrderDetails;
