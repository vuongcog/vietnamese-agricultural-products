import React, { useRef } from "react";
import { useState } from "react";
import { listUser } from "../../../../constants/listUser";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { clone } from "lodash";
import Tag from "../../Tag";
import classNames from "classnames";
const CrudList = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [isFetching, setFetching] = useState(false);
  // const [deleteOpend, setDeleteOpend] = useState([]);
  // const [isCheckedAll, setIsCheckedAll] = useState(false);
  // const [checkedItems, setCheckedItems] = useState([]);
  // const [isScollable, setIsScrollAble] = useState(false);
  // const [tableHeight, setTableHeight] = useState(600);

  // this.resizeObserver = null;
  // this.tableContainerRef = useRef();

  const {
    schema,
    classNameProps: { tableBodyRow },
  } = props;
  const _renderHeading = () =>
    schema.map((schemaItem) => {
      const cloned = { ...schemaItem };
      return (
        <th key={schemaItem.name || schemaItem.label} {...cloned}>
          <span>{schemaItem.label}</span>
        </th>
      );
    });

  const _renderColumn = (item) => {
    if (_.isEmpty(schema)) {
      return null;
    }
    return schema.map((schemaItem) => {
      const cloned = { ...schemaItem };

      let contentField = _.get(item, schemaItem.name) || schemaItem.default;

      if (schemaItem.component) {
        let dropdownActions = _.get(schemaItem, "dropdownActions.items", null);
        if (
          dropdownActions &&
          schemaItem.dropdownActions &&
          schemaItem.dropdownActions.filterItem
        ) {
          dropdownActions = _.filter(dropdownActions, (dropdownItem) =>
            schemaItem.dropdownActions.filterItem(item, dropdownItem)
          );
        }
        const visibleWhen = _.get(
          schemaItem,
          "dropdownActions.visibleWhen",
          null
        );

        return (
          <td key={schemaItem.name || schemaItem.label} {...cloned}>
            <Tag
              tagName={dropdownActions ? "div" : "Fragment"}
              className={classNames(
                styles["cell-actions"],
                styles[visibleWhen]
              )}
            >
              {schemaItem.component(item)}
              {dropdownActions && (
                <div
                  className={classNames("ml-auto", styles["dropdown-wrapper"])}
                >
                  {this.__renderOptionsColumn(
                    {
                      dropdownActions: Boolean(dropdownActions),
                      options: dropdownActions,
                    },
                    item,
                    "span"
                  )}
                </div>
              )}
            </Tag>
          </td>
        );
      }
      return (
        <td key={schemaItem.name || schemaItem.label} {...cloned}>
          <span>
            {schemaItem.formatDate
              ? schemaItem.formatDate(contentField)
              : contentField}
          </span>
        </td>
      );
    });
  };

  const _renderColumns = () => {
    const { items, isFetching } = props;
    if (!items.length && !isFetching) {
      return alert("Not data");
    }
    return items.map((item, index) => {
      return (
        <tr className={`${styles[`row-body`]} ${tableBodyRow}`} key={index}>
          {_renderColumn(item)}
        </tr>
      );
    });
  };

  //////////////
  return (
    <>
      <div className="h-[660px] rounded-md overflow-y-scroll">
        <table className={` ${styles.table}`}>
          <thead className={`${styles[`heading-container`]}`}>
            <tr className={`${styles[`row-heading`]}`}>{_renderHeading()}</tr>
          </thead>
          <tbody className={`${styles[`body-container`]}`}>
            {_renderColumns()}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};
CrudList.propTypes = {
  classNameProps: PropTypes.shape({
    tableBodyRow: PropTypes.string,
  }),
  items: PropTypes.any,
  isFetching: PropTypes.bool,
  schema: PropTypes.object,
};
CrudList.defaultProps = { items: listUser };
export default CrudList;
