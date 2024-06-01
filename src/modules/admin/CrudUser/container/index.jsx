import React from "react";
import CrudList from "../../../../components/admin/CrudList";
import UserName from "../components/UserName";

const User = () => {
  const CrudOptions = {
    schema: [
      {
        name: "id",
        label: "Id",
        default: "N/A",
      },
      {
        name: "name",
        label: "Name",
        default: "N/A",
        component: UserName,
      },
      {
        name: "email",
        label: "Email",
        default: "N/A",
      },
      {
        name: "email_verified_at",
        label: "Email verified at",
        default: "N/A",
      },
      {
        name: "created_at",
        label: "Created at",
        default: "N/A",
      },
      {
        name: "updated_at",
        label: "Updated at",
        default: "n/A",
      },
    ],
  };
  return (
    <div>
      <CrudList schema={CrudOptions.schema}></CrudList>
    </div>
  );
};

export default User;
