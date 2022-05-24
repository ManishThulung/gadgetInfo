import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "../admin/Productlist.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "../admin/Sidebar";
import { useNavigate } from "react-router-dom";
import { deletePhone, getAdminProduct } from "../../redux/actions/phoneAction";
import { clearErrors } from "../../redux/actions/userAction";
import { DELETE_PHONE_RESET } from "../../redux/constants/constants";

const CreatorPhoneList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, phones } = useSelector((state) => state.phones);

  const { user } = useSelector((state) => state.user);

  // console.log(user._id);
  // console.log(phones[1].creator);
  // console.log(phones);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteUpdate
  );

  const deletePhoneHandler = (id) => {
    dispatch(deletePhone(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Phone Deleted Successfully");
      navigate("/creator/profile");
      dispatch({ type: DELETE_PHONE_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, navigate, isDeleted]);

  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "columnHeaders",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "company",
      headerName: "Company",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "price",
      headerName: "Price",
      headerClassName: "columnHeaders",
      type: "number",
      minWidth: 80,
      flex: 0.3,
    },

    {
      field: "actions",
      flex: 0.35,
      headerName: "Actions",
      headerClassName: "columnHeaders",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/creator/phone/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deletePhoneHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  if (phones) {
    for (let i = 0; i < phones.length; i++) {
      if (user._id === phones[i].creator) {
        console.log(phones[i].creator);
        console.log(phones[i]);
        // phones.forEach((item) => {
        // console.log(item);
        let item = phones[i];
        rows.push({
          id: item._id,
          company: item.company,
          price: item.price,
          name: item.name,
        });
        // });
      }
    }
  }

  return (
    <Fragment>
      <MetaData title={`ALL PHONES - Creator`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">PHONES</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CreatorPhoneList;
