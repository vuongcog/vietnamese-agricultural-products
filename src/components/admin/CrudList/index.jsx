import React, { useRef } from "react";
import { useState } from "react";
import { listUser } from "../../../constants/listUser";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { clone } from "lodash";
import Tag from "../../core/Tag";
import classNames from "classnames";
const CrudList = (props) => {
  // const [deleteOpend, setDeleteOpend] = useState([]);
  // const [isCheckedAll, setIsCheckedAll] = useState(false);
  // const [checkedItems, setCheckedItems] = useState([]);
  // const [isScollable, setIsScrollAble] = useState(false);
  // const [tableHeight, setTableHeight] = useState(600);

  // this.resizeObserver = null;
  // this.tableContainerRef = useRef();

  const { schema } = props;
  const _renderHeading = () =>
    schema.map((item) => {
      return <th key={item}>{item.label}</th>;
    });

  /////////////

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
        <td
          key={schemaItem}
          className="px-[12px] py-[12px] text-[13px] "
          {...cloned}
        >
          <span>{contentField}</span>
        </td>
      );
    });
  };

  const _renderColumns = () => {
    const { items, isFetching } = props;
    console.log(items);

    if (!items.length && !isFetching) {
      return alert("Not data");
    }
    return items.map((item, index) => {
      return (
        <tr className={`${styles[`row-body`]}`} key={item}>
          {_renderColumn(item)}
        </tr>
      );
    });
  };

  //////////////
  return (
    <>
      <div>
        <table className={`w-full ${styles.table}`}>
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
  items: PropTypes.any,
  isFetching: PropTypes.bool,
  schema: PropTypes.object,
};
CrudList.defaultProps = { items: listUser };
export default CrudList;
