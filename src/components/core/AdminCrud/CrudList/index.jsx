import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Tag from "../../Tag";
import classNames from "classnames";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import _ from "lodash";
import { nanoid } from "nanoid";

const CrudList = (props) => {
  const {
    items,
    schema,
    classNameProps: { tableBodyRow, tableHeaderRow },
  } = props;
  const __renderDropdown = (dropdownOptions, item) => {
    return dropdownOptions.map((option) => {
      const cb = _.get(option, "callback");
      const icon = _.get(option, "icon");
      const actionItem = () => {
        if (option.name === "export-excel") {
          cb(items, `file-bao-cao${nanoid()}.xlsx`);

          return;
        }
        cb(item);
      };
      return (
        <MenuItem
          className={styles["dropdown-item"]}
          key={option.name || option.label}
          color={"black"}
          onClick={actionItem}
        >
          <div className={styles["wrapper-item"]} onClick={cb}>
            {icon}
            <div className={styles.label}>{option.label}</div>
          </div>
        </MenuItem>
      );
    });
  };

  const __renderDropdownActions = (dropdownOptions, item, tagName) => {
    return (
      <Tag tagName={tagName} key="options">
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>{__renderDropdown(dropdownOptions, item)}</MenuList>
        </Menu>
      </Tag>
    );
  };

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
        return (
          <td key={schemaItem.name || schemaItem.label} {...cloned}>
            <Tag
              className="flex  items-center gap-2"
              tagName={dropdownActions ? "div" : "Fragment"}
            >
              {schemaItem.component(item)}
              {dropdownActions && (
                <div
                  className={classNames("ml-auto", styles["dropdown-wrapper"])}
                >
                  {__renderDropdownActions(dropdownActions, item, "span")}
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
    const { items } = props;
    if (_.isEmpty(items)) {
      console.log("true");
      return null;
    }
    return items.map((item, index) => {
      return (
        <tr className={classNames(styles["row-body"])} key={index}>
          {_renderColumn(item)}
        </tr>
      );
    });
  };

  return (
    <>
      <div
        className={classNames(
          "max-h-[500px] rounded-md overflow-y-scroll",
          styles.container
        )}
      >
        <table className={styles.table}>
          <thead
            className={classNames(styles["heading-container"], tableHeaderRow)}
          >
            <tr className={styles["row-heading"]}>{_renderHeading()}</tr>
          </thead>

          <tbody className={classNames(styles["body-container"], tableBodyRow)}>
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
    tableHeaderRow: PropTypes.string,
  }),
  items: PropTypes.any,
  isFetching: PropTypes.bool,
  schema: PropTypes.array,
};

export default CrudList;
